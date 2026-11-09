import type {DiagramRole,DiagramType,VisualLearning,Question} from "../types";
/** Declarative diagram source: each stage is label~plain-language label~meaning~role.
 * Extend this catalogue without modifying the visual renderer. */
type Stage=string;
type Spec=[string,DiagramType,string,Stage[],string[]];
const specs:Spec[]=[
 [
  "llm-01",
  "dataflow",
  "How a language model produces text",
  [
   "Prompt~Your message~The application supplies input text to the model.~user",
   "Tokenizer~Break into pieces~Text is converted into token IDs.~data",
   "LLM~Predict next piece~The model estimates probabilities for upcoming tokens.~model",
   "Generated text~Read the reply~Selected tokens are decoded as output.~user"
  ],
  [
   "tokenizes",
   "predicts",
   "decodes"
  ]
 ],
 [
  "llm-02",
  "dataflow",
  "How tokenization works",
  [
   "Input sentence~A sentence~Text arrives for processing.~user",
   "Tokenizer~Text cutter~A tokenizer splits text into model vocabulary units.~data",
   "Token IDs~Numbered pieces~Each token is mapped to an integer ID.~data",
   "Model input~Pieces to AI~The model receives the token sequence.~model"
  ],
  [
   "splits",
   "maps",
   "passes"
  ]
 ],
 [
  "llm-03",
  "flowchart",
  "How a context window is managed",
  [
   "New request~Your conversation~Current messages and requested output need token space.~user",
   "Count tokens~Check the space~The application measures input against its token budget.~data",
   "Fits?~Enough room?~If content exceeds the limit, it must be trimmed or summarized.~error",
   "Model context~Working desk~Only the retained tokens are passed to the model.~model"
  ],
  [
   "counts",
   "checks",
   "fits / adjust"
  ]
 ],
 [
  "llm-04",
  "flowchart",
  "How temperature affects sampling",
  [
   "Model logits~Possible words~The model produces scores for candidate next tokens.~model",
   "Temperature~Surprise dial~Temperature rescales token selection probabilities.~model",
   "Sample token~Choose a piece~Sampling selects a token according to the adjusted distribution.~data"
  ],
  [
   "adjusts",
   "samples"
  ]
 ],
 [
  "llm-05",
  "flowchart",
  "How to handle hallucinations",
  [
   "Model answer~AI reply~The model generates an answer that may be plausible but unsupported.~model",
   "Verify claim~Check evidence~Sources or tools are used to inspect factual claims.~error",
   "Evidence found?~Trust check~Unsupported claims are corrected, qualified, or withheld.~error",
   "Grounded response~Checked answer~The application presents a verified or appropriately uncertain response.~user"
  ],
  [
   "checks",
   "decides",
   "responds"
  ]
 ],
 [
  "agent-01",
  "architecture",
  "The AI agent loop",
  [
   "User goal~What you want~The user provides a goal and boundaries.~user",
   "Agent planner~Decide next action~A model chooses a step toward the goal.~model",
   "Tool~Get something done~An approved tool performs a real operation.~data",
   "Observation~Check result~The tool result informs the next decision or final response.~model"
  ],
  [
   "delegates",
   "calls",
   "returns"
  ]
 ],
 [
  "agent-02",
  "sequence",
  "What happens during a tool call",
  [
   "AI app~Assistant app~The host receives the user request and manages tool execution.~user",
   "Model~Reasoner~The model emits a structured tool call request.~model",
   "API tool~External capability~The application invokes an allowed API or function.~external",
   "Tool result~Returned evidence~The response is given back to the model as context.~data"
  ],
  [
   "sends prompt",
   "requests call",
   "returns data"
  ]
 ],
 [
  "agent-03",
  "timeline",
  "ReAct: reason, act, observe",
  [
   "Reason~Think of a step~The model decides what information or action is needed.~model",
   "Act~Use a tool~The system invokes a tool chosen by the model.~data",
   "Observe~Read outcome~The model inspects the tool output.~model",
   "Repeat / finish~Adjust plan~The agent either continues the loop or produces an answer.~user"
  ],
  [
   "chooses",
   "executes",
   "updates"
  ]
 ],
 [
  "agent-04",
  "flowchart",
  "An agent safety gate",
  [
   "Proposed action~Agent request~The agent requests an operation such as sending an email.~model",
   "Permission check~Safety gate~The application validates scopes and action risk.~error",
   "Approval~Human sign-off~Sensitive actions require explicit confirmation.~user",
   "Tool executes~Allowed action~Only authorized operations proceed to tools.~external"
  ],
  [
   "validates",
   "requests approval",
   "allows"
  ]
 ],
 [
  "rag-01",
  "dataflow",
  "RAG: from question to grounded answer",
  [
   "User question~Ask something~The application receives a question requiring external knowledge.~user",
   "Retriever~Search documents~Relevant passages are found from a knowledge store.~data",
   "LLM + context~Read the evidence~The model receives the question and retrieved passages.~model",
   "Grounded answer~Answer with source~The response uses retrieved information and can cite sources.~user"
  ],
  [
   "queries",
   "supplies passages",
   "generates"
  ]
 ],
 [
  "rag-02",
  "architecture",
  "How embedding search works",
  [
   "Text~Words or document~Text is supplied for numerical representation.~user",
   "Embedding model~Meaning encoder~A model maps text into a numeric vector.~model",
   "Vector store~Similarity map~Vectors are indexed to support nearest-neighbor search.~data",
   "Similar items~Related meaning~Search returns vectors near the query representation.~data"
  ],
  [
   "encodes",
   "indexes",
   "searches"
  ]
 ],
 [
  "rag-03",
  "dataflow",
  "Document chunking in RAG",
  [
   "Document~Long source~A source file contains many sections of text.~data",
   "Chunker~Split into parts~Text is divided into smaller, overlapping passages.~data",
   "Vector index~Searchable pieces~Each passage is embedded and indexed.~data",
   "Retrieved chunk~Useful excerpt~The system fetches passages relevant to the question.~model"
  ],
  [
   "splits",
   "indexes",
   "retrieves"
  ]
 ],
 [
  "rag-04",
  "comparison",
  "Hybrid search combines two signals",
  [
   "Query~What you typed~The user provides a natural-language or exact-match query.~user",
   "Keyword search~Exact words~Lexical retrieval finds matching terms and codes.~data",
   "Vector search~Similar meaning~Semantic retrieval finds conceptually related passages.~model",
   "Merged ranking~Best of both~Results from both methods are combined and reranked.~data"
  ],
  [
   "lexical route",
   "semantic route",
   "combine"
  ]
 ],
 [
  "mcp-01",
  "architecture",
  "MCP: host, client, server and tool",
  [
   "AI host~Assistant app~The host coordinates the user experience and MCP connections.~user",
   "MCP client~Connector~A client inside the host speaks the MCP protocol.~model",
   "MCP server~Tool provider~The server advertises resources, tools, and prompts.~data",
   "Capability~Action or data~A tool or resource supplies authorized results to the host.~external"
  ],
  [
   "creates",
   "discovers / calls",
   "provides"
  ]
 ],
 [
  "mcp-02",
  "sequence",
  "An MCP tool request",
  [
   "Host app~Your assistant~The application needs a capability to complete a task.~user",
   "MCP client~Protocol adapter~The client sends a structured request to its server.~model",
   "MCP server~Capability catalog~The server handles requests for its exposed tools and resources.~data",
   "Tool result~Useful data~The response is returned through the client to the host.~external"
  ],
  [
   "sends",
   "requests",
   "responds"
  ]
 ],
 [
  "mcp-03",
  "flowchart",
  "Security around MCP tools",
  [
   "Tool request~AI asks~The AI application requests access to a tool.~model",
   "Identity~Who is asking?~The tool checks authentication and user context.~error",
   "Authorization~Is it allowed?~Scopes, permissions, and consent govern access.~error",
   "Tool response~Allowed result~Authorized calls return only permitted data.~data"
  ],
  [
   "authenticates",
   "authorizes",
   "returns"
  ]
 ],
 [
  "prompt-01",
  "dataflow",
  "A clear prompt improves output",
  [
   "Task~Your goal~The user states the task to be performed.~user",
   "Constraints~Helpful rules~Instructions specify format, boundaries, and audience.~user",
   "LLM~Follow guidance~The model uses the instructions and context while generating.~model",
   "Output~Expected format~The answer is shaped by the requested format.~user"
  ],
  [
   "specifies",
   "guides",
   "produces"
  ]
 ],
 [
  "prompt-02",
  "sequence",
  "Few-shot prompting",
  [
   "Examples~Show samples~A few input-output examples define the pattern.~user",
   "New input~New task~A new example is included without its answer.~user",
   "LLM context~Notice pattern~The model infers expected behavior from examples.~model",
   "Prediction~Apply pattern~The model produces output in the demonstrated style.~model"
  ],
  [
   "includes",
   "guides",
   "completes"
  ]
 ],
 [
  "prompt-03",
  "flowchart",
  "Defending against prompt injection",
  [
   "External text~Untrusted page~Retrieved content may contain malicious instructions.~external",
   "Trust boundary~Separate authority~System and user instructions remain distinct from page content.~error",
   "Tool guardrail~Restrict action~The application checks permissions and tool arguments.~error",
   "Safe answer~Use data only~The assistant can use content as information without obeying its commands.~model"
  ],
  [
   "isolate",
   "validate",
   "respond"
  ]
 ],
 [
  "prompt-04",
  "dataflow",
  "Generating validated structured output",
  [
   "Schema~Required fields~The application defines expected keys and value types.~user",
   "LLM output~JSON draft~The model generates an object matching the requested shape.~model",
   "Validator~Check structure~A parser checks required fields, types, and constraints.~error",
   "Application~Safe to process~Only validated data is passed to downstream code.~data"
  ],
  [
   "guides",
   "validates",
   "consumes"
  ]
 ],
 [
  "eval-01",
  "flowchart",
  "A model evaluation cycle",
  [
   "Test cases~Representative tasks~A dataset contains inputs and expected criteria.~data",
   "System under test~Model / agent~The model or workflow generates responses.~model",
   "Scoring~Measure quality~Outputs are checked against accuracy, safety, and other metrics.~error",
   "Results~Improve and repeat~Failures guide targeted improvements and retesting.~user"
  ],
  [
   "runs",
   "scores",
   "reports"
  ]
 ],
 [
  "eval-02",
  "comparison",
  "Precision versus recall",
  [
   "Relevant set~What matters~The true set includes all items that should be found.~data",
   "Retrieved set~What was found~Search or a classifier outputs a set of positives.~model",
   "Precision~Correct among found~Precision measures relevant results divided by retrieved results.~data",
   "Recall~Found among relevant~Recall measures relevant results found divided by all relevant results.~data"
  ],
  [
   "compare",
   "evaluate finds",
   "evaluate coverage"
  ]
 ],
 [
  "eval-03",
  "timeline",
  "Train, tune, then test",
  [
   "Training set~Practice problems~Examples teach model parameters.~data",
   "Validation set~Practice exam~Held-out examples guide model choices and tuning.~data",
   "Test set~Final exam~Unseen examples estimate generalization after decisions are frozen.~error"
  ],
  [
   "tunes",
   "evaluates"
  ]
 ],
 [
  "eval-04",
  "sequence",
  "LLM as judge with calibration",
  [
   "Candidate answer~What to grade~A model produces a response to evaluate.~model",
   "Rubric~Scoring rules~A defined rubric makes evaluation criteria explicit.~user",
   "Judge model~Automated reviewer~A second model scores the answer using the rubric.~model",
   "Human audit~Check the judge~Human samples catch bias and grading mistakes.~error"
  ],
  [
   "provides",
   "scores",
   "calibrates"
  ]
 ],
 [
  "tr-01",
  "architecture",
  "A Transformer language-model block",
  [
   "Input tokens~Word pieces~The input sequence is encoded as tokens and position information.~user",
   "Attention~Read context~Self-attention mixes information across permitted positions.~model",
   "Feed-forward layer~Process signals~Per-position transformations refine token representations.~model",
   "Output head~Predict token~The model estimates next-token probabilities.~model"
  ],
  [
   "embeds",
   "transforms",
   "predicts"
  ]
 ],
 [
  "tr-02",
  "dataflow",
  "How self-attention uses context",
  [
   "Token vectors~Word meanings~Each input position is represented as a vector.~data",
   "Query / key~Find relevance~Similarity scores estimate which positions matter.~model",
   "Attention weights~Focus strength~Normalized scores determine how much to use from each token.~model",
   "Weighted values~Context summary~Values are combined to form contextual token representations.~model"
  ],
  [
   "compares",
   "weights",
   "combines"
  ]
 ],
 [
  "tr-03",
  "dataflow",
  "Position in a Transformer",
  [
   "Token sequence~Ordered words~The model receives tokens in a particular order.~user",
   "Position signal~Seat number~Position information marks the order or relative offsets.~data",
   "Attention~Position-aware view~The model combines content with position information.~model"
  ],
  [
   "encodes",
   "uses"
  ]
 ],
 [
  "tr-04",
  "timeline",
  "KV caching while generating",
  [
   "First token~Start generation~The model computes attention keys and values for a prefix.~model",
   "KV cache~Save earlier work~Past keys and values are stored for reuse.~data",
   "Next token~Add one piece~New attention states are computed while cached states are reused.~model",
   "Longer reply~Repeat quickly~The cache grows as more tokens are generated.~user"
  ],
  [
   "stores",
   "reuses",
   "continues"
  ]
 ],
 [
  "ft-01",
  "timeline",
  "Fine-tuning a pretrained model",
  [
   "Base model~Skilled generalist~A pretrained model has broad learned capabilities.~model",
   "Task examples~Specialty practice~Curated examples specify desired behavior.~data",
   "Training updates~Adjust weights~Optimization changes selected model parameters.~model",
   "Adapted model~Specialized helper~The result is evaluated on held-out task examples.~user"
  ],
  [
   "supplies",
   "trains",
   "evaluates"
  ]
 ],
 [
  "ft-02",
  "architecture",
  "LoRA: lightweight model adaptation",
  [
   "Frozen weights~Original engine~Most pretrained model weights remain unchanged.~model",
   "LoRA adapters~Small additions~Trainable low-rank matrices modify selected layer outputs.~data",
   "Training data~New examples~A task dataset updates adapter parameters.~data",
   "Adapted output~New behavior~The model combines frozen parameters and learned adaptations.~model"
  ],
  [
   "attaches",
   "trains",
   "applies"
  ]
 ],
 [
  "ft-03",
  "flowchart",
  "Spotting overfitting",
  [
   "Training data~Practice set~The model learns from training examples.~data",
   "Validation data~Unseen check~Separate examples test whether behavior generalizes.~error",
   "Compare results~Look for gap~A large train-validation gap may indicate overfitting.~model",
   "Adjust training~Fix the mismatch~Use regularization, diversity, or earlier stopping.~user"
  ],
  [
   "evaluates",
   "compares",
   "revises"
  ]
 ],
 [
  "ft-04",
  "comparison",
  "RAG versus fine-tuning",
  [
   "Changing facts~Fresh policy~Facts update regularly and need reliable sources.~data",
   "RAG~Open-book lookup~Retrieve current evidence at inference time.~data",
   "Stable behavior~Consistent style~A desired format or skill is learned from examples.~user",
   "Fine-tuning~Specialty training~Update model weights to adapt response behavior.~model"
  ],
  [
   "choose retrieval",
   "choose adaptation",
   "combine if needed"
  ]
 ]
];
const roles:Record<string,DiagramRole>={user:"user",model:"model",data:"data",external:"external",error:"error"};
export function makeVisualLearning(q:Question):VisualLearning|undefined{
 const spec=specs.find(s=>s[0]===q.id);
 if(!spec)return undefined;
 const [,diagramType,title,stages,labels]=spec;
 const nodes=stages.map((stage,i)=>{const [label,simpleLabel,description,rawRole]=stage.split("~");return {
 id:"n"+i,label,simpleLabel,description,role:roles[rawRole]||"data",
 why:i===0?"This starts the process.":i===stages.length-1?"This completes the workflow.":"This transforms or checks the preceding stage before the next action.",
 analogy:q.analogy||"Like passing work from one teammate to another.",
 realWorldExample:q.realWorldExample||"This stage appears in practical AI workflows.",
 commonMistake:q.commonMisconception||"The diagram is simplified and does not show every implementation detail."
 }});
 const edges=labels.map((label,i)=>({id:"e"+i,from:nodes[i].id,to:nodes[i+1].id,label,kind:nodes[i+1].role==="error"?"error" as const:"normal" as const}));
 const steps=nodes.map((node,i)=>({id:i+1,highlightNodes:[node.id],highlightEdges:i?[edges[i-1].id]:[],caption:node.simpleLabel+": "+node.description,technicalCaption:node.label+": "+node.description}));
 return {diagramType,title,nodes,edges,steps,beginnerView:"Simple labels and relatable explanations",technicalView:"Accurate components and processing details",altText:title+". "+nodes.map(n=>n.label).join(" then ")+".",};
}
export const diagramIds=specs.map(s=>s[0]);
