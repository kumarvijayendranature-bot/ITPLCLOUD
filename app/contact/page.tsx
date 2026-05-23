import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | ITPL Cloud",
  description:
    "Get in touch with the ITPL Cloud team for hosting, cloud, domain, SSL and messaging enquiries. Offices in Noida, India and California, USA.",
};

export default function ContactPage() {
  return (
    <section className="page-section first bg-dark">
      <div className="section-wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">
              Let&apos;s Start a <span className="text-yellow">Conversation</span>
            </h2>
            <p className="contact-lead">
              Whether you need a hosting plan, want to discuss a custom cloud
              solution, or simply have questions — our team is ready to help
              you 24/7.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="ci-icon">📍</div>
                <div>
                  <h4>India Office</h4>
                  <p>G-75, G Block, Ground Floor, Sector 63, Noida, Uttar Pradesh — 201301</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">📍</div>
                <div>
                  <h4>USA Office</h4>
                  <p>2642 E Spring Street, Long Beach CA 90620, USA</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    India: +91 9821062169
                    <br />
                    USA: +1 724 577 7780
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@inclusionetechnologies.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">🕐</div>
                <div>
                  <h4>Support Hours</h4>
                  <p>24/7 — 365 days a year</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--gray)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                }}
              >
                We Serve Globally
              </p>
              <div className="section-tags-list">
                <span className="country-badge">🇮🇳 India</span>
                <span className="country-badge">🇺🇸 USA</span>
                <span className="country-badge">🇬🇧 UK</span>
                <span className="country-badge">🇨🇦 Canada</span>
                <span className="country-badge">🇦🇺 Australia</span>
              </div>
            </div>
          </div>
          <div>
            <div className="contact-form">
              <h3
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                Send Us a Message
              </h3>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
