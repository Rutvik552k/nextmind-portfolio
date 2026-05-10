"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
};

export default function StickyProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stickyTop = 80 + index * 20;

  return (
    <div
      ref={ref}
      className="md:sticky"
      style={{ top: `${stickyTop}px` }}
    >
      <motion.div
        className={`sticky-card p-6 md:p-8 bg-gradient-to-br ${project.gradient} bg-opacity-10 relative overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Gradient overlay for readability */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.07] rounded-2xl`} />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <span className="text-muted text-sm font-heading font-semibold">
                {String(project.id).padStart(2, "0")}
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mt-1">
                {project.name}
              </h3>
              <p className="text-white/60 text-base mt-2 font-body">
                {project.tagline}
              </p>
            </div>

            {/* Key metric badge */}
            <div className="flex-shrink-0">
              <span className="inline-block px-4 py-2 rounded-lg bg-amber/10 border border-amber/20 text-amber text-sm font-semibold">
                {project.keyMetric}
              </span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="mt-6 space-y-3">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-white/80 text-sm font-body leading-relaxed">
                <span className="text-primary mt-1 flex-shrink-0">&#9656;</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack + CTA */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm flex-shrink-0"
            >
              View Repository &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
