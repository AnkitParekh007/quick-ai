import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
export interface NovaPreferences {enabled:boolean;animations:boolean;defaultOpen:boolean}
const defaults:NovaPreferences={enabled:true,animations:true,defaultOpen:false};
function restore(){try{const stored=localStorage.getItem("aiqb-nova-settings");return stored?{...defaults,...JSON.parse(stored) as Partial<NovaPreferences>}:defaults}catch{return defaults}}
interface Api {prefs:NovaPreferences;setPrefs:(next:Partial<NovaPreferences>)=>void}
const Context=createContext<Api|null>(null);
export function NovaProvider({children}:{children:ReactNode}){const [prefs,update]=useState<NovaPreferences>(restore);useEffect(()=>localStorage.setItem("aiqb-nova-settings",JSON.stringify(prefs)),[prefs]);const setPrefs=(next:Partial<NovaPreferences>)=>update(old=>({...old,...next}));return <Context.Provider value={{prefs,setPrefs}}>{children}</Context.Provider>}
export function useNovaSettings(){const v=useContext(Context);if(!v)throw new Error("NovaProvider missing");return v}
