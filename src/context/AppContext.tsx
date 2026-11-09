import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
import type {Progress,ProgressStatus,Theme} from "../types";
interface AppState {theme:Theme;setTheme:(t:Theme)=>void;progress:Progress;setStatus:(id:string,status:ProgressStatus|null)=>void}
const Context=createContext<AppState|null>(null);
function read<T>(key:string,fallback:T):T {try {const v=localStorage.getItem(key);return v?JSON.parse(v) as T:fallback}catch{return fallback}}
export function AppProvider({children}:{children:ReactNode}){
 const [theme,setTheme]=useState<Theme>(()=>read("aiqb-theme","system"));
 const [progress,setProgress]=useState<Progress>(()=>read("aiqb-progress",{}));
 useEffect(()=>{localStorage.setItem("aiqb-theme",JSON.stringify(theme));const media=matchMedia("(prefers-color-scheme: dark)");const update=()=>document.documentElement.classList.toggle("dark",theme==="dark"||(theme==="system"&&media.matches));update();media.addEventListener("change",update);return()=>media.removeEventListener("change",update)},[theme]);
 useEffect(()=>localStorage.setItem("aiqb-progress",JSON.stringify(progress)),[progress]);
 const setStatus=(id:string,status:ProgressStatus|null)=>setProgress(p=>{const next={...p};if(status)next[id]=status;else delete next[id];return next});
 return <Context.Provider value={{theme,setTheme,progress,setStatus}}>{children}</Context.Provider>
}
export function useApp(){const value=useContext(Context);if(!value)throw new Error("AppProvider missing");return value}
