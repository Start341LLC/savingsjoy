import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact form submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

// Create insert schema for contact form with validation
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions, {
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
}).omit({ id: true, submittedAt: true });

// TypeScript types
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

// Legacy type exports for backward compatibility
export type ContactFormData = InsertContactSubmission;
export const contactFormSchema = insertContactSubmissionSchema;

// Domain schema (static data - not in database)
export interface Domain {
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
}

// Affiliate Offer schema (static data - not in database)
export interface AffiliateOffer {
  id: string;
  companyName: string;
  logoUrl: string;
  title: string;
  description: string;
  displayUrl: string;
  affiliateLink: string;
  rating?: number;
  features?: string[];
}

// Vertical schema (static data - not in database)
export interface Vertical {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  offers: AffiliateOffer[];
}

// Site configuration (static data - not in database)
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  googleAnalytics: string;
  facebookPixel?: string;
  company: string;
  companyUrl: string;
}
