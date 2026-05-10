"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  text: string;
};

export default function SectionDivider({ text }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="overflow-hidden py-8 md:py-12">
      <motion.div
        className="section-divider font-heading text-white"
        style={{ x }}
      >
        {text}
      </motion.div>
    </div>
  );
}
