export interface Env {
  cschatbot: Ai;
}

const SYSTEM_PROMPT = `You are the AI assistant for Close Safely, a secure transaction platform for real estate brokers and borrowers.

Close Safely gives brokers and borrowers a shared, transparent space to move through transactions with clarity and finish with confidence. Key facts:
- $2.4B+ in transactions secured, 18K+ active brokers, 99.9% platform uptime, 0 unresolved fraud cases
- Security: AES-256 encryption, SOC 2 Type II certified, TLS 1.3 in transit, end-to-end encrypted, immutable audit trail, role-based access
- Transparency: both parties see the same real-time view, full action history, shared document access
- Efficiency: guided step-by-step flow, automated status updates
- Trust Framework: dual-confirmation close, neutral platform design, dispute-ready records
- Pricing: no hidden fees
- Get started at closesafely.com/signup (free to start)

Keep responses helpful, concise, and professional. If you don't know something specific, offer to connect them with the team via the contact page. Do not make up pricing, legal, or compliance details you are unsure of.`;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
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

    const messages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .slice(-10)
        .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
      { role: 'user', content: message.trim() },
    ];

    const result = await env.cschatbot.run('@cf/meta/llama-3.1-8b-instruct', {
      messages,
      max_tokens: 512,
    });

    const reply =
      typeof result === 'object' && result !== null && 'response' in result
        ? String((result as { response: string }).response)
        : 'Sorry, I was unable to generate a response.';

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  },
} satisfies ExportedHandler<Env>;
