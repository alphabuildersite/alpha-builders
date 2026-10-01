import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Share2,
  Truck,
  type LucideIcon,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY } from "@/lib/company";

const linkButton =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-slate-50";

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-slate-100 text-ink">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
          {label}
        </dt>
        <dd className="mt-1 text-base text-ink">{children}</dd>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-slate-200 bg-surface py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
            Tender &amp; Inquiries
          </p>
          <h2
            id="contact-heading"
            className="mt-5 text-balance text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl"
          >
            Request a Subcontractor Quote or Pre-Qualification
          </h2>
          <p className="mt-5 text-pretty text-base text-slate-600 sm:text-lg">
            Partner with an exterior finishing specialist prepared to hit your
            schedule. Send us your project drawings, tender invites, or service
            inquiries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 lg:grid-cols-5 lg:gap-12">
          {/* Left: direct operations */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <dl className="divide-y divide-slate-100">
                <InfoRow icon={Phone} label="Phone">
                  <a
                    href={COMPANY.phoneHref}
                    className="font-semibold underline-offset-4 hover:text-amber-800 hover:underline"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </InfoRow>

                <InfoRow icon={Mail} label="Email">
                  <a
                    href={COMPANY.emailHref}
                    className="break-all font-semibold underline-offset-4 hover:text-amber-800 hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                </InfoRow>

                <InfoRow icon={Clock} label="Operating Hours">
                  <ul className="space-y-1 text-sm sm:text-base">
                    {COMPANY.hours.map(({ day, time }) => (
                      <li
                        key={day}
                        className="flex flex-wrap justify-between gap-x-4"
                      >
                        <span className="text-slate-700">{day}</span>
                        <span className="font-medium">{time}</span>
                      </li>
                    ))}
                  </ul>
                </InfoRow>

                <InfoRow icon={Truck} label="Service Area">
                  <span className="text-sm text-slate-700 sm:text-base">
                    {COMPANY.serviceArea}
                  </span>
                </InfoRow>
              </dl>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkButton}
              >
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                Open in Google Maps
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkButton}
              >
                <Share2 className="size-4 text-accent" aria-hidden="true" />
                Facebook
                <ExternalLink
                  className="size-3.5 text-slate-500"
                  aria-hidden="true"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* Right: quote form */}
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
