export type Item = { title: string; body: string };

export type Entity = {
  slug: "ventures" | "capital" | "properties" | "foundation";
  index: string;
  name: string;
  short: string;
  tagline: string;
  /** One line for the home page card. */
  summary: string;
  /** Hero sentence on the arm's own page. */
  lead: string;
  mandateLabel: string;
  mandate: string;
  body: [string, string];
  principles: Item[];
  focusLabel: string;
  focusIntro: string;
  focus: Item[];
  /** Render focus as a sequence of steps rather than a set of areas. */
  focusAsSteps?: boolean;
  how: string;
  promise?: string;
  closingNote?: string;
};

export const entities: Entity[] = [
  {
    slug: "ventures",
    index: "01",
    name: "Ninety5 Ventures",
    short: "Ventures",
    tagline: "Technology incubation",
    summary: "Builds and backs technology companies in fintech, education, software, and digital infrastructure.",
    lead: "Technology built for the markets we know — designed around mobile money, patchy connectivity, and the way people actually work.",
    mandateLabel: "Mandate",
    mandate:
      "To build and back technology that expands access, improves how people learn and work, and removes friction from everyday economic life.",
    body: [
      "Too many products in West Africa are imported assumptions: payment flows that ignore mobile money, learning tools that ignore classroom reality, software that assumes always-on connectivity and abundant capital.",
      "We identify high-leverage problems and either build the solution ourselves or partner deeply with founders who will. When the product fits the market, more people can participate — as users, operators, and owners.",
    ],
    principles: [
      { title: "Problem-first", body: "We start from the constraint, not the trend." },
      { title: "Local-first design", body: "Payments, devices, language, and regulation shape the product from day one." },
      { title: "Hands-on incubation", body: "We build alongside founders, or operate projects ourselves when the opportunity is clear." },
      { title: "Path to scale", body: "From single-market fit to multi-market expansion without rewriting the core." },
    ],
    focusLabel: "Focus areas",
    focusIntro: "Four areas where software can unlock access and productivity at scale.",
    focus: [
      { title: "Fintech", body: "Payments, wallets, credit, and tools that widen who can send, receive, save, and transact digitally." },
      { title: "Educational technology", body: "Learning products and skills training for students, teachers, and institutions — built for real classrooms and devices." },
      { title: "Business & sector software", body: "Tools that help operators and institutions run better, from inventory and workflow to logistics and health-adjacent services." },
      { title: "Commerce & infrastructure", body: "Storefronts, order systems, identity, and APIs — the building blocks other products rely on." },
    ],
    how:
      "When we incubate, we stay close to product, distribution, and feedback. When we partner with founders, we prefer deep alignment over passive capital: shared vision, clear ownership, and the discipline to ship what people will use. Breadth of domain never means lack of focus — every company needs a clear problem and healthy unit economics.",
  },
  {
    slug: "capital",
    index: "02",
    name: "Ninety5 Capital",
    short: "Capital",
    tagline: "Investment arm",
    summary: "Invests in public equities and digital assets with a research-driven, long-term approach.",
    lead: "A concentrated, research-led portfolio of listed equities and liquid digital assets — held for years, not traded for weeks.",
    mandateLabel: "Mandate",
    mandate:
      "To grow the group's capital over multi-year horizons through a small number of high-conviction positions, guided by primary research rather than noise.",
    body: [
      "We are not an index fund and not a trading desk. We concentrate where we believe the market misprices lasting advantages, network effects, or structural growth, and we hold while the thesis stays intact.",
      "Every position is a claim on a real outcome: earnings power, adoption, or cash flow. When the case is clear and the risk understood, we are willing to be concentrated. When it is not, we wait.",
    ],
    principles: [
      { title: "Research first", body: "Primary work, scenario analysis, and a written thesis before size." },
      { title: "Asymmetric risk", body: "Setups where the downside is bounded and the upside stays open." },
      { title: "Patience & concentration", body: "Few ideas, multi-year holds, no index hugging." },
      { title: "Process over noise", body: "Decisions come from process, not from the last headline." },
    ],
    focusLabel: "Asset classes",
    focusIntro: "Two asset classes, one standard of discipline.",
    focus: [
      { title: "Public equities", body: "Companies with strong unit economics, pricing power, and long growth runways — owned in size when the research supports it." },
      { title: "Digital assets", body: "Liquid crypto assets and protocols with real usage, credible governance, and sound security — judged on the same fundamentals as equities. Speculation without a framework is not part of the mandate." },
    ],
    how:
      "Every serious idea starts in writing: what must be true, what would falsify it, and how the position behaves under stress. We size only when liquidity allows, and we revisit when the facts change — not when the mood does.",
  },
  {
    slug: "properties",
    index: "03",
    name: "Ninety5 Properties",
    short: "Properties",
    tagline: "Real assets",
    summary: "Acquires and actively manages residential, mixed-use, and select commercial real estate.",
    lead: "Real estate bought carefully and run well — so buildings produce steady income and grow in value.",
    mandateLabel: "Mandate",
    mandate:
      "To own a portfolio of real assets that generates sustainable cash flow and long-term appreciation, through ownership that is active, not passive.",
    body: [
      "Property can deliver both income and inflation resilience when it is bought well and run well. Too often value is left on the table: under-managed buildings, deferred maintenance, weak tenant experience, or acquisitions priced for hope rather than cash flow.",
      "We look for residential, mixed-use, and select commercial opportunities where better operations, repositioning, or a patient hold can produce attractive risk-adjusted returns.",
    ],
    principles: [
      { title: "Cash-flow first", body: "Underwrite to sustainable net operating income, not speculative appreciation." },
      { title: "Active ownership", body: "Value is created after the purchase, through better operations." },
      { title: "Location quality", body: "Markets with structural demand and limited new supply." },
      { title: "Patient capital", body: "Multi-year holds when the asset and the market justify it." },
    ],
    focusLabel: "Asset lifecycle",
    focusIntro: "How an asset moves through our hands.",
    focusAsSteps: true,
    focus: [
      { title: "Acquire", body: "Targeted purchases of under-managed or mispriced assets in defensible locations." },
      { title: "Operate", body: "Tenant relations, maintenance, and cost control that stabilize occupancy and income." },
      { title: "Reposition", body: "Selective renovation, conversion, or light development — only where the return is clear." },
      { title: "Hold or recycle", body: "Keep improving while the asset performs; refinance or sell when capital is better used elsewhere." },
    ],
    how:
      "We prefer situations where the improvement is within our control rather than dependent on a rising market. Progress is measured in occupancy, net operating income, and the quality of the income stream.",
  },
  {
    slug: "foundation",
    index: "04",
    name: "Ninety5 Foundation",
    short: "Foundation",
    tagline: "Charity arm",
    summary: "Supports education, skills, and family resilience across West Africa.",
    lead: "Every child deserves a fair start, every parent a path to provide. The Foundation is how Ninety5 gives back — quietly, consistently, and close to home.",
    mandateLabel: "Mission",
    mandate:
      "To expand opportunity for young people and families across West Africa — so talent is never wasted for lack of a chance.",
    body: [
      "Prosperity is incomplete if it does not reach the people who make our markets possible. We are rooted in Dakar: we know the pressure of school fees at the start of term and the quiet pride of a first paycheck.",
      "We do not chase headlines. We fund what works — fees that keep a student in class, apprenticeships that turn curiosity into a trade, small grants that help a parent grow a livelihood. When one family stabilizes, the circle around them rises.",
    ],
    principles: [
      { title: "Dignity first", body: "People are partners, not beneficiaries to be pitied." },
      { title: "Proximity", body: "We fund close to the ground, where we can see impact and course-correct." },
      { title: "Quiet consistency", body: "Multi-year commitments over one-off gestures." },
    ],
    focusLabel: "Focus areas",
    focusIntro: "Where a modest investment can change the trajectory of a life.",
    focus: [
      { title: "School continuity", body: "Scholarships, fees, and materials so children stay in school through the moments that push them out." },
      { title: "Youth skills & first jobs", body: "Apprenticeships, vocational training, and pathways into paid work." },
      { title: "Family resilience", body: "Help for caregivers and small livelihoods, so one setback doesn't cascade." },
      { title: "Community anchors", body: "Libraries, safe spaces, and mentors that make neighborhoods places where children can grow." },
      { title: "Health basics", body: "Partnerships so families aren't forced to choose between health and opportunity." },
      { title: "Crisis response", body: "When flooding, illness, or sudden loss hits, we respond with speed and respect." },
    ],
    how:
      "The Foundation is funded by Ninety5 Holdings and, over time, by partners who believe capital should serve people as well as markets. We measure what matters — children still in school at year's end, youth placed in work, families who report stability — and we publish what we learn, including what didn't work.",
    promise:
      "We will treat every person we serve with the same respect we would want for our own family. No spectacle. No pity. Just a fairer shot at the life they are already working so hard to build.",
    closingNote:
      "If you share this vision — as a partner, a community organization, or an individual — we would be glad to hear from you.",
  },
];

export function getEntity(slug: Entity["slug"]): Entity {
  const e = entities.find((x) => x.slug === slug);
  if (!e) throw new Error(`Unknown entity: ${slug}`);
  return e;
}
