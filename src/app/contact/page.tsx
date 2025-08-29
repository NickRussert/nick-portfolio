// src/app/contact/page.tsx
import { about } from "@/lib/projects";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 prose prose-zinc dark:prose-invert">
      <h1>Contact</h1>
      <p>
        I’m open to software engineering roles with a focus on AI/ML,
        computer vision, or data-driven products. Reach out—happy to share more
        about my work or dive into technical details.
      </p>
      <ul>
        <li>Email: <a href={`mailto:${about.email}`}>{about.email}</a></li>
        <li>GitHub: <a href={about.github}>{about.github}</a></li>
        <li>LinkedIn: <a href={about.linkedin}>{about.linkedin}</a></li>
      </ul>
    </div>
  );
}
