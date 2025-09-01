// src/app/page.tsx
import Link from "next/link";
import { projects, about as profile } from "@/lib/projects";
import { ArrowRight, FileDown } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <section className="relative grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
        {/* soft radial glow background */}
        <div
          className="pointer-events-none absolute -inset-x-6 -top-20 -bottom-10 -z-10
                     bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),_transparent_55%)]
                     dark:bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08),_transparent_55%)]"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-zinc-300">{profile.tagline}</p>
          <p className="mt-4 text-zinc-400 leading-relaxed">{profile.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-4 py-2 hover:bg-zinc-900 transition"
              href="/projects"
            >
              View Projects <ArrowRight className="size-4" />
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-4 py-2 hover:bg-zinc-900 transition"
              href="/resume.pdf"
            >
              <FileDown className="size-4" />
              Resume
            </a>
          </div>
        </div>

        {/* Info card */}
        <div className="rounded-3xl border border-zinc-800 p-6">
          <ul className="grid gap-3 text-sm">
            {profile.email && (
              <li>
                <strong>Email:</strong>{" "}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
            )}
            {profile.github && (
              <li>
                <strong>GitHub:</strong>{" "}
                <a className="underline" href={profile.github}>
                  @NickRussert
                </a>
              </li>
            )}
            {profile.linkedin && (
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a className="underline" href={profile.linkedin}>
                  Profile
                </a>
              </li>
            )}
            {profile.location && (
              <li>
                <strong>Location:</strong> {profile.location}
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Quick stats */}
      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Degree</p>
          <p className="mt-1 text-sm text-zinc-200">
            B.S. Computer Science, SDSU
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Honors</p>
          <p className="mt-1 text-sm text-zinc-200">Magna Cum Laude</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Focus</p>
          <p className="mt-1 text-sm text-zinc-200">
            CV • Predictive Modeling • Data Science
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link className="text-sm underline" href="/projects">
            All projects
          </Link>
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
