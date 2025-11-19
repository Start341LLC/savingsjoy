import { Vertical } from "@shared/schema";

export const verticals: Vertical[] = [
  {
    slug: "realestate",
    title: "Real Estate Listings & Home Search | Find Your Dream Home",
    description: "Compare top real estate services, find the best mortgage rates, and discover property deals.",
    metaDescription: "Search millions of homes for sale and rent. Compare real estate listing sites, get free home valuations, and connect with local agents near you.",
    offers: [
      // Keep your existing offers - they're fine as placeholders
      {
        id: "re-1",
        companyName: "Zillow",
        logoUrl: "https://logo.clearbit.com/zillow.com",
        title: "Zillow - Find Your Dream Home",
        description: "Search millions of homes for sale and rent. Get home values, compare neighborhoods, and connect with local real estate agents.",
        displayUrl: "zillow.com",
        affiliateLink: "https://www.zillow.com", // You'll replace this later
        rating: 4.5,
        features: ["Millions of listings", "Home value estimates", "Local market data"]
      },
      // ... rest of your offers
    ]
  },
  {
    slug: "insurance",
    title: "Compare Insurance Quotes | Auto, Home & Life Coverage",
    description: "Compare insurance rates from top providers. Find the best coverage for auto, home, health, and life insurance.",
    metaDescription: "Get free insurance quotes and compare coverage options. Save hundreds on auto, home, health, and life insurance with our easy comparison tools.",
    offers: [
      // Keep existing insurance offers
    ]
  },
  {
    slug: "taxes",
    title: "Tax Preparation Software | File Taxes Online & Maximize Refund",
    description: "Find the best tax software and services. File your taxes online with confidence and maximize your refund.",
    metaDescription: "Compare tax preparation software and services. File federal and state taxes online, get expert help, and maximize your tax refund with ease.",
    offers: [
      // Keep existing tax offers
    ]
  },
  {
    slug: "creditcards",
    title: "Best Credit Cards 2025 | Compare Rewards & Cash Back Offers",
    description: "Compare credit cards, find rewards programs, and discover the best rates for your financial goals.",
    metaDescription: "Find the best credit cards for travel, cash back, and everyday spending. Compare rewards programs, APRs, and benefits to choose your perfect card.",
    offers: [
      // Keep existing credit card offers
    ]
  },
  {
    slug: "loans",
    title: "Personal Loans | Compare Rates & Get Approved in Minutes",
    description: "Compare personal loan rates from top lenders. Find competitive rates for debt consolidation, home improvement, and more.",
    metaDescription: "Compare personal loan rates and get quick approval. Find low-interest loans for debt consolidation, home improvement, and major purchases.",
    offers: [
      // Keep existing loan offers
    ]
  },
  {
    slug: "mortgage",
    title: "Mortgage Rates Today | Compare Home Loans & Refinancing",
    description: "Compare current mortgage rates, refinancing options, and home loan programs from top lenders.",
    metaDescription: "Find today's best mortgage rates and home loan options. Compare lenders, calculate monthly payments, and get pre-approved for your dream home.",
    offers: [
      // Keep existing mortgage offers
    ]
  },
];
```

---

## **NOTICE THE DIFFERENCE:**

### **Old (Risky):**
```
Title: "Insurance Comparison | Compare Progressive, GEICO, State Farm"
```
☠️ **Problem:** Uses brand names - could violate trademark rules

### **New (Safe):**
```
Title: "Compare Insurance Quotes | Auto, Home & Life Coverage"
