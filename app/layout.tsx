import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import TawkChat from "@/components/TawkChat";

export const metadata: Metadata = {
  title: "ITPL Cloud – Strive To Success",
  description:
    "Scalable cloud infrastructure, lightning-fast hosting, and enterprise-grade solutions — designed to power startups, SMEs, and enterprises across India, USA & beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <Ticker />
        {children}
        <Footer />
        <TawkChat />
      </body>
    </html>
  );
}
