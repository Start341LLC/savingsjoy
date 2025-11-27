import { randomUUID } from "crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { contactSubmissions, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";

type DrizzleClient = ReturnType<typeof drizzle>;

const databaseUrl = process.env.DATABASE_URL;
let db: DrizzleClient | undefined;

if (databaseUrl) {
  const sql = neon(databaseUrl);
  db = drizzle(sql);
}

export interface IStorage {
  saveContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

class MemoryStorage implements IStorage {
  private submissions: ContactSubmission[] = [];

  async saveContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: randomUUID(),
      submittedAt: new Date(),
      ...data,
    };

    this.submissions.push(submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.submissions].sort(
      (a, b) => a.submittedAt.getTime() - b.submittedAt.getTime()
    );
  }
}

export class DbStorage implements IStorage {
  constructor(private readonly client: DrizzleClient) {}

  async saveContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await this.client.insert(contactSubmissions).values(data).returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.client.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }
}

export const storage: IStorage = db
  ? new DbStorage(db)
  : (() => {
      console.warn(
        "DATABASE_URL environment variable not set. Using in-memory storage; contact form submissions will not persist."
      );
      return new MemoryStorage();
    })();
