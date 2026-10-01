"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Search, SearchX, X } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { CATEGORIES, PROJECTS, type Category, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | Category;
const FILTERS: Filter[] = ["All", ...CATEGORIES];

function matchesQuery(project: Project, query: string) {
  if (!query) return true;
  const haystack = [
    project.title,
    project.location,
    project.category,
    String(project.year),
    ...project.trades,
    ...project.scope,
  ]
    .join(" ")
    .toLowerCase();
  // Every word typed must appear somewhere (e.g. "airdrie hardie").
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export default function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const results = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (filter === "All" || p.category === filter) && matchesQuery(p, query.trim())
      ),
    [query, filter]
  );

  const hasActiveFilters = query.trim() !== "" || filter !== "All";

  function resetFilters() {
    setQuery("");
    setFilter("All");
  }

  function openProject(project: Project) {
    setSelected(project);
    setModalOpen(true);
  }

  return (
    <div>
      {/* Search + filters */}
      <div className="space-y-5">
        <div className="relative">
          <label htmlFor="project-search" className="sr-only">
            Search projects by title, community, or trade
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-500"
            aria-hidden="true"
          />
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by community or trade, e.g. Mahogany, Airdrie, Hardie, Stucco, EIFS, Roofing"
            autoComplete="off"
            className="block h-12 w-full rounded-md border border-slate-300 bg-white pl-12 pr-12 text-base text-ink placeholder:text-slate-500 transition-colors hover:border-slate-400 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 hover:text-ink"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((option) => {
              const active = filter === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(option)}
                  className={cn(
                    "h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
                    active
                      ? "border-ink bg-ink text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-ink hover:text-ink"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <p
            role="status"
            aria-live="polite"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-surface px-3.5 py-1.5 text-sm font-semibold text-ink"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-accent"
            />
            {results.length} of {PROJECTS.length} projects
          </p>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {results.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard
                project={project}
                action={
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    aria-haspopup="dialog"
                    aria-label={`View details: ${project.title}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-amber-800 hover:underline"
                  >
                    View Details
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                }
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 flex flex-col items-center rounded-lg border border-dashed border-slate-300 bg-surface px-6 py-16 text-center">
          <SearchX className="size-10 text-slate-500" aria-hidden="true" />
          <p className="mt-4 max-w-md text-base font-medium text-ink">
            No projects found matching your search.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            disabled={!hasActiveFilters}
            className="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Reset filters
          </button>
        </div>
      )}

      <ProjectModal
        project={selected}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
