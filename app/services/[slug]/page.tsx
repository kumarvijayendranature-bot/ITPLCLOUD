import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  // External "Order Now" services live on the billing portal and have no
  // internal detail page — exclude them from static generation.
  return services
    .filter((s) => !s.externalUrl)
    .map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.externalUrl) return { title: "Service | ITPL Cloud" };
  return {
    title: `${service.title} | ITPL Cloud`,
    description: service.detailDesc,
  };
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.externalUrl) notFound();

  return (
    <section className="page-section first bg-dark">
      <div className="section-wrap">
        <Link href="/services" className="back-btn">← All Services</Link>

        <div className="service-detail-hero">
          <div>
            <div className="section-tag">{service.tag}</div>
            <h2 className="section-title">
              {service.titleParts.lead}{" "}
              <span className="text-yellow">{service.titleParts.accent}</span>
            </h2>
            <p>{service.detailDesc}</p>
            <Link href="/contact" className="btn-primary">
              {service.ctaLabel}
            </Link>
          </div>
          <div className="hero-icon">{service.icon}</div>
        </div>

        {service.planGroups?.map((group, gi) => (
          <div key={gi} style={{ marginBottom: 32 }}>
            {group.heading && (
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>
                {group.heading}
              </h3>
            )}
            <div className="plans-grid">
              {group.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`plan-card${plan.featured ? " featured" : ""}`}
                >
                  <h4>{plan.name}</h4>
                  <div className="plan-price">
                    {plan.price}
                    {plan.unit && <span>{plan.unit}</span>}
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="plan-btn">
                    {plan.ctaLabel ?? "Order Now"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        {service.featureCards && (
          <div className="why-grid" style={{ marginTop: 0 }}>
            {service.featureCards.map((f) => (
              <div key={f.title} className="why-card">
                <div className="icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
