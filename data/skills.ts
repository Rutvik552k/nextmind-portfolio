export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & ML",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "RAG", "NLP", "Computer Vision", "Prompt Engineering"],
  },
  {
    category: "Agentic Systems",
    skills: ["Multi-Agent Orchestration", "Agentic Workflows", "Task Decomposition", "Tool Use", "ReAct Agents"],
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Python", "JavaScript", "React", "TypeScript", "Streamlit", "Kafka", "Nginx"],
  },
  {
    category: "Data & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "FAISS", "Vector Search"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "SageMaker", "GCP Vertex AI", "Docker", "Kubernetes", "CI/CD", "CloudFormation", "MLflow"],
  },
  {
    category: "Analytics",
    skills: ["Predictive Analytics", "Tableau", "Statistical Analysis", "A/B Testing"],
  },
];
