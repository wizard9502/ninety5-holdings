import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninety5 Capital | Stocks & Crypto Investments",
  description:
    "Ninety5 Capital is the investment arm of Ninety5 Holdings. We invest in public equities and digital assets with a long-term, research-driven approach.",
};

export default function CapitalPage() {
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
            Investment Arm
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white flex items-center gap-2">
            Ninety
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-black text-2xl sm:text-3xl font-bold">
              5
            </span>
            <span className="ml-1">Capital</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We allocate capital across public markets and digital assets, prioritizing asymmetric upside, durable competitive advantages, and thoughtful risk management.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">What we do</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ninety5 Capital is the dedicated investment platform of the holding company. We invest primarily in listed equities and liquid digital assets, combining fundamental research with a flexible, opportunistic style.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The mandate is long-term capital appreciation with an emphasis on high-conviction positions rather than broad market exposure.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Focus areas</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-medium text-white">Public Equities</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Concentrated positions in companies with strong unit economics, pricing power, and multi-year growth runways.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-medium text-white">Digital Assets</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Selective exposure to liquid crypto assets and protocols that demonstrate real usage, network effects, and credible governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-6">Principles</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Research first",
                body: "Every position starts with primary research, scenario analysis, and a clear thesis on why the market is mispricing the opportunity.",
              },
              {
                title: "Asymmetric risk",
                body: "We seek setups where downside is limited by fundamentals or structure while upside remains open-ended.",
              },
              {
                title: "Patience & concentration",
                body: "Few high-conviction ideas held for multi-year horizons rather than frequent trading or index hugging.",
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
