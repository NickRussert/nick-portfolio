import { type Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative h-full rounded-3xl border border-zinc-800 p-5
                        transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5)]">
      {/* glow border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0
                      group-hover:opacity-100 transition duration-300
                      bg-gradient-to-r from-sky-500/15 to-blue-500/15" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-medium">{project.title}</h3>
          {project.badge && (
            <span className="text-xs rounded-full border border-zinc-700 px-2 py-0.5
                             bg-zinc-900/60">
              {project.badge}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-zinc-700 px-2 py-0.5 bg-zinc-900/60">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
