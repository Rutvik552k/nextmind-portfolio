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
              Welcome to Rutvik Savaliya's portfolio.
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
            ctaHref="http://18.221.253.206:8501"
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
          {/*Solu lab- mid level Ai engineer*/}
          <ExperienceItem
            title = "Mid AI Engineer · Solulab"
            meta = "Nov 2025 - Jan 2026 · Chicago · IL"
            bullets = {[
                   "Engineered a multi-agent orchestration system using LangChain and FastAPI where specialized AI agents collaborate on go-to-market strategy, reducing planning cycles from weeks to hours and cutting projected agency spend by 50-70% for early-stage startups based on pilot data.",
                   "Built an automated fine-tuning pipeline on AWS SageMaker using PyTorch to train Llama 3 70B with LoRA on 50k synthetic examples, then deployed via Docker and FastAPI to achieve sub-2.3-second latency for strategy generation while reducing token usage by 22% through advanced prompt engineering.",
                    "Integrated a reasoning LLM with GRPO reinforcement learning, improving correct tool selection for campaigns from 71% to 89%; the system now autonomously executes roughly 200 monthly A/B tests, driving a 15% average increase in lead conversion for users.",
                    "Achieved 90% strategy prediction accuracy validated by expert panels across 200 ICP segments, enabling fully autonomous multi-channel campaign execution that eliminates founder workload and replaces external marketing agency contracts with scalable, data-driven GTM execution."
                 ]}
            />
          
          
          {/* CrowdDoing — Data Scientist */}
          <ExperienceItem
            title="Data Scientist · CrowdDoing (Part-time)"
            meta="Mar 2025 – Nov 2025 · Remote · Chicago, IL"
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
            title="AI Engineer · Corange Lab"
            meta="Nov 2019 – Nov 2022 · Hybrid · Surat, India"
            bullets={[
              "Architected and deployed a high-availability chatbot platform on AWS EKS (Kubernetes), integrating FastAPI, React/TypeScript, API Gateway, and load balancers to reliably support 50,000+ daily active users with 99.8% uptime and sub-second latency.",
              "Engineered the core conversational engine using custom orchestration and a RAG system; fine-tuned transformer models on historical interactions to boost response personalization accuracy and user satisfaction scores by 35%.",
              "Designed and implemented a real-time response validation and semantic caching layer using Redis and NLP techniques, then automated CI/CD pipelines on AWS to enable 15+ daily deployments while cutting production incidents by 60%.",
              "Built and productionized an end-to-end MLOps pipeline, from automated document ingestion via S3 to vector search retrieval, reducing debug time for conversational drift by 75% through comprehensive CloudWatch observability and monitoring."
              

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
