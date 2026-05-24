"use client";

import { useEffect, useRef } from "react";

const HERO_VIDEOS = [
  "/images/gallery/video_2026-05-23_19-23-15.mp4",
  "/images/gallery/video_2026-05-23_19-23-24.mp4",
  "/images/gallery/video_2026-05-23_19-24-17.mp4",
];

function handleScrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
}

function handleScrollToGallery() {
  document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      aria-label="916Level — Ceramic Coating and Paint Correction in Roseville, CA"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          ref={videoRef}
          src={HERO_VIDEOS[0]}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent to-[#0a0a0a]/60" />
      </div>

      {/* Silver top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c0c0c0]/60 to-transparent z-10" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 sm:pt-32 sm:pb-40 text-center">

        {/* Eyebrow — location signal for local SEO */}
        <p className="inline-flex items-center gap-3 mb-6 sm:mb-8" aria-label="Service location">
          <span className="h-[1px] w-8 bg-[#c0c0c0]" aria-hidden="true" />
          <span className="text-[#c0c0c0] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Roseville, CA · Placer County · Sacramento
          </span>
          <span className="h-[1px] w-8 bg-[#c0c0c0]" aria-hidden="true" />
        </p>

        {/* H1 — primary keyword-optimized headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4 sm:mb-6">
          <span className="block text-white">Ceramic Coating</span>
          <span className="block text-white">&amp; Paint</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-white to-[#c0c0c0]">
            Perfection
          </span>
        </h1>

        {/* Subheadline — secondary keywords natural */}
        <p className="max-w-2xl mx-auto text-[#a0a0a0] text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12">
          Professional ceramic coating, paint correction, and scratch removal in Roseville and Sacramento.
          Your vehicle deserves nothing less than flawless protection.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          <button
            onClick={handleScrollToContact}
            aria-label="Get a free ceramic coating or paint correction quote"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] transition-colors duration-200 min-w-[200px]"
          >
            Get a Free Quote
          </button>
          <button
            onClick={handleScrollToGallery}
            aria-label="View our ceramic coating and paint correction gallery"
            className="w-full sm:w-auto px-8 py-4 border border-[#c0c0c0]/60 text-white text-sm font-bold tracking-widest uppercase hover:border-white transition-colors duration-200 min-w-[200px]"
          >
            See Our Work
          </button>
        </div>

        {/* Trust badges */}
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10" role="list" aria-label="Business credentials">
          {[
            { icon: "★", label: "5.0 Google Rating" },
            { icon: "✦", label: "Placer County" },
            { icon: "◈", label: "Licensed & Insured" },
            { icon: "◉", label: "Satisfaction Guarantee" },
          ].map((badge) => (
            <li key={badge.label} className="flex items-center gap-2">
              <span className="text-[#c0c0c0] text-sm" aria-hidden="true">{badge.icon}</span>
              <span className="text-[#a0a0a0] text-xs sm:text-sm tracking-wide">
                {badge.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span className="text-[#6b6b6b] text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-[#6b6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
