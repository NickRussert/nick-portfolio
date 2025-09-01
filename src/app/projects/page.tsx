// src/app/projects/page.tsx
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
      <p className="mt-2 text-zinc-400">
        Case studies and experiments in computer vision and predictive modeling.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
