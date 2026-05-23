# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **ITPL Cloud** (a brand of Inclusione Technologies), pitching hosting, cloud, domain, messaging, and security services. Built with Next.js 15 (App Router, TypeScript) and deployed to Vercel. The contact form sends mail via Nodemailer SMTP to `info@inclusionetechnologies.com`.

The original single-file demo lives in `design-reference/index.html` and is intentionally preserved as a visual reference — it is excluded from TypeScript compilation and is not served by Next.js.

## Commands

```bash
npm install          # install dependencies
npm run dev          # start the dev server on http://localhost:3000
npm run build        # production build — also runs type checking
npm start            # serve the production build
npm run lint         # next lint
```

Before the contact form can send mail, copy `.env.example` to `.env.local` and fill in real SMTP credentials. The same variables must be set in the Vercel project dashboard for preview and production.

## Architecture

### Routes (App Router, all server components except where noted)

- `app/page.tsx` — Home (hero, why-us grid, services preview, testimonials)
- `app/about/page.tsx` — About page
- `app/services/page.tsx` — Services list, grouped by category
- `app/services/[slug]/page.tsx` — Service detail page, statically generated for every entry in `lib/services.ts` via `generateStaticParams`
- `app/careers/page.tsx` — Careers + open positions
- `app/contact/page.tsx` — Contact page (renders the `ContactForm` client component)
- `app/contact/actions.ts` — `"use server"` action `submitContact` that validates input, runs the honeypot check, and emails the site owner
- `app/layout.tsx` — Root layout that loads Google Fonts and renders `<Navbar />`, `<Ticker />`, `{children}`, `<Footer />`

### Shared components (`components/`)

- `Navbar.tsx` — **client component**; manages scroll-state class and mobile menu open/close.
- `Footer.tsx` — server component.
- `Ticker.tsx` — server component; pure presentational marquee.
- `ContactForm.tsx` — **client component**; uses `useActionState` + `useFormStatus`, reads `?role=` from `useSearchParams` so career "Apply →" links prefill the message. Must be wrapped in `<Suspense>` by its parent because of `useSearchParams`.

### Data layer (`lib/`)

- `lib/services.ts` — single source of truth for all 16 services. Each entry holds slug, category, copy, plan groups, and/or feature cards. The Services list page and every detail page are driven entirely by this file. **When adding or editing a service, only this file needs to change** — both the list page and the detail page pick it up automatically (re-run `npm run build` to refresh `generateStaticParams`).
- `lib/mailer.ts` — lazy Nodemailer transporter. Reads `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO`. Throws if a required var is missing at first send.

### Styles

All styling lives in `app/globals.css` as plain CSS (no Tailwind, no CSS Modules). Design tokens are CSS custom properties on `:root` — `--yellow`, `--dark`, etc. The class names mirror the original demo so visual fidelity with `design-reference/index.html` is preserved. Two Google Fonts are loaded in `app/layout.tsx`: Exo 2 (headings) and Space Grotesk (body).

### Contact form — how mail actually gets sent

1. `ContactForm` (client) posts a `FormData` to the `submitContact` server action.
2. `submitContact` validates required fields, runs a honeypot check on the hidden `company` field (silently returns success on bot submissions), then composes a plain-text + HTML email.
3. It calls `getTransporter()` from `lib/mailer.ts` and sends to `CONTACT_TO`, with the visitor's email as `replyTo` so replies go straight back to them.
4. The action returns a typed `ContactFormState` that the form renders inline as a success or error banner.

If you need to change the recipient, edit `CONTACT_TO` in `.env.local` and on Vercel — not the source code.

## Editing conventions

- **Add a service:** append an entry to `services` in `lib/services.ts`. If it has tiered plans, fill `planGroups`; if it's better shown as feature cards, fill `featureCards` instead (or both). The slug becomes the URL at `/services/<slug>`.
- **Add a nav link or footer link:** edit `components/Navbar.tsx` and/or `components/Footer.tsx`. Use Next's `Link`, not `<a>`, for in-app navigation.
- **Add a top-level page:** create `app/<name>/page.tsx`, add it to the `links` array in `Navbar.tsx`.
- Keep `design-reference/index.html` as a read-only reference — don't import from it and don't sync changes back into it.
- The contact form sends nothing in `npm run dev` unless `.env.local` has real SMTP credentials — that's expected.
