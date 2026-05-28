import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.916level.com";
const BUSINESS_NAME = "916Level";
const TITLE = "916Level — Ceramic Coating & Paint Correction | Roseville, CA";
const DESCRIPTION =
  "916Level is Roseville's premier ceramic coating and paint correction specialist. Professional ceramic coating, paint correction, and scratch removal serving Roseville, Sacramento, and all of Placer County. Call (916) 710-1157 for a free quote.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: DESCRIPTION,

  keywords: [
    "ceramic coating Roseville CA",
    "ceramic coating Sacramento",
    "paint correction Roseville",
    "paint correction Placer County",
    "scratch removal Roseville CA",
    "car detailing Roseville CA",
    "auto detailing Sacramento",
    "ceramic coating near me",
    "paint protection Roseville",
    "car polish Roseville",
    "916Level",
    "auto detailing Placer County",
    "ceramic coating Rocklin CA",
    "paint correction Auburn CA",
  ],

  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "916Level Ceramic Coating — Roseville, CA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@916level",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "",   // add Google Search Console token when available
  },

  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
