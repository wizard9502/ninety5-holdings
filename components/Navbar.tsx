"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { entities } from "@/lib/entities";

const navItems = entities.map((e) => ({ href: `/${e.slug}`, label: e.short, index: e.index }));

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-8">
        <Logo variant="full" />

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-baseline gap-1.5 py-2 text-sm transition-colors ${
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400">{item.index}</span>
                {item.label}
                <span
                  className={`absolute -bottom-[17px] left-0 h-px bg-white transition-all ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Dakar
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden -mr-2 p-2 text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <nav className="flex flex-col px-4 py-2" aria-label="Mobile">
            <Link href="/" className={`flex items-baseline gap-3 border-b border-white/10 py-4 text-lg ${pathname === "/" ? "text-white" : "text-zinc-400"}`}>
              <span className="font-mono text-xs text-zinc-600">00</span>
              Holdings
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-baseline gap-3 border-b border-white/10 py-4 text-lg last:border-0 ${
                  pathname === item.href ? "text-white" : "text-zinc-400"
                }`}
              >
                <span className="font-mono text-xs text-zinc-600">{item.index}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
