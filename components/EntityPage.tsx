import Link from "next/link";
import type { ReactNode } from "react";
import { entities, type Entity } from "@/lib/entities";
import { FiveBox, Section } from "./Section";

type Props = {
  entity: Entity;
  /** Extra sections rendered before the "next arm" link. */
  extra?: ReactNode;
};

const principleCols: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const focusCols: Record<number, string> = {
  2: "md:grid-cols-2",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  6: "sm:grid-cols-2 lg:grid-cols-3",
};

export function EntityPage({ entity, extra }: Props) {
  const i = entities.findIndex((e) => e.slug === entity.slug);
  const next = entities[(i + 1) % entities.length];
  const big = entity.focus.length <= 2;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-b" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-6 select-none text-[11rem] font-semibold leading-none tracking-[-0.06em] text-transparent sm:text-[18rem] lg:text-[24rem]"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
        >
          {entity.index}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16">
          <p className="rise flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            <span className="text-zinc-300">{entity.index}</span>
            <span className="text-zinc-700">/</span>
            {entity.tagline}
          </p>

          <h1 className="rise rise-1 mt-12 font-semibold leading-[0.9] tracking-[-0.045em] text-white">
            <span className="flex items-center gap-3 text-5xl sm:text-7xl lg:text-[7.5rem]">
              Ninety
              <FiveBox className="h-[0.9em] w-[0.9em] rounded-[0.2em] text-[0.68em]" />
            </span>
            <span className="mt-2 block text-5xl text-zinc-500 sm:text-7xl lg:text-[7.5rem]">{entity.short}</span>
          </h1>

          <p className="rise rise-2 mt-12 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl text-pretty">
            {entity.lead}
          </p>
        </div>
      </section>

      {/* Mandate */}
      <Section index="A" label={entity.mandateLabel}>
        <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-4xl sm:leading-[1.15] text-balance">
          {entity.mandate}
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {entity.body.map((p, k) => (
            <p key={k} className="leading-relaxed text-zinc-400 text-pretty">{p}</p>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section index="B" label="Principles" tinted>
        <ol className={`grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 ${principleCols[entity.principles.length] ?? "sm:grid-cols-2"}`}>
          {entity.principles.map((p, k) => (
            <li key={p.title} className="bg-black p-7 sm:p-8">
              <span className="font-mono text-xs text-zinc-600">0{k + 1}</span>
              <p className="mt-10 text-lg font-medium text-white">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Focus */}
      <Section index="C" label={entity.focusLabel}>
        <p className="max-w-2xl text-xl leading-snug text-zinc-300 sm:text-2xl text-balance">{entity.focusIntro}</p>

        {entity.focusAsSteps ? (
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {entity.focus.map((f, k) => (
              <li key={f.title} className="relative lg:pr-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 font-mono text-xs text-white">
                    {k + 1}
                  </span>
                  {k < entity.focus.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-white/15 lg:block" />}
                </div>
                <h4 className="mt-6 text-lg font-medium text-white">{f.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </li>
            ))}
          </ol>
        ) : (
          <div className={`mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 ${focusCols[entity.focus.length] ?? "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {entity.focus.map((f, k) => (
              <div key={f.title} className={`group bg-black transition-colors hover:bg-zinc-950 ${big ? "p-8 sm:p-12" : "p-7"}`}>
                <span className="font-mono text-xs text-zinc-600">{String(k + 1).padStart(2, "0")}</span>
                <h4 className={`font-medium text-white ${big ? "mt-16 text-3xl tracking-tight" : "mt-10"}`}>{f.title}</h4>
                <p className={`mt-3 leading-relaxed text-zinc-400 ${big ? "max-w-md" : "text-sm"}`}>{f.body}</p>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* How we work */}
      <Section index="D" label="How we work" tinted>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed text-zinc-300 text-pretty">{entity.how}</p>
            {entity.closingNote && <p className="leading-relaxed text-zinc-400">{entity.closingNote}</p>}
          </div>
          {entity.promise && (
            <blockquote className="lg:col-span-5 rounded-2xl border border-white/10 bg-black p-7 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">A simple promise</p>
              <p className="mt-6 text-lg leading-relaxed text-zinc-100">“{entity.promise}”</p>
            </blockquote>
          )}
        </div>
      </Section>

      {extra}

      {/* Next arm */}
      <Link href={`/${next.slug}`} className="group block border-t border-white/10 transition-colors hover:bg-white hover:text-black">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-4 py-14 sm:px-8 sm:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-600">
              Next — {next.index} · {next.tagline}
            </p>
            <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{next.name}</p>
          </div>
          <span className="text-4xl transition-transform group-hover:translate-x-2 sm:text-6xl">→</span>
        </div>
      </Link>
    </div>
  );
}
