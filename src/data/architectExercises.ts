export interface DecisionDrill {id:string;scenario:string;choices:string[];correct:number;recommended:string;reason:string;tradeoffs:string;risks:string;architecture:string;cost:string;latency:string;lesson:string}
export const decisionDrills:DecisionDrill[]=[
  {
    "id": "rag-finetune",
    "scenario": "An insurer updates its policy documents weekly. Answers must cite current rules.",
    "choices": [
      "RAG with versioned document retrieval",
      "Fine-tune monthly",
      "Just use a larger model",
      "Use a static system prompt"
    ],
    "correct": 0,
    "recommended": "RAG with versioned document retrieval",
    "reason": "Retrieval gives the assistant current evidence without retraining for each policy change.",
    "tradeoffs": "Ingestion and indexing add maintenance, but citations and freshness improve.",
    "risks": "Stale indexes, unauthorized documents, unsupported claims.",
    "architecture": "Index updates, tenant-scoped retrieval, reranking, citation verification, and evaluation.",
    "cost": "Medium",
    "latency": "Medium",
    "lesson": "Fine-tuning may help tone, but not serve as the sole source for changing policies."
  },
  {
    "id": "routing",
    "scenario": "Most support chats ask basic questions, but complex escalations need nuanced reasoning.",
    "choices": [
      "Route easy requests to a smaller model and escalate uncertain cases",
      "Always use the largest model",
      "Always use the smallest model",
      "Generate three answers for every request"
    ],
    "correct": 0,
    "recommended": "Route easy requests to a smaller model and escalate uncertain cases",
    "reason": "Evaluate a routing policy on easy and difficult slices; escalate when confidence or risk requires.",
    "tradeoffs": "A routing layer adds complexity but can reduce average spend and response time.",
    "risks": "Misrouted high-risk requests, inconsistent model behavior.",
    "architecture": "Task classifier → low-cost model or strong model → quality checks → audit.",
    "cost": "Low–Medium",
    "latency": "Low–Medium",
    "lesson": "Routing saves money only if its mistakes are measured and manageable."
  },
  {
    "id": "agent-workflow",
    "scenario": "Expense approvals follow fixed rules; AI reads receipts and requests approval.",
    "choices": [
      "Deterministic workflow with AI-assisted extraction",
      "Unrestricted autonomous agent",
      "Single prompt that makes payments",
      "Multiple agents that all can pay"
    ],
    "correct": 0,
    "recommended": "Deterministic workflow with AI-assisted extraction",
    "reason": "Fixed business steps should be implemented in ordinary code; use AI only where judgment is needed.",
    "tradeoffs": "Less flexibility but better auditability and predictable execution.",
    "risks": "Duplicate payments, unsafe tool use, ignored approval gates.",
    "architecture": "Receipt extraction → validation → policy rules → human approval → idempotent payment API.",
    "cost": "Medium",
    "latency": "Low–Medium",
    "lesson": "An agent is useful for uncertain tasks, not for bypassing predictable controls."
  },
  {
    "id": "hosting",
    "scenario": "A small startup needs an assistant next week; it has no GPU team and ordinary privacy needs.",
    "choices": [
      "Managed cloud model API with contractual safeguards",
      "Self-host a large model immediately",
      "Train a foundation model",
      "Deploy one model per user"
    ],
    "correct": 0,
    "recommended": "Managed cloud model API with contractual safeguards",
    "reason": "A managed API reduces infrastructure and launch complexity; hosting choice must match data handling rules.",
    "tradeoffs": "Provider dependence and variable token costs versus faster delivery.",
    "risks": "Data residency mismatch, vendor outages, budget surprises.",
    "architecture": "API gateway → scoped requests → managed model → monitoring; retain a fallback provider.",
    "cost": "Low initially",
    "latency": "Low",
    "lesson": "Self-hosting may win later at high volume or strict controls, but has real operational costs."
  },
  {
    "id": "retrieval",
    "scenario": "Technicians search for exact fault codes such as ERR-429 across thousands of manuals.",
    "choices": [
      "Keyword search or hybrid lexical + semantic retrieval",
      "Vector-only search without testing",
      "Fine-tuning on the manuals",
      "Use random document sampling"
    ],
    "correct": 0,
    "recommended": "Keyword search or hybrid lexical + semantic retrieval",
    "reason": "Exact identifiers benefit from lexical matching; hybrid retrieval also handles paraphrases.",
    "tradeoffs": "Hybrid adds two indexes and a merge strategy.",
    "risks": "Incorrect rank, missing codes, access-control mistakes.",
    "architecture": "Authenticated search → metadata filters → BM25 + vectors → reranker → cited answer.",
    "cost": "Medium",
    "latency": "Low–Medium",
    "lesson": "Semantic retrieval is not a substitute for exact term matching."
  },
  {
    "id": "approval",
    "scenario": "An AI assistant is about to issue a $15,000 refund after interpreting a complaint.",
    "choices": [
      "Human approval bound to exact transaction details",
      "Full automation for every refund",
      "Hide the tool from the user",
      "Ask a second model to approve alone"
    ],
    "correct": 0,
    "recommended": "Human approval bound to exact transaction details",
    "reason": "High-impact irreversible actions need independent authorization and explicit approval.",
    "tradeoffs": "Approval increases time but sharply limits damage from bad interpretation.",
    "risks": "Fraud, wrong payee, repeated payments, audit gaps.",
    "architecture": "Policy check → typed refund proposal → authorized human approval → idempotent execution.",
    "cost": "Medium",
    "latency": "Higher",
    "lesson": "Human approval is a security control, not a model confidence trick."
  }
];
export const designDimensions=["business","security","privacy","scalability","reliability","cost","latency","observability","human","maintainability"] as const;
export interface DesignChallenge{id:string;title:string;goal:string;required:string[];focus:string[];risk:string;dimensions:string[]}
export const designChallenges:DesignChallenge[]=[
  {
    "id": "support",
    "title": "Customer-support chatbot",
    "goal": "Answer customer FAQs, verify order status, escalate risky actions.",
    "required": [
      "user",
      "app",
      "llm",
      "rag",
      "db",
      "guardrails",
      "monitoring",
      "human"
    ],
    "focus": [
      "security",
      "reliability",
      "latency"
    ],
    "risk": "Only access the customer's own orders. Never refund without approval.",
    "dimensions": [
      "business",
      "security",
      "privacy",
      "scalability",
      "reliability",
      "cost",
      "latency",
      "observability",
      "human",
      "maintainability"
    ]
  },
  {
    "id": "hr",
    "title": "Internal HR knowledge assistant",
    "goal": "Retrieve private HR policies with role-aware access and current citations.",
    "required": [
      "user",
      "app",
      "rag",
      "vector",
      "db",
      "guardrails",
      "monitoring"
    ],
    "focus": [
      "privacy",
      "security",
      "human"
    ],
    "risk": "Access must be filtered by employee roles before retrieval.",
    "dimensions": [
      "business",
      "security",
      "privacy",
      "scalability",
      "reliability",
      "cost",
      "latency",
      "observability",
      "human",
      "maintainability"
    ]
  },
  {
    "id": "coding",
    "title": "Coding assistant",
    "goal": "Suggest code changes, run tests safely, and request review before merging.",
    "required": [
      "user",
      "app",
      "llm",
      "tools",
      "guardrails",
      "human",
      "monitoring"
    ],
    "focus": [
      "security",
      "reliability",
      "maintainability"
    ],
    "risk": "Sandbox tool execution and require review for repository changes.",
    "dimensions": [
      "business",
      "security",
      "privacy",
      "scalability",
      "reliability",
      "cost",
      "latency",
      "observability",
      "human",
      "maintainability"
    ]
  },
  {
    "id": "summary",
    "title": "Document summarizer",
    "goal": "Summarize long documents accurately with traceable sections.",
    "required": [
      "user",
      "app",
      "llm",
      "rag",
      "cache",
      "monitoring"
    ],
    "focus": [
      "accuracy",
      "privacy",
      "latency"
    ],
    "risk": "Keep provenance and verify important claims in the source.",
    "dimensions": [
      "business",
      "security",
      "privacy",
      "scalability",
      "reliability",
      "cost",
      "latency",
      "observability",
      "human",
      "maintainability"
    ]
  },
  {
    "id": "sales",
    "title": "Sales proposal generator",
    "goal": "Combine approved templates, CRM facts, and human-reviewed offers.",
    "required": [
      "user",
      "app",
      "llm",
      "rag",
      "api",
      "guardrails",
      "human"
    ],
    "focus": [
      "business",
      "cost",
      "human"
    ],
    "risk": "Do not invent discounts or commitments; require sign-off.",
    "dimensions": [
      "business",
      "security",
      "privacy",
      "scalability",
      "reliability",
      "cost",
      "latency",
      "observability",
      "human",
      "maintainability"
    ]
  },
  {
    "id": "health",
    "title": "Healthcare policy assistant",
    "goal": "Explain administrative policies and route high-risk questions to staff.",
    "required": [
      "user",
      "app",
      "rag",
      "db",
      "guardrails",
      "human",
      "monitoring"
    ],
    "focus": [
      "privacy",
      "security",
      "human"
    ],
    "risk": "Protect health data and avoid autonomous clinical decisions.",
    "dimensions": [
      "business",
      "security",
      "privacy",
      "scalability",
      "reliability",
      "cost",
      "latency",
      "observability",
      "human",
      "maintainability"
    ]
  },
  {
    "id": "commerce",
    "title": "E-commerce product assistant",
    "goal": "Find current products, check inventory, and guide purchases safely.",
    "required": [
      "user",
      "app",
      "llm",
      "rag",
      "tools",
      "cache",
      "monitoring"
    ],
    "focus": [
      "scalability",
      "latency",
      "cost"
    ],
    "risk": "Use live inventory and prices, not model memory.",
    "dimensions": [
      "business",
      "security",
      "privacy",
      "scalability",
      "reliability",
      "cost",
      "latency",
      "observability",
      "human",
      "maintainability"
    ]
  }
];
export interface FailureCase{id:string;title:string;root:string;options:string[];correct:number;improved:string}
export const failureCases:FailureCase[]=[
  {
    "id": "hallucination",
    "title": "A policy bot confidently invents a reimbursement limit.",
    "root": "No evidence grounding and no citation verification.",
    "options": [
      "Add retrieval and claim-level citation verification",
      "Increase output temperature",
      "Remove source links"
    ],
    "correct": 0,
    "improved": "Versioned RAG → evidence check → supported response or uncertainty"
  },
  {
    "id": "stale",
    "title": "A bot quotes last year's parental leave policy.",
    "root": "No freshness or update mechanism in the document index.",
    "options": [
      "Enable incremental indexing and version priority",
      "Only add a larger prompt",
      "Add more agents"
    ],
    "correct": 0,
    "improved": "Ingestion versioning → freshness filters → retrieval → cited answer"
  },
  {
    "id": "injection",
    "title": "A webpage tells a research agent to reveal its secret keys.",
    "root": "Untrusted content crossed the instruction and tool trust boundary.",
    "options": [
      "Restrict tools and treat pages as data",
      "Follow the latest page instruction",
      "Increase token limit"
    ],
    "correct": 0,
    "improved": "Untrusted page → input isolation → tool authorization → safe result"
  },
  {
    "id": "leak",
    "title": "One employee sees another company's contract.",
    "root": "Tenant and document authorization was missing from retrieval.",
    "options": [
      "Enforce identity-aware retrieval filters",
      "Add polite wording",
      "Increase similarity threshold"
    ],
    "correct": 0,
    "improved": "Auth → tenant ACL → retrieval → scoped generation + audit"
  },
  {
    "id": "latency",
    "title": "An agent takes 35 seconds to answer a short FAQ.",
    "root": "Unnecessary sequential tool/model calls on an easy path.",
    "options": [
      "Profile trace and use a direct fast path",
      "Use more autonomous steps",
      "Disable metrics"
    ],
    "correct": 0,
    "improved": "Router → direct answer or bounded agent → timeout / cache"
  },
  {
    "id": "cost",
    "title": "A simple ticket classifier runs a premium model with huge prompts.",
    "root": "No model routing, batching, or token budget.",
    "options": [
      "Use evaluated small-model path and token limits",
      "Generate several answers per ticket",
      "Store every conversation forever"
    ],
    "correct": 0,
    "improved": "Task gate → efficient model → sampling evals → cost dashboard"
  },
  {
    "id": "action",
    "title": "An agent sends an email to the wrong customer.",
    "root": "Tool inputs were not verified and user approval was bypassed.",
    "options": [
      "Validate recipient and require confirmation",
      "Increase model confidence wording",
      "Retry the send blindly"
    ],
    "correct": 0,
    "improved": "Structured proposal → recipient validation → human confirmation → idempotent send"
  }
];
