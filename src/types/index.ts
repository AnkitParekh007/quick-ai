export const categories = ["LLMs","Agents","RAG","MCP","Prompting","Evaluation","Transformers","Fine-tuning","AI Foundations","Machine Learning","Neural Networks","LLM Engineering","Context Engineering","Retrieval Engineering","Agent Orchestration","State & Memory","Tool Integration","Safety & Security","Evaluation Design","Observability","Model Serving","Optimization","Multimodal AI","Data Engineering","System Architecture","Governance"] as const;
export type Category=typeof categories[number];
export type Difficulty="Beginner"|"Intermediate"|"Advanced";
export type Tag=string;
export interface Question{id:string;question:string;answer:string;category:Category;tags:Tag[];difficulty:Difficulty;relatedIds?:string[];shortAnswer?:string;analogy?:string;realWorldExample?:string;commonMisconception?:string;relatedConcepts?:string[];visualExplanation?:VisualExplanation;visualLearning?:VisualLearning;keyIdeas?:string[];scenario?:Scenario;quizOptions?:string[];correctOptionIndex?:number;explanation?:string;isTrueFalse?:boolean;correctBoolean?:boolean;fillInTheBlankAnswer?:string;acceptableAnswers?:string[];quizPrompt?:string}
export type ProgressStatus="learned"|"review";
export type Progress=Record<string,ProgressStatus>;
export type Theme="light"|"dark"|"system";

export type QuizKind="multiple-choice"|"true-false"|"fill-blank"|"flashcard"|"scenario";
export type QuizSource="all"|"category"|"tags"|"difficulty"|"review"|"incorrect"|"weak"|"due"|"scenario";
export type SpacedRating="Again"|"Hard"|"Good"|"Easy";
export interface QuizAnswer {questionId:string;kind:QuizKind;answer:string|boolean|null;correctAnswer:string;isCorrect:boolean;rating?:SpacedRating}
export interface CategoryScore {correct:number;total:number}
export interface QuizAttempt {id:string;startedAt:string;completedAt:string;questionIds:string[];selectedAnswers:QuizAnswer[];correctCount:number;totalCount:number;scorePercentage:number;durationSeconds:number;categoryBreakdown:Record<string,CategoryScore>}
export interface QuestionStats {timesSeen:number;correctAnswers:number;incorrectAnswers:number;lastAttemptedAt:string}
export interface ReviewSchedule {dueAt:string;rating:SpacedRating}
export interface QuizSession {id:string;startedAt:string;questionIds:string[];currentIndex:number;answers:QuizAnswer[];scenarioMode?:boolean}

export interface VisualExplanation {nodes:string[];caption:string}
export interface Scenario {situation:string;options:string[];correctOptionIndex:number;feedback:string[]}
export interface LearningMetadata {analogy:string;realWorldExample:string;commonMisconception:string;relatedConcepts:string[];keyIdeas:string[];visualExplanation?:VisualExplanation}
export type Clarity="clear"|"somewhat"|"confusing";
export interface TeachBackResult {questionId:string;text:string;matched:string[];missing:string[];at:string}
export interface LearningEvent {questionId:string;date:string;kind:"teach"|"view"|"quiz"|"daily"}

export type DiagramType="sequence"|"architecture"|"flowchart"|"comparison"|"dataflow"|"timeline";
export type DiagramRole="user"|"model"|"data"|"external"|"error";
export interface DiagramNode {id:string;label:string;simpleLabel:string;description:string;why:string;analogy:string;realWorldExample:string;commonMistake:string;role:DiagramRole}
export interface DiagramEdge {id:string;from:string;to:string;label:string;kind?:"normal"|"error"}
export interface DiagramStep {id:number;highlightNodes:string[];highlightEdges:string[];caption:string;technicalCaption?:string}
export interface VisualLearning {diagramType:DiagramType;title:string;nodes:DiagramNode[];edges:DiagramEdge[];steps:DiagramStep[];beginnerView:string;technicalView:string;altText:string}
