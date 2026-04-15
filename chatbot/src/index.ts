export interface Env {
  GEMINI_API_KEY: string;
}

const SYSTEM = `You are the AI assistant for Close Safely.

Rules:
- One sentence only. Never more.
- Answer ONLY the user's exact question.
- Do NOT explain the platform unless asked.
- Do NOT list features, benefits, or steps unless asked.
- Do NOT repeat yourself across responses.
- Do NOT act like a salesperson.

Behavior:
- Be direct, calm, and helpful.
- If the user shows intent (e.g. wants to sign up), then provide the correct link.
- Otherwise, do not push links or actions.

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
    .filter((line) => !/^\s*([-*#]|\d+[.)])/.test(line))
    .join(' ')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$2')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const corrected = stripped
    .replace(
      /https?:\/\/(?!app\.closesafely\.ai)[^\s]*closesafely[^\s]*/gi,
      'https://app.closesafely.ai/register/'
    )
    .replace(
      /(?<!app\.)closesafely\.com[^\s]*/gi,
      'https://app.closesafely.ai/register/'
    );

  const match = corrected.match(/^[^.!?]+[.!?]/);
  if (match) return match[0].trim();

  const words = corrected.split(' ');
  let out = '';
  for (const word of words) {
    if ((out + ' ' + word).length > 140) break;
    out += (out ? ' ' : '') + word;
  }
  return out.trim();
}

export default {
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
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM }] },
            contents,
            generationConfig: { maxOutputTokens: 80, temperature: 0.2 },
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
    JSON.stringify({ reply: String(err) }),
    { status: 200, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
  );
}

    return new Response(JSON.stringify({ reply: clean(raw) }), {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  },
};
