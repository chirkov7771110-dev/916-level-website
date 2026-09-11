import type { Metadata } from "next";
import SmsQuoteContinuation from "@/components/SmsQuoteContinuation";

export const metadata: Metadata = {
  title: "Continue by Text | 916 Level",
  description: "Continue a prepared 916 Level quote request in your messaging app.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SmsQuotePage() {
  return (
    <main className="flex min-h-screen items-center bg-[#0a0a0a] px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-6 sm:p-10">
        <SmsQuoteContinuation />
      </section>
    </main>
  );
}

