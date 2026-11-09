import {useCallback,useEffect,useMemo,useState} from "react";
import {Link} from "react-router-dom";
import {BookCheck,BookOpen,Maximize2,Minimize2,Settings2,X} from "lucide-react";
import type {Question} from "../../types";
import {NovaMascot} from "./NovaMascot";
import {NovaMessage} from "./NovaMessage";
import {NovaControls} from "./NovaControls";
import {TypewriterText} from "./TypewriterText";
import {useNovaAnimationController} from "./NovaAnimationController";
import {modeOrder,novaModes,novaScript,type NovaMode} from "../../data/novaScripts";
import {useNovaSettings} from "../../context/NovaContext";
import {useQuiz} from "../../context/QuizContext";
export function useNovaReducedMotion(){const [reduced,setReduced]=useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);useEffect(()=>{const mq=window.matchMedia("(prefers-reduced-motion: reduce)");const update=()=>setReduced(mq.matches);mq.addEventListener("change",update);return()=>mq.removeEventListener("change",update)},[]);return reduced}
export function NovaPanel({question:q,onClose,onMinimize,onHide}:{question:Question;onClose:()=>void;onMinimize:()=>void;onHide:()=>void}){
 const {prefs}=useNovaSettings();const {schedule}=useQuiz();const prefersReduced=useNovaReducedMotion();const reduced=prefersReduced||!prefs.animations;
 const {state,send}=useNovaAnimationController();
 const [mode,setMode]=useState<NovaMode>("simple");const [epoch,setEpoch]=useState(0);const [paused,setPaused]=useState(false);const [fast,setFast]=useState(false);const [finished,setFinished]=useState(false);const [text,setText]=useState("");
 const script=useMemo(()=>novaScript(q,mode),[q,mode]);const due=Object.values(schedule).filter(s=>new Date(s.dueAt).getTime()<=Date.now()).length;
 const onComplete=useCallback(()=>{setFinished(true);send("DONE")},[]);
 const play=(newMode?:NovaMode)=>{if(newMode)setMode(newMode);setFinished(false);setPaused(false);setEpoch(n=>n+1);send("THINK")};
 useEffect(()=>{const timer=window.setTimeout(()=>send("SPEAK"),reduced?0:240);return()=>window.clearTimeout(timer)},[epoch,reduced]);
 const firstVisit=useMemo(()=>{try{const k="nova-greeted-"+q.id;if(sessionStorage.getItem(k))return false;sessionStorage.setItem(k,"1");return true}catch{return false}},[q.id]);
 useEffect(()=>{if(firstVisit)send("OPEN");else send("THINK")},[firstVisit,q.id]);
 useEffect(()=>{setMode("simple");setEpoch(0);setFinished(false);setPaused(false);setText("")},[q.id]);
 const skip=()=>{setPaused(false);setFinished(true);setEpoch(e=>e+1);send("DONE")};
 const [forceFull,setForceFull]=useState(false);
 const announce=finished?"Nova's explanation is ready: "+script:"";
 return <section aria-label="Nova learning companion" className={"nova-panel rounded-2xl border border-line bg-surface shadow-xl "+(forceFull?"nova-panel-wide":"")}>
 <header className="flex items-center justify-between gap-2 border-b border-line p-3"><div className="flex items-center gap-2"><NovaMascot state={state} size={48} reduced={reduced}/><div><h2 className="font-bold">Nova <span className="text-xs font-medium text-muted">· study buddy</span></h2><p className="text-xs text-muted">{firstVisit?"Hi! Let’s understand this together.":"Ready when you are."}</p></div></div><div className="flex items-center gap-1"><button title="Expand panel" aria-label="Expand Nova panel" onClick={()=>setForceFull(v=>!v)} className="icon-button hidden lg:block">{forceFull?<Minimize2 size={17}/>:<Maximize2 size={17}/>}</button><button title="Minimize Nova" aria-label="Minimize Nova" onClick={onMinimize} className="icon-button"><Minimize2 size={17}/></button><button title="Close Nova" aria-label="Close Nova" onClick={onClose} className="icon-button"><X size={17}/></button></div></header>
 <div className="max-h-[min(65vh,670px)] space-y-4 overflow-y-auto p-4">
 {due>0&&<div className="flex items-center justify-between gap-2 rounded-lg bg-soft p-2 text-xs"><span>{due} {due===1?"concept is":"concepts are"} ready for a quick review.</span><Link to="/quiz" className="font-semibold text-accent">Review</Link></div>}
 <div className="flex items-center justify-between gap-3"><label htmlFor="nova-mode" className="text-sm font-semibold">Explain differently</label><select id="nova-mode" className="max-w-44 rounded-lg border border-line bg-canvas px-2 py-2 text-xs text-ink" value={mode} onChange={e=>play(e.target.value as NovaMode)}>{modeOrder.map(m=><option value={m} key={m}>{novaModes[m]}</option>)}</select></div>
 <NovaMessage complete={finished}><div className="mb-2 text-xs font-semibold text-accent">{state==="thinking"?"Let me break this down…":mode==="simple"?"Let’s make this simple.":novaModes[mode]}</div><TypewriterText key={q.id+"-"+mode+"-"+epoch} text={script} paused={paused} speed={fast?5:2} reduced={reduced||finished} epoch={epoch} onComplete={onComplete}/></NovaMessage>
 <div className="sr-only" aria-live="polite">{announce}</div>
 <NovaControls paused={paused} finished={finished} fast={fast} onPause={()=>setPaused(p=>!p)} onSkip={skip} onReplay={()=>play()} onSpeed={()=>setFast(true)} reduced={reduced}/>
 {finished&&<div className="flex flex-wrap gap-2"><button className="rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-white" onClick={onMinimize}><BookCheck size={13} className="mr-1 inline"/>Got it</button><button className="rounded-lg border border-line px-3 py-2 text-xs font-semibold" onClick={()=>play(modeOrder[(modeOrder.indexOf(mode)+1)%modeOrder.length])}>Explain differently</button><button className="rounded-lg border border-line px-3 py-2 text-xs font-semibold" onClick={()=>{onMinimize();document.getElementById("visual-learning")?.scrollIntoView({behavior:reduced?"auto":"smooth",block:"start"})}}>Show diagram</button><Link className="rounded-lg border border-line px-3 py-2 text-xs font-semibold" to="/quiz">Quiz me on this</Link></div>}
 <form onSubmit={e=>{e.preventDefault();if(text.trim()){setText("");play("simple")}}} className="border-t border-line pt-4"><label htmlFor="nova-teachback" className="text-xs font-semibold">Can you explain {q.category} in one line?</label><textarea id="nova-teachback" value={text} onChange={e=>setText(e.target.value)} rows={2} placeholder="Try explaining it in your own words…" className="mt-2 w-full rounded-lg border border-line bg-canvas p-2 text-sm text-ink"/><p className="mt-1 text-xs text-muted">For detailed feedback, use Teach it back below the diagram.</p><button type="button" onClick={()=>{onMinimize();document.querySelector('[id^="teach-"]')?.scrollIntoView({behavior:reduced?"auto":"smooth"})}} className="mt-2 rounded-lg border border-line px-3 py-2 text-xs font-semibold">Open Teach it back</button></form>
 <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3"><button onClick={onHide} className="text-xs font-semibold text-muted hover:text-ink">Hide Nova on this page</button><Link to="/settings" className="inline-flex items-center gap-1 text-xs font-semibold text-accent"><Settings2 size={14}/> Nova settings</Link></div>
 </div></section>
}
