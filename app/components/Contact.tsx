"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { trackLead } from "@/lib/tracking";

const SERVICES_OPTIONS = [
  "Ceramic Coating",
  "Paint Correction",
  "Scratch Removal",
  "Headlight Restoration",
  "One-Step Polish",
  "3-Stage Paint Correction",
  "Other",
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgvlvzv");
  const localTimeRef = useRef<HTMLInputElement>(null);
  const leadTrackedRef = useRef(false);

  useEffect(() => {
    if (!state.succeeded || leadTrackedRef.current) return;

    leadTrackedRef.current = true;
    trackLead();
  }, [state.succeeded]);

  function handleSubmitWithTime(e: React.FormEvent<HTMLFormElement>) {
    if (localTimeRef.current) {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "America/Los_Angeles" });
      const day = now.toLocaleDateString("en-US", { day: "numeric", timeZone: "America/Los_Angeles" });
      const month = now.toLocaleDateString("en-US", { month: "long", timeZone: "America/Los_Angeles" });
      const year = now.toLocaleDateString("en-US", { year: "numeric", timeZone: "America/Los_Angeles" });
      localTimeRef.current.value = `Submitted ${time} - ${day} ${month} ${year}`;
    }
    handleSubmit(e);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 bg-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — info */}
          <div>
            <p className="inline-flex items-center gap-3 mb-6" aria-hidden="true">
              <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
              <span className="text-[#c0c0c0] text-xs font-semibold tracking-[0.3em] uppercase">
                Get in Touch
              </span>
            </p>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              Ready to Protect<br />
              <span className="text-[#c0c0c0]">Your Vehicle?</span>
            </h2>

            <p className="text-[#a0a0a0] text-base leading-relaxed mb-10">
              Fill out the form and we&apos;ll reach out within 24 hours to discuss your vehicle and schedule your ceramic coating, paint correction, or detailing service in Roseville or Sacramento.
            </p>

            {/* Contact details */}
            <address className="not-italic space-y-6 mb-10">
              <a
                href="sms:+19167413588"
                className="flex items-center gap-4 group"
                aria-label="Text 916Level"
              >
                <div className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c0c0c0] transition-colors duration-200 flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-widest uppercase mb-0.5">Text</p>
                  <p className="text-white text-lg font-semibold group-hover:text-[#c0c0c0] transition-colors">Text Us</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
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
                className="flex items-center gap-4 group"
                aria-label="Email 916Level at 916levelceramiccoating@gmail.com"
              >
                <div className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c0c0c0] transition-colors duration-200 flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-widest uppercase mb-0.5">Email</p>
                  <p className="text-white font-semibold group-hover:text-[#c0c0c0] transition-colors">916levelceramiccoating@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
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

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#6b6b6b] tracking-widest uppercase">Follow</span>
              <div className="h-[1px] w-6 bg-[#2a2a2a]" aria-hidden="true" />
              <a
                href="https://www.instagram.com/916level?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center hover:border-[#c0c0c0] hover:text-white text-[#6b6b6b] transition-all duration-200"
                aria-label="Follow 916Level on Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {state.succeeded ? (
              <div className="border border-[#c0c0c0]/30 bg-[#111111] p-10 flex flex-col items-center justify-center text-center min-h-[400px]" role="status" aria-live="polite">
                <div className="w-12 h-12 border border-[#c0c0c0] flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-6 h-6 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-3">Message Received</h3>
                <p className="text-[#a0a0a0] text-sm max-w-xs">
                  We&apos;ll text you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmitWithTime}
                className="space-y-5"
                aria-label="Request a quote for ceramic coating or detailing in Roseville CA"
              >
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-2"
                    >
                      Name <span className="text-[#c0c0c0]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      aria-required="true"
                      className="w-full bg-[#111111] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-200"
                    />
                    <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-2"
                    >
                      Phone <span className="text-[#c0c0c0]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="(916) 555-0000"
                      aria-required="true"
                      className="w-full bg-[#111111] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-200"
                    />
                    <ValidationError field="phone" prefix="Phone" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full bg-[#111111] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-200"
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                {/* Vehicle */}
                <div>
                  <label
                    htmlFor="contact-vehicle"
                    className="block text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-2"
                  >
                    Vehicle <span className="text-[#c0c0c0]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-vehicle"
                    type="text"
                    name="vehicle"
                    required
                    placeholder="Year, Make, Model (e.g. 2022 BMW M3)"
                    aria-required="true"
                    className="w-full bg-[#111111] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-200"
                  />
                  <ValidationError field="vehicle" prefix="Vehicle" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-2"
                  >
                    Service Interested In <span className="text-[#c0c0c0]" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    aria-required="true"
                    className="w-full bg-[#111111] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ValidationError field="service" prefix="Service" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-2"
                  >
                    Notes / Questions
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Any specific concerns, paint issues, or questions..."
                    className="w-full bg-[#111111] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-200 resize-none"
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <input type="hidden" name="local_time" ref={localTimeRef} />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  aria-busy={state.submitting}
                  className="w-full py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] disabled:opacity-60 transition-colors duration-200"
                >
                  {state.submitting ? "Sending..." : "Send Message →"}
                </button>

                <ValidationError errors={state.errors} className="text-center text-xs text-red-400" />

                {/* Divider */}
                <div className="flex items-center gap-3" aria-hidden="true">
                  <div className="flex-1 h-[1px] bg-[#2a2a2a]" />
                  <span className="text-[#3a3a3a] text-xs tracking-widest uppercase">or</span>
                  <div className="flex-1 h-[1px] bg-[#2a2a2a]" />
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/19164627323?text=Hi%20916%20Level%2C%20I%20would%20like%20an%20estimate.%20I%20can%20send%20photos%20of%20my%20vehicle."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 border border-[#2a2a2a] hover:border-[#c0c0c0] text-[#a0a0a0] hover:text-white text-sm font-semibold tracking-widest uppercase transition-all duration-200"
                  aria-label="Send photos via WhatsApp to get a faster estimate"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Photos on WhatsApp
                </a>

                <p className="text-center text-xs text-[#6b6b6b]">
                  Prefer to send photos? Use WhatsApp for a faster estimate.
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3" aria-hidden="true">
                  <div className="flex-1 h-[1px] bg-[#2a2a2a]" />
                  <span className="text-[#3a3a3a] text-xs tracking-widest uppercase">or</span>
                  <div className="flex-1 h-[1px] bg-[#2a2a2a]" />
                </div>

                {/* Google Review */}
                <a
                  href="https://g.page/r/Cc1UipI5O5QCEAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 border border-[#2a2a2a] hover:border-[#c0c0c0] text-[#a0a0a0] hover:text-white text-sm font-semibold tracking-widest uppercase transition-all duration-200"
                  aria-label="Leave a Google review for 916Level"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Leave a Google Review
                </a>

                <p className="text-center text-xs text-[#6b6b6b]">
                  Had a service with us? Share your experience on Google.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
