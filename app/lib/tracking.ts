type ContactMethod = "sms" | "whatsapp";

type Ga4Event =
  | { type: "page_view"; pagePath: string }
  | { type: "generate_lead" }
  | { type: "contact_sms"; method: "sms" }
  | { type: "contact_whatsapp"; method: "whatsapp" };
type MetaEvent = { type: "PageView" } | { type: "Lead" };

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

function sendGa4Event(event: Ga4Event) {
  if (!window.gtag) return;

  if (event.type === "page_view") {
    window.gtag("event", "page_view", {
      page_location: `${window.location.origin}${event.pagePath}`,
      page_path: event.pagePath,
    });
    return;
  }

  if (event.type === "generate_lead") {
    window.gtag("event", "generate_lead");
    return;
  }

  window.gtag("event", event.type, { method: event.method });
}

function sendMetaEvent(event: MetaEvent) {
  window.fbq?.("track", event.type);
}

function trackGa4Event(event: Ga4Event) {
  if (!ga4Configured || typeof window === "undefined") return;

  if (window.gtag) {
    sendGa4Event(event);
  } else {
    ga4Queue.push(event);
  }
}

function trackMetaEvent(event: MetaEvent) {
  if (!metaConfigured || typeof window === "undefined") return;

  if (window.fbq) {
    sendMetaEvent(event);
  } else {
    metaQueue.push(event);
  }
}

export function flushGa4TrackingQueue() {
  if (typeof window === "undefined" || !window.gtag) return;

  ga4Queue.splice(0).forEach(sendGa4Event);
}

export function flushMetaTrackingQueue() {
  if (typeof window === "undefined" || !window.fbq) return;

  metaQueue.splice(0).forEach(sendMetaEvent);
}

export function trackPageView(pathname: string) {
  const pagePath = safePathname(pathname);

  trackGa4Event({ type: "page_view", pagePath });
  trackMetaEvent({ type: "PageView" });
}

export function trackLead() {
  trackGa4Event({ type: "generate_lead" });
  trackMetaEvent({ type: "Lead" });
}

export function trackContact(method: ContactMethod) {
  trackGa4Event(
    method === "sms"
      ? { type: "contact_sms", method: "sms" }
      : { type: "contact_whatsapp", method: "whatsapp" },
  );
}
