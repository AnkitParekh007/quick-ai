import {Link} from "react-router-dom";
import {ArrowUpRight,BookOpen,CheckCircle2,Compass,Layers,ShieldCheck} from "lucide-react";
import {curriculumPhases,curriculumResources} from "../data/curriculum";
import {questions} from "../data/questions";
import {useApp} from "../context/AppContext";
import {useQuiz} from "../context/QuizContext";
export function ArchitectPath(){
 const {progress}=useApp();const {stats}=useQuiz();
 const totalLearned=questions.filter(q=>progress[q.id]==="learned").length;
 const attempted=questions.filter(q=>(stats[q.id]?.timesSeen||0)>0).length;
 return <div className="mx-auto max-w-5xl">
 <div className="mb-7 rounded-3xl border border-line bg-surface p-6 sm:p-8">
 <span className="inline-flex items-center gap-2 rounded-full bg-soft px-3 py-1 text-xs font-semibold text-accent"><Compass size={15}/> AI System Architect pathway</span>
 <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From AI basics to architect-level decisions</h1>
 <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">Learn the foundations, design real systems, evaluate failure modes, and defend architecture tradeoffs. This is a self-guided curriculum, not a professional certification.</p>
 <div className="mt-6 grid grid-cols-3 gap-3">{[{name:"Concepts",value:questions.length},{name:"Learned",value:totalLearned},{name:"Practiced",value:attempted}].map(m=><div key={m.name} className="rounded-xl bg-soft p-4"><div className="text-2xl font-bold">{m.value}</div><div className="text-xs text-muted">{m.name}</div></div>)}</div>
 </div>
 <div className="space-y-6">{curriculumPhases.map(phase=>{
 const subset=questions.filter(q=>phase.categories.includes(q.category));
 const learned=subset.filter(q=>progress[q.id]==="learned").length;
 const percent=Math.round(learned/Math.max(1,subset.length)*100);
 return <section key={phase.id} className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
 <div className="flex flex-wrap items-start justify-between gap-3"><div><span className="text-xs font-semibold uppercase tracking-wider text-accent">{phase.level}</span><h2 className="mt-2 text-xl font-bold">{phase.name}</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{phase.description}</p></div><span className="rounded-lg bg-soft px-3 py-2 text-sm font-semibold text-accent">{learned}/{subset.length} learned</span></div>
 <div className="mt-5 h-2 rounded-full bg-line" role="progressbar" aria-label={phase.name+" progress"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}><div className="h-full rounded-full bg-accent" style={{width:percent+"%"}}/></div>
 <div className="mt-5 grid gap-2 sm:grid-cols-2">{phase.categories.map(category=>{
 const pool=questions.filter(q=>q.category===category),done=pool.filter(q=>progress[q.id]==="learned").length;
 return <Link key={category} to={"/?category="+encodeURIComponent(category)} className="group flex items-center justify-between rounded-xl border border-line px-3 py-3 hover:bg-soft"><span className="flex items-center gap-2 text-sm font-semibold">{done===pool.length?<CheckCircle2 size={17} className="text-green-600"/>:<BookOpen size={17} className="text-accent"/>}{category}</span><span className="text-xs text-muted">{done}/{pool.length} <ArrowUpRight size={12} className="inline"/></span></Link>})}</div>
 <div className="mt-5 flex flex-wrap gap-2"><Link to="/quiz" className="rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-white">Test your knowledge</Link><Link to="/quiz?source=scenario" className="rounded-lg border border-line px-3 py-2 text-xs font-semibold">Architecture scenarios</Link></div>
 <div className="mt-5 border-t border-line pt-4"><h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted"><Layers size={14}/> Further reading</h3><div className="mt-3 flex flex-wrap gap-3">{phase.resources.map(id=>{const r=curriculumResources.find(r=>r.id===id);return r?<a key={id} target="_blank" rel="noreferrer noopener" href={r.url} className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline">{r.provider}: {r.title}<ArrowUpRight size={12}/></a>:null})}</div></div>
 </section>})}</div>
 <div className="mt-8 rounded-2xl border border-line bg-surface p-6"><h2 className="flex items-center gap-2 text-lg font-bold"><ShieldCheck className="text-accent" size={20}/> Architect readiness</h2><p className="mt-2 text-sm leading-relaxed text-muted">Use these exercises as practice for design discussions: state requirements, draw data and trust flows, compare RAG versus fine-tuning, justify agent autonomy, define evals and SLOs, and plan incident response. Reading cards is a starting point; real architecture work also requires prototypes, reviews, and hands-on evaluation.</p></div>
 </div>
}
