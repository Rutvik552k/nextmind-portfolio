"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experience";

const widthMap = [100, 92, 84, 78, 74, 68];

export default function ExperienceTower() {
  return (
    <div className="flex flex-col items-center gap-4">
      {experiences.map((exp, i) => (
        <TowerBlock key={i} exp={exp} index={i} />
      ))}
    </div>
  );
}

function TowerBlock({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const widthPercent = widthMap[index] ?? 65;

  return (
    <motion.div
      ref={ref}
      className={`tower-block p-5 md:p-6 w-full ${exp.current ? "current" : ""}`}
      style={{ maxWidth: `${widthPercent}%` }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg md:text-xl font-heading font-bold">{exp.company}</h3>
            {exp.current && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                Present
              </span>
            )}
          </div>
          <p className="text-white/70 text-sm font-body mt-0.5">{exp.title}</p>
        </div>
        <div className="text-muted text-sm font-body flex-shrink-0">
          {exp.period} &middot; {exp.location}
        </div>
      </div>

      {/* Bullets - show first 2 by default */}
      <ul className="mt-4 space-y-2">
        {(expanded ? exp.bullets : exp.bullets.slice(0, 2)).map((bullet, i) => (
          <li key={i} className="flex gap-3 text-white/75 text-sm font-body leading-relaxed">
            <span className="text-cyan mt-1 flex-shrink-0">&#9656;</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {exp.bullets.length > 2 && (
        <button
          className="mt-3 text-sm text-primary/80 hover:text-primary font-body transition-colors"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show ${exp.bullets.length - 2} more`}
        </button>
      )}
    </motion.div>
  );
}
