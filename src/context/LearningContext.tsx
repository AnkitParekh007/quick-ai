import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
import type {Clarity,TeachBackResult,LearningEvent} from "../types";
import {questions} from "../data/questions";
import {useQuiz} from "./QuizContext";
const KEY="aiqb-learning-v1";
interface State{clarity:Record<string,Clarity>;teachBack:Record<string,TeachBackResult>;events:LearningEvent[];dailyCompleted:Record<string,string[]>;streakFreezeDate?:string}
function load():State{try{const x=localStorage.getItem(KEY);if(x){const v=JSON.parse(x) as Partial<State>;return {clarity:v.clarity||{},teachBack:v.teachBack||{},events:v.events||[],dailyCompleted:v.dailyCompleted||{},streakFreezeDate:v.streakFreezeDate}}}catch{}return {clarity:{},teachBack:{},events:[],dailyCompleted:{}}}
export const localDay=(date=new Date())=>{const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,"0"),d=String(date.getDate()).padStart(2,"0");return y+"-"+m+"-"+d};
const yesterday=(day:string)=>{const d=new Date(day+"T12:00:00");d.setDate(d.getDate()-1);return localDay(d)};
export function calcStreak(days:string[],today=localDay()){const active=new Set(days);let cursor=active.has(today)?today:yesterday(today);let count=0;while(active.has(cursor)){count++;cursor=yesterday(cursor)}return count}
export function teachBackFeedback(questionId:string,text:string):TeachBackResult{const q=questions.find(q=>q.id===questionId);const ideas=q?.keyIdeas||[];const tokens=text.toLowerCase().replace(/[^a-z0-9-]/g," ").split(/\s+/).filter(Boolean);const matched=ideas.filter(idea=>{const phrase=idea.toLowerCase();return tokens.includes(phrase)||text.toLowerCase().includes(phrase)});return {questionId,text,matched,missing:ideas.filter(x=>!matched.includes(x)),at:new Date().toISOString()}}
interface Api extends State{setClarity:(id:string,c:Clarity)=>void;submitTeachBack:(id:string,text:string)=>TeachBackResult;logEvent:(id:string,kind:LearningEvent["kind"])=>void;completeDaily:(ids:string[])=>void;recoverStreak:()=>void;xp:number;streak:number;badges:string[];mastery:Record<string,number>}
const Context=createContext<Api|null>(null);
export function LearningProvider({children}:{children:ReactNode}){const {attempts}=useQuiz();const [state,setState]=useState<State>(load);useEffect(()=>localStorage.setItem(KEY,JSON.stringify(state)),[state]);
const setClarity=(id:string,c:Clarity)=>setState(s=>({...s,clarity:{...s.clarity,[id]:c}}));
const logEvent=(id:string,kind:LearningEvent["kind"])=>setState(s=>({...s,events:[...s.events,{questionId:id,kind,date:localDay()}]}));
const submitTeachBack=(id:string,text:string)=>{const result=teachBackFeedback(id,text);setState(s=>({...s,teachBack:{...s.teachBack,[id]:result},events:[...s.events,{questionId:id,kind:"teach",date:localDay()}]}));return result};
const completeDaily=(ids:string[])=>setState(s=>({...s,dailyCompleted:{...s.dailyCompleted,[localDay()]:ids},events:[...s.events,...ids.map(questionId=>({questionId,kind:"daily" as const,date:localDay()}))]}));
const days=Object.keys(state.dailyCompleted).filter(d=>state.dailyCompleted[d].length>0);const streak=calcStreak([...days,...(state.streakFreezeDate?[state.streakFreezeDate]:[])]);
const xp=state.events.filter(e=>e.kind==="teach").length*15+days.length*40+state.events.filter(e=>e.kind==="view").length*3+attempts.reduce((sum,a)=>sum+10+a.correctCount*5,0);
const unique=new Set(state.events.map(e=>e.questionId));const badges=[...(unique.size>=5?["Curious mind"]:[]),...(days.length>=1?["Daily starter"]:[]),...(streak>=3?["Consistent learner"]:[]),...(Object.keys(state.teachBack).length>=5?["Great explainer"]:[]),...(attempts.length>=3?["Quiz explorer"]:[])];
const mastery:Record<string,number>={};for(const cat of [...new Set(questions.map(q=>q.category))]){const list=questions.filter(q=>q.category===cat);mastery[cat]=Math.round(list.filter(q=>state.clarity[q.id]==="clear").length/list.length*100)}
const recoverStreak=()=>{const today=localDay();const prev=yesterday(today);if(days.includes(prev)||state.streakFreezeDate)return;setState(s=>({...s,streakFreezeDate:prev}))};
return <Context.Provider value={{...state,setClarity,submitTeachBack,logEvent,completeDaily,recoverStreak,xp,streak,badges,mastery}}>{children}</Context.Provider>}
export function useLearning(){const value=useContext(Context);if(!value)throw new Error("LearningProvider missing");return value}
