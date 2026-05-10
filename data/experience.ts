export type Experience = {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Element119",
    title: "AI Infrastructure & Autonomous Agent Engineer",
    location: "CT, US",
    period: "Apr 2026 – Present",
    current: true,
    bullets: [
      "Spearheaded end-to-end development of two AI agent systems—a real-time trading agent and a multi-platform marketing agent—delivering both from concept to production in just 21 days, accelerating the typical 8-week cycle by over 60%.",
      "Architected a real-time trading agent using Kafka streaming integrated with PostgreSQL, cutting average API token consumption by 40% per trade decision through a custom token-budgeting transform while preserving >95% recommendation quality.",
      "Built a marketing AI agent orchestrating campaigns across 5 ad platforms via Anthropic's API with MCP servers, halving token cost per campaign run and improving tool-selection accuracy by 25%.",
      "Designed a brand-agnostic, plug-and-play agent framework enabling new brands to onboard without code changes—scaling from 2 to 15+ brands without performance degradation.",
      "Delivered a real-time analytics dashboard (React + TypeScript) visualizing agent actions, streaming data, and campaign KPIs, reducing client inquiry resolution time by 60%.",
      "Implemented JWT-based auth and Kafka-backed streaming pipeline for all inter-service communication, maintaining 99.9% uptime with zero security incidents.",
      "Researched external financial APIs and designed a token-budgeting transformation layer that reduced monthly LLM API spend by 35% across all trading workflows.",
    ],
  },
  {
    company: "Solulab",
    title: "Mid-Level AI Engineer",
    location: "Remote, US",
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "Engineered a multi-agent orchestration system using LangChain and FastAPI where specialized AI agents collaborate on go-to-market strategy, reducing planning cycles from weeks to hours and cutting projected agency spend by 50-70% for early-stage startups.",
      "Built an automated fine-tuning pipeline on AWS SageMaker using PyTorch to train Llama 3 70B with LoRA on 50k synthetic examples, achieving a 35% improvement in GTM Strategy Quality Score.",
      "Deployed via Docker and FastAPI achieving sub-2.3-second latency for strategy generation while reducing token usage by 22% through advanced prompt engineering.",
      "Integrated a reasoning LLM with GRPO reinforcement learning, improving correct tool selection for campaigns from 71% to 89%; the system autonomously executes ~200 monthly A/B tests with 15% average increase in lead conversion.",
      "Achieved 90% strategy prediction accuracy validated by expert panels across 200 ICP segments, enabling fully autonomous multi-channel campaign execution.",
    ],
  },
  {
    company: "CrowdDoing",
    title: "Data Scientist (Part-time)",
    location: "Remote, Chicago, IL",
    period: "Mar 2025 – Nov 2025",
    bullets: [
      "Led collection, cleaning, and standardization of over 20,000 consumer reviews using Python (Pandas), ensuring high-quality data for analysis and process optimization.",
      "Applied advanced NLP tools (NLTK, RoBERTa, BERT) to analyze consumer sentiments, achieving a 10% improvement in classification accuracy.",
      "Developed interactive Tableau dashboards and performed statistical analyses to deliver 5+ actionable recommendations monthly.",
    ],
  },
  {
    company: "Illinois Institute of Technology",
    title: "Course Assistant",
    location: "Remote",
    period: "Oct 2024 – Dec 2024",
    bullets: [
      "Led and supervised over 400 students from diverse global backgrounds throughout the Master's in Data Science program.",
      "Proactively engaged with students to address queries, resolving doubts within ~10 minutes on average.",
      "Maintained high satisfaction and operational efficiency across the cohort.",
    ],
  },
  {
    company: "Illinois Institute of Technology",
    title: "Graduate Teaching Assistant",
    location: "Hybrid",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Facilitated office hours and led live sessions for a Data Preparation and Analysis course.",
      "Evaluated assignments thoroughly to uphold grading consistency and delivered detailed feedback.",
    ],
  },
  {
    company: "Corange Lab",
    title: "AI Engineer",
    location: "Hybrid, Surat, India",
    period: "Jan 2019 – Nov 2022",
    bullets: [
      "Architected and deployed a scalable chatbot platform on AWS EKS (Kubernetes) with FastAPI and React/TypeScript, serving 50,000+ daily active users with 99.8% uptime and sub-second latency.",
      "Engineered the conversational engine using RAG and fine-tuned transformer models, boosting response personalization accuracy by 35%.",
      "Designed a real-time response validation and semantic caching layer using Redis, then automated CI/CD pipelines enabling 15+ daily deployments while cutting production incidents by 60%.",
      "Built an end-to-end MLOps pipeline from automated document ingestion to vector search retrieval, reducing debug time for conversational drift by 75% through CloudWatch observability.",
    ],
  },
];
