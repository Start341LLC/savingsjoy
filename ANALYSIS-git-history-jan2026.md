# Git History Analysis: Jan 1-20, 2026 — India Page View Drop Investigation

## Executive Summary

**Repository analyzed:** `Start341LLC/savingsjoy` (savingsjoy.com)
**Note:** The path `/path/to/incometax.com` does not exist on this system. The `incometax.com` codebase is **not available** in this environment. IncomeTax.com is listed as a sister property owned by Start341 LLC (see `client/index.html:166-168` structured data), but its repository is separate and was not accessible for analysis.

This report covers the `savingsjoy` repository, which is the only codebase available. If the India page view drop pertains to `incometax.com`, a separate analysis of that repository is required.

---

## Commits in the Jan 1-20, 2026 Window

Only **3 non-merge commits** landed in this date range:

| Date       | Commit  | Description |
|------------|---------|-------------|
| 2026-01-05 | `c61c993` | Reorder real estate results: Liz Buys Houses first, Zillow second |
| 2026-01-12 | `8a6bfbd` | Add HomeLight affiliate link as third real estate provider |
| 2026-01-12 | `23ed7da` | Update affiliate link to Rent-To-Own Listings (renamed HomeLight) |

### Files Changed
- `client/src/config/verticals.ts` — affiliate offer ordering and new entries
- `client/src/pages/VerticalPage.tsx` — JSON-LD structured data updates

---

## Analysis by Category

### 1. Geo-Targeting Logic
**NONE FOUND.** There is zero geo-targeting or geolocation logic anywhere in the codebase:
- No IP-based geolocation (no ipinfo, MaxMind, GeoIP, CloudFlare `CF-IPCountry` headers)
- No `navigator.geolocation` usage
- No country-code checks or region-based routing
- No i18n/locale detection

### 2. AdSense Implementation
**NONE FOUND.** This site does not use Google AdSense at all:
- No `adsbygoogle` scripts
- No `pub-` publisher IDs
- No `googlesyndication.com` references
- No ad units of any kind

The site monetizes exclusively through affiliate links (MaxBounty, direct partner links).

### 3. Environment Variables
No changes to environment variables occurred in Jan 1-20. The existing env vars are:
- `CANONICAL_HOST` — optional www-to-apex redirect (`server/index.ts:19`)
- `PORT` — server port (`server/index.ts:105`)
- `DATABASE_URL` — PostgreSQL connection (`server/storage.ts:8`)
- `VITE_GA_MEASUREMENT_ID` — Google Analytics ID (`client/src/lib/analytics.ts:17`)
- `NODE_ENV`, `REPL_ID` — build/environment detection (`vite.config.ts:10-11`)

None of these were modified in the date range.

### 4. API Calls
**No geolocation-related API calls exist.** The only fetch calls are:
- Generic query client for internal API (`client/src/lib/queryClient.ts:15`)
- Contact form submission endpoint (`server/routes.ts`)

No external APIs are called that could affect regional traffic.

### 5. Conditional Rendering Based on Country/Location
**NONE FOUND.** There is no conditional rendering based on:
- Country codes
- IP addresses
- Browser language/locale
- Timezone

India is only referenced in the Privacy Policy (`client/src/pages/PrivacyPolicy.tsx:168`) as a DPDP Act compliance section — this is static text, not logic.

### 6. Deployment Configuration
No deployment configuration changes occurred. Current setup:
- Netlify SPA redirect: `client/public/_redirects` (`/* /index.html 200`)
- No `vercel.json`, `netlify.toml`, `nginx.conf`, middleware files, or edge functions
- No geo-based redirects or rewrites

---

## What Actually Changed (Detailed Diffs)

### Commit `c61c993` (Jan 5) — Reorder Real Estate Results
Swapped the display order of Zillow and Liz Buys Houses on `/realestate`. Liz Buys Houses moved to position 1, Zillow to position 2. JSON-LD structured data updated to match.

**Impact on India traffic:** None. This is a US-focused real estate affiliate reorder.

### Commit `8a6bfbd` (Jan 12) — Add HomeLight Affiliate
Added a new affiliate entry (HomeLight via MaxBounty) as the 3rd real estate provider. Bumped total `numberOfItems` from 4 to 5.

**Impact on India traffic:** None directly. However, the MaxBounty tracking link (`afflat3d2.com/trk/lnk/...`) could potentially behave differently for international traffic — worth verifying if this tracker returns errors or redirects for non-US visitors.

### Commit `23ed7da` (Jan 12) — Rename to Rent-To-Own Listings
Renamed the HomeLight entry to "Rent-To-Own Listings" with updated description and features. Same MaxBounty tracking link retained.

**Impact on India traffic:** None.

---

## Root Cause Assessment

**This codebase (savingsjoy) contains nothing that would cause an India-specific traffic drop.** There are:
- No geo-blocks or geo-redirects
- No country-based conditional rendering
- No AdSense (which could be affected by Google's regional policies)
- No changes to analytics, deployment, or server configuration in the date range

### If the traffic drop is on incometax.com:
The `incometax.com` repository is **not available** in this environment and could not be analyzed. That is a separate codebase. Common causes for an India-specific traffic drop on a tax-related site would include:
1. **Google Search algorithm update** affecting SERP rankings for Indian queries
2. **Geo-redirect or geo-block added** at CDN/hosting level (Cloudflare, Netlify, etc.)
3. **Domain confusion** — India's government income tax portal is `incometax.gov.in`; if Google started favoring the government site, organic traffic to `incometax.com` from India could drop
4. **DNS/CDN configuration changes** that route Indian traffic differently
5. **Cookie consent changes** blocking analytics scripts (making it look like traffic dropped when it's actually an analytics measurement gap)

---

## Recommendations

1. **Get access to the `incometax.com` repository** — the traffic drop analysis requires examining that codebase, not savingsjoy
2. **Check CDN/hosting dashboard** (Cloudflare, Netlify, or wherever incometax.com is hosted) for any geo-blocking rules, firewall rules, or redirect rules added in early January
3. **Check Google Search Console** for incometax.com — look at India-specific impressions and click data to distinguish between a ranking drop vs. a site access issue
4. **Verify DNS resolution from India** — use tools like `dig` from Indian DNS servers or online tools like whatsmydns.net to confirm the domain resolves correctly for Indian users
5. **Check Google Analytics real-time** from an Indian VPN to verify the site loads and tracking fires correctly for Indian visitors
6. **Review GTM container** (ID: `GTM-M3LC65VB`) — if this GTM container is shared across properties, check if any triggers or tags were modified that could block analytics for Indian traffic
