import {useEffect,useState} from "react";
export function TypewriterText({text,paused,speed,onComplete,reduced,epoch}:{text:string;paused:boolean;speed:number;onComplete:()=>void;reduced:boolean;epoch:number}){
 const [visible,setVisible]=useState(()=>reduced?text.length:0);
 useEffect(()=>{setVisible(reduced?text.length:0)},[text,epoch,reduced]);
 useEffect(()=>{if(reduced||paused||visible>=text.length)return;const timer=window.setTimeout(()=>setVisible(i=>Math.min(i+Math.max(1,speed),text.length)),24);return()=>window.clearTimeout(timer)},[text,paused,reduced,speed,visible]);
 useEffect(()=>{if(visible===text.length)onComplete()},[visible,text.length,onComplete]);
 const done=reduced||visible>=text.length;
 return <div className="min-h-20 text-sm leading-relaxed text-ink"><p>{reduced?text:text.slice(0,visible)}{!done&&<span aria-hidden="true" className="nova-cursor">▌</span>}</p>{!done&&<span className="sr-only">Explanation in progress. Use Skip to read it immediately.</span>}</div>
}
