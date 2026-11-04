import Link from "next/link";
import type { ReactNode } from "react";
import { entities, type Entity } from "@/lib/entities";
import { FiveBox, Section } from "./Section";

type Props = {
  entity: Entity;
  /** Extra sections rendered before the closing "Part of something larger" block. */
  extra?: ReactNode;
  /** Optional line shown under the closing paragraph. */
  closingNote?: ReactNode;
};

export function EntityPage({ entity, extra, closingNote }: Props) {
  const i = entities.findIndex((e) => e.slug === entity.slug);
  const next = entities[(i + 1) % entities.length];
  const siblings = entities.filter((e) => e.slug !== entity.slug);
  const isQuote = entity.practice.length === 1;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-b" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-6 select-none font-mono text-[11rem] font-medium leading-none text-transparent sm:text-[18rem] lg:text-[24rem]"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
        >
          {entity.index}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16">
          <nav aria-label="Breadcrumb" className="rise flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            <Link href="/" className="hover:text-white">Holdings</Link>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-300">{entity.index} — {entity.short}</span>
          </nav>

          <h1 className="rise rise-1 mt-14 font-semibold leading-[0.9] tracking-[-0.045em] text-white">
            <span className="flex items-center gap-3 text-5xl sm:text-7xl lg:text-[7.5rem]">
              Ninety
              <FiveBox className="h-[0.9em] w-[0.9em] rounded-[0.2em] text-[0.68em]" />
            </span>
            <span className="mt-2 block text-5xl text-zinc-500 sm:text-7xl lg:text-[7.5rem]">{entity.short}</span>
          </h1>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <p className="rise rise-2 md:col-span-7 text-lg leading-relaxed text-zinc-300 sm:text-xl text-pretty">
              {entity.lead}
            </p>
            <dl className="rise rise-3 md:col-span-4 md:col-start-9 divide-y divide-white/10 border-y border-white/10 text-sm">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-zinc-500">Role</dt>
                <dd className="text-right text-zinc-200">{entity.tagline}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-zinc-500">Parent</dt>
                <dd className="text-right text-zinc-200">Ninety5 Holdings</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-zinc-500">Base</dt>
                <dd className="text-right text-zinc-200">Dakar · West Africa</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Mandate */}
      <Section index="A" label={entity.mandateLabel}>
        <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-4xl sm:leading-[1.15] text-balance">
          {entity.mandate}
        </p>
        <p className="mt-10 max-w-3xl leading-relaxed text-zinc-400 text-pretty">{entity.mandateBody}</p>
      </Section>

      {/* Why we exist + principles */}
      <Section index="B" label="Why we exist" tinted>
        <div className="grid gap-8 md:grid-cols-2">
          {entity.why.map((p, k) => (
            <p key={k} className="leading-relaxed text-zinc-400 text-pretty">{p}</p>
          ))}
        </div>

        <h3 className="mt-20 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">What we stand for</h3>
        <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {entity.principles.map((p, k) => (
            <li key={p.title} className="bg-black p-7 sm:p-8">
              <span className="font-mono text-xs text-zinc-600">0{k + 1}</span>
              <p className="mt-6 text-lg font-medium text-white">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Focus areas */}
      <Section index="C" label="Focus areas">
        <p className="max-w-2xl text-xl leading-snug text-zinc-300 sm:text-2xl text-balance">{entity.focusIntro}</p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {entity.focus.map((f, k) => (
            <div key={f.title} className="group bg-black p-7 transition-colors hover:bg-zinc-950">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-600">{String(k + 1).padStart(2, "0")}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 transition-colors group-hover:bg-white" />
              </div>
              <h4 className="mt-10 font-medium text-white">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section index="D" label="How we work" tinted>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {entity.how.map((p, k) => (
              <p key={k} className="leading-relaxed text-zinc-400 text-pretty">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-black p-7 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">{entity.practiceLabel}</p>
              {isQuote ? (
                <blockquote className="mt-6 text-lg leading-relaxed text-zinc-200">“{entity.practice[0]}”</blockquote>
              ) : (
                <ul className="mt-6 divide-y divide-white/10">
                  {entity.practice.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3.5 text-zinc-200 first:pt-0 last:pb-0">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Section>

      {extra}

      {/* Part of something larger */}
      <Section index="—" label="Part of something larger">
        <p className="max-w-3xl text-xl leading-relaxed text-zinc-300 text-pretty">{entity.larger}</p>
        {closingNote && <div className="mt-6 max-w-3xl leading-relaxed text-zinc-400">{closingNote}</div>}
        <div className="mt-12 flex flex-wrap gap-2">
          {siblings.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="inline-flex items-baseline gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white hover:text-white"
            >
              <span className="font-mono text-[10px] text-zinc-600">{s.index}</span>
              {s.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* Next arm */}
      <Link href={`/${next.slug}`} className="group block border-t border-white/10 transition-colors hover:bg-white hover:text-black">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-4 py-14 sm:px-8 sm:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-600">
              Next — {next.index}
            </p>
            <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{next.name}</p>
          </div>
          <span className="text-4xl transition-transform group-hover:translate-x-2 sm:text-6xl">→</span>
        </div>
      </Link>
    </div>
  );
}
