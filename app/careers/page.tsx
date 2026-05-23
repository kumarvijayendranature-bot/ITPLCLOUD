import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | ITPL Cloud",
  description:
    "Join ITPL Cloud — open positions in cloud infrastructure, DevOps, support, sales, frontend and digital marketing.",
};

const perks = [
  { icon: "🌍", label: "Work with global clients across India, USA & UK" },
  { icon: "📈", label: "Fast growth with clear career progression paths" },
  { icon: "🎓", label: "Continuous learning and certification support" },
  { icon: "🏠", label: "Flexible work arrangements and remote options" },
  { icon: "💰", label: "Competitive salaries and performance bonuses" },
  { icon: "🤝", label: "Collaborative and inclusive work culture" },
];

const jobs = [
  {
    title: "Cloud Infrastructure Engineer",
    type: "Full-time",
    dept: "☁️ Engineering",
    desc: "Design, build and manage scalable cloud infrastructure. Strong experience with Linux, virtualization and networking required. KVM/Proxmox experience preferred.",
    location: "📍 Noida, India",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    dept: "🛠️ Engineering",
    desc: "Implement CI/CD pipelines, manage container orchestration with Kubernetes and Docker, automate infrastructure using Terraform and Ansible.",
    location: "📍 Noida / Remote",
  },
  {
    title: "Technical Support Engineer",
    type: "Full-time",
    dept: "🎯 Support",
    desc: "Provide world-class L1/L2 technical support to clients. Handle hosting, server, domain and email-related tickets with speed and accuracy.",
    location: "📍 Noida, India",
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    dept: "💼 Sales",
    desc: "Drive revenue growth by acquiring new clients, managing key accounts and promoting ITPL Cloud's hosting and messaging solutions across India and international markets.",
    location: "📍 Noida / Remote",
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    dept: "💻 Engineering",
    desc: "Build beautiful, responsive web interfaces for our customer portal and marketing website. Strong skills in React, HTML5, CSS3 and modern JavaScript required.",
    location: "📍 Noida / Remote",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    dept: "📣 Marketing",
    desc: "Plan and execute SEO, PPC, content marketing and social media strategies to grow ITPL Cloud's brand presence across India and international markets.",
    location: "📍 Noida, India",
  },
];

export default function CareersPage() {
  return (
    <section className="page-section first bg-dark">
      <div className="section-wrap">
        <div className="careers-intro">
          <div>
            <div className="section-tag">Join Our Team</div>
            <h2 className="section-title">
              Build the Future of <span className="text-yellow">Cloud</span> With Us
            </h2>
            <p
              style={{
                color: "var(--gray)",
                lineHeight: 1.8,
                marginBottom: 24,
                fontSize: "0.95rem",
              }}
            >
              At ITPL Cloud, we&apos;re not just building infrastructure — we&apos;re
              empowering businesses to grow without limits. Join a team that
              values innovation, ownership and excellence.
            </p>
            <Link href="/contact" className="btn-primary">
              Send Your Resume
            </Link>
          </div>
          <div className="careers-visual">
            <span className="big-icon">🚀</span>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16 }}>
              Why Work at ITPL?
            </h3>
            <div className="perks">
              {perks.map((p) => (
                <div key={p.label} className="perk">
                  <span className="icon">{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="services-section-heading" style={{ marginBottom: 24 }}>
          Open Positions
        </h3>
        <div className="job-grid">
          {jobs.map((j) => (
            <div key={j.title} className="job-card">
              <div className="job-header">
                <h3>{j.title}</h3>
                <span className="job-type">{j.type}</span>
              </div>
              <div className="job-dept">{j.dept}</div>
              <p>{j.desc}</p>
              <div className="job-footer">
                <span className="job-loc">{j.location}</span>
                <Link
                  href={`/contact?role=${encodeURIComponent(j.title)}`}
                  className="apply-btn"
                >
                  Apply →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
