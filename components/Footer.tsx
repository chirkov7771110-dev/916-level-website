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
              href="tel:+19167101157"
              className="inline-flex items-center gap-2 text-[#c0c0c0] hover:text-white text-sm font-medium transition-colors"
              aria-label="Call 916Level at (916) 710-1157"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (916) 710-1157
            </a>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h2 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Services
            </h2>
            <ul className="space-y-0">
              {[
                { label: "Ceramic Coating", section: "#services" },
                { label: "Paint Correction", section: "#services" },
                { label: "Scratch Removal",  section: "#services" },
                { label: "Full Detail",       section: "#services" },
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
            <h2 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Service Area
            </h2>
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
          <nav aria-label="Social media links">
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
