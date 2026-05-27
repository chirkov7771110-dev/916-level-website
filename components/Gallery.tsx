"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "ceramic" | "correction" | "scratch" | "headlights";

type MediaItem = {
  type: "image" | "video";
  src: string;
  label: string;
  alt: string;
  category: Category;
};

// ─── Media registry ──────────────────────────────────────────────────────────
// ceramic   → public/videos/ceramic/   (real ceramic coating results)
// correction → public/images/gallery/  (photos tagged as correction)
// scratch    → public/images/gallery/  (photos tagged as scratch)
// headlights → empty until media added
// Empty categories are automatically hidden from filter tabs.
// ─────────────────────────────────────────────────────────────────────────────

const MEDIA: MediaItem[] = [
  // ── Ceramic Coating — dedicated ceramic result videos ─────────────────────
  {
    type: "video",
    src: "/videos/ceramic/video_2026-05-26_20-49-28.mp4",
    label: "Ceramic Coating — Gloss Finish",
    alt: "Ceramic coating gloss finish result — 916Level Roseville CA",
    category: "ceramic",
  },
  {
    type: "video",
    src: "/videos/ceramic/video_2026-05-26_20-50-08.mp4",
    label: "Ceramic Coating — Water Beading",
    alt: "Hydrophobic ceramic coating water beading effect — Roseville CA",
    category: "ceramic",
  },
  {
    type: "video",
    src: "/videos/ceramic/video_2026-05-26_20-50-13.mp4",
    label: "Ceramic Coating — Deep Shine",
    alt: "Ceramic coating deep shine and paint protection — 916Level",
    category: "ceramic",
  },
  {
    type: "video",
    src: "/videos/ceramic/video_2026-05-26_20-50-17.mp4",
    label: "Ceramic Coating — Final Result",
    alt: "Ceramic coating completed vehicle result — Roseville Sacramento CA",
    category: "ceramic",
  },
  {
    type: "video",
    src: "/videos/ceramic/video_2026-05-26_20-50-20.mp4",
    label: "Ceramic Coating — Premium Finish",
    alt: "Premium ceramic coating finish — professional detailing 916Level",
    category: "ceramic",
  },

  // ── Paint Correction ───────────────────────────────────────────────────────
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-43.jpg",
    label: "Paint Correction — Deep Gloss",
    alt: "Paint correction deep gloss finish result — 916Level Roseville",
    category: "correction",
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
    src: "/images/gallery/photo_2026-05-23_19-24-13.jpg",
    label: "Paint Correction — Oxidation",
    alt: "Paint oxidation removal and correction — professional detailing Roseville",
    category: "correction",
  },
  {
    type: "video",
    src: "/images/gallery/video_2026-05-23_19-23-29.mp4",
    label: "Paint Correction Process",
    alt: "Paint correction machine polishing process — Roseville CA detailing",
    category: "correction",
  },

  // ── Scratch Removal ────────────────────────────────────────────────────────
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-49.jpg",
    label: "Scratch Removal — Clear Coat",
    alt: "Clear coat scratch removal result — Placer County auto detailing",
    category: "scratch",
  },
  {
    type: "image",
    src: "/images/gallery/photo_2026-05-23_19-23-54.jpg",
    label: "Scratch Removal — Panel Repair",
    alt: "Scratch removal and panel repair result — 916Level Roseville CA",
    category: "scratch",
  },
];

// ─── Filters: only show tabs that have at least one media item ────────────────
const ALL_FILTERS = [
  { label: "All Work",             value: "all"        },
  { label: "Ceramic Coating",      value: "ceramic"    },
  { label: "Paint Correction",     value: "correction" },
  { label: "Scratch Removal",      value: "scratch"    },
  { label: "Headlight Restoration",value: "headlights" },
] as const;

type FilterValue = (typeof ALL_FILTERS)[number]["value"];

const populatedCategories = new Set<string>(MEDIA.map((m) => m.category));
const FILTERS = ALL_FILTERS.filter(
  (f) => f.value === "all" || populatedCategories.has(f.value)
);

// ─── Cards ────────────────────────────────────────────────────────────────────
function VideoCard({ src, label, alt }: { src: string; label: string; alt: string }) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#0a0a0a] group cursor-pointer">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {/* Play badge */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true">
        <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" aria-hidden="true" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
        <p className="text-white text-xs font-semibold tracking-wide">{label}</p>
      </figcaption>
    </figure>
  );
}

function PhotoCard({ src, label, alt }: { src: string; label: string; alt: string }) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#0a0a0a] group cursor-pointer">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" aria-hidden="true" />
      <div className="absolute inset-0 border border-transparent group-hover:border-[#c0c0c0]/20 transition-colors duration-300" aria-hidden="true" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
        <p className="text-white text-xs font-semibold tracking-wide">{label}</p>
      </figcaption>
    </figure>
  );
}

// ─── Gallery section ──────────────────────────────────────────────────────────
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

        {/* Header */}
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
            Ceramic Coating &amp; Detailing Gallery
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto text-base sm:text-lg">
            Real vehicles, real results. See our ceramic coating, paint correction, and scratch removal work across Roseville and Sacramento.
          </p>
        </header>

        {/* Filter tabs — only populated categories shown */}
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
          {filtered.map((item) => (
            <div role="listitem" key={item.src}>
              {item.type === "video"
                ? <VideoCard src={item.src} label={item.label} alt={item.alt} />
                : <PhotoCard src={item.src} label={item.label} alt={item.alt} />
              }
            </div>
          ))}
        </div>

        {/* CTA */}
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
