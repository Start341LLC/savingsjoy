# SavingsJoy - Affiliate Marketing Website

## Project Overview
SavingsJoy is a production-ready affiliate marketing website showcasing premium domains and vertical-specific affiliate offers across Real Estate, Insurance, Taxes, Credit Cards, Loans, and Mortgage categories.

## Business Model & Strategy

### Traffic Generation
We drive **organic traffic** through premium domains we own (ApartmentRental.com, IncomeTax.com, PartyRentals.com, TrainSchedule.com). These high-value domains naturally attract users searching for services in specific verticals.

### Revenue Model
We generate revenue through **affiliate marketing**. When users click on affiliate links to service providers (real estate platforms, insurance companies, tax services, credit cards, loans, mortgage providers), we earn commissions. The entire business model depends on driving qualified traffic to these affiliate partners.

### Technical Philosophy
**Important for AI Agents**: The site owner has limited coding experience and prefers to use **free or very inexpensive tools** wherever possible. When suggesting solutions:
- Prioritize free tiers and open-source options
- Use built-in Replit features (database, deployments, analytics)
- Avoid expensive third-party services unless absolutely necessary
- Keep architecture simple and maintainable
- Use well-documented, beginner-friendly technologies

## Technology Stack
- **Frontend**: React + Vite + Wouter (routing)
- **Backend**: Express.js
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Analytics**: Google Analytics 4
- **UI Framework**: Shadcn UI + Tailwind CSS
- **Fonts**: Inter (body), Space Grotesk (display/headings)

## Key Features
- Simplified hero section with light pink background
- Premium domain portfolio showcase (positioned at top of homepage)
- 6 vertical-specific pages with Google-style affiliate offer cards
- Real Estate page includes 4 expert articles for content and engagement
- Contact form with database persistence
- SEO optimization with unique metadata per page
- Google Analytics 4 event tracking on all CTAs and navigation
- Responsive design with mobile menu
- Loading states and error handling
- Reduced white space throughout (40% reduction in padding/margins)
- All navigation links visible on desktop (1024px+)

## Database Setup
The application uses PostgreSQL with Drizzle ORM. The schema is defined in `shared/schema.ts`.

### Initial Setup & Migrations
When deploying to a new environment or after schema changes, run:
```bash
npm run db:push
```

This command:
- Creates the `contact_submissions` table required for the contact form
- Synchronizes any schema changes to the database
- Is safe to run multiple times (idempotent)

**Note**: The database schema has already been pushed in this environment. Fresh deployments will need to run `npm run db:push` before starting the server.

## Environment Variables
Required environment variables (configured in Replit Secrets):
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key
- `VITE_GA_MEASUREMENT_ID` - Google Analytics measurement ID (G-G33CYW2XXV)

## Project Structure
```
client/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── config/         # Site config and data
│   ├── lib/           # Utilities and hooks
│   └── hooks/         # Custom React hooks

server/
├── index.ts           # Express server entry
├── routes.ts          # API routes
├── storage.ts         # Database layer
└── vite.ts           # Vite dev server integration

shared/
└── schema.ts          # Drizzle schema and Zod validation

attached_assets/
└── generated_images/  # Hero image, pig mascot, domain thumbnails
```

## Design System
- **Primary Color**: Pink (#EC4899)
- **Accent Color**: Purple (#A855F7)
- **Secondary Color**: Blue (#3B82F6)
- **Fonts**: Inter (body), Space Grotesk (headings)
- **Components**: Shadcn UI with custom color tokens

## Development
Run the development server:
```bash
npm run dev
```

The application runs on port 5000 with both frontend and backend served from the same origin.

## Pages
- `/` - Homepage with hero, domains, and verticals
- `/realestate`, `/insurance`, `/taxes`, `/creditcards`, `/loans`, `/mortgage` - Vertical pages
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy
- `/404` - Not found page

## Analytics Tracking
Google Analytics 4 events are tracked for:
- Page views (automatic)
- Hero CTA clicks
- Domain card clicks
- Vertical navigation clicks
- Footer link clicks
- Contact form submissions

## Recent Changes
- Simplified hero section: removed gradient, added light pink background (#FFF5F8), removed pig emoji
- Restored pig mascot image in header navigation bar
- Removed Domains page completely from site navigation
- Made domain cards non-clickable display elements (removed badges and hover effects)
- Added 4 expert real estate articles to Real Estate page for content and engagement
- **Article cards show preview + "Read more" link that opens modal with full content**
- Reduced white space by 40% throughout the site (py-16 → py-8)
- **Updated header navigation: All verticals now display as direct clickable links (no dropdown)**
- Each vertical link has hover animations (pink text + pink underline bar)
- Desktop header shows: Home | Real Estate | Insurance | Taxes | Credit Cards | Loans | Mortgage | Contact Us
- Tighter spacing between navigation items (space-x-3)
- Moved Premium Web Properties section to top of homepage
- Reduced all section headings, margins, and card padding for compact design
- Footer includes Privacy Policy link and all vertical category links
- Removed "What to Expect" section from Contact page
- Implemented full database persistence with Drizzle ORM
- Added SEO components to all pages with unique metadata
- Implemented idempotent Google Analytics initialization
- Added comprehensive event tracking across all CTAs

## Architecture Decisions
- Uses in-database storage for contact submissions (production-ready)
- SEO metadata managed via React useEffect for SPA compatibility
- LinkButton component provides consistent navigation with analytics tracking
- Footer and Header use wouter's Link with div children to avoid nested anchors
- All interactive elements have data-testid attributes for e2e testing
