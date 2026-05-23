import nodemailer, { type Transporter } from "nodemailer";

let cached: Transporter | null = null;

function readEnv(name: string, required = true): string {
  const v = process.env[name];
  if (!v && required) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return v ?? "";
}

export function getTransporter(): Transporter {
  if (cached) return cached;

  const host = readEnv("SMTP_HOST");
  const port = Number(readEnv("SMTP_PORT"));
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const secure =
    (process.env.SMTP_SECURE ?? "").toLowerCase() === "true" || port === 465;

  cached = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return cached;
}

export function getMailRecipients() {
  return {
    from: readEnv("SMTP_FROM"),
    to: readEnv("CONTACT_TO"),
  };
}
