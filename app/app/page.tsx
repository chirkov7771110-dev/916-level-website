import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SystemXServer from "@/components/SystemXServer";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.916levelceramic.com/#business",
      "name": "916Level",
      "description":
        "Professional ceramic coating, paint correction, and scratch removal in Roseville, CA. Serving Roseville, Sacramento, and all of Placer County.",
      "url": "https://www.916levelceramic.com",
      "email": "916levelceramiccoating@gmail.com",
      "image": "https://www.916levelceramic.com/og-image.jpg",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Roseville",
        "addressRegion": "CA",
        "postalCode": "95747",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.7521,
        "longitude": -121.2880,
      },
      "areaServed": [
        { "@type": "City", "name": "Roseville", "sameAs": "https://en.wikipedia.org/wiki/Roseville,_California" },
        { "@type": "City", "name": "Sacramento", "sameAs": "https://en.wikipedia.org/wiki/Sacramento,_California" },
        { "@type": "City", "name": "Rocklin" },
        { "@type": "City", "name": "Lincoln" },
        { "@type": "City", "name": "Auburn" },
        { "@type": "City", "name": "Folsom" },
        { "@type": "City", "name": "Granite Bay" },
        { "@type": "City", "name": "Loomis" },
        { "@type": "AdministrativeArea", "name": "Placer County" },
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "19:00",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/916level",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Auto Detailing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ceramic Coating",
              "description":
                "Professional ceramic coating application in Roseville, CA. Creates a permanent hydrophobic bond that protects your paint for 2–10 years.",
              "areaServed": "Roseville, Sacramento, Placer County, CA",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Spot Removal",
              "description":
                "Professional water spot removal in Roseville, California, designed to remove mineral deposits and stubborn water spots from your vehicle's paint and exterior surfaces, helping restore a clean, smooth, and glossy finish.",
              "areaServed": "Roseville, Sacramento, Placer County, CA",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Scratch Removal",
              "description":
                "Professional scratch removal and clear coat repair in Roseville, CA. Eliminates surface scratches without full repaint.",
              "areaServed": "Roseville, Sacramento, Placer County, CA",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Headlight Restoration",
              "description":
                "Professional headlight restoration in Roseville, CA. Wet-sanding and polishing of the outer lens removes or significantly reduces external oxidation and cloudiness, restoring lens clarity and appearance. Backed by a 6-month guarantee.",
              "areaServed": "Roseville, Sacramento, Placer County, CA",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "One-Step Paint Correction",
              "description":
                "Single-stage machine polish in Roseville, CA that boosts gloss and reduces light paint imperfections.",
              "areaServed": "Roseville, Sacramento, Placer County, CA",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3-Stage Paint Correction",
              "description":
                "Multi-stage paint correction in Roseville, CA designed to remove or significantly reduce deeper scratches, swirl marks, oxidation, and clear-coat defects while restoring clarity, depth, and gloss.",
              "areaServed": "Roseville, Sacramento, Placer County, CA",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.916levelceramic.com/#website",
      "url": "https://www.916levelceramic.com",
      "name": "916Level",
      "description": "Ceramic Coating & Paint Correction — Roseville, CA",
      "publisher": { "@id": "https://www.916levelceramic.com/#business" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.916levelceramic.com/#webpage",
      "url": "https://www.916levelceramic.com",
      "name": "916Level — Ceramic Coating & Paint Correction | Roseville, CA",
      "isPartOf": { "@id": "https://www.916levelceramic.com/#website" },
      "about": { "@id": "https://www.916levelceramic.com/#business" },
      "description":
        "916Level is Roseville's premier ceramic coating and paint correction specialist serving Roseville, Sacramento, and Placer County.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.916levelceramic.com",
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <SystemXServer />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
