type ContactMethod = "sms" | "whatsapp";

type Ga4Event =
  | { type: "page_view"; pagePath: string }
  | { type: "contact_sms"; method: "sms" }
  | { type: "contact_whatsapp"; method: "whatsapp" }
  | { type: "quote_start" }
  | { type: "service_selected" }
  | { type: "quote_sms_qr_open"; method: "sms" };
type MetaEvent = { type: "PageView" };

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

const ga4Configured = /^G-[A-Z0-9]+$/.test(
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",
);
const metaConfigured = /^\d+$/.test(process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "");

const ga4Queue: Ga4Event[] = [];
const metaQueue: MetaEvent[] = [];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

function safePathname(pathname: string) {
  if (!pathname.startsWith("/")) return "/";

  return pathname.split(/[?#]/, 1)[0] || "/";
}

export function isTrackingExcludedPath(pathname: string) {
  return pathname === "/quote/sms" || pathname.startsWith("/quote/sms/");
}

function trackingIsAllowed() {
  return (
    typeof window !== "undefined" && !isTrackingExcludedPath(window.location.pathname)
  );
}

function sendGa4Event(event: Ga4Event) {
  if (!window.gtag) return;

  if (event.type === "page_view") {
    window.gtag("event", "page_view", {
      page_location: `${window.location.origin}${event.pagePath}`,
      page_path: event.pagePath,
    });
    return;
  }

  if (event.type === "contact_sms" || event.type === "contact_whatsapp") {
    window.gtag("event", event.type, { method: event.method });
    return;
  }

  if (event.type === "quote_sms_qr_open") {
    window.gtag("event", "quote_sms_qr_open", { method: "sms" });
    return;
  }

  window.gtag("event", event.type);
}

function sendMetaEvent(event: MetaEvent) {
  window.fbq?.("track", event.type);
}

function trackGa4Event(event: Ga4Event) {
  if (!ga4Configured || !trackingIsAllowed()) return;

  if (window.gtag) {
    sendGa4Event(event);
  } else {
    ga4Queue.push(event);
  }
}

function trackMetaEvent(event: MetaEvent) {
  if (!metaConfigured || !trackingIsAllowed()) return;

  if (window.fbq) {
    sendMetaEvent(event);
  } else {
    metaQueue.push(event);
  }
}

export function flushGa4TrackingQueue() {
  if (!trackingIsAllowed()) {
    ga4Queue.splice(0);
    return;
  }
  if (!window.gtag) return;

  ga4Queue.splice(0).forEach(sendGa4Event);
}

export function flushMetaTrackingQueue() {
  if (!trackingIsAllowed()) {
    metaQueue.splice(0);
    return;
  }
  if (!window.fbq) return;

  metaQueue.splice(0).forEach(sendMetaEvent);
}

export function trackPageView(pathname: string) {
  const pagePath = safePathname(pathname);

  if (isTrackingExcludedPath(pagePath)) return;

  trackGa4Event({ type: "page_view", pagePath });
  trackMetaEvent({ type: "PageView" });
}

export function trackContact(method: ContactMethod) {
  trackGa4Event(
    method === "sms"
      ? { type: "contact_sms", method: "sms" }
      : { type: "contact_whatsapp", method: "whatsapp" },
  );
}

export function trackQuoteStart() {
  trackGa4Event({ type: "quote_start" });
}

export function trackServiceSelected() {
  trackGa4Event({ type: "service_selected" });
}

export function trackSmsQrOpen() {
  trackGa4Event({ type: "quote_sms_qr_open", method: "sms" });
}
