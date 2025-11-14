# SavingsJoy Design Guidelines

## Design Approach
**Reference-Based Design** inspired by modern fintech comparison sites (NerdWallet, Credit Karma) combined with Google's search result aesthetics for affiliate offer displays. Clean, trustworthy, and conversion-focused.

## Core Design Principles
1. **Trust & Credibility**: Professional presentation builds confidence in affiliate recommendations
2. **Scannable Hierarchy**: Users quickly find relevant offers without cognitive overload
3. **Conversion-Focused**: Clear CTAs guide users to affiliate links seamlessly
4. **Playful Professionalism**: Pig mascot adds personality without undermining authority

---

## Typography System

**Font Stack**: Google Fonts via CDN
- **Primary**: Inter (headings, UI elements, body)
- **Accent**: Space Grotesk (hero headlines, section titles)

**Type Scale**:
- Hero Headline: Space Grotesk, 4xl/5xl (mobile/desktop), font-bold
- Page Titles: Space Grotesk, 3xl/4xl, font-bold
- Section Headings: Inter, 2xl/3xl, font-semibold
- Card Titles: Inter, lg/xl, font-semibold
- Body Text: Inter, base, font-normal
- Small Print: Inter, sm, font-normal

---

## Layout System

**Spacing Primitives**: Tailwind units of **2, 4, 6, 8, 12, 16, 20**
- Tight spacing: p-2, gap-2 (within components)
- Standard spacing: p-4, p-6, gap-4 (cards, sections)
- Section padding: py-12, py-16, py-20 (vertical rhythm)
- Container gaps: gap-8, gap-12 (between major elements)

**Container Strategy**:
- Page wrapper: max-w-7xl mx-auto px-4
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto
- Card grids: grid with responsive columns

**Responsive Grid Patterns**:
- Domain Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Affiliate Offers: grid-cols-1 gap-4 (stacked for scannability)
- Feature Highlights: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

---

## Component Library

### Navigation Header
- Fixed/sticky header with backdrop blur
- Logo (pig mascot + "SavingsJoy" wordmark) on left
- Horizontal nav links center/right (Desktop)
- Mobile: Hamburger menu (Heroicons) with slide-out drawer
- CTA button: "View Domains" or "Get Started"
- Height: h-16 md:h-20

### Hero Section (Homepage)
**Large Hero Image: YES**
- Full-width hero with gradient overlay on background image (joyful savings theme - piggy banks, celebrations, happy families)
- Height: min-h-[500px] md:min-h-[600px]
- Centered content with:
  - Pig mascot illustration/icon
  - Hero headline: "Smart Domains. Joyful Deals."
  - Subheading describing value proposition
  - Dual CTAs: Primary "Explore Domains" + Secondary "Browse Deals"
  - **CTA Buttons on Image**: backdrop-blur-md bg-white/20 with border
- Trust indicators below CTAs: "Trusted by thousands" + small company logos

### Domain Cards (DomainCard.tsx)
- Rounded card with shadow (rounded-lg shadow-md hover:shadow-lg)
- Domain name as bold heading at top
- Category badge (pill shape, subtle background)
- Description text (2-3 lines max, text-sm)
- Placeholder thumbnail or category icon
- "Learn More" link/button at bottom
- Card padding: p-6, gap-4 internal spacing

### Affiliate Offer Cards (VerticalCard.tsx)
**IMPORTANT**: Two distinct patterns for different contexts:

#### Pattern 1: Google SERP Style (Vertical Pages ONLY)
Used exclusively on vertical pages (Real Estate, Insurance, Taxes, Credit Cards, Loans, Mortgage) to mimic familiar search result interfaces.

**Design Rationale**: Users seeking affiliate offers expect a scannable, text-focused list (like Google search results) rather than visual card grids. This maximizes information density and conversion rates.

**Structure**:
- **No card wrapper** - clean list items with minimal visual weight
- Display URL: Green text (text-green-700 dark:text-green-500), text-sm, shown first above title
- Title: Large blue link (#1a0dab light, #8ab4f8 dark), text-xl, hover:underline, clickable to affiliate link
- Description: Gray text (text-muted-foreground), text-sm, 2-3 lines max
- **No logos, ratings, features, or buttons** - pure text-based results
- Spacing: py-3 md:py-4 between results
- Separator: Subtle border-b between results for visual rhythm
- GA Tracking: Click events fire on title link with company name and offer ID

**Why This Works**: Vertical pages serve discovery/comparison intent - users want fast scanning of many options. Google-style results provide maximum information density with zero visual friction.

#### Pattern 2: Card-Based Style (Homepage, Domains, Other Contexts)
Used for domain showcase cards and other non-vertical-page contexts where visual appeal and branding matter.

**Structure** (for reference - not currently used on vertical pages):
- Card wrapper with rounded corners and shadow
- Company logo (square, w-16 h-16 or w-20 h-20)
- Title with star ratings
- Feature badges and CTA buttons
- More visual weight, slower scanning speed

**Divergence Justified**: Homepage/domains pages prioritize visual appeal and brand showcasing, while vertical pages prioritize conversion through familiarity (Google-style results).

### Footer
Multi-column footer (4 columns desktop, stack on mobile):
- Column 1: SavingsJoy logo + tagline + pig mascot
- Column 2: Quick Links (Home, Domains, Technology)
- Column 3: Verticals (Insurance, Real Estate, Taxes, etc.)
- Column 4: Contact info + social links (if applicable)
- Bottom bar: Copyright, Privacy Policy link, Powered by Start341
- Footer background: subtle tint/background treatment
- Padding: py-12 md:py-16

### Contact Form (ContactForm.tsx)
Two-column layout (desktop):
- Left: Form fields (Name, Email, Subject, Message)
- Right: Contact information (email, response time, office hours)
- Form styling: 
  - Input fields: border rounded-md p-3 w-full
  - Labels: font-medium mb-2 block
  - Submit button: full-width primary CTA
- Form spacing: gap-6 between fields
- Container: max-w-5xl mx-auto

---

## Page-Specific Layouts

### Homepage
1. Hero section (described above)
2. Premium Domains Showcase: Grid of 4-6 featured domains
3. Verticals Overview: Card grid showing all 6 verticals with icons and descriptions
4. Trust Section: Statistics/social proof (e.g., "10,000+ domains managed")
5. CTA Section: Final conversion prompt with pig mascot

### Vertical Pages (Real Estate, Insurance, etc.)
**Design Pattern**: Google Search Results Page (SERP) aesthetic for maximum scannability and conversion.

1. Page header: Title + description (py-12 md:py-16 bg-muted with border-b)
2. Offer count summary: "Showing X top-rated providers" (py-6 border-b, text-sm text-muted-foreground)
3. **Google-style results list**: 
   - Clean vertical list (NO grid, NO card wrappers)
   - Each result: green URL → blue title link → gray description
   - Subtle borders between results (border-b on each item)
   - Container: max-w-6xl mx-auto with consistent px-4 sm:px-6 lg:px-8
   - No sidebar - full-width content for faster scanning
4. Footer

**Key Differences from Homepage**:
- Homepage uses visual cards with logos/images for brand appeal
- Vertical pages use text-only SERP format for speed and conversion
- Both patterns serve different user intents (exploration vs. comparison)

### Domains Gallery Page
1. Page header with search/filter options
2. Category tabs or filter chips
3. Domain card grid (3 columns desktop)
4. Pagination or "Load More" if many domains

---

## Icons
**Library**: Heroicons (via CDN)
- Navigation: Menu, X, ChevronDown
- Features: CheckCircle, Star, TrendingUp, Shield
- Contact: Mail, Phone, MapPin
- Social: Facebook, Twitter, LinkedIn (if needed)

---

## Images

**Hero Section**:
- Large, vibrant image showing joy/savings theme
- Suggested: Happy family with piggy bank, celebration of savings, or abstract joyful composition
- Treatment: Gradient overlay (dark to transparent) for text readability
- Dimensions: 1920x800px minimum

**Domain Card Thumbnails**:
- Category-specific icons or abstract representations
- Size: 300x200px
- Style: Modern, clean illustrations

**Company Logos** (Affiliate Offers):
- Real company logos (Zillow, Progressive, TurboTax, etc.)
- Square format preferred: 200x200px minimum
- Transparent PNG backgrounds

**Pig Mascot**:
- Friendly, modern pig illustration
- Multiple sizes: 400x400px (hero), 200x200px (header), 100x100px (footer)
- Style: Playful but professional, not cartoonish

---

## Accessibility
- Minimum contrast ratio: WCAG AA (4.5:1 for text)
- All interactive elements: keyboard accessible
- Form inputs: clear labels and focus states
- Alt text on all images and logos
- Semantic HTML throughout

---

## Animation Philosophy
**Minimal, purposeful motion**:
- Card hover: subtle shadow increase (transition-shadow duration-200)
- Button hover: slight scale or background shift
- Mobile menu: smooth slide-in (transition-transform duration-300)
- NO scroll-triggered animations or parallax effects