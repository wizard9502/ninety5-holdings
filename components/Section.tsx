import type { ReactNode } from "react";

type SectionProps = {
  index?: string;
  label: string;
  children: ReactNode;
  tinted?: boolean;
  id?: string;
};

/** Two-column editorial section: a mono label rail on the left, content on the right. */
export function Section({ index, label, children, tinted, id }: SectionProps) {
  return (
    <section id={id} className={`border-t border-white/10 ${tinted ? "bg-white/[0.015]" : ""}`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-8 md:grid-cols-12 md:py-28">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-28 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            {index && <span className="text-zinc-600">{index}</span>}
            <span>{label}</span>
          </div>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export function FiveBox({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-white font-bold leading-none text-black ${className}`}
    >
      5
    </span>
  );
}
