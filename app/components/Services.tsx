"use client";

const SERVICES = [
  {
    id: "ceramic",
    number: "01",
    title: "Ceramic Coating",
    tagline: "Ultimate Paint Protection",
    description:
      "A professional-grade nano-ceramic layer permanently bonds to your paint, creating a hydrophobic shield that repels water, dirt, and UV rays. Keeps your car looking new for years.",
    features: [
      "2–5 year protection",
      "Hydrophobic water beading",
      "UV & oxidation resistance",
      "Enhanced gloss & depth",
      "Swirl-resistant surface",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "correction",
    number: "02",
    title: "Paint Correction",
    tagline: "Restore Factory Perfection",
    description:
      "Machine polishing removes swirl marks, fine scratches, oxidation, and water spots that dull your paint. We restore clarity and gloss that makes your vehicle look brand new.",
    features: [
      "Single & multi-stage correction",
      "Swirl & scratch removal",
      "Oxidation elimination",
      "Mirror-like gloss finish",
      "Pre-coating preparation",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: "scratch",
    number: "03",
    title: "Scratch Removal",
    tagline: "Erase the Damage",
    description:
      "From light surface scuffs to deeper clear-coat scratches, we assess and eliminate paint damage that ruins your vehicle's appearance. Professional results without a full repaint.",
    features: [
      "Clear coat scratch repair",
      "Scuff & buffer mark removal",
      "Paint transfer elimination",
      "Panel-specific treatment",
      "No sanding visible panels",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "500+", label: "Vehicles Coated" },
  { value: "5.0★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "5 yr",  label: "Max Coating Life" },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 sm:py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <header className="text-center mb-16 sm:mb-20">
          <p className="inline-flex items-center gap-3 mb-4" aria-hidden="true">
            <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
            <span className="text-[#c0c0c0] text-xs font-semibold tracking-[0.3em] uppercase">
              What We Do
            </span>
            <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Auto Detailing Services in Roseville, CA
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto text-base sm:text-lg">
            Every service is performed with professional-grade products and meticulous attention to detail — serving Roseville, Sacramento, and Placer County.
          </p>
        </header>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              role="listitem"
              aria-labelledby={`service-title-${service.id}`}
              className="group relative flex flex-col border border-[#2a2a2a] bg-[#111111] hover:border-[#c0c0c0]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Top silver accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c0c0c0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              {/* Card content */}
              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Number + icon row */}
                <div className="flex items-start justify-between" aria-hidden="true">
                  <span className="text-[#2a2a2a] text-5xl font-black leading-none select-none">
                    {service.number}
                  </span>
                  <div className="text-[#c0c0c0] group-hover:text-white transition-colors duration-200">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <p className="text-[#c0c0c0] text-xs font-semibold tracking-[0.25em] uppercase mb-1">
                    {service.tagline}
                  </p>
                  <h3
                    id={`service-title-${service.id}`}
                    className="text-white text-2xl font-bold tracking-tight"
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#a0a0a0] text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="flex flex-col gap-2" aria-label={`${service.title} features`}>
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-[#a0a0a0]">
                      <span className="w-1 h-1 rounded-full bg-[#c0c0c0] flex-shrink-0" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label={`Get a quote for ${service.title} in Roseville, CA`}
                  className="w-full py-3 border border-[#2a2a2a] group-hover:border-[#c0c0c0] text-[#a0a0a0] group-hover:text-white text-sm font-semibold tracking-widest uppercase transition-all duration-200"
                >
                  Get a Quote →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <dl className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a]" aria-label="Business statistics">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-[#111111] py-8 px-6 text-center">
              <dt className="text-xs text-[#6b6b6b] tracking-widest uppercase order-2">
                {stat.label}
              </dt>
              <dd className="text-2xl sm:text-3xl font-black text-white mb-1 order-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
