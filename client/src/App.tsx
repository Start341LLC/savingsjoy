import { Route, Switch, useLocation } from "wouter";
import { lazy, Suspense, useEffect, useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Home from "@/pages/Home";

const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("@/pages/TermsOfUse"));
const VerticalPage = lazy(() => import("@/pages/VerticalPage"));
const RealEstateArticlePage = lazy(() => import("@/pages/RealEstateArticlePage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  // Track page views when routes change
  useAnalytics();
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      
      {/* Real Estate Article pages */}
      <Route path="/realestate/:slug">
        {(params) => <RealEstateArticlePage slug={params.slug} />}
      </Route>

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
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem("cookieConsent");
    if (storedConsent === "accepted" || storedConsent === "analytics") {
      setAnalyticsAllowed(true);
    }
  }, []);

  // Initialize Google Analytics when app loads
  useEffect(() => {
    if (!analyticsAllowed) return;

    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn("Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID");
      return;
    }

    initGA();
  }, [analyticsAllowed]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main" className="min-h-screen">
          <Suspense fallback={<div className="min-h-screen" />}>
            <Router />
          </Suspense>
        </main>
        <Footer />
        <Toaster />
        <CookieConsentBanner onAnalyticsAllowed={() => setAnalyticsAllowed(true)} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
