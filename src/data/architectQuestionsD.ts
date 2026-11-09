import type {Question} from "../types";
export const architectQuestionsD:Question[]=[
  {
    "id": "multi-01",
    "question": "What is a multimodal model?",
    "answer": "A multimodal model processes or generates more than one modality, such as text, images, audio, or video. Models differ in which modalities they accept and produce.",
    "category": "Multimodal AI",
    "difficulty": "Beginner",
    "tags": [
      "Multimodal",
      "Foundations"
    ],
    "realWorldExample": "A user asks an assistant to summarize a photo and an audio note."
  },
  {
    "id": "multi-02",
    "question": "What is OCR versus document understanding?",
    "answer": "OCR extracts visible text from images, while document understanding interprets layout, tables, and meaning. Text accuracy alone does not guarantee correct field extraction.",
    "category": "Multimodal AI",
    "difficulty": "Beginner",
    "tags": [
      "Multimodal",
      "Foundations"
    ],
    "realWorldExample": "An expense app reads both a receipt total and its merchant name."
  },
  {
    "id": "multi-03",
    "question": "What is a vision-language model?",
    "answer": "A vision-language model combines image information with text instructions or output. It can answer visual questions but may misread fine detail or spatial relationships.",
    "category": "Multimodal AI",
    "difficulty": "Beginner",
    "tags": [
      "Multimodal",
      "Foundations"
    ],
    "realWorldExample": "A maintenance worker asks what a machine-panel indicator shows."
  },
  {
    "id": "multi-04",
    "question": "What is speech-to-text?",
    "answer": "Speech-to-text maps audio signals to a transcript. Robust systems handle accents, noise, speaker changes, and privacy requirements.",
    "category": "Multimodal AI",
    "difficulty": "Intermediate",
    "tags": [
      "Multimodal",
      "Applied"
    ],
    "realWorldExample": "A meeting assistant transcribes participants' speech."
  },
  {
    "id": "multi-05",
    "question": "What is text-to-speech?",
    "answer": "Text-to-speech synthesizes spoken audio from text. Naturalness, latency, speaker identity, and consent shape product design.",
    "category": "Multimodal AI",
    "difficulty": "Intermediate",
    "tags": [
      "Multimodal",
      "Applied"
    ],
    "realWorldExample": "An accessibility app reads an AI-generated answer aloud."
  },
  {
    "id": "multi-06",
    "question": "What is speaker diarization?",
    "answer": "Diarization estimates who spoke when in an audio recording. It is different from identifying a person's real-world identity.",
    "category": "Multimodal AI",
    "difficulty": "Intermediate",
    "tags": [
      "Multimodal",
      "Applied"
    ],
    "realWorldExample": "A meeting transcript labels Speaker A and Speaker B."
  },
  {
    "id": "multi-07",
    "question": "What is multimodal retrieval?",
    "answer": "Multimodal retrieval searches across formats using aligned representations, captions, or modality-specific indexes. Results need evaluation for each media type.",
    "category": "Multimodal AI",
    "difficulty": "Intermediate",
    "tags": [
      "Multimodal",
      "Applied"
    ],
    "realWorldExample": "A training portal finds relevant video clips from text questions."
  },
  {
    "id": "multi-08",
    "question": "What is temporal grounding in video?",
    "answer": "Temporal grounding locates moments in a video that match an event or query. It requires time-aware evidence rather than one frame summary.",
    "category": "Multimodal AI",
    "difficulty": "Advanced",
    "tags": [
      "Multimodal",
      "Advanced"
    ],
    "realWorldExample": "A warehouse tool finds when a package fell from a conveyor."
  },
  {
    "id": "multi-09",
    "question": "What are latency challenges in real-time voice agents?",
    "answer": "Voice agents balance speech recognition, reasoning, tool calls, and speech generation. Interruptions and turn-taking demand tight latency budgets.",
    "category": "Multimodal AI",
    "difficulty": "Advanced",
    "tags": [
      "Multimodal",
      "Advanced"
    ],
    "realWorldExample": "A phone support assistant responds without long silent pauses."
  },
  {
    "id": "multi-10",
    "question": "What is an accessibility-first multimodal design?",
    "answer": "Provide captions, transcripts, alt text, and keyboard alternatives for generated media. Never make essential meaning depend on audio or visual effects alone.",
    "category": "Multimodal AI",
    "difficulty": "Advanced",
    "tags": [
      "Multimodal",
      "Advanced"
    ],
    "realWorldExample": "A study app shows the same explanation as text and spoken audio."
  },
  {
    "id": "data-01",
    "question": "What is an ingestion pipeline for RAG?",
    "answer": "An ingestion pipeline collects, cleans, segments, and indexes source documents. It should retain provenance and support incremental updates.",
    "category": "Data Engineering",
    "difficulty": "Beginner",
    "tags": [
      "Data",
      "Foundations"
    ],
    "realWorldExample": "A workplace knowledge assistant ingests updated PDFs nightly."
  },
  {
    "id": "data-02",
    "question": "What is document provenance?",
    "answer": "Provenance records where information came from, its version, and relevant timestamps. It enables citations, audits, and freshness decisions.",
    "category": "Data Engineering",
    "difficulty": "Beginner",
    "tags": [
      "Data",
      "Foundations"
    ],
    "realWorldExample": "An answer cites a policy file revision rather than a generic web page."
  },
  {
    "id": "data-03",
    "question": "What is data deduplication?",
    "answer": "Deduplication removes repeated or near-identical records to reduce bias, index bloat, and retrieval redundancy. Keep an audit trail of merged sources.",
    "category": "Data Engineering",
    "difficulty": "Beginner",
    "tags": [
      "Data",
      "Foundations"
    ],
    "realWorldExample": "A knowledge base stops indexing the same manual under five filenames."
  },
  {
    "id": "data-04",
    "question": "What is an ETL or ELT pipeline?",
    "answer": "ETL transforms before loading; ELT loads raw data before transforming in the target platform. Choice depends on governance, compute, and data quality.",
    "category": "Data Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Data",
      "Applied"
    ],
    "realWorldExample": "A product team prepares search documents from CRM exports."
  },
  {
    "id": "data-05",
    "question": "What is incremental indexing?",
    "answer": "Incremental indexing updates only added, changed, or deleted records rather than rebuilding everything. Version tracking prevents stale results.",
    "category": "Data Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Data",
      "Applied"
    ],
    "realWorldExample": "A wiki page edit changes only its affected document chunks."
  },
  {
    "id": "data-06",
    "question": "What is a vector database?",
    "answer": "A vector database indexes embeddings for approximate or exact similarity queries. Metadata filters and permissions remain necessary.",
    "category": "Data Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Data",
      "Applied"
    ],
    "realWorldExample": "A service searches related support incidents by semantic similarity."
  },
  {
    "id": "data-07",
    "question": "What is approximate nearest-neighbor search?",
    "answer": "ANN methods trade exactness for faster vector search at scale. Tune index parameters for recall, latency, and memory.",
    "category": "Data Engineering",
    "difficulty": "Intermediate",
    "tags": [
      "Data",
      "Applied"
    ],
    "realWorldExample": "Millions of embeddings are searched in milliseconds with some recall tradeoff."
  },
  {
    "id": "data-08",
    "question": "What is embedding drift?",
    "answer": "Embedding drift arises when model versions or domain changes alter representations. Reindexing and compatibility checks may be necessary.",
    "category": "Data Engineering",
    "difficulty": "Advanced",
    "tags": [
      "Data",
      "Advanced"
    ],
    "realWorldExample": "A search upgrade mixes incompatible old and new vectors."
  },
  {
    "id": "data-09",
    "question": "What is an embedding pipeline version?",
    "answer": "An embedding pipeline version identifies model, preprocessing, and chunking configuration. It ensures query and document vectors remain compatible.",
    "category": "Data Engineering",
    "difficulty": "Advanced",
    "tags": [
      "Data",
      "Advanced"
    ],
    "realWorldExample": "A catalog stores embedding version alongside each index collection."
  },
  {
    "id": "data-10",
    "question": "What is data retention in an AI pipeline?",
    "answer": "Retention defines how long raw documents, embeddings, prompts, and logs remain stored. Apply deletion and access rules to every derived copy.",
    "category": "Data Engineering",
    "difficulty": "Advanced",
    "tags": [
      "Data",
      "Advanced"
    ],
    "realWorldExample": "A customer deletion request removes indexed passages and related cached data."
  },
  {
    "id": "arch-01",
    "question": "What belongs in an AI system architecture diagram?",
    "answer": "Show clients, orchestration, models, retrieval, tools, data stores, trust boundaries, and monitoring. Label data flows and approval gates.",
    "category": "System Architecture",
    "difficulty": "Beginner",
    "tags": [
      "System",
      "Foundations"
    ],
    "realWorldExample": "An architecture review maps a support copilot from login to audit logs."
  },
  {
    "id": "arch-02",
    "question": "How do you choose RAG, fine-tuning, or tools?",
    "answer": "Use retrieval for current knowledge, fine-tuning for learned behavior, and tools for live actions. Many applications need combinations, selected through evals.",
    "category": "System Architecture",
    "difficulty": "Beginner",
    "tags": [
      "System",
      "Foundations"
    ],
    "realWorldExample": "An insurance assistant retrieves policy text and calls a claim-status API."
  },
  {
    "id": "arch-03",
    "question": "What is a nonfunctional requirement for AI?",
    "answer": "Nonfunctional requirements define latency, availability, privacy, cost, maintainability, and observability. They constrain architecture choices beyond answer quality.",
    "category": "System Architecture",
    "difficulty": "Beginner",
    "tags": [
      "System",
      "Foundations"
    ],
    "realWorldExample": "An enterprise copilot must meet p95 latency and residency requirements."
  },
  {
    "id": "arch-04",
    "question": "What is a multi-tenant AI architecture?",
    "answer": "A multi-tenant system serves multiple organizations while isolating identity, documents, memory, costs, and logs. Isolation must extend into retrieval and caching.",
    "category": "System Architecture",
    "difficulty": "Intermediate",
    "tags": [
      "System",
      "Applied"
    ],
    "realWorldExample": "Two companies use the same assistant service without seeing each other's data."
  },
  {
    "id": "arch-05",
    "question": "How do you design an AI fallback strategy?",
    "answer": "Define behavior when models, search, or tools fail, including lower-capability modes and human escalation. Test each fallback rather than assuming it works.",
    "category": "System Architecture",
    "difficulty": "Intermediate",
    "tags": [
      "System",
      "Applied"
    ],
    "realWorldExample": "A customer assistant switches to search-only answers during an outage."
  },
  {
    "id": "arch-06",
    "question": "What is an architecture decision record (ADR)?",
    "answer": "An ADR documents a design choice, alternatives, constraints, and consequences. It helps teams revisit choices as models and costs change.",
    "category": "System Architecture",
    "difficulty": "Intermediate",
    "tags": [
      "System",
      "Applied"
    ],
    "realWorldExample": "A team records why a workflow replaced a multi-agent design."
  },
  {
    "id": "arch-07",
    "question": "How do you separate control plane and data plane?",
    "answer": "The control plane configures policies, models, and routing; the data plane processes user requests. Separation helps govern changes and isolate workloads.",
    "category": "System Architecture",
    "difficulty": "Intermediate",
    "tags": [
      "System",
      "Applied"
    ],
    "realWorldExample": "Admins choose allowed tools while workers execute authorized calls."
  },
  {
    "id": "arch-08",
    "question": "What is a threat model for an AI application?",
    "answer": "A threat model identifies assets, adversaries, trust boundaries, attack paths, and mitigations. Include prompt injection and tool misuse alongside standard web threats.",
    "category": "System Architecture",
    "difficulty": "Advanced",
    "tags": [
      "System",
      "Advanced"
    ],
    "realWorldExample": "A security review traces how external documents reach an agent's tools."
  },
  {
    "id": "arch-09",
    "question": "What is a capacity plan for an LLM service?",
    "answer": "Capacity planning estimates traffic, tokens, concurrency, memory, and peak load against target latency. Test realistic prompt and output distributions.",
    "category": "System Architecture",
    "difficulty": "Advanced",
    "tags": [
      "System",
      "Advanced"
    ],
    "realWorldExample": "A product forecasts GPU resources for a 10x traffic launch."
  },
  {
    "id": "arch-10",
    "question": "How do you defend an architecture choice in a review?",
    "answer": "State requirements, alternatives, tradeoffs, measurable risks, and validation plans. Use prototypes and eval evidence instead of framework popularity.",
    "category": "System Architecture",
    "difficulty": "Advanced",
    "tags": [
      "System",
      "Advanced"
    ],
    "realWorldExample": "An architect compares workflow versus agent using task success and cost."
  },
  {
    "id": "gov-01",
    "question": "What is responsible AI governance?",
    "answer": "Governance assigns ownership, risk policies, reviews, and accountability across the AI lifecycle. It complements technical controls and user experience design.",
    "category": "Governance",
    "difficulty": "Beginner",
    "tags": [
      "Governance",
      "Foundations"
    ],
    "realWorldExample": "A company approves use cases before exposing customer data to models."
  },
  {
    "id": "gov-02",
    "question": "What is a model card?",
    "answer": "A model card documents intended uses, evaluation evidence, limitations, and relevant risks. It helps consumers judge fitness for a specific task.",
    "category": "Governance",
    "difficulty": "Beginner",
    "tags": [
      "Governance",
      "Foundations"
    ],
    "realWorldExample": "A procurement team checks whether a classifier suits its target population."
  },
  {
    "id": "gov-03",
    "question": "What is a data processing agreement?",
    "answer": "A DPA sets contractual duties for processing personal data, including roles and protection obligations. Requirements vary by jurisdiction and vendor.",
    "category": "Governance",
    "difficulty": "Beginner",
    "tags": [
      "Governance",
      "Foundations"
    ],
    "realWorldExample": "An enterprise reviews how a model provider handles uploaded documents."
  },
  {
    "id": "gov-04",
    "question": "What is data residency?",
    "answer": "Data residency concerns where data is stored or processed. Architecture must verify region support, replication, logging, and vendor guarantees.",
    "category": "Governance",
    "difficulty": "Intermediate",
    "tags": [
      "Governance",
      "Applied"
    ],
    "realWorldExample": "A regulated company restricts customer records to approved regions."
  },
  {
    "id": "gov-05",
    "question": "What is human oversight in AI governance?",
    "answer": "Human oversight defines meaningful review, intervention, appeal, and ownership for important decisions. A decorative approval button is not enough.",
    "category": "Governance",
    "difficulty": "Intermediate",
    "tags": [
      "Governance",
      "Applied"
    ],
    "realWorldExample": "A loan reviewer can challenge an AI recommendation with evidence."
  },
  {
    "id": "gov-06",
    "question": "What is AI auditability?",
    "answer": "Auditability means decisions, data sources, model versions, and approvals can be reconstructed. Balance logging needs with privacy and retention limits.",
    "category": "Governance",
    "difficulty": "Intermediate",
    "tags": [
      "Governance",
      "Applied"
    ],
    "realWorldExample": "A compliance team investigates why an assistant issued an incorrect refund."
  },
  {
    "id": "gov-07",
    "question": "What is third-party model risk?",
    "answer": "Model suppliers may change behavior, availability, pricing, or data handling. Evaluate vendors, contracts, backups, and exit strategies.",
    "category": "Governance",
    "difficulty": "Intermediate",
    "tags": [
      "Governance",
      "Applied"
    ],
    "realWorldExample": "A platform tests alternate model providers before a contract renewal."
  },
  {
    "id": "gov-08",
    "question": "What is fairness testing for AI systems?",
    "answer": "Fairness testing assesses whether outcomes differ unjustifiably across relevant groups. Use valid labels, representative data, and contextual review.",
    "category": "Governance",
    "difficulty": "Advanced",
    "tags": [
      "Governance",
      "Advanced"
    ],
    "realWorldExample": "A hiring screener checks error rates and review access across groups."
  },
  {
    "id": "gov-09",
    "question": "How should an AI incident be handled?",
    "answer": "An incident plan defines detection, containment, user notification, evidence preservation, and corrective action. Practice responses before a real event.",
    "category": "Governance",
    "difficulty": "Advanced",
    "tags": [
      "Governance",
      "Advanced"
    ],
    "realWorldExample": "A leaked tool credential is revoked and affected workflows are disabled."
  },
  {
    "id": "gov-10",
    "question": "How do you build an AI governance review gate?",
    "answer": "Require documented purpose, data classification, risk assessment, evals, owner approval, and monitoring plans. Scale the review to the potential impact.",
    "category": "Governance",
    "difficulty": "Advanced",
    "tags": [
      "Governance",
      "Advanced"
    ],
    "realWorldExample": "An internal note summarizer faces lighter review than an automated benefits decision."
  }
];
