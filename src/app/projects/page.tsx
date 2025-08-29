// src/app/projects/page.tsx
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Case studies and experiments in computer vision and predictive modeling.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="block">
            <ProjectCard project={p} />
          </Link>
        ))}
      </div>
    </div>
  );
}
