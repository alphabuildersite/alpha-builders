import Link from "next/link";
import {
  ArrowRight,
  Building,
  Building2,
  Droplets,
  House,
  Layers,
  Mountain,
  PanelsTopLeft,
  Waves,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  scope: string[];
};

const SERVICES: Service[] = [
  {
    title: "Roofing & Shingles",
    icon: House,
    description: "Durable roof systems for new builds and re-roofs.",
    scope: [
      "Architectural shingles",
      "Flat roofing & asphalt",
      "Ice & water shield",
      "Hail damage restoration",
    ],
  },
  {
    title: "Hardie Board & Siding",
    icon: PanelsTopLeft,
    description: "James Hardie certified installation across every cladding type.",
    scope: [
      "Lap siding, panels & trim",
      "Soffit & fascia details",
      "Vinyl & composite",
      "Engineered wood",
    ],
  },
  {
    title: "Stone Veneer",
    icon: Mountain,
    description: "Natural and manufactured stone for lasting curb appeal.",
    scope: [
      "Exterior facades",
      "Structural columns",
      "Architectural accents",
    ],
  },
  {
    title: "EIFS & Stucco",
    icon: Layers,
    description: "Insulated and traditional wall finishes, applied to spec.",
    scope: [
      "Exterior Insulation & Finish Systems (EIFS)",
      "Acrylic stucco",
      "Cementitious stucco",
    ],
  },
  {
    title: "Eavestroughing & Fascia",
    icon: Droplets,
    description: "Complete drainage systems that protect the envelope.",
    scope: [
      "Seamless eavestroughs",
      "Heavy-gauge downspouts",
      "Fascia",
      "Full drainage systems",
    ],
  },
  {
    title: "Commercial Renovations & Tenant Improvements",
    icon: Building2,
    description: "Buildouts and modernizations for business owners and landlords.",
    scope: [
      "Office & retail",
      "Warehouse",
      "Business buildouts",
      "Modernizations",
    ],
  },
  {
    title: "Multi-Family & Condo Envelope Repairs",
    icon: Building,
    description: "Exterior maintenance and repairs for multi-unit properties.",
    scope: [
      "Common areas",
      "Exterior maintenance",
      "Deficiency punch-lists",
      "Multi-unit repairs",
    ],
  },
  {
    title: "Flashing, Waterproofing & Concrete",
    icon: Waves,
    description: "Complete building envelope protection against moisture.",
    scope: [
      "Moisture barriers",
      "Custom flashing",
      "Waterproofing",
      "Concrete work",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
            Core Capabilities
          </p>
          <h2
            id="services-heading"
            className="mt-5 text-balance text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl"
          >
            Comprehensive Exterior Envelopes &amp; Construction Services
          </h2>
          <p className="mt-5 text-pretty text-base text-slate-600 sm:text-lg">
            From production residential subdivisions to commercial tenant
            improvements, we deliver turnkey exterior and interior solutions
            across Calgary and Alberta.
          </p>
        </div>

        {/* Services grid */}
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {SERVICES.map(({ title, icon: Icon, description, scope }) => (
            <li key={title} className="flex">
              <article className="group flex w-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-amber-500/50 hover:shadow-md sm:p-8">
                <div className="flex size-12 items-center justify-center rounded-md bg-slate-100 text-ink transition-colors group-hover:bg-amber-100 group-hover:text-amber-800">
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  {description}
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700 sm:grid-cols-2">
                  {scope.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  aria-label={`Inquire about this trade: ${title}`}
                  className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-amber-800 hover:underline"
                >
                  Inquire about this trade
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {/* RFP callout */}
        <div className="mt-12 flex flex-col gap-6 rounded-lg bg-ink px-6 py-8 sm:mt-14 sm:px-10 sm:py-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-balance text-xl font-bold text-white sm:text-2xl">
            Need a trade partner for an upcoming RFP or tender package?
          </p>
          <Link
            href="/#contact"
            className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-amber-500 md:w-auto"
          >
            Send Project Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
