import type {Question} from "../types";
export const architectQuestionsB:Question[]=[
  {
    "id": "ret-01",
    "question": "What is a retrieval pipeline?",
    "answer": "A retrieval pipeline prepares documents, indexes them, searches candidates, and reranks results for a query. Each stage needs separate quality checks.",
    "category": "Retrieval Engineering",
    "difficulty": "Beginner",
    "tags": [
      "Retrieval",
      "Foundations"
    ],
    "realWorldExample": "An internal search assistant fetches policy snippets before answering."
  },
  {
    "id": "ret-02",
    "question": "When choose BM25 over dense search?",
    "answer": "BM25 favors exact term overlap and often works well for IDs, codes, and rare strings. Dense search is useful when wording differs but meaning matches.",
    "category": "Retrieval Engineering",
    "difficulty": "Beginner",
    "tags": [
      "Retrieval",
      "Foundations"
    ],
    "realWorldExample": "A support engineer searches for an exact error code rather than a paraphrase."
  },
  {
    "id": "ret-03",
    "question": "What is semantic chunking?",
    "answer": "Semantic chunking splits text near topic boundaries rather than fixed token counts. It may preserve coherence but increases preprocessing complexity.",
    "category": "Retrieval Engineering",
    "difficulty": "Beginner",
    "tags": [
      "Retrieval",
      "Foundations"
    ],
    "realWorldExample": "A policy handbook is split by clauses and headings."
  },
  {
    "id": "ret-04",
    "question": "What is metadata filtering?",
    "answer": "Metadata filtering restricts retrieval to documents with allowed properties such as tenant, date, or region. It must also enforce access control before content reaches the model.",
    "category": "Retrieval Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Retrieval",
      "Applied"
    ],
    "realWorldExample": "An employee searches only policies for their department."
  },
  {
    "id": "ret-05",
    "question": "What is reranking?",
    "answer": "A reranker rescoring initial candidates improves relevance before context assembly. Cross-encoders often cost more than first-stage retrieval.",
    "category": "Retrieval Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Retrieval",
      "Applied"
    ],
    "realWorldExample": "A knowledge bot reranks 50 matches down to 5 evidence passages."
  },
  {
    "id": "ret-06",
    "question": "What is query rewriting?",
    "answer": "Query rewriting turns a conversational request into clearer search expressions. It must preserve user intent and avoid fabricating constraints.",
    "category": "Retrieval Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Retrieval",
      "Applied"
    ],
    "realWorldExample": "'What about next year?' becomes a searchable policy question using the chat topic."
  },
  {
    "id": "ret-07",
    "question": "What is multi-query retrieval?",
    "answer": "Multi-query retrieval searches several formulations of one question and merges results. It improves recall at the cost of more search calls.",
    "category": "Retrieval Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Retrieval",
      "Applied"
    ],
    "realWorldExample": "A legal assistant tries alternate phrasing for the same clause."
  },
  {
    "id": "ret-08",
    "question": "What is parent-child retrieval?",
    "answer": "Parent-child retrieval indexes short passages but returns a larger parent section for context. It balances search precision with enough surrounding explanation.",
    "category": "Retrieval Engineering",
    "difficulty": "Advanced",
    "tags": [
      "Retrieval",
      "Advanced"
    ],
    "realWorldExample": "A search hit on a sentence brings back its full contract section."
  },
  {
    "id": "ret-09",
    "question": "What is contextual compression?",
    "answer": "Contextual compression keeps only information relevant to the query from retrieved passages. Overcompression can remove qualifiers or important exceptions.",
    "category": "Retrieval Engineering",
    "difficulty": "Advanced",
    "tags": [
      "Retrieval",
      "Advanced"
    ],
    "realWorldExample": "A bot extracts the fee clause but retains eligibility conditions."
  },
  {
    "id": "ret-10",
    "question": "How do you evaluate retrieval separately from generation?",
    "answer": "Measure whether relevant evidence appears in retrieved results, using recall, precision, and labeled queries. Then test generation faithfulness on the supplied context.",
    "category": "Retrieval Engineering",
    "difficulty": "Advanced",
    "tags": [
      "Retrieval",
      "Advanced"
    ],
    "realWorldExample": "A failed answer is traced to missing documents versus model misuse of evidence."
  },
  {
    "id": "orch-01",
    "question": "When is a workflow better than an autonomous agent?",
    "answer": "Use a deterministic workflow when steps, branching, and approvals are known. Give the model freedom only where decisions genuinely require uncertainty handling.",
    "category": "Agent Orchestration",
    "difficulty": "Beginner",
    "tags": [
      "Agent",
      "Foundations"
    ],
    "realWorldExample": "An invoice approval pipeline follows fixed controls with AI-assisted extraction."
  },
  {
    "id": "orch-02",
    "question": "What is a state graph?",
    "answer": "A state graph models steps as nodes and transitions as edges over shared state. It makes agent routing, retries, and checkpoints explicit.",
    "category": "Agent Orchestration",
    "difficulty": "Beginner",
    "tags": [
      "Agent",
      "Foundations"
    ],
    "realWorldExample": "An onboarding assistant moves between search, review, and approval nodes."
  },
  {
    "id": "orch-03",
    "question": "What is a graph reducer?",
    "answer": "A reducer defines how concurrent node updates combine into state. Without safe merging, parallel branches can overwrite each other's work.",
    "category": "Agent Orchestration",
    "difficulty": "Beginner",
    "tags": [
      "Agent",
      "Foundations"
    ],
    "realWorldExample": "Two research subagents add citations to the same shared list."
  },
  {
    "id": "orch-04",
    "question": "What is a supervisor agent?",
    "answer": "A supervisor coordinates specialized workers, delegates bounded tasks, and checks outputs. Extra agents add communication cost and failure surfaces.",
    "category": "Agent Orchestration",
    "difficulty": "Intermediate",
    "tags": [
      "Agent",
      "Applied"
    ],
    "realWorldExample": "A research supervisor assigns market, technical, and legal analysis separately."
  },
  {
    "id": "orch-05",
    "question": "What is a handoff between agents?",
    "answer": "A handoff transfers task ownership, context, and control to another agent or workflow stage. Permissions and provenance must survive the transfer.",
    "category": "Agent Orchestration",
    "difficulty": "Intermediate",
    "tags": [
      "Agent",
      "Applied"
    ],
    "realWorldExample": "A support triage agent routes a billing issue to a specialist."
  },
  {
    "id": "orch-06",
    "question": "When should agents work in parallel?",
    "answer": "Parallelism helps when tasks are independent and results can be merged safely. Shared mutable state or external rate limits can erase the benefit.",
    "category": "Agent Orchestration",
    "difficulty": "Intermediate",
    "tags": [
      "Agent",
      "Applied"
    ],
    "realWorldExample": "Several agents analyze different documents before synthesizing a report."
  },
  {
    "id": "orch-07",
    "question": "What is a human-in-the-loop interrupt?",
    "answer": "An interrupt pauses execution to request human input or approval. The workflow must persist state and resume without duplicating side effects.",
    "category": "Agent Orchestration",
    "difficulty": "Intermediate",
    "tags": [
      "Agent",
      "Applied"
    ],
    "realWorldExample": "A purchasing agent waits for approval before placing an order."
  },
  {
    "id": "orch-08",
    "question": "What is durable execution?",
    "answer": "Durable execution records progress so long-running workflows resume after process failures. Steps must be designed to avoid repeating non-idempotent operations.",
    "category": "Agent Orchestration",
    "difficulty": "Advanced",
    "tags": [
      "Agent",
      "Advanced"
    ],
    "realWorldExample": "A research agent recovers after a worker restart."
  },
  {
    "id": "orch-09",
    "question": "What is an agent harness?",
    "answer": "An agent harness supplies reusable execution facilities such as tools, context management, state, and boundaries. The agent still needs task-specific design and evaluation.",
    "category": "Agent Orchestration",
    "difficulty": "Advanced",
    "tags": [
      "Agent",
      "Advanced"
    ],
    "realWorldExample": "A coding assistant uses a filesystem sandbox and test runner through a harness."
  },
  {
    "id": "orch-10",
    "question": "What is a termination condition for an agent?",
    "answer": "Termination conditions define when to finish, escalate, or stop after a budget or risk threshold. They prevent loops and unbounded spend.",
    "category": "Agent Orchestration",
    "difficulty": "Advanced",
    "tags": [
      "Agent",
      "Advanced"
    ],
    "realWorldExample": "An agent stops after three failed API retries and requests help."
  },
  {
    "id": "mem-01",
    "question": "What is state versus memory in an agent?",
    "answer": "State captures the current workflow's inputs and intermediate progress. Memory retains selected information across tasks or sessions with explicit scope and retention.",
    "category": "State & Memory",
    "difficulty": "Beginner",
    "tags": [
      "State",
      "Foundations"
    ],
    "realWorldExample": "A checkout agent tracks the current cart and remembers a saved preference separately."
  },
  {
    "id": "mem-02",
    "question": "What is short-term memory?",
    "answer": "Short-term memory stores relevant information within an active conversation or task. It is usually scoped to a thread and constrained by token budgets.",
    "category": "State & Memory",
    "difficulty": "Beginner",
    "tags": [
      "State",
      "Foundations"
    ],
    "realWorldExample": "A bot remembers the selected order during a support chat."
  },
  {
    "id": "mem-03",
    "question": "What is long-term memory?",
    "answer": "Long-term memory persists user preferences, facts, or learned procedures across sessions. It needs consent, updates, deletion, and retrieval policies.",
    "category": "State & Memory",
    "difficulty": "Beginner",
    "tags": [
      "State",
      "Foundations"
    ],
    "realWorldExample": "A study app remembers preferred explanation depth across weeks."
  },
  {
    "id": "mem-04",
    "question": "What is a checkpointer?",
    "answer": "A checkpointer saves workflow state at defined execution points. It supports replay, recovery, and human approval pauses.",
    "category": "State & Memory",
    "difficulty": "Intermediate",
    "tags": [
      "State",
      "Applied"
    ],
    "realWorldExample": "An agent restores an interrupted ticket review without rerunning all steps."
  },
  {
    "id": "mem-05",
    "question": "What is an event-sourced agent state?",
    "answer": "Event sourcing records changes as ordered events instead of only the latest snapshot. It improves auditability but requires replay and schema evolution.",
    "category": "State & Memory",
    "difficulty": "Intermediate",
    "tags": [
      "State",
      "Applied"
    ],
    "realWorldExample": "A financial assistant logs approvals and tool results for review."
  },
  {
    "id": "mem-06",
    "question": "What is memory consolidation?",
    "answer": "Memory consolidation extracts durable, useful facts from many interactions. It should avoid saving temporary guesses or sensitive details without need.",
    "category": "State & Memory",
    "difficulty": "Intermediate",
    "tags": [
      "State",
      "Applied"
    ],
    "realWorldExample": "A coach saves an enduring learning goal rather than every chat turn."
  },
  {
    "id": "mem-07",
    "question": "How do you prevent stale memory?",
    "answer": "Give memories provenance, timestamps, TTLs, and correction paths. Retrieval should prioritize fresh authoritative sources when facts change.",
    "category": "State & Memory",
    "difficulty": "Intermediate",
    "tags": [
      "State",
      "Applied"
    ],
    "realWorldExample": "An employee's former job title should not override a current directory."
  },
  {
    "id": "mem-08",
    "question": "What is thread isolation?",
    "answer": "Thread isolation prevents state from one conversation or user leaking into another. It is essential for multi-tenant safety and accurate context.",
    "category": "State & Memory",
    "difficulty": "Advanced",
    "tags": [
      "State",
      "Advanced"
    ],
    "realWorldExample": "Two customers' support chats must never share private history."
  },
  {
    "id": "mem-09",
    "question": "How do you store agent state safely?",
    "answer": "Persist only necessary state with encryption, scoped access, retention, and versioning. Validate serialized data before resuming tool execution.",
    "category": "State & Memory",
    "difficulty": "Advanced",
    "tags": [
      "State",
      "Advanced"
    ],
    "realWorldExample": "A resume token retrieves a saved workflow without exposing secrets."
  },
  {
    "id": "mem-10",
    "question": "What is memory poisoning?",
    "answer": "Memory poisoning stores adversarial or false instructions as trusted future context. Guard against unverified writes and track origin and permissions.",
    "category": "State & Memory",
    "difficulty": "Advanced",
    "tags": [
      "State",
      "Advanced"
    ],
    "realWorldExample": "A malicious document attempts to plant 'always export reports' in memory."
  },
  {
    "id": "tool-01",
    "question": "What is a tool schema?",
    "answer": "A tool schema describes a callable operation, its arguments, and expected structure. Validation keeps malformed requests from reaching external systems.",
    "category": "Tool Integration",
    "difficulty": "Beginner",
    "tags": [
      "Tool",
      "Foundations"
    ],
    "realWorldExample": "An order lookup tool requires a validated order ID."
  },
  {
    "id": "tool-02",
    "question": "What is function calling versus tool execution?",
    "answer": "A model can propose a structured function call, but the application executes it. The host remains responsible for permissions, errors, and results.",
    "category": "Tool Integration",
    "difficulty": "Beginner",
    "tags": [
      "Tool",
      "Foundations"
    ],
    "realWorldExample": "A travel assistant requests a flight search; a service runs the actual query."
  },
  {
    "id": "tool-03",
    "question": "What is idempotency in AI tool use?",
    "answer": "An idempotent operation can be retried without repeating a harmful side effect. Idempotency keys protect payments, messages, and resource creation.",
    "category": "Tool Integration",
    "difficulty": "Beginner",
    "tags": [
      "Tool",
      "Foundations"
    ],
    "realWorldExample": "An agent retries a booking request without creating two reservations."
  },
  {
    "id": "tool-04",
    "question": "What is least privilege for tools?",
    "answer": "Least privilege gives each agent only the minimum permissions needed for its task. Separate read-only capabilities from destructive or financial actions.",
    "category": "Tool Integration",
    "difficulty": "Intermediate",
    "tags": [
      "Tool",
      "Applied"
    ],
    "realWorldExample": "A knowledge bot searches CRM records but cannot delete customers."
  },
  {
    "id": "tool-05",
    "question": "What is a tool timeout?",
    "answer": "A timeout bounds how long a tool call can block workflow progress. The system should distinguish timeout from confirmed failure before retrying.",
    "category": "Tool Integration",
    "difficulty": "Intermediate",
    "tags": [
      "Tool",
      "Applied"
    ],
    "realWorldExample": "A search API stops responding and the agent switches to a fallback."
  },
  {
    "id": "tool-06",
    "question": "What is an exponential backoff retry?",
    "answer": "Backoff increases wait intervals after transient failures, often with jitter to prevent retry storms. Do not blindly retry non-idempotent operations.",
    "category": "Tool Integration",
    "difficulty": "Intermediate",
    "tags": [
      "Tool",
      "Applied"
    ],
    "realWorldExample": "An assistant slows repeated calls after receiving HTTP 429."
  },
  {
    "id": "tool-07",
    "question": "What is OAuth in tool authorization?",
    "answer": "OAuth delegates scoped access to protected APIs without handing the agent the user's password. Tokens still need secure storage and revocation.",
    "category": "Tool Integration",
    "difficulty": "Intermediate",
    "tags": [
      "Tool",
      "Applied"
    ],
    "realWorldExample": "A calendar connector receives permission to read events but not modify them."
  },
  {
    "id": "tool-08",
    "question": "What is an API rate limit?",
    "answer": "A rate limit caps requests or tokens over a time window. Applications need throttling, backpressure, and graceful handling when quotas are reached.",
    "category": "Tool Integration",
    "difficulty": "Advanced",
    "tags": [
      "Tool",
      "Advanced"
    ],
    "realWorldExample": "Many agents share an API key and must coordinate request volume."
  },
  {
    "id": "tool-09",
    "question": "What is a tool result trust boundary?",
    "answer": "Tool output is external data and may be wrong or malicious. Verify authority, sanitize display, and never promote it to higher-priority instructions.",
    "category": "Tool Integration",
    "difficulty": "Advanced",
    "tags": [
      "Tool",
      "Advanced"
    ],
    "realWorldExample": "A fetched webpage cannot authorize a transfer even if it says to."
  },
  {
    "id": "tool-10",
    "question": "What is a compensating action?",
    "answer": "A compensating action attempts to reverse completed side effects in a multi-step workflow. It is needed when a single database transaction cannot cover external tools.",
    "category": "Tool Integration",
    "difficulty": "Advanced",
    "tags": [
      "Tool",
      "Advanced"
    ],
    "realWorldExample": "A canceled trip triggers refunds and notification cleanup."
  },
  {
    "id": "sec-01",
    "question": "What is defense in depth for AI apps?",
    "answer": "Defense in depth combines instruction boundaries, input validation, tool permissions, monitoring, and human approval. No single prompt prevents every failure.",
    "category": "Safety & Security",
    "difficulty": "Beginner",
    "tags": [
      "Safety",
      "Foundations"
    ],
    "realWorldExample": "A finance assistant checks identity, amounts, and transfer approval independently."
  },
  {
    "id": "sec-02",
    "question": "What is prompt injection versus jailbreak?",
    "answer": "Prompt injection uses lower-trust content to hijack instructions; a jailbreak directly tries to evade a model's constraints. Both require layered defenses.",
    "category": "Safety & Security",
    "difficulty": "Beginner",
    "tags": [
      "Safety",
      "Foundations"
    ],
    "realWorldExample": "A webpage injects a fake system message into a browsing agent."
  },
  {
    "id": "sec-03",
    "question": "What is data exfiltration through tools?",
    "answer": "Exfiltration occurs when an agent sends protected information to an unauthorized destination. Restrict destinations, scopes, and outbound payloads.",
    "category": "Safety & Security",
    "difficulty": "Beginner",
    "tags": [
      "Safety",
      "Foundations"
    ],
    "realWorldExample": "A malicious document asks an assistant to email internal files outside the company."
  },
  {
    "id": "sec-04",
    "question": "How does retrieval access control work?",
    "answer": "A retrieval system must enforce each user's document permissions before passages reach the model. Post-generation filtering alone cannot prevent leakage.",
    "category": "Safety & Security",
    "difficulty": "Intermediate",
    "tags": [
      "Safety",
      "Applied"
    ],
    "realWorldExample": "A contractor must not retrieve confidential HR documents from a shared index."
  },
  {
    "id": "sec-05",
    "question": "What is a sandboxed execution environment?",
    "answer": "A sandbox constrains code execution by limiting files, network, privileges, and resources. Isolation reduces blast radius but is not perfect protection.",
    "category": "Safety & Security",
    "difficulty": "Intermediate",
    "tags": [
      "Safety",
      "Applied"
    ],
    "realWorldExample": "A coding agent executes generated scripts in a locked-down container."
  },
  {
    "id": "sec-06",
    "question": "What is secrets management for agents?",
    "answer": "Credentials should stay in a secret store and be injected only into authorized tool execution. Never expose them to prompts, logs, or model output.",
    "category": "Safety & Security",
    "difficulty": "Intermediate",
    "tags": [
      "Safety",
      "Applied"
    ],
    "realWorldExample": "An API tool signs requests without giving the model the raw token."
  },
  {
    "id": "sec-07",
    "question": "What is a data-loss prevention check?",
    "answer": "DLP detects or blocks sensitive information leaving approved boundaries. It should consider tool actions, generated text, and logged traces.",
    "category": "Safety & Security",
    "difficulty": "Intermediate",
    "tags": [
      "Safety",
      "Applied"
    ],
    "realWorldExample": "A customer support bot masks payment details in outbound messages."
  },
  {
    "id": "sec-08",
    "question": "What is a red-team test for an AI system?",
    "answer": "Red-teaming probes realistic misuse, prompt injection, data leaks, and boundary failures. Findings become reproducible regression tests.",
    "category": "Safety & Security",
    "difficulty": "Advanced",
    "tags": [
      "Safety",
      "Advanced"
    ],
    "realWorldExample": "Testers place malicious instructions in retrieved knowledge pages."
  },
  {
    "id": "sec-09",
    "question": "What is an approval boundary?",
    "answer": "An approval boundary requires a trusted human to authorize high-impact actions. Approval must bind the actual arguments, not a vague intent.",
    "category": "Safety & Security",
    "difficulty": "Advanced",
    "tags": [
      "Safety",
      "Advanced"
    ],
    "realWorldExample": "An agent requests sign-off for a specific payment amount and recipient."
  },
  {
    "id": "sec-10",
    "question": "What is safety versus security in AI architecture?",
    "answer": "Safety manages harmful outcomes from system behavior; security protects assets against unauthorized actions. Risks overlap but need distinct controls and tests.",
    "category": "Safety & Security",
    "difficulty": "Advanced",
    "tags": [
      "Safety",
      "Advanced"
    ],
    "realWorldExample": "An assistant checks harmful advice while also protecting private customer data."
  }
];
