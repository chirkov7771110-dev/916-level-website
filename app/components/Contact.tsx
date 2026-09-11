"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  GENERAL_CONTACT_MESSAGE,
  buildGeneralSmsContinuationUrl,
  buildQuoteMessage,
  buildSmsContinuationUrl,
  buildSmsHref,
  buildWhatsAppHref,
  QUOTE_SERVICES,
  validateQuoteState,
} from "@/lib/quote";
import {
  trackQuoteStart,
  trackServiceSelected,
  trackSmsQrOpen,
} from "@/lib/tracking";

type QuoteDraft = {
  year: string;
  make: string;
  model: string;
  service: string;
};

const EMPTY_QUOTE: QuoteDraft = {
  year: "",
  make: "",
  model: "",
  service: "",
};

export default function Contact() {
  const [quoteDraft, setQuoteDraft] = useState<QuoteDraft>(EMPTY_QUOTE);
  const [showErrors, setShowErrors] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const [smsModalOpen, setSmsModalOpen] = useState(false);
  const [smsContinuationUrl, setSmsContinuationUrl] = useState("");
  const [smsModalMessage, setSmsModalMessage] = useState("");
  const quoteStartedRef = useRef(false);
  const serviceSelectedRef = useRef(false);
  const validation = validateQuoteState(quoteDraft);
  const quote = validation.success ? validation.data : null;
  const message = quote ? buildQuoteMessage(quote) : "";
  const smsHref = quote ? buildSmsHref(message) : "";
  const whatsappHref = quote ? buildWhatsAppHref(message) : "";
  const generalSmsHref = buildSmsHref(GENERAL_CONTACT_MESSAGE);

  useEffect(() => {
    if (!smsModalOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSmsModalOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [smsModalOpen]);

  function handleFirstInteraction() {
    if (quoteStartedRef.current) return;
    quoteStartedRef.current = true;
    trackQuoteStart();
  }

  function updateField(field: keyof QuoteDraft, value: string) {
    handleFirstInteraction();
    setQuoteDraft((current) => ({ ...current, [field]: value }));
    setCopyStatus("idle");

    if (
      field === "service" &&
      QUOTE_SERVICES.includes(value as (typeof QUOTE_SERVICES)[number]) &&
      !serviceSelectedRef.current
    ) {
      serviceSelectedRef.current = true;
      trackServiceSelected();
    }
  }

  function revealValidationErrors() {
    handleFirstInteraction();
    setShowErrors(true);
  }

  function openSmsModal() {
    if (!quote) {
      revealValidationErrors();
      return;
    }

    setSmsContinuationUrl(buildSmsContinuationUrl(quote, window.location.origin));
    setSmsModalMessage(message);
    setCopyStatus("idle");
    setSmsModalOpen(true);
    trackSmsQrOpen();
  }

  function openGeneralSmsModal() {
    setSmsContinuationUrl(buildGeneralSmsContinuationUrl(window.location.origin));
    setSmsModalMessage(GENERAL_CONTACT_MESSAGE);
    setCopyStatus("idle");
    setSmsModalOpen(true);
    trackSmsQrOpen();
  }

  async function copyMessage(messageToCopy: string) {
    if (!messageToCopy) {
      revealValidationErrors();
      return;
    }

    try {
      await navigator.clipboard.writeText(messageToCopy);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  }

  function handleCopyMessage() {
    return copyMessage(message);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-16 overflow-hidden bg-[#080a0c] py-20 sm:scroll-mt-20 sm:py-28"
    >
      <div className="absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
        <Image
          src="/images/contact-detailing-garage.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 hidden md:block"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/contact-detailing-garage.webp"
          alt=""
          width={1644}
          height={957}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="absolute inset-0 bg-[#050709] md:hidden" aria-hidden="true" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_center,rgba(3,6,8,0.3)_0%,rgba(3,6,8,0.12)_48%,rgba(3,6,8,0)_78%)] md:block" aria-hidden="true" />
      <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-black/10 to-[#080a0c]/70 md:block" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d0d0d] to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080808] to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col">

          {/* Section heading */}
          <div className="contents">
            <p className="order-1 mx-auto mb-6 inline-flex items-center gap-4" aria-hidden="true">
              <span className="block h-px w-10 bg-[#d6a85f]" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e0b66f]">
                Get in Touch
              </span>
              <span className="block h-px w-10 bg-[#d6a85f]" />
            </p>

            <h2
              id="contact-heading"
              className="order-1 mb-5 text-center text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Ready to Get<br className="sm:hidden" />{" "}
              <span className="text-[#d9aa62]">an Estimate?</span>
            </h2>

            <p className="order-1 mx-auto mb-3 max-w-2xl text-center text-base leading-relaxed text-[#e0e0e0] sm:text-lg">
              Enter your vehicle details, select a service, and send your request by Text or WhatsApp.
            </p>

            <p className="order-1 mx-auto mb-2 text-center text-sm leading-relaxed text-[#c8c8c8] sm:text-base">
              Messages welcome in English, <span lang="ru">Русский</span> &amp;{" "}
              <span lang="uk">Українська</span>
            </p>

            <p className="order-1 mx-auto mb-10 text-center text-sm leading-relaxed text-[#9f9f9f]">
              Written messages only — Text or WhatsApp.
            </p>

            <div className="order-4 mx-auto mt-8 grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-5" aria-label="Direct communication options">
              <a
                href={generalSmsHref}
                className="flex min-h-14 items-center justify-center gap-3 border border-white/65 bg-black/35 px-3 py-3 text-center text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-[#e0b66f] hover:text-[#e0b66f] sm:text-sm md:hidden"
              >
                <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Text / SMS
              </a>
              <button
                type="button"
                onClick={openGeneralSmsModal}
                className="hidden min-h-14 items-center justify-center gap-3 border border-white/65 bg-black/35 px-3 py-3 text-center text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-[#e0b66f] hover:text-[#e0b66f] sm:text-sm md:flex"
              >
                <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Text / SMS
              </button>
              <a
                href="https://wa.me/19164627323"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 items-center justify-center gap-3 border border-white/65 bg-black/35 px-3 py-3 text-center text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-[#e0b66f] hover:text-[#e0b66f] sm:text-sm"
                aria-label="Message 916Level on WhatsApp"
              >
                <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Central quote flow */}
          <div className="order-2 mx-auto w-full max-w-5xl">
            <div className="w-full border border-white/25 bg-[#05090c]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-7 lg:p-9">
              <p className="mb-7 flex items-center justify-center gap-5 text-xs font-semibold uppercase tracking-[0.32em] text-white sm:text-sm">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d6a85f]" aria-hidden="true" />
                Get a Quote
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d6a85f]" aria-hidden="true" />
              </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-5"
              aria-label="Prepare a quote request for ceramic coating or detailing in Roseville CA"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="quote-year" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#c8c8c8]">
                    Year <span className="text-[#d6a85f]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="quote-year"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={4}
                    required
                    value={quoteDraft.year}
                    onFocus={handleFirstInteraction}
                    onChange={(event) => updateField("year", event.target.value)}
                    placeholder="2022"
                    aria-invalid={showErrors && Boolean(validation.errors.year)}
                    aria-describedby={showErrors && validation.errors.year ? "quote-year-error" : undefined}
                    className="w-full border border-white/20 bg-[#0b1014]/95 px-4 py-3.5 text-sm text-white placeholder-[#596069] transition-colors duration-200 focus:border-[#d6a85f] focus:outline-none"
                  />
                  {showErrors && validation.errors.year ? <p id="quote-year-error" className="text-red-400 text-xs mt-1">{validation.errors.year}</p> : null}
                </div>

                <div>
                  <label htmlFor="quote-make" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#c8c8c8]">
                    Make <span className="text-[#d6a85f]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="quote-make"
                    type="text"
                    autoComplete="off"
                    maxLength={40}
                    required
                    value={quoteDraft.make}
                    onFocus={handleFirstInteraction}
                    onChange={(event) => updateField("make", event.target.value)}
                    placeholder="BMW"
                    aria-invalid={showErrors && Boolean(validation.errors.make)}
                    aria-describedby={showErrors && validation.errors.make ? "quote-make-error" : undefined}
                    className="w-full border border-white/20 bg-[#0b1014]/95 px-4 py-3.5 text-sm text-white placeholder-[#596069] transition-colors duration-200 focus:border-[#d6a85f] focus:outline-none"
                  />
                  {showErrors && validation.errors.make ? <p id="quote-make-error" className="text-red-400 text-xs mt-1">{validation.errors.make}</p> : null}
                </div>

                <div>
                  <label htmlFor="quote-model" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#c8c8c8]">
                    Model <span className="text-[#d6a85f]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="quote-model"
                    type="text"
                    autoComplete="off"
                    maxLength={60}
                    required
                    value={quoteDraft.model}
                    onFocus={handleFirstInteraction}
                    onChange={(event) => updateField("model", event.target.value)}
                    placeholder="M3"
                    aria-invalid={showErrors && Boolean(validation.errors.model)}
                    aria-describedby={showErrors && validation.errors.model ? "quote-model-error" : undefined}
                    className="w-full border border-white/20 bg-[#0b1014]/95 px-4 py-3.5 text-sm text-white placeholder-[#596069] transition-colors duration-200 focus:border-[#d6a85f] focus:outline-none"
                  />
                  {showErrors && validation.errors.model ? <p id="quote-model-error" className="text-red-400 text-xs mt-1">{validation.errors.model}</p> : null}
                </div>
              </div>

              <div>
                <label htmlFor="quote-service" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#c8c8c8]">
                  Service <span className="text-[#d6a85f]" aria-hidden="true">*</span>
                </label>
                <select
                  id="quote-service"
                  required
                  value={quoteDraft.service}
                  onFocus={handleFirstInteraction}
                  onChange={(event) => updateField("service", event.target.value)}
                  aria-invalid={showErrors && Boolean(validation.errors.service)}
                  aria-describedby={showErrors && validation.errors.service ? "quote-service-error" : undefined}
                  className="w-full cursor-pointer appearance-none border border-white/20 bg-[#0b1014]/95 px-4 py-3.5 text-sm text-white transition-colors duration-200 focus:border-[#d6a85f] focus:outline-none"
                >
                  <option value="" disabled>Select a service</option>
                  {QUOTE_SERVICES.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {showErrors && validation.errors.service ? <p id="quote-service-error" className="text-red-400 text-xs mt-1">{validation.errors.service}</p> : null}
              </div>

              {quote ? (
                <div className="border border-white/15 bg-black/30 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8f969d]">Prepared message</p>
                  <p className="text-sm leading-relaxed text-[#d0d0d0]">{message}</p>
                </div>
              ) : null}

              <div className="grid grid-cols-2 gap-3">
                {quote ? (
                  <a
                    href={smsHref}
                    className="flex md:hidden items-center justify-center w-full py-4 px-2 bg-white text-black text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] transition-colors duration-200"
                  >
                    Text / SMS
                  </a>
                ) : (
                  <button type="button" onClick={revealValidationErrors} className="flex md:hidden items-center justify-center w-full py-4 px-2 bg-white text-black text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] transition-colors duration-200">
                    Text / SMS
                  </button>
                )}

                <button
                  type="button"
                  onClick={openSmsModal}
                  className="hidden md:flex items-center justify-center w-full py-4 px-2 bg-white text-black text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] transition-colors duration-200"
                >
                  Text / SMS
                </button>

                {quote ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 px-2 bg-white text-black text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                ) : (
                  <button type="button" onClick={revealValidationErrors} className="flex items-center justify-center w-full py-4 px-2 bg-white text-black text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] transition-colors duration-200">
                    WhatsApp
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="w-full text-center text-sm text-[#a0a0a0] underline underline-offset-4 transition-colors hover:text-white"
              >
                Copy Message
              </button>

              <p className="text-xs text-[#6b6b6b]" role="status" aria-live="polite">
                {copyStatus === "copied"
                  ? "Message copied."
                  : copyStatus === "failed"
                    ? "Copy was unavailable. Select and copy the prepared message above."
                    : "SMS message prefill varies by device. Copy Message is available as a fallback."}
              </p>

              <div className="grid gap-3 border-t border-white/20 pt-5 text-sm text-[#b8b8b8]">
                <p className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-[#d6a85f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  We typically respond within 1 hour during business hours.
                </p>
                <p className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-[#d6a85f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h3l2-3h8l2 3h3v13H3V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.5 13a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
                  </svg>
                  You can send photos by Text or WhatsApp to help us provide a faster, more accurate estimate.
                </p>
              </div>
            </form>
            </div>
          </div>

          {/* Google Review — separate from quote conversion */}
          <div className="order-6 mx-auto mt-10 w-full max-w-6xl">
            <div>
              <a
                href="https://g.page/r/Cc1UipI5O5QCEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full flex-col items-center justify-between gap-5 border border-white/20 bg-black/45 px-5 py-6 text-center backdrop-blur-sm transition-colors hover:border-[#d6a85f] sm:flex-row sm:px-8 sm:text-left"
                aria-label="Leave a Google review for 916Level"
              >
                <span className="flex flex-col items-center gap-4 sm:flex-row">
                  <svg className="h-12 w-12 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>
                    <span className="block text-lg font-bold text-white">Leave a Review on Google</span>
                    <span className="mt-1 block text-sm text-[#a9a9a9]">Had a service with us? Share your experience on Google.</span>
                  </span>
                </span>
                <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6a85f] px-6 text-sm font-bold text-[#e0b66f]">
                  Write a Review <span className="ml-3" aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>

          {/* Contact details and support */}
          <div className="contents">
            <address className="order-3 mx-auto mt-10 grid w-full max-w-6xl gap-6 border-y border-white/15 py-8 not-italic md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/15">
              <div className="flex items-center gap-4 md:justify-center md:px-6">
                <div className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-widest uppercase mb-0.5">Location</p>
                  <p className="text-white font-semibold">Roseville, CA 95747</p>
                  <p className="text-[#a0a0a0] text-sm">Serving Placer County &amp; Sacramento</p>
                </div>
              </div>

              <a
                href="mailto:916levelceramiccoating@gmail.com"
                className="group flex items-center gap-4 md:justify-center md:px-6"
                aria-label="Email 916Level at 916levelceramiccoating@gmail.com"
              >
                <div className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c0c0c0] transition-colors duration-200 flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-widest uppercase mb-0.5">Email</p>
                  <p className="break-all font-semibold text-white transition-colors group-hover:text-[#e0b66f] sm:break-normal">916levelceramiccoating@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 md:justify-center md:px-6">
                <div className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-widest uppercase mb-0.5">Hours</p>
                  <p className="text-white font-semibold">Mon – Sun: 9am – 7pm</p>
                </div>
              </div>
            </address>

            <div className="order-5 mx-auto mt-10 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d6a85f]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.28em] text-[#b8b8b8]">Follow Us</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d6a85f]" aria-hidden="true" />
              </div>

              <div className="flex flex-wrap items-start justify-center gap-5 sm:gap-8">
                <a
                  href="https://www.instagram.com/916level?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-[5.5rem] flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-[#e0b66f]"
                  aria-label="Follow 916Level on Instagram"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_42%,#d6249f_62%,#285AEB_90%)] shadow-[0_0_18px_rgba(214,36,159,0.28)]" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </span>
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61586162640488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-[5.5rem] flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-[#e0b66f]"
                  aria-label="Follow 916Level on Facebook"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-[#1877F2] shadow-[0_0_18px_rgba(24,119,242,0.25)]" aria-hidden="true">
                    <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7H17V2.5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.6H7V13h3v9h3.5z" />
                    </svg>
                  </span>
                  Facebook
                </a>

                <a
                  href="https://www.tiktok.com/@916level"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-[5.5rem] flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-[#e0b66f]"
                  aria-label="Follow 916Level on TikTok"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-black shadow-[0_0_18px_rgba(37,244,238,0.18)] ring-1 ring-white/10" aria-hidden="true">
                    <svg className="h-7 w-7" viewBox="0 0 24 24">
                      <path fill="#25F4EE" transform="translate(-0.65 0.45)" d="M14 3v10.25a4.25 4.25 0 1 1-3-4.06v3.34a1.25 1.25 0 1 0 1 1.22V3h2zm0 2.75c1.15 1.8 2.95 2.96 5 3.2v3.05c-1.9-.16-3.62-.8-5-1.82V5.75z" />
                      <path fill="#FE2C55" transform="translate(0.65 -0.45)" d="M14 3v10.25a4.25 4.25 0 1 1-3-4.06v3.34a1.25 1.25 0 1 0 1 1.22V3h2zm0 2.75c1.15 1.8 2.95 2.96 5 3.2v3.05c-1.9-.16-3.62-.8-5-1.82V5.75z" />
                      <path fill="white" d="M14 3v10.25a4.25 4.25 0 1 1-3-4.06v3.34a1.25 1.25 0 1 0 1 1.22V3h2zm0 2.75c1.15 1.8 2.95 2.96 5 3.2v3.05c-1.9-.16-3.62-.8-5-1.82V5.75z" />
                    </svg>
                  </span>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {smsModalOpen && smsModalMessage ? (
        <div
          className="fixed inset-0 z-[100] hidden md:flex items-center justify-center bg-black/80 p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSmsModalOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sms-modal-title"
            className="w-full max-w-md border border-[#2a2a2a] bg-[#0d0d0d] p-8 text-center shadow-2xl"
          >
            <h3 id="sms-modal-title" className="text-2xl font-bold text-white mb-3">Continue by Text</h3>
            <p className="text-sm leading-relaxed text-[#a0a0a0] mb-6">
              Scan this QR code with your phone to continue with a pre-filled text message.
            </p>
            <div className="mx-auto mb-6 w-fit bg-white p-4">
              <QRCodeSVG value={smsContinuationUrl} size={220} level="M" />
            </div>
            <div className="grid gap-3">
              <a
                href={buildSmsHref(smsModalMessage)}
                className="flex items-center justify-center bg-white px-5 py-3.5 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-[#c0c0c0]"
              >
                Open Text Message
              </a>
              <button
                type="button"
                onClick={() => copyMessage(smsModalMessage)}
                className="border border-[#2a2a2a] px-5 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#c0c0c0] transition-colors hover:border-[#c0c0c0] hover:text-white"
              >
                Copy Message
              </button>
              <button
                type="button"
                onClick={() => setSmsModalOpen(false)}
                className="px-5 py-2 text-sm text-[#8a8a8a] transition-colors hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
