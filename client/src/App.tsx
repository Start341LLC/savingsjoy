import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <main className="min-h-screen">
          <Router />
        </main>
        <Footer />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
