// src/app/about/page.tsx
import { about } from "@/lib/projects";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 prose prose-zinc dark:prose-invert">
      <h1>About</h1>
      <p>
        I graduated <em>Magna Cum Laude</em> from San Diego State University with a
        B.S. in Computer Science. I specialize in computer vision, predictive
        modeling, and data science—building accurate, practical AI systems.
      </p>
      <p>{about.blurb}</p>
    </div>
  );
}
