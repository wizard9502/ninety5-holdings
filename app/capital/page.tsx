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
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 mb-8">← Back to Holdings</Link>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">Investment Arm</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white flex items-center gap-2 flex-wrap">
            Ninety
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-black text-2xl sm:text-3xl font-bold">5</span>
            <span className="ml-1">Capital</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We allocate capital across public equities and digital assets with a long-term, research-driven approach — seeking asymmetric upside while respecting downside.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Our mandate</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            To compound capital over multi-year horizons through high-conviction positions in listed equities and liquid digital assets — guided by primary research, not noise.
          </p>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            Ninety5 Capital is the dedicated investment platform of the holding company. We are not an index fund and we are not a trading desk. We concentrate where we believe the market misprices durable advantages, network effects, or structural growth — and we hold with patience when the thesis remains intact. Liquidity, clarity of ownership, and the ability to size positions responsibly matter as much as the idea itself.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-8">Why we exist</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-zinc-400 leading-relaxed">
                Capital markets reward those who can separate signal from narrative. Short-term price moves create opportunities; long-term value is created by businesses and networks that compound. We exist to deploy the group's balance sheet with discipline — so that returns from public markets and digital assets reinforce the broader Ninety5 platform rather than distract from it.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We treat every position as a claim on a real outcome: earnings power, adoption, or cash flow. When the thesis is clear and the risk is understood, we are willing to be concentrated. When it is not, we wait.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">What we stand for</p>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Research first</strong> — primary work, scenario analysis, and a written thesis before size.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Asymmetric risk</strong> — seek setups where downside is bounded and upside remains open.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Patience & concentration</strong> — few ideas, multi-year holds, no index hugging.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Process over noise</strong> — decisions from process, not from the last headline.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-3">Focus areas</h2>
          <p className="text-zinc-400 max-w-2xl mb-10">We concentrate where research edge and time horizon can matter most.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Public equities", body: "Concentrated positions in companies with strong unit economics, pricing power, and multi-year growth runways." },
              { title: "Digital assets", body: "Selective exposure to liquid crypto assets and protocols with real usage, network effects, and credible governance." },
              { title: "High-conviction sizing", body: "Fewer, better ideas — sized for impact when confidence is high and risk is understood." },
              { title: "Fundamental research", body: "Industry structure, competitive dynamics, and cash-flow quality over narrative or technical trading alone." },
              { title: "Risk & liquidity", body: "Position sizing, liquidity, and exit paths treated as first-class inputs, not afterthoughts." },
              { title: "Long-term compounding", body: "Preference for businesses and networks that can reinvest and grow value over years, not quarters." },
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
                Every serious idea starts with research: what must be true, what would falsify the thesis, and how the position behaves under stress. We write it down. We size only when liquidity and risk allow. We review when facts change — not when the calendar does.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Digital assets are approached with the same discipline as equities: usage, security, governance, and liquidity first. Speculation without a framework is not part of the mandate.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Principles in practice</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Thesis before size</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Prefer clarity of ownership and cash flows</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Revisit when the facts change, not the mood</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Protect the downside so the upside can compound</li>
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
              Ninety5 Capital sits alongside Ventures, Properties, and the Foundation. Returns from disciplined allocation strengthen the group's ability to build products, hold real assets, and fund community opportunity — so capital serves both growth and impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
