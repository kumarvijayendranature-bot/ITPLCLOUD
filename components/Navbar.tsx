"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getServicesByCategory } from "@/lib/services";
import logo from "@/assets/images/ITPL-logo.png";

type NavLink = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const LIVE_SERVICES = getServicesByCategory("live").filter((s) => s.externalUrl);

// Short subtitle shown under each item in the dropdown.
const DROPDOWN_SUBTITLES: Record<string, string> = {
  "india-web-hosting":        "Linux cPanel · NVMe SSD",
  "india-amd-epyc-vps":       "AMD EPYC · High performance",
  "india-intel-xeon-vps":     "Intel Xeon · Production-grade",
  "india-rdp":                "Windows Remote Desktop",
  "singapore-amd-ryzen-vps":  "AMD Ryzen · Low-latency APAC",
  "minecraft-server":         "Game server · Modpack ready",
  "bot-hosting-python":       "24/7 Python bot uptime",
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo" aria-label="ITPL Cloud home">
          <Image
            src={logo}
            alt="ITPL Cloud"
            height={68}
            priority
            className="nav-logo-img"
          />
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li
              key={l.href}
              className={l.hasDropdown ? "nav-item-with-dropdown" : undefined}
            >
              <Link
                href={l.href}
                className={isActive(l.href) ? "active" : ""}
                aria-haspopup={l.hasDropdown ? "true" : undefined}
              >
                {l.label}
                {l.hasDropdown && (
                  <span className="nav-caret" aria-hidden="true">▾</span>
                )}
              </Link>
              {l.hasDropdown && (
                <div className="nav-dropdown" role="menu">
                  <p className="nav-dropdown-heading">
                    🚀 Order Online — Live India Plans
                  </p>
                  {LIVE_SERVICES.map((s) => (
                    <a
                      key={s.slug}
                      href={s.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-dropdown-item"
                      role="menuitem"
                    >
                      <span className="nav-dropdown-icon" aria-hidden="true">
                        {s.icon}
                      </span>
                      <span className="nav-dropdown-text">
                        <span className="nav-dropdown-item-title">
                          {s.cardTitle}
                        </span>
                        <span className="nav-dropdown-item-sub">
                          {DROPDOWN_SUBTITLES[s.slug] ?? "Order online"}
                        </span>
                      </span>
                      <span className="nav-dropdown-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ))}
                  <div className="nav-dropdown-divider" />
                  <Link href="/services" className="nav-dropdown-footer">
                    <span>View all services</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-cta">
          Get Started
        </Link>
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span /> <span /> <span />
        </button>
      </nav>

      <div className={`nav-mobile-menu${mobileOpen ? " open" : ""}`}>
        {links.map((l) =>
          l.hasDropdown ? (
            <div key={l.href} className="nav-mobile-item">
              <div className="nav-mobile-row">
                <Link href={l.href} className="nav-mobile-main">
                  {l.label}
                </Link>
                <button
                  type="button"
                  className="nav-mobile-toggle"
                  aria-expanded={mobileServicesOpen}
                  aria-label="Toggle Services submenu"
                  onClick={() => setMobileServicesOpen((o) => !o)}
                >
                  {mobileServicesOpen ? "−" : "+"}
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="nav-mobile-sub">
                  {LIVE_SERVICES.map((s) => (
                    <a
                      key={s.slug}
                      href={s.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-mobile-sub-link"
                    >
                      <span className="nav-mobile-sub-icon" aria-hidden="true">
                        {s.icon}
                      </span>
                      <span>{s.cardTitle}</span>
                      <span className="nav-mobile-sub-arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
