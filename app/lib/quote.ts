export const QUOTE_SERVICES = [
  "Ceramic Coating",
  "Water Spot Removal",
  "Scratch Removal",
  "Headlight Restoration",
  "One-Step Paint Correction",
  "3-Stage Paint Correction",
] as const;

export type QuoteService = (typeof QUOTE_SERVICES)[number];

export type QuoteState = {
  year: string;
  make: string;
  model: string;
  service: QuoteService;
};

export type QuoteField = keyof QuoteState;

export type SmsContinuationState =
  | { kind: "quote"; quote: QuoteState }
  | { kind: "general" };

type QuoteErrors = Partial<Record<QuoteField, string>>;

type QuoteValidationResult =
  | { success: true; data: QuoteState; errors: QuoteErrors }
  | { success: false; errors: QuoteErrors };

const FIELD_LIMITS = {
  year: 4,
  make: 40,
  model: 60,
} as const;

const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f]/;
const SMS_NUMBER = "+19167413588";
const WHATSAPP_NUMBER = "19164627323";

export const GENERAL_CONTACT_MESSAGE =
  "Hi, I'd like to get an estimate for my vehicle.";

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function validateText(
  value: unknown,
  fieldName: "Make" | "Model",
  maximumLength: number,
) {
  if (typeof value !== "string" || CONTROL_CHARACTERS.test(value)) {
    return { value: "", error: `${fieldName} contains invalid characters.` };
  }

  const normalized = normalizeText(value);

  if (!normalized) return { value: normalized, error: `${fieldName} is required.` };
  if (normalized.length > maximumLength) {
    return {
      value: normalized,
      error: `${fieldName} must be ${maximumLength} characters or fewer.`,
    };
  }
  return { value: normalized };
}

export function validateQuoteState(input: unknown): QuoteValidationResult {
  const candidate =
    input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const errors: QuoteErrors = {};
  const year = normalizeText(candidate.year);
  const make = validateText(candidate.make, "Make", FIELD_LIMITS.make);
  const model = validateText(candidate.model, "Model", FIELD_LIMITS.model);
  const service = normalizeText(candidate.service);

  if (!/^\d{4}$/.test(year) || Number(year) < 1900 || Number(year) > 2099) {
    errors.year = "Enter a four-digit year between 1900 and 2099.";
  }
  if (make.error) errors.make = make.error;
  if (model.error) errors.model = model.error;
  if (!QUOTE_SERVICES.includes(service as QuoteService)) {
    errors.service = "Select one of the available services.";
  }

  if (Object.keys(errors).length > 0) return { success: false, errors };

  return {
    success: true,
    data: {
      year,
      make: make.value,
      model: model.value,
      service: service as QuoteService,
    },
    errors,
  };
}

export function buildQuoteMessage(quote: QuoteState) {
  return `Hi, I'm interested in ${quote.service} for my ${quote.year} ${quote.make} ${quote.model}. I'd like to get an estimate.`;
}

export function buildSmsHref(message: string) {
  return `sms:${SMS_NUMBER}?body=${encodeURIComponent(message)}`;
}

export function buildWhatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function serializeQuoteFragment(input: QuoteState) {
  const result = validateQuoteState(input);
  if (!result.success) throw new Error("Cannot serialize an invalid quote.");

  const params = new URLSearchParams({
    v: "1",
    y: result.data.year,
    m: result.data.make,
    d: result.data.model,
    s: result.data.service,
  });

  return params.toString();
}

export function parseQuoteFragment(fragment: string): QuoteState | null {
  const value = fragment.startsWith("#") ? fragment.slice(1) : fragment;
  if (!value || value.length > 512) return null;

  const params = new URLSearchParams(value);
  const allowedKeys = new Set(["v", "y", "m", "d", "s"]);

  for (const key of params.keys()) {
    if (!allowedKeys.has(key) || params.getAll(key).length !== 1) return null;
  }

  if (params.size !== allowedKeys.size || params.get("v") !== "1") return null;

  const result = validateQuoteState({
    year: params.get("y"),
    make: params.get("m"),
    model: params.get("d"),
    service: params.get("s"),
  });

  return result.success ? result.data : null;
}

export function parseSmsContinuationFragment(
  fragment: string,
): SmsContinuationState | null {
  const quote = parseQuoteFragment(fragment);
  if (quote) return { kind: "quote", quote };

  const value = fragment.startsWith("#") ? fragment.slice(1) : fragment;
  if (!value || value.length > 512) return null;

  const params = new URLSearchParams(value);
  const allowedKeys = new Set(["v", "t"]);

  for (const key of params.keys()) {
    if (!allowedKeys.has(key) || params.getAll(key).length !== 1) return null;
  }

  if (
    params.size !== allowedKeys.size ||
    params.get("v") !== "1" ||
    params.get("t") !== "general"
  ) {
    return null;
  }

  return { kind: "general" };
}

export function buildSmsContinuationUrl(quote: QuoteState, origin: string) {
  return `${origin.replace(/\/$/, "")}/quote/sms#${serializeQuoteFragment(quote)}`;
}

export function buildGeneralSmsContinuationUrl(origin: string) {
  return `${origin.replace(/\/$/, "")}/quote/sms#v=1&t=general`;
}
