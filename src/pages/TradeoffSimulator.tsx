import {useState} from "react";
import {Link} from "react-router-dom";
import {BarChart3,Info,SlidersHorizontal} from "lucide-react";
type Setting="model"|"cache"|"rag"|"autonomy"|"approval"|"hosting";
const fields:{id:Setting;label:string;options:string[];hint:string}[]=[
 {id:"model",label:"Model capability",options:["Small / efficient","Balanced","Large / capable"],hint:"A larger model may improve difficult reasoning but often costs more."},
 {id:"cache",label:"Cache repeated results",options:["Disabled","Selective","Aggressive"],hint:"Only cache safe, permission-scoped data; invalidate stale answers."},
 {id:"rag",label:"Ground answers in retrieval",options:["No retrieval","Selective retrieval","Retrieval for every request"],hint:"Useful for current and source-specific facts, at a search cost."},
 {id:"autonomy",label:"Agent autonomy",options:["Deterministic steps","Bounded agent","Open-ended agent"],hint:"More autonomy can cover uncertain tasks but increases risk and variance."},
 {id:"approval",label:"Human approval",options:["Never","High-risk actions only","Every action"],hint:"Approval lowers the risk of unauthorized actions but slows execution."},
 {id:"hosting",label:"Deployment",options:["Managed API","Managed dedicated","Self-hosted"],hint:"Hosting shifts operational responsibility and financial break-even."}
];
const dimensions=["Cost efficiency","Latency","Answer quality potential","Security controls","Scalability","Maintainability"] as const;
function evaluate(s:Record<Setting,number>){
 const scores=[67,72,57,60,66,74];
 const apply=(updates:number[])=>updates.forEach((delta,i)=>{scores[i]+=delta});
 apply([[-12,-8,0],[0,0,7],[-17,-14,14]][s.model]);
 apply([[0,0,0],[10,8,0],[15,14,-5]][s.cache]);
 apply([[7,12,-10],[0,0,12],[-10,-10,19]][s.rag]);
 apply([[8,11,-4,13,8,12],[-6,-7,8,-5,-6,-7],[-19,-20,13,-21,-15,-18]][s.autonomy]);
 apply([[4,8,-7,-16,5,5],[-5,-5,4,17,-3,-4],[-15,-25,5,21,-13,-8]][s.approval]);
 apply([[2,9,0,-3,8,12],[-9,3,0,6,6,2],[-15,-7,0,8,-11,-15]][s.hosting]);
 return scores.map(n=>Math.max(5,Math.min(95,Math.round(n))));
}
const initial:Record<Setting,number>={model:1,cache:1,rag:1,autonomy:1,approval:1,hosting:0};
export function TradeoffSimulator(){const [settings,setSettings]=useState<Record<Setting,number>>(initial);const values=evaluate(settings);return <div className="mx-auto max-w-5xl">
 <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-accent"><SlidersHorizontal size={16}/> Interactive architecture lab</span><h1 className="mt-3 text-3xl font-bold">Trade-off simulator</h1><p className="mt-3 text-muted">Move each control to explore what might improve or worsen. There is no universally best AI system—every choice depends on requirements and testing.</p>
 <div className="mt-6 grid items-start gap-5 lg:grid-cols-2"><div className="rounded-2xl border border-line bg-surface p-6"><h2 className="text-lg font-bold">Architecture decisions</h2><div className="mt-6 space-y-6">{fields.map(f=><div key={f.id}><label htmlFor={"sim-"+f.id} className="flex items-center justify-between gap-3 text-sm font-semibold"><span>{f.label}</span><span className="text-right text-xs text-accent">{f.options[settings[f.id]]}</span></label><input id={"sim-"+f.id} type="range" min={0} max={2} step={1} value={settings[f.id]} onChange={e=>setSettings(s=>({...s,[f.id]:Number(e.target.value)}))} className="mt-3 w-full accent-accent"/><p className="mt-1 text-xs leading-relaxed text-muted">{f.hint}</p></div>)}</div><button className="mt-6 rounded-lg border border-line px-4 py-2 text-sm font-semibold hover:bg-soft" onClick={()=>setSettings(initial)}>Reset decisions</button></div>
 <section className="rounded-2xl border border-line bg-surface p-6" aria-live="polite"><h2 className="flex items-center gap-2 text-lg font-bold"><BarChart3 size={20} className="text-accent"/> Indicative impact</h2><p className="mt-2 text-xs leading-relaxed text-muted">Educational relative indicators (0–100), not real benchmarks or price/latency forecasts. Higher means more favorable under these illustrative assumptions.</p><div className="mt-6 space-y-5">{dimensions.map((d,i)=><div key={d}><div className="flex justify-between text-sm"><strong>{d}</strong><span className="tabular-nums text-muted">{values[i]}/100</span></div><div className="mt-2 h-3 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-accent transition-[width]" style={{width:values[i]+"%"}}/></div></div>)}</div><div className="mt-7 rounded-xl bg-soft p-4"><h3 className="flex items-center gap-2 text-sm font-bold"><Info size={17}/> Discuss like an architect</h3><p className="mt-2 text-sm leading-relaxed">Which requirement is non-negotiable for your users? Which metric would you measure first? If security or quality is weak, you may accept additional cost or latency rather than maximize a single score.</p></div><Link className="mt-5 inline-block rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white" to="/decisions">Practice this with a real scenario</Link></section></div>
 </div>}
