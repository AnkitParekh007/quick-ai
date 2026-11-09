// Original, concise questions informed by official AI engineering curricula.
// Sources and curriculum mapping: src/data/curriculum.ts.
import type {Question} from "../types";
export const architectQuestionsA:Question[]=[
  {
    "id": "found-01",
    "question": "What distinguishes AI, machine learning, and deep learning?",
    "answer": "AI is the broad goal of intelligent behavior; machine learning learns patterns from data. Deep learning is an ML family using multilayer neural networks.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A document assistant may use rules for routing and a neural model for classification."
  },
  {
    "id": "found-02",
    "question": "What is discriminative versus generative AI?",
    "answer": "Discriminative models predict labels or boundaries from input. Generative models learn patterns in data and produce new content such as text, images, or audio.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A spam filter classifies mail; an email assistant drafts replies."
  },
  {
    "id": "found-03",
    "question": "What is supervised learning?",
    "answer": "Supervised learning fits a function from labeled input-output examples. Quality depends on representative labels and evaluation beyond the training set.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A help desk trains on tickets labeled billing, access, or device."
  },
  {
    "id": "found-04",
    "question": "What is unsupervised learning?",
    "answer": "Unsupervised learning finds structure without target labels, such as clusters or latent representations. Its patterns still need interpretation and validation.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "An analyst groups similar support tickets before labeling topics."
  },
  {
    "id": "found-05",
    "question": "What is reinforcement learning?",
    "answer": "Reinforcement learning trains a policy using rewards from interactions with an environment. Reward design and exploration determine which behaviors are favored.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A simulated robot learns routes by receiving feedback for successful navigation."
  },
  {
    "id": "found-06",
    "question": "What is train–validation–test separation?",
    "answer": "Training examples update parameters, validation data guides choices, and a held-out test estimates generalization. Reusing test data for tuning biases the estimate.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A fraud team keeps a final time-based holdout for launch review."
  },
  {
    "id": "found-07",
    "question": "What is distribution shift?",
    "answer": "Distribution shift occurs when production inputs differ from training or test data. Monitor drift and performance, then update data or system behavior carefully.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A receipt parser faces a new invoice layout after deployment."
  },
  {
    "id": "found-08",
    "question": "What is a baseline model?",
    "answer": "A baseline is a simple comparison system such as a rule, retrieval search, or smaller model. It shows whether extra model complexity creates measurable value.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "Compare a keyword FAQ search with a new agent before investing."
  },
  {
    "id": "found-09",
    "question": "What is the bias–variance tradeoff?",
    "answer": "High bias underfits patterns; high variance fits training noise and generalizes poorly. Model capacity and regularization balance both risks.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A support classifier struggles when too simple or when memorizing examples."
  },
  {
    "id": "found-10",
    "question": "What is a calibrated prediction?",
    "answer": "A calibrated model's confidence matches observed correctness across many cases. Calibration matters when thresholds decide escalation or human review.",
    "category": "AI Foundations",
    "tags": [
      "AI",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A ticket router sending low-confidence cases to an operator."
  },
  {
    "id": "ml-01",
    "question": "What is a feature in a machine-learning system?",
    "answer": "A feature is an input signal used for prediction, such as amount, time, or word embedding. Features should be available at inference time and not leak the target.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A fraud detector uses transaction amount and recent velocity."
  },
  {
    "id": "ml-02",
    "question": "What is data leakage?",
    "answer": "Leakage occurs when training inputs contain information unavailable at real prediction time. It produces misleadingly strong offline scores and weak deployment results.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "An approval model accidentally includes a field created after the decision."
  },
  {
    "id": "ml-03",
    "question": "What is class imbalance?",
    "answer": "Class imbalance means some labels occur much less often than others. Accuracy alone can hide failure on rare but important cases.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A defect detector predicts 'no defect' for almost every part."
  },
  {
    "id": "ml-04",
    "question": "Why choose precision-recall curves for rare events?",
    "answer": "Precision-recall curves focus on positive predictions and recovered positives. They are often more informative than accuracy for heavily imbalanced tasks.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A fraud team adjusts alerts to avoid overwhelming reviewers."
  },
  {
    "id": "ml-05",
    "question": "What is cross-validation?",
    "answer": "Cross-validation repeats training and evaluation on different folds to estimate variability. For time-series data, splits must respect time order.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A small document dataset uses stratified folds to assess stability."
  },
  {
    "id": "ml-06",
    "question": "What is concept drift?",
    "answer": "Concept drift changes the relationship between inputs and the target over time. Monitor outcome quality, not just incoming feature distributions.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "Spam tactics change while the same email fields remain present."
  },
  {
    "id": "ml-07",
    "question": "What is a feature store?",
    "answer": "A feature store manages reusable feature definitions and access for training and serving. Consistent offline and online computation reduces skew.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A recommender shares customer activity features across models."
  },
  {
    "id": "ml-08",
    "question": "What is offline–online skew?",
    "answer": "Offline–online skew means training features or preprocessing differ from the live pipeline. It can degrade quality even if offline validation looked strong.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A model trained on UTC timestamps receives local-time features in production."
  },
  {
    "id": "ml-09",
    "question": "What is active learning?",
    "answer": "Active learning selects valuable unlabeled cases for human annotation. It reduces labeling effort when uncertain or diverse examples are prioritized.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "Human reviewers label the tickets a classifier finds most ambiguous."
  },
  {
    "id": "ml-10",
    "question": "How do you choose an operating threshold?",
    "answer": "Choose a threshold using validation results, business costs, and risk tolerance. Recheck it as prevalence and error costs change.",
    "category": "Machine Learning",
    "tags": [
      "Machine",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A medical triage workflow values missed urgent cases differently from extra reviews."
  },
  {
    "id": "nn-01",
    "question": "What is a neural network layer?",
    "answer": "A layer transforms input values using learned weights and nonlinear functions. Stacked layers can represent increasingly complex relationships.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A vision model turns pixels into edges, patterns, and object features."
  },
  {
    "id": "nn-02",
    "question": "What is backpropagation?",
    "answer": "Backpropagation computes gradients of a loss with respect to network parameters. An optimizer then updates weights to reduce that loss.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A model corrects itself after comparing a prediction with the label."
  },
  {
    "id": "nn-03",
    "question": "What is gradient descent?",
    "answer": "Gradient descent adjusts parameters in a direction that typically reduces loss. Learning rate determines step size and influences stability.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A network tunes millions of weights across repeated training batches."
  },
  {
    "id": "nn-04",
    "question": "What is an activation function?",
    "answer": "An activation function adds nonlinearity so stacked layers can learn complex mappings. Common choices include ReLU and GELU.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "Without nonlinear activations, many stacked linear layers collapse into one."
  },
  {
    "id": "nn-05",
    "question": "What causes exploding or vanishing gradients?",
    "answer": "Repeated transformations can make training gradients too large or too small. Initialization, normalization, residual connections, and clipping help.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "Deep networks fail to learn early layers or produce unstable updates."
  },
  {
    "id": "nn-06",
    "question": "Why are residual connections useful?",
    "answer": "A residual connection adds a layer's input to its transformed output. This helps information and gradients propagate in deep networks.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "Transformer blocks preserve earlier representations while refining them."
  },
  {
    "id": "nn-07",
    "question": "What does layer normalization do?",
    "answer": "Layer normalization stabilizes activations across features of a token or sample. It supports more reliable training in Transformer architectures.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "An LLM normalizes representations between attention and feed-forward blocks."
  },
  {
    "id": "nn-08",
    "question": "What is an optimizer such as AdamW?",
    "answer": "An optimizer uses gradients to update model weights; AdamW combines adaptive updates with decoupled weight decay. Hyperparameters affect convergence and generalization.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "Fine-tuning experiments compare learning rates while keeping data fixed."
  },
  {
    "id": "nn-09",
    "question": "What is regularization?",
    "answer": "Regularization discourages fitting noise or overly complex behavior. Weight decay, dropout, and early stopping are common strategies.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A model avoids memorizing a small set of labeled emails."
  },
  {
    "id": "nn-10",
    "question": "What is a loss function?",
    "answer": "A loss function quantifies error between model outputs and training targets. Selecting the right loss aligns optimization with the task.",
    "category": "Neural Networks",
    "tags": [
      "Neural",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A token model minimizes cross-entropy while a regression model may use squared error."
  },
  {
    "id": "llme-01",
    "question": "What is pretraining versus instruction tuning?",
    "answer": "Pretraining predicts tokens from broad data and learns general representations. Instruction tuning teaches a model to follow task-oriented prompts and response formats.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A base model becomes a more useful assistant after supervised instruction examples."
  },
  {
    "id": "llme-02",
    "question": "What is next-token prediction?",
    "answer": "An autoregressive language model estimates the next token given prior tokens. Repeated sampling builds a response one token at a time.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A writing assistant emits a summary incrementally during streaming."
  },
  {
    "id": "llme-03",
    "question": "What is supervised fine-tuning (SFT)?",
    "answer": "SFT trains on demonstrations pairing prompts with preferred responses. It adapts behavior but needs high-quality, representative examples.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A support assistant learns expected escalation and formatting patterns."
  },
  {
    "id": "llme-04",
    "question": "What is preference optimization?",
    "answer": "Preference optimization uses comparisons or reward signals to favor desired outputs. The chosen method and preference data strongly affect behavior.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "Reviewers rank two support responses for helpfulness and policy compliance."
  },
  {
    "id": "llme-05",
    "question": "What is RLHF?",
    "answer": "Reinforcement learning from human feedback uses preference-derived rewards to guide model behavior. It complements pretraining but can reflect reward-model biases.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "Human evaluations help shape an assistant's tone and refusal behavior."
  },
  {
    "id": "llme-06",
    "question": "What is model distillation?",
    "answer": "Distillation trains a smaller student model to imitate a stronger teacher's outputs or distributions. It trades some capability for lower latency or cost.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A team distills a ticket classifier into a small serving model."
  },
  {
    "id": "llme-07",
    "question": "What is mixture of experts (MoE)?",
    "answer": "MoE layers route tokens through selected expert networks rather than activating every expert. This expands capacity while controlling compute, with routing tradeoffs.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A serving cluster must handle uneven expert load across batches."
  },
  {
    "id": "llme-08",
    "question": "What is quantization?",
    "answer": "Quantization stores or computes model values at reduced precision, such as 8-bit or 4-bit. It saves memory and may speed inference but can affect quality.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A smaller GPU runs an instruction model using quantized weights."
  },
  {
    "id": "llme-09",
    "question": "What is perplexity?",
    "answer": "Perplexity summarizes how surprising reference text is under a language model. It measures language modeling fit, not end-user factual correctness.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A tokenizer change can shift perplexity without proving better Q&A quality."
  },
  {
    "id": "llme-10",
    "question": "What is a tokenizer vocabulary tradeoff?",
    "answer": "Larger vocabularies may shorten sequences but increase embedding and output-layer costs. Tokenization also affects multilingual and code efficiency.",
    "category": "LLM Engineering",
    "tags": [
      "LLM",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A model processes some languages as many more tokens than English."
  },
  {
    "id": "ctx-01",
    "question": "What is context engineering?",
    "answer": "Context engineering selects and structures the information a model sees for a task. It balances relevance, trust boundaries, token budget, and freshness.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "An agent receives a compact summary, policy excerpts, and tool results."
  },
  {
    "id": "ctx-02",
    "question": "What is instruction hierarchy?",
    "answer": "Instruction hierarchy separates higher-priority application rules from user requests and untrusted retrieved content. Conflicts must be resolved by authority, not recency.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A webpage cannot overwrite developer instructions in a browsing assistant."
  },
  {
    "id": "ctx-03",
    "question": "Why isolate untrusted tool output?",
    "answer": "Tool output may contain malicious instructions, sensitive data, or incorrect claims. Treat it as evidence to inspect rather than commands to obey.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Foundations"
    ],
    "difficulty": "Beginner",
    "realWorldExample": "A website's 'ignore prior rules' text must not control an assistant."
  },
  {
    "id": "ctx-04",
    "question": "What is context compaction?",
    "answer": "Context compaction summarizes or drops low-value history while preserving decisions and constraints. It lets long-running tasks continue within token limits.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A coding agent summarizes resolved files before the next phase."
  },
  {
    "id": "ctx-05",
    "question": "What is a rolling conversation summary?",
    "answer": "A rolling summary condenses earlier turns into a short state representation. It must preserve important user constraints and admit uncertainty.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A customer support assistant carries issue history across a long chat."
  },
  {
    "id": "ctx-06",
    "question": "What is a working-memory scratchpad?",
    "answer": "A scratchpad stores task-relevant intermediate state such as todo items or verified facts. It is distinct from long-term memory and need not be exposed as hidden reasoning.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "An agent records completed research steps in a structured checklist."
  },
  {
    "id": "ctx-07",
    "question": "What is context poisoning?",
    "answer": "Context poisoning inserts misleading content into material later supplied to the model. Provenance checks and trust boundaries help limit its effect.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Applied"
    ],
    "difficulty": "Intermediate",
    "realWorldExample": "A compromised knowledge page plants false approval instructions."
  },
  {
    "id": "ctx-08",
    "question": "How do you choose what context to retrieve?",
    "answer": "Retrieve evidence tied to the user's intent, then rerank and trim redundant passages. More context can increase distraction and cost.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A payroll bot retrieves the relevant policy section, not the entire HR site."
  },
  {
    "id": "ctx-09",
    "question": "What is lost-in-the-middle behavior?",
    "answer": "Some models use information near the beginning or end of long context more reliably than buried passages. Placement, reranking, and evaluation can mitigate it.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A crucial exception hidden among dozens of retrieved pages gets overlooked."
  },
  {
    "id": "ctx-10",
    "question": "What is prompt caching?",
    "answer": "Prompt caching reuses processing of repeated input prefixes when supported by a provider. It reduces cost or latency only when cache keys and prefixes match.",
    "category": "Context Engineering",
    "tags": [
      "Context",
      "Advanced"
    ],
    "difficulty": "Advanced",
    "realWorldExample": "A support bot shares a stable system prompt across thousands of requests."
  }
];
