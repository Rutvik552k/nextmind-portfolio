// /components/ExperienceItem.tsx
"use client";
import { useState } from "react";

type Props = {
  title: string;
  meta: string;
  bullets: string[];        // all sentences/bullets (we’ll show 3, expand to all)
  initialCount?: number;    // default 3
};

export default function ExperienceItem({ title, meta, bullets, initialCount = 3 }: Props) {
  const [open, setOpen] = useState(false);
  const visible = open ? bullets : bullets.slice(0, initialCount);

  return (
    <div className="timeline-item mt-6">
      <span className="dot" />
      <div className="exp-card card p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="meta">{meta}</div>
        </div>

        <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc pl-5">
          {visible.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        {bullets.length > initialCount && (
          <button
            className="btn-ghost mt-4 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}
