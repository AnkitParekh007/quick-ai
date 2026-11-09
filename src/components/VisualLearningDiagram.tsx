import {memo,useEffect,useMemo,useState} from "react";
import {ChevronLeft,ChevronRight,Maximize2,Minus,Pause,Play,Plus,RotateCcw,SkipForward} from "lucide-react";
import type {DiagramEdge,DiagramNode,Question,VisualLearning} from "../types";

type Mode="beginner"|"technical";
type Point={x:number;y:number};
const WIDTH=1040;
const NODE_W=196;
const NODE_H=98;
function useSmallScreen(){const [small,setSmall]=useState(()=>window.matchMedia("(max-width: 640px)").matches);useEffect(()=>{const mq=window.matchMedia("(max-width: 640px)");const cb=()=>setSmall(mq.matches);mq.addEventListener("change",cb);return()=>mq.removeEventListener("change",cb)},[]);return small}
function useReducedMotion(){const [reduced,setReduced]=useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);useEffect(()=>{const mq=window.matchMedia("(prefers-reduced-motion: reduce)");const cb=()=>setReduced(mq.matches);mq.addEventListener("change",cb);return()=>mq.removeEventListener("change",cb)},[]);return reduced}
function labelLines(label:string,limit=18){const words=label.split(" ");const lines:string[]=[];let line="";for(const word of words){if((line+" "+word).trim().length>limit&&line){lines.push(line);line=word}else line=(line+" "+word).trim()}if(line)lines.push(line);return lines.slice(0,3)}
function layout(diagram:VisualLearning,small:boolean){
 const failure=diagram.nodes.some(n=>n.id==="failure");
 const core=diagram.nodes.filter(n=>n.id!=="failure");
 const positions:Record<string,Point>={};
 const viewWidth=small?390:WIDTH;
 const viewHeight=small?core.length*145+(failure?180:45):failure?490:350;
 core.forEach((node,i)=>{positions[node.id]=small?{x:195,y:82+i*145}:{x:(i+0.5)*(WIDTH/core.length),y:170}});
 if(failure)positions.failure=small?{x:195,y:core.length*145+50}:{x:WIDTH*.64,y:390};
 return {positions,viewWidth,viewHeight};
}
function edgeLine(edge:DiagramEdge,positions:Record<string,Point>,small:boolean){
 const a=positions[edge.from],b=positions[edge.to];if(!a||!b)return null;
 const failure=edge.to==="failure";
 if(small){const start={x:a.x,y:a.y+NODE_H/2},end={x:b.x,y:b.y-NODE_H/2-6};return {start,end,mid:{x:(start.x+end.x)/2,y:(start.y+end.y)/2}}}
 if(failure){const start={x:a.x,y:a.y+NODE_H/2},end={x:b.x,y:b.y-NODE_H/2-6};return {start,end,mid:{x:(start.x+end.x)/2,y:(start.y+end.y)/2}}}
 const start={x:a.x+NODE_W/2,y:a.y},end={x:b.x-NODE_W/2-9,y:b.y};
 return {start,end,mid:{x:(start.x+end.x)/2,y:(start.y+end.y)/2}};
}
const tone:Record<DiagramNode["role"],string>={user:"blue",model:"purple",data:"green",external:"orange",error:"red"};

const DiagramCanvas=memo(function DiagramCanvas({diagram,small,reduced,activeStep,selected,onSelect,mode,zoom}:{diagram:VisualLearning;small:boolean;reduced:boolean;activeStep:number;selected:string;onSelect:(id:string)=>void;mode:Mode;zoom:number}){
 const {positions,viewWidth,viewHeight}=useMemo(()=>layout(diagram,small),[diagram,small]);
 const active=activeStep>=0?diagram.steps[activeStep]:undefined;
 const activeNodes=new Set(active?.highlightNodes||[]);
 const activeEdges=new Set(active?.highlightEdges||[]);
 const hasStep=!!active;
 return <div className="overflow-auto rounded-xl border border-line bg-canvas" role="region" aria-label={"Zoomable "+diagram.diagramType+" diagram"} tabIndex={0}>
 <svg style={{width:zoom*100+"%",minWidth:"100%",height:"auto",display:"block"}} viewBox={`0 0 ${viewWidth} ${viewHeight}`} role="group" aria-label={diagram.altText} className="select-none">
 <title>{diagram.altText}</title><defs>
 {["blue","purple","green","orange","red","neutral"].map(color=><marker key={color} id={"viz-arrow-"+color} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill={`var(--viz-${color}-stroke)`}/></marker>)}
 </defs>
 {diagram.edges.map(edge=>{const points=edgeLine(edge,positions,small);if(!points)return null;const activeEdge=activeEdges.has(edge.id);const endNode=diagram.nodes.find(n=>n.id===edge.to);const color=activeEdge?(edge.kind==="error"?"red":"purple"):"neutral";const path=`M ${points.start.x} ${points.start.y} L ${points.end.x} ${points.end.y}`;return <g key={edge.id} opacity={hasStep&&!activeEdge?0.35:1}><path d={path} fill="none" stroke={`var(--viz-${color}-stroke)`} strokeWidth={activeEdge?4:2.5} markerEnd={`url(#viz-arrow-${color})`} strokeDasharray={activeEdge&&!reduced?"8 7":undefined} className={activeEdge&&!reduced?"viz-flow":undefined}/>{activeEdge&&!reduced&&<circle r="6" fill={`var(--viz-${tone[endNode?.role||"model"]}-stroke)`}><animateMotion key={edge.id+"-"+activeStep} dur="1.5s" path={path} repeatCount="indefinite"/></circle>}{!small&&<text x={points.mid.x} y={points.mid.y-17} textAnchor="middle" fill="currentColor" className="text-muted" fontSize="12">{edge.label.slice(0,19)}</text>}</g>})}
 {diagram.nodes.map((node,i)=>{const p=positions[node.id];const isActive=activeNodes.has(node.id),isSelected=selected===node.id;const stroke=`var(--viz-${tone[node.role]}-stroke)`;const fill=`var(--viz-${tone[node.role]}-fill)`;const label=mode==="beginner"?node.simpleLabel:node.label;return <g key={node.id} role="button" tabIndex={0} focusable="true" aria-label={`${label}. ${node.description}. Select for details.`} aria-pressed={isSelected} onClick={()=>onSelect(node.id)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();onSelect(node.id)}}} className="cursor-pointer outline-none" opacity={hasStep&&!isActive&&!isSelected?0.48:1}>
 <title>{node.description}</title><rect x={p.x-NODE_W/2-5} y={p.y-NODE_H/2-5} width={NODE_W+10} height={NODE_H+10} rx="20" stroke="var(--viz-focus)" strokeWidth={isSelected?3:0} fill="none" className="viz-focus-outline"/>
 <rect x={p.x-NODE_W/2} y={p.y-NODE_H/2} width={NODE_W} height={NODE_H} rx="16" fill={fill} stroke={stroke} strokeWidth={isActive?4:2}/>
 <circle cx={p.x-NODE_W/2+21} cy={p.y-NODE_H/2+19} r="10" fill={stroke}/><text x={p.x-NODE_W/2+21} y={p.y-NODE_H/2+23} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{node.id==="failure"?"!":i+1}</text>
 {labelLines(label).map((line,j,lines)=><text key={j} x={p.x} y={p.y+(j-(lines.length-1)/2)*21+6} textAnchor="middle" fill="var(--viz-text)" fontSize="16" fontWeight="700">{line}</text>)}
 </g>})}
 </svg></div>
});
export function VisualLearningDiagram({question}:{question:Question}){const diagram=question.visualLearning;const [mode,setMode]=useState<Mode>("beginner");const [index,setIndex]=useState(-1);const [playing,setPlaying]=useState(false);const [selected,setSelected]=useState(diagram?.nodes[0]?.id||"");const [zoom,setZoom]=useState(1);const small=useSmallScreen();const reduced=useReducedMotion();
 useEffect(()=>{if(reduced)setPlaying(false)},[reduced]);
 useEffect(()=>{if(!playing||!diagram)return;const timer=window.setTimeout(()=>{if(index>=diagram.steps.length-1){setPlaying(false)}else setIndex(i=>i+1)},2600);return()=>window.clearTimeout(timer)},[playing,index,diagram]);
 if(!diagram)return null;
 const step=index>=0?diagram.steps[index]:null;
 const selectedNode=diagram.nodes.find(n=>n.id===selected)||diagram.nodes[0];
 const begin=()=>{setIndex(0);setSelected(diagram.steps[0]?.highlightNodes[0]||diagram.nodes[0].id);setPlaying(!reduced)};
 const changeStep=(next:number)=>{const v=Math.max(0,Math.min(diagram.steps.length-1,next));setIndex(v);setSelected(diagram.steps[v].highlightNodes[0]);setPlaying(false)};
 const control="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-sm font-semibold hover:bg-soft disabled:opacity-40";
 return <section id="visual-learning" aria-labelledby="visual-title" className="rounded-2xl border border-line bg-surface p-4 sm:p-6">
 <div className="flex flex-wrap items-start justify-between gap-3"><div><div className="text-xs font-semibold uppercase tracking-wider text-accent">{diagram.diagramType} diagram</div><h2 id="visual-title" className="mt-1 text-xl font-bold">{diagram.title}</h2><p className="mt-2 text-sm text-muted">Select any node to explore its role. Follow the steps to see how the system works.</p></div><div className="inline-flex rounded-xl border border-line p-1" aria-label="Diagram explanation level" role="group"><button className={"rounded-lg px-3 py-2 text-xs font-semibold "+(mode==="beginner"?"bg-accent text-white":"text-muted")} aria-pressed={mode==="beginner"} onClick={()=>setMode("beginner")}>Beginner</button><button className={"rounded-lg px-3 py-2 text-xs font-semibold "+(mode==="technical"?"bg-accent text-white":"text-muted")} aria-pressed={mode==="technical"} onClick={()=>setMode("technical")}>Technical</button></div></div>
 <div className="mt-5 flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><button className={control} onClick={()=>setZoom(z=>Math.max(.8,Math.round((z-.2)*10)/10))} disabled={zoom<=.8} aria-label="Zoom out"><Minus size={16}/></button><span className="min-w-12 text-center text-xs tabular-nums text-muted">{Math.round(zoom*100)}%</span><button className={control} onClick={()=>setZoom(z=>Math.min(2,Math.round((z+.2)*10)/10))} disabled={zoom>=2} aria-label="Zoom in"><Plus size={16}/></button><button className={control} onClick={()=>setZoom(1)} aria-label="Reset zoom"><Maximize2 size={16}/></button></div><span className="text-xs text-muted">Swipe to pan when zoomed</span></div>
 <div className="mt-3"><DiagramCanvas diagram={diagram} small={small} reduced={reduced} activeStep={index} selected={selected} onSelect={id=>{setSelected(id);setPlaying(false)}} mode={mode} zoom={zoom}/></div>
 <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Walkthrough controls">
 <button className={control+" border-accent text-accent"} onClick={playing?()=>setPlaying(false):index<0||index===diagram.steps.length-1?begin:()=>setPlaying(!reduced)} aria-label={playing?"Pause walkthrough":"Play walkthrough"}>{playing?<Pause size={16}/>:<Play size={16}/>} {playing?"Pause":index<0?"Play walkthrough":"Play"}</button>
 <button className={control} disabled={index<=0} onClick={()=>changeStep(index-1)}><ChevronLeft size={16}/> Previous</button>
 <button className={control} disabled={index===diagram.steps.length-1} onClick={()=>changeStep(index<0?0:index+1)}>Next <ChevronRight size={16}/></button>
 <button className={control} onClick={begin}><RotateCcw size={16}/> Replay</button>
 <button className={control} onClick={()=>{setIndex(-1);setPlaying(false)}}><SkipForward size={16}/> Skip</button>
 </div>
 <div aria-live="polite" aria-atomic="true" className="mt-4 rounded-xl border border-line bg-soft p-4"><p className="text-xs font-semibold uppercase tracking-wide text-accent">{step?`Step ${index+1} of ${diagram.steps.length}`:"Overview"}</p><p className="mt-2 text-sm leading-relaxed">{step?(mode==="beginner"?step.caption:step.technicalCaption||step.caption):"The complete diagram is visible. Press Play walkthrough, or select a component to explore it."}</p>{reduced&&<p className="mt-2 text-xs text-muted">Reduced motion is enabled; use Next and Previous to move between steps.</p>}</div>
 <div className="mt-4 rounded-xl border border-line p-4" aria-labelledby="node-detail-title"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2 py-1 text-xs font-semibold viz-chip-${tone[selectedNode.role]}`}>{selectedNode.role==="data"?"Tools / data":selectedNode.role==="external"?"External service":selectedNode.role==="model"?"AI / model":selectedNode.role==="error"?"Security / decision":"User / app"}</span><h3 id="node-detail-title" className="font-bold">{mode==="beginner"?selectedNode.simpleLabel:selectedNode.label}</h3></div><dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">{[["What it is",selectedNode.description],["Why it exists",selectedNode.why],["A simple analogy",selectedNode.analogy],["Real-world example",selectedNode.realWorldExample],["Common mistake",selectedNode.commonMistake]].map(([term,detail])=><div key={term}><dt className="font-semibold">{term}</dt><dd className="mt-1 leading-relaxed text-muted">{detail}</dd></div>)}</dl></div>
 <p className="mt-4 text-xs text-muted">Diagram is a teaching model, not a complete implementation. Analogies simplify and are not exact definitions. All workflow steps are available in text and by keyboard.</p>
 </section>
}
