import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Check,
  FileCheck2,
  House,
  Phone,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

const SCOPE_BADGES = [
  "Roofing",
  "James Hardie",
  "Stucco",
  "Masonry",
  "Commercial Cladding",
] as const;

const PROOF_POINTS = [
  "200+ Projects Delivered",
  "$3M+ Completed Work",
  "Zero Schedule Delays",
] as const;

const METRICS = [
  { value: "$3M+", label: "Completed Revenue" },
  { value: "200+", label: "Calgary Homes Improved" },
  { value: "Single-Source", label: "One Subcontractor for All Exterior Trades" },
] as const;

const TRUST_ITEMS: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "$5M General Liability Insurance" },
  { icon: BadgeCheck, label: "WCB Alberta Clearance" },
  { icon: FileCheck2, label: "City of Calgary Licensed" },
  { icon: Building2, label: "Alberta Registered Corporation" },
];

const buttonBase =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold transition-colors sm:w-auto";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-white">
      <div className="relative overflow-hidden">
        {/* Ambient glow + framing grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_12%_8%,rgba(217,119,6,0.16),transparent_70%),radial-gradient(55%_60%_at_95%_55%,rgba(15,23,42,0.10),transparent_70%),radial-gradient(40%_40%_at_70%_100%,rgba(217,119,6,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.14)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
            {/* Left: text & value proposition */}
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-amber-600/30 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-800 backdrop-blur-sm">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full rounded-full bg-amber-500 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_10px_3px_rgba(217,119,6,0.55)]" />
                </span>
                Exterior Finishing Subcontractor &bull; Calgary, AB
              </p>

              <h1
                id="hero-heading"
                className="mt-6 max-w-3xl text-balance text-4xl font-extrabold text-ink sm:text-5xl lg:text-6xl"
              >
                Precision Exterior Finishing Built for{" "}
                <span className="text-accent">
                  Calgary Builders &amp; Developers.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-base text-slate-700 sm:text-lg">
                Single-source envelope execution across
                Alberta&mdash;roofing, James Hardie, stucco, masonry, and
                commercial cladding.
              </p>

              <ul
                aria-label="Trades we cover"
                className="mt-5 flex flex-wrap gap-2"
              >
                {SCOPE_BADGES.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm"
                  >
                    <Check
                      className="size-3.5 text-accent"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                    {badge}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#contact"
                  className={cn(
                    buttonBase,
                    "bg-accent text-ink shadow-lg shadow-amber-600/20 hover:bg-accent-hover hover:text-white"
                  )}
                >
                  Request Subcontractor Quote
                </Link>
                <a
                  href="tel:5878396149"
                  className={cn(
                    buttonBase,
                    "border border-slate-300 bg-white/80 text-ink backdrop-blur-sm hover:border-ink hover:bg-white"
                  )}
                >
                  <Phone className="size-4 text-accent" aria-hidden="true" />
                  <span className="sr-only">Call </span>
                  (587) 839-6149
                </a>
              </div>

              {/* Proof snippet */}
              <ul
                aria-label="Proof points"
                className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-slate-800"
              >
                {PROOF_POINTS.map((point, index) => (
                  <li
                    key={point}
                    className="inline-flex items-center gap-3 after:text-slate-400 sm:after:content-['•'] last:after:content-none"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {index === 0 && (
                        <Star
                          className="size-4 fill-amber-500 text-amber-500"
                          aria-hidden="true"
                        />
                      )}
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: layered visual showcase */}
            <div className="relative lg:col-span-5">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-amber-500/25 via-transparent to-slate-900/15 blur-2xl"
              />

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-200 shadow-2xl sm:aspect-[16/10] lg:aspect-[4/5]">
                <Image
                  src={HERO_IMAGE}
                  alt="Modern two-story home exterior with large windows and clean cladding"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent"
                />
              </div>

              {/* Floating card 1: top right */}
              <div className="absolute right-3 top-3 flex max-w-[calc(100%-1.5rem)] items-center gap-2.5 rounded-xl border border-slate-100 bg-white/90 p-3 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md sm:right-4 sm:top-4 lg:-right-4 lg:top-8">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                </span>
                City of Calgary Licensed &amp; $5M Insured
              </div>

              {/* Floating card 2: bottom left */}
              <div className="absolute bottom-3 left-3 flex items-center gap-3 rounded-xl border border-slate-100 bg-white/90 p-3 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 lg:-left-6 lg:bottom-10">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink text-white">
                  <House className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-extrabold leading-tight text-ink">
                    200+ Homes Improved
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-slate-600">
                    Across Calgary &amp; Alberta
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key metrics, anchored beneath the split */}
          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-sm sm:mt-16 md:grid-cols-3">
            {METRICS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col-reverse justify-between gap-3 bg-white p-6 sm:p-8"
              >
                <dt className="text-sm font-medium text-slate-600">{label}</dt>
                <dd className="border-l-2 border-accent pl-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Trust / compliance strip */}
      <div className="border-y border-slate-200 bg-surface">
        <ul
          aria-label="Insurance, licensing, and compliance"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-sm font-medium text-slate-700"
            >
              <Icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
