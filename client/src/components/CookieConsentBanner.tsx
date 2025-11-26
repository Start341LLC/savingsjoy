import { useEffect, useMemo, useState } from "react";

interface CookieConsentBannerProps {
  onAnalyticsAllowed: () => void;
}

const CONSENT_KEY = "cookieConsent";

function readStoredConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch (error) {
    console.warn("Could not read cookie preference", error);
    return null;
  }
}

function writeStoredConsent(value: string) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch (error) {
    console.warn("Could not save cookie preference", error);
  }
}

export function CookieConsentBanner({ onAnalyticsAllowed }: CookieConsentBannerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  const shouldShowBanner = useMemo(() => {
    const stored = readStoredConsent();
    return !stored;
  }, []);

  useEffect(() => {
    const storedConsent = readStoredConsent();
    if (storedConsent === "accepted" || storedConsent === "analytics") {
      onAnalyticsAllowed();
      setAnalyticsEnabled(true);
      return;
    }

    if (storedConsent === "necessary-only" || storedConsent === "rejected") {
      setAnalyticsEnabled(false);
      return;
    }

    if (shouldShowBanner) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, [onAnalyticsAllowed, shouldShowBanner]);

  const hideBanner = () => {
    setIsVisible(false);
    window.setTimeout(() => setIsMounted(false), 300);
  };

  const handleAcceptAll = () => {
    writeStoredConsent("accepted");
    onAnalyticsAllowed();
    hideBanner();
  };

  const handleRejectAll = () => {
    writeStoredConsent("rejected");
    hideBanner();
  };

  const handleSavePreferences = () => {
    if (analyticsEnabled) {
      writeStoredConsent("analytics");
      onAnalyticsAllowed();
    } else {
      writeStoredConsent("necessary-only");
    }
    hideBanner();
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transform transition-transform duration-300 ease-out bg-[#f8f9fa] border-t-2 border-[#dee2e6] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] font-sans text-sm text-[#333] ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-[280px] flex-1 text-left">
            <p className="m-0 text-[14px] leading-relaxed text-[#333]">
              We use cookies to analyze site traffic and improve your experience.
              <a href="/privacy-policy" className="ml-1 text-[#0066cc] underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowPreferences(true)}
              className="rounded-md bg-[#6c757d] px-4 py-2 text-[14px] font-medium text-white transition hover:opacity-90"
            >
              Manage Preferences
            </button>
            <button
              onClick={handleRejectAll}
              className="rounded-md bg-[#6c757d] px-4 py-2 text-[14px] font-medium text-white transition hover:opacity-90"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="rounded-md bg-[#28a745] px-4 py-2 text-[14px] font-bold text-white transition hover:opacity-90"
            >
              Accept All
            </button>
          </div>
        </div>

        {showPreferences && (
          <div className="mt-6 border-t border-[#dee2e6] pt-5">
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm">
                <div>
                  <strong className="mb-1 block text-[14px] text-[#222]">Necessary</strong>
                  <span className="text-[13px] text-[#666]">Required for site functionality.</span>
                </div>
                <label className="relative inline-block h-6 w-12 cursor-not-allowed">
                  <input type="checkbox" checked disabled className="sr-only" aria-label="Necessary cookies" />
                  <span className="cookie-toggle-slider bg-[#28a745]" aria-hidden />
                </label>
              </div>

              <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm">
                <div>
                  <strong className="mb-1 block text-[14px] text-[#222]">Analytics</strong>
                  <span className="text-[13px] text-[#666]">Helps us understand traffic and improve experience.</span>
                </div>
                <label className="cookie-toggle relative inline-block h-6 w-12">
                  <input
                    type="checkbox"
                    id="analyticsToggle"
                    className="sr-only"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    aria-label="Analytics cookies"
                  />
                  <span className="cookie-toggle-slider" aria-hidden />
                </label>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={handleSavePreferences}
                className="rounded-md bg-[#28a745] px-4 py-2 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CookieConsentBanner;
