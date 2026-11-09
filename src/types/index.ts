export const categories = ["LLMs","Agents","RAG","MCP","Prompting","Evaluation","Transformers","Fine-tuning"] as const;
export type Category=typeof categories[number];
export type Difficulty="Beginner"|"Intermediate"|"Advanced";
export type Tag=string;
export interface Question{id:string;question:string;answer:string;category:Category;tags:Tag[];difficulty:Difficulty;relatedIds?:string[]}
export type ProgressStatus="learned"|"review";
export type Progress=Record<string,ProgressStatus>;
export type Theme="light"|"dark"|"system";
