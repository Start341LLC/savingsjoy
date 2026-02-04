import { Link } from "wouter";
import { siteConfig } from "@/config/site";
import pigMascot from "@assets/generated_images/Pink_pig_mascot_logo_5c51842d.webp";
import { trackEvent } from "@/lib/analytics";

const trackFooterLink = (label: string) => {
  trackEvent('footer_click', 'Footer Navigation', label);
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={pigMascot} alt="SavingsJoy mascot" className="h-12 w-12" />
              <span className="text-xl font-bold font-display text-primary">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-foreground font-semibold text-sm mb-2">{siteConfig.tagline}</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:support@start341.com">
                  <div
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="footer-link-contact"
                    onClick={() => trackFooterLink('Contact')}
                  >
                    Contact Us
                  </div>
                </a>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <div
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="footer-link-privacy"
                    onClick={() => trackFooterLink('Privacy Policy')}
                  >
                    Privacy Policy
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use">
                  <div
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="footer-link-terms"
                    onClick={() => trackFooterLink('Terms of Use')}
                  >
                    Terms of Use
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Savings Categories</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/realestate">
                  <div 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" 
                    data-testid="footer-link-realestate"
                    onClick={() => trackFooterLink('Real Estate')}
                  >
                    Real Estate
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/insurance">
                  <div 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" 
                    data-testid="footer-link-insurance"
                    onClick={() => trackFooterLink('Insurance')}
                  >
                    Insurance
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/taxes">
                  <div 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" 
                    data-testid="footer-link-taxes"
                    onClick={() => trackFooterLink('Taxes')}
                  >
                    Taxes
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/creditcards">
                  <div 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" 
                    data-testid="footer-link-creditcards"
                    onClick={() => trackFooterLink('Credit Cards')}
                  >
                    Credit Cards
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/loans">
                  <div 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" 
                    data-testid="footer-link-loans"
                    onClick={() => trackFooterLink('Loans')}
                  >
                    Loans
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/mortgage">
                  <div 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" 
                    data-testid="footer-link-mortgage"
                    onClick={() => trackFooterLink('Mortgage')}
                  >
                    Mortgage
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} {siteConfig.name}. A product of{" "}
              <a
                href={siteConfig.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:no-underline"
                data-testid="link-company"
              >
                {siteConfig.company}
              </a>
              .
            </p>
            <p className="mt-2 md:mt-0">
              Contact:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:underline"
                data-testid="link-email"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
