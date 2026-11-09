// Original curriculum mapping informed by official education resources, not an official accreditation.
export interface CurriculumResource{id:string;title:string;provider:string;url:string}
export interface CurriculumPhase{id:string;name:string;description:string;level:string;categories:string[];resources:string[]}
export const curriculumResources:CurriculumResource[]=[
  {
    "id": "openai-builder",
    "title": "OpenAI Academy: Builder Community",
    "provider": "OpenAI Academy",
    "url": "https://academy.openai.com/en/public/clubs/builders-etkn1/resources/welcome-to-the-openai-builder-community"
  },
  {
    "id": "openai-agents",
    "title": "Building Agents",
    "provider": "OpenAI Academy",
    "url": "https://academy.openai.com/en/public/clubs/builders-etkn1/externals/building-agents-2025-08-18"
  },
  {
    "id": "openai-evals",
    "title": "Evaluation Best Practices",
    "provider": "OpenAI Developers",
    "url": "https://developers.openai.com/api/docs/guides/evaluation-best-practices"
  },
  {
    "id": "openai-scaling",
    "title": "Production Scaling Guides",
    "provider": "OpenAI Developers",
    "url": "https://developers.openai.com/learn/scaling"
  },
  {
    "id": "anthropic-fluency",
    "title": "AI Fluency Framework",
    "provider": "Anthropic",
    "url": "https://www.anthropic.com/ai-fluency/overview"
  },
  {
    "id": "anthropic-prompt",
    "title": "Prompt Engineering Overview",
    "provider": "Claude Platform",
    "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview"
  },
  {
    "id": "langchain-academy",
    "title": "LangChain Academy",
    "provider": "LangChain",
    "url": "https://academy.langchain.com/"
  },
  {
    "id": "langgraph-course",
    "title": "Introduction to LangGraph",
    "provider": "LangChain Academy",
    "url": "https://academy.langchain.com/courses/intro-to-langgraph"
  },
  {
    "id": "deep-agents",
    "title": "Introduction to Deep Agents",
    "provider": "LangChain Academy",
    "url": "https://academy.langchain.com/courses/foundation-introduction-to-deepagents"
  },
  {
    "id": "langsmith-essentials",
    "title": "LangSmith Essentials",
    "provider": "LangChain Academy",
    "url": "https://academy.langchain.com/courses/quickstart-langsmith-essentials/"
  }
];
export const curriculumPhases:CurriculumPhase[]=[
  {
    "id": "foundations",
    "name": "01 · Foundations & model literacy",
    "description": "Explain what models learn, how Transformers work, and how to design effective context.",
    "level": "Beginner → Intermediate",
    "categories": [
      "AI Foundations",
      "Machine Learning",
      "Neural Networks",
      "Transformers",
      "LLMs",
      "LLM Engineering",
      "Prompting",
      "Context Engineering"
    ],
    "resources": [
      "openai-builder",
      "anthropic-fluency",
      "anthropic-prompt"
    ]
  },
  {
    "id": "applications",
    "name": "02 · Build grounded AI applications",
    "description": "Choose retrieval, fine-tuning, multimodal inputs, and tools; build secure data foundations.",
    "level": "Intermediate",
    "categories": [
      "RAG",
      "Retrieval Engineering",
      "MCP",
      "Tool Integration",
      "Fine-tuning",
      "Multimodal AI",
      "Data Engineering"
    ],
    "resources": [
      "openai-agents",
      "langgraph-course"
    ]
  },
  {
    "id": "agentic",
    "name": "03 · Engineer agentic workflows",
    "description": "Design orchestration, durable state, memory, approvals, and architecture boundaries.",
    "level": "Intermediate → Advanced",
    "categories": [
      "Agents",
      "Agent Orchestration",
      "State & Memory",
      "System Architecture"
    ],
    "resources": [
      "langgraph-course",
      "deep-agents",
      "openai-agents"
    ]
  },
  {
    "id": "quality",
    "name": "04 · Verify quality, safety & trust",
    "description": "Build regression evals, threat models, groundedness checks, and accountable governance.",
    "level": "Advanced",
    "categories": [
      "Evaluation",
      "Evaluation Design",
      "Safety & Security",
      "Governance"
    ],
    "resources": [
      "openai-evals",
      "langsmith-essentials",
      "anthropic-fluency"
    ]
  },
  {
    "id": "operate",
    "name": "05 · Deploy & operate AI systems",
    "description": "Meet reliability and latency targets, trace failures, route models, and optimize cost.",
    "level": "Advanced",
    "categories": [
      "Observability",
      "Model Serving",
      "Optimization"
    ],
    "resources": [
      "langsmith-essentials",
      "openai-scaling",
      "langchain-academy"
    ]
  }
];
