import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#080808]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="text-[#FB5005] text-xs font-mono tracking-widest uppercase">Legal</span>
          <h1 className="font-heading font-normal text-[#E7E6E6] text-4xl lg:text-5xl mt-4 mb-3 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-[#E7E6E6]/30 font-body text-sm mb-16">Last updated: May 2026</p>

          <div className="space-y-12 text-[#E7E6E6]/60 font-body text-sm leading-relaxed">

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">1. Who we are</h2>
              <p>ArcLink operates the Raven AI agent platform. When you sign up, connect integrations, or interact with any Raven agent, ArcLink processes information on your behalf. References to "we", "us", or "ArcLink" in this policy refer to the ArcLink platform and its operators.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">2. What we collect</h2>
              <p className="mb-4">We collect information in the following categories:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li><span className="text-[#E7E6E6]/80">Account data</span> — name, email address, and billing information provided during sign-up.</li>
                <li><span className="text-[#E7E6E6]/80">Usage data</span> — agent activity logs, task history, integration events, and command inputs sent through Telegram or Discord.</li>
                <li><span className="text-[#E7E6E6]/80">Integration credentials</span> — OAuth tokens and API keys you provide to connect third-party tools (Notion, GitHub, webhooks, etc.). These are encrypted at rest.</li>
                <li><span className="text-[#E7E6E6]/80">Technical data</span> — IP address, browser type, device identifiers, and access timestamps collected automatically.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">3. How we use your information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li>Provision and operate your agents and integrations</li>
                <li>Deliver the Raven onboarding experience</li>
                <li>Process billing and communicate about your account</li>
                <li>Diagnose errors, improve reliability, and develop new features</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4">We do not sell your data. We do not use your task content to train shared AI models.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">4. Data sharing</h2>
              <p className="mb-4">We share data only as needed to deliver the service:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li><span className="text-[#E7E6E6]/80">Infrastructure providers</span> — cloud hosting, databases, and monitoring services that process data on our behalf under data processing agreements.</li>
                <li><span className="text-[#E7E6E6]/80">Payment processors</span> — billing providers handle payment card data under their own PCI-compliant environments.</li>
                <li><span className="text-[#E7E6E6]/80">Legal requirements</span> — we may disclose data if required by law, subpoena, or to protect the rights and safety of ArcLink and its users.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">5. Data retention</h2>
              <p>We retain account data for the duration of your subscription and for up to 90 days after cancellation. Agent task logs are retained for 30 days by default. You may request earlier deletion at any time by contacting us.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">6. Your rights</h2>
              <p className="mb-4">You may at any time:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li>Request a copy of the data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and associated data</li>
                <li>Revoke third-party integration credentials from your dashboard</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, contact us at <span className="text-[#FB5005]">support@arclink.online</span>.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">7. Security</h2>
              <p>We use encryption in transit (TLS) and at rest for all stored credentials. Access to production systems is restricted, logged, and audited. No system is perfectly secure — if you believe your account has been compromised, contact us immediately.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">8. Changes to this policy</h2>
              <p>We may update this policy from time to time. Material changes will be communicated by email or by a notice in the platform. Continued use after notice constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">9. Contact</h2>
              <p>Questions about this policy can be directed to <span className="text-[#FB5005]">support@arclink.online</span>.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
