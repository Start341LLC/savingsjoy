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
    } else if (slug === "loans") {
      ldData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Personal Loans | Compare Rates & Get Approved in Minutes",
        description:
          "Compare personal loan rates from top lenders including SoFi, LendingClub, and Marcus. Find competitive rates for debt consolidation, home improvement, and more.",
        url: "https://savingsjoy.com/loans",
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
          name: "Top Personal Loan Lenders",
          description: "Compare leading personal loan providers and rates",
          numberOfItems: 3,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "FinancialProduct",
                name: "SoFi Personal Loans - Low Rates, No Fees",
                description:
                  "Competitive rates with no origination fees. Unemployment protection and career coaching included.",
                provider: {
                  "@type": "Organization",
                  name: "SoFi",
                },
                category: "Personal Loan",
                url: "https://sofi.com",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "FinancialProduct",
                name: "LendingClub - Personal Loans Up to $40K",
                description:
                  "Fixed-rate personal loans for debt consolidation, home improvement, and major purchases.",
                provider: {
                  "@type": "Organization",
                  name: "LendingClub",
                },
                category: "Personal Loan",
                url: "https://lendingclub.com",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "FinancialProduct",
                name: "Marcus Personal Loans - No Fees",
                description:
                  "Simple personal loans with no fees. Flexible payment dates and free financial tools.",
                provider: {
                  "@type": "Organization",
                  name: "Marcus by Goldman Sachs",
                },
                category: "Personal Loan",
                url: "https://marcus.com",
              },
            },
          ],
        },
        hasPart: [
          {
            "@type": "Article",
            headline:
              "Personal Loans 101: How to Choose the Right Loan and Lender",
            description:
              "Complete guide to understanding personal loan types, rates, terms, and finding the best lender for your needs.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "Debt Consolidation Loans: Save Money by Combining Your Debts",
            description:
              "Learn how debt consolidation loans work and whether consolidating your debts could save you money.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "Personal Loan vs Credit Card: Which Is Better for Large Purchases?",
            description:
              "Compare the costs and benefits of personal loans versus credit cards for major expenses.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "How to Get Approved: Personal Loan Requirements and Credit Score Tips",
            description:
              "Understand what lenders look for and how to improve your chances of personal loan approval.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
        ],
      };
    } else if (slug === "creditcards") {
      ldData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Best Credit Cards 2025 | Compare Rewards & Cash Back Offers",
        description:
          "Compare top credit cards including Chase Sapphire Preferred, American Express Gold, and Capital One Venture. Find the best rewards programs and cash back offers for 2025.",
        url: "https://savingsjoy.com/credit-cards",
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
          name: "Top Credit Card Offers",
          description: "Compare leading credit cards for rewards, travel, and cash back",
          numberOfItems: 3,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "FinancialProduct",
                name: "Chase Sapphire Preferred - Travel Rewards Card",
                description:
                  "Earn 2X points on travel and dining. Redeem for travel through Chase Ultimate Rewards.",
                provider: {
                  "@type": "Organization",
                  name: "Chase",
                },
                category: "Travel Rewards Credit Card",
                url: "https://chase.com",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "FinancialProduct",
                name: "American Express Gold Card - Dining & Groceries",
                description:
                  "Earn 4X points at restaurants and U.S. supermarkets. Premium dining benefits included.",
                provider: {
                  "@type": "Organization",
                  name: "American Express",
                },
                category: "Dining Rewards Credit Card",
                url: "https://americanexpress.com",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "FinancialProduct",
                name: "Capital One Venture - Unlimited 2X Miles",
                description:
                  "Earn unlimited 2X miles on every purchase. Redeem for any travel or transfer to partners.",
                provider: {
                  "@type": "Organization",
                  name: "Capital One",
                },
                category: "Travel Rewards Credit Card",
                url: "https://capitalone.com",
              },
            },
          ],
        },
        hasPart: [
          {
            "@type": "Article",
            headline: "Credit Card Rewards Guide: Maximizing Points, Miles, and Cash Back",
            description:
              "Learn strategies to maximize credit card rewards and choose the right card for your spending habits.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline: "Travel Credit Cards Compared: Which One Offers the Best Value?",
            description:
              "Compare top travel credit cards by rewards rates, redemption options, and premium benefits.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline: "Building Credit: Best Credit Cards for Beginners",
            description:
              "Discover credit cards designed for building credit history with responsible use.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "Cash Back vs Points: Which Credit Card Rewards Program Is Right for You?",
            description:
              "Understand the differences between cash back and points programs to choose the best fit.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
        ],
      };
    } else if (slug === "taxes") {
      ldData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Compare Tax Preparation Software | File Taxes Online & Maximize Refund",
        description:
          "Compare top tax software and services including TurboTax, H&R Block, TaxAct, FreeTaxUSA, and Credit Karma Tax. Find the best solution to file your taxes online and maximize your refund.",
        url: "https://savingsjoy.com/taxes",
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
          name: "Top Tax Preparation Services",
          description: "Compare leading tax software and filing services",
          numberOfItems: 5,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Service",
                name: "TurboTax - File Your Taxes Online",
                description:
                  "America's #1 tax preparation software. Easy step-by-step guidance, maximum refund guarantee, and free audit support.",
                provider: {
                  "@type": "Organization",
                  name: "TurboTax",
                },
                category: "Tax Software",
                url: "https://turbotax.intuit.com",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                name: "H&R Block - Tax Preparation & Filing",
                description:
                  "File online or visit a local office. Get help from tax professionals and maximize your refund.",
                provider: {
                  "@type": "Organization",
                  name: "H&R Block",
                },
                category: "Tax Software & Services",
                url: "https://hrblock.com",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Service",
                name: "TaxAct - Affordable Tax Filing Software",
                description:
                  "Budget-friendly tax software with comprehensive features. Free federal filing options available.",
                provider: {
                  "@type": "Organization",
                  name: "TaxAct",
                },
                category: "Tax Software",
                url: "https://taxact.com",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Service",
                name: "FreeTaxUSA - Free Federal Tax Filing",
                description:
                  "Completely free federal tax filing with optional state filing. Simple, secure, and accurate.",
                provider: {
                  "@type": "Organization",
                  name: "FreeTaxUSA",
                },
                category: "Free Tax Software",
                url: "https://freetaxusa.com",
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "Service",
                name: "Credit Karma Tax - 100% Free Tax Filing",
                description:
                  "Completely free federal and state tax filing. No hidden fees, no upgrades required.",
                provider: {
                  "@type": "Organization",
                  name: "Credit Karma",
                },
                category: "Free Tax Software",
                url: "https://creditkarma.com/tax",
              },
            },
          ],
        },
        hasPart: [
          {
            "@type": "Article",
            headline: "Tax Filing Guide 2025: Everything You Need to Know Before Filing",
            description:
              "Complete overview of tax filing requirements, deadlines, and common deductions for the current tax year.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "Maximizing Your Tax Refund: Deductions and Credits You Shouldn't Miss",
            description:
              "Discover overlooked tax deductions and credits that can significantly increase your refund.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline: "Free vs Paid Tax Software: Which Option Is Right for You?",
            description:
              "Compare free and paid tax software features to determine the best choice for your tax situation.",
            author: {
              "@type": "Organization",
              name: "SavingsJoy",
            },
          },
          {
            "@type": "Article",
            headline:
              "Self-Employed Tax Guide: Deductions, Quarterly Payments, and Filing Tips",
            description:
              "Essential tax information for freelancers, contractors, and small business owners.",
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
