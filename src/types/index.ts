export const categories = ["LLMs","Agents","RAG","MCP","Prompting","Evaluation","Transformers","Fine-tuning"] as const;
export type Category=typeof categories[number];
export type Difficulty="Beginner"|"Intermediate"|"Advanced";
export type Tag=string;
export interface Question{id:string;question:string;answer:string;category:Category;tags:Tag[];difficulty:Difficulty;relatedIds?:string[];quizOptions?:string[];correctOptionIndex?:number;explanation?:string;isTrueFalse?:boolean;correctBoolean?:boolean;fillInTheBlankAnswer?:string;acceptableAnswers?:string[];quizPrompt?:string}
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
