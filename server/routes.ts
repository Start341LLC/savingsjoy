import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);

      // Save the submission
      const submission = await storage.saveContactSubmission(validatedData);

      // Log the submission for development
      console.log("Contact form submission received:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        subject: submission.subject,
      });

      // In a production environment, you would send an email here
      // For now, we'll just return success
      res.json({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
        submissionId: submission.id,
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: "Invalid form data. Please check your inputs and try again.",
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch submissions",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
