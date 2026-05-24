"use client";

import { useForm, ValidationError } from "@formspree/react";

const SERVICES_OPTIONS = [
  "Ceramic Coating",
  "Paint Correction",
  "Scratch Removal",
  "Full Detail Package",
  "Other",
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgvlvzv");

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
                href="tel:+19167101157"
                className="flex items-center gap-4 group"
                aria-label="Call 916Level at (916) 710-1157"
              >
                <div className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c0c0c0] transition-colors duration-200 flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-widest uppercase mb-0.5">Phone</p>
                  <p className="text-white text-lg font-semibold group-hover:text-[#c0c0c0] transition-colors">(916) 710-1157</p>
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
                href="mailto:chirkov7771110@gmail.com"
                className="flex items-center gap-4 group"
                aria-label="Email 916Level at chirkov7771110@gmail.com"
              >
                <div className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c0c0c0] transition-colors duration-200 flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-widest uppercase mb-0.5">Email</p>
                  <p className="text-white font-semibold group-hover:text-[#c0c0c0] transition-colors">chirkov7771110@gmail.com</p>
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
                  <p className="text-white font-semibold">Mon – Sat: 8am – 6pm</p>
                  <p className="text-[#a0a0a0] text-sm">Sunday: By appointment</p>
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
                  We&apos;ll call or text you within 24 hours to discuss your vehicle and get you scheduled.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
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

                <p className="text-center text-xs text-[#6b6b6b]">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
