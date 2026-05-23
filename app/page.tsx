import Link from "next/link";

const trustBadges = [
  { icon: "🟦", label: "Microsoft Partner" },
  { icon: "✅", label: "Meta-Approved WhatsApp BSP" },
  { icon: "🔵", label: "Google Workspace Reseller" },
  { icon: "🌐", label: "ICANN-Accredited Registrar" },
  { icon: "📋", label: "TRAI DLT Compliant" },
  { icon: "🛡️", label: "24/7 NOC in Noida & CA" },
];

const whyCards = [
  { num: "01", icon: "⚡", title: "99.99% Uptime SLA",          desc: "Redundant power, dual-carrier networking, and N+1 hardware — written into the contract, not just the brochure." },
  { num: "02", icon: "🛡️", title: "Hardened Security",          desc: "Always-on DDoS mitigation, daily malware scans, and a managed WAF that covers the OWASP Top 10 by default." },
  { num: "03", icon: "📊", title: "Modern Control Panel",       desc: "cPanel and Plesk for hosting, a unified dashboard for domains, email, SSL, and billing — no juggling logins." },
  { num: "04", icon: "🎯", title: "24/7 Engineers, Not Tier-1", desc: "Tickets are answered by people who can actually fix things — average first response under 15 minutes." },
  { num: "05", icon: "🌐", title: "India + USA Data Centers",   desc: "Pick the region closest to your users. Low-latency routes to APAC, the Middle East, and North America." },
  { num: "06", icon: "💾", title: "Automated Daily Backups",    desc: "Off-host nightly snapshots with one-click restore — included on every paid plan, never an add-on." },
  { num: "07", icon: "📈", title: "Scale Without a Migration",  desc: "Move from shared → VPS → dedicated → cloud without changing providers, panels, or DNS records." },
  { num: "08", icon: "💰", title: "Honest, INR-First Pricing",  desc: "Predictable monthly billing in rupees. No bandwidth-bill surprises, no aggressive auto-renewals." },
];

const previewServices = [
  { slug: "hosting",   icon: "🖥️", title: "Linux Shared Hosting", desc: "cPanel, NVMe SSD, free SSL — ready in under 5 minutes.",            priceFrom: "₹192" },
  { slug: "vps",       icon: "🖧",  title: "VPS Hosting",          desc: "Full-root Linux or Windows VPS with guaranteed CPU, RAM, and SSD.",  priceFrom: "₹799" },
  { slug: "cloud",     icon: "☁️", title: "Custom Cloud",         desc: "Auto-scaling instances with private networking and block storage.",  priceFrom: "Custom" },
  { slug: "dedicated", icon: "⚡", title: "Dedicated Servers",     desc: "Bare-metal Linux or Windows hardware with IPMI and 10 Gbps uplinks.", priceFrom: "₹6,999" },
  { slug: "domain",    icon: "🌐", title: "Domain Registration",  desc: "100+ TLDs, free DNS management, WHOIS privacy and auto-renewal.",    priceFrom: "₹699" },
  { slug: "whatsapp",  icon: "📱", title: "WhatsApp Business API", desc: "Official Meta-approved API for OTPs, alerts, and conversational AI.", priceFrom: "Custom" },
];

const testimonials = [
  { initial: "A", name: "Amit Sharma",    role: "Director, Sharma Apparels",      industry: "Retail",     quote: "Migrated three storefronts to ITPL in a single weekend. Page loads dropped from 4.2s to under a second, and uptime hasn't moved off 100% in six months." },
  { initial: "N", name: "Neha Verma",     role: "Digital Consultant",             industry: "Agency",     quote: "I run 14 client sites on ITPL reseller hosting. WHM works, support replies in minutes, and the white-labelling is genuine — clients never see ITPL." },
  { initial: "P", name: "Priya Sen",      role: "Marketing Manager, Edutech Co.", industry: "EdTech",     quote: "Our bulk-email deliverability went from 71% to 96% after moving to ITPL's dedicated IPs. The setup call walked me through SPF, DKIM, and DMARC in one sitting." },
  { initial: "R", name: "Rohit Malhotra", role: "Founder, SaaS Startup",          industry: "B2B SaaS",   quote: "We needed Windows VPS with MSSQL in a hurry. ITPL provisioned in 20 minutes and migrated our DB the same evening. The bill is half of what AWS quoted." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
                India's Trusted Cloud Infrastructure Partner
            </div>
            <h1 className="hero-title">
              Power Your <span className="accent">Digital Future</span>
              <br />
              with <span className="stroke">ITPL Cloud</span>
            </h1>
            <p className="hero-desc">
              Hosting, VPS, dedicated servers, and managed cloud — provisioned
              in minutes, backed by a 99.99% SLA, and supported by senior
              engineers in Noida and California, 24/7.
            </p>
            <div className="hero-btns">
              <Link href="/services" className="btn-primary">
                Explore Plans →
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to an Engineer
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><h3>100+</h3><p>Active Clients</p></div>
              <div className="stat-item"><h3>250+</h3><p>Domains Managed</p></div>
              <div className="stat-item"><h3>99.99%</h3><p>Uptime SLA</p></div>
              <div className="stat-item"><h3>&lt;15m</h3><p>Avg. Response</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="glow-ring">
                <div className="glow-ring-inner">
                  <span className="server-icon">🖧</span>
                  <div className="uptime-badge">99.99% Uptime</div>
                </div>
              </div>
              <div className="float-card float-card-1">
                <h4>⚡ Performance</h4>
                <p>NVMe SSD</p>
                <span>Up to 6× faster than SATA</span>
              </div>
              <div className="float-card float-card-2">
                <h4>🛡️ Security</h4>
                <p>DDoS Protected</p>
                <span>Always-on, no setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip" aria-label="Certifications and partnerships">
        <div className="trust-inner">
          <p className="trust-label">Trusted &amp; certified by</p>
          <div className="trust-row">
            {trustBadges.map((b) => (
              <div key={b.label} className="trust-badge">
                <span className="trust-badge-icon" aria-hidden="true">{b.icon}</span>
                <span className="trust-badge-label">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHY CHOOSE */}
      <section className="page-section bg-dark-3">
        <div className="section-wrap">
          <div className="section-tag">Why ITPL Cloud</div>
          <h2 className="section-title">
            Built for <span className="text-yellow">performance</span>,<br />
            designed for <span className="text-yellow">scale</span>.
          </h2>
          <p className="section-desc section-desc-center">
            Every plan is engineered around the same non-negotiables — uptime,
            security, and senior engineers you can actually reach. Here&apos;s what
            you get on day one, not after a sales call.
          </p>
          <div className="why-grid">
            {whyCards.map((c) => (
              <div key={c.num} className="why-card">
                <div className="num">{c.num}</div>
                <div className="icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES PREVIEW */}
      <section className="page-section bg-dark">
        <div className="section-wrap">
          <div className="services-header">
            <div>
              <div className="section-tag">Our Solutions</div>
              <h2 className="section-title">
                Pick the plan that fits <span className="text-yellow">where you are</span>.
              </h2>
              <p className="section-desc" style={{ marginTop: 12 }}>
                Start on shared hosting for ₹192/mo and move up as you grow — no
                provider switch, no DNS gymnastics, no contracts.
              </p>
            </div>
            <Link href="/services" className="btn-outline">
              View All Services →
            </Link>
          </div>
          <div className="services-grid">
            {previewServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-card-footer">
                  <span className="service-price">
                    {s.priceFrom === "Custom"
                      ? <>Custom pricing</>
                      : <>From <strong>{s.priceFrom}</strong><span className="unit">/mo</span></>}
                  </span>
                  <span className="service-link">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="page-section bg-dark-2">
        <div className="section-wrap">
          <div className="section-tag">Client Success</div>
          <h2 className="section-title">
            What our <span className="text-yellow">clients</span> say.
          </h2>
          <p className="section-desc" style={{ marginBottom: 48 }}>
            Real results from real teams who moved their workloads — and stayed.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="why-card testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="avatar-circle">{t.initial}</div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                  <span className="testimonial-industry">{t.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <div className="section-tag" style={{ justifyContent: "center" }}>Ready when you are</div>
          <h2 className="final-cta-title">
            Ready to launch on a cloud that <span className="text-yellow">just works</span>?
          </h2>
          <p className="final-cta-desc">
            Get a 15-minute consultation with our solutions team — we&apos;ll map your
            workload to the right ITPL Cloud plan and walk you through migration.
            No scripts. No upsells.
          </p>
          <div className="final-cta-actions">
            <Link href="/contact" className="btn-primary">Talk to an Engineer →</Link>
            <Link href="/services" className="btn-outline">Browse All Plans</Link>
          </div>
          <p className="final-cta-fineprint">
            Free consultation · Migration assistance included · No credit card required
          </p>
        </div>
      </section>
    </>
  );
}
