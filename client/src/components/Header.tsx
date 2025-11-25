import { Link } from "wouter";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import pigMascot from "@assets/generated_images/Pink_pig_mascot_logo_5c51842d.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const verticals = [
    { name: "Real Estate", href: "/realestate" },
    { name: "Insurance", href: "/insurance" },
    { name: "Taxes", href: "/taxes" },
    { name: "Credit Cards", href: "/creditcards" },
    { name: "Loans", href: "/loans" },
    { name: "Mortgage", href: "/mortgage" },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home">
                <img src={pigMascot} alt="SavingsJoy mascot" className="h-10 w-10" />
                <span className="text-xl font-bold font-display text-primary">
                  {siteConfig.name}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-evenly ml-8">
            {/* Home Link */}
            <Link href="/">
              <div
                data-testid="link-home-nav"
                className="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200 cursor-pointer"
              >
                Home
              </div>
            </Link>

            {/* Vertical Links */}
            {verticals.map((vertical) => (
              <Link key={vertical.name} href={vertical.href}>
                <div
                  data-testid={`link-${vertical.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200 cursor-pointer"
                >
                  {vertical.name}
                </div>
              </Link>
            ))}

            {/* Contact Us Button */}
            <a href="mailto:support@start341.com" className="flex justify-center">
              <Button
                data-testid="button-contact-us"
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {/* Home */}
              <Link href="/">
                <div
                  data-testid="link-mobile-home"
                  className="block py-2.5 px-3 text-base font-medium text-foreground hover-elevate rounded-md cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </div>
              </Link>
              
              {/* Verticals */}
              {verticals.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2.5 px-3 text-base font-medium text-foreground hover-elevate rounded-md cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}

              {/* Contact */}
              <a href="mailto:support@start341.com">
                <div
                  data-testid="link-mobile-contact"
                  className="block py-2.5 px-3 text-base font-medium text-primary hover-elevate rounded-md cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
