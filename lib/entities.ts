export type Principle = { title: string; body: string };
export type FocusArea = { title: string; body: string };

export type Entity = {
  slug: "ventures" | "capital" | "properties" | "foundation";
  index: string;
  name: string;
  short: string;
  tagline: string;
  summary: string;
  lead: string;
  mandateLabel: string;
  mandate: string;
  mandateBody: string;
  why: string[];
  principles: Principle[];
  focusIntro: string;
  focus: FocusArea[];
  how: string[];
  practiceLabel: string;
  practice: string[];
  larger: string;
};

export const entities: Entity[] = [
  {
    slug: "ventures",
    index: "01",
    name: "Ninety5 Ventures",
    short: "Ventures",
    tagline: "Technology incubation",
    summary:
      "Incubates and scales technology companies across fintech, educational technology, software, and digital infrastructure.",
    lead:
      "We incubate and scale technology companies across fintech, educational technology, software, and digital infrastructure — products designed for real markets and real constraints.",
    mandateLabel: "Our mandate",
    mandate:
      "To build and back technology that expands access, improves how people learn and work, and removes friction from everyday economic and social life.",
    mandateBody:
      "Ninety5 Ventures is the incubation and operating arm of the holding company. We identify high-leverage problems across sectors — payments and financial services, education and skills, software tools for businesses and institutions, and the digital infrastructure that underpins them — and either build the solution ourselves or partner deeply with founders who will. The goal is durable products that work under real constraints: connectivity, cost, language, regulation, and the way people actually behave.",
    why: [
      "Technology can widen opportunity — or leave it concentrated where tools were never designed to fit. Across West Africa and similar markets, too many products are imported assumptions: payment flows that ignore mobile money, learning tools that ignore classroom and device reality, software that assumes always-on connectivity and abundant capital.",
      "We exist to close that gap. Whether the domain is fintech, education, productivity software, or infrastructure, we build and back companies that treat local operating conditions as the starting point, not an afterthought. When the product fits the market, more people can participate — as users, operators, and owners of the upside.",
    ],
    principles: [
      { title: "Problem-first", body: "We start from the constraint, not the trend." },
      { title: "Local-first design", body: "Payments, devices, language, and regulation shape the product from day one." },
      { title: "Hands-on incubation", body: "We build alongside founders or operate projects when the opportunity is clear." },
      { title: "Path to scale", body: "From single-market fit to multi-market expansion without rewriting the core." },
    ],
    focusIntro: "We concentrate where technology can unlock access, learning, productivity, or participation at scale.",
    focus: [
      { title: "Fintech & financial services", body: "Payments, wallets, credit, and tools that expand who can send, receive, save, and transact in formal digital channels." },
      { title: "Educational technology", body: "Learning products, skills training, and tools for students, teachers, and institutions — designed for real classrooms and devices." },
      { title: "Business & productivity software", body: "Software that helps operators, teams, and organizations run better — inventory, operations, collaboration, and workflow." },
      { title: "Digital commerce infrastructure", body: "Storefronts, order systems, and merchant tooling when they remove friction from how people buy and sell." },
      { title: "Digital infrastructure", body: "Building blocks — identity, connectivity-aware systems, and APIs — that other products and institutions can rely on." },
      { title: "Sector software", body: "Vertical tools for education, health-adjacent services, logistics, and other domains where software can improve outcomes at the edge." },
    ],
    how: [
      "We start with the user's or operator's day: what they need to accomplish, what tools they already trust, and what breaks when conditions are imperfect. Products are shaped by those constraints first, then refined for reliability and scale.",
      "When we incubate, we stay close — product, distribution, and feedback loops. When we partner with founders, we prefer deep alignment over passive capital: shared vision, clear ownership, and the discipline to ship what people will actually use. Domain breadth does not mean lack of focus; each company still has a clear problem and a path to durable unit economics.",
    ],
    practiceLabel: "Our approach",
    practice: [
      "Problem-first, not trend-first",
      "Ship under real market conditions early",
      "Prefer durable unit economics over vanity growth",
      "Design for the next market from the start",
    ],
    larger:
      "Ninety5 Ventures sits alongside Capital, Properties, and the Foundation. We build and back technology companies. The rest of the group allocates capital, manages real assets, and reinvests in community opportunity — so growth and impact move together.",
  },
  {
    slug: "capital",
    index: "02",
    name: "Ninety5 Capital",
    short: "Capital",
    tagline: "Investment arm",
    summary:
      "Deploys capital across public equities and digital assets with a long-term, research-driven approach focused on high-conviction opportunities.",
    lead:
      "We allocate capital across public equities and digital assets with a long-term, research-driven approach — seeking asymmetric upside while respecting downside.",
    mandateLabel: "Our mandate",
    mandate:
      "To compound capital over multi-year horizons through high-conviction positions in listed equities and liquid digital assets — guided by primary research, not noise.",
    mandateBody:
      "Ninety5 Capital is the dedicated investment arm of the holding company. We are not an index fund and we are not a trading desk. We concentrate where we believe the market misprices durable advantages, network effects, or structural growth — and we hold with patience when the thesis remains intact. Liquidity, clarity of ownership, and the ability to size positions responsibly matter as much as the idea itself.",
    why: [
      "Capital markets reward those who can separate signal from narrative. Short-term price moves create opportunities; long-term value is created by businesses and networks that compound. We exist to deploy the group's balance sheet with discipline — so that returns from public markets and digital assets reinforce the broader Ninety5 group rather than distract from it.",
      "We treat every position as a claim on a real outcome: earnings power, adoption, or cash flow. When the thesis is clear and the risk is understood, we are willing to be concentrated. When it is not, we wait.",
    ],
    principles: [
      { title: "Research first", body: "Primary work, scenario analysis, and a written thesis before size." },
      { title: "Asymmetric risk", body: "Seek setups where downside is bounded and upside remains open." },
      { title: "Patience & concentration", body: "Few ideas, multi-year holds, no index hugging." },
      { title: "Process over noise", body: "Decisions from process, not from the last headline." },
    ],
    focusIntro: "We concentrate where research edge and time horizon can matter most.",
    focus: [
      { title: "Public equities", body: "Concentrated positions in companies with strong unit economics, pricing power, and multi-year growth runways." },
      { title: "Digital assets", body: "Selective exposure to liquid crypto assets and protocols with real usage, network effects, and credible governance." },
      { title: "High-conviction sizing", body: "Fewer, better ideas — sized for impact when confidence is high and risk is understood." },
      { title: "Fundamental research", body: "Industry structure, competitive dynamics, and cash-flow quality over narrative or technical trading alone." },
      { title: "Risk & liquidity", body: "Position sizing, liquidity, and exit paths treated as first-class inputs, not afterthoughts." },
      { title: "Long-term compounding", body: "Preference for businesses and networks that can reinvest and grow value over years, not quarters." },
    ],
    how: [
      "Every serious idea starts with research: what must be true, what would falsify the thesis, and how the position behaves under stress. We write it down. We size only when liquidity and risk allow. We review when facts change — not when the calendar does.",
      "Digital assets are approached with the same discipline as equities: usage, security, governance, and liquidity first. Speculation without a framework is not part of the mandate.",
    ],
    practiceLabel: "Principles in practice",
    practice: [
      "Thesis before size",
      "Prefer clarity of ownership and cash flows",
      "Revisit when the facts change, not the mood",
      "Protect the downside so the upside can compound",
    ],
    larger:
      "Ninety5 Capital sits alongside Ventures, Properties, and the Foundation. Returns from disciplined allocation strengthen the group's ability to build products, hold real assets, and fund community opportunity — so capital serves both growth and impact.",
  },
  {
    slug: "properties",
    index: "03",
    name: "Ninety5 Properties",
    short: "Properties",
    tagline: "Real assets",
    summary:
      "Invests in and actively manages real estate portfolios, combining acquisition, development, and operations for sustainable long-term value.",
    lead:
      "We invest in and actively manage real estate — combining disciplined acquisition with hands-on operations so assets compound in both income and residual value.",
    mandateLabel: "Our mandate",
    mandate:
      "To build and manage a portfolio of real assets that generate sustainable cash flow and long-term appreciation — through ownership that is active, not passive.",
    mandateBody:
      "Ninety5 Properties is the real-asset arm of the holding company. We seek residential, mixed-use, and select commercial opportunities where operational improvement, repositioning, or a patient hold can produce attractive risk-adjusted returns. We do not simply allocate capital into property; we manage assets so occupancy, income quality, and residual value improve over time.",
    why: [
      "Real estate is one of the few asset classes that can deliver both income and inflation resilience when it is bought well and run well. Too often, value is left on the table: under-managed buildings, deferred maintenance, weak tenant experience, or acquisitions priced for hope rather than cash flow.",
      "We exist to close that gap for the group's balance sheet. Careful underwriting, proximity to the asset, and day-to-day operational discipline turn property from a static holding into a living source of returns — and a durable store of value for the next generation of the business.",
    ],
    principles: [
      { title: "Cash-flow first", body: "Underwrite to sustainable net operating income, not speculative appreciation alone." },
      { title: "Active ownership", body: "Value is created after the purchase through better operations and capital allocation." },
      { title: "Location quality", body: "Prefer markets with structural demand and limited new supply." },
      { title: "Patient capital", body: "Multi-year holds when the asset and the market justify it." },
    ],
    focusIntro: "We concentrate where operational leverage and long-term demand can work together.",
    focus: [
      { title: "Acquisition", body: "Targeted purchases of under-managed or mispriced assets with clear value-add levers and defensible locations." },
      { title: "Operations", body: "Day-to-day management, tenant relations, maintenance, and expense control to stabilize and grow cash flow." },
      { title: "Repositioning", body: "Selective renovation, conversion, or light development where risk-reward justifies capital deployment." },
      { title: "Residential & mixed-use", body: "Preference for assets tied to housing demand and everyday use — resilient through cycles." },
      { title: "Income quality", body: "Focus on occupancy, lease quality, and sustainable NOI rather than peak-cycle assumptions." },
      { title: "Long-term residual value", body: "Hold and improve assets so the exit or refinance reflects real operational progress, not only market beta." },
    ],
    how: [
      "Underwriting starts with the asset and the market: demand drivers, supply pipeline, and the realistic path to higher net income. We prefer situations where operational improvement is within our control — not purely dependent on a rising market.",
      "After acquisition, the work is operational: tenants, maintenance, costs, and capital projects that pay for themselves. We measure progress in occupancy, NOI, and the quality of the income stream — then decide whether to hold, improve further, or recycle capital into the next opportunity.",
    ],
    practiceLabel: "Operating discipline",
    practice: [
      "Buy for cash flow, not only for the story",
      "Improve what we control after the purchase",
      "Capex only when the return is clear",
      "Hold when the asset is still compounding",
    ],
    larger:
      "Ninety5 Properties sits alongside Ventures, Capital, and the Foundation. Real assets anchor the group's balance sheet; operating income and residual value support long-term ambitions — including the ability to invest in technology and to fund community opportunity through the Foundation.",
  },
  {
    slug: "foundation",
    index: "04",
    name: "Ninety5 Foundation",
    short: "Foundation",
    tagline: "Charity arm",
    summary:
      "Expands opportunity for young people and families through education, skills, and dignity — so talent is never wasted for lack of a chance.",
    lead:
      "We believe every child deserves a fair start, every parent a path to provide, and every community the tools to shape its own future. The Foundation is how Ninety5 Holdings gives back — quietly, consistently, and close to home.",
    mandateLabel: "Our mission",
    mandate:
      "To expand opportunity for young people and families across West Africa by supporting education, skills, and dignity — so talent is never wasted for lack of a chance.",
    mandateBody:
      "We do not chase headlines. We fund what works: school fees that keep a student in class, apprenticeships that turn curiosity into a trade, small grants that help a mother start or grow a livelihood, and community programs that make neighborhoods safer and more hopeful. When one family stabilizes, the whole circle around them rises.",
    why: [
      "Ninety5 Holdings builds companies and allocates capital. The Foundation exists because prosperity is incomplete if it does not reach the people who make our markets possible — the merchants, the youth, the families who carry the weight of tomorrow.",
      "We are rooted in Dakar and the wider region. We know the names of the neighborhoods, the pressure of school fees at the start of term, and the quiet pride of a first paycheck. Our work is personal because the gap between potential and opportunity is personal.",
    ],
    principles: [
      { title: "Dignity first", body: "Support that respects people as partners, not beneficiaries to be pitied." },
      { title: "Education & skills", body: "The surest path from one generation's struggle to the next generation's choice." },
      { title: "Proximity", body: "We fund close to the ground, where we can see impact and course-correct." },
      { title: "Quiet consistency", body: "Multi-year commitments over one-off gestures." },
    ],
    focusIntro: "We concentrate where a modest investment can change the trajectory of a life.",
    focus: [
      { title: "Learning & school continuity", body: "Scholarships, fees, materials, and support so children stay in school through the pressure points that so often force them out." },
      { title: "Youth skills & first jobs", body: "Apprenticeships, vocational training, and pathways into work — so young people can earn, contribute, and dream beyond survival." },
      { title: "Family resilience", body: "Targeted help for caregivers and small livelihoods that keep households stable when one setback would otherwise cascade." },
      { title: "Community anchors", body: "Support for local initiatives — libraries, safe spaces, mentors — that make neighborhoods places where children can grow." },
      { title: "Health & well-being basics", body: "Where illness or lack of basic care blocks opportunity, we partner so families are not forced to choose between health and hope." },
      { title: "Dignity in crisis", body: "When shocks hit — flooding, illness, sudden loss — we respond with speed and respect so people can stand again." },
    ],
    how: [
      "The Foundation is funded by Ninety5 Holdings and, over time, by partners who share our belief that capital should serve people as well as markets. We prefer long relationships with trusted local organizations and community leaders over large, distant programs.",
      "We measure what matters: children still in school at year's end, youth placed in work or training, families who report stability after support. We publish what we learn — including what did not work — so others can build on it.",
    ],
    practiceLabel: "A simple promise",
    practice: [
      "We will treat every person we serve with the same respect we would want for our own family. No spectacle. No pity. Just a fairer shot at the life they are already working so hard to build.",
    ],
    larger:
      "Ninety5 Foundation sits alongside Ninety5 Ventures, Capital, and Properties. Business builds the resources. The Foundation ensures that as we grow, so does the circle of opportunity around us — starting with the communities that raised us and the next generation that will inherit what we leave behind.",
  },
];

export function getEntity(slug: Entity["slug"]): Entity {
  const e = entities.find((x) => x.slug === slug);
  if (!e) throw new Error(`Unknown entity: ${slug}`);
  return e;
}
