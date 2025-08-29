// src/components/ProjectCard.tsx
import { type Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full rounded-3xl border border-zinc-200 dark:border-zinc-800 p-5 hover:shadow-sm transition">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-medium">{project.title}</h3>
        {project.badge && (
          <span className="text-xs rounded-full border px-2 py-0.5">
            {project.badge}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {project.summary}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
