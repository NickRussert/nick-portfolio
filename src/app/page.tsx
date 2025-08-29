// src/app/page.tsx
import Link from "next/link";
import { projects, about } from "@/lib/projects";
import { ArrowRight, FileDown } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <section className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {about.name}
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">
            {about.tagline}
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-200 leading-relaxed">
            {about.blurb}
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
              href="/projects"
            >
              View Projects <ArrowRight className="size-4" />
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
              href="/resume.pdf"
            >
              <FileDown className="size-4" />
              Resume
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6">
          <ul className="grid gap-3 text-sm">
            <li><strong>Email:</strong> <a className="underline" href={`mailto:${about.email}`}>{about.email}</a></li>
            <li><strong>GitHub:</strong> <a className="underline" href={about.github}>@NickRussert</a></li>
            <li><strong>LinkedIn:</strong> <a className="underline" href={about.linkedin}>Profile</a></li>
            <li><strong>Location:</strong> {about.location}</li>
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link className="text-sm underline" href="/projects">All projects</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
