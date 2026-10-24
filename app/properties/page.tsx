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
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 mb-8"
          >
            ← Back to Holdings
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
            Real Assets
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white flex items-center gap-2">
            Ninety
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-black text-2xl sm:text-3xl font-bold">
              5
            </span>
            <span className="ml-1">Properties</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We invest in and actively manage real estate portfolios, combining disciplined acquisition with hands-on operations to compound value over long horizons.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Mandate</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ninety5 Properties is the real-asset arm of the holding company. We seek residential, mixed-use, and select commercial opportunities where operational improvement, repositioning, or long-term hold can generate attractive risk-adjusted returns.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The focus is active ownership: we do not simply allocate capital — we manage assets to improve occupancy, income quality, and residual value.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Activities</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Acquisition",
                  desc: "Targeted purchases of under-managed or mispriced assets with clear value-add levers.",
                },
                {
                  title: "Operations",
                  desc: "Day-to-day management, tenant relations, maintenance, and expense control to stabilize and grow cash flow.",
                },
                {
                  title: "Development & repositioning",
                  desc: "Selective renovation, conversion, or light development where the risk-reward justifies capital deployment.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-sm text-zinc-400 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-6">Investment philosophy</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Location quality",
                body: "Prefer assets in markets with structural demand drivers and limited new supply.",
              },
              {
                title: "Cash-flow first",
                body: "Underwrite to sustainable net operating income rather than speculative appreciation.",
              },
              {
                title: "Active management",
                body: "Value is created after the purchase through better operations and capital allocation.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 p-5">
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
