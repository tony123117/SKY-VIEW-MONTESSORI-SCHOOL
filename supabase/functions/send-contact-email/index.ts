// Edge function: send-contact-email
// Forwards Brain Child contact-form submissions to info@brainchildintschools.com via Resend.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const TO_EMAIL = "info@brainchildintschools.com";
const FROM_EMAIL = "Brain Child Website <onboarding@resend.dev>";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

interface ContactBody {
  user_name?: string;
  user_email?: string;
  child_name?: string;
  user_phone?: string;
  message?: string;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      console.error("Missing API keys");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const body = (await req.json()) as ContactBody;
    const user_name = (body.user_name || "").trim();
    const user_email = (body.user_email || "").trim();
    const child_name = (body.child_name || "").trim();
    const user_phone = (body.user_phone || "").trim();
    const message = (body.message || "").trim();

    if (!user_name || !user_email || !user_phone || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ec4899;">New Enrolment Inquiry</h2>
        <table style="width:100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding:8px; background:#fdf2f8;"><strong>Parent</strong></td><td style="padding:8px;">${escapeHtml(user_name)}</td></tr>
          <tr><td style="padding:8px; background:#fdf2f8;"><strong>Child</strong></td><td style="padding:8px;">${escapeHtml(child_name) || "-"}</td></tr>
          <tr><td style="padding:8px; background:#fdf2f8;"><strong>Email</strong></td><td style="padding:8px;">${escapeHtml(user_email)}</td></tr>
          <tr><td style="padding:8px; background:#fdf2f8;"><strong>Phone</strong></td><td style="padding:8px;">${escapeHtml(user_phone)}</td></tr>
        </table>
        <h3 style="margin-top: 24px; color: #334155;">Message</h3>
        <p style="background:#f8fafc; padding:16px; border-radius:8px; white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr style="margin: 24px 0; border:none; border-top:1px solid #e2e8f0;" />
        <p style="font-size:12px; color:#94a3b8;">Sent from brainchildintschools.com contact form</p>
      </div>
    `;

    const resendRes = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: user_email,
        subject: `New inquiry from ${user_name}`,
        html,
      }),
    });

    const data = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ ok: true, id: data?.id ?? null }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
