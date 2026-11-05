import Link from "next/link";
import { Logo } from "./Logo";
import { entities } from "@/lib/entities";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="full" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              Holding company for Ninety5 Ventures, Capital, Properties, and Foundation.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">The group</h4>
            <ul className="mt-5 space-y-3">
              {entities.map((e) => (
                <li key={e.slug}>
                  <Link href={`/${e.slug}`} className="group flex items-baseline gap-3 text-sm text-zinc-300 hover:text-white">
                    <span className="font-mono text-[10px] text-zinc-600">{e.index}</span>
                    {e.name}
                    <span className="translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Portfolio</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="https://bouteek.shop" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white">
                  Bouteek ↗
                </a>
              </li>
            </ul>
            <h4 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Base</h4>
            <p className="mt-5 text-sm text-zinc-300">Dakar, Senegal</p>
            <p className="mt-1 font-mono text-xs text-zinc-600">14.69° N · 17.45° W</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Ninety5 Holdings. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">Est. 2025</p>
        </div>
      </div>
    </footer>
  );
}
