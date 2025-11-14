import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us"
        description="Have questions about our premium domains or partnership opportunities? Get in touch with our team."
        keywords={['contact', 'support', 'partnership', 'domains', 'inquiries']}
      />
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Have questions about our premium domains or partnership opportunities? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
