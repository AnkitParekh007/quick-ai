import type {ArchitectDesign} from "../context/CareerContext";
import {validateArchitecture} from "../pages/ArchitectCanvas";
export const reviewCriteria=[
{id:"business",name:"Business fit",keywords:["goal","customer","user","business","success","kpi","requirement"],hint:"State who benefits and how task success is measured."},
{id:"security",name:"Security",keywords:["auth","permission","least privilege","guardrail","injection","validation","access"],hint:"Add authorization, tool boundaries and injection-resistant execution."},
{id:"privacy",name:"Privacy",keywords:["privacy","personal","pii","retention","tenant","consent","encrypt"],hint:"Specify which sensitive data is collected, how it is isolated and retained."},
{id:"scalability",name:"Scalability",keywords:["scale","queue","concurrency","throughput","batch","traffic","capacity"],hint:"Plan for request volume, burst handling, and storage capacity."},
{id:"reliability",name:"Reliability",keywords:["retry","fallback","timeout","availability","idempot","rollback","failure"],hint:"Describe timeouts, retries, recovery and graceful degradation."},
{id:"cost",name:"Cost",keywords:["cost","token","budget","cache","route","pricing","spend"],hint:"Set budgets and model-routing or caching considerations."},
{id:"latency",name:"Latency",keywords:["latency","p95","stream","time","fast","response","speed"],hint:"Set response-time targets and measure slow pipeline stages."},
{id:"observability",name:"Observability",keywords:["trace","monitor","log","metric","eval","alert","dashboard"],hint:"Define evaluation, tracing, logs, and alerting with privacy safeguards."},
{id:"human",name:"Human oversight",keywords:["human","review","approval","escalate","operator","consent"],hint:"Identify when a trusted human must review or approve the system."},
{id:"maintainability",name:"Maintainability",keywords:["version","test","document","deploy","adr","update","owner"],hint:"Document ownership, versioning, regression tests and deployment process."}
] as const;
export interface CriterionResult{name:string;covered:boolean;evidence:string;suggestion:string}
export interface MentorFeedback{coverage:number;criteria:CriterionResult[];strengths:string[];gaps:string[];nextQuestions:string[];warnings:string[];summary:string}
export function evaluateMentor(text:string,design?:ArchitectDesign):MentorFeedback{
 const normalized=text.toLowerCase();const blockTypes=new Set(design?.blocks.map(b=>b.type)||[]);
 const structural=design?validateArchitecture(design.blocks,design.edges):[];
 const equivalents:Record<string,string[]>={business:["user","app"],security:["guardrails"],privacy:["db","guardrails"],scalability:["queue","cache","cloud"],reliability:["queue","cache"],cost:["cache"],latency:["cache"],observability:["monitoring"],human:["human"],maintainability:["monitoring"]};
 const criteria=reviewCriteria.map(c=>{const found=c.keywords.filter(word=>normalized.includes(word));const blocks=(equivalents[c.id]||[]).filter(b=>blockTypes.has(b));const covered=found.length>0||blocks.length>0;return{name:c.name,covered,evidence:covered?[...found.slice(0,3),...blocks.map(x=>"component: "+x)].join(", "):"No explicit evidence found",suggestion:c.hint}});
 const strengths=criteria.filter(c=>c.covered).map(c=>c.name+": "+c.evidence).slice(0,5);
 const gaps=criteria.filter(c=>!c.covered).map(c=>c.name+": "+c.suggestion).slice(0,5);
 return {coverage:Math.round(criteria.filter(c=>c.covered).length/criteria.length*100),criteria,strengths,gaps,nextQuestions:["What measurable business outcome defines success?","What happens when the model, search index, or external tool fails?","Where do personal data and high-risk actions cross a trust boundary?"],warnings:structural,summary:"This is a transparent checklist-based review. It detects key topics and diagram blocks; it does not verify technical correctness or substitute for an expert architecture review."};
}
