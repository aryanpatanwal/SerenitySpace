import{r as d,a as he,R as ee}from"./vendor-nf7bT_Uh.js";import{C as fe,a as me,L as ue,P as xe,b as be,p as ye,c as we,d as ve,e as je}from"./charts-C_3Ca7xo.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();var ce={exports:{}},te={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se=d,ke=Symbol.for("react.element"),ze=Symbol.for("react.fragment"),Ce=Object.prototype.hasOwnProperty,Be=Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ne={key:!0,ref:!0,__self:!0,__source:!0};function pe(o,l,i){var t,r={},s=null,p=null;i!==void 0&&(s=""+i),l.key!==void 0&&(s=""+l.key),l.ref!==void 0&&(p=l.ref);for(t in l)Ce.call(l,t)&&!Ne.hasOwnProperty(t)&&(r[t]=l[t]);if(o&&o.defaultProps)for(t in l=o.defaultProps,l)r[t]===void 0&&(r[t]=l[t]);return{$$typeof:ke,type:o,key:s,ref:p,props:r,_owner:Be.current}}te.Fragment=ze;te.jsx=pe;te.jsxs=pe;ce.exports=te;var e=ce.exports,ae={},se=he;ae.createRoot=se.createRoot,ae.hydrateRoot=se.hydrateRoot;const M="https://serenity-space-delta.vercel.app".replace(/\/+$/,""),J={AUTH:`${M}/api/auth`,JOURNALS:`${M}/api/journals`,CHATBOT:`${M}/api/chatbot`,PROFILE:`${M}/api/profile`};function le({onAuth:o,darkMode:l,defaultMode:i="login"}){const[t,r]=d.useState(i==="login"),[s,p]=d.useState({username:"",email:"",password:""}),[m,f]=d.useState("");ee.useEffect(()=>{r(i==="login")},[i]);const w=x=>p({...s,[x.target.name]:x.target.value}),C=async x=>{x.preventDefault(),f("");try{const U=t?"/login":"/register",v=t?{email:s.email,password:s.password}:s,j=await fetch(J.AUTH+U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),y=await j.json();if(!j.ok)throw new Error(y.message||"Error");t?(localStorage.setItem("token",y.token),o(y.user)):r(!0)}catch(U){f(U.message)}},T=l?"#18181b":"linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",A=l?"#23232a":"#fff",c=l?"#27272a":"#e0e0e0",B=l?"#f3f4f6":"#222",N=l?"#18181b":"#fff",b=l?"#27272a":"#d1d5db",I=l?"#f3f4f6":"#222",E="#6366f1",g="#fff",P=l?"#23232a":"#f1f5f9",W=l?"#a5b4fc":"#6366f1";return e.jsxs("div",{style:{minHeight:"100vh",background:T,padding:0},children:[e.jsx("style",{children:`
        @media (max-width: 768px) {
          .auth-container {
            margin: 2rem auto !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .auth-container {
            margin: 1rem auto !important;
            padding: 20px !important;
          }
        }
      `}),e.jsxs("div",{className:"auth-container",style:{maxWidth:400,margin:"4rem auto",padding:32,borderRadius:16,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",background:A,border:`1px solid ${c}`},children:[e.jsx("h2",{style:{textAlign:"center",marginBottom:24,fontWeight:700,color:B},children:t?"Login":"Register"}),e.jsxs("form",{onSubmit:C,children:[!t&&e.jsx("input",{name:"username",placeholder:"Username",value:s.username,onChange:w,required:!0,style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${b}`,fontSize:16,background:N,color:I}}),e.jsx("input",{name:"email",type:"email",placeholder:"Email",value:s.email,onChange:w,required:!0,style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${b}`,fontSize:16,background:N,color:I}}),e.jsx("input",{name:"password",type:"password",placeholder:"Password",value:s.password,onChange:w,required:!0,style:{width:"100%",marginBottom:16,padding:10,borderRadius:8,border:`1px solid ${b}`,fontSize:16,background:N,color:I}}),e.jsx("button",{type:"submit",style:{width:"100%",marginBottom:12,padding:12,borderRadius:8,background:E,color:g,fontWeight:600,fontSize:16,border:"none",boxShadow:"0 2px 8px rgba(99,102,241,0.08)"},children:t?"Login":"Register"})]}),e.jsx("button",{onClick:()=>r(!t),style:{width:"100%",padding:10,borderRadius:8,background:P,color:W,fontWeight:600,border:"none",fontSize:15,marginBottom:8},children:t?"Need an account? Register":"Already have an account? Login"}),m&&e.jsx("div",{style:{color:"#ef4444",marginTop:8,textAlign:"center",fontWeight:500},children:m})]})]})}fe.register(me,ue,xe,be,ye,we,ve);function Ae({user:o,onLogout:l,darkMode:i}){const[t,r]=d.useState([]),[s,p]=d.useState(""),[m,f]=d.useState(""),[w,C]=d.useState(null),[T,A]=d.useState(""),[c,B]=d.useState(!1),[N,b]=d.useState("dashboard"),[I,E]=d.useState(null),[g,P]=d.useState(localStorage.getItem("aiConsent")==="true"),[W,x]=d.useState(!g),U=async()=>{try{const n=await fetch(J.JOURNALS,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),h=await n.json();if(!n.ok)throw new Error(h.message||"Error");r(h),g&&j(h)}catch(n){f(n.message)}},v=n=>{P(n),localStorage.setItem("aiConsent",n.toString()),x(!1),n&&j(t)},j=n=>{if(!g||n.length===0){E({type:"welcome",title:"Welcome to Your Mental Health Journey",content:"Start writing your first journal entry to track your emotional patterns.",exercise:"Try a 5-minute gratitude practice: Write down 3 things you're thankful for today."});return}const k=n.slice(0,5).reduce((F,K)=>(F[K.sentiment]=(F[K.sentiment]||0)+1,F),{}),z=Object.keys(k).reduce((F,K)=>k[F]>k[K]?F:K),O={positive:{title:"You're on a Positive Streak!",content:"Your recent entries show a positive outlook. Keep up the great work in maintaining this mindset.",exercise:"Practice positive reinforcement: Write down one thing you did well today and celebrate it."},negative:{title:"Supporting You Through Challenges",content:"I notice you've been experiencing some difficult emotions. Remember, it's okay to not be okay.",exercise:"Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8. Repeat 4 times."},mixed:{title:"Navigating Life's Ups and Downs",content:"You're experiencing a mix of emotions, which is completely normal. This shows emotional awareness.",exercise:"Practice emotional labeling: Name 3 emotions you're feeling right now without judgment."},neutral:{title:"Finding Your Balance",content:"You're in a stable emotional state. This is a great foundation for growth and self-reflection.",exercise:"Try mindful observation: Spend 5 minutes noticing your surroundings with all your senses."}};E(O[z]||O.neutral)};d.useEffect(()=>{U()},[]);const y=async n=>{n.preventDefault(),f(""),B(!0);try{const h=await fetch(J.JOURNALS,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({content:s,aiAnalysis:g})}),k=await h.json();if(!h.ok)throw new Error(k.message||"Error");r([k,...t]),p(""),g&&j([k,...t])}catch(h){f(h.message)}finally{B(!1)}},R=async n=>{if(window.confirm("Delete this journal entry?")){f("");try{if(!(await fetch(`${J.JOURNALS}/${n}`,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}})).ok)throw new Error("Failed to delete");const k=t.filter(z=>z._id!==n);r(k),g&&j(k)}catch(h){f(h.message)}}},D=(n,h)=>{C(n),A(h)},H=async n=>{f(""),B(!0);try{const h=await fetch(`${J.JOURNALS}/${n}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({content:T,aiAnalysis:g})}),k=await h.json();if(!h.ok)throw new Error(k.message||"Error");const z=t.map(O=>O._id===n?k:O);r(z),C(null),A(""),g&&j(z)}catch(h){f(h.message)}finally{B(!1)}},$=n=>{switch(n){case"positive":return"#10b981";case"negative":return"#ef4444";case"mixed":return"#f59e0b";default:return"#6b7280"}},_=n=>{switch(n){case"positive":return"😊";case"negative":return"😔";case"mixed":return"😐";default:return"😐"}},Y=n=>{switch(n){case"positive":return 3;case"mixed":return 2;case"neutral":return 1;case"negative":return 0;default:return 1}},V=()=>{const n=t.filter(z=>{const O=new Date(z.date||z.createdAt),F=new Date;return F.setDate(F.getDate()-7),O>=F}).sort((z,O)=>new Date(z.date||z.createdAt)-new Date(O.date||O.createdAt)),h=n.map(z=>new Date(z.date||z.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric"})),k=n.map(z=>Y(z.sentiment));return{labels:h,datasets:[{label:"Mood Trend",data:k,borderColor:"#6366f1",backgroundColor:"rgba(99, 102, 241, 0.1)",tension:.4,fill:!0}]}},q={responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:"Your Mood Over the Last 7 Days",color:i?"#f3f4f6":"#222",font:{size:16,weight:"600"}}},scales:{y:{beginAtZero:!0,max:3,ticks:{stepSize:1,callback:function(n){return["Negative","Neutral","Mixed","Positive"][n]||""},color:i?"#a1a1aa":"#6b7280"},grid:{color:i?"#27272a":"#e5e7eb"}},x:{ticks:{color:i?"#a1a1aa":"#6b7280"},grid:{color:i?"#27272a":"#e5e7eb"}}}},oe=i?"#18181b":"#f8fafc",S=i?"#23232a":"#fff",a=i?"#27272a":"#e0e0e0",u=i?"#f3f4f6":"#222",L=i?"#a1a1aa":"#888",ne=i?"#18181b":"#fff",re=i?"#27272a":"#d1d5db",ie=i?"#f3f4f6":"#222",Z="#6366f1",Q="#fff",G=i?"#23232a":"#f1f5f9",X=i?"#a5b4fc":"#6366f1",ge="#ef4444";return e.jsxs("div",{style:{minHeight:"100vh",background:oe,color:u,padding:0,animation:"fadeIn 0.7s"},children:[e.jsx("style",{children:`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .journal-card { transition: box-shadow 0.2s, transform 0.2s; }
        .journal-card:hover { box-shadow: 0 8px 32px rgba(99,102,241,0.13); transform: translateY(-4px) scale(1.02); }
        .journal-btn { transition: background 0.2s, color 0.2s, transform 0.1s; }
        .journal-btn:hover { background: #6366f1; color: #fff; }
        .journal-btn:active { transform: scale(0.97); }
        .journal-input:focus, .journal-textarea:focus { outline: 2px solid #6366f1; }
        .fade-error { animation: fadeIn 0.5s; }
        .keyword-tag { 
          display: inline-block; 
          background: #6366f1; 
          color: white; 
          padding: 4px 8px; 
          border-radius: 12px; 
          font-size: 12px; 
          margin: 2px; 
        }
        .ai-feedback { 
          background: ${i?"#1f2937":"#f3f4f6"}; 
          border-left: 4px solid #6366f1; 
          padding: 12px; 
          border-radius: 8px; 
          margin-top: 12px; 
        }
        .tab-btn { 
          padding: 12px 24px; 
          border: none; 
          background: transparent; 
          color: ${L}; 
          font-weight: 600; 
          cursor: pointer; 
          border-bottom: 2px solid transparent; 
          transition: all 0.2s; 
        }
        .tab-btn.active { 
          color: #6366f1; 
          border-bottom-color: #6366f1; 
        }
        .insight-card {
          background: ${i?"#1f2937":"#f3f4f6"};
          border-left: 4px solid #6366f1;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .chart-container {
          background: ${S};
          border: 1px solid ${a};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
        }
        .consent-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .consent-content {
          background: ${S};
          border-radius: 12px;
          padding: 24px;
          max-width: 500px;
          margin: 20px;
          border: 1px solid ${a};
        }
        .disclaimer {
          background: ${i?"#1f2937":"#fef3c7"};
          border: 1px solid ${i?"#374151":"#f59e0b"};
          border-radius: 8px;
          padding: 12px;
          margin: 12px 0;
          font-size: 12px;
          color: ${i?"#d1d5db":"#92400e"};
        }
        @media (max-width: 768px) {
          .journal-container {
            padding: 16px !important;
            margin: 1rem auto !important;
          }
          .journal-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .tab-btn {
            padding: 10px 16px !important;
            font-size: 14px !important;
          }
          .insight-card {
            padding: 16px !important;
          }
          .chart-container {
            padding: 16px !important;
            overflow-x: auto;
          }
          .journal-textarea {
            min-height: 100px !important;
          }
        }
        @media (max-width: 480px) {
          .journal-container {
            padding: 12px !important;
          }
          .tab-btn {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }
          .insight-card {
            padding: 12px !important;
          }
          .chart-container {
            padding: 12px !important;
          }
        }
      `}),W&&e.jsx("div",{className:"consent-modal",children:e.jsxs("div",{className:"consent-content",children:[e.jsx("h3",{style:{color:u,marginBottom:16,fontSize:18,fontWeight:600},children:"AI Analysis Consent"}),e.jsx("p",{style:{color:u,marginBottom:16,lineHeight:1.6},children:"To provide you with personalized insights and mood tracking, we can analyze your journal entries using AI. This helps us understand your emotional patterns and suggest relevant exercises."}),e.jsxs("div",{className:"disclaimer",children:[e.jsx("strong",{children:"Important:"})," AI-generated suggestions are for general wellness support only and do not constitute medical advice. Always consult with qualified healthcare professionals for medical concerns."]}),e.jsx("p",{style:{color:u,marginBottom:20,lineHeight:1.6},children:"Your privacy is important. AI analysis is optional and you can change this setting anytime."}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx("button",{onClick:()=>v(!0),style:{padding:"12px 24px",borderRadius:8,background:Z,color:Q,fontWeight:600,border:"none",fontSize:16,cursor:"pointer"},children:"Enable AI Analysis"}),e.jsx("button",{onClick:()=>v(!1),style:{padding:"12px 24px",borderRadius:8,background:G,color:X,fontWeight:600,border:"none",fontSize:16,cursor:"pointer"},children:"Skip for Now"})]})]})}),e.jsxs("div",{className:"journal-container",style:{maxWidth:1200,margin:"2rem auto",padding:24},children:[e.jsxs("div",{className:"journal-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[e.jsxs("h2",{style:{fontWeight:700,color:u},children:["Welcome, ",o.username,"!"]}),e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:e.jsx("button",{onClick:()=>x(!0),style:{background:G,color:X,fontWeight:600,border:"none",fontSize:14,padding:"8px 16px",borderRadius:8,cursor:"pointer"},children:g?"AI: Enabled":"AI: Disabled"})})]}),e.jsxs("div",{style:{display:"flex",gap:0,marginBottom:24,borderBottom:`1px solid ${a}`},children:[e.jsx("button",{className:`tab-btn ${N==="dashboard"?"active":""}`,onClick:()=>b("dashboard"),children:"Dashboard"}),e.jsx("button",{className:`tab-btn ${N==="history"?"active":""}`,onClick:()=>b("history"),children:"Journal History"})]}),N==="dashboard"?e.jsxs("div",{children:[I&&e.jsxs("div",{className:"insight-card",children:[e.jsx("h3",{style:{color:"#6366f1",marginBottom:12,fontSize:18,fontWeight:600},children:I.title}),e.jsx("p",{style:{color:u,marginBottom:16,lineHeight:1.6},children:I.content}),e.jsxs("div",{style:{background:S,padding:16,borderRadius:8,border:`1px solid ${a}`},children:[e.jsx("div",{style:{fontSize:14,color:"#6366f1",fontWeight:600,marginBottom:8},children:"Try This Exercise:"}),e.jsx("div",{style:{color:u,lineHeight:1.5},children:I.exercise})]}),g&&e.jsxs("div",{className:"disclaimer",children:[e.jsx("strong",{children:"AI-generated suggestions, not medical advice."})," These insights are based on your journal entries and are meant for general wellness support only."]})]}),t.length>0&&g&&e.jsxs("div",{className:"chart-container",children:[e.jsx(je,{data:V(),options:q}),e.jsxs("div",{className:"disclaimer",style:{marginTop:16},children:[e.jsx("strong",{children:"AI-generated mood analysis, not medical advice."})," This chart shows emotional patterns based on AI analysis of your journal entries."]})]}),e.jsxs("div",{style:{background:S,border:`1px solid ${a}`,borderRadius:12,padding:20,marginBottom:24},children:[e.jsx("h3",{style:{color:u,marginBottom:16,fontSize:18,fontWeight:600},children:"Quick Journal Entry"}),e.jsxs("form",{onSubmit:y,children:[e.jsx("textarea",{value:s,onChange:n=>p(n.target.value),placeholder:"How are you feeling today? Share your thoughts, emotions, and experiences...",required:!0,className:"journal-textarea",style:{width:"100%",minHeight:80,marginBottom:12,padding:12,borderRadius:8,border:`1px solid ${re}`,fontSize:16,resize:"vertical",background:ne,color:ie}}),e.jsx("button",{type:"submit",className:"journal-btn",disabled:c,style:{padding:12,borderRadius:8,background:c?"#9ca3af":Z,color:Q,fontWeight:600,border:"none",fontSize:16,width:"100%",cursor:c?"not-allowed":"pointer"},children:c?"Analyzing...":"Add Journal Entry"}),g&&e.jsxs("div",{className:"disclaimer",children:[e.jsx("strong",{children:"AI analysis enabled."})," Your entry will be analyzed for sentiment and insights. You can disable this in settings."]})]})]}),t.length>0&&e.jsxs("div",{style:{background:S,border:`1px solid ${a}`,borderRadius:12,padding:20},children:[e.jsx("h3",{style:{color:u,marginBottom:16,fontSize:18,fontWeight:600},children:"Recent Entries"}),e.jsxs("div",{children:[t.slice(0,3).map(n=>e.jsxs("div",{style:{borderBottom:`1px solid ${a}`,padding:"12px 0",marginBottom:12},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("div",{style:{fontSize:12,color:L},children:new Date(n.date||n.createdAt).toLocaleDateString()}),n.sentiment&&g&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{fontSize:14},children:_(n.sentiment)}),e.jsx("span",{style:{fontSize:12,color:$(n.sentiment),fontWeight:600,textTransform:"capitalize"},children:n.sentiment})]})]}),e.jsx("div",{style:{color:u,fontSize:14,lineHeight:1.5},children:n.content.length>100?n.content.substring(0,100)+"...":n.content})]},n._id)),t.length>3&&e.jsxs("button",{onClick:()=>b("history"),style:{color:"#6366f1",background:"none",border:"none",fontSize:14,fontWeight:600,cursor:"pointer",padding:0},children:["View all ",t.length," entries →"]})]})]})]}):e.jsxs("div",{children:[e.jsxs("div",{style:{background:S,border:`1px solid ${a}`,borderRadius:12,padding:20,marginBottom:24},children:[e.jsx("h3",{style:{color:u,marginBottom:16,fontSize:18,fontWeight:600},children:"Journal Entry"}),e.jsxs("form",{onSubmit:y,children:[e.jsx("textarea",{value:s,onChange:n=>p(n.target.value),placeholder:"How are you feeling today? Share your thoughts, emotions, and experiences...",required:!0,className:"journal-textarea",style:{width:"100%",minHeight:80,marginBottom:12,padding:12,borderRadius:8,border:`1px solid ${re}`,fontSize:16,resize:"vertical",background:ne,color:ie}}),e.jsx("button",{type:"submit",className:"journal-btn",disabled:c,style:{padding:12,borderRadius:8,background:c?"#9ca3af":Z,color:Q,fontWeight:600,border:"none",fontSize:16,width:"100%",cursor:c?"not-allowed":"pointer"},children:c?"Analyzing...":"Add Journal Entry"}),g&&e.jsxs("div",{className:"disclaimer",children:[e.jsx("strong",{children:"AI analysis enabled."})," Your entry will be analyzed for sentiment and insights. You can disable this in settings."]})]})]}),m&&e.jsx("div",{className:"fade-error",style:{color:"#ef4444",marginBottom:8,textAlign:"center",fontWeight:500},children:m}),e.jsx("div",{children:t.length===0?e.jsx("p",{style:{color:L,textAlign:"center"},children:"No journal entries yet. Start writing to see AI insights!"}):t.map(n=>e.jsxs("div",{className:"journal-card",style:{border:`1px solid ${a}`,borderRadius:12,padding:20,marginBottom:20,background:S,boxShadow:"0 2px 8px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[e.jsxs("div",{style:{fontSize:12,color:L},children:[new Date(n.date||n.createdAt).toLocaleDateString()," at ",new Date(n.date||n.createdAt).toLocaleTimeString()]}),n.sentiment&&g&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{fontSize:16},children:_(n.sentiment)}),e.jsx("span",{style:{fontSize:12,color:$(n.sentiment),fontWeight:600,textTransform:"capitalize"},children:n.sentiment})]})]}),w===n._id?e.jsxs(e.Fragment,{children:[e.jsx("textarea",{value:T,onChange:h=>A(h.target.value),className:"journal-textarea",style:{width:"100%",minHeight:60,marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${re}`,fontSize:15,background:ne,color:ie}}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{onClick:()=>H(n._id),disabled:c,className:"journal-btn",style:{padding:8,borderRadius:8,background:c?"#9ca3af":Z,color:Q,fontWeight:600,border:"none",fontSize:15,cursor:c?"not-allowed":"pointer"},children:c?"Saving...":"Save"}),e.jsx("button",{onClick:()=>C(null),className:"journal-btn",style:{padding:8,borderRadius:8,background:G,color:X,fontWeight:600,border:"none",fontSize:15},children:"Cancel"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:12,lineHeight:1.6,fontSize:15},children:n.content}),n.keywords&&n.keywords.length>0&&g&&e.jsxs("div",{style:{marginBottom:12},children:[e.jsx("div",{style:{fontSize:12,color:L,marginBottom:4},children:"Key themes:"}),e.jsx("div",{children:n.keywords.map((h,k)=>e.jsx("span",{className:"keyword-tag",children:h},k))})]}),n.aiFeedback&&g&&e.jsxs("div",{className:"ai-feedback",children:[e.jsx("div",{style:{fontSize:12,color:L,marginBottom:4,fontWeight:600},children:"AI Insights:"}),e.jsx("div",{style:{fontSize:14,lineHeight:1.5},children:n.aiFeedback}),e.jsx("div",{className:"disclaimer",style:{marginTop:8},children:e.jsx("strong",{children:"AI-generated suggestions, not medical advice."})})]}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:16},children:[e.jsx("button",{onClick:()=>D(n._id,n.content),className:"journal-btn",style:{padding:8,borderRadius:8,background:G,color:X,fontWeight:600,border:"none",fontSize:15},children:"Edit"}),e.jsx("button",{onClick:()=>R(n._id),className:"journal-btn",style:{padding:8,borderRadius:8,background:G,color:ge,fontWeight:600,border:"none",fontSize:15},children:"Delete"})]})]})]},n._id))})]})]})]})}function Ie({darkMode:o}){const[l,i]=d.useState([]),[t,r]=d.useState(""),[s,p]=d.useState(!1),[m,f]=d.useState(""),w=ee.useRef(null);ee.useEffect(()=>{w.current&&(w.current.scrollTop=w.current.scrollHeight)},[l]);const C=async v=>{if(v.preventDefault(),!t.trim())return;f(""),p(!0);const j={role:"user",content:t};i(y=>[...y,j]),r("");try{const y=await fetch(J.CHATBOT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({message:j.content})}),R=await y.json();if(!y.ok)throw new Error(R.message||"Error");i(D=>[...D,{role:"assistant",content:R.reply}])}catch(y){f(y.message)}finally{p(!1)}},T=v=>{const j=v.split(`

`);return j.map((y,R)=>{const D=y.split(`
`);return e.jsx("div",{style:{marginBottom:R<j.length-1?16:0},children:D.map((H,$)=>{const _=/^(\d+\.|\*|\-|\•)/.test(H.trim()),Y=/^(Tone Analysis|Area for Growth|Mind Exercise\/Advice):/.test(H.trim());if(_)return e.jsxs("div",{style:{marginLeft:16,marginBottom:4,display:"flex",alignItems:"flex-start"},children:[e.jsx("span",{style:{marginRight:8,color:"#6366f1"},children:"•"}),e.jsx("span",{children:H.replace(/^(\d+\.|\*|\-|\•)\s*/,"")})]},$);if(Y){const[V,...q]=H.split(":");return e.jsxs("div",{style:{marginBottom:8},children:[e.jsxs("strong",{style:{color:"#6366f1"},children:[V,":"]}),q.length>0&&e.jsxs("span",{children:[" ",q.join(":")]})]},$)}else return e.jsx("div",{style:{marginBottom:$<D.length-1?8:0,lineHeight:1.6},children:H},$)})},R)})},A=o?"#18181b":"#f8fafc",c=o?"#23232a":"#fff",B=o?"#27272a":"#e0e0e0",N="#6366f1",b="#fff",I=o?"#23232a":"#fff",E=o?"#f3f4f6":"#222",g=o?"#373737":"#e0e0e0",P=o?"#18181b":"#fff",W=o?"#27272a":"#d1d5db",x=o?"#f3f4f6":"#222",U=o?"#a1a1aa":"#6b7280";return e.jsxs("div",{style:{minHeight:"100vh",background:A,display:"flex",flexDirection:"column"},children:[e.jsx("style",{children:`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .chatbot-bubble { 
          max-width: 85%; 
          padding: 16px 20px; 
          border-radius: 18px; 
          margin: 8px 0; 
          font-size: 15px; 
          line-height: 1.6; 
          word-break: break-word; 
          display: inline-block; 
          white-space: pre-wrap;
        }
        .chatbot-bubble-user { 
          background: ${N}; 
          color: ${b}; 
          border-bottom-right-radius: 4px; 
          margin-left: auto; 
        }
        .chatbot-bubble-bot { 
          background: ${I}; 
          color: ${E}; 
          border-bottom-left-radius: 4px; 
          margin-right: auto; 
          border: 1px solid ${g}; 
        }
        .chatbot-scroll { 
          overflow-y: auto; 
          flex: 1; 
          padding: 24px 0 16px 0; 
        }
        .chatbot-input-bar { 
          display: flex; 
          gap: 8px; 
          padding: 16px 0 8px 0; 
          background: ${A}; 
          position: sticky; 
          bottom: 0; 
          z-index: 2; 
        }
        .chatbot-input:focus { outline: 2px solid #6366f1; }
        .chatbot-btn { transition: background 0.2s, color 0.2s, transform 0.1s; }
        .chatbot-btn:hover { background: #6366f1; color: #fff; }
        .chatbot-btn:active { transform: scale(0.97); }
        .fade-error { animation: fadeIn 0.5s; }
        .welcome-message { 
          background: ${o?"#1f2937":"#f3f4f6"}; 
          border-left: 4px solid #6366f1; 
          padding: 20px; 
          border-radius: 12px; 
          margin: 16px 0; 
          font-size: 14px;
          line-height: 1.6;
        }
        .disclaimer {
          background: ${o?"#1f2937":"#fef3c7"};
          border: 1px solid ${o?"#374151":"#f59e0b"};
          border-radius: 8px;
          padding: 12px;
          margin: 12px 0;
          font-size: 12px;
          color: ${o?"#d1d5db":"#92400e"};
        }
        @media (max-width: 768px) {
          .chatbot-container {
            height: calc(100vh - 120px) !important;
            margin: 0 !important;
            border-radius: 0 !important;
            max-width: 100% !important;
          }
          .chatbot-scroll {
            padding: 16px !important;
          }
          .chatbot-input-bar {
            padding: 12px 16px !important;
          }
          .chatbot-bubble {
            max-width: 90% !important;
            font-size: 14px !important;
            padding: 12px 16px !important;
          }
          .welcome-message {
            padding: 16px !important;
            font-size: 13px !important;
          }
        }
        @media (max-width: 480px) {
          .chatbot-container {
            height: calc(100vh - 100px) !important;
          }
          .chatbot-scroll {
            padding: 12px !important;
          }
          .chatbot-input-bar {
            padding: 8px 12px !important;
          }
          .chatbot-bubble {
            max-width: 95% !important;
            font-size: 13px !important;
            padding: 10px 14px !important;
          }
          .welcome-message {
            padding: 12px !important;
            font-size: 12px !important;
          }
        }
      `}),e.jsxs("div",{className:"chatbot-container",style:{maxWidth:900,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",height:"90vh",background:c,borderRadius:16,boxShadow:"0 2px 12px rgba(99,102,241,0.07)",border:`1px solid ${B}`,overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"18px 0 8px 0",textAlign:"center"},children:[e.jsx("div",{style:{fontWeight:700,color:"#6366f1",fontSize:24,letterSpacing:1},children:"Tony"}),e.jsx("div",{style:{fontSize:14,color:U,marginTop:4},children:"Mental Health Assistant"})]}),e.jsx("div",{ref:w,className:"chatbot-scroll",style:{background:"none",padding:"0 24px",flex:1,minHeight:0},children:l.length===0?e.jsxs("div",{className:"welcome-message",children:[e.jsx("div",{style:{fontWeight:600,color:"#6366f1",marginBottom:8},children:"Welcome! I'm Tony, your mental health assistant."}),e.jsxs("div",{style:{color:o?"#d1d5db":"#374151"},children:["I'm here to help you by:",e.jsx("br",{}),"• Analyzing your emotional tone",e.jsx("br",{}),"• Suggesting areas for growth",e.jsx("br",{}),"• Recommending simple mind exercises",e.jsx("br",{}),e.jsx("br",{}),"Share how you're feeling today, and I'll provide compassionate support and practical advice."]}),e.jsxs("div",{className:"disclaimer",children:[e.jsx("strong",{children:"Important:"})," AI-generated suggestions are for general wellness support only and do not constitute medical advice. Always consult with qualified healthcare professionals for medical concerns or if you're experiencing a mental health crisis."]})]}):l.map((v,j)=>e.jsx("div",{style:{display:"flex",flexDirection:v.role==="user"?"row-reverse":"row",alignItems:"flex-end"},children:e.jsx("div",{className:`chatbot-bubble chatbot-bubble-${v.role==="user"?"user":"bot"}`,children:v.role==="user"?v.content:T(v.content)})},j))}),e.jsxs("form",{onSubmit:C,className:"chatbot-input-bar",style:{borderTop:`1px solid ${B}`,margin:0,padding:"16px 24px 8px 24px",background:A},children:[e.jsx("input",{value:t,onChange:v=>r(v.target.value),placeholder:"Share how you're feeling today...",className:"chatbot-input",style:{flex:1,padding:14,borderRadius:10,border:`1px solid ${W}`,fontSize:17,background:P,color:x,transition:"outline 0.2s"}}),e.jsx("button",{type:"submit",disabled:s,className:"chatbot-btn",style:{padding:"0 24px",borderRadius:10,background:s?"#9ca3af":"#6366f1",color:"#fff",fontWeight:600,border:"none",fontSize:17,minWidth:80,transition:"background 0.2s, color 0.2s, transform 0.1s",cursor:s?"not-allowed":"pointer"},children:s?"Thinking...":"Send"})]}),m&&e.jsx("div",{className:"fade-error",style:{color:"#ef4444",marginTop:8,textAlign:"center",fontWeight:500},children:m})]})]})}function We({darkMode:o,onLogout:l}){const[i,t]=d.useState(null),[r,s]=d.useState({username:"",email:""}),[p,m]=d.useState({oldPassword:"",newPassword:""}),[f,w]=d.useState(""),[C,T]=d.useState(""),[A,c]=d.useState(""),[B,N]=d.useState(!1),[b,I]=d.useState(""),[E,g]=d.useState(!1);d.useEffect(()=>{fetch(J.PROFILE,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(a=>a.json()).then(a=>{t(a),s({username:a.username,email:a.email})})},[]);const P=a=>s({...r,[a.target.name]:a.target.value}),W=a=>m({...p,[a.target.name]:a.target.value}),x=async a=>{a.preventDefault(),w(""),c("");try{const u=await fetch(J.PROFILE,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(r)}),L=await u.json();if(!u.ok)throw new Error(L.message||"Error");t(L),w("Profile updated!")}catch(u){c(u.message)}},U=async a=>{a.preventDefault(),T(""),c("");try{const u=await fetch(J.PROFILE+"/password",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(p)}),L=await u.json();if(!u.ok)throw new Error(L.message||"Error");T("Password updated!"),m({oldPassword:"",newPassword:""})}catch(u){c(u.message)}},v=async()=>{if(b!=="Delete"){c('Please type "Delete" to confirm account deletion');return}g(!0),c("");try{const a=await fetch(J.PROFILE,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}});if(!a.ok){const u=await a.json();throw new Error(u.message||"Failed to delete account")}localStorage.removeItem("token"),l()}catch(a){c(a.message),g(!1)}},j=o?"#18181b":"#f8fafc",y=o?"#23232a":"#fff",R=o?"#27272a":"#e0e0e0",D=o?"#f3f4f6":"#222",H=o?"#a1a1aa":"#888",$=o?"#18181b":"#fff",_=o?"#27272a":"#d1d5db",Y=o?"#f3f4f6":"#222",V="#6366f1",q="#fff",oe="#22c55e",S="#ef4444";return e.jsxs("div",{style:{minHeight:"100vh",background:j,color:D,padding:0,animation:"fadeIn 0.7s"},children:[e.jsx("style",{children:`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .profile-card { transition: box-shadow 0.2s, transform 0.2s; }
        .profile-card:hover { box-shadow: 0 8px 32px rgba(99,102,241,0.13); transform: translateY(-4px) scale(1.02); }
        .profile-btn { transition: background 0.2s, color 0.2s, transform 0.1s; }
        .profile-btn:hover { background: #6366f1; color: #fff; }
        .profile-btn:active { transform: scale(0.97); }
        .profile-input:focus { outline: 2px solid #6366f1; }
        .fade-error { animation: fadeIn 0.5s; }
        .fade-success { animation: fadeIn 0.5s; color: ${oe}; }
        @media (max-width: 768px) {
          .profile-container {
            padding: 16px !important;
            margin: 1rem auto !important;
          }
          .profile-card {
            padding: 24px !important;
          }
          .modal-content {
            margin: 16px !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .profile-container {
            padding: 12px !important;
          }
          .profile-card {
            padding: 20px !important;
          }
          .modal-content {
            margin: 12px !important;
            padding: 20px !important;
          }
        }
        .modal-overlay { 
          position: fixed; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          background: rgba(0,0,0,0.5); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          z-index: 1000; 
          animation: fadeIn 0.3s;
        }
        .modal-content { 
          animation: slideIn 0.3s; 
          max-width: 90vw;
        }
        @keyframes slideIn { 
          from { opacity: 0; transform: translateY(-20px) scale(0.95); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
      `}),e.jsxs("div",{className:"profile-container",style:{maxWidth:400,margin:"2rem auto",padding:24},children:[e.jsxs("div",{className:"profile-card",style:{padding:32,borderRadius:16,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",background:y,border:`1px solid ${R}`,marginBottom:24},children:[e.jsx("h2",{style:{textAlign:"center",fontWeight:700,color:D,marginBottom:24},children:"Profile"}),e.jsxs("form",{onSubmit:x,style:{marginBottom:24},children:[e.jsx("input",{name:"username",value:r.username,onChange:P,placeholder:"Username",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${_}`,fontSize:16,background:$,color:Y}}),e.jsx("input",{name:"email",value:r.email,onChange:P,placeholder:"Email",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${_}`,fontSize:16,background:$,color:Y}}),e.jsx("button",{type:"submit",className:"profile-btn",style:{width:"100%",padding:12,borderRadius:8,background:V,color:q,fontWeight:600,fontSize:16,border:"none",boxShadow:"0 2px 8px rgba(99,102,241,0.08)"},children:"Update Profile"}),f&&e.jsx("div",{className:"fade-success",style:{marginTop:8,textAlign:"center",fontWeight:500},children:f})]}),e.jsxs("form",{onSubmit:U,children:[e.jsx("input",{name:"oldPassword",type:"password",value:p.oldPassword,onChange:W,placeholder:"Old Password",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${_}`,fontSize:16,background:$,color:Y}}),e.jsx("input",{name:"newPassword",type:"password",value:p.newPassword,onChange:W,placeholder:"New Password",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${_}`,fontSize:16,background:$,color:Y}}),e.jsx("button",{type:"submit",className:"profile-btn",style:{width:"100%",padding:12,borderRadius:8,background:V,color:q,fontWeight:600,fontSize:16,border:"none",boxShadow:"0 2px 8px rgba(99,102,241,0.08)"},children:"Change Password"}),C&&e.jsx("div",{className:"fade-success",style:{marginTop:8,textAlign:"center",fontWeight:500},children:C})]}),A&&e.jsx("div",{className:"fade-error",style:{color:S,marginTop:8,textAlign:"center",fontWeight:500},children:A})]}),e.jsxs("div",{className:"profile-card",style:{padding:32,borderRadius:16,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",background:y,border:`1px solid ${R}`,borderColor:S},children:[e.jsx("h3",{style:{textAlign:"center",fontWeight:700,color:S,marginBottom:16},children:"Danger Zone"}),e.jsx("p",{style:{textAlign:"center",color:H,marginBottom:20,fontSize:14,lineHeight:1.5},children:"Once you delete your account, there is no going back. Please be certain."}),e.jsx("button",{onClick:()=>N(!0),style:{width:"100%",padding:12,borderRadius:8,background:S,color:"#fff",fontWeight:600,fontSize:16,border:"none",cursor:"pointer",transition:"background 0.2s, transform 0.1s"},onMouseOver:a=>a.target.style.background="#dc2626",onMouseOut:a=>a.target.style.background=S,onMouseDown:a=>a.target.style.transform="scale(0.97)",onMouseUp:a=>a.target.style.transform="scale(1)",children:"Delete Account"})]})]}),B&&e.jsx("div",{className:"modal-overlay",onClick:()=>N(!1),children:e.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),style:{background:y,padding:32,borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,0.3)",border:`1px solid ${R}`,maxWidth:400,width:"90%"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[e.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"#fef2f2",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",border:`2px solid ${S}`},children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:S,strokeWidth:"2",children:e.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})})}),e.jsx("h3",{style:{fontWeight:700,color:D,marginBottom:8},children:"We're sad to see you go"}),e.jsx("p",{style:{color:H,fontSize:14,lineHeight:1.6},children:"This action cannot be undone. This will permanently delete your account and remove all your data from our servers."})]}),e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("label",{style:{display:"block",marginBottom:8,color:D,fontWeight:500},children:'Type "Delete" to confirm:'}),e.jsx("input",{type:"text",value:b,onChange:a=>I(a.target.value),placeholder:"Delete",style:{width:"100%",padding:12,borderRadius:8,border:`1px solid ${_}`,fontSize:16,background:$,color:Y}})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx("button",{onClick:()=>N(!1),style:{flex:1,padding:12,borderRadius:8,background:"transparent",color:D,fontWeight:600,fontSize:16,border:`1px solid ${R}`,cursor:"pointer",transition:"background 0.2s"},onMouseOver:a=>a.target.style.background=o?"#27272a":"#f1f5f9",onMouseOut:a=>a.target.style.background="transparent",children:"Cancel"}),e.jsx("button",{onClick:v,disabled:E||b!=="Delete",style:{flex:1,padding:12,borderRadius:8,background:b==="Delete"?S:"#6b7280",color:"#fff",fontWeight:600,fontSize:16,border:"none",cursor:b==="Delete"?"pointer":"not-allowed",transition:"background 0.2s"},onMouseOver:a=>{b==="Delete"&&(a.target.style.background="#dc2626")},onMouseOut:a=>{b==="Delete"&&(a.target.style.background=S)},children:E?"Deleting...":"Delete Account"})]})]})})]})}function $e({onNav:o,onLogout:l,current:i,darkMode:t,onToggleDarkMode:r,isAuthenticated:s,onLogin:p,onSignup:m}){const[f,w]=d.useState(!1),C=()=>{w(!f)};return e.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderBottom:`1px solid ${t?"#27272a":"#e0e0e0"}`,marginBottom:24,background:t?"linear-gradient(90deg, #23232a 0%, #18181b 100%)":"linear-gradient(90deg, #f8fafc 0%, #e0e7ef 100%)",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.03)",position:"relative"},children:[e.jsx("style",{children:`
        .nav-btn {
          transition: background 0.2s, color 0.2s, transform 0.1s;
        }
        .nav-btn:hover {
          background: #6366f1 !important;
          color: #fff !important;
        }
        .nav-btn:active {
          transform: scale(0.97);
        }
        .dark-toggle-navbar {
          background: ${t?"#18181b":"#e0e7ef"};
          border: 1px solid ${t?"#27272a":"#e0e0e0"};
          color: ${t?"#f3f4f6":"#222"};
          border-radius: 999px;
          padding: 6px 18px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          margin-left: 18px;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
        }
        .dark-toggle-navbar:hover {
          background: ${t?"#23232a":"#c7d2fe"};
        }
        .nav-auth-btn {
          padding: 8px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          margin-left: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .nav-login-btn {
          background: #6366f1;
          color: #fff;
        }
        .nav-login-btn:hover {
          background: ${t?"#818cf8":"#3730a3"};
        }
        .nav-signup-btn {
          background: ${t?"#23232a":"#e0e7ef"};
          color: ${t?"#a5b4fc":"#6366f1"};
        }
        .nav-signup-btn:hover {
          background: ${t?"#373737":"#c7d2fe"};
        }
        .nav-logout-btn {
          transition: background 0.2s, color 0.2s, transform 0.1s;
        }
        .nav-logout-btn:hover {
          background: #6366f1 !important;
          color: #fff !important;
        }
        .nav-logout-btn:active {
          transform: scale(0.97);
        }
        .mobile-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          color: ${t?"#f3f4f6":"#222"};
        }
        .mobile-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          left: auto;
          width: 200px;
          background: ${t?"#23232a":"#fff"};
          border: 1px solid ${t?"#27272a":"#e0e0e0"};
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 12px 0;
          margin-top: 8px;
        }
        .mobile-dropdown.open {
          display: block;
        }
        .mobile-dropdown-item {
          display: block;
          width: 100%;
          text-align: left;
          padding: 14px 24px;
          margin: 0;
          border-radius: 0;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          color: ${t?"#f3f4f6":"#222"};
          font-weight: 600;
          transition: background 0.2s;
        }
        .mobile-dropdown-item:hover {
          background: ${t?"#373737":"#f1f5f9"};
        }
        .mobile-dropdown-item.active {
          background: #6366f1;
          color: #fff;
        }
        .mobile-dropdown-item.active:hover {
          background: #5b21b6;
        }
        .mobile-dropdown-item:not(:last-child) {
          border-bottom: 1px solid ${t?"#373737":"#e0e0e0"};
        }
        @media (max-width: 768px) {
          .mobile-burger {
            display: block;
          }
          .desktop-nav {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-burger, .mobile-dropdown {
            display: none !important;
          }
        }
      `}),e.jsxs("button",{onClick:()=>o("home"),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",cursor:"pointer",fontSize:"clamp(18px, 4vw, 22px)",fontWeight:700,color:t?"#a5b4fc":"#6366f1",marginRight:"auto",fontFamily:"'Poppins', sans-serif",letterSpacing:"1px",minWidth:0},title:"Go to Home",children:[e.jsxs("svg",{width:"clamp(24px, 5vw, 28px)",height:"clamp(24px, 5vw, 28px)",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:t?"#a5b4fc":"#6366f1",strokeWidth:"2",fill:t?"#23232a":"#fff"}),e.jsx("path",{d:"M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z",stroke:t?"#a5b4fc":"#6366f1",strokeWidth:"1.5",fill:t?"#18181b":"#f1f5f9"})]}),e.jsx("span",{style:{display:window.innerWidth<=480?"none":"inline"},children:"SerenitySpace"})]}),e.jsx("div",{className:"desktop-nav",style:{display:"flex",alignItems:"center",gap:16,marginLeft:"auto"},children:s?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"nav-btn",onClick:()=>o("journal"),style:{fontWeight:i==="journal"?700:500,color:i==="journal"?t?"#a5b4fc":"#6366f1":t?"#f3f4f6":"#222",background:"none",border:"none",fontSize:16,cursor:"pointer",padding:8,borderRadius:8},children:"Journal"}),e.jsx("button",{className:"nav-btn",onClick:()=>o("chatbot"),style:{fontWeight:i==="chatbot"?700:500,color:i==="chatbot"?t?"#a5b4fc":"#6366f1":t?"#f3f4f6":"#222",background:"none",border:"none",fontSize:16,cursor:"pointer",padding:8,borderRadius:8},children:"Chatbot"}),e.jsx("button",{className:"nav-btn",onClick:()=>o("profile"),style:{fontWeight:i==="profile"?700:500,color:i==="profile"?t?"#a5b4fc":"#6366f1":t?"#f3f4f6":"#222",background:"none",border:"none",fontSize:16,cursor:"pointer",padding:8,borderRadius:8},children:"Profile"}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx("button",{className:"dark-toggle-navbar",onClick:r,children:t?"Light":"Dark"}),e.jsx("button",{className:"nav-logout-btn",onClick:l,style:{background:t?"#23232a":"#f1f5f9",color:"#ef4444",fontWeight:600,border:"none",fontSize:15,padding:8,borderRadius:8,cursor:"pointer"},children:"Logout"})]})]}):e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx("button",{className:"dark-toggle-navbar",onClick:r,children:t?"Light":"Dark"}),e.jsx("button",{className:"nav-auth-btn nav-login-btn",onClick:p,children:"Login"}),e.jsx("button",{className:"nav-auth-btn nav-signup-btn",onClick:m,children:"Sign Up"})]})}),e.jsx("button",{className:"mobile-burger",onClick:C,"aria-label":"Open menu",children:e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f?e.jsx("path",{d:"M18 6L6 18M6 6l12 12"}):e.jsx("path",{d:"M3 12h18M3 6h18M3 18h18"})})}),e.jsx("div",{className:`mobile-dropdown${f?" open":""}`,children:s?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:`mobile-dropdown-item${i==="journal"?" active":""}`,onClick:()=>o("journal"),children:"Journal"}),e.jsx("button",{className:`mobile-dropdown-item${i==="chatbot"?" active":""}`,onClick:()=>o("chatbot"),children:"Chatbot"}),e.jsx("button",{className:`mobile-dropdown-item${i==="profile"?" active":""}`,onClick:()=>o("profile"),children:"Profile"}),e.jsxs("div",{style:{borderTop:`1px solid ${t?"#373737":"#e0e0e0"}`,marginTop:8,paddingTop:8},children:[e.jsx("button",{className:"mobile-dropdown-item",onClick:()=>r(),style:{color:t?"#a5b4fc":"#6366f1"},children:t?"☀️ Light Mode":"🌙 Dark Mode"}),e.jsx("button",{className:"mobile-dropdown-item",onClick:()=>l(),style:{color:"#ef4444"},children:"🚪 Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"mobile-dropdown-item",onClick:()=>p(),style:{color:"#6366f1"},children:"🔐 Login"}),e.jsx("button",{className:"mobile-dropdown-item",onClick:()=>m(),style:{color:"#6366f1"},children:"✨ Sign Up"}),e.jsx("div",{style:{borderTop:`1px solid ${t?"#373737":"#e0e0e0"}`,marginTop:8,paddingTop:8},children:e.jsx("button",{className:"mobile-dropdown-item",onClick:()=>r(),style:{color:t?"#a5b4fc":"#6366f1"},children:t?"☀️ Light Mode":"🌙 Dark Mode"})})]})})]})}function de({darkMode:o,onToggleDarkMode:l}){const i=o?"#18181b":"#f8fafc",t=o?"#23232a":"#fff",r=o?"#f3f4f6":"#222",s=o?"#a1a1aa":"#888",p=[{icon:e.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 3C7 3 3 7 3 12c0 2.5 1.5 4.5 3.5 6.5.5.5 1.5.5 2 0 .5-.5.5-1.5 0-2C7.5 15 7 13.5 7 12c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.5 3-1.5 4.5-.5.5-.5 1.5 0 2 .5.5 1.5.5 2 0C19.5 16.5 21 14.5 21 12c0-5-4-9-9-9z",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"})}),title:"Reflect and Grow",desc:"Journaling helps you understand your thoughts and emotions. Start your journey to self-discovery today. Writing regularly can help you process emotions, recognize patterns, and foster personal growth. SerenitySpace makes it easy and private."},{icon:e.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"})}),title:"Find Your Calm",desc:"Our AI chatbot is here to support your mental wellness journey. Find peace of mind, anytime. Whether you need to vent, reflect, or seek advice, Tony is always ready to listen and help you find your calm."},{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"4",y:"7",width:"16",height:"13",rx:"2",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"}),e.jsx("path",{d:"M8 7V5a4 4 0 1 1 8 0v2",stroke:"#6366f1",strokeWidth:"1.5"})]}),title:"Private & Secure",desc:"Your thoughts are safe and confidential with us. SerenitySpace values your privacy. All your entries are encrypted and only accessible by you, ensuring a safe space for honest reflection."},{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"8",rx:"4",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"}),e.jsx("circle",{cx:"8",cy:"14",r:"1.5",fill:"#6366f1"}),e.jsx("circle",{cx:"16",cy:"14",r:"1.5",fill:"#6366f1"})]}),title:"24/7 Support",desc:"Tony, your AI companion, is always ready to listen and help you reflect. No matter the time of day, you have a supportive presence to talk to and guide you through your thoughts."},{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("circle",{cx:"12",cy:"12",r:"5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"})]}),title:"Mental Clarity",desc:"Clear your mind and organize your thoughts in a safe, supportive space. SerenitySpace helps you declutter your mind, reduce stress, and focus on what matters most."},{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"3",y:"12",width:"3",height:"7",rx:"1.5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("rect",{x:"8.5",y:"9",width:"3",height:"10",rx:"1.5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("rect",{x:"14",y:"6",width:"3",height:"13",rx:"1.5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"})]}),title:"Track Your Progress",desc:"Visualize your growth over time. SerenitySpace lets you look back on your journey, see patterns, and celebrate your progress toward better mental wellness."}];return e.jsxs("div",{style:{minHeight:"80vh",background:i,color:r,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:0},children:[e.jsxs("div",{className:"home-hero-row",style:{display:"flex",maxWidth:1100,width:"100%",alignItems:"center",justifyContent:"center",gap:48,padding:"32px 0",position:"relative"},children:[e.jsxs("div",{className:"home-hero-left",style:{flex:1,minWidth:320},children:[e.jsx("div",{style:{fontSize:16,color:o?"#818cf8":"#6366f1",fontWeight:600,marginBottom:12,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) both"},children:"Welcome to"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:18,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.08s both"},children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:o?"#a5b4fc":"#6366f1",strokeWidth:"2",fill:o?"#23232a":"#fff"}),e.jsx("path",{d:"M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z",stroke:o?"#a5b4fc":"#6366f1",strokeWidth:"1.5",fill:o?"#18181b":"#f1f5f9"})]}),e.jsx("span",{style:{fontWeight:700,color:o?"#a5b4fc":"#6366f1",fontFamily:"'Poppins', sans-serif",fontSize:32,letterSpacing:"1px"},children:"SerenitySpace"})]}),e.jsxs("div",{className:"home-hero-title",style:{fontSize:38,fontWeight:800,marginBottom:18,lineHeight:1.1,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.16s both"},children:["Where your thoughts",e.jsx("br",{}),"find peace."]}),e.jsx("div",{className:"home-hero-desc",style:{fontSize:18,color:s,marginBottom:32,maxWidth:500,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.24s both"},children:"Serenity Space is a full-stack mental wellness platform that combines journaling and conversational AI. Built using React, Node.js, MongoDB, and OpenAI’s language model, it offers users a safe space to log their thoughts and engage with a supportive chatbot. Designed with simplicity, privacy, and mental clarity in mind."})]}),e.jsx("div",{className:"home-hero-right",style:{flex:1,minWidth:320,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:400,height:400,borderRadius:28,overflow:"hidden",boxShadow:"0 4px 32px rgba(99,102,241,0.13)",maxWidth:"98vw"},children:e.jsx("img",{src:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",alt:"Serenity",style:{width:"100%",height:"100%",objectFit:"cover"}})})})]}),e.jsx("style",{children:`
        .home-card {
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          will-change: transform, box-shadow;
          cursor: pointer;
          transform: scale(1);
        }
        .home-card:hover {
          box-shadow: 0 12px 36px rgba(99,102,241,0.22);
          transform: translateY(-12px) scale(1.1) rotate(-1.5deg);
          border-color: #6366f1 !important;
        }
        @media (max-width: 1100px) {
          .home-hero-row { flex-direction: column; gap: 32px !important; align-items: flex-start !important; }
          .home-hero-left, .home-hero-right { width: 100% !important; min-width: 0 !important; }
          .home-hero-left, .home-hero-right { align-items: center !important; justify-content: center !important; text-align: center !important; }
          .home-hero-title, .home-hero-desc { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
          .home-hero-left { padding: 0 18px !important; }
          .home-hero-right { padding: 0 18px !important; }
        }
        @media (max-width: 700px) {
          .home-hero-row { padding: 18px 0 !important; }
          .home-hero-left { padding: 0 8px !important; }
          .home-hero-right { padding: 0 8px !important; }
          .home-hero-title { font-size: 2rem !important; }
          .home-hero-desc { font-size: 1rem !important; }
          .home-card-grid { grid-template-columns: 1fr !important; grid-template-rows: none !important; gap: 24px !important; max-width: 98vw !important; }
          .home-card { max-width: 98vw !important; }
        }
      `}),e.jsx("div",{style:{width:"100%",background:i,padding:"32px 0 48px 0",display:"flex",justifyContent:"center"},children:e.jsx("div",{className:"home-card-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(210px, 1fr))",gridTemplateRows:"repeat(2, 1fr)",gap:"36px 32px",maxWidth:900,width:"100%",overflow:"visible",padding:"0 12px"},children:p.map((m,f)=>e.jsxs("div",{className:"home-card",style:{background:t,borderRadius:16,boxShadow:"0 2px 12px rgba(99,102,241,0.07)",border:`1.5px solid ${o?"#27272a":"#e0e0e0"}`,overflow:"hidden",display:"flex",flexDirection:"column",minHeight:260,alignItems:"center",justifyContent:"flex-start",paddingTop:18,maxWidth:270},children:[m.icon,e.jsxs("div",{style:{padding:"16px 14px 14px 14px",flex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:17,color:o?"#a5b4fc":"#6366f1",marginBottom:7,textAlign:"center"},children:m.title}),e.jsx("div",{style:{color:s,fontSize:14,flex:1,textAlign:"center",lineHeight:1.5},children:m.desc})]})]},f))})}),e.jsx("div",{style:{width:"100%",background:o?"#1f2937":"#fef3c7",borderTop:`1px solid ${o?"#374151":"#f59e0b"}`,padding:"24px 0"},children:e.jsx("div",{style:{maxWidth:900,margin:"0 auto",padding:"0 24px",textAlign:"center"},children:e.jsxs("div",{style:{color:o?"#d1d5db":"#92400e",fontSize:14,lineHeight:1.6,fontWeight:500},children:[e.jsx("strong",{children:"Important Notice:"})," SerenitySpace provides AI-generated suggestions for general wellness support only. These suggestions do not constitute medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns or if you're experiencing a mental health crisis. If you're in crisis, please contact emergency services or a mental health crisis hotline immediately."]})})})]})}function Te(){const[o,l]=d.useState(()=>localStorage.getItem("token")?{username:"User"}:null),[i,t]=d.useState("journal"),[r,s]=d.useState(()=>{const x=localStorage.getItem("darkMode");return x?JSON.parse(x):!1}),[p,m]=d.useState(!1),[f,w]=d.useState("home"),[C,T]=d.useState("login"),A=x=>l(x),c=()=>{localStorage.removeItem("token"),l(null),t("journal"),m(!1),w("home")},B=()=>{s(x=>(localStorage.setItem("darkMode",JSON.stringify(!x)),!x))},N=()=>{T("login"),m(!0)},b=()=>{T("signup"),m(!0)},I=r?"#18181b":"#f8fafc",E=r?"#f3f4f6":"#222",g=r?"#23232a":"#f8fafc",P=r?"#27272a":"#e0e0e0",W=r?"#a5b4fc":"#6366f1";return e.jsxs("div",{style:{minHeight:"100vh",background:I,color:E,transition:"background 0.3s, color 0.3s"},children:[e.jsx("style",{children:`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: none; }
        }
        html, body, #root {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          width: 100vw;
          min-width: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 768px) {
          .app-main {
            min-height: calc(100vh - 120px) !important;
          }
          .app-footer {
            padding: 0.75rem !important;
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
          .footer-content {
            order: 2 !important;
            font-size: 0.8rem !important;
          }
          .footer-social {
            order: 1 !important;
          }
        }
        @media (max-width: 480px) {
          .app-main {
            min-height: calc(100vh - 100px) !important;
          }
          .app-footer {
            padding: 0.5rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}),e.jsx($e,{onNav:o?t:w,onLogout:c,current:o?i:f,darkMode:r,onToggleDarkMode:B,isAuthenticated:!!o,onLogin:N,onSignup:b}),e.jsx("main",{className:"app-main",style:{minHeight:"80vh"},children:o?e.jsxs(e.Fragment,{children:[i==="home"&&e.jsx(de,{darkMode:r,onToggleDarkMode:B}),i==="journal"&&e.jsx(Ae,{user:o,onLogout:c,darkMode:r}),i==="chatbot"&&e.jsx(Ie,{darkMode:r}),i==="profile"&&e.jsx(We,{darkMode:r,onLogout:c})]}):f==="home"?e.jsx(de,{darkMode:r,onToggleDarkMode:B}):e.jsx(le,{onAuth:A,mode:C,darkMode:r})}),p&&e.jsx(le,{onAuth:x=>{l(x),m(!1),t("journal")},darkMode:r,defaultMode:C}),e.jsxs("footer",{className:"app-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",marginTop:"2rem",color:r?"#a1a1aa":"#888",fontSize:"0.9rem",borderTop:`1px solid ${P}`,background:g,flexWrap:"wrap",transition:"background 0.3s, color 0.3s, border-color 0.3s"},children:[e.jsx("style",{children:`
          .footer-social-link {
            display: inline-flex;
            align-items: center;
            color: ${W};
            transition: color 0.2s;
          }
          .footer-social-link:hover {
            color: ${r?"#818cf8":"#3730a3"};
          }
          .footer-social-link svg {
            fill: currentColor;
            stroke: none;
          }
          .dark-toggle {
            background: ${r?"#18181b":"#e0e7ef"};
            border: 1px solid ${P};
            color: ${r?"#f3f4f6":"#222"};
            border-radius: 999px;
            padding: 6px 18px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            margin-left: 18px;
            transition: background 0.3s, color 0.3s, border-color 0.3s;
          }
          .dark-toggle:hover {
            background: ${r?"#23232a":"#c7d2fe"};
          }
        `}),e.jsxs("div",{className:"footer-logo",style:{display:"flex",alignItems:"center",gap:8},children:[e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:W,strokeWidth:"2",fill:r?"#23232a":"#fff"}),e.jsx("path",{d:"M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z",stroke:W,strokeWidth:"1.5",fill:r?"#18181b":"#f1f5f9"})]}),e.jsx("span",{style:{fontWeight:700,color:W,fontFamily:"'Poppins', sans-serif",fontSize:18,letterSpacing:"1px"},children:"SerenitySpace"})]}),e.jsxs("div",{className:"footer-content",style:{textAlign:"center",flex:1},children:["© ",new Date().getFullYear()," SerenitySpace.Inc. All rights reserved."]}),e.jsxs("div",{className:"footer-social",style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",title:"Instagram",className:"footer-social-link",children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",title:"Twitter",className:"footer-social-link",children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 512 512",children:e.jsx("path",{d:"M459.4 151.7c.32 4.54.32 9.1.32 13.66 0 138.72-105.58 298.56-298.56 298.56A296.32 296.32 0 0 1 0 408.09a209.1 209.1 0 0 0 24.42 1.28 209.09 209.09 0 0 0 129.29-44.56 104.52 104.52 0 0 1-97.52-72.54 132.07 132.07 0 0 0 19.8 1.6 110.2 110.2 0 0 0 27.45-3.6A104.48 104.48 0 0 1 21.8 188.1v-1.28a104.68 104.68 0 0 0 47.18 13.1A104.52 104.52 0 0 1 35.7 82.15a297.32 297.32 0 0 0 215.5 109.44 117.6 117.6 0 0 1-2.56-23.87A104.52 104.52 0 0 1 391.86 63.4a204.13 204.13 0 0 0 66.36-25.34 104.88 104.88 0 0 1-45.92 57.6A209.1 209.1 0 0 0 512 97.2a223.34 223.34 0 0 1-52.6 54.5Z"})})}),e.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",title:"Facebook",className:"footer-social-link",children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 320 512",children:e.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"})})})]})]})]})}ae.createRoot(document.getElementById("root")).render(e.jsx(ee.StrictMode,{children:e.jsx(Te,{})}));
