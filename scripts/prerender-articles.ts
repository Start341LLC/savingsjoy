/**
 * SSG Prerender Script for Real Estate Articles
 *
 * This script generates static HTML files for each real estate article at build time.
 * Each generated HTML includes:
 * - Full article content
 * - SEO meta tags (title, description)
 * - Canonical URL (https://savingsjoy.com/realestate/{slug})
 * - Structured data (JSON-LD)
 *
 * Run after Vite build: tsx scripts/prerender-articles.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist/public");

// Article data (duplicated here for build-time access without transpiling client code)
interface Article {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  content: string[];
}

const realEstateArticles: Article[] = [
  {
    id: "article-1",
    slug: "first-time-homebuyer-guide",
    title: "First-Time Homebuyer's Guide: 5 Steps to Your Dream Home",
    metaDescription:
      "Buying your first home? Learn the 5 essential steps including mortgage pre-approval, defining must-haves, choosing platforms, home inspections, and planning for closing costs.",
    content: [
      "Buying your first home is one of life's most exciting milestones, but it can feel overwhelming without proper guidance. Here's how to navigate the process successfully.",
      "**Start with Your Finances** - Before falling in love with properties, get pre-approved for a mortgage. This shows sellers you're serious and helps you understand your true budget. Check your credit score and aim for at least 620 for conventional loans, though higher scores unlock better interest rates.",
      "**Define Your Must-Haves** - Create two lists: non-negotiables (like number of bedrooms or location) and nice-to-haves (like a pool or finished basement). This clarity prevents you from wasting time on unsuitable properties and helps your agent find the perfect match.",
      "**Choose the Right Real Estate Platform** - Today's top platforms like Zillow and Realtor.com offer powerful search tools, neighborhood insights, and direct connections to local agents. Compare multiple providers to find the best interface and most comprehensive listings for your area.",
      "**Don't Skip the Home Inspection** - Even if a home looks perfect, professional inspections can uncover hidden issues with foundations, electrical systems, or plumbing. The few hundred dollars spent here could save you tens of thousands in future repairs.",
      "**Plan for Closing Costs** - Beyond your down payment, expect to pay 2-5% of the purchase price in closing costs. These include appraisal fees, title insurance, and attorney fees. Budget accordingly to avoid last-minute surprises.",
      "Ready to start your home search? Compare top real estate providers above to find the best deals and connect with experienced agents in your area.",
    ],
  },
  {
    id: "article-2",
    slug: "selling-home-fast-strategies",
    title: "Selling Your Home Fast: Proven Strategies for Maximum Value",
    metaDescription:
      "Learn proven strategies to sell your home quickly at maximum value including pricing, staging, photography, and timing your listing for success.",
    content: [
      "Whether you're relocating, downsizing, or upgrading, selling your home quickly at the right price requires strategy. Here's what top-performing sellers do differently.",
      "**Price It Right From Day One** - Overpricing is the number one reason homes sit on the market. Work with your agent to analyze comparable sales in your neighborhood from the past 3-6 months. Homes priced competitively often receive multiple offers, driving the final price higher than overpriced listings that eventually need reductions.",
      "**First Impressions Matter** - Most buyers start their search online, making professional photography essential. Consider these high-impact improvements: fresh paint in neutral colors, enhanced curb appeal with landscaping, decluttered spaces that photograph well, and deep cleaning including carpets and windows.",
      "**Leverage Multiple Listing Platforms** - Don't rely on just one platform. Top real estate sites each have unique audiences and features. Listing on multiple services maximizes exposure to serious buyers and increases your chances of a quick sale.",
      "**Time Your Listing Strategically** - Spring and early summer traditionally see the most buyer activity, but low inventory in winter can mean less competition. Talk to local agents about your specific market's patterns.",
      "**Be Flexible with Showings** - The more accessible your home is for viewings, the faster it will sell. Consider lockboxes for agent access and accommodate evening and weekend showing requests.",
      "Ready to list your home? Use our comparison tool above to find real estate platforms offering maximum exposure and competitive commission rates.",
    ],
  },
  {
    id: "article-3",
    slug: "real-estate-market-trends",
    title:
      "Understanding Real Estate Market Trends: Is Now the Right Time to Buy or Sell?",
    metaDescription:
      "Analyze real estate market trends including interest rates, inventory levels, and seasonal patterns to determine the best time to buy or sell your home.",
    content: [
      "The real estate market constantly shifts based on economic factors, interest rates, and local supply and demand. Here's how to read the signals and make informed decisions.",
      "**Interest Rates Impact Affordability** - When mortgage rates are low, buyers can afford more house for the same monthly payment. A 1% rate difference on a $400,000 loan can mean over $200 more per month, affecting what buyers can offer. Monitor Federal Reserve announcements and use rate comparison tools to time your purchase.",
      "**Inventory Levels Tell the Story** - A seller's market has low inventory (under 4 months of supply) with homes selling quickly, often above asking price. A buyer's market has high inventory (over 6 months) with more negotiating power for purchasers. Check local inventory levels on major real estate platforms to gauge current conditions.",
      "**Seasonal Patterns Create Opportunities** - Summer sees peak activity but also peak prices and competition. Late fall and winter offer less competition, potentially better deals, and more motivated sellers. However, serious buyers also shop year-round, so a well-priced home sells regardless of season.",
      "**Local Markets Vary Significantly** - National trends don't always reflect your local reality. A tech hub might see continued price growth while a rural area experiences decline. Use neighborhood-specific data from comprehensive real estate sites to understand your micro-market.",
      "**Economic Indicators to Watch** - Employment rates, wage growth, and population migration patterns all affect housing demand. Areas with job growth and population increases typically see stronger real estate markets with rising prices.",
      "Compare real estate providers above to access detailed market analytics, neighborhood trends, and expert insights that help you time your transaction perfectly.",
    ],
  },
  {
    id: "article-4",
    slug: "comparing-real-estate-platforms",
    title:
      "Comparing Real Estate Platforms: How to Choose the Best Service for Your Needs",
    metaDescription:
      "Compare real estate platforms like Zillow and Realtor.com. Learn what features to look for in search tools, listing coverage, home value estimates, and agent networks.",
    content: [
      "Not all real estate platforms are created equal. Understanding their differences helps you find homes faster, get better deals, and connect with the right professionals.",
      "**Search Features and User Experience** - The best platforms offer advanced filters beyond basic price and bedrooms. Look for map-based searches, school district filters, commute time calculators, and detailed neighborhood data. Mobile app quality matters too—you'll likely do significant browsing on your phone.",
      "**Listing Coverage and Freshness** - Major platforms like Zillow and Realtor.com aggregate listings from Multiple Listing Services (MLS), but update frequencies vary. Some show homes that already sold, while others reflect real-time availability. Check how often listings refresh to avoid disappointment.",
      "**Home Value Estimates and Market Data** - Automated valuation models (AVMs) help you understand if a home is priced fairly. These estimates use comparable sales, tax assessments, and market trends. Cross-reference estimates across platforms—they often vary by 10-20%—and always get a professional appraisal before purchasing.",
      "**Agent Networks and Reviews** - Quality platforms vet their agent networks and provide client reviews, transaction history, and specializations. Look for agents with strong local expertise, responsive communication styles, and proven track records in your price range.",
      "**Additional Tools and Resources** - Top platforms offer mortgage calculators, closing cost estimators, neighborhood crime statistics, and school ratings. Some provide virtual tours, 3D walkthroughs, and open house schedules. These tools save time and help you make informed decisions.",
      "**Cost Transparency** - Some platforms connect you with discount brokers or offer buyer rebates. Others partner with traditional full-service agents. Understanding fee structures upfront helps you budget accurately and maximize savings.",
      "Use our comparison tool above to evaluate real estate providers side-by-side. Find the platform with the features, coverage, and agent network that best matches your home buying or selling goals. Start comparing now to save time and money on your real estate journey.",
    ],
  },
];

const SITE_NAME = "SavingsJoy";
const SITE_URL = "https://savingsjoy.com";

/**
 * Convert **bold** markdown syntax to HTML <strong> tags
 */
function parseBoldText(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

/**
 * Generate the JSON-LD structured data for an article
 */
function generateStructuredData(article: Article): string {
  const ldData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url: `${SITE_URL}/realestate/${article.slug}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/realestate/${article.slug}`,
    },
    isPartOf: {
      "@type": "WebPage",
      name: "Real Estate Savings & Deals",
      url: `${SITE_URL}/realestate`,
    },
  };
  return JSON.stringify(ldData);
}

/**
 * Generate the article content HTML
 */
function generateArticleContent(article: Article): string {
  const paragraphs = article.content
    .map(
      (p) => `
              <p class="text-foreground leading-relaxed mb-6">
                ${parseBoldText(p)}
              </p>`
    )
    .join("");

  // Get related articles (first 2 that aren't this article)
  const relatedArticles = realEstateArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const relatedArticlesHtml = relatedArticles
    .map(
      (related) => `
                <a
                  href="/realestate/${related.slug}"
                  class="block p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 class="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                    ${related.title}
                  </h3>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    ${related.content[0]}
                  </p>
                </a>`
    )
    .join("");

  return `
    <div class="min-h-screen bg-background">
      <!-- Breadcrumb Navigation -->
      <nav class="bg-muted/30 border-b border-border">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <a
            href="/realestate"
            class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1"><path d="m15 18-6-6 6-6"/></svg>
            Back to Real Estate
          </a>
        </div>
      </nav>

      <!-- Article Content -->
      <article class="py-8 md:py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Article Header -->
          <header class="mb-8">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground leading-tight">
              ${article.title}
            </h1>
          </header>

          <!-- Article Body -->
          <div class="prose prose-lg max-w-none">
            ${paragraphs}
          </div>

          <!-- CTA Section -->
          <div class="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <h2 class="text-xl font-bold font-display text-foreground mb-3">
              Ready to Get Started?
            </h2>
            <p class="text-muted-foreground mb-4">
              Compare top real estate providers and find the best deals for your needs.
            </p>
            <a
              href="/realestate"
              class="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Compare Real Estate Providers
            </a>
          </div>
        </div>
      </article>

      <!-- Related Articles -->
      <section class="py-8 bg-muted/30 border-t border-border">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-xl font-bold font-display text-foreground mb-6">
            Related Articles
          </h2>
          <div class="grid gap-4 md:grid-cols-2">
            ${relatedArticlesHtml}
          </div>
        </div>
      </section>
    </div>`;
}

/**
 * Generate the full HTML page for an article
 */
function generateArticleHtml(article: Article, baseHtml: string): string {
  const canonicalUrl = `${SITE_URL}/realestate/${article.slug}`;
  const pageTitle = `${article.title} | ${SITE_NAME}`;

  // Get the article content for SSG
  const articleContent = generateArticleContent(article);

  // Create the HTML by modifying the base template
  let html = baseHtml;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${pageTitle}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${article.metaDescription}">`
  );

  // Add canonical link right after the meta description
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}">`;
  html = html.replace(
    /(<meta name="description" content=".*?">)/,
    `$1\n    ${canonicalTag}`
  );

  // Add Open Graph tags before closing </head>
  const ogTags = `
    <!-- Open Graph tags for SSG article -->
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.metaDescription}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta property="og:type" content="article">`;
  html = html.replace("</head>", `${ogTags}\n  </head>`);

  // Add article-specific structured data before closing </head>
  const structuredData = `
    <!-- Article structured data for SSG -->
    <script type="application/ld+json">
      ${generateStructuredData(article)}
    </script>`;
  html = html.replace("</head>", `${structuredData}\n  </head>`);

  // Inject SSG content into the root div for immediate display
  // The React app will hydrate over this content
  const ssgComment = `<!-- SSG: Pre-rendered article content for SEO -->`;
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${ssgComment}${articleContent}</div>`
  );

  return html;
}

/**
 * Main function to generate all static article pages
 */
async function prerenderArticles() {
  console.log("Starting SSG prerender for real estate articles...\n");

  // Read the base HTML template from the built SPA
  const indexHtmlPath = path.join(distDir, "index.html");

  if (!fs.existsSync(indexHtmlPath)) {
    console.error(
      "Error: dist/public/index.html not found. Run 'vite build' first."
    );
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");
  console.log(`Loaded base HTML template from ${indexHtmlPath}`);

  // Generate static HTML for each article
  for (const article of realEstateArticles) {
    const articleDir = path.join(distDir, "realestate", article.slug);
    const articleHtmlPath = path.join(articleDir, "index.html");

    // Create directory if it doesn't exist
    fs.mkdirSync(articleDir, { recursive: true });

    // Generate and write the HTML
    const html = generateArticleHtml(article, baseHtml);
    fs.writeFileSync(articleHtmlPath, html, "utf-8");

    console.log(`  Generated: /realestate/${article.slug}/index.html`);
  }

  console.log(`\nSSG prerender complete! Generated ${realEstateArticles.length} static article pages.`);

  // Verify canonical tags
  console.log("\nVerifying canonical tags in generated files:");
  for (const article of realEstateArticles) {
    const htmlPath = path.join(
      distDir,
      "realestate",
      article.slug,
      "index.html"
    );
    const html = fs.readFileSync(htmlPath, "utf-8");
    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)">/);
    if (canonicalMatch) {
      console.log(`  ${article.slug}: ${canonicalMatch[1]}`);
    } else {
      console.error(`  ERROR: No canonical tag found in ${article.slug}`);
    }
  }
}

prerenderArticles().catch(console.error);
