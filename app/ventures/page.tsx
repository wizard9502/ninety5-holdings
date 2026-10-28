import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninety5 Ventures | Technology Incubation & Software",
  description:
    "Ninety5 Ventures incubates and scales technology companies across fintech, educational technology, software, and digital infrastructure in West Africa and beyond. First project: Bouteek.",
};

export default function VenturesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 mb-8">
            ← Back to Holdings
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">Technology Incubation</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white flex items-center gap-2 flex-wrap">
            Ninety
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-black text-2xl sm:text-3xl font-bold">5</span>
            <span className="ml-1">Ventures</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We incubate and scale technology companies across fintech, educational technology, software, and digital infrastructure — products designed for real markets and real constraints.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Our mandate</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            To build and back technology that expands access, improves how people learn and work, and removes friction from everyday economic and social life.
          </p>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            Ninety5 Ventures is the incubation and operating arm of the holding company. We identify high-leverage problems across sectors — payments and financial services, education and skills, software tools for businesses and institutions, and the digital infrastructure that underpins them — and either build the solution ourselves or partner deeply with founders who will. The goal is durable products that work under real constraints: connectivity, cost, language, regulation, and the way people actually behave.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-8">Why we exist</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-zinc-400 leading-relaxed">
                Technology can widen opportunity — or leave it concentrated where tools were never designed to fit. Across West Africa and similar markets, too many products are imported assumptions: payment flows that ignore mobile money, learning platforms that ignore classroom and device reality, software that assumes always-on connectivity and abundant capital.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We exist to close that gap. Whether the domain is fintech, education, productivity software, or infrastructure, we build and back companies that treat local operating conditions as the starting point, not an afterthought. When the product fits the market, more people can participate — as users, operators, and owners of the upside.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">What we stand for</p>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Problem-first</strong> — we start from the constraint, not the trend.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Local-first design</strong> — payments, devices, language, and regulation shape the product from day one.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Hands-on incubation</strong> — we build alongside founders or operate projects when the opportunity is clear.</span></li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" /><span><strong className="text-white">Path to scale</strong> — from single-market fit to multi-market expansion without rewriting the core.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-3">Focus areas</h2>
          <p className="text-zinc-400 max-w-2xl mb-10">We concentrate where technology can unlock access, learning, productivity, or participation at scale.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fintech & financial services", body: "Payments, wallets, credit, and tools that expand who can send, receive, save, and transact in formal digital channels." },
              { title: "Educational technology", body: "Learning platforms, skills training, and tools for students, teachers, and institutions — designed for real classrooms and devices." },
              { title: "Business & productivity software", body: "Software that helps operators, teams, and organizations run better — inventory, operations, collaboration, and workflow." },
              { title: "Digital commerce infrastructure", body: "Storefronts, order systems, and merchant tooling when they remove friction from how people buy and sell." },
              { title: "Digital infrastructure", body: "Building blocks — identity, connectivity-aware systems, APIs, and platforms — that other products and institutions can rely on." },
              { title: "Sector software", body: "Vertical tools for education, health-adjacent services, logistics, and other domains where software can improve outcomes at the edge." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">How we work</h2>
              <p className="text-zinc-400 leading-relaxed">
                We start with the user's or operator's day: what they need to accomplish, what tools they already trust, and what breaks when conditions are imperfect. Products are shaped by those constraints first, then refined for reliability and scale.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                When we incubate, we stay close — product, distribution, and feedback loops. When we partner with founders, we prefer deep alignment over passive capital: shared vision, clear ownership, and the discipline to ship what people will actually use. Domain breadth does not mean lack of focus; each company still has a clear problem and a path to durable unit economics.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Our approach</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Problem-first, not trend-first</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Ship under real market conditions early</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Prefer durable unit economics over vanity growth</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />Design for the next market from the start</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-2">Portfolio</h2>
          <p className="text-zinc-500 text-sm mb-8">Selected projects</p>
          <div className="rounded-2xl border border-white/10 bg-black p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-black">5</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">Bouteek</h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400">First incubated project</span>
                </div>
                <p className="mt-1 text-zinc-400 text-sm font-medium">bouteek.shop · Digital commerce</p>
                <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
                  E-commerce operating system for merchants: storefronts, Wave & Orange Money, inventory and orders — built for West African operating conditions. One example of how we approach product in a specific domain; the Ventures mandate spans fintech, edtech, software, and infrastructure more broadly.
                </p>
                <a href="https://bouteek.shop" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300">
                  bouteek.shop
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Part of something larger</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ninety5 Ventures sits alongside Capital, Properties, and the Foundation. We build and back technology companies. The rest of the group allocates capital, manages real assets, and reinvests in community opportunity — so growth and impact move together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
