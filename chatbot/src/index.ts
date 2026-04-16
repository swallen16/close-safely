export interface Env {
  GEMINI_API_KEY: string;
}

const SYSTEM = `You are the AI assistant for Close Safely. You are friendly, calm, and concise.

About Close Safely:
Close Safely is a secure transaction platform for brokers and borrowers. It gives both parties a shared, transparent space to move through real estate transactions with clarity and finish with confidence. Every step is visible, every expectation is documented, and neither party operates in the dark. The platform is end-to-end encrypted (AES-256), SOC 2 Type II certified, and uses TLS 1.3 in transit. Key features include live status for both sides, a full action history, shared document access, a guided step-by-step flow, automated status updates, dual-confirmation close, and dispute-ready records. It has secured over $2.4B in transactions and is trusted by 18K+ active brokers. There are no hidden fees.

Rules:
- Keep responses to 1-2 sentences.
- Answer the user's question naturally and helpfully.
- Do NOT list features or steps unless directly asked.
- Do NOT repeat yourself across responses.
- Do NOT act like a salesperson.

Handling unclear or off-topic input:
- If the message is unclear, nonsensical, or unrelated to Close Safely, respond warmly: ask what they'd like to know about Close Safely. Never say "I cannot answer that."
- If the user seems frustrated or confused, acknowledge it and offer to help.

Behavior:
- Be direct, warm, and helpful.
- If the user shows intent to sign up or log in, provide the correct link.
- Otherwise, do not push links or actions unprompted.

Links:
- Sign up: https://app.closesafely.ai/register/
- Log in: https://app.closesafely.ai/login

Plain text only. No markdown, no bullet points.`;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function clean(raw: string): string {
  const stripped = raw
    .split('\n')
    .map((line) => line.replace(/^\s*([-*#]|\d+[.):])\s*/, '')) // convert list markers to plain text
    .join(' ')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$2')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return stripped
    .replace(
      /https?:\/\/(?!app\.closesafely\.ai)[^\s]*closesafely[^\s]*/gi,
      'https://app.closesafely.ai/register/'
    )
    .replace(
      /(?<!app\.)closesafely\.com[^\s]*/gi,
      'https://app.closesafely.ai/register/'
    );
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/') {
      return new Response('OK. POST JSON to /chat', { status: 200, headers: CORS_HEADERS });
    }

    if (url.pathname !== '/chat') {
      return new Response('Not found', { status: 404, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: CORS_HEADERS });
    }

    let body: { message?: string; history?: { role: string; content: string }[] };
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const { message, history = [] } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return new Response(JSON.stringify({ error: 'message is required' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    // Gemini requires strictly alternating user/model turns starting with user
    const recentHistory = history
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .slice(-4)
      .reduce<{ role: string; content: string }[]>((acc, m) => {
        const geminiRole = m.role === 'assistant' ? 'model' : 'user';
        if (acc.length > 0 && acc[acc.length - 1].role === geminiRole) return acc; // skip duplicate role
        acc.push({ role: geminiRole, content: m.content });
        return acc;
      }, []);

    // Ensure history starts with a user turn
    const trimmedHistory = recentHistory[0]?.role === 'user' ? recentHistory : recentHistory.slice(1);

    const contents = [
      ...trimmedHistory.map((m) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
      { role: 'user', parts: [{ text: message.trim() }] },
    ];

    let raw: string;
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM }] },
            contents,
            generationConfig: { maxOutputTokens: 250, temperature: 0.2 },
          }),
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Gemini ${res.status}: ${errText}`);
      }

      const data = await res.json() as {
        candidates?: { content?: { parts?: { text?: string }[] } }[];
      };

      raw = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
      if (!raw) throw new Error('Empty response');
    } catch (err) {
  console.error("Gemini FULL ERROR:", err);

  return new Response(
    JSON.stringify({ reply: "I'm having trouble connecting right now. Please try again in a moment." }),
    { status: 200, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
  );
}

    return new Response(JSON.stringify({ reply: clean(raw) }), {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  },
};

export default worker;
