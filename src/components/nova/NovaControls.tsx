import {FastForward,Pause,Play,RotateCcw,SkipForward} from "lucide-react";
export function NovaControls({paused,finished,fast,onPause,onSkip,onReplay,onSpeed,reduced}:{paused:boolean;finished:boolean;fast:boolean;onPause:()=>void;onSkip:()=>void;onReplay:()=>void;onSpeed:()=>void;reduced:boolean}){
 const cls="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-2 text-xs font-semibold hover:bg-soft";
 return <div role="group" aria-label="Nova explanation controls" className="flex flex-wrap gap-2">
 <button className={cls} disabled={reduced||finished} onClick={onPause}><Pause size={13}/>{paused?"Resume":"Pause"}</button>
 <button className={cls} disabled={finished} onClick={onSkip}><SkipForward size={13}/>Skip</button>
 <button className={cls} onClick={onReplay}><RotateCcw size={13}/>Replay</button>
 <button className={cls} disabled={reduced||finished||fast} onClick={onSpeed}><FastForward size={13}/>Speed up</button>
 </div>
}
