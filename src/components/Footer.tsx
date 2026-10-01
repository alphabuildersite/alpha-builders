import Link from "next/link";
import { BadgeCheck, FileCheck2, ShieldCheck, type LucideIcon } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { COMPANY } from "@/lib/company";

const QUICK_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/#contact" },
  { label: "Request Quote", href: "/#contact" },
] as const;

const SERVICES = [
  "Roofing",
  "Hardie Board",
  "Siding",
  "Stucco",
  "Stone Veneer",
  "Commercial",
] as const;

const BADGES: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "$5M Liability" },
  { icon: BadgeCheck, label: "WCB Alberta" },
  { icon: FileCheck2, label: "City of Calgary Licensed" },
];

const headingClasses =
  "text-xs font-semibold uppercase tracking-[0.15em] text-white";
const linkClasses = "transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              aria-label="Alpha Builders and Renovation Inc., Calgary, AB – home"
              className="inline-block rounded-sm"
            >
              <BrandLogo size="lg" tone="dark" />
            </Link>
            <p className="mt-5 max-w-sm text-sm">
              Precision exterior finishing and renovations for Calgary builders,
              developers, and property owners.
            </p>
            <ul
              aria-label="Compliance"
              className="mt-6 flex flex-wrap gap-2"
            >
              {BADGES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  <Icon className="size-4 text-amber-500" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className={headingClasses}>Quick Links</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClasses}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className={headingClasses}>Exterior Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link href="/#services" className={linkClasses}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h2 className={headingClasses}>Contact</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={COMPANY.phoneHref} className={linkClasses}>
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className={`${linkClasses} break-all`}
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                {COMPANY.hours[0].day}: {COMPANY.hours[0].time}
                <br />
                {COMPANY.hours[1].day}: {COMPANY.hours[1].time}
                <br />
                {COMPANY.hours[2].day}: {COMPANY.hours[2].time}
              </li>
              <li>Calgary, AB</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {COMPANY.name} All rights reserved.
          </p>
          <p>Alberta Registered Business</p>
        </div>
      </div>
    </footer>
  );
}
