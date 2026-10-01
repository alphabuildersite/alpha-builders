import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED_PROJECTS } from "@/data/projects";

export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
            Our Work
          </p>
          <h2
            id="featured-work-heading"
            className="mt-5 text-balance text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl"
          >
            Featured Work
          </h2>
          <p className="mt-5 text-pretty text-base text-slate-600 sm:text-lg">
            A snapshot of residential communities, custom exterior envelopes,
            and commercial renovations delivered on schedule.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, index) => (
            <li
              key={project.id}
              // Keep three cards on tablet tidy: show the third only from lg up.
              className={index === 2 ? "flex sm:hidden lg:flex" : "flex"}
            >
              <ProjectCard
                project={project}
                action={
                  <Link
                    href="/projects"
                    aria-label={`View details: ${project.title}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-amber-800 hover:underline"
                  >
                    View Details
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                }
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800 sm:w-auto"
          >
            Explore All Projects &amp; Filter by Trade
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
