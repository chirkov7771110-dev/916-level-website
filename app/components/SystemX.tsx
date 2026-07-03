"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const FEATURES = [
  "Professional-grade ceramic protection",
  "CARFAX recognized products",
  "Up to 9H hardness",
  "Multi-year warranty options",
  "Automotive, Marine & Aviation solutions",
];

function ImageLightbox({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const total = images.length;

  const prev = useCallback(() => setCurrent((i) => (i > 0 ? i - 1 : i)), []);
  const next = useCallback(() => setCurrent((i) => (i < total - 1 ? i + 1 : i)), [total]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="System X product image"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-xl bg-black/50 hover:bg-black/80 transition-colors z-10"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      {current > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 sm:left-6 w-11 h-11 flex items-center justify-center text-white text-2xl bg-black/50 hover:bg-black/80 transition-colors z-10"
          aria-label="Previous image"
        >
          ←
        </button>
      )}

      {/* Next */}
      {current < total - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 sm:right-6 w-11 h-11 flex items-center justify-center text-white text-2xl bg-black/50 hover:bg-black/80 transition-colors z-10"
          aria-label="Next image"
        >
          →
        </button>
      )}

      {/* Image — full screen */}
      <div
        className="relative w-[97vw] h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={images[current]}
          src={images[current]}
          alt="System X ceramic coating product"
          fill
          className="object-contain"
          sizes="97vw"
          priority
        />
      </div>

      {/* Counter */}
      {total > 1 && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#a0a0a0] text-xs tracking-widest">
          {current + 1} / {total}
        </p>
      )}
    </div>
  );
}

export default function SystemX({ images }: { images: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <section
      aria-labelledby="systemx-heading"
      className="py-20 sm:py-28 bg-[#0a0a0a] border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-12 sm:mb-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="inline-flex items-center gap-3 mb-4" aria-hidden="true">
              <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
              <span className="text-[#c0c0c0] text-xs font-semibold tracking-[0.3em] uppercase">
                Professional Coating System
              </span>
              <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
            </p>
            <h2
              id="systemx-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              Why We Use<br />
              <span className="text-[#c0c0c0]">System X</span>
            </h2>
            <p className="text-[#a0a0a0] text-base leading-relaxed">
              We use professional System X ceramic coatings because they deliver exceptional gloss, long-term durability, excellent chemical resistance, and industry-leading protection for paint, glass, trim, interior surfaces, boats and aircraft.
            </p>
          </div>

          {/* Features */}
          <ul className="mt-8 lg:mt-0 flex flex-col gap-4" aria-label="System X product features">
            {FEATURES.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c0c0c0] flex-shrink-0" aria-hidden="true" />
                <span className="text-[#a0a0a0] text-sm leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </header>

        {/* Image grid */}
        <div
          className={`grid gap-4 ${
            images.length === 1 ? "grid-cols-1 max-w-lg mx-auto" :
            images.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
          role="list"
          aria-label="System X product images"
        >
          {images.map((src, i) => (
            <div role="listitem" key={src}>
              <button
                onClick={() => setLightboxIndex(i)}
                className="w-full group relative aspect-[4/3] overflow-hidden bg-[#111111] border border-[#2a2a2a] hover:border-[#c0c0c0]/40 transition-all duration-300 block"
                aria-label="View larger image"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c0c0c0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <Image
                  src={src}
                  alt="System X ceramic coating product"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {lightboxIndex !== null && (
        <ImageLightbox images={images} index={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </section>
  );
}
