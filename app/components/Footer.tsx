"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]" aria-label="Site footer">
      {/* Top silver line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 overflow-hidden flex-shrink-0" aria-hidden="true">
                <video
                  src="/images/logo/video_2026-05-23_19-22-44.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl tracking-widest uppercase">
                916<span className="text-[#c0c0c0]">Level</span>
              </span>
            </div>
            <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-xs mb-6">
              Professional ceramic coating, paint correction, and scratch removal in Roseville, CA. Serving Roseville, Sacramento, and all of Placer County.
            </p>
            <a
              href="sms:+19167413588"
              className="inline-flex md:hidden items-center gap-2 text-[#c0c0c0] hover:text-white text-sm font-medium transition-colors"
              aria-label="Text 916Level"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Text Us
            </a>
            <a
              href="https://wa.me/19164627323"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-[#c0c0c0] hover:text-white text-sm font-medium transition-colors"
              aria-label="Message 916Level on WhatsApp"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <p className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Services
            </p>
            <ul className="space-y-0">
              {[
                { label: "Ceramic Coating", section: "#services" },
                { label: "Paint Correction", section: "#services" },
                { label: "Scratch Removal",  section: "#services" },
                { label: "Headlight Restoration", section: "#services" },
              ].map((s) => (
                <li key={s.label}>
                  <button
                    onClick={() => document.querySelector(s.section)?.scrollIntoView({ behavior: "smooth" })}
                    aria-label={`Learn about ${s.label} in Roseville CA`}
                    className="text-[#6b6b6b] hover:text-[#c0c0c0] text-sm transition-colors py-1 block"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Area */}
          <div>
            <p className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Service Area
            </p>
            <ul className="space-y-2">
              {[
                "Roseville, CA",
                "Sacramento, CA",
                "Rocklin, CA",
                "Lincoln, CA",
                "Auburn, CA",
                "Granite Bay, CA",
                "Loomis, CA",
              ].map((city) => (
                <li key={city} className="text-[#6b6b6b] text-sm">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#3a3a3a] text-xs tracking-wide">
            <span>© {year} 916Level — Ceramic Coating &amp; Paint Correction.</span>{" "}
            <span>Roseville, CA. All rights reserved.</span>
          </p>
          <nav aria-label="Footer links" className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-[#3a3a3a] hover:text-[#c0c0c0] text-xs tracking-widest uppercase transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.instagram.com/916level?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3a3a3a] hover:text-[#c0c0c0] text-xs tracking-widest uppercase transition-colors"
              aria-label="Follow 916Level on Instagram"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="md:hidden h-16" aria-hidden="true" />
    </footer>
  );
}
