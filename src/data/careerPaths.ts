export interface GuidedLesson {id:string;title:string;minutes:number;why:string;analogy:string;concepts:string[];checkpoint:string;activity:string}
export interface GuidedPath {id:string;title:string;prerequisites:string[];prereqLabel:string;level:string;description:string;minutes:number;categories:string[];lessons:GuidedLesson[]}
export const guidedPaths:GuidedPath[]=[
  {
    "id": "foundations",
    "title": "AI Foundations",
    "prerequisites": [],
    "level": "Beginner",
    "description": "Understand AI without writing code.",
    "minutes": 66,
    "categories": [
      "AI Foundations",
      "Machine Learning",
      "LLMs"
    ],
    "lessons": [
      {
        "id": "foundations-1",
        "title": "No-code foundations",
        "minutes": 12,
        "why": "Understand AI without writing code. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "AI Foundations",
          "Machine Learning"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "foundations-2",
        "title": "How AI learns",
        "minutes": 15,
        "why": "Understand AI without writing code. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "AI Foundations",
          "Machine Learning"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "foundations-3",
        "title": "Models, tokens and limitations",
        "minutes": 18,
        "why": "Understand AI without writing code. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "AI Foundations",
          "Machine Learning"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "foundations-4",
        "title": "Choosing an AI approach",
        "minutes": 21,
        "why": "Understand AI without writing code. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "AI Foundations",
          "Machine Learning"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "No technical background needed"
  },
  {
    "id": "prompting",
    "title": "Prompting and LLM Applications",
    "prerequisites": [
      "foundations"
    ],
    "level": "Beginner",
    "description": "Create an assistant that reliably follows instructions.",
    "minutes": 66,
    "categories": [
      "Prompting",
      "LLM Engineering",
      "Context Engineering"
    ],
    "lessons": [
      {
        "id": "prompting-1",
        "title": "Writing useful prompts",
        "minutes": 12,
        "why": "Create an assistant that reliably follows instructions. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "Prompting",
          "LLM Engineering"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "prompting-2",
        "title": "Structured answers",
        "minutes": 15,
        "why": "Create an assistant that reliably follows instructions. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "Prompting",
          "LLM Engineering"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "prompting-3",
        "title": "Building an assistant",
        "minutes": 18,
        "why": "Create an assistant that reliably follows instructions. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "Prompting",
          "LLM Engineering"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "prompting-4",
        "title": "Test and improve prompts",
        "minutes": 21,
        "why": "Create an assistant that reliably follows instructions. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "Prompting",
          "LLM Engineering"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "First finish AI Foundations"
  },
  {
    "id": "rag",
    "title": "RAG and Knowledge Systems",
    "prerequisites": [
      "prompting"
    ],
    "level": "Intermediate",
    "description": "Build an assistant that answers from verified documents.",
    "minutes": 66,
    "categories": [
      "RAG",
      "Retrieval Engineering",
      "Data Engineering"
    ],
    "lessons": [
      {
        "id": "rag-1",
        "title": "Grounding in trusted sources",
        "minutes": 12,
        "why": "Build an assistant that answers from verified documents. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "RAG",
          "Retrieval Engineering"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "rag-2",
        "title": "Chunks and embeddings",
        "minutes": 15,
        "why": "Build an assistant that answers from verified documents. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "RAG",
          "Retrieval Engineering"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "rag-3",
        "title": "Search and ranking",
        "minutes": 18,
        "why": "Build an assistant that answers from verified documents. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "RAG",
          "Retrieval Engineering"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "rag-4",
        "title": "Citations and freshness",
        "minutes": 21,
        "why": "Build an assistant that answers from verified documents. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "RAG",
          "Retrieval Engineering"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "First learn prompting"
  },
  {
    "id": "agents",
    "title": "AI Agents and MCP",
    "prerequisites": [
      "rag"
    ],
    "level": "Intermediate",
    "description": "Choose safe autonomy for multi-step tasks.",
    "minutes": 66,
    "categories": [
      "Agents",
      "MCP",
      "Agent Orchestration",
      "Tool Integration"
    ],
    "lessons": [
      {
        "id": "agents-1",
        "title": "Agent versus workflow",
        "minutes": 12,
        "why": "Choose safe autonomy for multi-step tasks. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "Agents",
          "MCP"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "agents-2",
        "title": "Tool calls and permissions",
        "minutes": 15,
        "why": "Choose safe autonomy for multi-step tasks. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "Agents",
          "MCP"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "agents-3",
        "title": "MCP connections",
        "minutes": 18,
        "why": "Choose safe autonomy for multi-step tasks. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "Agents",
          "MCP"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "agents-4",
        "title": "State and human checkpoints",
        "minutes": 21,
        "why": "Choose safe autonomy for multi-step tasks. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "Agents",
          "MCP"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "First learn grounding"
  },
  {
    "id": "cloud",
    "title": "Cloud, APIs, and Deployment",
    "prerequisites": [
      "prompting"
    ],
    "level": "Intermediate",
    "description": "Explain how an AI application becomes a reliable service.",
    "minutes": 66,
    "categories": [
      "Model Serving",
      "Optimization",
      "Tool Integration"
    ],
    "lessons": [
      {
        "id": "cloud-1",
        "title": "What an API does",
        "minutes": 12,
        "why": "Explain how an AI application becomes a reliable service. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "Model Serving",
          "Optimization"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "cloud-2",
        "title": "Calling a model endpoint",
        "minutes": 15,
        "why": "Explain how an AI application becomes a reliable service. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "Model Serving",
          "Optimization"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "cloud-3",
        "title": "Cloud versus self-hosted",
        "minutes": 18,
        "why": "Explain how an AI application becomes a reliable service. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "Model Serving",
          "Optimization"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "cloud-4",
        "title": "Deploy, scale and recover",
        "minutes": 21,
        "why": "Explain how an AI application becomes a reliable service. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "Model Serving",
          "Optimization"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "First understand AI apps"
  },
  {
    "id": "security",
    "title": "Security, Privacy, and Responsible AI",
    "prerequisites": [
      "foundations",
      "agents"
    ],
    "level": "Intermediate",
    "description": "Identify real risks and appropriate safety controls.",
    "minutes": 66,
    "categories": [
      "Safety & Security",
      "Governance",
      "Context Engineering"
    ],
    "lessons": [
      {
        "id": "security-1",
        "title": "Trust boundaries",
        "minutes": 12,
        "why": "Identify real risks and appropriate safety controls. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "Safety & Security",
          "Governance"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "security-2",
        "title": "Prompt injection and leaks",
        "minutes": 15,
        "why": "Identify real risks and appropriate safety controls. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "Safety & Security",
          "Governance"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "security-3",
        "title": "Privacy and approvals",
        "minutes": 18,
        "why": "Identify real risks and appropriate safety controls. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "Safety & Security",
          "Governance"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "security-4",
        "title": "Fairness and governance",
        "minutes": 21,
        "why": "Identify real risks and appropriate safety controls. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "Safety & Security",
          "Governance"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "First understand data and tools"
  },
  {
    "id": "architecture",
    "title": "AI Architecture and System Design",
    "prerequisites": [
      "rag",
      "agents",
      "security"
    ],
    "level": "Advanced",
    "description": "Defend an AI design against business and engineering constraints.",
    "minutes": 66,
    "categories": [
      "System Architecture",
      "Agent Orchestration",
      "State & Memory"
    ],
    "lessons": [
      {
        "id": "architecture-1",
        "title": "From business need to architecture",
        "minutes": 12,
        "why": "Defend an AI design against business and engineering constraints. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "System Architecture",
          "Agent Orchestration"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "architecture-2",
        "title": "Build a component diagram",
        "minutes": 15,
        "why": "Defend an AI design against business and engineering constraints. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "System Architecture",
          "Agent Orchestration"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "architecture-3",
        "title": "Explain system trade-offs",
        "minutes": 18,
        "why": "Defend an AI design against business and engineering constraints. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "System Architecture",
          "Agent Orchestration"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "architecture-4",
        "title": "Review seven reference designs",
        "minutes": 21,
        "why": "Defend an AI design against business and engineering constraints. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "System Architecture",
          "Agent Orchestration"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "Complete core application paths"
  },
  {
    "id": "llmops",
    "title": "LLMOps, Evaluation, and Cost Optimization",
    "prerequisites": [
      "architecture"
    ],
    "level": "Advanced",
    "description": "Operate, evaluate and improve AI systems over time.",
    "minutes": 66,
    "categories": [
      "Evaluation Design",
      "Observability",
      "Optimization",
      "Model Serving"
    ],
    "lessons": [
      {
        "id": "llmops-1",
        "title": "Task-specific evaluations",
        "minutes": 12,
        "why": "Operate, evaluate and improve AI systems over time. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like learning the rules before driving.",
        "concepts": [
          "Evaluation Design",
          "Observability"
        ],
        "checkpoint": "Explain the idea in one sentence, without technical terms.",
        "activity": "Draw a no-code workflow using boxes and arrows."
      },
      {
        "id": "llmops-2",
        "title": "Tracing and observability",
        "minutes": 15,
        "why": "Operate, evaluate and improve AI systems over time. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like building a checklist for a colleague.",
        "concepts": [
          "Evaluation Design",
          "Observability"
        ],
        "checkpoint": "Choose a suitable approach for a familiar app.",
        "activity": "Compare two prompts and note the clearer one."
      },
      {
        "id": "llmops-3",
        "title": "Latency, reliability and SLOs",
        "minutes": 18,
        "why": "Operate, evaluate and improve AI systems over time. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like finding the right chapter in a library.",
        "concepts": [
          "Evaluation Design",
          "Observability"
        ],
        "checkpoint": "Identify one limitation and how you would test it.",
        "activity": "Read a simple API or RAG example and label its components."
      },
      {
        "id": "llmops-4",
        "title": "Cost, routing and continuous improvement",
        "minutes": 21,
        "why": "Operate, evaluate and improve AI systems over time. This lesson helps you make a practical choice, not just memorize vocabulary.",
        "analogy": "Like testing a bridge before people cross it.",
        "concepts": [
          "Evaluation Design",
          "Observability"
        ],
        "checkpoint": "Describe a trade-off to a non-technical stakeholder.",
        "activity": "Describe a real scenario, its risks, and success criteria."
      }
    ],
    "prereqLabel": "First design a system"
  }
];
export const glossary:{term:string;definition:string;path:string}[]=[
  {
    "term": "AI",
    "definition": "Software designed to perform tasks that normally require reasoning or perception.",
    "path": "AI Foundations"
  },
  {
    "term": "Model",
    "definition": "A trained program that maps input information to predictions or outputs.",
    "path": "AI Foundations"
  },
  {
    "term": "Token",
    "definition": "A piece of text a language model processes.",
    "path": "Prompting and LLM Applications"
  },
  {
    "term": "Prompt",
    "definition": "The instructions and context you provide to a model.",
    "path": "Prompting and LLM Applications"
  },
  {
    "term": "API",
    "definition": "A structured way for software systems to request services from each other.",
    "path": "Cloud, APIs, and Deployment"
  },
  {
    "term": "RAG",
    "definition": "Retrieval-augmented generation: look up evidence before creating an answer.",
    "path": "RAG and Knowledge Systems"
  },
  {
    "term": "Embedding",
    "definition": "A list of numbers representing characteristics of data for similarity search.",
    "path": "RAG and Knowledge Systems"
  },
  {
    "term": "Vector database",
    "definition": "A database designed to search numeric embeddings by similarity.",
    "path": "RAG and Knowledge Systems"
  },
  {
    "term": "Agent",
    "definition": "A system using a model to choose and execute permitted steps toward a goal.",
    "path": "AI Agents and MCP"
  },
  {
    "term": "MCP",
    "definition": "Model Context Protocol: a standard interface between AI apps and tools or data.",
    "path": "AI Agents and MCP"
  },
  {
    "term": "Guardrail",
    "definition": "A check or boundary that limits unsafe or unwanted behavior.",
    "path": "Security, Privacy, and Responsible AI"
  },
  {
    "term": "Latency",
    "definition": "How long a request takes to return a useful result.",
    "path": "Cloud, APIs, and Deployment"
  },
  {
    "term": "Evaluation",
    "definition": "Repeatable tests that measure how an AI system performs on a task.",
    "path": "LLMOps, Evaluation, and Cost Optimization"
  },
  {
    "term": "Observability",
    "definition": "Traces, logs, and metrics used to understand behavior in production.",
    "path": "LLMOps, Evaluation, and Cost Optimization"
  },
  {
    "term": "SLO",
    "definition": "Service-level objective: a measurable reliability or speed target.",
    "path": "LLMOps, Evaluation, and Cost Optimization"
  }
];
