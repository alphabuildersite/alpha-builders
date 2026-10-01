import type { ReactNode } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Action area rendered at the bottom of the card (button or link). */
  action: ReactNode;
};

export default function ProjectCard({ project, action }: ProjectCardProps) {
  const { title, location, category, year, imageUrl, trades, scope } = project;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:border-amber-500/50 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={imageUrl}
          alt={`Representative exterior image for ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600">
          <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
          {location}
        </p>

        <ul aria-label="Trades" className="mt-4 flex flex-wrap gap-2">
          {trades.map((trade) => (
            <li
              key={trade}
              className="rounded-full border border-amber-600/30 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800"
            >
              {trade}
            </li>
          ))}
        </ul>

        <ul aria-label="Scope of work" className="mt-3 flex flex-wrap gap-2">
          {scope.map((item) => (
            <li
              key={item}
              className="rounded-full border border-slate-200 bg-surface px-3 py-1 text-xs font-medium text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="border-t border-slate-100 pt-5">{action}</div>
        </div>
      </div>
    </article>
  );
}
