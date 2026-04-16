/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: CORS_HEADERS });
    }

    try {
      const data = await request.json();

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Support <support@themislending.com>",
          to: "support@themislending.atlassian.net",
          subject: `New Support Request from ${data.name}`,
          html: `
            <h2>New Support Request</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Message:</strong><br/> ${data.message}</p>
          `
        })
      });

      const result = await response.text();

      if (!response.ok) {
        console.error("Resend API error:", response.status, result);
        return new Response(`Email send failed: ${result}`, { status: 502, headers: CORS_HEADERS });
      }

      return new Response(result, { status: 200, headers: CORS_HEADERS });

    } catch (error) {
      console.error("Contact worker error:", error);
      return new Response(`Internal Server Error: ${error.message}`, { status: 500, headers: CORS_HEADERS });
    }
  }
};