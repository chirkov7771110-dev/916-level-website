# PRD — 916Level Website
**Version:** 1.0  
**Date:** 2026-05-23  
**Status:** Draft

---

## 1. OVERVIEW

### Product
A high-converting marketing website for **916Level** — a premium auto detailing and ceramic coating company based in **Roseville, California**, serving **Placer County**.

### Business Goal
Generate qualified leads (phone calls + contact form submissions) from local customers searching for ceramic coating, paint correction, and detailing services in Placer County.

### Primary Success Metric
- **Lead conversions:** form submissions + phone calls initiated from the site
- **Target:** 5–10% visitor-to-lead conversion rate

---

## 2. TARGET AUDIENCE

### Primary Customer
- Vehicle owners in Roseville, Rocklin, Lincoln, Auburn, Folsom (Placer County)
- Ages 25–55, care about their vehicle's appearance and resale value
- Searching on Google: "ceramic coating Roseville CA", "paint correction near me", "car detailing Placer County"
- Often mobile (phone search → immediate call or form fill)

### Secondary Customer
- Luxury / exotic vehicle owners wanting premium protection
- New car owners who want ceramic coating immediately after purchase
- People selling a car who want paint correction first

---

## 3. BRAND & VISUAL IDENTITY

### Logo
- Shield shape
- Black fill, silver/white border
- Text: "916 LEVEL" in silver

### Color Palette
| Role | Color | Hex |
|---|---|---|
| Background (primary) | Near-black | `#0A0A0A` |
| Background (secondary) | Dark charcoal | `#111111` / `#1A1A1A` |
| Text (primary) | White | `#FFFFFF` |
| Text (secondary) | Light grey | `#A0A0A0` |
| Accent (borders, highlights) | Silver | `#C0C0C0` |
| CTA button (primary) | White fill | `#FFFFFF` with black text |
| CTA button (secondary) | Silver border | transparent + `#C0C0C0` border |
| Dividers / lines | Dark grey | `#2A2A2A` |

### Typography
| Role | Font | Weight |
|---|---|---|
| Headlines (H1, H2) | Inter or Geist | 700–900 |
| Body text | Inter | 400–500 |
| Labels / badges | Inter | 600, uppercase, tracked |

### Visual Style
- Dark backgrounds throughout
- High-contrast photography (glossy black/dark cars preferred)
- Clean geometric layout — no gradients, no noise, no clutter
- Generous white space
- Silver thin-line decorative elements (e.g., shield outline, divider lines)
- Before/after sliders as primary conversion visuals

---

## 4. SITE STRUCTURE & PAGES

### 4.1 Navigation (Sticky Header)
```
[Logo: 916 LEVEL shield] — Services — Gallery — About — Contact
                                                    [CTA: Get a Quote →]
                                                    [Phone: (916) XXX-XXXX]
```
- Sticky on scroll
- Mobile: hamburger menu
- CTA button always visible

### 4.2 Page Map
```
/ (Home)
/services/ceramic-coating
/services/paint-correction
/services/scratch-removal
/gallery
/about
/contact
```

---

## 5. PAGE SPECIFICATIONS

### 5.1 Home Page (`/`)

**Section 1 — Hero**
- Full-screen height (100vh)
- Background: dark photo OR subtle video loop of ceramic coating application
- H1: "Ceramic Coating & Paint Correction in Roseville, CA"
- Subheadline: "Professional protection for your vehicle — serving Placer County"
- CTA: `[Get a Free Quote]` (primary, white button) + `[Call Now: (916) XXX-XXXX]` (secondary, silver border)
- Trust badge row: "⭐ 5.0 Google Rating" | "Placer County" | "Licensed & Insured"
- Before/after image slider (1 hero example, full width)

**Section 2 — Services Overview**
- 3 service cards in a grid:
  1. Ceramic Coating — shield icon, 1-sentence description, link → `/services/ceramic-coating`
  2. Paint Correction — 1-sentence, link
  3. Scratch Removal — 1-sentence, link
- Each card: dark card background, silver border on hover, arrow link

**Section 3 — Why 916Level**
- 4 horizontal stat/feature blocks:
  - "Placer County's Premier Detailer"
  - "100% Satisfaction Guarantee"
  - "Professional-Grade Products Only"
  - "X Years of Experience" (fill in real number)
- Clean icon + bold number/text format

**Section 4 — Before / After Gallery**
- Section headline: "Real Results. Real Vehicles."
- 6 before/after comparison sliders
- Filter tabs optional (Ceramic / Polish / Scratch)
- CTA below gallery: `[See All Work →]` → `/gallery`

**Section 5 — Our Process**
- Section headline: "How It Works"
- 4-step horizontal process:
  1. Inspection — assess paint condition
  2. Decontamination — full wash + clay bar
  3. Correction — polish / prep surface
  4. Protection — coating application
- Each step: number, icon, title, 1-sentence description

**Section 6 — Reviews**
- Section headline: "What Our Customers Say"
- 3–4 Google review cards (real text, star rating, customer name, date)
- Google "G" logo + "5.0 ⭐ on Google" badge
- CTA: `[Read More Reviews on Google]`

**Section 7 — Service Area**
- "Serving all of Placer County"
- City list: Roseville · Rocklin · Folsom · Lincoln · Auburn · Granite Bay · Loomis · Penryn · Newcastle
- Optional: light map embed or simple text layout

**Section 8 — Final CTA Banner**
- Dark section with silver border top/bottom
- Headline: "Ready to Protect Your Vehicle?"
- Sub: "Get a free quote — we'll respond within 24 hours"
- CTA: `[Contact Us]` + phone number large

**Section 9 — Footer**
- Logo
- Business name, city, state
- Phone | Email | Hours
- Navigation links
- Social icons (Instagram, Google Business)
- "© 2026 916Level. All rights reserved."

---

### 5.2 Ceramic Coating Page (`/services/ceramic-coating`)

1. **Hero** — "Ceramic Coating in Roseville, CA" + before/after
2. **What is ceramic coating** — 150 words, plain language
3. **Why ceramic vs wax** — 3-column comparison table
4. **What's included** — bullet list of everything in the service
5. **How long it lasts** — "2–5 years with proper maintenance"
6. **Our process** — same 4-step flow as homepage
7. **Gallery** — 6 before/after photos of coating jobs specifically
8. **Packages / Pricing** — 3 tiers:
   - **Base** — 1-year coating, single-stage prep
   - **Pro** — 2-year coating, light paint correction included *(Most Popular)*
   - **Elite** — 5-year coating, full paint correction + interior protection
9. **Reviews** — 2–3 reviews specifically mentioning ceramic coating
10. **FAQ** — 6 questions (how long, how to maintain, can I wash, etc.)
11. **CTA** — form + phone

---

### 5.3 Paint Correction Page (`/services/paint-correction`)

1. Hero — "Paint Correction & Polish in Roseville"
2. What is paint correction — swirls, oxidation, holograms
3. Single-stage vs multi-stage — explanation
4. Before/after gallery (polish-specific)
5. Pricing — 3 tiers: 1-stage / 2-stage / full correction
6. Reviews
7. FAQ
8. CTA

---

### 5.4 Scratch Removal Page (`/services/scratch-removal`)

1. Hero — "Scratch Removal in Roseville, CA"
2. What scratches can/can't be fixed (sets expectations)
3. Our approach
4. Gallery
5. Pricing — by severity or flat rate
6. FAQ
7. CTA

---

### 5.5 Gallery Page (`/gallery`)

- Masonry or grid layout, full-width
- Filter: All / Ceramic / Polish / Scratch Removal
- Each item: before/after slider or side-by-side
- Lightbox on click for full view
- CTA sticky or at bottom: "Like what you see? Get a Quote"

---

### 5.6 About Page (`/about`)

1. Hero — "Who We Are"
2. Story — 2–3 paragraphs: who, why, what drives us
3. Photo of the detailer / team
4. Certifications or brand partnerships (if any)
5. Service area
6. CTA

---

### 5.7 Contact Page (`/contact`)

1. Headline: "Get Your Free Quote"
2. Contact form fields:
   - Name (required)
   - Phone (required)
   - Email (optional)
   - Vehicle: make, model, year (required)
   - Service interested in (dropdown: Ceramic / Polish / Scratch / Other)
   - Message / notes (optional)
   - `[Submit]` button
3. What happens next: "We'll call or text you within 24 hours"
4. Phone number clickable (tel: link)
5. Business hours
6. Optional: Google Maps embed (Roseville area)

---

## 6. CONTACT FORM BEHAVIOR

- On submit: show inline success message ("Thanks! We'll be in touch within 24 hours.")
- No page reload (async submit)
- Notification method: email to business owner (Formspree / Netlify Forms / custom)
- No online payment or booking calendar needed in v1
- Phone number formatted as clickable `tel:` link on mobile

---

## 7. SEO REQUIREMENTS

### On-Page
| Page | Title Tag | H1 |
|---|---|---|
| Home | Ceramic Coating Roseville CA \| 916Level | Ceramic Coating & Paint Correction in Roseville, CA |
| Ceramic Coating | Ceramic Coating Roseville CA — Packages & Pricing \| 916Level | Ceramic Coating in Roseville, CA |
| Paint Correction | Paint Correction & Polish Roseville CA \| 916Level | Paint Correction in Roseville, CA |
| Scratch Removal | Scratch Removal Roseville CA \| 916Level | Scratch Removal in Roseville, CA |
| Gallery | Before & After Gallery \| 916Level Detailing Roseville | Our Work — Real Results |
| Contact | Get a Free Quote — 916Level Detailing Roseville | Get Your Free Quote |

### Technical SEO
- Semantic HTML5 (header, main, section, article, footer)
- LocalBusiness schema markup (JSON-LD)
- Service schema on each service page
- All images have descriptive alt text with service + location
- Sitemap.xml generated
- robots.txt configured
- Meta description on every page
- Canonical URLs
- Mobile-first, Core Web Vitals optimized

### Target Keywords
**Primary (Transactional):**
- ceramic coating Roseville CA
- paint correction Roseville
- scratch removal Roseville CA
- car detailing Placer County
- ceramic coating near me (Roseville)

**Secondary (Informational, for FAQ/blog):**
- how long does ceramic coating last
- ceramic coating vs wax
- is ceramic coating worth it
- how to remove car scratches Roseville

---

## 8. TECH STACK

| Layer | Technology | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG + SSR, best SEO, Vercel deploy |
| Styling | Tailwind CSS v4 | Fast, utility-first, consistent |
| Animations | Framer Motion | Smooth section reveals, hero transitions |
| Before/After Slider | `img-comparison-slider` (web component) | Lightweight, no React dep |
| Contact Form | Formspree (free tier) or Netlify Forms | No backend needed for v1 |
| Image Optimization | Next.js `<Image>` + WebP conversion | Core Web Vitals |
| Fonts | Google Fonts: Inter (self-hosted via next/font) | Performance, no FOUT |
| Deployment | Vercel | Free tier, edge CDN, CI/CD from git |
| Analytics | Vercel Analytics or Plausible | Privacy-friendly, zero cookies |

---

## 9. PERFORMANCE REQUIREMENTS

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FID / INP | < 200ms |
| Page weight (homepage) | < 1MB initial load |
| Image format | WebP, lazy-loaded |

---

## 10. RESPONSIVE DESIGN

- **Mobile first** (375px base)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile: sticky bottom bar with "Call Now" + "Get Quote" buttons
- All images responsive, properly cropped at each breakpoint
- Touch-friendly tap targets (min 44×44px)
- No horizontal scroll at any breakpoint

---

## 11. CONTENT NEEDED FROM CLIENT

Before development begins, the following content must be provided:

- [ ] Business phone number
- [ ] Business email address
- [ ] Business hours
- [ ] Real photos of completed work (minimum 12 before/after pairs)
- [ ] Owner/team photo (for About page)
- [ ] Google Business Profile URL (for reviews embed)
- [ ] Exact services offered and current pricing ranges
- [ ] Any existing certifications, product partnerships (Gtechniq, Gyeon, etc.)
- [ ] Years in business / number of vehicles serviced
- [ ] Instagram or social media links

---

## 12. OUT OF SCOPE (V1)

- Online booking / calendar integration
- Payment processing
- Customer portal / account login
- Blog / content management system
- Live chat widget
- Multi-language support

---

## 13. DEVELOPMENT PHASES

### Phase 1 — Foundation (Week 1)
- Project setup: Next.js + Tailwind + Framer Motion
- Design tokens: colors, typography, spacing
- Global components: Navbar, Footer, Button, Section wrapper
- Home page skeleton

### Phase 2 — Core Pages (Week 2)
- Home page complete (all sections)
- Ceramic Coating service page
- Gallery page + before/after component
- Contact page + form

### Phase 3 — Remaining Pages (Week 3)
- Paint Correction page
- Scratch Removal page
- About page
- SEO: meta tags, schema, sitemap

### Phase 4 — Polish & Launch (Week 4)
- Performance optimization
- Mobile QA pass
- Cross-browser testing (Chrome, Safari, Firefox, Edge)
- Deploy to Vercel + custom domain
- Google Analytics / Plausible setup
- Submit to Google Search Console
