import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninety5 Ventures | Financial Inclusion & Technology",
  description:
    "Ninety5 Ventures incubates and scales technology companies focused on financial inclusion and digital commerce across West Africa. First project: Bouteek.",
};

export default function VenturesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 mb-8">
            ← Back to Holdings
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">Technology & Financial Inclusion</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white flex items-center gap-2 flex-wrap">
            Ninety
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-black text-2xl sm:text-3xl font-bold">5</span>
            <span className="ml-1">Ventures</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We build and back technology companies that expand access to commerce and financial services — software designed for how business actually works on the ground in West Africa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Our mandate</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            To incubate and scale technology that removes friction from everyday commerce and financial life — so more merchants can sell, more customers can pay, and more value stays in local economies.
          </p>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            Ninety5 Ventures is the operating and incubation arm of the holding company. We do not only write checks. We identify high-leverage problems — payments, storefronts, inventory, logistics, credit — and either build the solution ourselves or partner deeply with founders who will. The goal is durable products that work under real constraints: intermittent connectivity, mobile-money rails, multi-language markets, and operators who need clarity more than complexity.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-8">Why we exist</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-zinc-400 leading-relaxed">
                West African commerce is vibrant and mobile-first, yet many of the tools available to merchants were designed elsewhere — for different payment systems, different trust dynamics, and different cost structures. The result is friction: abandoned checkouts, informal workarounds, and growth that stalls when software does not match the market.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We exist to close that gap. When a boutique in Dakar or a trader in Abidjan can accept Wave and Orange Money as easily as cash, manage stock from a phone, and present a professional storefront without hiring a developer, more people participate in formal digital commerce — and more families capture the upside.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">What we stand for</p>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Local-first design</strong> — payments, language, and operating reality shape the product from day one.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Hands-on incubation</strong> — we build alongside founders or operate projects when the opportunity is clear.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Path to scale</strong> — from single-market fit to multi-country expansion without rewriting the core.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Merchant dignity</strong> — tools that respect the operator's time, capital, and ambition.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-3">Focus areas</h2>
          <p className="text-zinc-400 max-w-2xl mb-10">We concentrate where software can unlock measurable economic participation.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Digital storefronts", body: "Professional online presence for merchants who sell online, offline, or both — without needing a technical team." },
              { title: "Mobile money & payments", body: "Native Wave, Orange Money, and local rails so money moves the way customers already prefer." },
              { title: "Inventory & orders", body: "Real-time stock, multi-shop control, and order flow that matches how small and mid-size operators actually work." },
              { title: "Merchant tooling", body: "Marketing, promotions, and customer touchpoints that are simple enough to use daily and powerful enough to grow." },
              { title: "Financial inclusion infrastructure", body: "Building blocks that expand who can accept, send, and track value in formal digital channels." },
              { title: "Multi-market readiness", body: "Architecture and operations designed so a product that works in one market can responsibly expand to the next." },
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
                We start with the operator's day: what they sell, how they get paid, where stock lives, and what breaks when volume grows. Products are shaped by those constraints first, then refined for reliability and scale.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                When we incubate, we stay close — product, distribution, and feedback loops. When we partner with founders, we prefer deep alignment over passive capital: shared vision, clear ownership, and the discipline to ship what merchants will actually use.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Our approach</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Problem-first, not trend-first</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Ship under real market conditions early</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Prefer durable unit economics over vanity growth</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Design for the next market from the start</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-2">Portfolio</h2>
          <p className="text-zinc-500 text-sm mb-8">First incubated project</p>
          <div className="rounded-2xl border border-white/10 bg-black p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-black">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">Bouteek</h3>
                <p className="mt-1 text-zinc-400 text-sm font-medium">bouteek.shop</p>
                <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
                  A full-stack e-commerce operating system for West African merchants. Bouteek generates professional online storefronts, accepts Wave and Orange Money natively, manages inventory and orders from a single dashboard, and includes lightweight marketing tools — so a merchant can go live without technical expertise and grow without losing control of operations.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Multi-shop", "Wave / Orange Money", "Inventory & Orders", "PWA"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-300">{tag}</span>
                  ))}
                </div>
                <a href="https://bouteek.shop" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors">
                  Visit Bouteek
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Part of something larger</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ninety5 Ventures sits alongside Capital, Properties, and the Foundation. We build the products that expand who can participate in digital commerce. The rest of the group allocates capital, manages real assets, and reinvests in community opportunity — so growth and impact move together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
