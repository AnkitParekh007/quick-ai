import type {Question} from "../types";
export const architectQuestionsC:Question[]=[
  {
    "id": "evald-01",
    "question": "What is an end-to-end AI system evaluation?",
    "answer": "An end-to-end eval tests the entire user task, including retrieval, tools, and final response. It catches failures invisible in isolated model benchmarks.",
    "category": "Evaluation Design",
    "difficulty": "Beginner",
    "tags": [
      "Evaluation",
      "Foundations"
    ],
    "realWorldExample": "A customer service agent is tested from ticket intake to resolution."
  },
  {
    "id": "evald-02",
    "question": "What is a golden evaluation dataset?",
    "answer": "A golden dataset is a curated set of representative inputs with expected outcomes or judgments. It needs versioning, coverage, and periodic updates.",
    "category": "Evaluation Design",
    "difficulty": "Beginner",
    "tags": [
      "Evaluation",
      "Foundations"
    ],
    "realWorldExample": "A bank maintains reviewed examples of compliant support responses."
  },
  {
    "id": "evald-03",
    "question": "What is a regression eval?",
    "answer": "A regression eval ensures previously solved cases remain correct after changes. Run it after prompt, model, tool, or retrieval updates.",
    "category": "Evaluation Design",
    "difficulty": "Beginner",
    "tags": [
      "Evaluation",
      "Foundations"
    ],
    "realWorldExample": "A model upgrade must still answer old policy edge cases accurately."
  },
  {
    "id": "evald-04",
    "question": "What is task success rate?",
    "answer": "Task success rate measures the fraction of attempts that actually complete a user goal. It is more meaningful than output fluency alone.",
    "category": "Evaluation Design",
    "difficulty": "Intermediate",
    "tags": [
      "Evaluation",
      "Applied"
    ],
    "realWorldExample": "An agent is judged on whether it booked the requested meeting correctly."
  },
  {
    "id": "evald-05",
    "question": "What is tool-call accuracy?",
    "answer": "Tool-call accuracy checks selection, arguments, sequencing, and compliance with permissions. A correct final answer can hide bad intermediate actions.",
    "category": "Evaluation Design",
    "difficulty": "Intermediate",
    "tags": [
      "Evaluation",
      "Applied"
    ],
    "realWorldExample": "A refund agent must use the right order ID and approval flow."
  },
  {
    "id": "evald-06",
    "question": "What is groundedness or faithfulness?",
    "answer": "Groundedness measures whether claims in an answer are supported by supplied sources. A plausible statement can still be ungrounded.",
    "category": "Evaluation Design",
    "difficulty": "Intermediate",
    "tags": [
      "Evaluation",
      "Applied"
    ],
    "realWorldExample": "A policy assistant must justify eligibility using retrieved clauses."
  },
  {
    "id": "evald-07",
    "question": "How do you evaluate an agent trajectory?",
    "answer": "Trajectory evaluation inspects intermediate tool calls, decisions, and state transitions, not just final text. It can expose wasted steps or unsafe actions.",
    "category": "Evaluation Design",
    "difficulty": "Intermediate",
    "tags": [
      "Evaluation",
      "Applied"
    ],
    "realWorldExample": "A research agent reaches the answer but visits prohibited domains along the way."
  },
  {
    "id": "evald-08",
    "question": "What is an adversarial evaluation set?",
    "answer": "An adversarial set contains confusing, malicious, or hard inputs designed to stress boundaries. It complements representative everyday data.",
    "category": "Evaluation Design",
    "difficulty": "Advanced",
    "tags": [
      "Evaluation",
      "Advanced"
    ],
    "realWorldExample": "A help desk bot faces ambiguous policy exceptions and injection attempts."
  },
  {
    "id": "evald-09",
    "question": "Why calibrate an LLM judge with humans?",
    "answer": "Model graders can prefer verbose or familiar styles and miss subtle factual errors. Human-labeled samples reveal systematic disagreements.",
    "category": "Evaluation Design",
    "difficulty": "Advanced",
    "tags": [
      "Evaluation",
      "Advanced"
    ],
    "realWorldExample": "Reviewers compare automated scores against audited customer answers."
  },
  {
    "id": "evald-10",
    "question": "What is a quality gate for deployment?",
    "answer": "A quality gate sets explicit pass criteria for accuracy, safety, latency, and regressions. Failed checks block release or trigger rollback.",
    "category": "Evaluation Design",
    "difficulty": "Advanced",
    "tags": [
      "Evaluation",
      "Advanced"
    ],
    "realWorldExample": "A production rollout pauses after groundedness drops below the agreed threshold."
  },
  {
    "id": "obs-01",
    "question": "What is distributed tracing for agents?",
    "answer": "Tracing connects model calls, tool actions, and retrieval steps within one request. It helps debug latency, failure, and cost at each stage.",
    "category": "Observability",
    "difficulty": "Beginner",
    "tags": [
      "Observability",
      "Foundations"
    ],
    "realWorldExample": "An engineer follows a delayed answer to its slow search API."
  },
  {
    "id": "obs-02",
    "question": "What is a span in a trace?",
    "answer": "A span records one timed operation with attributes and parent-child relationships. Combined spans reconstruct a workflow's execution.",
    "category": "Observability",
    "difficulty": "Beginner",
    "tags": [
      "Observability",
      "Foundations"
    ],
    "realWorldExample": "A RAG trace contains query embedding, vector search, rerank, and generation."
  },
  {
    "id": "obs-03",
    "question": "What is an online evaluator?",
    "answer": "An online evaluator scores sampled production interactions or signals after deployment. It helps detect regressions but cannot replace human review.",
    "category": "Observability",
    "difficulty": "Beginner",
    "tags": [
      "Observability",
      "Foundations"
    ],
    "realWorldExample": "A support team flags answers that omit citations in live traffic."
  },
  {
    "id": "obs-04",
    "question": "What should an AI observability dashboard track?",
    "answer": "Track task success, error types, token cost, latency, retrieval quality, and safety incidents. Break metrics down by model, tenant, and workflow.",
    "category": "Observability",
    "difficulty": "Intermediate",
    "tags": [
      "Observability",
      "Applied"
    ],
    "realWorldExample": "A SaaS team compares failures after an agent release."
  },
  {
    "id": "obs-05",
    "question": "What is latency decomposition?",
    "answer": "Latency decomposition assigns total response time to network, retrieval, model inference, and tools. It identifies where optimization matters.",
    "category": "Observability",
    "difficulty": "Intermediate",
    "tags": [
      "Observability",
      "Applied"
    ],
    "realWorldExample": "A slow response is caused by repeated tool calls, not the model."
  },
  {
    "id": "obs-06",
    "question": "What is an annotation queue?",
    "answer": "An annotation queue routes selected outputs to human reviewers for labels or corrections. Those examples can feed better evals and training.",
    "category": "Observability",
    "difficulty": "Intermediate",
    "tags": [
      "Observability",
      "Applied"
    ],
    "realWorldExample": "Support staff review uncertain responses flagged by monitoring."
  },
  {
    "id": "obs-07",
    "question": "What is observability sampling?",
    "answer": "Sampling records only a controlled subset of traces to manage volume and privacy. Rare failures may need targeted or adaptive sampling.",
    "category": "Observability",
    "difficulty": "Intermediate",
    "tags": [
      "Observability",
      "Applied"
    ],
    "realWorldExample": "A platform captures all errors but only a fraction of successful chats."
  },
  {
    "id": "obs-08",
    "question": "How do you log safely in AI systems?",
    "answer": "Log identifiers, errors, metrics, and consented examples while masking secrets and private content. Retention policies and access control matter.",
    "category": "Observability",
    "difficulty": "Advanced",
    "tags": [
      "Observability",
      "Advanced"
    ],
    "realWorldExample": "An agent trace stores tool names without recording raw access tokens."
  },
  {
    "id": "obs-09",
    "question": "What is production feedback drift?",
    "answer": "Feedback drift is a change in user ratings or observed outcomes over time. It may indicate changing tasks, users, or model behavior.",
    "category": "Observability",
    "difficulty": "Advanced",
    "tags": [
      "Observability",
      "Advanced"
    ],
    "realWorldExample": "A support assistant's acceptance rate falls after a new product launch."
  },
  {
    "id": "obs-10",
    "question": "What is a release comparison experiment?",
    "answer": "A/B or canary comparisons expose small groups to alternatives while tracking outcomes and risk. Use guardrail metrics and a rollback path.",
    "category": "Observability",
    "difficulty": "Advanced",
    "tags": [
      "Observability",
      "Advanced"
    ],
    "realWorldExample": "Five percent of customer chats try a new retrieval strategy first."
  },
  {
    "id": "serve-01",
    "question": "What is inference serving?",
    "answer": "Inference serving runs trained models to answer requests with controlled latency, throughput, and availability. It requires capacity, batching, and observability.",
    "category": "Model Serving",
    "difficulty": "Beginner",
    "tags": [
      "Model",
      "Foundations"
    ],
    "realWorldExample": "An API endpoint streams generated text to a customer chat."
  },
  {
    "id": "serve-02",
    "question": "What is prefill versus decode latency?",
    "answer": "Prefill processes input context and builds initial model state. Decode generates output tokens sequentially, so long prompts and long answers stress different stages.",
    "category": "Model Serving",
    "difficulty": "Beginner",
    "tags": [
      "Model",
      "Foundations"
    ],
    "realWorldExample": "A 20-page prompt delays first token; a long essay slows completion."
  },
  {
    "id": "serve-03",
    "question": "What is time to first token (TTFT)?",
    "answer": "TTFT measures how long a user waits for the first generated token. It depends on queuing, prefill, network, and model scheduling.",
    "category": "Model Serving",
    "difficulty": "Beginner",
    "tags": [
      "Model",
      "Foundations"
    ],
    "realWorldExample": "A chatbot feels responsive when streaming starts quickly."
  },
  {
    "id": "serve-04",
    "question": "What is tokens per second?",
    "answer": "Output tokens per second measures generation throughput after decoding begins. Compare it alongside TTFT and total completion time.",
    "category": "Model Serving",
    "difficulty": "Intermediate",
    "tags": [
      "Model",
      "Applied"
    ],
    "realWorldExample": "A code assistant streams a large patch at a measurable rate."
  },
  {
    "id": "serve-05",
    "question": "What is continuous batching?",
    "answer": "Continuous batching admits new requests between decoding steps rather than waiting for a fixed batch to finish. It improves GPU utilization under variable workloads.",
    "category": "Model Serving",
    "difficulty": "Intermediate",
    "tags": [
      "Model",
      "Applied"
    ],
    "realWorldExample": "A shared inference service serves many short and long conversations."
  },
  {
    "id": "serve-06",
    "question": "What is KV-cache memory pressure?",
    "answer": "Long prompts and many concurrent sessions consume attention cache memory. This constrains how many generations fit on one accelerator.",
    "category": "Model Serving",
    "difficulty": "Intermediate",
    "tags": [
      "Model",
      "Applied"
    ],
    "realWorldExample": "Serving slows when dozens of long-context chats share a GPU."
  },
  {
    "id": "serve-07",
    "question": "What is speculative decoding?",
    "answer": "Speculative decoding drafts tokens with a faster model and verifies them with a stronger model. Accepted drafts can reduce latency while preserving the target model's distribution.",
    "category": "Model Serving",
    "difficulty": "Intermediate",
    "tags": [
      "Model",
      "Applied"
    ],
    "realWorldExample": "An inference server accelerates common token sequences with a draft model."
  },
  {
    "id": "serve-08",
    "question": "What is model routing?",
    "answer": "Model routing selects an appropriate model by task complexity, risk, and budget. Routing decisions need evaluation to avoid silent quality loss.",
    "category": "Model Serving",
    "difficulty": "Advanced",
    "tags": [
      "Model",
      "Advanced"
    ],
    "realWorldExample": "A simple labeler uses a small model; complex legal analysis uses a stronger one."
  },
  {
    "id": "serve-09",
    "question": "What is a service-level objective (SLO)?",
    "answer": "An SLO sets a measurable target for availability, latency, or correctness over a period. Error budgets help guide release and reliability decisions.",
    "category": "Model Serving",
    "difficulty": "Advanced",
    "tags": [
      "Model",
      "Advanced"
    ],
    "realWorldExample": "A production agent targets a defined p95 response latency."
  },
  {
    "id": "serve-10",
    "question": "What is graceful degradation for an AI service?",
    "answer": "Graceful degradation retains useful behavior when a model or tool is unavailable. It may use cached content, simpler search, or human escalation.",
    "category": "Model Serving",
    "difficulty": "Advanced",
    "tags": [
      "Model",
      "Advanced"
    ],
    "realWorldExample": "A chatbot falls back to keyword search during a model outage."
  },
  {
    "id": "opt-01",
    "question": "How can prompts affect inference cost?",
    "answer": "Long prompts increase input-token charges and prefill work; verbose outputs increase decode cost. Measure quality before trimming needed context.",
    "category": "Optimization",
    "difficulty": "Beginner",
    "tags": [
      "Optimization",
      "Foundations"
    ],
    "realWorldExample": "A bot summarizes previous messages rather than resending the full chat."
  },
  {
    "id": "opt-02",
    "question": "What is a cost-quality-latency tradeoff?",
    "answer": "Improving one objective can worsen another; stronger models may cost more or respond slower. Choose operating points using eval results and business constraints.",
    "category": "Optimization",
    "difficulty": "Beginner",
    "tags": [
      "Optimization",
      "Foundations"
    ],
    "realWorldExample": "A help desk routes easy queries to a faster model."
  },
  {
    "id": "opt-03",
    "question": "What is caching for LLM applications?",
    "answer": "Caching reuses safe, equivalent responses or intermediate results to reduce work. Keys must account for user permissions and changing underlying data.",
    "category": "Optimization",
    "difficulty": "Beginner",
    "tags": [
      "Optimization",
      "Foundations"
    ],
    "realWorldExample": "An FAQ response cache is invalidated after policy updates."
  },
  {
    "id": "opt-04",
    "question": "When should you batch requests?",
    "answer": "Batching improves throughput when many independent tasks can tolerate extra waiting. It is poor for highly interactive, low-latency experiences.",
    "category": "Optimization",
    "difficulty": "Intermediate",
    "tags": [
      "Optimization",
      "Applied"
    ],
    "realWorldExample": "A nightly document classification job processes files in groups."
  },
  {
    "id": "opt-05",
    "question": "What is token budgeting?",
    "answer": "Token budgeting allocates context and output limits across prompts, retrieval, tools, and summaries. It prevents truncation and surprise spending.",
    "category": "Optimization",
    "difficulty": "Intermediate",
    "tags": [
      "Optimization",
      "Applied"
    ],
    "realWorldExample": "An agent reserves output tokens before appending search results."
  },
  {
    "id": "opt-06",
    "question": "Why limit agent steps?",
    "answer": "Step limits cap runaway loops, tool fees, and unpredictable execution time. Pair them with stop reasons and useful partial answers.",
    "category": "Optimization",
    "difficulty": "Intermediate",
    "tags": [
      "Optimization",
      "Applied"
    ],
    "realWorldExample": "A research assistant stops after a maximum number of searches."
  },
  {
    "id": "opt-07",
    "question": "What is performance profiling in RAG?",
    "answer": "Profile ingestion, embeddings, search, reranking, and generation separately. Optimize whichever stage dominates total time or cost.",
    "category": "Optimization",
    "difficulty": "Intermediate",
    "tags": [
      "Optimization",
      "Applied"
    ],
    "realWorldExample": "A search bot speeds up by eliminating redundant reranker calls."
  },
  {
    "id": "opt-08",
    "question": "What is an adaptive model cascade?",
    "answer": "A cascade attempts a cheaper model first and escalates uncertain cases. Confidence or verification gates must be tested for false acceptance.",
    "category": "Optimization",
    "difficulty": "Advanced",
    "tags": [
      "Optimization",
      "Advanced"
    ],
    "realWorldExample": "An assistant escalates ambiguous finance requests to a stronger model."
  },
  {
    "id": "opt-09",
    "question": "How does compression change retrieval quality?",
    "answer": "Smaller chunks or compressed evidence reduce tokens but may drop key exceptions. Evaluate answer faithfulness when compressing context.",
    "category": "Optimization",
    "difficulty": "Advanced",
    "tags": [
      "Optimization",
      "Advanced"
    ],
    "realWorldExample": "A legal clause loses a critical exception when shortened."
  },
  {
    "id": "opt-10",
    "question": "What is autoscaling for inference?",
    "answer": "Autoscaling adjusts serving replicas or capacity to workload demand. GPU startup time and cold starts make it harder than typical stateless web scaling.",
    "category": "Optimization",
    "difficulty": "Advanced",
    "tags": [
      "Optimization",
      "Advanced"
    ],
    "realWorldExample": "A support bot increases model replicas during business hours."
  }
];
