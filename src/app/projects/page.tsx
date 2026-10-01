import type { Metadata } from "next";
import Link from "next/link";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: { absolute: "Project Portfolio | Alpha Builders & Renovation Calgary" },
  description:
    "Browse completed residential building envelopes, roofing, siding, stucco, EIFS, and commercial renovations by Alpha Builders & Renovation across Calgary, Cochrane, Airdrie, and surrounding Alberta.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      {/* Page header */}
      <header className="border-b border-slate-200 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
            Our Work &amp; Track Record
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-extrabold text-ink sm:text-5xl">
            Completed Exterior &amp; Commercial Projects
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
            Browse our portfolio across Calgary, Cochrane, Airdrie, and
            surrounding areas. Filter by trade specialty or search by
            community/scope.
          </p>
        </div>
      </header>

      {/* Search, filters, grid */}
      <section
        aria-label="Project portfolio"
        className="bg-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsExplorer />

          <div className="mt-14 flex flex-col gap-6 rounded-lg bg-ink px-6 py-8 sm:px-10 sm:py-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-balance text-xl font-bold text-white sm:text-2xl">
              Have a project like these in the pipeline?
            </p>
            <Link
              href="/#contact"
              className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-amber-500 md:w-auto"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
