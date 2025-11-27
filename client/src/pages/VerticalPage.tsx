import { useEffect } from "react";
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

  useEffect(() => {
    let ldData: Record<string, unknown> | null = null;

    if (slug === "realestate") {
      ldData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Compare Top Real Estate Listings & Home Search Providers",
        description:
          "Find your dream home by comparing top real estate platforms including Zillow, Redfin, Trulia, and cash home buying services.",
        url: "https://savingsjoy.com/realestate",
        publisher: {
          "@type": "Organization",
          name: "SavingsJoy",
          url: "https://savingsjoy.com",
          logo: {
            "@type": "ImageObject",
            url: "https://savingsjoy.com/logo.png",
          },
        },
        mainEntity: {
          "@type": "ItemList",
          name: "Top Real Estate Service Providers",
          description: "Compare leading real estate platforms and services",
          numberOfItems: 4,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Service",
                name: "Zillow - Find Your Dream Home",
                description:
                  "Search millions of homes for sale and rent. Get home values, compare neighborhoods, and connect with local real estate agents.",
                provider: {
                  "@type": "Organization",
                  name: "Zillow",
                },
                category: "Real Estate Search",
                url: "https://zillow.com",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                name: "Liz Buys Houses - Sell Fast for Cash",
                description:
                  "Get a fair cash offer for your house in days. Skip repairs, agent fees, and lengthy listings with a quick closing timeline.",
                provider: {
                  "@type": "Organization",
                  name: "Liz Buys Houses",
                },
                category: "Cash Home Buying",
                url: "https://lizbuyshouses.net",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Service",
                name: "Redfin - Buy & Sell Real Estate",
                description:
                  "Low-commission real estate brokerage with full-service agents. Save thousands on listing fees.",
                provider: {
                  "@type": "Organization",
                  name: "Redfin",
                },
                category: "Real Estate Brokerage",
                url: "https://redfin.com",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Service",
                name: "Trulia - Homes for Sale & Real Estate",
                description:
                  "Discover homes for sale with detailed neighborhood insights, school ratings, and local amenities.",
                provider: {
                  "@type": "Organization",
                  name: "Trulia",
                },
                category: "Real Estate Search",
                url: "https://trulia.com",
              },
            },
          ],
        },
        hasPart: [
          {
            "@type": "Article",
            headline: "First-Time Homebuyer's Guide: 5 Steps to Your Dream Home",
            description:
              "Buying your first home is one of life's most exciting milestones, but it can feel overwhelming without proper guidance.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline: "Selling Your Home Fast: Proven Strategies for Maximum Value",
            description:
              "Whether you're relocating, downsizing, or upgrading, selling your home quickly at the right price requires strategy.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "Understanding Real Estate Market Trends: Is Now the Right Time to Buy or Sell?",
            description:
              "The real estate market constantly shifts based on economic factors, interest rates, and local supply and demand.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "Comparing Real Estate Platforms: How to Choose the Best Service for Your Needs",
            description:
              "Not all real estate platforms are created equal. Understanding their differences helps you find homes faster and get better deals.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
        ],
      };
    } else if (slug === "insurance") {
      ldData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Compare Insurance Quotes | Auto, Home & Life Coverage",
        description:
          "Compare insurance rates from top providers including Progressive, GEICO, State Farm, Allstate, and Liberty Mutual. Find the best coverage for auto, home, and life insurance.",
        url: "https://savingsjoy.com/insurance",
        publisher: {
          "@type": "Organization",
          name: "SavingsJoy",
          url: "https://savingsjoy.com",
          logo: {
            "@type": "ImageObject",
            url: "https://savingsjoy.com/logo.png",
          },
        },
        mainEntity: {
          "@type": "ItemList",
          name: "Top Insurance Providers",
          description: "Compare leading insurance companies for auto, home, and life coverage",
          numberOfItems: 5,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Service",
                name: "Progressive - Auto Insurance Quotes",
                description:
                  "Get a free auto insurance quote in minutes. Compare rates and find discounts on car insurance coverage.",
                provider: {
                  "@type": "Organization",
                  name: "Progressive",
                },
                category: "Auto Insurance",
                url: "https://progressive.com",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                name: "GEICO - 15 Minutes Could Save You 15% or More",
                description:
                  "Fast, easy quotes for car insurance. Bundle and save with home and renters insurance.",
                provider: {
                  "@type": "Organization",
                  name: "GEICO",
                },
                category: "Auto Insurance",
                url: "https://geico.com",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Service",
                name: "State Farm - Get Auto Insurance Quotes",
                description:
                  "Trusted insurance provider with local agents. Get personalized auto, home, and life insurance coverage.",
                provider: {
                  "@type": "Organization",
                  name: "State Farm",
                },
                category: "Multi-line Insurance",
                url: "https://statefarm.com",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Service",
                name: "Allstate - You're In Good Hands",
                description:
                  "Comprehensive insurance coverage with accident forgiveness and new car replacement.",
                provider: {
                  "@type": "Organization",
                  name: "Allstate",
                },
                category: "Auto Insurance",
                url: "https://allstate.com",
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "Service",
                name: "Liberty Mutual - Customized Insurance Coverage",
                description:
                  "Personalized insurance policies tailored to your needs. Save with bundling discounts.",
                provider: {
                  "@type": "Organization",
                  name: "Liberty Mutual",
                },
                category: "Multi-line Insurance",
                url: "https://libertymutual.com",
              },
            },
          ],
        },
        hasPart: [
          {
            "@type": "Article",
            headline: "Auto Insurance 101: Understanding Coverage Types and Finding the Best Rates",
            description:
              "Learn about liability, collision, comprehensive coverage and how to compare quotes effectively.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline: "Home Insurance Buyer's Guide: What's Covered and What's Not",
            description:
              "Understand home insurance policies, from dwelling coverage to personal property protection.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline: "Life Insurance Explained: Term vs Whole Life and How Much You Need",
            description:
              "Compare life insurance types and calculate the right coverage amount for your family's needs.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline: "Money-Saving Insurance Tips: Discounts and Bundling Strategies",
            description:
              "Discover proven ways to reduce insurance premiums while maintaining quality coverage.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
        ],
      };
    }

    if (!ldData) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(ldData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [slug]);

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
