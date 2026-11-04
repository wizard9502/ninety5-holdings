import type { Metadata } from "next";
import { EntityPage } from "@/components/EntityPage";
import { Section, FiveBox } from "@/components/Section";
import { getEntity } from "@/lib/entities";

export const metadata: Metadata = {
  title: "Ninety5 Ventures | Technology Incubation & Software",
  description:
    "Ninety5 Ventures incubates and scales technology companies across fintech, educational technology, software, and digital infrastructure in West Africa and beyond. First project: Bouteek.",
};

function Portfolio() {
  return (
    <Section index="E" label="Portfolio">
      <p className="text-zinc-500 text-sm">Selected projects</p>
      <a
        href="https://bouteek.shop"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 grid gap-6 rounded-2xl border border-white/10 p-7 transition-colors hover:border-white/30 sm:grid-cols-[auto,1fr,auto] sm:items-start sm:p-10"
      >
        <FiveBox className="h-14 w-14 rounded-xl text-2xl" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-white">Bouteek</h3>
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">
              First incubated project
            </span>
          </div>
          <p className="mt-1 text-sm text-zinc-500">bouteek.shop · Digital commerce</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
            Commerce software for merchants: storefronts, Wave & Orange Money, inventory and orders — built for West African operating conditions. One example of how we approach product in a specific domain; the Ventures mandate spans fintech, edtech, software, and infrastructure more broadly.
          </p>
        </div>
        <span className="text-2xl text-zinc-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">↗</span>
      </a>
    </Section>
  );
}

export default function VenturesPage() {
  return <EntityPage entity={getEntity("ventures")} extra={<Portfolio />} />;
}
