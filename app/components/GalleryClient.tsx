"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  // "gallery" = /images/gallery — shown in All Work only, no dedicated tab
  category: "gallery" | "ceramic" | "correction" | "scratch" | "headlights";
};

type FilterValue = "all" | "ceramic" | "correction" | "scratch" | "headlights";

const TABS: { value: FilterValue; label: string }[] = [
  { value: "all",        label: "All Work"               },
  { value: "ceramic",    label: "Ceramic Coating"         },
  { value: "correction", label: "Paint Correction"        },
  { value: "scratch",    label: "Scratch Removal"         },
  { value: "headlights", label: "Headlight Restoration"   },
];

function labelFromSrc(src: string): string {
  return src
    .split("/")
    .pop()!
    .replace(/\.[^.]+$/, "")
    .replace(/_/g, " ");
}

function VideoCard({ src, label, onClick }: { src: string; label: string; onClick: () => void }) {
  return (
    <figure
      className="relative aspect-square overflow-hidden bg-[#0a0a0a] group cursor-pointer"
      onClick={onClick}
    >
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

function PhotoCard({ src, label, onClick }: { src: string; label: string; onClick: () => void }) {
  return (
    <figure
      className="relative aspect-square overflow-hidden bg-[#0a0a0a] group cursor-pointer"
      onClick={onClick}
    >
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

function EmptyState({ tab }: { tab: string }) {
  return (
    <div className="col-span-2 sm:col-span-3 lg:col-span-4 py-16 text-center">
      <p className="text-[#6b6b6b] text-sm tracking-wide">
        More {tab.toLowerCase()} photos and videos coming soon.
      </p>
    </div>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  const touchStartX = useRef<number | null>(null);

  // Keyboard navigation + Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -50) onNext();
    if (dx >  50) onPrev();
    touchStartX.current = null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-modal="true"
      role="dialog"
      aria-label="Media viewer"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl bg-black/50 hover:bg-black/80 transition-colors z-10"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-6 w-10 h-10 flex items-center justify-center text-white text-xl bg-black/50 hover:bg-black/80 transition-colors z-10"
          aria-label="Previous"
        >
          ←
        </button>
      )}

      {/* Next */}
      {index < items.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-6 w-10 h-10 flex items-center justify-center text-white text-xl bg-black/50 hover:bg-black/80 transition-colors z-10"
          aria-label="Next"
        >
          →
        </button>
      )}

      {/* Media */}
      <div
        className="relative max-w-[95vw] max-h-[90vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            controls
            playsInline
            className="max-w-full max-h-[90vh] w-auto h-auto"
            aria-label={labelFromSrc(item.src)}
          />
        ) : (
          <div className="relative w-[95vw] h-[90vh]">
            <Image
              src={item.src}
              alt={labelFromSrc(item.src)}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>
        )}
      </div>

      {/* Counter */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#a0a0a0] text-xs tracking-widest">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}

const ALL_WORK_INITIAL = 8;

export default function GalleryClient({ items }: { items: MediaItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [allWorkExpanded, setAllWorkExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function handleTabClick(value: FilterValue) {
    setActiveFilter(value);
    if (value !== "all") setAllWorkExpanded(false);
  }

  const allItems =
    activeFilter === "all"
      ? items
      : items.filter((i) => i.category === activeFilter);

  const visible =
    activeFilter === "all" && !allWorkExpanded
      ? allItems.slice(0, ALL_WORK_INITIAL)
      : allItems;

  const showToggle = activeFilter === "all" && allItems.length > ALL_WORK_INITIAL;

  // Lightbox navigates over allItems (full list, not collapsed visible)
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextItem = useCallback(() => setLightboxIndex((i) => (i !== null && i < allItems.length - 1 ? i + 1 : i)), [allItems.length]);

  function openLightbox(visibleIndex: number) {
    // Map from visible index back to allItems index
    const src = visible[visibleIndex].src;
    const fullIndex = allItems.findIndex((it) => it.src === src);
    setLightboxIndex(fullIndex !== -1 ? fullIndex : visibleIndex);
  }

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
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              aria-pressed={activeFilter === tab.value}
              aria-label={`Show ${tab.label}`}
              className={`px-4 sm:px-5 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border ${
                activeFilter === tab.value
                  ? "border-[#c0c0c0] text-white bg-[#c0c0c0]/10"
                  : "border-[#2a2a2a] text-[#6b6b6b] hover:border-[#6b6b6b] hover:text-[#a0a0a0]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Media grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
          role="list"
          aria-label={`${TABS.find((t) => t.value === activeFilter)!.label} — Roseville CA`}
        >
          {visible.length === 0
            ? <EmptyState tab={TABS.find((t) => t.value === activeFilter)!.label} />
            : visible.map((item, i) => (
                <div role="listitem" key={item.src}>
                  {item.type === "video"
                    ? <VideoCard src={item.src} label={labelFromSrc(item.src)} onClick={() => openLightbox(i)} />
                    : <PhotoCard src={item.src} label={labelFromSrc(item.src)} onClick={() => openLightbox(i)} />
                  }
                </div>
              ))
          }
        </div>

        {/* Show More / Show Less */}
        {showToggle && (
          <div className="mt-8 sm:mt-10 text-center">
            <button
              onClick={() => setAllWorkExpanded((v) => !v)}
              aria-expanded={allWorkExpanded}
              className="px-8 py-4 border border-[#3a3a3a] text-[#a0a0a0] text-xs font-bold tracking-widest uppercase hover:border-[#c0c0c0] hover:text-white transition-all duration-200"
            >
              {allWorkExpanded ? "Show Less ↑" : "Show More Work ↓"}
            </button>
          </div>
        )}

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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={allItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </section>
  );
}
