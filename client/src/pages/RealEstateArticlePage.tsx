import { useEffect } from "react";
import { Link } from "wouter";
import { getArticleBySlug, realEstateArticles } from "@/config/realEstateArticles";
import SEO from "@/components/SEO";
import { ChevronLeft } from "lucide-react";

interface RealEstateArticlePageProps {
  slug: string;
}

// Helper function to parse **bold** syntax
function parseBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <strong key={index}>{boldText}</strong>;
    }
    return part;
  });
}

export default function RealEstateArticlePage({ slug }: RealEstateArticlePageProps) {
  const article = getArticleBySlug(slug);

  // Inject Article structured data for SEO
  useEffect(() => {
    if (!article) return;

    const ldData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      url: `https://savingsjoy.com/realestate/${article.slug}`,
      author: {
        "@type": "Organization",
        name: "SavingsJoy",
        url: "https://savingsjoy.com",
      },
      publisher: {
        "@type": "Organization",
        name: "SavingsJoy",
        url: "https://savingsjoy.com",
        logo: {
          "@type": "ImageObject",
          url: "https://savingsjoy.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://savingsjoy.com/realestate/${article.slug}`,
      },
      isPartOf: {
        "@type": "WebPage",
        name: "Real Estate Savings & Deals",
        url: "https://savingsjoy.com/realestate",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(ldData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  // Handle article not found
  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-display text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link
            href="/realestate"
            className="text-primary hover:underline font-medium"
          >
            ← Back to Real Estate
          </Link>
        </div>
      </div>
    );
  }

  // Find related articles (exclude current article)
  const relatedArticles = realEstateArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={article.title}
        description={article.metaDescription}
        keywords={["real estate", "home buying", "home selling", "property", "housing market"]}
        canonicalUrl={`https://savingsjoy.com/realestate/${article.slug}`}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/realestate"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Real Estate
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground leading-tight">
              {article.title}
            </h1>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground leading-relaxed mb-6"
              >
                {parseBoldText(paragraph)}
              </p>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <h2 className="text-xl font-bold font-display text-foreground mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-4">
              Compare top real estate providers and find the best deals for your needs.
            </p>
            <Link
              href="/realestate"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Compare Real Estate Providers
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-8 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold font-display text-foreground mb-6">
              Related Articles
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/realestate/${relatedArticle.slug}`}
                  className="block p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedArticle.content[0]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
