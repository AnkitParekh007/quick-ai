import type {LearningMetadata} from "../types";
// Each question gets a clear analogy, practical example, misconception and teach-back criteria.
export const learningMetadata:Record<string,LearningMetadata>={
  "llm-01": {
    "analogy": "llm-01",
    "realWorldExample": "A predictive-text engine with a huge library of patterns.",
    "commonMisconception": "ChatGPT drafts a meeting recap from your notes.",
    "keyIdeas": [
      "It doesn't look up a guaranteed truth; it predicts likely text."
    ],
    "relatedConcepts": []
  },
  "llm-02": {
    "analogy": "llm-02",
    "realWorldExample": "Text is cut into small puzzle pieces before the model reads it.",
    "commonMisconception": "A chat app counts tokens to estimate how much conversation fits.",
    "keyIdeas": [
      "One token is not always one complete word."
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
    "analogy": "llm-03",
    "realWorldExample": "A desk only holds so many pages at once.",
    "commonMisconception": "A long support chat may need an older section summarized.",
    "keyIdeas": [
      "Long context does not mean unlimited memory."
    ],
    "relatedConcepts": []
  },
  "llm-04": {
    "analogy": "llm-04",
    "realWorldExample": "A creativity dial changes how surprising the next word can be.",
    "commonMisconception": "A writing assistant varies headline suggestions with sampling settings.",
    "keyIdeas": [
      "Higher temperature does not make facts more correct."
    ],
    "relatedConcepts": []
  },
  "llm-05": {
    "analogy": "llm-05",
    "realWorldExample": "A confident storyteller can still invent details.",
    "commonMisconception": "A chatbot cites a nonexistent report; you verify the source.",
    "keyIdeas": [
      "Fluent answers are not proof of factual accuracy."
    ],
    "relatedConcepts": []
  },
  "agent-01": {
    "analogy": "agent-01",
    "realWorldExample": "A digital assistant that can take steps, not just answer.",
    "commonMisconception": "A workplace assistant checks a calendar, then drafts an agenda.",
    "keyIdeas": [
      "An agent is not automatically allowed to act without limits."
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
    "analogy": "agent-02",
    "realWorldExample": "The model requests a tool, like asking a colleague to check a file.",
    "commonMisconception": "An assistant requests a weather API, then summarizes the result.",
    "keyIdeas": [
      "The model doesn't execute arbitrary code by wishing it."
    ],
    "relatedConcepts": []
  },
  "agent-03": {
    "analogy": "agent-03",
    "realWorldExample": "Think, take an action, inspect the result, repeat.",
    "commonMisconception": "A support agent searches orders before suggesting a refund.",
    "keyIdeas": [
      "A plan is not fixed; observations can change the next step."
    ],
    "relatedConcepts": []
  },
  "agent-04": {
    "analogy": "agent-04",
    "realWorldExample": "Safety rails keep an automated assistant within its lane.",
    "commonMisconception": "An expense agent requests approval before submitting a payment.",
    "keyIdeas": [
      "A clever agent is not automatically a safe agent."
    ],
    "relatedConcepts": []
  },
  "rag-01": {
    "analogy": "rag-01",
    "realWorldExample": "An open-book exam: retrieve notes before answering.",
    "commonMisconception": "A workplace chatbot searches company policies before responding.",
    "keyIdeas": [
      "RAG does not retrain model weights with each query."
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
    "analogy": "rag-02",
    "realWorldExample": "A map that places similar ideas close to each other.",
    "commonMisconception": "Spotify-like recommendation systems can compare item vectors.",
    "keyIdeas": [
      "An embedding is not a human-readable summary."
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
    "analogy": "rag-03",
    "realWorldExample": "Cut a big book into searchable pages.",
    "commonMisconception": "A policy chatbot indexes handbook paragraphs separately.",
    "keyIdeas": [
      "Tiny chunks can lose context; giant chunks add noise."
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
    "analogy": "rag-04",
    "realWorldExample": "Look up exact words and similar meanings together.",
    "commonMisconception": "A search box finds both an error code and a related description.",
    "keyIdeas": [
      "Vector search alone isn't always best for exact strings."
    ],
    "relatedConcepts": []
  },
  "mcp-01": {
    "analogy": "mcp-01",
    "realWorldExample": "A common plug shape for AI apps to reach tools and data.",
    "commonMisconception": "A desktop assistant connects to a files tool through MCP.",
    "keyIdeas": [
      "MCP is a communication protocol, not a model itself."
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
    "analogy": "mcp-02",
    "realWorldExample": "A service counter advertises what actions are available.",
    "commonMisconception": "An MCP server exposes a read-only document search tool.",
    "keyIdeas": [
      "An MCP server does not have to host an AI model."
    ],
    "relatedConcepts": []
  },
  "mcp-03": {
    "analogy": "mcp-03",
    "realWorldExample": "A shared connector still needs locks and permissions.",
    "commonMisconception": "A company tool checks access rights before exposing payroll files.",
    "keyIdeas": [
      "Using a standard protocol doesn't remove security risks."
    ],
    "relatedConcepts": []
  },
  "prompt-01": {
    "analogy": "prompt-01",
    "realWorldExample": "Give a helpful coworker clear instructions and constraints.",
    "commonMisconception": "You ask ChatGPT for a summary in three bullet points.",
    "keyIdeas": [
      "A prompt cannot guarantee perfect model behavior."
    ],
    "relatedConcepts": []
  },
  "prompt-02": {
    "analogy": "prompt-02",
    "realWorldExample": "Show a few worked examples before the new problem.",
    "commonMisconception": "An email classifier sees three examples of labels.",
    "keyIdeas": [
      "Providing examples is not the same as fine-tuning weights."
    ],
    "relatedConcepts": []
  },
  "prompt-03": {
    "analogy": "prompt-03",
    "realWorldExample": "A malicious sticky note pretending to be the boss.",
    "commonMisconception": "A retrieved webpage tells an assistant to leak a secret.",
    "keyIdeas": [
      "Untrusted page content is not a higher-priority instruction."
    ],
    "relatedConcepts": []
  },
  "prompt-04": {
    "analogy": "prompt-04",
    "realWorldExample": "Use a form with named fields rather than free-form prose.",
    "commonMisconception": "An automation expects JSON with subject and priority.",
    "keyIdeas": [
      "JSON-like text may still need schema validation."
    ],
    "relatedConcepts": []
  },
  "eval-01": {
    "analogy": "eval-01",
    "realWorldExample": "A driving test for AI behavior.",
    "commonMisconception": "A team tests a chatbot on real customer support cases.",
    "keyIdeas": [
      "One impressive demo is not a reliable evaluation."
    ],
    "relatedConcepts": []
  },
  "eval-02": {
    "analogy": "eval-02",
    "realWorldExample": "Precision asks how many finds were good; recall asks how many good finds were found.",
    "commonMisconception": "An inbox spam detector balances false alarms and missed spam.",
    "keyIdeas": [
      "A high precision score alone does not imply high recall."
    ],
    "relatedConcepts": []
  },
  "eval-03": {
    "analogy": "eval-03",
    "realWorldExample": "Keep a final exam separate from homework.",
    "commonMisconception": "A team evaluates a classifier on examples never used for tuning.",
    "keyIdeas": [
      "Repeated peeking can turn a test set into training feedback."
    ],
    "relatedConcepts": []
  },
  "eval-04": {
    "analogy": "eval-04",
    "realWorldExample": "Use a model as a grader, then check the grader.",
    "commonMisconception": "A company compares summaries with a rubric and human spot checks.",
    "keyIdeas": [
      "Model judges can be biased or inconsistent."
    ],
    "relatedConcepts": []
  },
  "tr-01": {
    "analogy": "tr-01",
    "realWorldExample": "A team of words pays attention to other words in a sentence.",
    "commonMisconception": "ChatGPT-like models use Transformer-based architectures.",
    "keyIdeas": [
      "A Transformer is more than a keyword lookup."
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
    "analogy": "tr-02",
    "realWorldExample": "Each word looks at other words for clues.",
    "commonMisconception": "The word 'bank' uses 'river' or 'money' to determine meaning.",
    "keyIdeas": [
      "Not every attention head gives a human-readable reason."
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
    "analogy": "tr-03",
    "realWorldExample": "Seat numbers help track where everyone sits.",
    "commonMisconception": "A translation model distinguishes word order with position signals.",
    "keyIdeas": [
      "Attention by itself does not encode sequence order."
    ],
    "relatedConcepts": []
  },
  "tr-04": {
    "analogy": "tr-04",
    "realWorldExample": "Keep useful notes from earlier steps instead of recomputing.",
    "commonMisconception": "A streaming chatbot reuses past attention states while typing.",
    "keyIdeas": [
      "KV caching saves compute but uses memory."
    ],
    "relatedConcepts": []
  },
  "ft-01": {
    "analogy": "ft-01",
    "realWorldExample": "Coach an experienced employee on a specialized task.",
    "commonMisconception": "A support model is adapted to match company response style.",
    "keyIdeas": [
      "Fine-tuning is not the best way to store changing news."
    ],
    "relatedConcepts": []
  },
  "ft-02": {
    "analogy": "ft-02",
    "realWorldExample": "Add a small adapter instead of rebuilding the whole engine.",
    "commonMisconception": "A team adapts a model with less GPU memory using LoRA.",
    "keyIdeas": [
      "LoRA still trains parameters; it isn't prompting alone."
    ],
    "relatedConcepts": []
  },
  "ft-03": {
    "analogy": "ft-03",
    "realWorldExample": "Memorizing practice questions isn't the same as learning.",
    "commonMisconception": "A fine-tuned classifier excels on examples but misses new ones.",
    "keyIdeas": [
      "Great training accuracy doesn't prove generalization."
    ],
    "relatedConcepts": []
  },
  "ft-04": {
    "analogy": "ft-04",
    "realWorldExample": "Choose open-book reference material for changing facts.",
    "commonMisconception": "A policy assistant retrieves latest rules with RAG; style is tuned separately.",
    "keyIdeas": [
      "RAG and fine-tuning are complementary, not always rivals."
    ],
    "relatedConcepts": []
  }
};
