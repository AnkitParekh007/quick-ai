import type {LearningMetadata} from "../types";
// Each question gets a clear analogy, practical example, misconception and teach-back criteria.
export const learningMetadata:Record<string,LearningMetadata>={
  "llm-01": {
    "analogy": "A predictive-text engine with a huge library of patterns.",
    "realWorldExample": "ChatGPT drafts a meeting recap from your notes.",
    "commonMisconception": "It doesn't look up a guaranteed truth; it predicts likely text.",
    "keyIdeas": [
      "training",
      "predict",
      "tokens"
    ],
    "relatedConcepts": []
  },
  "llm-02": {
    "analogy": "Text is cut into small puzzle pieces before the model reads it.",
    "realWorldExample": "A chat app counts tokens to estimate how much conversation fits.",
    "commonMisconception": "One token is not always one complete word.",
    "keyIdeas": [
      "text",
      "pieces",
      "units"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "Sentence",
        "Tokens",
        "Model"
      ],
      "caption": "Text is split into tokens before the model processes it."
    }
  },
  "llm-03": {
    "analogy": "A desk only holds so many pages at once.",
    "realWorldExample": "A long support chat may need an older section summarized.",
    "commonMisconception": "Long context does not mean unlimited memory.",
    "keyIdeas": [
      "limit",
      "tokens",
      "context"
    ],
    "relatedConcepts": []
  },
  "llm-04": {
    "analogy": "A creativity dial changes how surprising the next word can be.",
    "realWorldExample": "A writing assistant varies headline suggestions with sampling settings.",
    "commonMisconception": "Higher temperature does not make facts more correct.",
    "keyIdeas": [
      "random",
      "sampling",
      "temperature"
    ],
    "relatedConcepts": []
  },
  "llm-05": {
    "analogy": "A confident storyteller can still invent details.",
    "realWorldExample": "A chatbot cites a nonexistent report; you verify the source.",
    "commonMisconception": "Fluent answers are not proof of factual accuracy.",
    "keyIdeas": [
      "false",
      "unsupported",
      "verify"
    ],
    "relatedConcepts": []
  },
  "agent-01": {
    "analogy": "A digital assistant that can take steps, not just answer.",
    "realWorldExample": "A workplace assistant checks a calendar, then drafts an agenda.",
    "commonMisconception": "An agent is not automatically allowed to act without limits.",
    "keyIdeas": [
      "goal",
      "tools",
      "steps"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "Goal",
        "Model chooses tool",
        "Observe result"
      ],
      "caption": "An agent may repeat the tool-and-observation loop."
    }
  },
  "agent-02": {
    "analogy": "The model requests a tool, like asking a colleague to check a file.",
    "realWorldExample": "An assistant requests a weather API, then summarizes the result.",
    "commonMisconception": "The model doesn't execute arbitrary code by wishing it.",
    "keyIdeas": [
      "application",
      "execute",
      "result"
    ],
    "relatedConcepts": []
  },
  "agent-03": {
    "analogy": "Think, take an action, inspect the result, repeat.",
    "realWorldExample": "A support agent searches orders before suggesting a refund.",
    "commonMisconception": "A plan is not fixed; observations can change the next step.",
    "keyIdeas": [
      "reason",
      "act",
      "observe"
    ],
    "relatedConcepts": []
  },
  "agent-04": {
    "analogy": "Safety rails keep an automated assistant within its lane.",
    "realWorldExample": "An expense agent requests approval before submitting a payment.",
    "commonMisconception": "A clever agent is not automatically a safe agent.",
    "keyIdeas": [
      "permissions",
      "approval",
      "validation"
    ],
    "relatedConcepts": []
  },
  "rag-01": {
    "analogy": "An open-book exam: retrieve notes before answering.",
    "realWorldExample": "A workplace chatbot searches company policies before responding.",
    "commonMisconception": "RAG does not retrain model weights with each query.",
    "keyIdeas": [
      "retrieve",
      "context",
      "answer"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "Question",
        "Retrieve documents",
        "Answer with context"
      ],
      "caption": "Retrieval supplies external evidence to generation."
    }
  },
  "rag-02": {
    "analogy": "A map that places similar ideas close to each other.",
    "realWorldExample": "Spotify-like recommendation systems can compare item vectors.",
    "commonMisconception": "An embedding is not a human-readable summary.",
    "keyIdeas": [
      "vector",
      "similar",
      "meaning"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "Text",
        "Vector",
        "Nearby meanings"
      ],
      "caption": "Semantically similar content can have nearby embeddings."
    }
  },
  "rag-03": {
    "analogy": "Cut a big book into searchable pages.",
    "realWorldExample": "A policy chatbot indexes handbook paragraphs separately.",
    "commonMisconception": "Tiny chunks can lose context; giant chunks add noise.",
    "keyIdeas": [
      "split",
      "passages",
      "retrieve"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "Document",
        "Chunks",
        "Retrieved passage"
      ],
      "caption": "Chunking prepares passages for retrieval."
    }
  },
  "rag-04": {
    "analogy": "Look up exact words and similar meanings together.",
    "realWorldExample": "A search box finds both an error code and a related description.",
    "commonMisconception": "Vector search alone isn't always best for exact strings.",
    "keyIdeas": [
      "keyword",
      "semantic",
      "combine"
    ],
    "relatedConcepts": []
  },
  "mcp-01": {
    "analogy": "A common plug shape for AI apps to reach tools and data.",
    "realWorldExample": "A desktop assistant connects to a files tool through MCP.",
    "commonMisconception": "MCP is a communication protocol, not a model itself.",
    "keyIdeas": [
      "protocol",
      "tools",
      "data"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "AI application",
        "MCP client ↔ server",
        "Tool / data"
      ],
      "caption": "MCP connects clients and servers exposing capabilities."
    }
  },
  "mcp-02": {
    "analogy": "A service counter advertises what actions are available.",
    "realWorldExample": "An MCP server exposes a read-only document search tool.",
    "commonMisconception": "An MCP server does not have to host an AI model.",
    "keyIdeas": [
      "expose",
      "client",
      "tools"
    ],
    "relatedConcepts": []
  },
  "mcp-03": {
    "analogy": "A shared connector still needs locks and permissions.",
    "realWorldExample": "A company tool checks access rights before exposing payroll files.",
    "commonMisconception": "Using a standard protocol doesn't remove security risks.",
    "keyIdeas": [
      "authentication",
      "authorization",
      "permissions"
    ],
    "relatedConcepts": []
  },
  "prompt-01": {
    "analogy": "Give a helpful coworker clear instructions and constraints.",
    "realWorldExample": "You ask ChatGPT for a summary in three bullet points.",
    "commonMisconception": "A prompt cannot guarantee perfect model behavior.",
    "keyIdeas": [
      "instructions",
      "context",
      "format"
    ],
    "relatedConcepts": []
  },
  "prompt-02": {
    "analogy": "Show a few worked examples before the new problem.",
    "realWorldExample": "An email classifier sees three examples of labels.",
    "commonMisconception": "Providing examples is not the same as fine-tuning weights.",
    "keyIdeas": [
      "examples",
      "prompt",
      "weights"
    ],
    "relatedConcepts": []
  },
  "prompt-03": {
    "analogy": "A malicious sticky note pretending to be the boss.",
    "realWorldExample": "A retrieved webpage tells an assistant to leak a secret.",
    "commonMisconception": "Untrusted page content is not a higher-priority instruction.",
    "keyIdeas": [
      "untrusted",
      "instructions",
      "attack"
    ],
    "relatedConcepts": []
  },
  "prompt-04": {
    "analogy": "Use a form with named fields rather than free-form prose.",
    "realWorldExample": "An automation expects JSON with subject and priority.",
    "commonMisconception": "JSON-like text may still need schema validation.",
    "keyIdeas": [
      "schema",
      "json",
      "validate"
    ],
    "relatedConcepts": []
  },
  "eval-01": {
    "analogy": "A driving test for AI behavior.",
    "realWorldExample": "A team tests a chatbot on real customer support cases.",
    "commonMisconception": "One impressive demo is not a reliable evaluation.",
    "keyIdeas": [
      "tests",
      "criteria",
      "measure"
    ],
    "relatedConcepts": []
  },
  "eval-02": {
    "analogy": "Precision asks how many finds were good; recall asks how many good finds were found.",
    "realWorldExample": "An inbox spam detector balances false alarms and missed spam.",
    "commonMisconception": "A high precision score alone does not imply high recall.",
    "keyIdeas": [
      "precision",
      "recall",
      "relevant"
    ],
    "relatedConcepts": []
  },
  "eval-03": {
    "analogy": "Keep a final exam separate from homework.",
    "realWorldExample": "A team evaluates a classifier on examples never used for tuning.",
    "commonMisconception": "Repeated peeking can turn a test set into training feedback.",
    "keyIdeas": [
      "unseen",
      "test",
      "tuning"
    ],
    "relatedConcepts": []
  },
  "eval-04": {
    "analogy": "Use a model as a grader, then check the grader.",
    "realWorldExample": "A company compares summaries with a rubric and human spot checks.",
    "commonMisconception": "Model judges can be biased or inconsistent.",
    "keyIdeas": [
      "model",
      "rubric",
      "human"
    ],
    "relatedConcepts": []
  },
  "tr-01": {
    "analogy": "A team of words pays attention to other words in a sentence.",
    "realWorldExample": "ChatGPT-like models use Transformer-based architectures.",
    "commonMisconception": "A Transformer is more than a keyword lookup.",
    "keyIdeas": [
      "attention",
      "tokens",
      "architecture"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "Input tokens",
        "Attention layers",
        "Next token"
      ],
      "caption": "A simplified Transformer language-model flow."
    }
  },
  "tr-02": {
    "analogy": "Each word looks at other words for clues.",
    "realWorldExample": "The word 'bank' uses 'river' or 'money' to determine meaning.",
    "commonMisconception": "Not every attention head gives a human-readable reason.",
    "keyIdeas": [
      "tokens",
      "weights",
      "context"
    ],
    "relatedConcepts": [],
    "visualExplanation": {
      "nodes": [
        "Token",
        "Attention to context",
        "Contextual representation"
      ],
      "caption": "Tokens weigh relevant context."
    }
  },
  "tr-03": {
    "analogy": "Seat numbers help track where everyone sits.",
    "realWorldExample": "A translation model distinguishes word order with position signals.",
    "commonMisconception": "Attention by itself does not encode sequence order.",
    "keyIdeas": [
      "position",
      "order",
      "tokens"
    ],
    "relatedConcepts": []
  },
  "tr-04": {
    "analogy": "Keep useful notes from earlier steps instead of recomputing.",
    "realWorldExample": "A streaming chatbot reuses past attention states while typing.",
    "commonMisconception": "KV caching saves compute but uses memory.",
    "keyIdeas": [
      "cache",
      "keys",
      "values"
    ],
    "relatedConcepts": []
  },
  "ft-01": {
    "analogy": "Coach an experienced employee on a specialized task.",
    "realWorldExample": "A support model is adapted to match company response style.",
    "commonMisconception": "Fine-tuning is not the best way to store changing news.",
    "keyIdeas": [
      "weights",
      "train",
      "adapt"
    ],
    "relatedConcepts": []
  },
  "ft-02": {
    "analogy": "Add a small adapter instead of rebuilding the whole engine.",
    "realWorldExample": "A team adapts a model with less GPU memory using LoRA.",
    "commonMisconception": "LoRA still trains parameters; it isn't prompting alone.",
    "keyIdeas": [
      "low-rank",
      "weights",
      "efficient"
    ],
    "relatedConcepts": []
  },
  "ft-03": {
    "analogy": "Memorizing practice questions isn't the same as learning.",
    "realWorldExample": "A fine-tuned classifier excels on examples but misses new ones.",
    "commonMisconception": "Great training accuracy doesn't prove generalization.",
    "keyIdeas": [
      "memorize",
      "train",
      "unseen"
    ],
    "relatedConcepts": []
  },
  "ft-04": {
    "analogy": "Choose open-book reference material for changing facts.",
    "realWorldExample": "A policy assistant retrieves latest rules with RAG; style is tuned separately.",
    "commonMisconception": "RAG and fine-tuning are complementary, not always rivals.",
    "keyIdeas": [
      "rag",
      "retrieval",
      "fine-tuning"
    ],
    "relatedConcepts": []
  }
};
