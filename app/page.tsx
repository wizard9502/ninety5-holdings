import Link from "next/link";
import { entities } from "@/lib/entities";
import { FiveBox, Section } from "@/components/Section";

const tenets = [
  {
    title: "Long horizons",
    body: "We think in decades, not quarters. Each arm is built to compound — products, positions, and property held with patience when the thesis holds.",
  },
  {
    title: "Operator mindset",
    body: "We build and run things ourselves. Local operating conditions — payments, connectivity, regulation, how people actually behave — are the starting point.",
  },
  {
    title: "Shared upside",
    body: "Business builds the resources; the Foundation makes sure the circle of opportunity grows with us, starting with the communities that raised us.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-b" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-8 sm:pt-24">
          <p className="rise inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Holding company · Est. 2025 · Dakar
          </p>

          <h1 className="rise rise-1 mt-8 max-w-5xl text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-7xl lg:text-[6.5rem] text-balance">
            Building the next generation of <span className="text-zinc-500">African enterprise.</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
            <p className="rise rise-2 md:col-span-6 text-lg leading-relaxed text-zinc-400 text-pretty">
              Ninety5 Holdings is the parent company of four arms — technology incubation, capital allocation, real-asset ownership, and community impact. We back operators and ideas that expand opportunity, and we give back through the Foundation.
            </p>
            <div className="rise rise-3 md:col-span-6 flex flex-wrap gap-3 md:justify-end">
              <Link
                href="#group"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Explore the group
                <span aria-hidden>↓</span>
              </Link>
              <Link
                href="/foundation"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Ninety5 Foundation
              </Link>
            </div>
          </div>

          {/* Directory strip */}
          <div className="rise rise-4 mt-20 grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
            {entities.map((e, k) => (
              <Link
                key={e.slug}
                href={`/${e.slug}`}
                className={`group py-6 pr-4 transition-colors md:py-8 ${k % 2 === 1 ? "pl-4 border-l border-white/10" : ""} ${
                  k >= 2 ? "border-t border-white/10 md:border-t-0" : ""
                } ${k === 2 ? "md:pl-4 md:border-l" : ""}`}
              >
                <span className="font-mono text-[10px] text-zinc-600">{e.index}</span>
                <p className="mt-3 font-medium text-white">{e.short}</p>
                <p className="mt-1 text-sm text-zinc-500 group-hover:text-zinc-300">{e.tagline} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section id="group" className="scroll-mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-32">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              <span className="text-zinc-600">01</span>&nbsp;&nbsp;The group
            </p>
            <h2 className="md:col-span-9 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl text-balance">
              One holding company. Four arms. <span className="text-zinc-500">Business that builds, and a foundation that shares the upside.</span>
            </h2>
          </div>

          {/* Org chart */}
          <div className="mt-20">
            <div className="flex justify-center">
              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-black px-6 py-4">
                <FiveBox className="h-9 w-9 rounded-[9px] text-xl" />
                <div>
                  <p className="font-semibold leading-tight text-white">Ninety5 Holdings</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Parent company</p>
                </div>
              </div>
            </div>

            {/* connectors (desktop) */}
            <div aria-hidden className="relative hidden h-14 lg:block">
              <div className="absolute left-1/2 top-0 h-7 w-px bg-white/20" />
              <div className="absolute left-[12.5%] right-[12.5%] top-7 h-px bg-white/20" />
              {[12.5, 37.5, 62.5, 87.5].map((x) => (
                <div key={x} className="absolute top-7 h-7 w-px bg-white/20" style={{ left: `${x}%` }} />
              ))}
            </div>
            <div aria-hidden className="mx-auto h-10 w-px bg-white/20 lg:hidden" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {entities.map((e) => (
                <Link
                  key={e.slug}
                  href={`/${e.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-600">{e.index}</span>
                    <span className="text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:text-white">→</span>
                  </div>
                  <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{e.tagline}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{e.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{e.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tenets */}
      <Section index="02" label="How we operate" tinted>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {tenets.map((t, k) => (
            <div key={t.title} className="bg-black p-8">
              <span className="font-mono text-xs text-zinc-600">0{k + 1}</span>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight text-white">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio */}
      <Section index="03" label="Portfolio">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="hidden grid-cols-12 gap-4 border-b border-white/10 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:grid">
            <span className="col-span-4">Company</span>
            <span className="col-span-3">Arm</span>
            <span className="col-span-3">Sector</span>
            <span className="col-span-2 text-right">Status</span>
          </div>
          <a
            href="https://bouteek.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-2 gap-4 px-6 py-5 transition-colors hover:bg-white/[0.03] sm:grid-cols-12 sm:items-center"
          >
            <span className="col-span-2 flex items-center gap-3 sm:col-span-4">
              <FiveBox className="h-8 w-8 rounded-lg text-base" />
              <span className="font-medium text-white">Bouteek</span>
              <span className="text-zinc-600 transition-colors group-hover:text-white">↗</span>
            </span>
            <span className="text-sm text-zinc-400 sm:col-span-3">Ventures</span>
            <span className="text-sm text-zinc-400 sm:col-span-3">Digital commerce</span>
            <span className="col-span-2 text-sm text-zinc-300 sm:col-span-2 sm:text-right">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> Live
              </span>
            </span>
          </a>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Our first incubated company — commerce software for West African merchants. Ventures continues to build across fintech, educational technology, software, and digital infrastructure.
        </p>
      </Section>

      {/* Closing statement */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-36">
          <p className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl text-balance">
            Durable companies. Disciplined capital. Real assets. <span className="text-zinc-500">And a promise to give back.</span>
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            {entities.map((e) => (
              <Link
                key={e.slug}
                href={`/${e.slug}`}
                className="inline-flex items-baseline gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                <span className="font-mono text-[10px] opacity-60">{e.index}</span>
                {e.short}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
