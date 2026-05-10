"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const descriptors = [
  "Multi-Agent Systems",
  "LLM Infrastructure",
  "Autonomous Agents",
  "Trading Systems",
  "RAG Pipelines",
];

const techStack = [
  "Python", "FastAPI", "LangChain", "Kafka", "PyTorch", "AWS",
  "Docker", "Kubernetes", "React", "TypeScript", "PostgreSQL",
  "Redis", "Hugging Face", "SageMaker", "TensorFlow", "MLflow",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % descriptors.length);
        setFlipped(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="hero-gradient" />

      {/* Main content */}
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] font-bold tracking-tight leading-none">
          RUTVIK SAVALIYA
        </h1>

        <p className="text-muted text-lg md:text-xl mt-4 font-body">
          AI Infrastructure & Autonomous Agent Engineer
        </p>

        {/* 3D Flip Pill */}
        <div className="mt-6 flex justify-center">
          <div className="flip-container px-6 py-0 rounded-full border border-primary/30 bg-primary/10">
            <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
              <div className="flip-front">
                <span className="text-primary font-heading font-semibold text-sm md:text-base">
                  {descriptors[currentIndex]}
                </span>
              </div>
              <div className="flip-back">
                <span className="text-primary font-heading font-semibold text-sm md:text-base">
                  {descriptors[(currentIndex + 1) % descriptors.length]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/rutvik-savaliya5/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Tech ticker marquee */}
      <div className="absolute bottom-8 left-0 w-full overflow-hidden opacity-20">
        <div className="marquee-track animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="inline-block px-6 text-sm font-heading text-white/60 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* YouTube badge */}
      <a
        href="https://www.youtube.com/@AIWithRutvik"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/70 text-sm hover:bg-white/20 hover:text-white transition-all duration-200 animate-float"
      >
        <span>&#9654;</span>
        <span className="font-body">AI With Rutvik</span>
      </a>
    </section>
  );
}
