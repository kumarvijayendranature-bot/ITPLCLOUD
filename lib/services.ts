export type Plan = {
  name: string;
  price: string;
  unit?: string;
  features: string[];
  featured?: boolean;
  ctaLabel?: string;
};

export type FeatureCard = {
  icon: string;
  title: string;
  desc: string;
};

export type PlanGroup = {
  heading?: string;
  plans: Plan[];
};

export type Service = {
  slug: string;
  category: "live" | "hosting" | "domain" | "messaging";
  icon: string;
  title: string;
  cardTitle: string;       // shorter version for cards
  cardDesc: string;        // description shown on service grid cards
  cardLinkLabel: string;   // "View Plans →", "Search Domains →", etc.
  tag: string;             // breadcrumb-ish tag on detail page
  titleParts: { lead: string; accent: string };
  detailDesc: string;
  ctaLabel: string;
  planGroups?: PlanGroup[];
  featureCards?: FeatureCard[];
  externalUrl?: string;    // if set, the card links here (opens in new tab) and no internal detail page is generated
};

export const SERVICE_CATEGORIES = [
  { id: "live",      label: "🚀 Order Online — Live Plans" },
  { id: "hosting",   label: "🖥️ Hosting Solutions" },
  { id: "domain",    label: "🌐 Domain & Security" },
  { id: "messaging", label: "📱 Messaging & Productivity" },
] as const;

const BILLING_BASE = "https://bill.inclusionetechnologies.com/index.php?rp=/store";

export const services: Service[] = [
  // ===== LIVE / ORDER NOW (links out to billing portal) =====
  {
    slug: "india-web-hosting",
    category: "live",
    icon: "🐧",
    title: "India Web Hosting",
    cardTitle: "India Web Hosting",
    cardDesc: "Fast, secure & affordable Linux web hosting with cPanel — provisioned from our India data centre in minutes.",
    cardLinkLabel: "Order Now →",
    tag: "Live India Plans",
    titleParts: { lead: "India Web", accent: "Hosting" },
    detailDesc: "",
    ctaLabel: "Order Now",
    externalUrl: `${BILLING_BASE}/india-web-hosting`,
  },
  {
    slug: "india-amd-epyc-vps",
    category: "live",
    icon: "🔴",
    title: "AMD EPYC VPS — India",
    cardTitle: "AMD EPYC VPS (India)",
    cardDesc: "High-performance virtual private servers powered by AMD EPYC processors, hosted in our India data centre.",
    cardLinkLabel: "Order Now →",
    tag: "Live India Plans",
    titleParts: { lead: "AMD EPYC", accent: "VPS — India" },
    detailDesc: "",
    ctaLabel: "Order Now",
    externalUrl: `${BILLING_BASE}/india-amd-epyc-vps`,
  },
  {
    slug: "india-intel-xeon-vps",
    category: "live",
    icon: "🔵",
    title: "Intel Xeon VPS — India",
    cardTitle: "Intel Xeon VPS (India)",
    cardDesc: "Stable, business-grade VPS on Intel Xeon processors — ideal for production workloads hosted in India.",
    cardLinkLabel: "Order Now →",
    tag: "Live India Plans",
    titleParts: { lead: "Intel Xeon", accent: "VPS — India" },
    detailDesc: "",
    ctaLabel: "Order Now",
    externalUrl: `${BILLING_BASE}/india-intel-xeon-vps`,
  },
  {
    slug: "india-rdp",
    category: "live",
    icon: "🪟",
    title: "Windows RDP — India",
    cardTitle: "Windows RDP (India)",
    cardDesc: "Windows Remote Desktop hosted in India — ready for desktop apps, automation, scraping and admin workflows.",
    cardLinkLabel: "Order Now →",
    tag: "Live India Plans",
    titleParts: { lead: "Windows RDP —", accent: "India" },
    detailDesc: "",
    ctaLabel: "Order Now",
    externalUrl: `${BILLING_BASE}/india-rdp`,
  },
  {
    slug: "singapore-amd-ryzen-vps",
    category: "live",
    icon: "🇸🇬",
    title: "AMD Ryzen VPS — Singapore",
    cardTitle: "AMD Ryzen VPS (Singapore)",
    cardDesc: "High-clock AMD Ryzen VPS hosted in Singapore — low-latency for South-East Asia and APAC workloads.",
    cardLinkLabel: "Order Now →",
    tag: "Live Plans",
    titleParts: { lead: "AMD Ryzen VPS —", accent: "Singapore" },
    detailDesc: "",
    ctaLabel: "Order Now",
    externalUrl: `${BILLING_BASE}/singapore-amd-ryzen-vps`,
  },
  {
    slug: "minecraft-server",
    category: "live",
    icon: "🟩",
    title: "Minecraft Server Hosting",
    cardTitle: "Minecraft Server",
    cardDesc: "Lag-free Minecraft server hosting with one-click modpack installs, DDoS protection and full FTP access.",
    cardLinkLabel: "Order Now →",
    tag: "Live Plans",
    titleParts: { lead: "Minecraft", accent: "Server Hosting" },
    detailDesc: "",
    ctaLabel: "Order Now",
    externalUrl: `${BILLING_BASE}/minecraft-server`,
  },
  {
    slug: "bot-hosting-python",
    category: "live",
    icon: "🐍",
    title: "Python Bot Hosting",
    cardTitle: "Bot Hosting (Python)",
    cardDesc: "24/7 Python bot hosting for Discord, Telegram and automation scripts — preloaded Python runtimes ready to go.",
    cardLinkLabel: "Order Now →",
    tag: "Live Plans",
    titleParts: { lead: "Python", accent: "Bot Hosting" },
    detailDesc: "",
    ctaLabel: "Order Now",
    externalUrl: `${BILLING_BASE}/bot-hosting-python`,
  },

  // ===== HOSTING =====
  {
    slug: "hosting",
    category: "hosting",
    icon: "🐧",
    title: "Linux Shared Hosting",
    cardTitle: "Linux Shared Hosting",
    cardDesc: "Single & multi-domain Linux hosting for small to medium businesses with cPanel, PHP, MySQL and more.",
    cardLinkLabel: "View Plans →",
    tag: "Hosting Solutions",
    titleParts: { lead: "Linux Shared", accent: "Hosting" },
    detailDesc: "Power your website with reliable, fast, and scalable Linux shared hosting — perfect for growing businesses and everyday projects. Includes cPanel, MySQL, PHP and unlimited email accounts.",
    ctaLabel: "Get Started Today",
    planGroups: [{
      heading: "Choose Your Plan",
      plans: [
        { name: "Linux Single Domain", price: "₹192", unit: "/mo",
          features: ["1 Domain", "10 GB SSD Storage", "Unlimited Bandwidth", "5 Email Accounts", "Free SSL", "cPanel Access"] },
        { name: "Linux Multi Domain", price: "₹349", unit: "/mo", featured: true,
          features: ["Unlimited Domains", "50 GB SSD Storage", "Unlimited Bandwidth", "Unlimited Emails", "Free SSL", "cPanel + Softaculous"] },
        { name: "Linux Business", price: "₹599", unit: "/mo",
          features: ["Unlimited Domains", "100 GB NVMe SSD", "Unlimited Bandwidth", "Unlimited Emails", "Free SSL + CDN", "Priority Support"] },
      ],
    }],
  },
  {
    slug: "winhosting",
    category: "hosting",
    icon: "🪟",
    title: "Windows Hosting",
    cardTitle: "Windows Shared Hosting",
    cardDesc: "ASP.NET, MSSQL and Plesk-powered Windows hosting for medium to large business applications.",
    cardLinkLabel: "View Plans →",
    tag: "Hosting Solutions",
    titleParts: { lead: "Windows", accent: "Hosting" },
    detailDesc: "ASP.NET & MSSQL-powered Windows hosting with Plesk control panel. Ideal for .NET applications, SharePoint and Windows-dependent workloads for medium to large businesses.",
    ctaLabel: "Get Started Today",
    planGroups: [{
      plans: [
        { name: "Windows Single Domain", price: "₹299", unit: "/mo",
          features: ["1 Domain", "15 GB SSD Storage", "MSSQL Database", "ASP.NET Support", "Free SSL", "Plesk Panel"] },
        { name: "Windows Multi Domain", price: "₹499", unit: "/mo", featured: true,
          features: ["Unlimited Domains", "60 GB SSD", "Unlimited MSSQL", "ASP.NET 4.8 / .NET Core", "Free SSL", "Plesk + Extensions"] },
        { name: "Windows Enterprise", price: "₹899", unit: "/mo",
          features: ["Unlimited Domains", "150 GB NVMe", "Unlimited MSSQL", "Full .NET Stack", "SSL + DDoS Protection", "24/7 Priority Support"] },
      ],
    }],
  },
  {
    slug: "wordpress",
    category: "hosting",
    icon: "📝",
    title: "WordPress Hosting",
    cardTitle: "WordPress Hosting",
    cardDesc: "Optimized WordPress hosting with one-click install, auto-updates and built-in caching for speed.",
    cardLinkLabel: "View Plans →",
    tag: "WordPress Solutions",
    titleParts: { lead: "WordPress", accent: "Hosting" },
    detailDesc: "Managed WordPress hosting with one-click installation, auto core updates, built-in caching, staging environments and daily backups. Your WordPress site, always fast and secure.",
    ctaLabel: "Get Started",
    planGroups: [{
      plans: [
        { name: "WP Starter", price: "₹249", unit: "/mo",
          features: ["1 WordPress Site", "10 GB SSD", "Free SSL", "Daily Backups", "Free CDN"] },
        { name: "WP Business", price: "₹499", unit: "/mo", featured: true,
          features: ["3 WordPress Sites", "30 GB NVMe SSD", "Free SSL + Wildcard", "Daily Backups + Staging", "Priority Support"] },
        { name: "WP Agency", price: "₹899", unit: "/mo",
          features: ["Unlimited WP Sites", "100 GB NVMe SSD", "Free SSL + CDN", "Staging + Git Deploy", "White-label Dashboard"] },
      ],
    }],
  },
  {
    slug: "reseller",
    category: "hosting",
    icon: "🔄",
    title: "Reseller Hosting",
    cardTitle: "Reseller Hosting",
    cardDesc: "Linux and Windows reseller hosting to start your own hosting business with WHM control panel.",
    cardLinkLabel: "View Plans →",
    tag: "Reseller Solutions",
    titleParts: { lead: "Reseller", accent: "Hosting" },
    detailDesc: "Start your own web hosting business. Linux and Windows reseller hosting with WHM control panel, WHMCS billing system and white-label branding support.",
    ctaLabel: "Start Reselling",
    planGroups: [{
      plans: [
        { name: "Linux Reseller", price: "₹1,299", unit: "/mo",
          features: ["50 GB SSD Storage", "WHM + cPanel", "Unlimited Accounts", "Free WHMCS", "White-label Ready"] },
        { name: "Windows Reseller", price: "₹1,599", unit: "/mo", featured: true,
          features: ["80 GB SSD Storage", "Plesk Web Host Ed.", "Unlimited Accounts", "Free WHMCS", "White-label + SSL"] },
      ],
    }],
  },
  {
    slug: "vps",
    category: "hosting",
    icon: "🖧",
    title: "VPS Hosting",
    cardTitle: "VPS Hosting",
    cardDesc: "Full root access Linux and Windows VPS with guaranteed resources and SSD storage.",
    cardLinkLabel: "View Plans →",
    tag: "VPS Hosting",
    titleParts: { lead: "Virtual Private", accent: "Servers" },
    detailDesc: "Full root access VPS with guaranteed CPU, RAM and SSD — available in Linux and Windows. Perfect for developers, agencies and businesses needing dedicated resources without the dedicated server price tag.",
    ctaLabel: "Configure VPS",
    planGroups: [
      {
        heading: "VPS Linux Plans",
        plans: [
          { name: "VPS Linux Starter", price: "₹799", unit: "/mo",
            features: ["2 vCPU Cores", "4 GB RAM", "80 GB NVMe SSD", "2 TB Bandwidth", "1 IPv4 Address", "Full Root Access"] },
          { name: "VPS Linux Pro", price: "₹1,499", unit: "/mo", featured: true,
            features: ["4 vCPU Cores", "8 GB RAM", "160 GB NVMe SSD", "4 TB Bandwidth", "2 IPv4 Addresses", "Full Root + cPanel opt"] },
          { name: "VPS Linux Power", price: "₹2,499", unit: "/mo",
            features: ["8 vCPU Cores", "16 GB RAM", "320 GB NVMe SSD", "8 TB Bandwidth", "4 IPv4 Addresses", "Priority Support"] },
        ],
      },
      {
        heading: "VPS Windows Plans",
        plans: [
          { name: "VPS Windows Starter", price: "₹999", unit: "/mo",
            features: ["2 vCPU Cores", "4 GB RAM", "80 GB NVMe SSD", "Windows Server 2022", "RDP Access", "Full Admin Rights"] },
          { name: "VPS Windows Pro", price: "₹1,799", unit: "/mo", featured: true,
            features: ["4 vCPU Cores", "8 GB RAM", "160 GB NVMe SSD", "Windows Server 2022", "RDP + Plesk Panel", "Managed Support"] },
        ],
      },
    ],
  },
  {
    slug: "cloud",
    category: "hosting",
    icon: "☁️",
    title: "Cloud Hosting",
    cardTitle: "Cloud Hosting",
    cardDesc: "Auto-scaling cloud servers with high availability and pay-as-you-go flexibility.",
    cardLinkLabel: "View Plans →",
    tag: "Cloud Infrastructure",
    titleParts: { lead: "Custom Cloud", accent: "Hosting" },
    detailDesc: "Auto-scaling cloud hosting infrastructure for mission-critical applications. Configure your exact CPU, RAM, and storage needs. Pay only for what you use with high availability and instant provisioning.",
    ctaLabel: "Configure Cloud",
    featureCards: [
      { icon: "🔁", title: "Auto-Scaling",       desc: "Resources scale automatically with your traffic — no downtime during traffic spikes." },
      { icon: "🌐", title: "Global CDN",         desc: "Built-in CDN integration for faster content delivery across global locations." },
      { icon: "💾", title: "Block Storage",      desc: "Expandable SSD block storage that can be attached and detached on demand." },
      { icon: "🔒", title: "Private Networking", desc: "Isolated private networking between cloud instances for security." },
    ],
  },
  {
    slug: "aws",
    category: "hosting",
    icon: "🟧",
    title: "AWS Managed Cloud",
    cardTitle: "AWS Managed Cloud",
    cardDesc: "Architecture, migration and 24/7 management for workloads on Amazon Web Services.",
    cardLinkLabel: "Explore AWS →",
    tag: "Hyperscale Cloud",
    titleParts: { lead: "AWS", accent: "Managed Cloud" },
    detailDesc: "End-to-end AWS consulting, migration and operations. We architect Well-Architected workloads, set up landing zones, and run them with 24/7 monitoring, FinOps cost controls and Indian rupee billing.",
    ctaLabel: "Talk to AWS Team",
    featureCards: [
      { icon: "🏗️", title: "Architecture & Migration", desc: "VPC, EKS, RDS and serverless designs — plus lift-and-shift or refactor migrations from on-prem and other clouds." },
      { icon: "🛡️", title: "Security & Compliance",     desc: "IAM hardening, GuardDuty, WAF, KMS and CIS-benchmarked baselines so you stay audit-ready." },
      { icon: "📉", title: "FinOps Cost Control",       desc: "Reserved instance and Savings Plan strategy, rightsizing and tag-based showback to cut your AWS bill." },
      { icon: "🛟", title: "24/7 Managed Operations",  desc: "Patching, backups, incident response and on-call engineers covering your AWS estate around the clock." },
    ],
  },
  {
    slug: "azure",
    category: "hosting",
    icon: "🟦",
    title: "Microsoft Azure",
    cardTitle: "Microsoft Azure",
    cardDesc: "Azure subscriptions, migration and managed operations — billed in INR by a Microsoft Partner.",
    cardLinkLabel: "Explore Azure →",
    tag: "Hyperscale Cloud",
    titleParts: { lead: "Microsoft", accent: "Azure" },
    detailDesc: "Microsoft Partner-led Azure services — landing zone setup, workload migration, AVD, M365 integration and ongoing managed operations with INR invoicing and India-based support.",
    ctaLabel: "Talk to Azure Team",
    featureCards: [
      { icon: "🏗️", title: "Landing Zone & Migration", desc: "Enterprise-scale landing zones, hub-and-spoke networking and migrations using Azure Migrate." },
      { icon: "🖥️", title: "Azure Virtual Desktop",    desc: "Deploy and manage AVD and Windows 365 for remote teams — with profile, image and licensing handled." },
      { icon: "🔐", title: "Entra ID & Security",       desc: "Conditional access, Defender for Cloud and Sentinel monitoring tuned to your compliance needs." },
      { icon: "💳", title: "INR Billing & CSP",         desc: "Consolidated monthly invoices in rupees through our Microsoft CSP — no foreign-card fees or FX surprises." },
    ],
  },
  {
    slug: "dedicated",
    category: "hosting",
    icon: "⚡",
    title: "Dedicated Servers",
    cardTitle: "Dedicated Servers",
    cardDesc: "High-performance Linux and Windows dedicated servers for enterprise workloads.",
    cardLinkLabel: "View Plans →",
    tag: "Dedicated Servers",
    titleParts: { lead: "Bare Metal", accent: "Servers" },
    detailDesc: "Full dedicated hardware — no virtualization, no shared resources. Linux and Windows dedicated servers for enterprises needing maximum performance, control and compliance.",
    ctaLabel: "Get a Quote",
    planGroups: [{
      plans: [
        { name: "Linux Dedicated Starter", price: "₹6,999", unit: "/mo",
          features: ["4 Core / 8 Thread CPU", "32 GB DDR4 RAM", "2 × 1 TB SSD", "Unmetered Bandwidth", "1 Gbps Port", "Full Root Access"],
          ctaLabel: "Get Quote" },
        { name: "Linux Dedicated Pro", price: "₹12,999", unit: "/mo", featured: true,
          features: ["8 Core / 16 Thread CPU", "64 GB DDR4 RAM", "4 × 1 TB NVMe", "Unmetered Bandwidth", "10 Gbps Port", "IPMI + DDoS Protection"],
          ctaLabel: "Get Quote" },
        { name: "Windows Dedicated", price: "₹14,999", unit: "/mo",
          features: ["8 Core / 16 Thread CPU", "64 GB DDR4 RAM", "4 × 1 TB NVMe", "Windows Server 2022", "Plesk + RDP", "Managed Support"],
          ctaLabel: "Get Quote" },
      ],
    }],
  },
  {
    slug: "gpu",
    category: "hosting",
    icon: "🎮",
    title: "GPU Servers",
    cardTitle: "GPU Servers",
    cardDesc: "High-performance GPU servers for AI/ML, rendering and compute-intensive workloads.",
    cardLinkLabel: "View Plans →",
    tag: "GPU Computing",
    titleParts: { lead: "GPU", accent: "Servers" },
    detailDesc: "High-performance GPU servers for AI, machine learning, deep learning, 3D rendering and compute-intensive workloads. Enterprise-grade NVIDIA GPU options available.",
    ctaLabel: "Get a Quote",
    featureCards: [
      { icon: "🤖", title: "AI & ML Ready",        desc: "Pre-configured CUDA environments for TensorFlow, PyTorch and other AI frameworks." },
      { icon: "⚡", title: "NVIDIA GPUs",          desc: "NVIDIA A100, RTX 4090 and other enterprise-grade GPU options available on demand." },
      { icon: "🔒", title: "Isolated Environment", desc: "Dedicated GPU resources with no sharing — full VRAM and compute for your workloads." },
      { icon: "📊", title: "Monitoring Included",  desc: "Real-time GPU utilization monitoring, alerts and usage dashboards included." },
    ],
  },

  // ===== DOMAIN & SECURITY =====
  {
    slug: "domain",
    category: "domain",
    icon: "🌐",
    title: "Domain Registration",
    cardTitle: "Domain Registration",
    cardDesc: "Register .com, .in, .net, .org, .co.uk and 100+ TLDs at competitive prices with instant activation.",
    cardLinkLabel: "Search Domains →",
    tag: "Domain Services",
    titleParts: { lead: "Domain", accent: "Registration" },
    detailDesc: "Find and register the perfect domain name for your business. Manage all your domains from one unified dashboard with auto-renewal and DNS management tools.",
    ctaLabel: "Search Domain",
    planGroups: [{
      plans: [
        { name: ".com", price: "₹899", unit: "/yr",
          features: ["Free DNS Management", "Domain Locking", "WHOIS Privacy opt", "Auto-Renewal"], ctaLabel: "Register" },
        { name: ".in", price: "₹699", unit: "/yr", featured: true,
          features: ["Free DNS Management", "Domain Locking", "WHOIS Privacy opt", "Auto-Renewal"], ctaLabel: "Register" },
        { name: ".net", price: "₹999", unit: "/yr",
          features: ["Free DNS Management", "Domain Locking", "WHOIS Privacy opt", "Auto-Renewal"], ctaLabel: "Register" },
        { name: ".org", price: "₹899", unit: "/yr",
          features: ["Free DNS Management", "Domain Locking", "WHOIS Privacy opt", "Auto-Renewal"], ctaLabel: "Register" },
      ],
    }],
  },
  {
    slug: "ssl",
    category: "domain",
    icon: "🔒",
    title: "SSL Certificates",
    cardTitle: "SSL Certificates",
    cardDesc: "Protect your website with DV, OV and EV SSL certificates from trusted certificate authorities.",
    cardLinkLabel: "Get SSL →",
    tag: "Security",
    titleParts: { lead: "SSL", accent: "Certificates" },
    detailDesc: "Protect your website and boost visitor trust with trusted SSL certificates. Available in DV, OV and EV levels from globally trusted certificate authorities like Comodo, DigiCert and Sectigo.",
    ctaLabel: "Get SSL",
    planGroups: [{
      plans: [
        { name: "DV SSL", price: "₹999", unit: "/yr",
          features: ["Domain Validated", "Issued in Minutes", "256-bit Encryption", "Site Seal Included"] },
        { name: "Wildcard SSL", price: "₹3,499", unit: "/yr", featured: true,
          features: ["Covers All Subdomains", "OV Validated", "256-bit Encryption", "Dynamic Site Seal"] },
        { name: "EV SSL", price: "₹7,999", unit: "/yr",
          features: ["Extended Validation", "Green Bar / Trust Mark", "256-bit Encryption", "Highest Trust Level"] },
      ],
    }],
  },
  {
    slug: "security",
    category: "domain",
    icon: "🛡️",
    title: "Website Security",
    cardTitle: "Website Security",
    cardDesc: "Comprehensive website security with malware scanning, firewall and DDoS protection.",
    cardLinkLabel: "Learn More →",
    tag: "Website Security",
    titleParts: { lead: "Website", accent: "Protection" },
    detailDesc: "Comprehensive website security with malware scanning, web application firewall (WAF), DDoS protection, blacklist monitoring and automatic malware removal to keep your site safe 24/7.",
    ctaLabel: "Secure Your Site",
    featureCards: [
      { icon: "🔍", title: "Daily Malware Scanning", desc: "Automated daily scans to detect and remove malware before it impacts your visitors." },
      { icon: "🔥", title: "Web App Firewall",       desc: "WAF protection against SQL injection, XSS, CSRF and OWASP Top 10 vulnerabilities." },
      { icon: "⚡", title: "DDoS Mitigation",         desc: "Always-on DDoS protection to absorb and mitigate volumetric and application-layer attacks." },
      { icon: "📋", title: "Blacklist Monitoring",   desc: "Monitor your site across 65+ security blacklists and get instant alerts if listed." },
    ],
  },

  // ===== MESSAGING =====
  {
    slug: "whatsapp",
    category: "messaging",
    icon: "📱",
    title: "WhatsApp API",
    cardTitle: "WhatsApp API",
    cardDesc: "Official WhatsApp Business API to send transactional messages, OTPs and marketing campaigns.",
    cardLinkLabel: "Learn More →",
    tag: "Messaging Solutions",
    titleParts: { lead: "WhatsApp", accent: "Business API" },
    detailDesc: "Official WhatsApp Business API integration to automate customer communication — send OTPs, order confirmations, marketing messages and support replies at massive scale.",
    ctaLabel: "Get API Access",
    featureCards: [
      { icon: "⚡", title: "Instant Delivery",   desc: "High-throughput message delivery with 99%+ delivery rates across all WhatsApp users." },
      { icon: "🤖", title: "Automation Ready",   desc: "REST API integration for CRMs, ERPs and custom applications with easy webhooks." },
      { icon: "📊", title: "Analytics Dashboard", desc: "Real-time delivery reports, read receipts and campaign analytics at your fingertips." },
      { icon: "✅", title: "Official Partner",   desc: "Authorized WhatsApp Business Solution Provider — compliant and verified by Meta." },
    ],
  },
  {
    slug: "bulkemail",
    category: "messaging",
    icon: "📧",
    title: "Bulk Email",
    cardTitle: "Bulk Email",
    cardDesc: "High-deliverability bulk email service for newsletters, marketing campaigns and transactional emails.",
    cardLinkLabel: "Learn More →",
    tag: "Email Marketing",
    titleParts: { lead: "Bulk", accent: "Email Service" },
    detailDesc: "High-deliverability transactional and marketing email service. Send newsletters, campaign emails and automated triggered emails with advanced tracking and analytics.",
    ctaLabel: "Get Started",
    planGroups: [{
      plans: [
        { name: "Starter", price: "₹1,499", unit: "/mo",
          features: ["50,000 Emails/Month", "Dedicated IP", "SMTP + API Access", "Open & Click Tracking"] },
        { name: "Growth", price: "₹3,999", unit: "/mo", featured: true,
          features: ["2,00,000 Emails/Month", "2 Dedicated IPs", "SMTP + API + Webhooks", "Advanced Analytics"] },
        { name: "Enterprise", price: "Custom",
          features: ["Unlimited Volume", "Multiple Dedicated IPs", "SLA Guarantee", "Dedicated Account Mgr"],
          ctaLabel: "Contact Us" },
      ],
    }],
  },
  {
    slug: "bulksms",
    category: "messaging",
    icon: "💬",
    title: "Bulk SMS",
    cardTitle: "Bulk SMS",
    cardDesc: "Send promotional and transactional SMS messages to millions of recipients across India.",
    cardLinkLabel: "Learn More →",
    tag: "SMS Marketing",
    titleParts: { lead: "Bulk", accent: "SMS Service" },
    detailDesc: "Send promotional and transactional SMS messages to millions of recipients across India with DLT-compliant infrastructure, real-time delivery reports and easy API integration.",
    ctaLabel: "Get Started",
    featureCards: [
      { icon: "🚀", title: "Instant Delivery", desc: "Real-time SMS delivery with 99%+ delivery rates across all major Indian telecom operators." },
      { icon: "✅", title: "DLT Compliant",    desc: "Fully TRAI DLT-compliant platform with template approval support and sender ID management." },
      { icon: "📊", title: "Live Reports",     desc: "Real-time delivery reports, bounce analysis and campaign performance dashboards." },
      { icon: "🔗", title: "Easy API",          desc: "Simple REST API for integration with any CRM, ERP or custom application in minutes." },
    ],
  },
  {
    slug: "rcs",
    category: "messaging",
    icon: "✨",
    title: "RCS Messages",
    cardTitle: "RCS Messages",
    cardDesc: "Next-gen rich communication services with images, carousels and interactive buttons over SMS.",
    cardLinkLabel: "Learn More →",
    tag: "Rich Messaging",
    titleParts: { lead: "RCS", accent: "Messages" },
    detailDesc: "Next-generation Rich Communication Services (RCS) — send rich media messages with images, carousels, action buttons and verified brand identity, directly over the native SMS app.",
    ctaLabel: "Get RCS Access",
    featureCards: [
      { icon: "🖼️", title: "Rich Media",          desc: "Send images, videos, audio clips, carousels and documents directly in messages." },
      { icon: "🔘", title: "Action Buttons",     desc: "Interactive CTAs like \"Call Now\", \"Visit Website\", \"Buy Now\" embedded in messages." },
      { icon: "✅", title: "Brand Verification", desc: "Verified sender badge builds trust with recipients — no spoofing possible." },
      { icon: "📈", title: "Higher Engagement",  desc: "RCS messages get 5x higher engagement compared to plain SMS campaigns." },
    ],
  },
  {
    slug: "gworkspace",
    category: "messaging",
    icon: "🔵",
    title: "Google Workspace",
    cardTitle: "Google Workspace",
    cardDesc: "Gmail, Meet, Drive, Docs and more — official Google Workspace reseller for Indian businesses.",
    cardLinkLabel: "Get Started →",
    tag: "Productivity Suite",
    titleParts: { lead: "Google", accent: "Workspace" },
    detailDesc: "Official Google Workspace reseller — get Gmail for business, Google Meet, Drive, Docs, Sheets, Calendar and more with your custom domain. Trusted by 6M+ businesses worldwide.",
    ctaLabel: "Get Workspace",
    planGroups: [{
      plans: [
        { name: "Business Starter", price: "₹136", unit: "/user/mo",
          features: ["30 GB Drive Storage", "Custom Gmail", "100-person Meet", "Collaborative Docs"] },
        { name: "Business Standard", price: "₹736", unit: "/user/mo", featured: true,
          features: ["2 TB Drive Storage", "Custom Gmail", "150-person Meet + Rec", "Advanced Admin"] },
        { name: "Business Plus", price: "₹1,380", unit: "/user/mo",
          features: ["5 TB Drive Storage", "Custom Gmail + eDiscovery", "500-person Meet", "Vault + Advanced Security"] },
      ],
    }],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service["category"]): Service[] {
  return services.filter((s) => s.category === category);
}
