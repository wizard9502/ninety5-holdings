import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninety5 Properties | Real Estate Investment & Management",
  description:
    "Ninety5 Properties invests in and actively manages real estate assets, focusing on value creation through acquisition, operations, and selective development.",
};

export default function PropertiesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 mb-8">← Back to Holdings</Link>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">Real Assets</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white flex items-center gap-2 flex-wrap">
            Ninety
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-black text-2xl sm:text-3xl font-bold">5</span>
            <span className="ml-1">Properties</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We invest in and actively manage real estate — combining disciplined acquisition with hands-on operations so assets compound in both income and residual value.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Our mandate</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            To build and manage a portfolio of real assets that generate sustainable cash flow and long-term appreciation — through ownership that is active, not passive.
          </p>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            Ninety5 Properties is the real-asset arm of the holding company. We seek residential, mixed-use, and select commercial opportunities where operational improvement, repositioning, or a patient hold can produce attractive risk-adjusted returns. We do not simply allocate capital into property; we manage assets so occupancy, income quality, and residual value improve over time.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-8">Why we exist</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-zinc-400 leading-relaxed">
                Real estate is one of the few asset classes that can deliver both income and inflation resilience when it is bought well and run well. Too often, value is left on the table: under-managed buildings, deferred maintenance, weak tenant experience, or acquisitions priced for hope rather than cash flow.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We exist to close that gap for the group's balance sheet. Careful underwriting, proximity to the asset, and day-to-day operational discipline turn property from a static holding into a living source of returns — and a durable store of value for the next generation of the business.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">What we stand for</p>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Cash-flow first</strong> — underwrite to sustainable net operating income, not speculative appreciation alone.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Active ownership</strong> — value is created after the purchase through better operations and capital allocation.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Location quality</strong> — prefer markets with structural demand and limited new supply.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Patient capital</strong> — multi-year holds when the asset and the market justify it.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-3">Focus areas</h2>
          <p className="text-zinc-400 max-w-2xl mb-10">We concentrate where operational leverage and long-term demand can work together.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Acquisition", body: "Targeted purchases of under-managed or mispriced assets with clear value-add levers and defensible locations." },
              { title: "Operations", body: "Day-to-day management, tenant relations, maintenance, and expense control to stabilize and grow cash flow." },
              { title: "Repositioning", body: "Selective renovation, conversion, or light development where risk-reward justifies capital deployment." },
              { title: "Residential & mixed-use", body: "Preference for assets tied to housing demand and everyday use — resilient through cycles." },
              { title: "Income quality", body: "Focus on occupancy, lease quality, and sustainable NOI rather than peak-cycle assumptions." },
              { title: "Long-term residual value", body: "Hold and improve assets so the exit or refinance reflects real operational progress, not only market beta." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">How we work</h2>
              <p className="text-zinc-400 leading-relaxed">
                Underwriting starts with the asset and the market: demand drivers, supply pipeline, and the realistic path to higher net income. We prefer situations where operational improvement is within our control — not purely dependent on a rising market.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                After acquisition, the work is operational: tenants, maintenance, costs, and capital projects that pay for themselves. We measure progress in occupancy, NOI, and the quality of the income stream — then decide whether to hold, improve further, or recycle capital into the next opportunity.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Operating discipline</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Buy for cash flow, not only for the story</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Improve what we control after the purchase</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Capex only when the return is clear</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Hold when the asset is still compounding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Part of something larger</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ninety5 Properties sits alongside Ventures, Capital, and the Foundation. Real assets anchor the group's balance sheet; operating income and residual value support long-term ambitions — including the ability to invest in technology and to fund community opportunity through the Foundation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
