import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import StickyProjectCard from "@/components/StickyProjectCard";
import ExperienceTower from "@/components/ExperienceTower";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <SectionDivider text="PROJECTS" />
      <section className="container-wide space-y-6 pb-16" id="projects">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Featured Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <StickyProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <SectionDivider text="EXPERIENCE" />
      <section className="container-wide pb-16" id="experience">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
          Experience
        </h2>
        <ExperienceTower />
      </section>

      {/* SKILLS */}
      <SectionDivider text="SKILLS" />
      <section className="container-wide pb-16" id="skills">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="card p-5">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <SectionDivider text="EDUCATION" />
      <section className="container-wide pb-16" id="education">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="card p-6">
            <h3 className="font-heading font-bold text-xl">
              Illinois Institute of Technology
            </h3>
            <p className="text-muted text-sm mt-1 font-body">
              M.S. Computer Science &middot; Jan 2023 – Dec 2024
            </p>
            <p className="text-white/70 text-sm mt-3 font-body">
              GPA 3.40. Coursework: Advanced Data Mining, NLP, Model Building.
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-base">
                Lean Six Sigma Black Belt
              </h3>
              <p className="text-muted text-sm mt-1 font-body">
                Six Sigma Academy Amsterdam &middot; Apr 2025
              </p>
              <a
                href="https://www.virtualbadge.io/certificate-validator?credential=69414f0a-5741-4c3a-b948-f0a38f216ef0"
                target="_blank"
                rel="noreferrer"
                className="text-cyan text-sm hover:underline mt-2 inline-block font-body"
              >
                Show credential &rarr;
              </a>
            </div>
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-base">
                AIGPE&trade; Certified Six Sigma Green Belt
              </h3>
              <p className="text-muted text-sm mt-1 font-body">
                AIGPE &middot; Mar 2025
              </p>
              <a
                href="https://digitalcredentials.aigproexcellence.com/en/verify/48314383217933"
                target="_blank"
                rel="noreferrer"
                className="text-cyan text-sm hover:underline mt-2 inline-block font-body"
              >
                Show credential &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-wide pb-24" id="contact">
        <div className="card p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Let&apos;s Build Something
          </h2>
          <p className="text-muted mt-4 font-body">
            Open to full-time roles, consulting, and interesting collaborations
            in AI infrastructure and autonomous agent systems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rutviksavaliya141@gmail.com"
              className="btn-primary"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/rutvik-savaliya5/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rutvik552k"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
