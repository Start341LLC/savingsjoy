import VerticalCard from "@/components/VerticalCard";
import { verticals } from "@/config/verticals";
import { Vertical } from "@shared/schema";
import SEO from "@/components/SEO";
import { realEstateArticles } from "@/config/realEstateArticles";
import ArticleCard from "@/components/ArticleCard";

interface VerticalPageProps {
  slug: string;
}

export default function VerticalPage({ slug }: VerticalPageProps) {
  const vertical = verticals.find((v) => v.slug === slug);

  if (!vertical) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-display text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground">The requested vertical page does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={vertical.title}
        description={vertical.metaDescription}
        keywords={[vertical.slug, 'savings', 'deals', 'comparison', 'quotes']}
      />
      {/* Header with Urgency */}
      <section className="pt-6 pb-4 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl md:text-2xl font-bold font-display text-foreground mb-1" data-testid={`header-${slug}`}>
            Compare Top {vertical.title.replace(' Savings & Deals', '').replace(' Comparison & Quotes', '').replace(' Preparation & Filing Services', '').replace(' Offers & Comparisons', '').replace(' Rates & Offers', '').replace(' Rates & Home Loans', '')} Providers
          </h1>
          <p className="text-sm text-muted-foreground">
            Find Your Best Deal Today
          </p>
        </div>
      </section>

      {/* Offers List - Google SERP Style */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {vertical.offers.length > 0 ? (
            <div className="divide-y divide-border">
              {vertical.offers.map((offer) => (
                <VerticalCard key={offer.id} offer={offer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-lg text-muted-foreground mb-4">
                Offers coming soon for this category.
              </p>
              <p className="text-sm text-muted-foreground">
                Check back later for the latest deals and comparisons.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Real Estate Blog - Only show on Real Estate page */}
      {slug === "realestate" && (
        <section className="py-8 bg-muted/30" data-testid="section-articles">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display text-foreground mb-6">
              Blog
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {realEstateArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
