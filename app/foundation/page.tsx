import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninety5 Foundation | Charity Arm of Ninety5 Holdings",
  description:
    "Ninety5 Foundation is the charitable arm of Ninety5 Holdings. We invest in people — education, opportunity, and dignity — so more families across West Africa can build the futures they choose.",
};

export default function FoundationPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 mb-8"
          >
            ← Back to Holdings
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
            Charity Arm
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white flex items-center gap-2 flex-wrap">
            Ninety
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-black text-2xl sm:text-3xl font-bold">
              5
            </span>
            <span className="ml-1">Foundation</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We believe every child deserves a fair start, every parent a path to provide, and every community the tools to shape its own future. The Foundation is how Ninety5 Holdings gives back — quietly, consistently, and close to home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Our mission</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            To expand opportunity for young people and families across West Africa by supporting education, skills, and dignity — so talent is never wasted for lack of a chance.
          </p>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            We do not chase headlines. We fund what works: school fees that keep a student in class, apprenticeships that turn curiosity into a trade, small grants that help a mother start or grow a livelihood, and community programs that make neighborhoods safer and more hopeful. When one family stabilizes, the whole circle around them rises.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-8">Why we exist</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-zinc-400 leading-relaxed">
                Ninety5 Holdings builds companies and allocates capital. The Foundation exists because prosperity is incomplete if it does not reach the people who make our markets possible — the merchants, the youth, the families who carry the weight of tomorrow.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We are rooted in Dakar and the wider region. We know the names of the neighborhoods, the pressure of school fees at the start of term, and the quiet pride of a first paycheck. Our work is personal because the gap between potential and opportunity is personal.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                What we stand for
              </p>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <span>
                    <strong className="text-white">Dignity first</strong> — support that respects people as partners, not beneficiaries to be pitied.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <span>
                    <strong className="text-white">Education & skills</strong> — the surest path from one generation's struggle to the next generation's choice.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <span>
                    <strong className="text-white">Proximity</strong> — we fund close to the ground, where we can see impact and course-correct.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <span>
                    <strong className="text-white">Quiet consistency</strong> — multi-year commitments over one-off gestures.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-xl font-semibold text-white mb-3">Focus areas</h2>
          <p className="text-zinc-400 max-w-2xl mb-10">
            We concentrate where a modest investment can change the trajectory of a life.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Learning & school continuity",
                body: "Scholarships, fees, materials, and support so children stay in school through the pressure points that so often force them out.",
              },
              {
                title: "Youth skills & first jobs",
                body: "Apprenticeships, vocational training, and pathways into work — so young people can earn, contribute, and dream beyond survival.",
              },
              {
                title: "Family resilience",
                body: "Targeted help for caregivers and small livelihoods that keep households stable when one setback would otherwise cascade.",
              },
              {
                title: "Community anchors",
                body: "Support for local initiatives — libraries, safe spaces, mentors — that make neighborhoods places where children can grow.",
              },
              {
                title: "Health & well-being basics",
                body: "Where illness or lack of basic care blocks opportunity, we partner so families are not forced to choose between health and hope.",
              },
              {
                title: "Dignity in crisis",
                body: "When shocks hit — flooding, illness, sudden loss — we respond with speed and respect so people can stand again.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
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
                The Foundation is funded by Ninety5 Holdings and, over time, by partners who share our belief that capital should serve people as well as markets. We prefer long relationships with trusted local organizations and community leaders over large, distant programs.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We measure what matters: children still in school at year's end, youth placed in work or training, families who report stability after support. We publish what we learn — including what did not work — so others can build on it.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                A simple promise
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                We will treat every person we serve with the same respect we would want for our own family. No spectacle. No pity. Just a fairer shot at the life they are already working so hard to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Part of something larger</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ninety5 Foundation sits alongside Ninety5 Ventures, Capital, and Properties. Business builds the resources. The Foundation ensures that as we grow, so does the circle of opportunity around us — starting with the communities that raised us and the next generation that will inherit what we leave behind.
            </p>
            <p className="mt-6 text-zinc-300 leading-relaxed">
              If you share this vision — as a partner, a community organization, or someone who simply believes talent should never be left behind — we would be glad to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
