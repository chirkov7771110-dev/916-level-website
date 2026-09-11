"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  GENERAL_CONTACT_MESSAGE,
  buildQuoteMessage,
  buildSmsHref,
  parseSmsContinuationFragment,
  type SmsContinuationState,
} from "@/lib/quote";

async function copyMessage(message: string) {
  await navigator.clipboard.writeText(message);
}

export default function SmsQuoteContinuation() {
  const [continuation, setContinuation] = useState<
    SmsContinuationState | null | undefined
  >(undefined);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    const parsedContinuation = parseSmsContinuationFragment(window.location.hash);
    window.history.replaceState(null, "", window.location.pathname);

    const timeoutId = window.setTimeout(
      () => setContinuation(parsedContinuation),
      0,
    );
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (continuation === undefined) {
    return <p className="text-[#a0a0a0]">Preparing your text message…</p>;
  }

  if (!continuation) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Quote details unavailable</h1>
        <p className="text-[#a0a0a0]">
          The quote details are invalid or are no longer available. Please return to the quote
          section and prepare the message again.
        </p>
        <Link
          href="/#contact"
          className="inline-flex bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-[#c0c0c0]"
        >
          Return to Get a Quote
        </Link>
      </div>
    );
  }

  const message =
    continuation.kind === "quote"
      ? buildQuoteMessage(continuation.quote)
      : GENERAL_CONTACT_MESSAGE;

  async function handleCopy() {
    try {
      await copyMessage(message);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  }

  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a8a8a]">
          916 Level
        </p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Continue by Text</h1>
        <p className="text-[#a0a0a0]">
          Open your messaging app to continue with the prepared quote request.
        </p>
      </div>

      <div className="border border-[#2a2a2a] bg-[#111111] p-5">
        <p className="text-sm leading-relaxed text-[#c0c0c0]">{message}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={buildSmsHref(message)}
          className="flex items-center justify-center bg-white px-5 py-3.5 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-[#c0c0c0]"
        >
          Open Text Message
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="border border-[#2a2a2a] px-5 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#c0c0c0] transition-colors hover:border-[#c0c0c0] hover:text-white"
        >
          Copy Message
        </button>
      </div>

      <p className="text-sm text-[#8a8a8a]" role="status" aria-live="polite">
        {copyStatus === "copied"
          ? "Message copied."
          : copyStatus === "failed"
            ? "Copy was unavailable. Select and copy the message above."
            : "If the message is not pre-filled, use Copy Message and paste it into your text."}
      </p>
    </div>
  );
}
