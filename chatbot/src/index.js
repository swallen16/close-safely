const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Friendly root check
    if (request.method === "GET" && url.pathname === "/") {
      return new Response("OK. POST JSON to /chat", { status: 200, headers: corsHeaders });
    }

    // Only allow POST /chat
    if (url.pathname !== "/chat") {
      return new Response("Not found", { status: 404, headers: corsHeaders });
    }
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400);
    }

    const message = String(body?.message || "").trim();
    const history = Array.isArray(body?.history) ? body.history.slice(-10) : [];

    if (!message) {
      return json({ reply: "Please type a message so I can help." });
    }

    const SYSTEM = `You are Close Safely's website assistant.
Be concise, helpful, and professional.
Keep replies SHORT: 1–2 sentences max.
IMPORTANT CONVERSATION RULES:
- Do NOT greet or re-introduce yourself after the first assistant message.
- If the user says "Yes" or "No", treat it as answering your previous question and continue naturally.
- Ask one brief clarifying question if needed.

Answer only about Themis Lending (solutions, risk/compliance, blog, contact/consultations).
If asked for pricing, say it depends and suggest contacting the team.`;

    const messages = [
      { role: "system", content: SYSTEM },
      ...history
        .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .map((m) => ({ role: m.role, content: m.content })),
      { role: "user", content: message },
    ];

    try {
      const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
        messages,
        temperature: 0.25,
        max_tokens: 140,
      });

      const reply =
        result?.response ||
        result?.result?.response ||
        result?.output_text ||
        "Sorry â€” I couldnâ€™t generate a reply.";

      return json({ reply });
    } catch (e) {
      return json({
        reply:
          "Chat is temporarily unavailable right now. Please try again, or contact our team via the Contact page.",
      });
    }
  },
};

