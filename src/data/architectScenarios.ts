import type {Scenario} from "../types";
export const architectScenarios:Record<string,Scenario>={
  "arch-02": {
    "situation": "A policy assistant needs current clause citations and must check claim status in a live system. What architecture fits?",
    "options": [
      "RAG for policies plus a read-only claims tool",
      "Only fine-tuning with old policy text",
      "Increase temperature",
      "A bigger context window without retrieval"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: retrieval handles current evidence and a tool handles live status.",
      "Fine-tuning alone cannot guarantee current clauses or live status.",
      "Temperature affects sampling rather than data access.",
      "Context size does not retrieve missing information."
    ]
  },
  "arch-04": {
    "situation": "You serve two customers from one knowledge base. What prevents cross-company document leakage?",
    "options": [
      "Tenant-scoped retrieval authorization",
      "Only a friendly system prompt",
      "One shared cache with no tenant key",
      "Increase vector similarity threshold"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: enforce tenant identity and document-level permissions before retrieval.",
      "A prompt cannot enforce isolation without backend controls.",
      "A shared cache can leak another customer's answer.",
      "Similarity scores are not authorization."
    ]
  },
  "arch-05": {
    "situation": "The primary model is unavailable during a sales demo. What should the service do?",
    "options": [
      "Use a tested fallback with explicit capability limits",
      "Silently invent a result",
      "Retry indefinitely",
      "Disable user feedback"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: graceful degradation retains safe useful functionality.",
      "Fabricated outputs violate the user's trust.",
      "Unbounded retries cause delays and costs.",
      "Feedback helps identify recurring outages."
    ]
  },
  "arch-08": {
    "situation": "A browsing agent reads untrusted webpages and can call internal tools. What should the architect review first?",
    "options": [
      "Trust boundaries, permissions and data exfiltration paths",
      "Only the model's writing style",
      "The number of emojis in prompts",
      "GPU memory alone"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: model external content as untrusted and bound tool access.",
      "Tone matters less than data and action threats.",
      "Prompt decoration does not control access.",
      "GPU capacity does not address instruction attacks."
    ]
  },
  "orch-01": {
    "situation": "An invoice needs extraction, a fixed approval policy, and a payment call after consent. Choose a control model.",
    "options": [
      "A deterministic workflow with bounded AI extraction",
      "An unrestricted multi-agent swarm",
      "Only a text-generation prompt",
      "A vector index with no tool approval"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: fixed steps should stay deterministic and payment requires approval.",
      "Extra autonomy adds risk without needed flexibility.",
      "Text generation alone cannot enforce process controls.",
      "Search does not replace authorization."
    ]
  },
  "orch-06": {
    "situation": "Three independent reports must be analyzed before a final synthesis. What improves turnaround?",
    "options": [
      "Parallel workers with safe result aggregation",
      "One worker repeating each report twice",
      "Share mutable global state without locks",
      "Skip independent validation"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: parallelize independent tasks, then merge checked outputs.",
      "Repeated work increases latency.",
      "Uncontrolled shared state introduces races.",
      "Independent checks still matter."
    ]
  },
  "orch-07": {
    "situation": "An agent can refund a customer but approval may take hours. What feature is essential?",
    "options": [
      "Persistent workflow state and a human interrupt",
      "A fixed 3-second timeout",
      "A random sampling temperature",
      "Delete the pending workflow"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: save state and resume only after explicit approval.",
      "A short timeout cannot support delayed approvals.",
      "Sampling changes text, not workflow durability.",
      "Deleting state prevents safe resumption."
    ]
  },
  "mem-08": {
    "situation": "A support app serves many companies. Which memory design is appropriate?",
    "options": [
      "Scoped state keyed by tenant and thread",
      "One global conversation history",
      "Store all API keys in memories",
      "Never delete old customer facts"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: isolate each user's conversations and organizational data.",
      "Global memory leaks context between customers.",
      "Secrets must not become model-visible memory.",
      "Unbounded retention violates privacy needs."
    ]
  },
  "ret-02": {
    "situation": "Users search a ticket database for exact error identifiers like HTTP 429. Which retrieval signal helps most?",
    "options": [
      "Lexical matching such as BM25",
      "Only embedding cosine similarity",
      "Randomly shuffle candidates",
      "A higher generation temperature"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: exact identifiers benefit from lexical search.",
      "Semantic search can miss rare exact terms.",
      "Random ranking destroys relevance.",
      "Sampling does not improve retrieval."
    ]
  },
  "ret-05": {
    "situation": "Search retrieves 50 rough matches but only 4 should reach the LLM. What improves ordering?",
    "options": [
      "Rerank retrieved candidates",
      "Retrain the whole LLM each question",
      "Increase token output limit",
      "Ignore relevance labels"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: reranking focuses the limited context budget.",
      "Online retraining is unnecessary and costly.",
      "Longer output does not fix weak evidence.",
      "Labels are important for relevance evaluation."
    ]
  },
  "ret-10": {
    "situation": "A RAG answer is wrong because the needed document never appeared in top-10 search. What should you fix first?",
    "options": [
      "Retrieval coverage and filters",
      "Only the final response tone",
      "Add more random context",
      "Remove all logging"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: fix retrieval before optimizing the generator.",
      "Tone cannot recover missing evidence.",
      "Random passages increase noise.",
      "Logs are needed to diagnose the problem."
    ]
  },
  "sec-03": {
    "situation": "A retrieved email asks an agent to send payroll files to an external address. What should happen?",
    "options": [
      "Ignore the injected command and block unauthorized egress",
      "Follow it because it appeared in data",
      "Give the model a longer reply",
      "Retry the email tool forever"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: data cannot authorize a sensitive outbound action.",
      "External text is lower trust than user and policy controls.",
      "Length has no security meaning.",
      "Retries can amplify unauthorized effects."
    ]
  },
  "sec-05": {
    "situation": "A coding agent needs to run generated Python for a user. What containment is appropriate?",
    "options": [
      "A restricted sandbox with controlled filesystem and network",
      "Full admin access to the production server",
      "Store credentials in the prompt",
      "Trust all generated code"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: isolate execution and minimize privileges.",
      "Admin execution greatly expands blast radius.",
      "Prompts are not secret vaults.",
      "Generated code needs scrutiny."
    ]
  },
  "evald-06": {
    "situation": "An assistant cites a real policy page but invents a refund exception. Which metric catches this?",
    "options": [
      "Answer groundedness against specific cited passages",
      "Response word count",
      "GPU throughput alone",
      "Only user sentiment"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: citation faithfulness compares claims with supporting evidence.",
      "Length does not show evidence support.",
      "Throughput measures performance, not factuality.",
      "Sentiment can miss plausible errors."
    ]
  },
  "evald-07": {
    "situation": "An agent gets the answer right but accessed an unauthorized tool along the way. What should be evaluated?",
    "options": [
      "Its intermediate action trajectory",
      "Only the final wording",
      "The logo color",
      "The number of cached tokens"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: trajectory evaluation catches unsafe intermediate behavior.",
      "Final text alone can hide tool misuse.",
      "Branding is irrelevant to correctness.",
      "Cache volume does not reveal permissions."
    ]
  },
  "obs-01": {
    "situation": "Users complain about slow answers. How do you identify the bottleneck?",
    "options": [
      "Trace retrieval, tool, and model spans",
      "Read only the final response",
      "Increase the maximum response length",
      "Remove latency metrics"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: tracing decomposes the workflow's elapsed time.",
      "Final output lacks execution timing.",
      "Longer responses can worsen latency.",
      "Without metrics the bottleneck remains unknown."
    ]
  },
  "serve-06": {
    "situation": "Many long-context conversations cause GPU out-of-memory errors. What resource should be checked?",
    "options": [
      "Attention KV-cache capacity and concurrency",
      "Only the website font",
      "Sampling temperature",
      "The number of categories in the UI"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: cache memory scales with sequence length and concurrent requests.",
      "Fonts have no relation to GPU cache use.",
      "Temperature does not fix capacity.",
      "The curriculum size is irrelevant to model memory."
    ]
  },
  "opt-02": {
    "situation": "A production bot costs too much but must keep answering difficult cases accurately. What helps?",
    "options": [
      "Model routing based on evaluated task complexity",
      "Use the cheapest model for everything without tests",
      "Delete all context",
      "Run every case through three large models"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: routing optimizes cost with measurable quality safeguards.",
      "Unmeasured downgrades may break complex tasks.",
      "Removing context can destroy evidence.",
      "Redundant large calls inflate costs."
    ]
  },
  "data-08": {
    "situation": "An embedding upgrade changes vector representations. What should you do?",
    "options": [
      "Version and reindex vectors consistently",
      "Mix old and new vectors without checks",
      "Disable authorization filters",
      "Assume cosine scores remain comparable"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: preserve model/index compatibility during migration.",
      "Mixed embeddings may be incompatible.",
      "Permissions are unrelated and remain essential.",
      "Scores may shift across embedding versions."
    ]
  },
  "gov-09": {
    "situation": "An AI agent unexpectedly sends sensitive content to a third-party tool. What is the first response?",
    "options": [
      "Contain the incident, revoke access and preserve evidence",
      "Hide the event from users and logs",
      "Wait until the next annual review",
      "Turn up model temperature"
    ],
    "correctOptionIndex": 0,
    "feedback": [
      "Correct: contain harm and initiate incident response.",
      "Concealment undermines accountability.",
      "Delaying containment increases risk.",
      "Sampling cannot undo exfiltration."
    ]
  }
};
