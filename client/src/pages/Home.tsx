import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import DomainCard from "@/components/DomainCard";
import LinkButton from "@/components/LinkButton";
import SEO from "@/components/SEO";
import { premiumDomains } from "@/config/domains";
import { verticals } from "@/config/verticals";
import { Building2, Shield, Calculator, CreditCard, Landmark, Home as HomeIcon, TrendingUp } from "lucide-react";

const verticalIcons = {
  realestate: Building2,
  insurance: Shield,
  taxes: Calculator,
  creditcards: CreditCard,
  loans: Landmark,
  mortgage: HomeIcon,
};

export default function Home() {

  return (
    <div className="min-h-screen">
      <SEO 
        title="Smart Domains. Joyful Deals"
        description="Your trusted guide to savings across insurance, real estate, taxes, and more. Powered by premium domain technology."
        keywords={['savings', 'deals', 'insurance', 'real estate', 'taxes', 'premium domains', 'affiliate marketing']}
      />
      {/* Hero Section - Minimal & Clean */}
      <section
        className="relative py-8 md:py-11 flex items-center justify-center"
        style={{ backgroundColor: '#FFF5F8' }}
        data-testid="section-hero"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight mb-2">
            Smart Domains. Joyful Deals.
          </h1>
          <p className="text-base text-muted-foreground">
            Premium domain portfolio driving digital success
          </p>
        </div>
      </section>

      {/* Premium Domains Showcase */}
      <section className="py-8 bg-background" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
              Our Premium Web Properties
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-4">
              Showcasing a selection of our flagship domains. Our complete portfolio includes these and over 100 other valuable web properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {premiumDomains.map((domain, index) => (
              <div key={domain.name}>
                <DomainCard domain={domain} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-6 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-muted-foreground">
            Investing in and developing premium digital real estate. We transform valuable domains into thriving digital enterprises.
          </p>
        </div>
      </section>

      {/* Verticals Overview */}
      <section className="py-8 bg-muted/50" data-testid="section-verticals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
              Start Saving Today
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
              Compare top providers and find the best deals across all categories
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <LinkButton 
                href="/realestate" 
                size="lg" 
                className="px-8 py-4"
                trackLabel="CTA - Find Real Estate Deals"
                data-testid="button-cta-start"
              >
                Find Real Estate Deals
              </LinkButton>
              <LinkButton 
                href="/insurance" 
                size="lg" 
                variant="outline" 
                className="px-8 py-4"
                trackLabel="CTA - Compare Insurance Rates"
                data-testid="button-cta-contact"
              >
                Compare Insurance Rates
              </LinkButton>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verticals.map((vertical, index) => {
              const Icon = verticalIcons[vertical.slug as keyof typeof verticalIcons] || TrendingUp;
              return (
                <Card key={vertical.slug} className="hover-elevate transition-all duration-200 h-full" data-testid={`card-vertical-${vertical.slug}`}>
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <CardTitle className="font-display text-lg">{vertical.title}</CardTitle>
                    <CardDescription className="text-sm leading-snug">
                      {vertical.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LinkButton 
                      href={`/${vertical.slug}`} 
                      variant="outline" 
                      className="w-full px-6 py-3" 
                      trackLabel={`Vertical - ${vertical.title}`}
                      data-testid={`button-vertical-${vertical.slug}`}
                    >
                      Compare & Save
                    </LinkButton>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
