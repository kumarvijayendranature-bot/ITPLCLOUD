"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { submitContact, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

const HOSTING = [
  "Linux Shared Hosting",
  "Windows Shared Hosting",
  "WordPress Hosting",
  "Reseller Hosting",
  "VPS Linux",
  "VPS Windows",
  "Cloud Hosting",
  "Dedicated Server",
  "GPU Server",
];
const DOMAIN_SECURITY = [
  "Domain Registration",
  "SSL Certificate",
  "Website Security",
];
const MESSAGING = [
  "WhatsApp API",
  "Bulk Email",
  "Bulk SMS",
  "RCS Messages",
  "Google Workspace",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="form-submit" disabled={pending}>
      {pending ? "Sending…" : "Send Message →"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const searchParams = useSearchParams();
  const role = searchParams.get("role") ?? "";
  const initialMessage = role ? `I'd like to apply for: ${role}\n\n` : "";

  return (
    <form action={formAction} noValidate>
      {/* Honeypot — hidden from real users via styling + autocomplete off */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label>
          Company (leave blank)
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Rajesh"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Kumar"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@yourcompany.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Interested In</label>
        <select id="service" name="service" defaultValue={role ? "Career Inquiry" : ""}>
          <option value="">Select a service...</option>
          <optgroup label="Hosting">
            {HOSTING.map((s) => <option key={s}>{s}</option>)}
          </optgroup>
          <optgroup label="Domain & Security">
            {DOMAIN_SECURITY.map((s) => <option key={s}>{s}</option>)}
          </optgroup>
          <optgroup label="Messaging">
            {MESSAGING.map((s) => <option key={s}>{s}</option>)}
          </optgroup>
          <option>Career Inquiry</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project or requirements..."
          defaultValue={initialMessage}
        />
      </div>

      <SubmitButton />

      {state.status !== "idle" && state.message && (
        <div className={`form-status ${state.status}`} role="status">
          {state.message}
        </div>
      )}
    </form>
  );
}
