export interface BuildProject{id:string;title:string;level:string;goal:string;intro:string;architecture:string;checkpoints:string[];rubric:string[];starter:string}
export const buildProjects:BuildProject[]=[
  {
    "id": "faq",
    "title": "FAQ chatbot",
    "level": "Beginner",
    "goal": "Create an answer assistant for a small business.",
    "intro": "No API key needed to design flow. Optional code is a local rule-based mock.",
    "architecture": "Start from approved FAQ data. Show an answer or say you do not know.",
    "checkpoints": [
      "Write five questions with verified answers",
      "Draft a plain-language prompt and response policy",
      "Add an unknown-question fallback",
      "Test with three ambiguous questions"
    ],
    "rubric": [
      "Accuracy on known FAQs",
      "Safe fallback on unknown requests",
      "Clear non-technical explanation"
    ],
    "starter": "const faq = [{ question: 'When are you open?', answer: '9am–5pm, weekdays' }];\nfunction answer(query) { return faq.find(x => x.question.toLowerCase() === query.toLowerCase())?.answer ?? 'I don\\'t know. Please contact support.'; }\nconsole.log(answer('When are you open?'));"
  },
  {
    "id": "pdf-rag",
    "title": "PDF RAG assistant with citations",
    "level": "Intermediate",
    "goal": "Answer employee questions using a PDF handbook.",
    "intro": "Use a sample public handbook; do not upload private files to unknown services.",
    "architecture": "Document → extract → chunk → index → retrieve → cite.",
    "checkpoints": [
      "List authorized documents and update rules",
      "Design extraction, chunks and metadata",
      "Retrieve top passages with ACLs",
      "Require citation-supported answers",
      "Run a small evidence-faithfulness test"
    ],
    "rubric": [
      "Source freshness and permissions",
      "Supported citations",
      "Retrieval test cases"
    ],
    "starter": "// Pseudocode: choose your document loader, embedding store and model.\nconst chunks = splitWithPageNumbers(pdfText);\nconst hits = await search({ query, allowedDocumentIds });\nconst answer = await generate({ query, evidence: hits });\nreturn verifyCitations(answer, hits);"
  },
  {
    "id": "research",
    "title": "Web research agent",
    "level": "Intermediate",
    "goal": "Research a topic with verifiable sources and bounded tool calls.",
    "intro": "Prefer read-only research and explicit source attribution.",
    "architecture": "A user question → search → inspect → compare sources → synthesize.",
    "checkpoints": [
      "Define trusted research scope",
      "Set search-call and time budgets",
      "Handle unreliable and malicious webpages",
      "Collect evidence with URLs and timestamps",
      "Produce a sourced comparison"
    ],
    "rubric": [
      "Source provenance",
      "Bounded autonomy",
      "Prompt-injection resistance"
    ],
    "starter": "// Pseudocode: bounded research loop.\nfor (let step = 0; step < 4; step++) {\n  const pages = await searchApprovedSources(topic);\n  if (enoughReliableEvidence(pages)) break;\n}\nreturn draftWithCitations(evidence);"
  },
  {
    "id": "mcp",
    "title": "MCP-enabled assistant",
    "level": "Intermediate",
    "goal": "Design an assistant that discovers and uses approved tools.",
    "intro": "MCP is a tool interface; server trust and user consent are still required.",
    "architecture": "Host → MCP client → authorized MCP server → tool result.",
    "checkpoints": [
      "Identify a read-only tool capability",
      "Describe host, client and server",
      "Validate tool schema and access scopes",
      "Handle timeouts and untrusted results",
      "Test denial of unauthorized calls"
    ],
    "rubric": [
      "Correct MCP roles",
      "Least privilege",
      "Safe failure behavior"
    ],
    "starter": "// Illustrative MCP roles, not executable SDK code.\nconst host = { clients: ['documents-server'] };\nconst server = { tools: ['search_documents'] };\n// The host validates the user's permission before any tool call."
  },
  {
    "id": "evals",
    "title": "AI evaluation dashboard",
    "level": "Advanced",
    "goal": "Track task success, groundedness, latency and cost for an assistant.",
    "intro": "Use a small consented synthetic dataset.",
    "architecture": "Collect test cases → run pipeline → score → review failures.",
    "checkpoints": [
      "Define a representative test set",
      "Separate retrieval and generation measures",
      "Track error and latency distributions",
      "Create a pass/fail release gate",
      "Document regression investigations"
    ],
    "rubric": [
      "Actionable KPIs",
      "Slice coverage",
      "Safe logs and trace retention"
    ],
    "starter": "// Example metric logic.\nconst successRate = tests.filter(t => t.passed).length / tests.length;\nconst p95 = latencies.slice().sort((a,b) => a-b)[Math.ceil(latencies.length * .95)-1];\nconsole.log({ successRate, p95 });"
  },
  {
    "id": "blueprint",
    "title": "Production AI architecture document",
    "level": "Advanced",
    "goal": "Create a reviewed design document for an enterprise AI service.",
    "intro": "Make an architecture, trade-off analysis, threat model and runbook.",
    "architecture": "Requirements → alternatives → design → evals → operations.",
    "checkpoints": [
      "Document goals and SLOs",
      "Draw data flows and trust boundaries",
      "Compare deployment and model choices",
      "Define security, privacy and human approvals",
      "Plan monitoring, rollback and incident handling",
      "Write an ADR and stakeholder summary"
    ],
    "rubric": [
      "Trade-off rationale",
      "Security and operational readiness",
      "Clear communication"
    ],
    "starter": "# AI service architecture\n## Business goal and success metrics\n## Components and data flow\n## Trust boundaries and access control\n## Evaluations and rollback\n## Model, cost and deployment trade-offs\n## Operations and incident response"
  }
];
export const blockTypes=[
{id:"user",label:"User",role:"user",why:"Where requests originate"},
{id:"app",label:"App / UI",role:"user",why:"Controls experience and permissions"},
{id:"api",label:"API gateway",role:"external",why:"Validated service entry"},
{id:"llm",label:"LLM",role:"model",why:"Model inference"},
{id:"rag",label:"RAG retriever",role:"data",why:"Fetch approved evidence"},
{id:"vector",label:"Vector database",role:"data",why:"Semantic similarity search"},
{id:"tools",label:"Tool / function",role:"data",why:"Real external action"},
{id:"mcp",label:"MCP client/server",role:"data",why:"Tool interface"},
{id:"db",label:"Database",role:"data",why:"Persistent records"},
{id:"cache",label:"Cache",role:"data",why:"Reuse safe data"},
{id:"queue",label:"Queue",role:"external",why:"Handle async workloads"},
{id:"monitoring",label:"Monitoring",role:"external",why:"Trace, measure and alert"},
{id:"guardrails",label:"Guardrails",role:"error",why:"Validate and restrict"},
{id:"human",label:"Human reviewer",role:"user",why:"Approve sensitive changes"},
{id:"cloud",label:"Cloud service",role:"external",why:"Managed infrastructure"}
] as const;
