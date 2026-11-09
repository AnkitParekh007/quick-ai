import type {NovaState} from "./NovaAnimationController";
export function NovaMascot({size=48,state="idle",reduced=false}:{size?:32|48|96;state?:NovaState;reduced?:boolean}){
 const happy=state==="success";const worried=state==="error";const thinking=state==="thinking";const greeting=state==="greeting";return <svg width={size} height={size} viewBox="0 0 96 96" role="img" aria-label={"Nova, the friendly robot study buddy"+(state==="idle"?"":", "+state)} className={"nova-robot "+(reduced?"nova-static":"nova-"+state)} xmlns="http://www.w3.org/2000/svg">
 <title>Nova the learning robot</title><defs><linearGradient id="nova-shell" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#a5b4fc"/><stop offset="1" stopColor="#7c6be5"/></linearGradient></defs>
 <g className="nova-body"><path d="M48 18V10" stroke="#7963d4" strokeWidth="4" strokeLinecap="round"/><circle cx="48" cy="8" r="5" fill="#7ddcc3" stroke="#51659b" strokeWidth="2"/>
 <g className="nova-arm-left"><path d="M18 56q-11-3-12 8" fill="none" stroke="#8179ce" strokeWidth="7" strokeLinecap="round"/><circle cx="8" cy="66" r="6" fill="#a5e9d6"/></g>
 <g className="nova-arm-right"><path d="M78 56q10-3 12 8" fill="none" stroke="#8179ce" strokeWidth="7" strokeLinecap="round"/><circle cx="88" cy="66" r="6" fill="#a5e9d6"/></g>
 <rect x="17" y="19" width="62" height="58" rx="24" fill="url(#nova-shell)" stroke="#584ca3" strokeWidth="2"/>
 <rect x="24" y="30" width="48" height="35" rx="15" fill="#fafaff"/>
 <g className="nova-eyes"><ellipse cx="39" cy={thinking?43:45} rx="5" ry={worried?4:7} fill="#302660"/><ellipse cx="57" cy={thinking?43:45} rx="5" ry={worried?4:7} fill="#302660"/><circle cx="40" cy={thinking?41:42} r="2" fill="white"/><circle cx="58" cy={thinking?41:42} r="2" fill="white"/></g>
 <path className="nova-mouth" d={worried?"M43 57Q48 54 53 57":happy?"M40 55Q48 65 56 55":"M41 56Q48 62 55 56"} fill="none" stroke="#50417f" strokeWidth="2.8" strokeLinecap="round"/>
 <ellipse cx="29" cy="55" rx="4" ry="2.4" fill="#ef9ec3" opacity=".55"/><ellipse cx="67" cy="55" rx="4" ry="2.4" fill="#ef9ec3" opacity=".55"/>
 <rect x="38" y="73" width="20" height="5" rx="2.5" fill="#9be6ce"/><path d="M35 78v4M61 78v4" stroke="#6755a9" strokeWidth="5" strokeLinecap="round"/>
 </g>
 {(happy||state==="review")&&<g className="nova-sparkle"><path d="M79 10v13M72.5 16.5h13" stroke="#f3ad53" strokeWidth="3" strokeLinecap="round"/></g>}
 {greeting&&<circle cx="88" cy="44" r="2.5" fill="#a7e5d2"/>}
 {thinking&&<g fill="#8672cf"><circle cx="74" cy="19" r="2"/><circle cx="80" cy="15" r="2"/><circle cx="86" cy="19" r="2"/></g>}
 </svg>}
