"use server";

import { getMailRecipients, getTransporter } from "@/lib/mailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const MAX_LEN = {
  name: 100,
  email: 254,
  phone: 40,
  service: 120,
  message: 5000,
};

function clean(value: FormDataEntryValue | null, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot — bots typically fill every field. Humans never see this.
  if (clean(formData.get("company"), 100) !== "") {
    return { status: "success", message: "Thank you! We will get back to you within 24 hours." };
  }

  const firstName = clean(formData.get("firstName"), MAX_LEN.name);
  const lastName  = clean(formData.get("lastName"),  MAX_LEN.name);
  const email     = clean(formData.get("email"),     MAX_LEN.email);
  const phone     = clean(formData.get("phone"),     MAX_LEN.phone);
  const service   = clean(formData.get("service"),   MAX_LEN.service);
  const message   = clean(formData.get("message"),   MAX_LEN.message);

  if (!firstName || !lastName) {
    return { status: "error", message: "Please share your first and last name." };
  }
  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!message || message.length < 5) {
    return { status: "error", message: "Please add a short message so we can help." };
  }

  try {
    const { from, to } = getMailRecipients();
    const transporter = getTransporter();

    const subject = `New website enquiry – ${firstName} ${lastName}${service ? ` (${service})` : ""}`;

    const textLines = [
      `New enquiry from the ITPL Cloud website`,
      `─────────────────────────────────────────`,
      ``,
      `Name:    ${firstName} ${lastName}`,
      `Email:   ${email}`,
      `Phone:   ${phone || "(not provided)"}`,
      `Service: ${service || "(not selected)"}`,
      ``,
      `Message`,
      `─────────────────────────────────────────`,
      message,
      ``,
      `─────────────────────────────────────────`,
      `Reply directly to this email to respond to ${firstName}.`,
      `Sent from itplcloud.com contact form · ${new Date().toUTCString()}`,
    ];

    const safeFirst   = escapeHtml(firstName);
    const safeLast    = escapeHtml(lastName);
    const safeEmail   = escapeHtml(email);
    const safePhone   = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service || "Not selected");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const sentAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>New website enquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0A0A0A;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      New website enquiry from ${safeFirst} ${safeLast} — ${safeService}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f5f7;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(10,10,10,0.06);">
            <!-- HEADER -->
            <tr>
              <td style="background:#0A0A0A;padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;color:#FFD700;text-transform:uppercase;">
                      ITPL Cloud
                    </td>
                    <td align="right" style="font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;color:#9a9a9a;letter-spacing:0.5px;">
                      ${escapeHtml(sentAt)} IST
                    </td>
                  </tr>
                </table>
                <h1 style="margin:18px 0 6px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:26px;line-height:1.2;font-weight:700;color:#ffffff;">
                  New website enquiry
                </h1>
                <p style="margin:0;font-size:14px;line-height:1.5;color:#cfcfcf;">
                  ${safeFirst} ${safeLast} just reached out via the contact form.
                </p>
              </td>
            </tr>

            <!-- ACCENT BAR -->
            <tr><td style="background:#FFD700;height:4px;line-height:4px;font-size:0;">&nbsp;</td></tr>

            <!-- SERVICE BADGE -->
            <tr>
              <td style="padding:24px 32px 0;">
                <span style="display:inline-block;background:#FFF7C5;color:#7A5A00;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:6px 12px;border-radius:999px;">
                  Interested in · ${safeService}
                </span>
              </td>
            </tr>

            <!-- CONTACT DETAILS -->
            <tr>
              <td style="padding:18px 32px 8px;">
                <h2 style="margin:0 0 12px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:1.5px;color:#6b7280;text-transform:uppercase;">
                  Contact details
                </h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #ececec;border-radius:10px;overflow:hidden;">
                  <tr>
                    <td width="110" style="padding:14px 16px;background:#fafafa;font-size:12px;font-weight:600;letter-spacing:0.5px;color:#6b7280;text-transform:uppercase;border-bottom:1px solid #ececec;">Name</td>
                    <td style="padding:14px 16px;font-size:15px;font-weight:600;color:#0A0A0A;border-bottom:1px solid #ececec;">${safeFirst} ${safeLast}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;background:#fafafa;font-size:12px;font-weight:600;letter-spacing:0.5px;color:#6b7280;text-transform:uppercase;border-bottom:1px solid #ececec;">Email</td>
                    <td style="padding:14px 16px;font-size:15px;color:#0A0A0A;border-bottom:1px solid #ececec;"><a href="mailto:${safeEmail}" style="color:#0A0A0A;text-decoration:none;border-bottom:1px solid #FFD700;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;background:#fafafa;font-size:12px;font-weight:600;letter-spacing:0.5px;color:#6b7280;text-transform:uppercase;border-bottom:1px solid #ececec;">Phone</td>
                    <td style="padding:14px 16px;font-size:15px;color:#0A0A0A;border-bottom:1px solid #ececec;">${phone ? `<a href="tel:${safePhone}" style="color:#0A0A0A;text-decoration:none;border-bottom:1px solid #FFD700;">${safePhone}</a>` : `<span style="color:#9ca3af;">${safePhone}</span>`}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;background:#fafafa;font-size:12px;font-weight:600;letter-spacing:0.5px;color:#6b7280;text-transform:uppercase;">Service</td>
                    <td style="padding:14px 16px;font-size:15px;color:#0A0A0A;">${safeService}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- MESSAGE -->
            <tr>
              <td style="padding:20px 32px 0;">
                <h2 style="margin:0 0 12px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:1.5px;color:#6b7280;text-transform:uppercase;">
                  Message
                </h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fafafa;border:1px solid #ececec;border-left:4px solid #FFD700;border-radius:10px;">
                  <tr>
                    <td style="padding:18px 20px;font-size:15px;line-height:1.65;color:#1f2937;">
                      ${safeMessage}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td align="center" style="padding:28px 32px 8px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="border-radius:8px;background:#0A0A0A;">
                      <a href="mailto:${safeEmail}?subject=Re:%20Your%20enquiry%20to%20ITPL%20Cloud" style="display:inline-block;padding:14px 26px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#FFD700;text-decoration:none;letter-spacing:0.5px;">
                        Reply to ${safeFirst} →
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="margin:14px 0 0;font-size:12px;color:#9ca3af;">
                  Or just hit Reply — it goes straight to ${safeFirst}.
                </p>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding:28px 32px;border-top:1px solid #ececec;background:#fafafa;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="font-size:12px;line-height:1.6;color:#6b7280;">
                      <strong style="color:#0A0A0A;">ITPL Cloud</strong> · A brand of Inclusione Technologies<br>
                      Sent automatically from the <a href="https://itplcloud.com/contact" style="color:#6b7280;text-decoration:underline;">itplcloud.com</a> contact form.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <p style="margin:16px 0 0;font-size:11px;color:#9ca3af;">
            🇮🇳 Noida, India · 🇺🇸 California, USA
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    await transporter.sendMail({
      from,
      to,
      replyTo: `${firstName} ${lastName} <${email}>`,
      subject,
      text: textLines.join("\n"),
      html,
    });

    return {
      status: "success",
      message: "Thank you! Your message has been sent — our team will reply within 24 hours.",
    };
  } catch (err) {
    console.error("contact form send failed:", err);
    return {
      status: "error",
      message:
        "Sorry, we couldn't send your message right now. Please try again or email vijay.itplcloud@gmail.com directly.",
    };
  }
}
