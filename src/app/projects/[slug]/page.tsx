// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({
  params,
}: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 prose prose-zinc dark:prose-invert">
      <h1 className="!mb-2">{project.title}</h1>
      {project.badge && (
        <span className="inline-block rounded-full border px-3 py-1 text-xs">
          {project.badge}
        </span>
      )}
      <p className="lead">{project.summary}</p>

      {project.impact?.length ? (
        <>
          <h3>Outcome & Impact</h3>
          <ul>
            {project.impact.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </>
      ) : null}

      <h3>Tech</h3>
      <ul>
        {project.tech.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <h3>Links</h3>
      <ul>
        {project.links?.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
        {project.paper && (
          <li>
            <a href={project.paper.href}>{project.paper.label}</a>
          </li>
        )}
      </ul>
    </div>
  );
}
