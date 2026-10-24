import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-black">
                95
              </div>
              <span className="text-base font-semibold text-white">
                Ninety5 Holdings
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Building durable African enterprise across technology, capital markets, and real assets.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Entities</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/ventures" className="hover:text-emerald-400 transition-colors">
                  Ninety5 Ventures
                </Link>
              </li>
              <li>
                <Link href="/capital" className="hover:text-emerald-400 transition-colors">
                  Ninety5 Capital
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-emerald-400 transition-colors">
                  Ninety5 Properties
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Portfolio</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://bouteek.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Bouteek →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Ninety5 Holdings. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Dakar · West Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
