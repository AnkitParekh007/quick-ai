import {useEffect,useState} from "react";
import type {Question} from "../../types";
import {NovaMascot} from "./NovaMascot";
import {NovaPanel,useNovaReducedMotion} from "./NovaPanel";
import {useNovaSettings} from "../../context/NovaContext";
export function NovaBubble({question}:{question:Question}){
 const {prefs}=useNovaSettings();const [open,setOpen]=useState(prefs.defaultOpen);const [hidden,setHidden]=useState(false);const reduced=useNovaReducedMotion();
 useEffect(()=>{setOpen(prefs.defaultOpen);setHidden(false)},[question.id,prefs.defaultOpen]);
 if(!prefs.enabled||hidden)return null;
 return <><div className={"nova-overlay fixed inset-0 z-40 bg-black/40 lg:hidden "+(open?"block":"hidden")} onClick={()=>setOpen(false)} aria-hidden="true"/>{open?<div className="nova-dock fixed inset-x-0 bottom-0 z-50 mx-auto max-w-xl lg:fixed lg:inset-x-auto lg:right-4 lg:bottom-4 lg:w-[370px]"><NovaPanel key={question.id} question={question} onClose={()=>setOpen(false)} onMinimize={()=>setOpen(false)} onHide={()=>{setHidden(true);setOpen(false)}}/></div>:<button type="button" onClick={()=>setOpen(true)} aria-label="Open Nova study buddy" className="nova-bubble fixed bottom-5 right-4 z-30 flex items-center gap-2 rounded-full border border-line bg-surface py-1 pl-1 pr-3 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><NovaMascot size={48} reduced={reduced||!prefs.animations}/><span className="text-xs font-semibold text-ink">Ask Nova</span></button>}</>
}
