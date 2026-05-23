const ITEMS = [
  "🖥️ Linux Hosting",
  "🪟 Windows Hosting",
  "☁️ Cloud Hosting",
  "🖧 VPS Linux & Windows",
  "⚡ Dedicated Servers",
  "🔒 SSL Certificates",
  "📱 WhatsApp API",
  "📧 Bulk Email & SMS",
  "🌐 Domain Registration",
];

export default function Ticker() {
  // Duplicate the run so the CSS translateX(-50%) loops seamlessly.
  const run = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-bar">
      <div className="ticker-inner">
        {run.map((text, i) => (
          <span key={i} className="ticker-item">
            {text}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
