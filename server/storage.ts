import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { contactSubmissions, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable is required. " +
    "Please ensure the database is configured or run 'npm run db:push' to set up the schema."
  );
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);

export interface IStorage {
  saveContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class DbStorage implements IStorage {
  async saveContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(data).returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }
}

export const storage = new DbStorage();
