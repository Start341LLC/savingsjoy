import { Domain } from "@shared/schema";

// Images live in /public for stable, hash-free URLs. This lets index.html
// preload them with <link rel="preload"> without the path drifting on every build.
export const premiumDomains: Domain[] = [
  {
    name: "ApartmentRental.com",
    description: "Premium domain for apartment rental listings and property management services",
    category: "Real Estate",
    imageUrl: "/domain-apartment-rental.webp"
  },
  {
    name: "IncomeTax.com",
    description: "Authoritative domain for tax preparation, filing services, and tax advice",
    category: "Finance",
    imageUrl: "/domain-income-tax.webp"
  },
  {
    name: "PartyRentals.com",
    description: "Premier destination for party equipment, event rentals, and celebration supplies",
    category: "Events",
    imageUrl: "/domain-party-rentals.webp"
  },
  {
    name: "TrainSchedule.com",
    description: "Essential resource for train schedules, railway timetables, and transit information",
    category: "Transportation",
    imageUrl: "/domain-train-schedule.webp"
  },
];
