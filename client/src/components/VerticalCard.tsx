import type { MouseEvent } from "react";
import { AffiliateOffer } from "@shared/schema";

interface VerticalCardProps {
  offer: AffiliateOffer;
}

export default function VerticalCard({ offer }: VerticalCardProps) {
  const handleAffiliateClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (typeof window === "undefined") return;

    if ((window as any).gtag) {
      (window as any).gtag("event", "affiliate_click", {
        event_category: "Affiliate",
        event_label: offer.companyName,
        value: offer.id,
      });
    }

    const popupFeatures = "width=1280,height=720,menubar=no,toolbar=no,location=no,status=no";
    const popupName = `affiliate-${offer.id}-${Date.now()}`;
    const popupWindow = window.open(
      offer.affiliateLink,
      popupName,
      popupFeatures,
    );

    if (popupWindow) {
      popupWindow.opener = null;
      popupWindow.focus();
    } else {
      window.location.href = offer.affiliateLink;
    }
  };

  return (
    <div className="py-3 md:py-4" data-testid={`card-offer-${offer.id}`}>
      {/* Display URL - Breadcrumb style */}
      <div className="flex items-center gap-1 mb-1">
        <span className="text-sm text-green-700 dark:text-green-500" data-testid={`text-url-${offer.id}`}>
          {offer.displayUrl}
        </span>
      </div>

      {/* Title - Google blue link */}
      <a
        href={offer.affiliateLink}
        rel="nofollow noopener noreferrer"
        onClick={handleAffiliateClick}
        className="text-xl text-[#1a0dab] dark:text-[#8ab4f8] hover:underline font-normal leading-tight block mb-1"
        data-testid={`link-offer-${offer.id}`}
      >
        {offer.title}
      </a>

      {/* Description - Gray text */}
      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-description-${offer.id}`}>
        {offer.description}
      </p>
    </div>
  );
}
