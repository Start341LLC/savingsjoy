import SEO from "@/components/SEO";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Use"
        description="Review the Terms of Use for SavingsJoy.com to understand your responsibilities and our commitments."
        keywords={["terms", "conditions", "terms of use", "legal", "SavingsJoy"]}
      />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Terms of Use
          </h1>
          <p className="text-muted-foreground text-sm">These Terms govern your use of SavingsJoy.com.</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Use ("Terms") govern your use of the SavingsJoy.com website. The domain
              savingsjoy.com is owned and operated by Start341 LLC ("Start341," "we," or "us"). By
              accessing or using this site, you agree to these Terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">1. Informational Use Only</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content on this site is for informational purposes only. It does not constitute
                legal, tax, financial, insurance, or professional advice. Always consult with a licensed
                professional for personalized advice regarding your specific situation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">
                2. Affiliate Marketing and Lead Generation Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We operate as an affiliate marketing and lead generation platform that connects users with
                third-party service providers across multiple categories including real estate, insurance,
                taxes, credit, loans, and mortgages.
              </p>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Affiliate Relationships:</strong> We earn commissions when you click on affiliate
                  links and complete qualifying actions with our partners. These commissions do not affect
                  the price you pay.
                </p>
                <p>
                  <strong>No Endorsement Guarantee:</strong> We do not endorse or guarantee the services,
                  products, or practices of any third-party provider. You are solely responsible for
                  evaluating and selecting any provider or service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">3. No Professional Relationship</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of this site does not create a professional, advisory, or fiduciary relationship
                between you and SavingsJoy.com or Start341 LLC. We do not provide professional services,
                prepare documents, or represent you in any capacity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">4. Accuracy and Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide accurate and up-to-date content, we do not guarantee that all
                information on the site is complete, current, or error-free. We reserve the right to change
                content, features, or services without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, branding, logos, designs, and code on this site are the property of Start341
                LLC or their respective owners and may not be used, reproduced, or distributed without
                express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                To the fullest extent permitted by law, Start341 LLC and its affiliates shall not be liable
                for any direct, indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Your use of this website</li>
                <li>Services obtained through third-party providers linked from this site</li>
                <li>Any errors, omissions, or inaccuracies in site content</li>
                <li>Any unauthorized access to or use of our servers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">
                7. External Links and Third-Party Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This site contains links to third-party websites and services. We are not responsible for
                the content, privacy practices, terms of service, or actions of any third-party sites. Your
                interactions with third parties are governed by their own terms and policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">8. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You agree to use this site only for lawful purposes. You shall not:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the site in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with the site's functionality, security, or infrastructure</li>
                <li>Engage in any automated data collection (scraping, bots, etc.) without permission</li>
                <li>Transmit malicious code, viruses, or harmful content</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">9. Governing Law and Dispute Resolution</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Governing Law:</strong> These Terms and any disputes arising out of or related to
                  this website or your use of our services shall be governed by and construed in accordance
                  with the laws of the State of New York, without regard to its conflict of law principles.
                  This choice of law does not affect your statutory rights under applicable privacy laws
                  (including GDPR, CCPA, CPRA, and other state/international privacy regulations), which
                  remain in full force and effect.
                </p>
                <p>
                  <strong>Federal Arbitration Act:</strong> This arbitration provision is governed by the
                  Federal Arbitration Act (FAA), 9 U.S.C. §§ 1 et seq., and evidences a transaction involving
                  interstate commerce.
                </p>
                <p>
                  <strong>Pre-Arbitration Notice and Resolution:</strong> Before initiating arbitration, the
                  party with a dispute must first send written notice to the other party describing the
                  nature of the claim and the desired resolution. Notice to Start341 LLC should be sent to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: <a className="text-primary hover:underline" href="mailto:support@savingsjoy.com">support@savingsjoy.com</a></li>
                  <li>Mailing Address: Start341 LLC, Attn: Legal Department, 338 Jericho Turnpike, Suite 244, Syosset, NY 11791</li>
                </ul>
                <p>
                  Both parties agree to attempt to resolve the dispute informally for 30 days after notice is
                  received. If the dispute is not resolved within 30 days, either party may proceed to
                  arbitration.
                </p>
                <p>
                  <strong>Binding Arbitration:</strong> If informal resolution fails, any dispute, controversy,
                  or claim arising out of or relating to these Terms, your use of this website, or the
                  services provided shall be resolved exclusively by binding arbitration.
                </p>
                <p>
                  <strong>Arbitration Rules and Venue:</strong> The arbitration shall be conducted in
                  accordance with the American Arbitration Association (AAA) Consumer Arbitration Rules (not
                  the Commercial Arbitration Rules), available at www.adr.org. The AAA Consumer Arbitration
                  Rules shall govern all consumer disputes.
                </p>
                <p>
                  <strong>Arbitration Venue:</strong> The arbitration hearing shall take place in the county
                  where you reside, or by remote appearance (telephone or video conference), unless both
                  parties mutually agree to a different location. To initiate arbitration, you must file a
                  Demand for Arbitration with the AAA and provide a copy to Start341 LLC at the addresses
                  listed above.
                </p>
                <p>
                  <strong>Arbitration Costs and Fees:</strong> Start341 LLC will pay all AAA filing fees,
                  administrative fees, and arbitrator fees for any arbitration you initiate. These fees will
                  not be shifted to you under any circumstances.
                </p>
                <p>
                  Each party shall bear their own attorneys' fees and litigation costs (excluding AAA
                  administrative and arbitrator fees, which Start341 will always pay), unless applicable law
                  requires fee-shifting of attorneys' fees to the prevailing party.
                </p>
                <p>
                  <strong>Arbitrator's Decision:</strong> The arbitrator's decision shall be final and binding,
                  and judgment may be entered upon it in any court of competent jurisdiction.
                </p>
                <p>
                  You hereby waive any right to a jury trial or to participate in a class action lawsuit with
                  respect to any dispute covered by this arbitration provision.
                </p>
                <p>
                  <strong>Exceptions to Arbitration:</strong> Notwithstanding the above, the following disputes
                  are exempt from mandatory arbitration:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Small Claims Court: Either party may bring an individual action in small claims court if the claim qualifies and remains in that court.</li>
                  <li>Intellectual Property: Either party may seek injunctive or equitable relief in a court of competent jurisdiction in New York to prevent actual or threatened infringement, misappropriation, or violation of intellectual property rights.</li>
                  <li>Statutory Privacy Rights: Nothing in this arbitration provision waives or limits your rights under GDPR, CCPA, CPRA, or other applicable privacy laws, including your right to file complaints with regulatory authorities (e.g., California Attorney General, FTC, or EU data protection authorities).</li>
                </ul>
                <p>
                  <strong>Severability:</strong> If any portion of this arbitration provision is found to be
                  unenforceable or unlawful, that portion shall be severed and the remainder of the provision
                  shall remain in full force and effect. If the class action waiver is found to be
                  unenforceable, the entire arbitration provision shall be void and any claims must be
                  brought in court.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately
                upon posting to this page. Your continued use of the site after any changes constitutes
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">11. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">12. Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                Start341 LLC regarding your use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-foreground mb-3">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">If you have any questions about these Terms, contact:</p>
              <p className="text-muted-foreground leading-relaxed">Start341 LLC</p>
              <p className="text-muted-foreground leading-relaxed">Owner and Operator of SavingsJoy.com</p>
              <p className="text-muted-foreground leading-relaxed">
                Email: <a className="text-primary hover:underline" href="mailto:support@savingsjoy.com">support@savingsjoy.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed">Mailing Address: 338 Jericho Turnpike, Suite 244, Syosset, NY 11791</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
