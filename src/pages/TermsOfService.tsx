import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="bg-[#080808]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="text-[#FB5005] text-xs font-mono tracking-widest uppercase">Legal</span>
          <h1 className="font-heading font-normal text-[#E7E6E6] text-4xl lg:text-5xl mt-4 mb-3 leading-tight">
            Terms of Service
          </h1>
          <p className="text-[#E7E6E6]/30 font-body text-sm mb-16">Last updated: May 2026</p>

          <div className="space-y-12 text-[#E7E6E6]/60 font-body text-sm leading-relaxed">

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">1. Agreement</h2>
              <p>By creating an account or using any part of the ArcLink platform, you agree to these Terms of Service. If you do not agree, do not use the platform. These terms apply to all users, including those on free trials and paid plans.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">2. The service</h2>
              <p className="mb-4">ArcLink provides AI-powered automation agents ("Raven agents") that connect to third-party tools and execute tasks on your behalf. The service includes:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li>Agent provisioning and configuration</li>
                <li>Integration management (Notion, GitHub, webhooks, APIs, etc.)</li>
                <li>Command interfaces via Telegram and Discord</li>
                <li>Task scheduling, memory, and reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">3. Accounts</h2>
              <p>You are responsible for maintaining the security of your account credentials. ArcLink is not liable for losses resulting from unauthorized access caused by your failure to secure credentials. You must be at least 18 years old to create an account. One account per individual or business entity.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">4. Billing and setup fees</h2>
              <p className="mb-4">Subscriptions are billed monthly or annually in advance. A one-time setup fee applies to each plan at the time of account creation — this fee covers agent provisioning, onboarding, and initial configuration. Setup fees are non-refundable except as described in the Refund Policy.</p>
              <p>Prices are listed in USD. We reserve the right to change pricing with 30 days notice to existing subscribers. Annual plans are billed upfront and are non-refundable after 14 days.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">5. Acceptable use</h2>
              <p className="mb-4">You may not use ArcLink to:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li>Send spam, unsolicited messages, or conduct mass outreach without recipient consent</li>
                <li>Scrape, crawl, or extract data from third-party services in violation of their terms</li>
                <li>Engage in any activity that is illegal, fraudulent, or harmful</li>
                <li>Attempt to reverse-engineer, modify, or resell ArcLink infrastructure</li>
                <li>Overload or disrupt the platform or connected third-party services</li>
              </ul>
              <p className="mt-4">Violations may result in immediate suspension without refund.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">6. Third-party integrations</h2>
              <p>When you connect Raven to third-party platforms (Notion, GitHub, Slack, etc.), you are subject to those platforms' terms of service. ArcLink is not responsible for changes to third-party APIs, rate limits, access revocations, or actions taken by those platforms that affect agent functionality.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">7. Availability and uptime</h2>
              <p>We aim for high availability but do not guarantee uninterrupted service. Scheduled maintenance, provider outages, and force majeure events may cause downtime. We will communicate planned maintenance in advance when possible. SLA guarantees are only applicable to the Scale plan where explicitly agreed upon in writing.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">8. Limitation of liability</h2>
              <p>ArcLink is provided "as is." To the maximum extent permitted by law, ArcLink shall not be liable for indirect, incidental, or consequential damages arising from use of the platform, including but not limited to lost revenue, lost data, or business interruption. Our total liability to you for any claim shall not exceed the amount you paid to ArcLink in the 30 days preceding the claim.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">9. Termination</h2>
              <p>You may cancel your subscription at any time from your account dashboard. Access remains active until the end of the current billing period. ArcLink may terminate or suspend your account immediately for violations of these terms. Upon termination, your data will be deleted per the retention schedule in the Privacy Policy.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">10. Governing law</h2>
              <p>These terms are governed by the laws of the applicable jurisdiction in which ArcLink operates. Disputes will be resolved through binding arbitration where permitted by law.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">11. Changes</h2>
              <p>We reserve the right to update these terms. Material changes will be communicated with at least 14 days notice. Continued use after the effective date of changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">12. Contact</h2>
              <p>For questions about these terms, contact us at <span className="text-[#FB5005]">support@arclink.online</span>.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
