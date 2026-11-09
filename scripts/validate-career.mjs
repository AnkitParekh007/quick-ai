import {readFileSync} from "node:fs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
function data(path,marker,end){const text=read(path);const start=text.indexOf(marker);if(start<0)throw Error("Missing "+marker+" in "+path);const from=text.indexOf("=[",start);if(from<0)throw Error("Expected inline JSON-like list in "+path);const last=end?text.indexOf(end,from):text.lastIndexOf("];")+1;return JSON.parse(text.slice(from+1,last+1))}
function parseArray(path,token){const s=read(path),p=s.indexOf(token);if(p<0)throw Error("Missing "+token);const start=s.indexOf("=[",p)+1;let depth=0,end=start;let quote=false,escape=false;for(;end<s.length;end++){const c=s[end];if(escape){escape=false;continue}if(c==="\\"&&quote){escape=true;continue}if(c==='"'){quote=!quote;continue}if(quote)continue;if(c==="[")depth++;if(c==="]"){depth--;if(depth===0){end++;break}}}return JSON.parse(s.slice(start,end))}
const paths=parseArray("src/data/careerPaths.ts","export const guidedPaths:");
const projects=parseArray("src/data/careerProjects.ts","export const buildProjects:");
const drills=parseArray("src/data/architectExercises.ts","export const decisionDrills:");
const challenges=parseArray("src/data/architectExercises.ts","export const designChallenges:");
const failures=parseArray("src/data/architectExercises.ts","export const failureCases:");
function assert(ok,msg){if(!ok)throw new Error("Career curriculum: "+msg)}
assert(paths.length===8,"Expected 8 guided paths");
const ids=new Set(paths.map(p=>p.id));assert(ids.size===8,"Duplicate path ID");
const lessons=paths.flatMap(p=>p.lessons.map(l=>l.id));
assert(lessons.length===32&&new Set(lessons).size===32,"Expected 32 unique lessons");
for(const p of paths){assert(p.minutes>0&&p.lessons.length===4,"Incomplete "+p.id);for(const pre of p.prerequisites)assert(ids.has(pre),"Unknown prerequisite "+pre);for(const lesson of p.lessons)assert(lesson.why&&lesson.analogy&&lesson.checkpoint&&lesson.activity,"Missing lesson guidance "+lesson.id)}
assert(drills.length>=6&&failures.length>=7&&challenges.length>=7,"Missing scenario coverage");
for(const d of drills)assert(d.choices.length===4&&d.correct>=0&&d.correct<4&&d.choices[d.correct]===d.recommended,"Invalid drill "+d.id);
for(const d of failures)assert(d.options.length===3&&d.correct>=0&&d.correct<3&&d.rootChoices.length===3&&d.rootChoices[d.rootCorrect]===d.root,"Invalid failure case "+d.id);
assert(projects.length===6,"Expected six projects");for(const p of projects)assert(p.checkpoints.length>=4&&p.rubric.length>=2&&p.starter,"Incomplete project "+p.id);
console.log("Validated "+paths.length+" paths, "+lessons.length+" lessons, "+drills.length+" decision drills, "+challenges.length+" design challenges, "+failures.length+" failures, "+projects.length+" projects.");
