"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      setAttributes?: (
        attrs: Record<string, string>,
        cb?: (err?: unknown) => void,
      ) => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

export default function TawkChat() {
  const pathname = usePathname();

  useEffect(() => {
    if (!PROPERTY_ID || !WIDGET_ID) return;
    if (typeof window === "undefined") return;

    const url =
      window.location.origin + pathname + window.location.search;

    const apply = () => {
      window.Tawk_API?.setAttributes?.({ current_page: url });
    };

    if (window.Tawk_API?.setAttributes) {
      apply();
    } else {
      window.Tawk_API = window.Tawk_API ?? {};
      const prevOnLoad = window.Tawk_API.onLoad;
      window.Tawk_API.onLoad = () => {
        prevOnLoad?.();
        apply();
      };
    }
  }, [pathname]);

  if (!PROPERTY_ID || !WIDGET_ID) return null;

  return (
    <Script id="tawk-to" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();
        (function(){
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
