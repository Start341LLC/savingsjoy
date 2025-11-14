import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  const effectiveDate = "November 14, 2025";
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy"
        description="Learn how SavingsJoy collects, uses, and protects your personal information."
        keywords={['privacy', 'policy', 'data protection', 'security', 'GDPR']}
      />
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy applies to SavingsJoy.com. The website SavingsJoy is owned and operated by Start341 LLC ("Start341," "we," or "us").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using this site, you agree to the practices described in this Privacy Policy.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect personal information that you voluntarily provide through forms, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Message content and subject</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-3">
                We also collect certain information automatically using cookies and analytics tools, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device and operating system</li>
                <li>Pages visited and time spent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and user experience</li>
                <li>Analyze usage patterns and optimize our content</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage data via Google Analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">3. Affiliate Marketing Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Important: How We Generate Revenue</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                SavingsJoy participates in affiliate marketing programs. When you click on affiliate links to third-party service providers (real estate platforms, insurance companies, tax services, credit card offers, loan providers, or mortgage lenders) and make purchases or sign up for services, we may earn a commission. This does not affect the price you pay.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We only recommend products and services we believe will provide value to our users. Our affiliate relationships help us provide free content and tools to help you save money.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">4. Service Providers (Data Processors)</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We share data with service providers who help operate our website. These companies are data processors, not buyers. They process data on our behalf and are prohibited from using your data for their own purposes:
              </p>
              <div className="ml-4 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Google LLC</strong> - Multiple services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                  <li>Google Analytics: Website analytics to understand usage patterns</li>
                  <li>Data Processing Agreement automatically included</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We may also disclose information to legal authorities when required by law, court order, or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">5. Cookies and Analytics</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">What Are Cookies?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us understand how you use our site and improve your experience.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site through Google Analytics.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Google Analytics</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use Google Analytics to collect information about website usage, including IP addresses, device type, browser information, and pages visited. This helps us improve our services. You can opt out of Google Analytics by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Installing the Google Analytics Opt-Out Browser Add-on</li>
                <li>Using your browser settings to block cookies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">6. International Visitors and Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Our services are intended for users in the United States. If you are visiting from outside the U.S., including the European Union, please note that your data will be transferred to and processed in the United States.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>EU/EEA Data Transfers:</strong> We ensure that all international data transfers comply with GDPR requirements. Our third-party service providers use Standard Contractual Clauses (SCCs) approved by the European Commission to protect your data when it is transferred outside the EU/EEA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">7. Your Rights</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">California Residents (CCPA/CPRA)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Request to know what personal data we have collected about you</li>
                <li>Request deletion of your data</li>
                <li>Opt out of the sale or sharing of your personal data (Note: We do not sell personal data)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise these rights, email <a href="mailto:support@start341.com" className="text-primary hover:underline">support@start341.com</a>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">EU/UK Residents (GDPR)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccuracies</li>
                <li>Request deletion ("right to be forgotten")</li>
                <li>Object to or restrict processing</li>
                <li>Data portability (receive a copy of your data)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-3">
                We process your data under the following legal bases (GDPR Article 6):
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Consent (Article 6(1)(a)):</strong> For contact form submissions and analytics</li>
                <li><strong>Legitimate interest (Article 6(1)(f)):</strong> Website analytics, security monitoring, and service improvements</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">India Residents (DPDP Act)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Know what data is collected</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To request action under any of the above rights, contact: <a href="mailto:support@start341.com" className="text-primary hover:underline">support@start341.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We retain your information according to the following schedule:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Contact form submissions:</strong> 24 months after submission or until you request deletion</li>
                <li><strong>Analytics data:</strong> Up to 26 months (configurable in Google Analytics 4)</li>
                <li><strong>Communication logs:</strong> 3 years after last contact</li>
                <li><strong>Consent records:</strong> Maintained for 7 years to comply with legal requirements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Longer retention may be required by law. In such cases, we will retain data only as long as legally required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">9. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use industry-standard security measures to protect your data, including HTTPS encryption and secure database storage. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our site is not intended for users under the age of 18. We do not knowingly collect data from children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this document.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:support@start341.com" className="text-primary hover:underline">
                  support@start341.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
