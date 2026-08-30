"use client";

const SERVICES = [
  {
    id: "ceramic",
    number: "01",
    title: "Ceramic Coating",
    tagline: "Ultimate Paint Protection",
    description:
      "Professional ceramic coating in Roseville, CA that bonds to your vehicle’s paint, creating a hydrophobic layer that helps repel water, dirt, and UV exposure while making the finish easier to maintain.",
    features: [
      "2–10 year protection",
      "Hydrophobic water beading",
      "UV & oxidation resistance",
      "Enhanced gloss & depth",
      "Swirl-resistant surface",
    ],
    price: "Starting at $600",
    priceNote:
      "$600 starting price applies to a small vehicle with a 2-year ceramic coating. Paint preparation and polishing are included.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "water-spots",
    number: "02",
    title: "Water Spot Removal",
    tagline: "Remove Mineral Deposits & Water Spots",
    description:
      "Professional water spot removal in Roseville, California, designed to remove mineral deposits and stubborn water spots from your vehicle's paint and exterior surfaces, helping restore a clean, smooth, and glossy finish.",
    features: [
      "Mineral deposit removal",
      "Water spot removal from paint",
      "Exterior surface treatment",
      "Restores clarity and gloss",
      "Treatment based on severity and affected area",
    ],
    price: "Starting at $150",
    priceNote:
      "Final pricing depends on the affected area and severity of the water spots.",
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
      "Professional scratch removal and paint scratch repair in Roseville, CA for surface scuffs, paint transfer, and clear-coat scratches. Deeper damage is assessed individually for the best possible improvement.",
    features: [
      "Clear coat scratch repair",
      "Scuff & buffer mark removal",
      "Paint transfer elimination",
      "Panel-specific treatment",
      "No sanding visible panels",
    ],
    price: "Starting at $100",
    priceNote:
      "Final pricing depends on the depth, size, and severity of the damage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    id: "headlights",
    number: "04",
    title: "Headlight Restoration",
    tagline: "Restore Lens Clarity",
    description:
      "We wet-sand and polish the outer lens surface to remove or significantly reduce external oxidation and cloudiness, restoring lens clarity and appearance.",
    features: [
      "Wet-sand & polish process",
      "Removes external oxidation & cloudiness",
      "Restores lens clarity",
      "6-month guarantee",
      "Ceramic headlight protection available",
    ],
    price: "$100 / pair",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10l9-6 9 6M4 10v9a1 1 0 001 1h4v-6h6v6h4a1 1 0 001-1v-9M9 14h1.5" />
      </svg>
    ),
  },
  {
    id: "onestep",
    number: "05",
    title: "One-Step Paint Correction",
    tagline: "Enhanced Gloss, Single Stage",
    description:
      "A single-stage machine polish that boosts gloss and reduces light paint imperfections.",
    features: [
      "Single-stage machine polish",
      "Enhanced gloss & shine",
      "Reduces light paint imperfections",
      "Machine-applied",
    ],
    price: "Starting at $200",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    id: "three-stage",
    number: "06",
    title: "3-Stage Paint Correction",
    tagline: "Maximum Paint Correction",
    description:
      "A multi-stage correction process designed to remove or significantly reduce deeper scratches, swirl marks, oxidation, and other clear-coat defects while restoring maximum clarity, depth, and gloss.",
    features: [
      "3-stage correction process",
      "Deep swirl & scratch reduction",
      "Oxidation & defect removal",
      "Maximum clarity & gloss",
      "Ceramic coating preparation",
    ],
    price: "Starting at $300",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l8 4-8 4-8-4 8-4zM4 11l8 4 8-4M4 15l8 4 8-4" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "3-Stage",    label: "Paint Correction" },
  { value: "Free",       label: "Photo Estimates" },
  { value: "Placer County", label: "Service Area" },
  { value: "10 yr",      label: "Max Coating Life" },
];

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <article
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
          {service.id === "ceramic" && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6b6b6b] border border-[#2a2a2a] px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-[#c0c0c0]" aria-hidden="true" />
              Professional System X Ceramic Coatings
            </p>
          )}
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

        {/* Price */}
        <div>
          <p className="text-white text-sm font-bold tracking-widest uppercase">
            {service.price}
          </p>
          {"priceNote" in service && service.priceNote && (
            <p className="mt-2 text-[#6b6b6b] text-xs leading-relaxed">
              {service.priceNote}
            </p>
          )}
        </div>
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
  );
}

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
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-[#8a8a8a]">
          Starting prices apply to smaller vehicles. Final pricing may vary based on vehicle size, paint condition, and the amount of correction required.
        </p>

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
