import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RefundPolicy() {
  return (
    <div className="bg-[#080808]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="text-[#FB5005] text-xs font-mono tracking-widest uppercase">Legal</span>
          <h1 className="font-heading font-normal text-[#E7E6E6] text-4xl lg:text-5xl mt-4 mb-3 leading-tight">
            Refund Policy
          </h1>
          <p className="text-[#E7E6E6]/30 font-body text-sm mb-16">Last updated: May 2026</p>

          <div className="space-y-12 text-[#E7E6E6]/60 font-body text-sm leading-relaxed">

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">Our approach</h2>
              <p>We stand behind the quality of every agent we provision. If something isn't working as expected, we want to fix it — not just close the ticket. This policy sets out when refunds apply, but our first step is always to make it right.</p>
            </section>

            <div className="grid sm:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden my-8">
              {[
                { label: 'Setup Fee', value: 'Refundable within 7 days', note: 'if agent not yet provisioned' },
                { label: 'Monthly Plan', value: '14-day guarantee', note: 'full refund, no questions asked' },
                { label: 'Annual Plan', value: 'Prorated up to 30 days', note: 'minus months used' },
              ].map((item, i) => (
                <div key={i} className="bg-[#0F0F0E] p-6">
                  <p className="font-mono text-[10px] text-[#FB5005]/60 tracking-widest uppercase mb-2">{item.label}</p>
                  <p className="font-heading font-semibold text-[#E7E6E6]/90 text-sm mb-1">{item.value}</p>
                  <p className="text-[#E7E6E6]/30 text-xs">{item.note}</p>
                </div>
              ))}
            </div>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">Setup fees</h2>
              <p className="mb-4">A one-time setup fee is charged at the time you activate a plan. This fee covers agent provisioning, Raven onboarding, and initial integration configuration.</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li>If you request a refund within 7 days of payment and your agent has not yet been provisioned, the setup fee will be refunded in full.</li>
                <li>If provisioning has begun or completed, the setup fee is non-refundable — the work has been performed.</li>
                <li>Founder pricing offers a reduced setup fee ($99 vs. $149). This reduced fee is still subject to the same conditions above.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">Monthly subscriptions</h2>
              <p className="mb-4">We offer a 14-day money-back guarantee on all monthly plans. If you're not satisfied within the first 14 days of your subscription, contact us and we'll issue a full refund of the monthly charge — no questions asked.</p>
              <p>After 14 days, monthly subscriptions are non-refundable. You may cancel at any time and retain access until the end of your billing period.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">Annual subscriptions</h2>
              <p className="mb-4">Annual plans are eligible for a prorated refund within the first 30 days. The refund amount is calculated as: amount paid minus the monthly rate for any completed months of service.</p>
              <p>After 30 days, annual plans are non-refundable. We recommend starting on a monthly plan if you're unsure about an annual commitment.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">Additional agents</h2>
              <p>Additional agents billed at $29/mo are subject to the same 14-day guarantee as the base plan. If added mid-cycle, the guarantee window starts from the date the additional agent was activated.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">Service failures</h2>
              <p>If ArcLink experiences a service failure that results in significant agent downtime (more than 24 consecutive hours), affected customers will receive a prorated credit applied to their next billing cycle. This applies automatically — you do not need to request it. Credits are not transferable and have no cash value.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">Exceptions</h2>
              <p className="mb-4">Refunds will not be issued in cases of:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li>Account suspension due to violations of the Terms of Service</li>
                <li>Disruptions caused by third-party platform changes (API changes, access revocations)</li>
                <li>Failure to configure integrations correctly on your end</li>
                <li>Requests made outside the applicable refund windows above</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-[#E7E6E6]/90 text-lg mb-4">How to request a refund</h2>
              <p className="mb-4">Email us at <span className="text-[#FB5005]">support@arclink.online</span> with:</p>
              <ul className="space-y-2 pl-4 border-l border-white/5">
                <li>Your account email</li>
                <li>The charge date and amount</li>
                <li>A brief description of the issue</li>
              </ul>
              <p className="mt-4">We aim to respond within 1 business day. Approved refunds are processed within 5–10 business days depending on your payment provider.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
