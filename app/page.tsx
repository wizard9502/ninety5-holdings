import Link from "next/link";

const entities = [
  {
    name: "Ninety5 Ventures",
    href: "/ventures",
    tagline: "Financial inclusion & technology",
    description:
      "Incubates and scales tech companies that expand access to digital commerce and financial services across West Africa. First project: Bouteek.",
  },
  {
    name: "Ninety5 Capital",
    href: "/capital",
    tagline: "Investment arm",
    description:
      "Deploys capital across public equities and digital assets with a long-term, research-driven approach focused on high-conviction opportunities.",
  },
  {
    name: "Ninety5 Properties",
    href: "/properties",
    tagline: "Real assets",
    description:
      "Invests in and actively manages real estate portfolios, combining acquisition, development, and operations for sustainable long-term value.",
  },
  {
    name: "Ninety5 Foundation",
    href: "/foundation",
    tagline: "Charity arm",
    description:
      "Expands opportunity for young people and families through education, skills, and dignity — so talent is never wasted for lack of a chance.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Holding company · Est. 2025
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-balance leading-[1.1]">
              Building the next generation of{" "}
              <span className="text-zinc-400">African enterprise</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Ninety5 Holdings is the parent platform for technology incubation, capital allocation, real-asset ownership, and community impact. We back operators and ideas that expand opportunity — and we give back through the Foundation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/ventures"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
              >
                Explore Ventures
              </Link>
              <Link
                href="/foundation"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Ninety5 Foundation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Our arms
            </h2>
            <p className="mt-3 text-zinc-400 max-w-xl">
              Four complementary platforms under one holding company — business that builds, and a foundation that shares the upside.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {entities.map((entity) => (
              <Link
                key={entity.name}
                href={entity.href}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/25 hover:bg-white/[0.04]"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
                  {entity.tagline}
                </p>
                <h3 className="text-xl font-semibold text-white group-hover:text-zinc-100 transition-colors">
                  {entity.name}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {entity.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
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
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
              >
                bouteek.shop
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8 min-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                  <span className="text-lg font-bold text-black">5</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Bouteek</p>
                  <p className="text-xs text-zinc-500">Ninety5 Ventures</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white" />
                  Multi-merchant storefronts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white" />
                  Wave & Orange Money native
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white" />
                  Inventory & order management
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white" />
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
