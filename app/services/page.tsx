import type { Metadata } from "next";
import Link from "next/link";
import {
  SERVICE_CATEGORIES,
  getServicesByCategory,
  type Service,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | ITPL Cloud",
  description:
    "Hosting, cloud, dedicated, domain, SSL, WhatsApp API, bulk email/SMS, RCS, and Google Workspace — the full ITPL Cloud service portfolio.",
};

function ServiceTile({ s }: { s: Service }) {
  const isExternal = Boolean(s.externalUrl);
  const inner = (
    <>
      <div className="service-card-head">
        <span className="service-icon">{s.icon}</span>
        {isExternal && <span className="live-badge">Live · Order Now</span>}
      </div>
      <h3>{s.cardTitle}</h3>
      <p>{s.cardDesc}</p>
      <span className="service-link">{s.cardLinkLabel}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={s.externalUrl}
        className="service-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={`/services/${s.slug}`} className="service-card">
      {inner}
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <section className="page-section first bg-dark">
      <div className="section-wrap">
        <div className="section-tag">Everything You Need</div>
        <h2 className="section-title">
          Our <span className="text-yellow">Complete</span> Service Portfolio
        </h2>
        <p className="section-desc" style={{ marginBottom: 48 }}>
          From shared hosting to enterprise cloud — ITPL Cloud offers a
          comprehensive suite of digital infrastructure services to power your
          online success.
        </p>

        {SERVICE_CATEGORIES.map((cat) => {
          const items = getServicesByCategory(cat.id);
          if (items.length === 0) return null;
          return (
            <div key={cat.id}>
              <h3 className="services-section-heading">{cat.label}</h3>
              <div className="services-grid" style={{ marginBottom: 48 }}>
                {items.map((s) => (
                  <ServiceTile key={s.slug} s={s} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
