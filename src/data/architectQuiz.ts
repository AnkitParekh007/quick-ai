import type {Question} from "../types";
/** Generated definition checks for the expanded bank; manually authored checks can override this. */
export function makeQuizOptions(q:Question,all:Question[]):Partial<Question>{
 const number=Number(q.id.match(/(\d+)$/)?.[1]||0);
 const peers=all.filter(p=>p.category===q.category&&p.id!==q.id);
 const seed=[...q.id].reduce((n,c)=>n*31+c.charCodeAt(0),7)>>>0;
 const rotated=[...peers.slice(seed%Math.max(peers.length,1)),...peers.slice(0,seed%Math.max(peers.length,1))].slice(0,3);
 if(number%5===0)return {};
 if(number%5===2||number%5===4){
  if(number%5===2)return {isTrueFalse:true,correctBoolean:true,quizPrompt:"True or false: "+q.answer.split(/\.\s/)[0]+"."};
  const other=rotated[0]||q;
  const subject=q.question.replace(/^(What|Why|How|When|Does|Do|Is|Can)\s+/i,"").replace(/[?]$/,"");
  const alternate=other.question.replace(/^(What|Why|How|When|Does|Do|Is|Can)\s+/i,"").replace(/[?]$/,"");
  return {isTrueFalse:true,correctBoolean:false,quizPrompt:"True or false: "+subject+" and "+alternate+" describe the same concept."};
 }
 const short=(s:string)=>s.split(/\.\s/)[0].replace(/\.$/,"").trim()+".";
 const choice=[short(q.answer),...rotated.map(p=>short(p.answer))];
 if(choice.length!==4||new Set(choice).size!==4)return {};
 const answerIndex=seed%4;
 const correct=choice.shift()!;
 choice.splice(answerIndex,0,correct);
 return {quizOptions:choice,correctOptionIndex:answerIndex};
}
