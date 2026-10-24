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
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 mb-8"
          >
            ← Back to Holdings
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-400 mb-3">
            Technology & Financial Inclusion
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Ninety5 Ventures
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We build and back technology companies that expand access to commerce and financial services for the next generation of African entrepreneurs and consumers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Mandate</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ninety5 Ventures operates as the incubation and operating arm of the holding company. We identify high-leverage problems in local markets — payments, inventory, storefronts, logistics, credit — and build or back the teams that solve them with software designed for real operating conditions.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Focus areas include financial inclusion infrastructure, merchant tooling, and platforms that reduce the cost and complexity of running a digital-first business in West Africa.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Approach</h2>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                Hands-on incubation: we build alongside founders or operate projects directly when the opportunity is clear.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                Local-first product design: payments, connectivity, and regulatory realities shape every decision.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                Path to scale: from single-market product-market fit to multi-country expansion.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-2">Portfolio</h2>
          <p className="text-zinc-500 text-sm mb-8">First incubated project</p>

          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="h-14 w-14 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                <svg className="h-7 w-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">Bouteek</h3>
                <p className="mt-1 text-emerald-400 text-sm font-medium">bouteek.shop</p>
                <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
                  A full-stack e-commerce operating system for West African merchants. Bouteek generates professional online storefronts, accepts Wave and Orange Money natively, manages inventory and orders from a single dashboard, and includes lightweight marketing tools — all designed so a merchant can go live without technical expertise.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    Multi-shop
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    Wave / Orange Money
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    Inventory & Orders
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    PWA
                  </span>
                </div>
                <a
                  href="https://bouteek.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors"
                >
                  Visit Bouteek
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
