"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Skip to main content — accessibility + SEO */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:text-sm focus:font-bold focus:tracking-wide"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
              aria-label="916Level — go to top of page"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 overflow-hidden">
                <video
                  src="/images/logo/video_2026-05-23_19-22-44.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl tracking-widest uppercase">
                916<span className="text-[#c0c0c0]">Level</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium tracking-widest uppercase text-[#a0a0a0] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+19167101157"
                className="text-sm text-[#c0c0c0] hover:text-white transition-colors tracking-wide"
              >
                (916) 710-1157
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-5 py-2.5 border border-[#c0c0c0] text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-3 -mr-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 border-b border-[#2a2a2a]" : "max-h-0"
          } bg-[#0a0a0a]/98 backdrop-blur-md`}
        >
          <div className="px-4 py-6 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium tracking-widest uppercase text-[#a0a0a0] hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#2a2a2a] flex flex-col gap-3">
              <a href="tel:+19167101157" className="text-[#c0c0c0] text-sm tracking-wide">
                (916) 710-1157
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full py-3 border border-[#c0c0c0] text-white text-sm font-semibold tracking-widest uppercase"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-[#2a2a2a] bg-[#0a0a0a]/98 backdrop-blur-md">
        <a
          href="tel:+19167101157"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold tracking-widest uppercase text-[#c0c0c0] border-r border-[#2a2a2a]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <button
          onClick={() => handleNavClick("#contact")}
          className="flex-1 flex items-center justify-center py-4 text-sm font-semibold tracking-widest uppercase bg-white text-black"
        >
          Get a Quote
        </button>
      </div>
    </>
  );
}
