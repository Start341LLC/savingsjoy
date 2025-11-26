import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useMemo, useState } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import VerticalPage from "@/pages/VerticalPage";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      
      {/* Vertical pages */}
      <Route path="/realestate">
        {() => <VerticalPage slug="realestate" />}
      </Route>
      <Route path="/insurance">
        {() => <VerticalPage slug="insurance" />}
      </Route>
      <Route path="/taxes">
        {() => <VerticalPage slug="taxes" />}
      </Route>
      <Route path="/creditcards">
        {() => <VerticalPage slug="creditcards" />}
      </Route>
      <Route path="/loans">
        {() => <VerticalPage slug="loans" />}
      </Route>
      <Route path="/mortgage">
        {() => <VerticalPage slug="mortgage" />}
      </Route>
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  type ConsentPreferences = { necessary: true; analytics: boolean; marketing: boolean; decisionTimestamp: string };

  const [consentPreferences, setConsentPreferences] = useState<ConsentPreferences | null>(null);
  const [showConsentBanner, setShowConsentBanner] = useState(false);

  const consentStorageKey = useMemo(() => "sj-cookie-consent", []);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(consentStorageKey);
    if (!storedConsent) {
      setShowConsentBanner(true);
      return;
    }

    try {
      // Support legacy string values
      if (storedConsent === "accepted") {
        setConsentPreferences({
          necessary: true,
          analytics: true,
          marketing: true,
          decisionTimestamp: new Date().toISOString(),
        });
        setShowConsentBanner(false);
        return;
      }

      if (storedConsent === "declined") {
        setConsentPreferences({
          necessary: true,
          analytics: false,
          marketing: false,
          decisionTimestamp: new Date().toISOString(),
        });
        setShowConsentBanner(false);
        return;
      }

      const parsed = JSON.parse(storedConsent);
      if (parsed && typeof parsed === "object" && "analytics" in parsed && "marketing" in parsed) {
        setConsentPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
          decisionTimestamp: parsed.decisionTimestamp ?? new Date().toISOString(),
        });
        setShowConsentBanner(false);
        return;
      }
    } catch (error) {
      console.error("Unable to read cookie consent preferences", error);
    }

    setShowConsentBanner(true);
  }, []);

  // Initialize Google Analytics when app loads
  useEffect(() => {
    if (!consentPreferences?.analytics) return;

    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn("Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID");
      return;
    }

    initGA();
  }, [consentPreferences]);

  const persistPreferences = (preferences: { analytics: boolean; marketing: boolean }) => {
    const payload: ConsentPreferences = {
      ...preferences,
      necessary: true,
      decisionTimestamp: new Date().toISOString(),
    };
    window.localStorage.setItem(consentStorageKey, JSON.stringify(payload));
    setConsentPreferences(payload);
    setShowConsentBanner(false);
  };

  const handleAcceptAll = () => {
    persistPreferences({ analytics: true, marketing: true });
  };

  const handleSavePreferences = (preferences: { analytics: boolean; marketing: boolean }) => {
    persistPreferences(preferences);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <main className="min-h-screen">
          <Router />
        </main>
        <Footer />
        <Toaster />
        {showConsentBanner && (
          <CookieConsentBanner
            onAcceptAll={handleAcceptAll}
            onSavePreferences={handleSavePreferences}
            initialPreferences={
              consentPreferences
                ? { analytics: consentPreferences.analytics, marketing: consentPreferences.marketing }
                : undefined
            }
          />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
