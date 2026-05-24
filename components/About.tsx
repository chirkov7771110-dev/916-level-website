"use client";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Inspection",
    desc: "We assess your paint under professional lighting to identify scratches, swirls, oxidation, and contaminants before any work begins.",
  },
  {
    step: "02",
    title: "Decontamination",
    desc: "A full two-bucket wash, iron decontamination, and clay bar treatment removes bonded contaminants and prepares a clean surface.",
  },
  {
    step: "03",
    title: "Correction",
    desc: "Machine polishing removes surface defects — swirl marks, fine scratches, and oxidation — restoring true paint clarity and gloss.",
  },
  {
    step: "04",
    title: "Protection",
    desc: "A professional-grade ceramic coating is applied in a controlled environment and cured to form a permanent, hydrophobic bond.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 sm:mb-28">

          {/* Left — video */}
          <div
            className="relative aspect-[4/3] lg:aspect-auto lg:h-[520px] overflow-hidden border border-[#2a2a2a]"
            aria-hidden="true"
          >
            <video
              src="/images/abaut/video_2026-05-23_19-24-34.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="916Level ceramic coating and paint correction work in Roseville CA"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#c0c0c0]" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#c0c0c0]" aria-hidden="true" />
          </div>

          {/* Right — copy */}
          <div>
            <p className="inline-flex items-center gap-3 mb-6" aria-hidden="true">
              <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
              <span className="text-[#c0c0c0] text-xs font-semibold tracking-[0.3em] uppercase">
                About 916Level
              </span>
            </p>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              Precision Detailing.<br />
              <span className="text-[#c0c0c0]">No Shortcuts.</span>
            </h2>

            <div className="space-y-4 text-[#a0a0a0] text-base leading-relaxed mb-8">
              <p>
                916Level is Roseville and Placer County&apos;s premier automotive protection specialist. We specialize in ceramic coatings, paint correction, and scratch removal for vehicle owners across Roseville, Sacramento, Rocklin, and the surrounding area who care about their investment.
              </p>
              <p>
                Every job gets the same treatment — we prep the surface properly, correct the paint before coating, and apply professional-grade products in a controlled environment. No rushing, no compromises.
              </p>
              <p>
                Whether it&apos;s a daily driver or your weekend car, your vehicle deserves to look its best. We back every service with a satisfaction guarantee.
              </p>
            </div>

            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-4 mb-8" aria-label="Why choose 916Level">
              {[
                "Roseville Based",
                "Serving Placer County & Sacramento",
                "Professional Grade Products",
                "Satisfaction Guaranteed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#c0c0c0] rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[#a0a0a0]">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Contact 916Level for ceramic coating or paint correction in Roseville"
              className="px-7 py-3.5 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-[#c0c0c0] transition-colors duration-200"
            >
              Work With Us
            </button>
          </div>
        </div>

        {/* Process section */}
        <div>
          <header className="text-center mb-12 sm:mb-16">
            <p className="inline-flex items-center gap-3 mb-4" aria-hidden="true">
              <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
              <span className="text-[#c0c0c0] text-xs font-semibold tracking-[0.3em] uppercase">
                How It Works
              </span>
              <span className="h-[1px] w-8 bg-[#c0c0c0] block" />
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Our Ceramic Coating Process
            </h2>
          </header>

          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            aria-label="Ceramic coating process steps"
          >
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.step} className="relative">
                {/* Connector line on desktop */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-5 left-full w-full h-[1px] bg-gradient-to-r from-[#2a2a2a] to-transparent z-0"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10">
                  <p className="text-[#c0c0c0] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                    Step {step.step}
                  </p>
                  <h3 className="text-white text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
