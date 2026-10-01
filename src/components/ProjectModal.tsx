"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, MapPin, X } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  /** Last selected project. Kept mounted while closing so the exit animation can play. */
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Sync the native <dialog> with the `open` prop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Lock page scroll behind the modal.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      // Fires for Escape and dialog.close(): keep parent state in sync.
      onClose={onClose}
      // A click on the backdrop targets the <dialog> element itself.
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-lg bg-white p-0 text-ink opacity-0 shadow-2xl transition-all transition-discrete duration-200 translate-y-4 open:translate-y-0 open:opacity-100 starting:open:translate-y-4 starting:open:opacity-0 backdrop:bg-slate-950/60 backdrop:opacity-0 backdrop:backdrop-blur-sm backdrop:transition-all backdrop:transition-discrete backdrop:duration-200 open:backdrop:opacity-100 starting:open:backdrop:opacity-0"
    >
      {project && (
        <div className="flex max-h-[90dvh] flex-col">
          {/* Hero image */}
          <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-slate-100">
            <Image
              src={project.imageUrl}
              alt={`Representative exterior image for ${project.title}`}
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full bg-slate-950/70 text-white backdrop-blur-md transition-colors hover:bg-slate-950"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          {/* Header */}
          <div className="shrink-0 border-b border-slate-200 bg-surface p-6 sm:p-8">
            <span className="inline-flex rounded-full border border-amber-600/30 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              {project.category}
            </span>
            <h2
              id="project-modal-title"
              className="mt-3 text-balance text-2xl font-extrabold text-ink sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4 text-accent" aria-hidden="true" />
                Completed {project.year}
              </span>
            </p>
          </div>

          {/* Body */}
          <div className="min-h-0 flex-1 space-y-8 overflow-y-auto p-6 sm:p-8">
            <section aria-labelledby="project-overview-heading">
              <h3
                id="project-overview-heading"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
              >
                Overview
              </h3>
              <p className="mt-3 text-base text-slate-700">{project.overview}</p>
            </section>

            <section aria-labelledby="project-scope-heading">
              <h3
                id="project-scope-heading"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
              >
                Scope of Work
              </h3>
              <ul className="mt-3 space-y-2.5">
                {project.scopeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-800 sm:text-base"
                  >
                    <Check
                      className="mt-1 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* CTA */}
          <div className="border-t border-slate-200 bg-ink p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
            <p className="hidden text-sm font-medium text-slate-300 sm:block">
              Have a similar scope or tender package?
            </p>
            <Link
              href="/#contact"
              onClick={onClose}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-amber-500 sm:w-auto"
            >
              Inquire About a Similar Project
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </dialog>
  );
}
