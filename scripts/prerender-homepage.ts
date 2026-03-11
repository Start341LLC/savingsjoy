/**
 * SSG Prerender Script for Homepage
 *
 * Generates dist/public/home.html with the full homepage content baked in.
 * The server serves this file for "/" requests so the browser renders real
 * content immediately — no waiting for React to bootstrap.
 *
 * React mounts after JS loads and takes over seamlessly (same markup, same CSS).
 *
 * Run after Vite build: tsx scripts/prerender-homepage.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist/public");

// ── Data (mirrors client/src/config — duplicated for build-time access) ─────

interface Domain {
  name: string;
  description: string;
  imageUrl: string;
}

interface Vertical {
  slug: string;
  title: string;
  description: string;
}

const premiumDomains: Domain[] = [
  {
    name: "ApartmentRental.com",
    description: "Premium domain for apartment rental listings and property management services",
    imageUrl: "/domain-apartment-rental.webp",
  },
  {
    name: "IncomeTax.com",
    description: "Authoritative domain for tax preparation, filing services, and tax advice",
    imageUrl: "/domain-income-tax.webp",
  },
  {
    name: "PartyRentals.com",
    description: "Premier destination for party equipment, event rentals, and celebration supplies",
    imageUrl: "/domain-party-rentals.webp",
  },
  {
    name: "TrainSchedule.com",
    description: "Essential resource for train schedules, railway timetables, and transit information",
    imageUrl: "/domain-train-schedule.webp",
  },
];

const verticals: Vertical[] = [
  { slug: "realestate", title: "Real Estate", description: "Compare top real estate services, find the best mortgage rates, and discover property deals." },
  { slug: "insurance",  title: "Insurance",   description: "Compare insurance rates from top providers. Find the best coverage for auto, home, health, and life insurance." },
  { slug: "taxes",      title: "Taxes",        description: "Find the best tax software and services. File your taxes online with confidence and maximize your refund." },
  { slug: "creditcards",title: "Credit Cards", description: "Compare credit cards, find rewards programs, and discover the best rates for your financial goals." },
  { slug: "loans",      title: "Loans",        description: "Compare personal loan rates from top lenders. Find competitive rates for debt consolidation, home improvement, and more." },
  { slug: "mortgage",   title: "Mortgage",     description: "Compare current mortgage rates, refinancing options, and home loan programs from top lenders." },
];

// ── HTML generators ──────────────────────────────────────────────────────────

function domainCardsHtml(domains: Domain[]): string {
  return domains.map((d, i) => `
        <div>
          <div class="rounded-lg border border-card-border bg-card overflow-hidden" data-testid="card-domain-${d.name}">
            <div class="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
              <img
                src="${d.imageUrl}"
                alt="${d.name}"
                class="object-cover w-full h-full"
                ${i === 0 ? 'loading="eager" decoding="sync" fetchpriority="high"' : 'loading="lazy" decoding="async"'}
                width="600"
                height="400"
              />
            </div>
            <div class="p-6 pb-3">
              <h3 class="text-xl font-bold font-display text-foreground leading-tight break-words" data-testid="text-domain-name-${d.name}">
                ${d.name}
              </h3>
            </div>
            <div class="px-6 pb-6">
              <p class="text-sm text-muted-foreground leading-relaxed" data-testid="text-domain-description-${d.name}">
                ${d.description}
              </p>
            </div>
          </div>
        </div>`).join("\n");
}

// Inline SVG icons keyed by vertical slug (matches lucide-react icons used in Home.tsx)
const verticalIcons: Record<string, string> = {
  realestate:  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
  insurance:   `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  taxes:       `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="16" y1="10" y2="10"/><line x1="8" x2="12" y1="14" y2="14"/></svg>`,
  creditcards: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  loans:       `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><rect width="4" height="9" x="10" y="13"/><path d="M3 22V11l4-2 4 2 4-4 4 4v11"/></svg>`,
  mortgage:    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
};

function verticalCardsHtml(verts: Vertical[]): string {
  return verts.map((v) => `
        <div class="rounded-lg border border-border bg-card hover-elevate transition-all duration-200 h-full" data-testid="card-vertical-${v.slug}">
          <div class="p-6 pb-3">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 text-primary">
              ${verticalIcons[v.slug] ?? ""}
            </div>
            <h3 class="font-display font-bold text-lg text-foreground">${v.title}</h3>
            <p class="text-sm leading-snug text-muted-foreground mt-1">${v.description}</p>
          </div>
          <div class="px-6 pb-6">
            <a href="/${v.slug}" class="flex items-center justify-center w-full px-6 py-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors" data-testid="button-vertical-${v.slug}">
              Compare &amp; Save
            </a>
          </div>
        </div>`).join("\n");
}

function headerHtml(): string {
  return `
    <header class="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div class="flex h-16 items-center justify-between gap-4">
          <div class="flex items-center flex-shrink-0">
            <a href="/" class="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" data-testid="link-home" aria-label="SavingsJoy home">
              <img src="/pig-mascot.webp" alt="SavingsJoy mascot" class="h-10 w-10" />
              <span class="text-xl font-bold font-display text-primary">SavingsJoy</span>
            </a>
          </div>
          <div class="hidden lg:flex flex-1 items-center justify-evenly ml-8">
            <a href="/" class="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200" data-testid="link-home-nav">Home</a>
            <a href="/realestate" class="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200" data-testid="link-real-estate">Real Estate</a>
            <a href="/insurance"  class="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200" data-testid="link-insurance">Insurance</a>
            <a href="/taxes"      class="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200" data-testid="link-taxes">Taxes</a>
            <a href="/creditcards"class="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200" data-testid="link-credit-cards">Credit Cards</a>
            <a href="/loans"      class="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200" data-testid="link-loans">Loans</a>
            <a href="/mortgage"   class="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200" data-testid="link-mortgage">Mortgage</a>
            <a href="mailto:support@start341.com" class="inline-flex items-center justify-center px-3 py-1.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" data-testid="button-contact-us" aria-label="Contact us via email">Contact Us</a>
          </div>
          <div class="lg:hidden">
            <button class="inline-flex items-center justify-center rounded-md p-2 text-foreground" aria-label="Open menu" data-testid="button-mobile-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>`;
}

function footerHtml(year: number): string {
  const verticalLinks = [
    ["realestate", "Real Estate"],
    ["insurance",  "Insurance"],
    ["taxes",      "Taxes"],
    ["creditcards","Credit Cards"],
    ["loans",      "Loans"],
    ["mortgage",   "Mortgage"],
  ];
  return `
    <footer class="bg-muted border-t border-border">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <img src="/pig-mascot.webp" alt="SavingsJoy mascot" class="h-12 w-12" />
              <span class="text-xl font-bold font-display text-primary">SavingsJoy</span>
            </div>
            <p class="text-foreground font-semibold text-sm mb-2">Smart domains. Joyful deals.</p>
            <p class="text-muted-foreground text-sm leading-relaxed max-w-md">Your trusted guide to savings across insurance, real estate, taxes, and more. Powered by premium domain technology.</p>
          </div>
          <div>
            <h3 class="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul class="space-y-2.5 text-sm">
              <li><a href="mailto:support@start341.com" class="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">Contact Us</a></li>
              <li><a href="/privacy-policy" class="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-privacy">Privacy Policy</a></li>
              <li><a href="/terms-of-use" class="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-terms">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-foreground mb-4">Savings Categories</h3>
            <ul class="space-y-2.5 text-sm">
              ${verticalLinks.map(([slug, label]) => `<li><a href="/${slug}" class="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-${slug}">${label}</a></li>`).join("\n              ")}
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-border">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© ${year} SavingsJoy. A product of <a href="https://start341.com" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:no-underline" data-testid="link-company">Start341.com LLC</a>.</p>
            <p class="mt-2 md:mt-0">Contact: <a href="mailto:support@start341.com" class="text-primary hover:underline" data-testid="link-email">support@start341.com</a></p>
          </div>
        </div>
      </div>
    </footer>`;
}

// ── Main ─────────────────────────────────────────────────────────────────────

function generateHomepageHtml(baseHtml: string): string {
  const year = new Date().getFullYear();

  const pageContent = `<!-- SSG: Pre-rendered homepage for fast FCP/LCP. React takes over after JS loads. -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    ${headerHtml()}
    <main id="main-content" role="main" class="min-h-screen">
      <div class="min-h-screen">

        <!-- Hero Section -->
        <section class="relative py-8 md:py-11 flex items-center justify-center" style="background-color: #FFF5F8;" data-testid="section-hero">
          <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight mb-2">
              Smart Domains. Joyful Deals.
            </h1>
            <p class="text-base text-muted-foreground">
              Premium domain portfolio driving digital success
            </p>
          </div>
        </section>

        <!-- Premium Domains Showcase -->
        <section class="py-8 bg-background" data-testid="section-domains">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-5">
              <h2 class="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
                Our Premium Web Properties
              </h2>
              <p class="text-base text-muted-foreground max-w-3xl mx-auto mb-4">
                Showcasing a selection of our flagship domains. Our complete portfolio includes these and over 100 other valuable web properties.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              ${domainCardsHtml(premiumDomains)}
            </div>
          </div>
        </section>

        <!-- Company Mission -->
        <section class="py-6 bg-muted/30 border-y border-border">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p class="text-base text-muted-foreground">
              Investing in and developing premium digital real estate. We transform valuable domains into thriving digital enterprises.
            </p>
          </div>
        </section>

        <!-- Verticals Overview -->
        <section class="py-8 bg-muted/50" data-testid="section-verticals">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-5">
              <h2 class="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
                Start Saving Today
              </h2>
              <p class="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
                Compare top providers and find the best deals across all categories
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/realestate" class="inline-flex items-center justify-center px-8 py-4 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" data-testid="button-cta-start">
                  Find Real Estate Deals
                </a>
                <a href="/insurance" class="inline-flex items-center justify-center px-8 py-4 rounded-md font-medium border border-border text-foreground hover:bg-accent transition-colors" data-testid="button-cta-contact">
                  Compare Insurance Rates
                </a>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              ${verticalCardsHtml(verticals)}
            </div>
          </div>
        </section>

      </div>
    </main>
    ${footerHtml(year)}`;

  return baseHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${pageContent}</div>`,
  );
}

async function prerenderHomepage() {
  console.log("Starting SSG prerender for homepage...\n");

  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("Error: dist/public/index.html not found. Run 'vite build' first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");
  const html = generateHomepageHtml(baseHtml);

  const outputPath = path.join(distDir, "home.html");
  fs.writeFileSync(outputPath, html, "utf-8");

  console.log(`  Generated: dist/public/home.html`);
  console.log("\nHomepage SSG prerender complete!");
  console.log("The server will serve home.html for '/' requests, enabling fast FCP/LCP.");
}

prerenderHomepage().catch(console.error);
