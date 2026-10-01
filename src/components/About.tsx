import {
  Building2,
  CalendarRange,
  CloudHail,
  Handshake,
  House,
  Landmark,
  Rows3,
  ShieldCheck,
  Store,
  TrendingUp,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const STATS = [
  { value: "$3M+", label: "Executed projects" },
  { value: "200+", label: "Residential homes improved" },
] as const;

const PHILOSOPHY = [
  {
    title: "Operational scale",
    body: "Over $3M+ in executed projects and 200+ residential homes improved across Calgary and Alberta.",
  },
  {
    title: "The single-source advantage",
    body: "One trade partner handling roofing, siding, masonry, stucco, and drainage eliminates multi-sub contractor friction, handoff delays, and scheduling finger-pointing.",
  },
  {
    title: "Calgary & Prairie built",
    body: "Deep technical mastery of Alberta Building Codes, freeze-thaw cycles, hail defense, and high-wind moisture barriers.",
  },
] as const;

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Proven Scale",
    body: "200+ completed projects with consistent on-time and on-budget delivery.",
  },
  {
    icon: Landmark,
    title: "Financial Depth",
    body: "Over $3M in completed work—the balance sheet stability to back large production phases.",
  },
  {
    icon: Handshake,
    title: "Single-Source Envelope",
    body: "One dedicated partner for every exterior trade. Tighter schedules and fewer handoffs.",
  },
  {
    icon: CloudHail,
    title: "Calgary Climate Ready",
    body: "Proven envelopes built for Alberta's extreme temperature swings and hail resistance.",
  },
  {
    icon: CalendarRange,
    title: "Volume Builder Ready",
    body: "Phased scheduling and crew depth organized specifically for high-volume production subdivisions.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial & Envelope Capable",
    body: "Systems scale to multi-family townhomes, mid-rises, retail, and light industrial.",
  },
];

const PROJECT_TYPES: { icon: LucideIcon; title: string; detail: string }[] = [
  {
    icon: House,
    title: "Single-Family Residential",
    detail: "Production builds, custom homes",
  },
  {
    icon: Rows3,
    title: "Multi-Family & Townhomes",
    detail: "Row housing, stacked townhomes",
  },
  {
    icon: Building2,
    title: "Apartments & Condominiums",
    detail: "Building envelope systems, balconies",
  },
  {
    icon: Store,
    title: "Commercial & Retail",
    detail: "Tenant improvements, storefronts, cladding",
  },
  {
    icon: Warehouse,
    title: "Industrial & Logistics",
    detail: "Flex industrial, warehouses, metal facades",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-y border-slate-200 bg-surface py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
            The Alpha Difference
          </p>
          <h2
            id="about-heading"
            className="mt-5 text-balance text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl"
          >
            Engineered for Volume Builders &amp; Commercial Developers
          </h2>
          <p className="mt-5 text-pretty text-base text-slate-600 sm:text-lg">
            A builder-first subcontractor model built on showing up, hitting
            critical path schedules, and getting the envelope right the first
            time.
          </p>
        </div>

        {/* Narrative + feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-14 lg:grid-cols-5 lg:gap-14">
          {/* Left: narrative & philosophy */}
          <div className="lg:col-span-2">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col-reverse gap-2 bg-white p-5 sm:p-6"
                >
                  <dt className="text-sm font-medium text-slate-600">{label}</dt>
                  <dd className="border-l-2 border-accent pl-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-8 space-y-7">
              {PHILOSOPHY.map(({ title, body }) => (
                <li key={title} className="border-l-2 border-slate-300 pl-5">
                  <h3 className="text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: why builders partner with us */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-ink">
              Why Builders Partner With Us
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex">
                  <article className="group w-full rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-amber-500/50 hover:shadow-md">
                    <div className="flex size-11 items-center justify-center rounded-md bg-slate-100 text-ink transition-colors group-hover:bg-amber-100 group-hover:text-amber-800">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h4 className="mt-5 text-base font-bold text-ink sm:text-lg">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">{body}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project types */}
        <div className="mt-16 border-t border-slate-200 pt-12 sm:mt-20 sm:pt-14">
          <h3 className="text-2xl font-bold text-ink">Project Types We Serve</h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {PROJECT_TYPES.map(({ icon: Icon, title, detail }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 lg:flex-col lg:gap-3"
              >
                <Icon
                  className="mt-0.5 size-6 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold text-ink sm:text-base">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
