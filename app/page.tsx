import Link from "next/link";

const entities = [
  {
    name: "Ninety5 Ventures",
    href: "/ventures",
    tagline: "Financial inclusion & technology",
    description:
      "Incubates and scales tech companies that expand access to digital commerce and financial services across West Africa. First project: Bouteek.",
    accent: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    name: "Ninety5 Capital",
    href: "/capital",
    tagline: "Investment arm",
    description:
      "Deploys capital across public equities and digital assets with a long-term, research-driven approach focused on high-conviction opportunities.",
    accent: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    name: "Ninety5 Properties",
    href: "/properties",
    tagline: "Real assets",
    description:
      "Invests in and actively manages real estate portfolios, combining acquisition, development, and operations for sustainable long-term value.",
    accent: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20 hover:border-amber-500/40",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Holding company · Est. 2025
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-balance leading-[1.1]">
              Building the next generation of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                African enterprise
              </span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Ninety5 Holdings is the parent platform for technology incubation, capital allocation, and real-asset ownership. We back operators and ideas that expand opportunity across West Africa and beyond.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/ventures"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors"
              >
                Explore Ventures
              </Link>
              <a
                href="https://bouteek.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Visit Bouteek →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Our arms
            </h2>
            <p className="mt-3 text-zinc-400 max-w-xl">
              Three complementary platforms under one holding company, each with a clear mandate and independent operating focus.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {entities.map((entity) => (
              <Link
                key={entity.name}
                href={entity.href}
                className={`group relative rounded-2xl border bg-gradient-to-b ${entity.accent} ${entity.border} p-6 transition-all hover:scale-[1.02]`}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
                  {entity.tagline}
                </p>
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {entity.name}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {entity.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-400 mb-2">
                First incubated project
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Bouteek
              </h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Next-generation e-commerce platform built for West African merchants. One dashboard for online storefronts, Wave & Orange Money payments, inventory, orders, and marketing — designed for real operating conditions on the ground.
              </p>
              <a
                href="https://bouteek.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                bouteek.shop
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8 min-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Bouteek</p>
                  <p className="text-xs text-zinc-500">Ninety5 Ventures</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Multi-merchant storefronts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Wave & Orange Money native
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Inventory & order management
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Built for West Africa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
