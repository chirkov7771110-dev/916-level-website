"use client";

import { useState } from "react";
import Image from "next/image";

type MediaItem = {
  type: "image" | "video";
  src: string;
  label: string;
  alt: string;
  category: "ceramic" | "correction" | "scratch" | "all";
};

const MEDIA: MediaItem[] = [
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-35.jpg",
    label: "Ceramic Coating — Black Sedan",
    alt: "Ceramic coating applied to black sedan — Roseville, CA",
    category: "ceramic",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-43.jpg",
    label: "Paint Correction — Deep Gloss",
    alt: "Paint correction result showing deep gloss finish — 916Level Roseville",
    category: "correction",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-49.jpg",
    label: "Scratch Removal — Clear Coat",
    alt: "Clear coat scratch removal before and after — Placer County auto detailing",
    category: "scratch",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-54.jpg",
    label: "Ceramic Coating — White SUV",
    alt: "Ceramic coating on white SUV — professional detailing Roseville CA",
    category: "ceramic",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-59.jpg",
    label: "Paint Correction — Swirl Removal",
    alt: "Swirl mark removal paint correction — Sacramento area auto detailing",
    category: "correction",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-24-03.jpg",
    label: "Full Detail — Exterior",
    alt: "Full exterior detail and paint protection — 916Level Roseville",
    category: "ceramic",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-24-09.jpg",
    label: "Ceramic Coating — Dark Blue",
    alt: "Ceramic coating on dark blue vehicle — Placer County CA",
    category: "ceramic",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-24-13.jpg",
    label: "Paint Correction — Oxidation",
    alt: "Paint oxidation removal and correction — professional detailing Roseville",
    category: "correction",
  },
  {
    type: "video",
    src: "/images/gallery/video_2026-05-23_19-23-24.mp4",
    label: "Coating Application",
    alt: "Ceramic coating application process video — 916Level Roseville CA",
    category: "ceramic",
  },
  {
    type: "video",
    src: "/images/gallery/video_2026-05-23_19-23-29.mp4",
    label: "Paint Correction Process",
    alt: "Paint correction machine polishing process — Roseville CA detailing",
    category: "correction",
  },
  {
    type: "video",
    src: "/images/gallery/video_2026-05-23_19-24-17.mp4",
    label: "Ceramic Coating Result",
    alt: "Ceramic coating final result and water beading — 916Level",
    category: "ceramic",
  },
  {
    type: "video",
    src: "/images/gallery/video_2026-05-23_19-24-21.mp4",
    label: "Surface Preparation",
    alt: "Paint surface preparation before ceramic coating — Roseville CA",
    category: "correction",
  },
];

const FILTERS = [
  { label: "All Work",        value: "all" },
  { label: "Ceramic Coating", value: "ceramic" },
  { label: "Paint Correction", value: "correction" },
  { label: "Scratch Removal",  value: "scratch" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

function VideoCard({ src, label, alt }: { src: string; label: string; alt: string }) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#111111] group cursor-pointer">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" aria-hidden="true" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-xs font-medium tracking-wide">{label}</p>
        <span className="text-[#c0c0c0] text-xs" aria-hidden="true">▶ Video</span>
      </figcaption>
    </figure>
  );
}

function PhotoCard({ src, label, alt }: { src: string; label: string; alt: string }) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#111111] group cursor-pointer">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" aria-hidden="true" />
      <div className="absolute inset-0 border border-transparent group-hover:border-[#c0c0c0]/30 transition-colors duration-300" aria-hidden="true" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-xs font-medium tracking-wide">{label}</p>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filtered = MEDIA.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-20 sm:py-28 bg-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <header className="text-center mb-12 sm:mb-16">
          <p className="inline-flex items-center gap-3 mb-4" aria-hidden="true">
            <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
            <span className="text-[#c0c0c0] text-xs font-semibold tracking-[0.3em] uppercase">
              Real Results
            </span>
            <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
          </p>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Ceramic Coating & Detailing Gallery
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto text-base sm:text-lg">
            Real vehicles, real results. See our ceramic coating, paint correction, and scratch removal work across Roseville and Sacramento.
          </p>
        </header>

        {/* Filter tabs */}
        <div
          role="group"
          aria-label="Filter gallery by service"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              aria-pressed={activeFilter === f.value}
              aria-label={`Show ${f.label} work`}
              className={`px-4 sm:px-5 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border ${
                activeFilter === f.value
                  ? "border-[#c0c0c0] text-white bg-[#c0c0c0]/10"
                  : "border-[#2a2a2a] text-[#6b6b6b] hover:border-[#6b6b6b] hover:text-[#a0a0a0]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
          role="list"
          aria-label={`${activeFilter === "all" ? "All detailing work" : activeFilter} gallery — Roseville CA`}
        >
          {filtered.map((item) =>
            item.type === "video" ? (
              <div role="listitem" key={item.src}>
                <VideoCard src={item.src} label={item.label} alt={item.alt} />
              </div>
            ) : (
              <div role="listitem" key={item.src}>
                <PhotoCard src={item.src} label={item.label} alt={item.alt} />
              </div>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-[#a0a0a0] text-sm mb-6">
            Ready to see results like this on your vehicle?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Contact us to book a ceramic coating or detailing service in Roseville"
            className="px-8 py-4 border border-[#c0c0c0] text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200"
          >
            Book Your Detail →
          </button>
        </div>
      </div>
    </section>
  );
}
