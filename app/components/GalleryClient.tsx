"use client";

import { useState } from "react";
import Image from "next/image";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  // "gallery" = /images/gallery photos — shown in All Work, not a separate tab
  category: "gallery" | "ceramic" | "correction" | "scratch" | "headlights";
};

type FilterValue = "all" | "ceramic" | "correction" | "scratch" | "headlights";

const FILTER_LABELS: Record<FilterValue, string> = {
  all:        "All Work",
  ceramic:    "Ceramic Coating",
  correction: "Paint Correction",
  scratch:    "Scratch Removal",
  headlights: "Headlight Restoration",
};

function VideoCard({ src, label }: { src: string; label: string }) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#0a0a0a] group cursor-pointer">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={label}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div
        className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
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

function PhotoCard({ src, label }: { src: string; label: string }) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#0a0a0a] group cursor-pointer">
      <Image
        src={src}
        alt={label}
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

function labelFromSrc(src: string): string {
  return src
    .split("/")
    .pop()!
    .replace(/\.[^.]+$/, "")
    .replace(/_/g, " ");
}

export default function GalleryClient({ items }: { items: MediaItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  // Show a tab only if that category has at least one item
  const populated = new Set(items.map((i) => i.category));
  const filters = (Object.keys(FILTER_LABELS) as FilterValue[]).filter(
    (f) => f === "all" || populated.has(f)
  );

  const visible =
    activeFilter === "all"
      ? items  // All Work: everything including gallery photos
      : items.filter((i) => i.category === activeFilter);

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

        {/* Filter tabs */}
        <div
          role="group"
          aria-label="Filter gallery by service"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
              aria-label={`Show ${FILTER_LABELS[f]}`}
              className={`px-4 sm:px-5 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border ${
                activeFilter === f
                  ? "border-[#c0c0c0] text-white bg-[#c0c0c0]/10"
                  : "border-[#2a2a2a] text-[#6b6b6b] hover:border-[#6b6b6b] hover:text-[#a0a0a0]"
              }`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Debug label — remove after final confirmation */}
        {activeFilter === "ceramic" && (
          <p className="text-center text-xs font-mono text-green-400 mb-4 tracking-widest">
            FOLDER-BASED GALLERY ACTIVE
          </p>
        )}

        {/* Media grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
          role="list"
          aria-label={`${FILTER_LABELS[activeFilter]} — Roseville CA`}
        >
          {visible.map((item) => (
            <div role="listitem" key={item.src}>
              {item.type === "video"
                ? <VideoCard src={item.src} label={labelFromSrc(item.src)} />
                : <PhotoCard src={item.src} label={labelFromSrc(item.src)} />
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
