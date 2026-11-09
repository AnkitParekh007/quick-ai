import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
export type ArchitectBlock={id:string;type:string;x:number;y:number};
export type ArchitectEdge={id:string;from:string;to:string};
export type ArchitectDesign={id:string;title:string;blocks:ArchitectBlock[];edges:ArchitectEdge[];notes:string;updatedAt:string};
export type ArchitectSubmission={id:string;challengeId:string;designId:string;goal:string;dataFlow:string;risks:string;justification:string;at:string};
export type MentorRecord={id:string;topic:string;input:string;at:string};
export interface CareerState {completedLessons:string[];freeExplore:boolean;pathId:string;drillAnswers:Record<string,number>;failureAnswers:Record<string,number>;failureRoots:Record<string,number>;designs:ArchitectDesign[];submissions:ArchitectSubmission[];projectSteps:Record<string,string[]>;portfolioProjects:string[];reflections:Record<string,string>;mentorHistory:MentorRecord[]}
const defaults:CareerState={completedLessons:[],freeExplore:false,pathId:"foundations",drillAnswers:{},failureAnswers:{},failureRoots:{},designs:[],submissions:[],projectSteps:{},portfolioProjects:[],reflections:{},mentorHistory:[]};
function load():CareerState{try{const data=JSON.parse(localStorage.getItem("aiqb-career-v1")||"{}") as Partial<CareerState>;return {...defaults,...data,completedLessons:data.completedLessons||[],designs:data.designs||[],failureRoots:data.failureRoots||{},submissions:data.submissions||[],mentorHistory:data.mentorHistory||[]}}catch{return defaults}}
interface Api {career:CareerState;update:(patch:Partial<CareerState>)=>void;toggleLesson:(id:string)=>void;saveDesign:(design:ArchitectDesign)=>void;completeStep:(projectId:string,stepId:string)=>void;addSubmission:(submission:ArchitectSubmission)=>void;addMentor:(topic:string,input:string)=>void}
const Context=createContext<Api|null>(null);
export function CareerProvider({children}:{children:ReactNode}){const [career,setCareer]=useState<CareerState>(load);
 useEffect(()=>{try{localStorage.setItem("aiqb-career-v1",JSON.stringify(career))}catch{console.warn("Unable to save career learning progress")}},[career]);
 const update=(patch:Partial<CareerState>)=>setCareer(s=>({...s,...patch}));
 const toggleLesson=(id:string)=>setCareer(s=>({...s,completedLessons:s.completedLessons.includes(id)?s.completedLessons.filter(x=>x!==id):[...s.completedLessons,id]}));
 const saveDesign=(design:ArchitectDesign)=>setCareer(s=>({...s,designs:[...s.designs.filter(d=>d.id!==design.id),design]}));
 const completeStep=(projectId:string,stepId:string)=>setCareer(s=>{const done=s.projectSteps[projectId]||[];return {...s,projectSteps:{...s.projectSteps,[projectId]:done.includes(stepId)?done.filter(x=>x!==stepId):[...done,stepId]}}});
 const addSubmission=(submission:ArchitectSubmission)=>setCareer(s=>({...s,submissions:[submission,...s.submissions]}));
 const addMentor=(topic:string,input:string)=>setCareer(s=>({...s,mentorHistory:[{id:crypto.randomUUID(),topic,input,at:new Date().toISOString()},...s.mentorHistory]}));
 return <Context.Provider value={{career,update,toggleLesson,saveDesign,completeStep,addSubmission,addMentor}}>{children}</Context.Provider>;
}
export function useCareer(){const v=useContext(Context);if(!v)throw new Error("CareerProvider missing");return v}
