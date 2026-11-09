import type {Question} from "../types";
export type NovaMode="simple"|"analogy"|"example"|"technical"|"interview"|"scenario";
export const novaModes:Record<NovaMode,string>={simple:"Simple explanation",analogy:"Real-life analogy",example:"Practical example",technical:"Technical explanation",interview:"Interview-style answer",scenario:"Scenario-based explanation"};
export const modeOrder=Object.keys(novaModes) as NovaMode[];
export function novaScript(q:Question,mode:NovaMode):string{
 switch(mode){
 case "simple":return q.analogy?("Think of it this way: "+q.analogy+" "+(q.shortAnswer||q.answer)):(q.shortAnswer||q.answer);
 case "analogy":return (q.analogy||q.answer)+" This is an analogy, not an exact definition.";
 case "example":return "Here's where you'll see it: "+(q.realWorldExample||q.answer);
 case "technical":return q.shortAnswer||q.answer;
 case "interview":return "In an interview, I'd say: "+(q.shortAnswer||q.answer);
 case "scenario":return q.scenario?("Imagine this: "+q.scenario.situation+" The suitable approach is "+q.scenario.options[q.scenario.correctOptionIndex]+". "+q.scenario.feedback[q.scenario.correctOptionIndex]):("In practice: "+(q.realWorldExample||q.answer)+" The key idea is: "+(q.shortAnswer||q.answer));
 }
}
