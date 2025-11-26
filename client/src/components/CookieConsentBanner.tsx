import { useState } from "react";
import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface CookieConsentBannerProps {
  onAcceptAll: () => void;
  onSavePreferences: (preferences: { analytics: boolean; marketing: boolean }) => void;
  className?: string;
  initialPreferences?: { analytics: boolean; marketing: boolean };
}

export function CookieConsentBanner({
  onAcceptAll,
  onSavePreferences,
  className,
  initialPreferences,
}: CookieConsentBannerProps) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(initialPreferences?.analytics ?? true);
  const [marketingEnabled, setMarketingEnabled] = useState(initialPreferences?.marketing ?? true);

  const handleSave = () => {
    onSavePreferences({ analytics: analyticsEnabled, marketing: marketingEnabled });
  };

  return (
    <div className={cn("cookie-slide-up fixed inset-x-0 bottom-0 z-50 px-4 pb-4", className)}>
      <div className="mx-auto max-w-3xl rounded-2xl border bg-card/95 p-4 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-card/90">
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="space-y-1 text-left">
              <p className="text-sm font-semibold text-foreground">We value your privacy</p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                We use cookies to provide essential site functionality, understand performance, and personalize
                content. Review our data practices in the {" "}
                <a href="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">
                  Privacy Policy
                </a>{" "}
                and Cookie Notice. Necessary cookies are always on for security, fraud prevention, and legal compliance.
              </p>
            </div>
          </div>

          <div className="grid gap-2 rounded-xl bg-muted/40 p-3 sm:grid-cols-3">
            <ConsentToggle
              title="Necessary"
              description="Required for reliability, authentication, and security."
              checked
              disabled
            />
            <ConsentToggle
              title="Analytics"
              description="Helps us understand traffic and improve the experience."
              checked={analyticsEnabled}
              onCheckedChange={setAnalyticsEnabled}
            />
            <ConsentToggle
              title="Marketing"
              description="Allows personalized content and offers that may interest you."
              checked={marketingEnabled}
              onCheckedChange={setMarketingEnabled}
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
            <Button variant="secondary" onClick={handleSave} className="w-full sm:w-auto text-sm">
              Save preferences
            </Button>
            <Button onClick={onAcceptAll} className="w-full sm:w-auto text-sm">
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsentToggle({
  title,
  description,
  checked,
  onCheckedChange,
  disabled,
}: {
  title: string;
  description: string;
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-2 rounded-lg border bg-background px-3 py-2">
      <div className="space-y-0.5">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} disabled={disabled} aria-label={`${title} cookies`} />
    </div>
  );
}

export default CookieConsentBanner;
