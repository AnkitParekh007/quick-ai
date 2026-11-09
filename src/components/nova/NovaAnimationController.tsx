import {useEffect,useState} from "react";
export type NovaState="idle"|"greeting"|"thinking"|"speaking"|"success"|"incorrect"|"review"|"error";
export type NovaEvent="OPEN"|"THINK"|"SPEAK"|"DONE"|"CORRECT"|"INCORRECT"|"REVIEW"|"ERROR"|"RESET";
export function nextNovaState(state:NovaState,event:NovaEvent):NovaState{
 const map:Record<NovaEvent,NovaState>={OPEN:"greeting",THINK:"thinking",SPEAK:"speaking",DONE:"idle",CORRECT:"success",INCORRECT:"incorrect",REVIEW:"review",ERROR:"error",RESET:"idle"};
 if(state==="error"&&event==="DONE")return "error";
 return map[event];
}
export function useNovaAnimationController(initial:NovaState="idle"){
 const [state,setState]=useState<NovaState>(initial);
 const send=(event:NovaEvent)=>setState(current=>nextNovaState(current,event));
 useEffect(()=>{if(!["greeting","success","incorrect","review"].includes(state))return;const id=window.setTimeout(()=>setState(current=>current===state?"idle":current),2400);return()=>window.clearTimeout(id)},[state]);
 return {state,send};
}
export function NovaAnimationController({state,children}:{state:NovaState;children:(state:NovaState)=>React.ReactNode}){return <>{children(state)}</>}
