import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.916level.com/#business",
      "name": "916Level",
      "description":
        "Professional ceramic coating, paint correction, and scratch removal in Roseville, CA. Serving Roseville, Sacramento, and all of Placer County.",
      "url": "https://www.916level.com",
      "telephone": "+19167101157",
      "email": "chirkov7771110@gmail.com",
      "image": "https://www.916level.com/og-image.jpg",
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "17:00",
          "description": "By appointment",
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
                "Professional ceramic coating application in Roseville, CA. Creates a permanent hydrophobic bond that protects your paint for 2–5 years.",
              "areaServed": "Roseville, Sacramento, Placer County, CA",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paint Correction",
              "description":
                "Machine polishing paint correction service in Roseville, CA. Removes swirl marks, fine scratches, and oxidation to restore factory-level gloss.",
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
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.916level.com/#website",
      "url": "https://www.916level.com",
      "name": "916Level",
      "description": "Ceramic Coating & Paint Correction — Roseville, CA",
      "publisher": { "@id": "https://www.916level.com/#business" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.916level.com/#webpage",
      "url": "https://www.916level.com",
      "name": "916Level — Ceramic Coating & Paint Correction | Roseville, CA",
      "isPartOf": { "@id": "https://www.916level.com/#website" },
      "about": { "@id": "https://www.916level.com/#business" },
      "description":
        "916Level is Roseville's premier ceramic coating and paint correction specialist serving Roseville, Sacramento, and Placer County.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.916level.com",
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
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
