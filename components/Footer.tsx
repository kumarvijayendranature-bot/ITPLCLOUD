import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/ITPL-logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src={logo}
            alt="ITPL Cloud"
            height={80}
            className="footer-logo-img"
          />
          <p>
            Your one-stop destination for reliable cloud hosting, domain
            registration, and digital communication solutions. Serving
            businesses across India and globally.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/people/Inclusione-Technologies/61561513529999/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://www.linkedin.com/company/inclusione-technologies/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://www.instagram.com/inclusionetechnologies/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Hosting Solutions</h4>
          <ul>
            <li><Link href="/services/hosting">Linux Shared Hosting</Link></li>
            <li><Link href="/services/winhosting">Windows Hosting</Link></li>
            <li><Link href="/services/wordpress">WordPress Hosting</Link></li>
            <li><Link href="/services/vps">VPS Linux &amp; Windows</Link></li>
            <li><Link href="/services/cloud">Cloud Hosting</Link></li>
            <li><Link href="/services/dedicated">Dedicated Servers</Link></li>
            <li><Link href="/services/gpu">GPU Servers</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Other Services</h4>
          <ul>
            <li><Link href="/services/domain">Domain Registration</Link></li>
            <li><Link href="/services/ssl">SSL Certificates</Link></li>
            <li><Link href="/services/whatsapp">WhatsApp API</Link></li>
            <li><Link href="/services/bulkemail">Bulk Email</Link></li>
            <li><Link href="/services/bulksms">Bulk SMS</Link></li>
            <li><Link href="/services/rcs">RCS Messages</Link></li>
            <li><Link href="/services/gworkspace">Google Workspace</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ITPL Cloud — Powered by Inclusione
          Technologies. All Rights Reserved.
        </p>
        <div className="offices">
          <span className="office-badge">🇮🇳 Noida, India</span>
          <span className="office-badge">🇺🇸 California, USA</span>
        </div>
      </div>
    </footer>
  );
}
