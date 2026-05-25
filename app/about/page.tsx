import type { Metadata } from "next";
import Image from "next/image";
import circuitImg from "@/assets/images/itpl_cloud_dp_circuit.svg";

export const metadata: Metadata = {
  title: "About | ITPL Cloud",
  description:
    "ITPL Cloud is a premier technology company offering hosting, cloud, domain, SSL and messaging services across India, USA, UK, Canada and Australia.",
};

const strengths = [
  { icon: "⚡", title: "99.99% Uptime",        desc: "Highly stable infrastructure ensuring your websites stay accessible at all times without interruption." },
  { icon: "🛡️", title: "Secure Environment",   desc: "Advanced security layers including firewall protection, real-time monitoring and malware defense." },
  { icon: "📊", title: "Easy Control Panel",   desc: "Manage hosting, domains, emails and backups through a powerful yet simple control panel." },
  { icon: "🎯", title: "24/7 Support",         desc: "Dedicated support team available around the clock via phone, email and live chat." },
  { icon: "🚀", title: "High Performance",     desc: "NVMe SSD servers optimized for fast loading speeds and peak performance at all times." },
  { icon: "📈", title: "Scalable Plans",       desc: "Grow from shared hosting to dedicated servers — flexible plans that scale with your business." },
  { icon: "🌐", title: "Domain Management",    desc: "Register, transfer, renew and manage domains and hosting services from a single dashboard." },
  { icon: "💾", title: "Automated Backups",    desc: "Regular scheduled backups with proactive monitoring ensure your data is always safe and recoverable." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-section first bg-dark">
        <div className="section-wrap">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-img-box">
                <Image
                  src={circuitImg}
                  alt="ITPL Cloud circuit infrastructure illustration"
                  className="about-img-illustration"
                  priority
                />
                <div className="country-stack">
                  <div className="box">
                    <p>India</p>
                    <p>Noida HQ</p>
                  </div>
                  <div className="box">
                    <p>USA</p>
                    <p>California Office</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-tag">About ITPL Cloud</div>
              <h2 className="section-title">
                Your <span className="text-yellow">One-Stop</span> Cloud
                Infrastructure Partner
              </h2>
              <p className="section-desc" style={{ marginBottom: 24 }}>
                ITPL Cloud is a premier technology company offering a complete
                range of hosting and digital services. From Linux &amp; Windows
                hosting to WordPress, Cloud, VPS, and Dedicated Servers — we
                are designed to meet the needs of startups, growing businesses,
                and enterprises across India, USA, UK, Canada, and Australia.
              </p>
              <p className="section-desc" style={{ marginBottom: 32 }}>
                Founded with the motto{" "}
                <strong className="text-yellow">&ldquo;Strive To Success&rdquo;</strong>
                , ITPL Cloud is powered by Inclusione Technologies. We provide
                dependable technology, flexible plans, and expert round-the-clock
                support to help your online presence grow with confidence.
              </p>
              <ul className="about-list">
                <li><span className="tick">✦</span>Headquartered in Noida, Uttar Pradesh, India with a USA office in California</li>
                <li><span className="tick">✦</span>Serving 100+ active clients and managing 250+ active domains globally</li>
                <li><span className="tick">✦</span>Offering domain registration, web hosting, SSL, messaging APIs and cloud solutions</li>
                <li><span className="tick">✦</span>99.99% uptime SLA with dedicated 24/7 technical support team</li>
                <li><span className="tick">✦</span>Trusted by businesses across India, USA, UK, Canada &amp; Australia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section
        className="bg-dark-3"
        style={{ padding: "80px 5%" }}
      >
        <div className="section-wrap">
          <h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            Our Core <span className="text-yellow">Strengths</span>
          </h2>
          <div
            className="about-features"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {strengths.map((s) => (
              <div key={s.title} className="about-feat">
                <div className="icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
