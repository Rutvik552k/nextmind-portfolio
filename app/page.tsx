// /app/page.tsx
import Link from "next/link";
import dynamic from "next/dynamic";
import ExperienceItem from "../components/ExperienceItem";

// Client-only widget for the YouTube thumbnail window on the right
const VideoBox = dynamic(() => import("../components/VideoBox"), { ssr: false });

type ProjectProps = {
  title: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
};

function ProjectWindow({ title, body, ctaHref, ctaLabel = "View Repository" }: ProjectProps) {
  return (
    <div className="card p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{body}</p>
      </div>
      {ctaHref && (
        <div className="mt-4">
          <a className="btn-primary" href={ctaHref} target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <section className="py-16 space-y-16">
      {/* HERO: two-column, equal height (headline left, video window right) */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="card p-6 h-full min-h-[360px] flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build with <span className="text-primary">AI</span>—Agents, RAG, and MCQ at scale.
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl">
              A focused portfolio with live background, refined hover effects, and clear project outcomes.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/rutvik-savaliya5/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Connect Now
            </a>
            <a href="#projects" className="btn-ghost">Explore Projects</a>
          </div>
        </div>

        <div className="h-full min-h-[360px]">
          <VideoBox />
        </div>
      </div>

      {/* PROJECTS */}
      <section className="space-y-8" id="projects">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectWindow
            title="1. RAG BASED CHATGPT"
            body={`A GPT-driven assistant grounded on enterprise documents via vector retrieval and LangChain orchestration, raising domain precision by 22% and cutting end-to-end latency by 15%. A Streamlit interface enables real-time queries, uploads, and contextual visualization, and FAISS optimizes embedding search to sustain pilot-stage engagement gains of 18% while remaining production-deployable.`}
            ctaHref="/products/rag"
            ctaLabel="Open Demo"
          />
          <ProjectWindow
            title="2. Image Steganalysis"
            body={`An ensemble steganalysis system detects hidden payloads by fusing four modified GoogLeNet variants with high-pass filtering. Inception blocks, kernel sizes, and pooling were re-tuned and averaged to surpass a strong baseline by 6%. Trained with Adam and BCE on 75k cover/stego pairs from UERD, the model reached 66% accuracy, 90% recall, 0.73 F1, and 0.72 ROC-AUC despite class imbalance—exposing sensitive channels reliably.`}
            ctaHref="https://github.com/Rutvik552k/steganalysis"
          />
          <ProjectWindow
            title="3. Email Automation"
            body={`A workflow ingests the inbox, extracts company and role entities, compiles an application ledger, and discovers recruiters with contacts. It drafts and sends tailored cold emails end-to-end, turning multi-hour manual triage and outreach into a single automated pass—materially improving throughput while preserving sender control.`}
            ctaHref="https://github.com/Rutvik552k/Email-automation"
          />
          <ProjectWindow
            title="4. Mitigation Techniques on LLMs"
            body={`A study of classification bias surfaces systematic skews in large language models and compares mitigation strategies under matched evaluation. Prompt hardening, calibrated thresholds, and debiasing objectives reduce disparate behavior while retaining task utility, with empirical gaps closed against baselines across multiple datasets.`}
            ctaHref="https://github.com/Rutvik552k/Bert_model-evaluation"
          />
        </div>
      </section>

      {/* EXPERIENCE — Vertical timeline with hover + expand (3 sentences visible by default) */}
      <section className="space-y-6" id="experience">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="border-l border-white/15 timeline">
          {/* CrowdDoing — Data Scientist */}
          <ExperienceItem
            title="Data Scientist · CrowdDoing (Part-time)"
            meta="Mar 2025 – Present · Remote · Chicago, IL"
            bullets={[
              "Led the collection, cleaning, and standardization of over 20,000 consumer reviews using Python (Pandas), ensuring high-quality data for analysis and process optimization.",
              "Applied advanced NLP tools (NLTK, RoBERTa, BERT) to analyze consumer sentiments, achieving a 10% improvement in classification accuracy and extracting insights for product innovation.",
              "Developed interactive Tableau dashboards and performed statistical analyses (e.g., t-tests) to deliver 5+ actionable recommendations monthly, driving continuous improvement in herbal solutions."
              // exactly 3 provided; no 'Show more' button needed
            ]}
          />

          {/* Illinois Tech — Course Assistant */}
          <ExperienceItem
            title="Course Assistant · Illinois Institute of Technology"
            meta="Oct 2024 – Dec 2024 · Remote"
            bullets={[
              "Led and supervised over 400 students from diverse global backgrounds throughout the Master’s in Data Science program.",
              "Ensured smooth academic progression and a supportive learning environment through structured communication and resources.",
              "Proactively engaged with students to address their queries, resolving doubts within ~10 minutes on average.",
              "Maintained high satisfaction and operational efficiency across the cohort."
            ]}
          />

          {/* Illinois Tech — Graduate Teaching Assistant */}
          <ExperienceItem
            title="Graduate Teaching Assistant · Illinois Institute of Technology"
            meta="Aug 2024 – Dec 2024 · Hybrid"
            bullets={[
              "Facilitated office hours and led live sessions for a Data Preparation and Analysis course.",
              "Improved student comprehension and performance with guided practice and targeted clarification.",
              "Managed inquiries with a tracking sheet for transparency and timely responses.",
              "Evaluated assignments thoroughly to uphold grading consistency.",
              "Delivered detailed feedback to accelerate learning loops."
            ]}
          />

          {/* Corange Lab — Sr. AI Engineer */}
          <ExperienceItem
            title="Sr. AI Engineer · Corange Lab"
            meta="Nov 2019 – Nov 2022 · Hybrid · Surat, India"
            bullets={[
              "Founded and architected an end-to-end MCQ generation platform, scaling throughput to 5,000+ items/month at <5% error rate.",
              "Designed, fine-tuned, and deployed custom LLMs from Hugging Face (instruction-tuned transformers) via supervised fine-tuning and domain-specific training, improving pedagogical alignment by 25% over base models.",
              "Built and productionized an NLP-driven validation engine to auto-detect ambiguities and distractor gaps, reducing revision cycles by 40% and raising content integrity.",
              "Engineered ingestion and chunking pipelines with PyMuPDF, TF-IDF, and heuristics to transform unstructured PDFs into structured datasets with >90% citation traceability.",
              "Established observability with structured logging, per-run dashboards, and AWS CloudWatch to achieve 80% faster failure diagnostics and 99.9% uptime during peak seasons.",
              "Drove cross-functional alignment by co-developing reusable MCQ templates with subject experts, ensuring pedagogical fidelity and achieving >95% adoption across internal production workflows.",
              "Pioneered optimization of TF-IDF+MMR harvesting for key concepts, boosting idea coverage by 30% and elevating downstream benchmark recall, directly advancing research-backed question quality.",
              "Implemented full-stack monitoring with Prometheus, Grafana, and CloudWatch, automating 15+ anomaly and drift alerts to reduce downtime by 60% and enabling proactive response to scaling bottlenecks.",
              "Acted as the primary mentor and architect, onboarding junior engineers into scalable MLOps practices, reducing onboarding time by 35% and driving collective velocity across debugging and QA pipelines."

            ]}
          />
        </div>
      </section>

      {/* EDUCATION */}
      <section className="space-y-6" id="education">
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="border-l border-white/15 timeline">
          <ExperienceItem
            title="Illinois Institute of Technology"
            meta="M.S. Computer Science · Nov 2022 – Dec 2024"
            bullets={[
              "GPA 3.40.",
              "Coursework highlights: Advanced Data Mining, NLP, Model Building.",
              "Completed capstone and related electives aligned with applied AI."
            ]}
          />
        </div>
      </section>

      {/* LICENSES & CERTIFICATIONS */}
      <section className="space-y-6" id="certs">
        <h2 className="text-3xl font-bold">Licenses & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Lean Six Sigma Black Belt</h3>
            <div className="meta">Six Sigma Academy Amsterdam · Issued Apr 2025</div>
            <div className="mt-3">
              <a href="https://www.virtualbadge.io/certificate-validator?credential=69414f0a-5741-4c3a-b948-f0a38f216ef0" className="btn-outline" title="Add your credential URL here">
                Show credential
              </a>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold">AIGPE™ Certified Six Sigma Green Belt</h3>
            <div className="meta">AIGPE · Issued Mar 2025</div>
            <div className="mt-3">
              <a href="https://digitalcredentials.aigproexcellence.com/en/verify/48314383217933" className="btn-outline" title="Add your credential URL here">
                Show credential
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
