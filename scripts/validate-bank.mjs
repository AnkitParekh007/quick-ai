import {readFileSync} from "node:fs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
const categories=new Set(JSON.parse(read("src/types/index.ts").match(/export const categories = (\[[^;]*\]) as const;/)?.[1]||"[]"));
const base=read("src/data/questions.ts").split("const baseQuestions:Question[]=[")[1]?.split("\n];")[0]||"";
const oldIds=[...base.matchAll(/id:"([a-z]+-\d+)"/g)].map(m=>m[1]);
const allIds=[...oldIds],questions=[];
const fail=(message)=>{throw new Error("Question bank validation failed: "+message)};
if(oldIds.length!==32)fail("expected to preserve 32 original questions, got "+oldIds.length);
for(const suffix of ["A","B","C","D","E"]){
 const text=read("src/data/architectQuestions"+suffix+".ts");
 const json=text.slice(text.indexOf("=[")+1,text.lastIndexOf("]")+1);
 const items=JSON.parse(json);
 for(const q of items){
  allIds.push(q.id);questions.push(q);
  if(typeof q.question!=="string"||q.question.length<12)fail("missing question in "+q.id);
  if(typeof q.answer!=="string"||q.answer.length<55||q.answer.length>300)fail("answer length invalid for "+q.id+" ("+q.answer?.length+")");
  if(!categories.has(q.category))fail("unknown category "+q.category+" for "+q.id);
  if(!["Beginner","Intermediate","Advanced"].includes(q.difficulty))fail("invalid difficulty for "+q.id);
  if(!Array.isArray(q.tags)||!q.tags.length)fail("tags missing for "+q.id);
  if(typeof q.realWorldExample!=="string"||q.realWorldExample.length<15)fail("example missing for "+q.id);
 }
}
const seen=new Set();for(const id of allIds){if(seen.has(id))fail("duplicate ID "+id);seen.add(id)}
const seenQuestions=new Set();for(const q of questions){const key=q.question.toLowerCase().replace(/[^a-z0-9]/g,"");if(seenQuestions.has(key))fail("duplicate question "+q.question);seenQuestions.add(key)}
const text=read("src/data/architectScenarios.ts");const scenarios=JSON.parse(text.slice(text.indexOf("={")+1,text.lastIndexOf("}")+1));
for(const [id,s] of Object.entries(scenarios)){
 if(!seen.has(id))fail("scenario has unknown question ID "+id);
 if(s.options?.length!==4||s.feedback?.length!==4||s.correctOptionIndex<0||s.correctOptionIndex>3)fail("invalid scenario "+id);
}
if(allIds.length<200)fail("expected at least 200 questions");
console.log("Validated "+allIds.length+" unique questions in "+categories.size+" categories, "+Object.keys(scenarios).length+" added architecture scenarios.");
