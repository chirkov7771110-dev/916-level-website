"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  flushGa4TrackingQueue,
  flushMetaTrackingQueue,
  trackContact,
  trackPageView,
} from "@/lib/tracking";

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const validGa4Id = /^G-[A-Z0-9]+$/.test(GA4_MEASUREMENT_ID ?? "")
  ? GA4_MEASUREMENT_ID
  : undefined;
const validMetaPixelId = /^\d+$/.test(META_PIXEL_ID ?? "")
  ? META_PIXEL_ID
  : undefined;

export default function Tracking() {
  const pathname = usePathname();
  const trackedPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    if (trackedPathnameRef.current === pathname) return;

    trackedPathnameRef.current = pathname;
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    function handleContactClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href")?.trim();
      if (!href) return;

      if (href.toLowerCase().startsWith("tel:")) {
        trackContact("phone");
        return;
      }

      try {
        const hostname = new URL(href, window.location.origin).hostname.toLowerCase();
        if (hostname === "wa.me" || hostname === "api.whatsapp.com") {
          trackContact("whatsapp");
        }
      } catch {
        // Ignore links that are not valid URLs.
      }
    }

    document.addEventListener("click", handleContactClick);
    return () => document.removeEventListener("click", handleContactClick);
  }, []);

  return (
    <>
      {validGa4Id ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${validGa4Id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-initialization"
            strategy="afterInteractive"
            onReady={flushGa4TrackingQueue}
          >
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){window.dataLayer.push(arguments);};
              window.gtag('js', new Date());
              window.gtag('config', '${validGa4Id}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}

      {validMetaPixelId ? (
        <Script
          id="meta-pixel-initialization"
          strategy="afterInteractive"
          onReady={flushMetaTrackingQueue}
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${validMetaPixelId}');
          `}
        </Script>
      ) : null}
    </>
  );
}
