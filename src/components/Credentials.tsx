import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  FileText,
  HardHat,
  MessageSquareMore,
  PackageCheck,
  PencilRuler,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const COMPLIANCE: {
  icon: LucideIcon;
  title: string;
  detail: string;
  tag: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "$5M Commercial General Liability",
    detail:
      "Minimum $5,000,000 CGL coverage. Project-specific insurance certificates issued immediately upon award.",
    tag: "Active Policy",
  },
  {
    icon: BadgeCheck,
    title: "WCB Alberta Clearance",
    detail:
      "Full active Workers' Compensation Board clearance letters provided per project and billing cycle.",
    tag: "Good Standing",
  },
  {
    icon: FileCheck2,
    title: "City of Calgary Licensed & AB Registered",
    detail:
      "Registered Alberta Corporation in good standing with valid City of Calgary municipal trade licensing.",
    tag: "Municipal & Provincial",
  },
  {
    icon: HardHat,
    title: "Manufacturer Certified & HSE Program",
    detail:
      "James Hardie, EIFS, and system-certified installers operating under an active HSE safety program aligned with Alberta OHS standards.",
    tag: "OHS Aligned",
  },
];

const DOCUMENTS: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: "Submittals" },
  { icon: MessageSquareMore, label: "RFIs" },
  { icon: PackageCheck, label: "Closeout turnover packages" },
  { icon: PencilRuler, label: "Shop drawings" },
  { icon: ClipboardCheck, label: "Safety tailgate logs" },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
            Risk Mitigation &amp; Standards
          </p>
          <h2
            id="credentials-heading"
            className="mt-5 text-balance text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl"
          >
            Fully Licensed, Insured &amp; Builder Compliant
          </h2>
          <p className="mt-5 text-pretty text-base text-slate-600 sm:text-lg">
            Alpha Builders &amp; Renovation maintains full compliance, active
            safety certifications, and robust coverage to qualify immediately
            for high-volume commercial and residential builder pipelines.
          </p>
        </div>

        {/* Compliance cards */}
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {COMPLIANCE.map(({ icon: Icon, title, detail, tag }) => (
            <li key={title} className="flex">
              <article className="group flex w-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-amber-500/50 hover:shadow-md sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-md bg-slate-100 text-ink transition-colors group-hover:bg-amber-100 group-hover:text-amber-800">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-emerald-600"
                    />
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  {detail}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {/* Documentation + prequal panel */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-lg border border-slate-200 sm:mt-14 lg:grid-cols-5">
          {/* Left: documentation */}
          <div className="bg-surface p-6 sm:p-10 lg:col-span-3">
            <h3 className="text-2xl font-bold text-ink">
              Commercial Documentation Ready
            </h3>
            <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              Submittals, RFIs, closeout turnover packages, shop drawings, and
              safety tailgate logs ready for site supers and project managers.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {DOCUMENTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800"
                >
                  <Icon
                    className="size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: action box */}
          <div className="flex flex-col justify-center bg-ink p-6 sm:p-10 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white">
              Pre-Qualification Packages Available
            </h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Request our subcontractor pre-qualification package and have your
              compliance paperwork in hand before bid day.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-amber-500 sm:w-auto sm:self-start"
            >
              Request Prequal Form
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
