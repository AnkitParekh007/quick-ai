import type {Question} from "../types";
export const architectQuestionsE:Question[]=[
  {
    "id": "llm-06",
    "question": "What is top-p sampling?",
    "answer": "Top-p restricts token sampling to the smallest set whose probabilities reach a chosen threshold. It changes diversity, not factual grounding.",
    "category": "LLMs",
    "difficulty": "Intermediate",
    "tags": [
      "LLMs",
      "Architect"
    ],
    "realWorldExample": "A production llms system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "llm-07",
    "question": "What is a base model versus a chat model?",
    "answer": "A base model completes text patterns; a chat model is tuned for instructions and dialog. Neither guarantees factual accuracy.",
    "category": "LLMs",
    "difficulty": "Advanced",
    "tags": [
      "LLMs",
      "Architect"
    ],
    "realWorldExample": "A production llms system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "llm-08",
    "question": "Does a larger context window mean more knowledge?",
    "answer": "No. Context length limits usable input, while knowledge comes from learned patterns and external evidence. Current facts still need retrieval.",
    "category": "LLMs",
    "difficulty": "Advanced",
    "tags": [
      "LLMs",
      "Architect"
    ],
    "realWorldExample": "A production llms system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "llm-09",
    "question": "What is a model snapshot?",
    "answer": "A snapshot identifies a particular model version. Pin versions and run regression evaluations before upgrading production.",
    "category": "LLMs",
    "difficulty": "Advanced",
    "tags": [
      "LLMs",
      "Architect"
    ],
    "realWorldExample": "A production llms system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "llm-10",
    "question": "What is tool-augmented reasoning?",
    "answer": "A model coordinates external tools to fetch facts, compute, or act. Tool results still need validation and permission checks.",
    "category": "LLMs",
    "difficulty": "Advanced",
    "tags": [
      "LLMs",
      "Architect"
    ],
    "realWorldExample": "A production llms system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "agent-05",
    "question": "When use one agent instead of many?",
    "answer": "Start with one agent unless independent specialties or parallel work justify more. Multiple agents add context-transfer and orchestration costs.",
    "category": "Agents",
    "difficulty": "Intermediate",
    "tags": [
      "Agents",
      "Architect"
    ],
    "realWorldExample": "A production agents system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "agent-06",
    "question": "What is planner–executor architecture?",
    "answer": "A planner decomposes a goal; an executor carries out bounded steps and reports results. Update the plan after unexpected outcomes.",
    "category": "Agents",
    "difficulty": "Advanced",
    "tags": [
      "Agents",
      "Architect"
    ],
    "realWorldExample": "A production agents system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "agent-07",
    "question": "How do you detect an agent loop?",
    "answer": "Track repeated states and actions without progress. Step budgets and termination criteria keep the workflow bounded.",
    "category": "Agents",
    "difficulty": "Advanced",
    "tags": [
      "Agents",
      "Architect"
    ],
    "realWorldExample": "A production agents system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "agent-08",
    "question": "What is agent action verification?",
    "answer": "Verify the real effect of a tool action, not only the HTTP status. This matters especially for high-impact or irreversible operations.",
    "category": "Agents",
    "difficulty": "Advanced",
    "tags": [
      "Agents",
      "Architect"
    ],
    "realWorldExample": "A production agents system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "agent-09",
    "question": "What is autonomy budgeting?",
    "answer": "Set limits on tool calls, spending, time, permissions, and risk. Require human approval when boundaries are reached.",
    "category": "Agents",
    "difficulty": "Advanced",
    "tags": [
      "Agents",
      "Architect"
    ],
    "realWorldExample": "A production agents system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "rag-05",
    "question": "What is retrieval recall at k?",
    "answer": "Recall@k measures how much relevant evidence appears in the top k retrieved items. It evaluates search coverage separately from generation.",
    "category": "RAG",
    "difficulty": "Intermediate",
    "tags": [
      "RAG",
      "Architect"
    ],
    "realWorldExample": "A production rag system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "rag-06",
    "question": "What is citation verification?",
    "answer": "Citation checks confirm that referenced sources support each claim. A link to a real document is not proof by itself.",
    "category": "RAG",
    "difficulty": "Advanced",
    "tags": [
      "RAG",
      "Architect"
    ],
    "realWorldExample": "A production rag system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "rag-07",
    "question": "What is freshness-aware retrieval?",
    "answer": "Rank and filter documents using authority, timestamps, and versions as well as relevance. This prevents outdated policies from dominating search.",
    "category": "RAG",
    "difficulty": "Advanced",
    "tags": [
      "RAG",
      "Architect"
    ],
    "realWorldExample": "A production rag system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "rag-08",
    "question": "What is a retrieval failure taxonomy?",
    "answer": "Separate ingestion, filtering, query rewrite, ranking, and generation failures. Each requires different diagnostics and corrections.",
    "category": "RAG",
    "difficulty": "Advanced",
    "tags": [
      "RAG",
      "Architect"
    ],
    "realWorldExample": "A production rag system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "rag-09",
    "question": "What is GraphRAG?",
    "answer": "GraphRAG uses relationships among entities or graph-derived context during retrieval and generation. It helps some multi-hop tasks but adds maintenance cost.",
    "category": "RAG",
    "difficulty": "Advanced",
    "tags": [
      "RAG",
      "Architect"
    ],
    "realWorldExample": "A production rag system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "mcp-05",
    "question": "What are MCP tools, resources, and prompts?",
    "answer": "Tools are callable capabilities, resources provide contextual data, and prompts offer reusable templates. An MCP server may expose any combination.",
    "category": "MCP",
    "difficulty": "Intermediate",
    "tags": [
      "MCP",
      "Architect"
    ],
    "realWorldExample": "A production mcp system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "mcp-06",
    "question": "What is MCP capability negotiation?",
    "answer": "Participants declare supported capabilities during initialization. Clients must not assume every optional feature exists.",
    "category": "MCP",
    "difficulty": "Advanced",
    "tags": [
      "MCP",
      "Architect"
    ],
    "realWorldExample": "A production mcp system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "mcp-07",
    "question": "What does an MCP client do?",
    "answer": "An MCP client maintains a protocol connection with a server and exchanges requests. The host coordinates the broader application.",
    "category": "MCP",
    "difficulty": "Advanced",
    "tags": [
      "MCP",
      "Architect"
    ],
    "realWorldExample": "A production mcp system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "mcp-08",
    "question": "What is remote MCP security risk?",
    "answer": "A remote server introduces network, identity, and data-leakage threats. Enforce authentication, scopes, validation, and consent.",
    "category": "MCP",
    "difficulty": "Advanced",
    "tags": [
      "MCP",
      "Architect"
    ],
    "realWorldExample": "A production mcp system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "mcp-09",
    "question": "When choose MCP over a direct API?",
    "answer": "Use MCP to standardize tool discovery across compatible hosts. Direct APIs may be simpler for a fixed operation; both require security controls.",
    "category": "MCP",
    "difficulty": "Advanced",
    "tags": [
      "MCP",
      "Architect"
    ],
    "realWorldExample": "A production mcp system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "prompt-05",
    "question": "How does instruction hierarchy protect AI applications?",
    "answer": "Higher-priority application rules constrain user requests, while retrieved content remains untrusted evidence. Recency does not grant authority.",
    "category": "Prompting",
    "difficulty": "Intermediate",
    "tags": [
      "Prompting",
      "Architect"
    ],
    "realWorldExample": "A production prompting system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "prompt-06",
    "question": "What is prompt chaining?",
    "answer": "Chaining splits complex work into smaller calls with explicit intermediate outputs. It improves control but adds latency and failure points.",
    "category": "Prompting",
    "difficulty": "Advanced",
    "tags": [
      "Prompting",
      "Architect"
    ],
    "realWorldExample": "A production prompting system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "prompt-07",
    "question": "What is a prompt template?",
    "answer": "A prompt template defines reusable instructions and typed placeholders. Treat interpolated outside content as untrusted.",
    "category": "Prompting",
    "difficulty": "Advanced",
    "tags": [
      "Prompting",
      "Architect"
    ],
    "realWorldExample": "A production prompting system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "prompt-08",
    "question": "Why can negative-only prompts be weak?",
    "answer": "Long lists of prohibitions are often hard to test and ambiguous. Use clear positive requirements, examples, and evals.",
    "category": "Prompting",
    "difficulty": "Advanced",
    "tags": [
      "Prompting",
      "Architect"
    ],
    "realWorldExample": "A production prompting system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "prompt-09",
    "question": "Why validate structured model output?",
    "answer": "Validate types, required fields, and domain rules before passing output to tools. Syntactically valid JSON can still be unsafe.",
    "category": "Prompting",
    "difficulty": "Advanced",
    "tags": [
      "Prompting",
      "Architect"
    ],
    "realWorldExample": "A production prompting system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "eval-05",
    "question": "What is a human evaluation rubric?",
    "answer": "A rubric defines clear dimensions such as correctness, tone, and safety. It improves review consistency and calibration.",
    "category": "Evaluation",
    "difficulty": "Intermediate",
    "tags": [
      "Evaluation",
      "Architect"
    ],
    "realWorldExample": "A production evaluation system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "eval-06",
    "question": "What is pass@k?",
    "answer": "Pass@k estimates whether at least one of k sampled attempts passes a defined test. Interpretation depends on sampling and task design.",
    "category": "Evaluation",
    "difficulty": "Advanced",
    "tags": [
      "Evaluation",
      "Architect"
    ],
    "realWorldExample": "A production evaluation system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "eval-07",
    "question": "What is an evaluation slice?",
    "answer": "A slice isolates examples by language, task type, or risk group. Overall averages can hide serious failures within slices.",
    "category": "Evaluation",
    "difficulty": "Advanced",
    "tags": [
      "Evaluation",
      "Architect"
    ],
    "realWorldExample": "A production evaluation system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "eval-08",
    "question": "What is evaluation contamination?",
    "answer": "Contamination happens when test cases influence training or tuning. It inflates measured performance on supposedly unseen cases.",
    "category": "Evaluation",
    "difficulty": "Advanced",
    "tags": [
      "Evaluation",
      "Architect"
    ],
    "realWorldExample": "A production evaluation system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "eval-09",
    "question": "What is offline versus online evaluation?",
    "answer": "Offline evaluation tests curated cases before launch; online evaluation monitors real-world behavior. Both catch different failures.",
    "category": "Evaluation",
    "difficulty": "Advanced",
    "tags": [
      "Evaluation",
      "Architect"
    ],
    "realWorldExample": "A production evaluation system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "tr-05",
    "question": "What are queries, keys, and values?",
    "answer": "Attention transforms token states into query, key, and value vectors. Query–key scores weight the value information combined at each position.",
    "category": "Transformers",
    "difficulty": "Intermediate",
    "tags": [
      "Transformers",
      "Architect"
    ],
    "realWorldExample": "A production transformers system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "tr-06",
    "question": "What is causal masking?",
    "answer": "A causal mask blocks a decoder token from attending to future tokens. It preserves next-token prediction behavior.",
    "category": "Transformers",
    "difficulty": "Advanced",
    "tags": [
      "Transformers",
      "Architect"
    ],
    "realWorldExample": "A production transformers system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "tr-07",
    "question": "What is multi-head attention?",
    "answer": "Multiple attention heads compute parallel context-weighting patterns. Their individual functions are not always human-interpretable.",
    "category": "Transformers",
    "difficulty": "Advanced",
    "tags": [
      "Transformers",
      "Architect"
    ],
    "realWorldExample": "A production transformers system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "tr-08",
    "question": "What is RoPE?",
    "answer": "Rotary positional embeddings inject relative position structure through rotations in attention space. Long-context extrapolation needs testing.",
    "category": "Transformers",
    "difficulty": "Advanced",
    "tags": [
      "Transformers",
      "Architect"
    ],
    "realWorldExample": "A production transformers system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "tr-09",
    "question": "Why is full attention costly on long context?",
    "answer": "Standard attention computes pairwise interactions that grow roughly quadratically with sequence length. Efficient alternatives introduce tradeoffs.",
    "category": "Transformers",
    "difficulty": "Advanced",
    "tags": [
      "Transformers",
      "Architect"
    ],
    "realWorldExample": "A production transformers system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "ft-05",
    "question": "What is QLoRA?",
    "answer": "QLoRA pairs quantized frozen base weights with trainable low-rank adapters. It lowers memory use but still needs evaluation.",
    "category": "Fine-tuning",
    "difficulty": "Intermediate",
    "tags": [
      "Fine-tuning",
      "Architect"
    ],
    "realWorldExample": "A production fine-tuning system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "ft-06",
    "question": "What is catastrophic forgetting?",
    "answer": "Adaptation can damage previously learned capabilities. Evaluate regressions and use diverse examples or regularization.",
    "category": "Fine-tuning",
    "difficulty": "Advanced",
    "tags": [
      "Fine-tuning",
      "Architect"
    ],
    "realWorldExample": "A production fine-tuning system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "ft-07",
    "question": "What is a preference dataset?",
    "answer": "Preference examples indicate which of two responses is better for a prompt. Inconsistent criteria can distort optimization.",
    "category": "Fine-tuning",
    "difficulty": "Advanced",
    "tags": [
      "Fine-tuning",
      "Architect"
    ],
    "realWorldExample": "A production fine-tuning system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "ft-08",
    "question": "What is adapter merging?",
    "answer": "Merging integrates compatible trained adapters into model parameters. Validate accuracy and behavior after the merge.",
    "category": "Fine-tuning",
    "difficulty": "Advanced",
    "tags": [
      "Fine-tuning",
      "Architect"
    ],
    "realWorldExample": "A production fine-tuning system uses this concept when designing reliable AI workflows."
  },
  {
    "id": "ft-09",
    "question": "How do you validate fine-tuning?",
    "answer": "Compare against a baseline on held-out quality, safety, and regression tests. Measure serving cost and latency too.",
    "category": "Fine-tuning",
    "difficulty": "Advanced",
    "tags": [
      "Fine-tuning",
      "Architect"
    ],
    "realWorldExample": "A production fine-tuning system uses this concept when designing reliable AI workflows."
  }
];
