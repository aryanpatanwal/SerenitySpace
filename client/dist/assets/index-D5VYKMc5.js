import{r as l,a as kt,R as Te}from"./vendor-nf7bT_Uh.js";import{C as Ct,a as Et,L as $t,P as Nt,b as Pt,p as It,c as Lt,d as Bt,i as Tt,e as At}from"./charts-DEt2Rur7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var nt={exports:{}},je={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zt=l,Wt=Symbol.for("react.element"),Dt=Symbol.for("react.fragment"),Ot=Object.prototype.hasOwnProperty,Ft=zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_t={key:!0,ref:!0,__self:!0,__source:!0};function rt(e,t,r){var o,a={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)Ot.call(t,o)&&!_t.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:Wt,type:e,key:i,ref:s,props:a,_owner:Ft.current}}je.Fragment=Dt;je.jsx=rt;je.jsxs=rt;nt.exports=je;var n=nt.exports,Ae={},qe=kt;Ae.createRoot=qe.createRoot,Ae.hydrateRoot=qe.hydrateRoot;/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var De=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,ot=/^[\\/]{2}/;function Ht(e,t){return t+e.replace(/\\/g,"/")}var Me="popstate";function Ke(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Ut(e={}){function t(o,a){var u;let i=(u=a.state)==null?void 0:u.masked,{pathname:s,search:d,hash:c}=i||o.location;return ze("",{pathname:s,search:d,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default",i?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function r(o,a){return typeof a=="string"?a:de(a)}return Yt(t,r,null,e)}function P(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function q(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jt(){return Math.random().toString(36).substring(2,10)}function Ge(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ze(e,t,r=null,o,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?oe(t):t,state:r,key:t&&t.key||o||Jt(),mask:a}}function de({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function oe(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function Yt(e,t,r,o={}){let{window:a=document.defaultView,v5Compat:i=!1}=o,s=a.history,d="POP",c=null,u=h();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function h(){return(s.state||{idx:null}).idx}function f(){d="POP";let g=h(),x=g==null?null:g-u;u=g,c&&c({action:d,location:y.location,delta:x})}function p(g,x){d="PUSH";let S=Ke(g)?g:ze(y.location,g,x);u=h()+1;let w=Ge(S,u),E=y.createHref(S.mask||S);try{s.pushState(w,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(E)}i&&c&&c({action:d,location:y.location,delta:1})}function m(g,x){d="REPLACE";let S=Ke(g)?g:ze(y.location,g,x);u=h();let w=Ge(S,u),E=y.createHref(S.mask||S);s.replaceState(w,"",E),i&&c&&c({action:d,location:y.location,delta:0})}function v(g){return Vt(a,g)}let y={get action(){return d},get location(){return e(a,s)},listen(g){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Me,f),c=g,()=>{a.removeEventListener(Me,f),c=null}},createHref(g){return t(a,g)},createURL:v,encodeLocation(g){let x=v(g);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:m,go(g){return s.go(g)}};return y}function Vt(e,t,r=!1){let o="http://localhost";e&&(o=e.location.origin!=="null"?e.location.origin:e.location.href),P(o,"No window.location.(origin|href) available to create URL");let a=typeof t=="string"?t:de(t);return a=a.replace(/ $/,"%20"),!r&&ot.test(a)&&(a=o+a),new URL(a,o)}function at(e,t,r="/"){return qt(e,t,r,!1)}function qt(e,t,r,o,a){let i=typeof t=="string"?oe(t):t,s=Q(i.pathname||"/",r);if(s==null)return null;let d=Mt(e),c=null,u=an(s);for(let h=0;c==null&&h<d.length;++h)c=on(d[h],u,o);return c}function Mt(e){let t=it(e);return Kt(t),t}function it(e,t=[],r=[],o="",a=!1){let i=(s,d,c=a,u)=>{let h={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:d,route:s};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(o)&&c)return;P(h.relativePath.startsWith(o),`Absolute route path "${h.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(o.length)}let f=V([o,h.relativePath]),p=r.concat(h);s.children&&s.children.length>0&&(P(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),it(s.children,t,p,f,c)),!(s.path==null&&!s.index)&&t.push({path:f,score:nn(f,s.index),routesMeta:p.map((m,v)=>{let[y,g]=ct(m.relativePath,m.caseSensitive,v===p.length-1);return{...m,matcher:y,compiledParams:g}})})};return e.forEach((s,d)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,d);else for(let u of st(s.path))i(s,d,!0,u)}),t}function st(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return a?[i,""]:[i];let s=st(o.join("/")),d=[];return d.push(...s.map(c=>c===""?i:[i,c].join("/"))),a&&d.push(...s),d.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kt(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:rn(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var Gt=/^:[\w-]+$/,Xt=3,Zt=2,Qt=1,en=10,tn=-2,Xe=e=>e==="*";function nn(e,t){let r=e.split("/"),o=r.length;return r.some(Xe)&&(o+=tn),t&&(o+=Zt),r.filter(a=>!Xe(a)).reduce((a,i)=>a+(Gt.test(i)?Xt:i===""?Qt:en),o)}function rn(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function on(e,t,r=!1){let{routesMeta:o}=e,a={},i="/",s=[];for(let d=0;d<o.length;++d){let c=o[d],u=d===o.length-1,h=i==="/"?t:t.slice(i.length)||"/",f={path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p=c.matcher&&c.compiledParams?lt(f,h,c.matcher,c.compiledParams):ve(f,h),m=c.route;if(!p&&u&&r&&!o[o.length-1].route.index&&(p=ve({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!p)return null;Object.assign(a,p.params),s.push({params:a,pathname:V([i,p.pathname]),pathnameBase:cn(V([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=V([i,p.pathnameBase]))}return s}function ve(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=ct(e.path,e.caseSensitive,e.end);return lt(e,t,r,o)}function lt(e,t,r,o){let a=t.match(r);if(!a)return null;let i=a[0],s=i.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:o.reduce((u,{paramName:h,isOptional:f},p)=>{if(h==="*"){let v=d[p]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const m=d[p];return f&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function ct(e,t=!1,r=!0){q(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,d,c,u,h)=>{if(o.push({paramName:d,isOptional:c!=null}),c){let f=h.charAt(u+s.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function an(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return q(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Q(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function sn(e,t="/"){let{pathname:r,search:o="",hash:a=""}=typeof e=="string"?oe(e):e,i;return r?(r=dt(r),r.startsWith("/")?i=Ze(r.substring(1),"/"):i=Ze(r,t)):i=t,{pathname:i,search:dn(o),hash:un(a)}}function Ze(e,t){let r=we(t).split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ie(e,t,r,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ln(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Oe(e){let t=ln(e);return t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase)}function Se(e,t,r,o=!1){let a;typeof e=="string"?a=oe(e):(a={...e},P(!a.pathname||!a.pathname.includes("?"),Ie("?","pathname","search",a)),P(!a.pathname||!a.pathname.includes("#"),Ie("#","pathname","hash",a)),P(!a.search||!a.search.includes("#"),Ie("#","search","hash",a)));let i=e===""||a.pathname==="",s=i?"/":a.pathname,d;if(s==null)d=r;else{let f=t.length-1;if(!o&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;a.pathname=p.join("/")}d=f>=0?t[f]:"/"}let c=sn(a,d),u=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}var dt=e=>e.replace(/[\\/]{2,}/g,"/"),V=e=>dt(e.join("/")),we=e=>e.replace(/\/+$/,""),cn=e=>we(e).replace(/^\/*/,"/"),dn=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,un=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,hn=class{constructor(e,t,r,o=!1){this.status=e,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function fn(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function pn(e){let t=e.map(r=>r.route.path).filter(Boolean);return V(t)||"/"}var ut=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ht(e,t){let r=e;if(typeof r!="string"||!De.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,a=!1;if(ut)try{let i=new URL(window.location.href),s=ot.test(r)?new URL(Ht(r,i.protocol)):new URL(r),d=Q(s.pathname,t);s.origin===i.origin&&d!=null?r=d+s.search+s.hash:a=!0}catch{q(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:a,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ft=["POST","PUT","PATCH","DELETE"];new Set(ft);var mn=["GET",...ft];new Set(mn);var gn=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function xn(e){try{return gn.includes(new URL(e).protocol)}catch{return!1}}var ae=l.createContext(null);ae.displayName="DataRouter";var Re=l.createContext(null);Re.displayName="DataRouterState";var pt=l.createContext(!1);function bn(){return l.useContext(pt)}var mt=l.createContext({isTransitioning:!1});mt.displayName="ViewTransition";var yn=l.createContext(new Map);yn.displayName="Fetchers";var vn=l.createContext(null);vn.displayName="Await";var U=l.createContext(null);U.displayName="Navigation";var ue=l.createContext(null);ue.displayName="Location";var X=l.createContext({outlet:null,matches:[],isDataRoute:!1});X.displayName="Route";var Fe=l.createContext(null);Fe.displayName="RouteError";var gt="REACT_ROUTER_ERROR",wn="REDIRECT",jn="ROUTE_ERROR_RESPONSE";function Sn(e){if(e.startsWith(`${gt}:${wn}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Rn(e){if(e.startsWith(`${gt}:${jn}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new hn(t.status,t.statusText,t.data)}catch{}}function kn(e,{relative:t}={}){P(ie(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=l.useContext(U),{hash:a,pathname:i,search:s}=he(e,{relative:t}),d=i;return r!=="/"&&(d=i==="/"?r:V([r,i])),o.createHref({pathname:d,search:s,hash:a})}function ie(){return l.useContext(ue)!=null}function M(){return P(ie(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(ue).location}var xt="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bt(e){l.useContext(U).static||l.useLayoutEffect(e)}function _e(){let{isDataRoute:e}=l.useContext(X);return e?Dn():Cn()}function Cn(){P(ie(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(ae),{basename:t,navigator:r}=l.useContext(U),{matches:o}=l.useContext(X),{pathname:a}=M(),i=JSON.stringify(Oe(o)),s=l.useRef(!1);return bt(()=>{s.current=!0}),l.useCallback((c,u={})=>{if(q(s.current,xt),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=Se(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:V([t,h.pathname])),(u.replace?r.replace:r.push)(h,u.state,u)},[t,r,i,a,e])}l.createContext(null);function he(e,{relative:t}={}){let{matches:r}=l.useContext(X),{pathname:o}=M(),a=JSON.stringify(Oe(r));return l.useMemo(()=>Se(e,JSON.parse(a),o,t==="path"),[e,a,o,t])}function En(e,t){return yt(e,t)}function yt(e,t,r){var g;P(ie(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=l.useContext(U),{matches:a}=l.useContext(X),i=a[a.length-1],s=i?i.params:{},d=i?i.pathname:"/",c=i?i.pathnameBase:"/",u=i&&i.route;{let x=u&&u.path||"";wt(d,!u||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let h=M(),f;if(t){let x=typeof t=="string"?oe(t):t;P(c==="/"||((g=x.pathname)==null?void 0:g.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${x.pathname}" was given in the \`location\` prop.`),f=x}else f=h;let p=f.pathname||"/",m=p;if(c!=="/"){let x=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=r&&r.state.matches.length?r.state.matches.map(x=>Object.assign(x,{route:r.manifest[x.route.id]||x.route})):at(e,{pathname:m});q(u||v!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),q(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Ln(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:V([c,o.encodeLocation?o.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:V([c,o.encodeLocation?o.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),a,r);return t&&y?l.createElement(ue.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},y):y}function $n(){let e=Wn(),t=fn(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},i={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=l.createElement(l.Fragment,null,l.createElement("p",null,"💿 Hey developer 👋"),l.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",l.createElement("code",{style:i},"ErrorBoundary")," or"," ",l.createElement("code",{style:i},"errorElement")," prop on your route.")),l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),r?l.createElement("pre",{style:a},r):null,s)}var Nn=l.createElement($n,null),vt=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=Rn(e.digest);r&&(e=r)}let t=e!==void 0?l.createElement(X.Provider,{value:this.props.routeContext},l.createElement(Fe.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?l.createElement(Pn,{error:e},t):t}};vt.contextType=pt;var Le=new WeakMap;function Pn({children:e,error:t}){let{basename:r}=l.useContext(U);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let o=Sn(t.digest);if(o){let a=Le.get(t);if(a)throw a;let i=ht(o.location,r),s=i.absoluteURL||i.to;if(xn(s))throw new Error("Invalid redirect location");if(ut&&!Le.get(t))if(i.isExternal||o.reloadDocument)window.location.href=s;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:o.replace}));throw Le.set(t,d),d}return l.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s}`})}}return e}function In({routeContext:e,match:t,children:r}){let o=l.useContext(ae);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(X.Provider,{value:e},r)}function Ln(e,t=[],r){let o=r==null?void 0:r.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(t.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let a=e,i=o==null?void 0:o.errors;if(i!=null){let h=a.findIndex(f=>f.route.id&&(i==null?void 0:i[f.route.id])!==void 0);P(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let s=!1,d=-1;if(r&&o){s=o.renderFallback;for(let h=0;h<a.length;h++){let f=a[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:p,errors:m}=o,v=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!m||m[f.route.id]===void 0);if(f.route.lazy||v){r.isStatic&&(s=!0),d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}}let c=r==null?void 0:r.onError,u=o&&c?(h,f)=>{var p,m;c(h,{location:o.location,params:((m=(p=o.matches)==null?void 0:p[0])==null?void 0:m.params)??{},pattern:pn(o.matches),errorInfo:f})}:void 0;return a.reduceRight((h,f,p)=>{let m,v=!1,y=null,g=null;o&&(m=i&&f.route.id?i[f.route.id]:void 0,y=f.route.errorElement||Nn,s&&(d<0&&p===0?(wt("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,g=null):d===p&&(v=!0,g=f.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,p+1)),S=()=>{let w;return m?w=y:v?w=g:f.route.Component?w=l.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=h,l.createElement(In,{match:f,routeContext:{outlet:h,matches:x,isDataRoute:o!=null},children:w})};return o&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?l.createElement(vt,{location:o.location,revalidation:o.revalidation,component:y,error:m,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:u}):S()},null)}function He(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bn(e){let t=l.useContext(ae);return P(t,He(e)),t}function Tn(e){let t=l.useContext(Re);return P(t,He(e)),t}function An(e){let t=l.useContext(X);return P(t,He(e)),t}function Ue(e){let t=An(e),r=t.matches[t.matches.length-1];return P(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function zn(){return Ue("useRouteId")}function Wn(){var o;let e=l.useContext(Fe),t=Tn("useRouteError"),r=Ue("useRouteError");return e!==void 0?e:(o=t.errors)==null?void 0:o[r]}function Dn(){let{router:e}=Bn("useNavigate"),t=Ue("useNavigate"),r=l.useRef(!1);return bt(()=>{r.current=!0}),l.useCallback(async(a,i={})=>{q(r.current,xt),r.current&&(typeof a=="number"?await e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var Qe={};function wt(e,t,r){!t&&!Qe[e]&&(Qe[e]=!0,q(!1,r))}l.memo(On);function On({routes:e,manifest:t,future:r,state:o,isStatic:a,onError:i}){return yt(e,void 0,{manifest:t,state:o,isStatic:a,onError:i})}function re({to:e,replace:t,state:r,relative:o}){P(ie(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=l.useContext(U);q(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=l.useContext(X),{pathname:s}=M(),d=_e(),c=Se(e,Oe(i),s,o==="path"),u=JSON.stringify(c);return l.useEffect(()=>{d(JSON.parse(u),{replace:t,state:r,relative:o})},[d,u,o,t,r]),null}function ee(e){P(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fn({basename:e="/",children:t=null,location:r,navigationType:o="POP",navigator:a,static:i=!1,useTransitions:s}){P(!ie(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),c=l.useMemo(()=>({basename:d,navigator:a,static:i,useTransitions:s,future:{}}),[d,a,i,s]);typeof r=="string"&&(r=oe(r));let{pathname:u="/",search:h="",hash:f="",state:p=null,key:m="default",mask:v}=r,y=l.useMemo(()=>{let g=Q(u,d);return g==null?null:{location:{pathname:g,search:h,hash:f,state:p,key:m,mask:v},navigationType:o}},[d,u,h,f,p,m,o,v]);return q(y!=null,`<Router basename="${d}"> is not able to match the URL "${u}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:l.createElement(U.Provider,{value:c},l.createElement(ue.Provider,{children:t,value:y}))}function _n({children:e,location:t}){return En(We(e),t)}function We(e,t=[]){let r=[];return l.Children.forEach(e,(o,a)=>{if(!l.isValidElement(o))return;let i=[...t,a];if(o.type===l.Fragment){r.push.apply(r,We(o.props.children,i));return}P(o.type===ee,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),P(!o.props.index||!o.props.children,"An index route cannot have child routes.");let s={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(s.children=We(o.props.children,i)),r.push(s)}),r}var be="get",ye="application/x-www-form-urlencoded";function ke(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Hn(e){return ke(e)&&e.tagName.toLowerCase()==="button"}function Un(e){return ke(e)&&e.tagName.toLowerCase()==="form"}function Jn(e){return ke(e)&&e.tagName.toLowerCase()==="input"}function Yn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vn(e,t){return e.button===0&&(!t||t==="_self")&&!Yn(e)}var ge=null;function qn(){if(ge===null)try{new FormData(document.createElement("form"),0),ge=!1}catch{ge=!0}return ge}var Mn=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Be(e){return e!=null&&!Mn.has(e)?(q(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ye}"`),null):e}function Kn(e,t){let r,o,a,i,s;if(Un(e)){let d=e.getAttribute("action");o=d?Q(d,t):null,r=e.getAttribute("method")||be,a=Be(e.getAttribute("enctype"))||ye,i=new FormData(e)}else if(Hn(e)||Jn(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||d.getAttribute("action");if(o=c?Q(c,t):null,r=e.getAttribute("formmethod")||d.getAttribute("method")||be,a=Be(e.getAttribute("formenctype"))||Be(d.getAttribute("enctype"))||ye,i=new FormData(d,e),!qn()){let{name:u,type:h,value:f}=e;if(h==="image"){let p=u?`${u}.`:"";i.append(`${p}x`,"0"),i.append(`${p}y`,"0")}else u&&i.append(u,f)}}else{if(ke(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=be,o=null,a=ye,s=e}return i&&a==="text/plain"&&(s=i,i=void 0),{action:o,method:r.toLowerCase(),encType:a,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jt(e,t,r,o){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${o}`:a.pathname=`${a.pathname}.${o}`:a.pathname==="/"?a.pathname=`_root.${o}`:t&&Q(a.pathname,t)==="/"?a.pathname=`${we(t)}/_root.${o}`:a.pathname=`${we(a.pathname)}.${o}`,a}async function Gn(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xn(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Zn(e,t,r){let o=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let s=await Gn(i,r);return s.links?s.links():[]}return[]}));return nr(o.flat(1).filter(Xn).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function et(e,t,r,o,a,i){let s=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,d=(c,u)=>{var h;return r[u].pathname!==c.pathname||((h=r[u].route.path)==null?void 0:h.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,u)=>s(c,u)||d(c,u)):i==="data"?t.filter((c,u)=>{var f;let h=o.routes[c.route.id];if(!h||!h.hasLoader)return!1;if(s(c,u)||d(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Qn(e,t,{includeHydrateFallback:r}={}){return er(e.map(o=>{let a=t.routes[o.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function er(e){return[...new Set(e)]}function tr(e){let t={},r=Object.keys(e).sort();for(let o of r)t[o]=e[o];return t}function nr(e,t){let r=new Set;return new Set(t),e.reduce((o,a)=>{let i=JSON.stringify(tr(a));return r.has(i)||(r.add(i),o.push({key:i,link:a})),o},[])}function Ye(){let e=l.useContext(ae);return Je(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function rr(){let e=l.useContext(Re);return Je(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ve=l.createContext(void 0);Ve.displayName="FrameworkContext";function Ce(){let e=l.useContext(Ve);return Je(e,"You must render this element inside a <HydratedRouter> element"),e}function or(e,t){let r=l.useContext(Ve),[o,a]=l.useState(!1),[i,s]=l.useState(!1),{onFocus:d,onBlur:c,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=t,p=l.useRef(null);l.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let y=x=>{x.forEach(S=>{s(S.isIntersecting)})},g=new IntersectionObserver(y,{threshold:.5});return p.current&&g.observe(p.current),()=>{g.disconnect()}}},[e]),l.useEffect(()=>{if(o){let y=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(y)}}},[o]);let m=()=>{a(!0)},v=()=>{a(!1),s(!1)};return r?e!=="intent"?[i,p,{}]:[i,p,{onFocus:ce(d,m),onBlur:ce(c,v),onMouseEnter:ce(u,m),onMouseLeave:ce(h,v),onTouchStart:ce(f,m)}]:[!1,p,{}]}function ce(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function ar({page:e,...t}){let r=bn(),{nonce:o}=Ce(),{router:a}=Ye(),i=l.useMemo(()=>at(a.routes,e,a.basename),[a.routes,e,a.basename]);return i?(t.nonce==null&&o&&(t={...t,nonce:o}),r?l.createElement(sr,{page:e,matches:i,...t}):l.createElement(lr,{page:e,matches:i,...t})):null}function ir(e){let{manifest:t,routeModules:r}=Ce(),[o,a]=l.useState([]);return l.useEffect(()=>{let i=!1;return Zn(e,t,r).then(s=>{i||a(s)}),()=>{i=!0}},[e,t,r]),o}function sr({page:e,matches:t,...r}){let o=M(),{future:a}=Ce(),{basename:i}=Ye(),s=l.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let d=jt(e,i,a.v8_trailingSlashAwareDataRequests,"rsc"),c=!1,u=[];for(let h of t)typeof h.route.shouldRevalidate=="function"?c=!0:u.push(h.route.id);return c&&u.length>0&&d.searchParams.set("_routes",u.join(",")),[d.pathname+d.search]},[i,a.v8_trailingSlashAwareDataRequests,e,o,t]);return l.createElement(l.Fragment,null,s.map(d=>l.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...r})))}function lr({page:e,matches:t,...r}){let o=M(),{future:a,manifest:i,routeModules:s}=Ce(),{basename:d}=Ye(),{loaderData:c,matches:u}=rr(),h=l.useMemo(()=>et(e,t,u,i,o,"data"),[e,t,u,i,o]),f=l.useMemo(()=>et(e,t,u,i,o,"assets"),[e,t,u,i,o]),p=l.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let y=new Set,g=!1;if(t.forEach(S=>{var E;let w=i.routes[S.route.id];!w||!w.hasLoader||(!h.some(R=>R.route.id===S.route.id)&&S.route.id in c&&((E=s[S.route.id])!=null&&E.shouldRevalidate)||w.hasClientLoader?g=!0:y.add(S.route.id))}),y.size===0)return[];let x=jt(e,d,a.v8_trailingSlashAwareDataRequests,"data");return g&&y.size>0&&x.searchParams.set("_routes",t.filter(S=>y.has(S.route.id)).map(S=>S.route.id).join(",")),[x.pathname+x.search]},[d,a.v8_trailingSlashAwareDataRequests,c,o,i,h,t,e,s]),m=l.useMemo(()=>Qn(f,i),[f,i]),v=ir(f);return l.createElement(l.Fragment,null,p.map(y=>l.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...r})),m.map(y=>l.createElement("link",{key:y,rel:"modulepreload",href:y,...r})),v.map(({key:y,link:g})=>l.createElement("link",{key:y,nonce:r.nonce,...g,crossOrigin:g.crossOrigin??r.crossOrigin})))}function cr(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var dr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dr&&(window.__reactRouterVersion="7.18.2")}catch{}function ur({basename:e,children:t,useTransitions:r,window:o}){let a=l.useRef();a.current==null&&(a.current=Ut({window:o,v5Compat:!0}));let i=a.current,[s,d]=l.useState({action:i.action,location:i.location}),c=l.useCallback(u=>{r===!1?d(u):l.startTransition(()=>d(u))},[r]);return l.useLayoutEffect(()=>i.listen(c),[i,c]),l.createElement(Fn,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:i,useTransitions:r})}var H=l.forwardRef(function({onClick:t,discover:r="render",prefetch:o="none",relative:a,reloadDocument:i,replace:s,mask:d,state:c,target:u,to:h,preventScrollReset:f,viewTransition:p,defaultShouldRevalidate:m,...v},y){let{basename:g,navigator:x,useTransitions:S}=l.useContext(U),w=typeof h=="string"&&De.test(h),E=ht(h,g);h=E.to;let R=kn(h,{relative:a}),L=M(),T=null;if(d){let B=Se(d,[],L.mask?L.mask.pathname:"/",!0);g!=="/"&&(B.pathname=B.pathname==="/"?g:V([g,B.pathname])),T=x.createHref(B)}let[C,$,N]=or(o,v),O=mr(h,{replace:s,mask:d,state:c,target:u,preventScrollReset:f,relative:a,viewTransition:p,defaultShouldRevalidate:m,useTransitions:S});function F(B){t&&t(B),B.defaultPrevented||O(B)}let _=!(E.isExternal||i),D=l.createElement("a",{...v,...N,href:(_?T:void 0)||E.absoluteURL||R,onClick:_?F:t,ref:cr(y,$),target:u,"data-discover":!w&&r==="render"?"true":void 0});return C&&!w?l.createElement(l.Fragment,null,D,l.createElement(ar,{page:R})):D});H.displayName="Link";var hr=l.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:o="",end:a=!1,style:i,to:s,viewTransition:d,children:c,...u},h){let f=he(s,{relative:u.relative}),p=M(),m=l.useContext(Re),{navigator:v,basename:y}=l.useContext(U),g=m!=null&&vr(f)&&d===!0,x=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,S=p.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(S=S.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&y&&(w=Q(w,y)||w);const E=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let R=S===x||!a&&S.startsWith(x)&&S.charAt(E)==="/",L=w!=null&&(w===x||!a&&w.startsWith(x)&&w.charAt(x.length)==="/"),T={isActive:R,isPending:L,isTransitioning:g},C=R?t:void 0,$;typeof o=="function"?$=o(T):$=[o,R?"active":null,L?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let N=typeof i=="function"?i(T):i;return l.createElement(H,{...u,"aria-current":C,className:$,ref:h,style:N,to:s,viewTransition:d},typeof c=="function"?c(T):c)});hr.displayName="NavLink";var fr=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:o,replace:a,state:i,method:s=be,action:d,onSubmit:c,relative:u,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:p,...m},v)=>{let{useTransitions:y}=l.useContext(U),g=br(),x=yr(d,{relative:u}),S=s.toLowerCase()==="get"?"get":"post",w=typeof d=="string"&&De.test(d),E=R=>{if(c&&c(R),R.defaultPrevented)return;R.preventDefault();let L=R.nativeEvent.submitter,T=(L==null?void 0:L.getAttribute("formmethod"))||s,C=()=>g(L||R.currentTarget,{fetcherKey:t,method:T,navigate:r,replace:a,state:i,relative:u,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:p});y&&r!==!1?l.startTransition(()=>C()):C()};return l.createElement("form",{ref:v,method:S,action:x,onSubmit:o?c:E,...m,"data-discover":!w&&e==="render"?"true":void 0})});fr.displayName="Form";function pr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function St(e){let t=l.useContext(ae);return P(t,pr(e)),t}function mr(e,{target:t,replace:r,mask:o,state:a,preventScrollReset:i,relative:s,viewTransition:d,defaultShouldRevalidate:c,useTransitions:u}={}){let h=_e(),f=M(),p=he(e,{relative:s});return l.useCallback(m=>{if(Vn(m,t)){m.preventDefault();let v=r!==void 0?r:de(f)===de(p),y=()=>h(e,{replace:v,mask:o,state:a,preventScrollReset:i,relative:s,viewTransition:d,defaultShouldRevalidate:c});u?l.startTransition(()=>y()):y()}},[f,h,p,r,o,a,t,e,i,s,d,c,u])}var gr=0,xr=()=>`__${String(++gr)}__`;function br(){let{router:e}=St("useSubmit"),{basename:t}=l.useContext(U),r=zn(),o=e.fetch,a=e.navigate;return l.useCallback(async(i,s={})=>{let{action:d,method:c,encType:u,formData:h,body:f}=Kn(i,t);if(s.navigate===!1){let p=s.fetcherKey||xr();await o(p,r,s.action||d,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:f,formMethod:s.method||c,formEncType:s.encType||u,flushSync:s.flushSync})}else await a(s.action||d,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:f,formMethod:s.method||c,formEncType:s.encType||u,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[o,a,t,r])}function yr(e,{relative:t}={}){let{basename:r}=l.useContext(U),o=l.useContext(X);P(o,"useFormAction must be used inside a RouteContext");let[a]=o.matches.slice(-1),i={...he(e||".",{relative:t})},s=M();if(e==null){i.search=s.search;let d=new URLSearchParams(i.search),c=d.getAll("index");if(c.some(h=>h==="")){d.delete("index"),c.filter(f=>f).forEach(f=>d.append("index",f));let h=d.toString();i.search=h?`?${h}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:V([r,i.pathname])),de(i)}function vr(e,{relative:t}={}){let r=l.useContext(mt);P(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=St("useViewTransitionState"),a=he(e,{relative:t});if(!r.isTransitioning)return!1;let i=Q(r.currentLocation.pathname,o)||r.currentLocation.pathname,s=Q(r.nextLocation.pathname,o)||r.nextLocation.pathname;return ve(a.pathname,s)!=null||ve(a.pathname,i)!=null}const xe="http://localhost:5000".replace(/\/+$/,""),G={AUTH:`${xe}/api/auth`,JOURNALS:`${xe}/api/journals`,CHATBOT:`${xe}/api/chatbot`,PROFILE:`${xe}/api/profile`};function tt({onAuth:e,darkMode:t,mode:r}){const o=_e(),[a,i]=l.useState({username:"",email:"",password:""}),[s,d]=l.useState(""),c=r!=="signup",u=L=>i({...a,[L.target.name]:L.target.value}),h=async L=>{L.preventDefault(),d("");try{const T=c?"/login":"/register",C=c?{email:a.email,password:a.password}:a,$=await fetch(G.AUTH+T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}),N=await $.json();if(!$.ok)throw new Error(N.message||"Error");c?(localStorage.setItem("token",N.token),e(N.user)):o("/login")}catch(T){d(T.message)}},f=t?"#18181b":"linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",p=t?"#23232a":"#fff",m=t?"#27272a":"#e0e0e0",v=t?"#f3f4f6":"#222",y=t?"#18181b":"#fff",g=t?"#27272a":"#d1d5db",x=t?"#f3f4f6":"#222",S="#6366f1",w="#fff",E=t?"#23232a":"#f1f5f9",R=t?"#a5b4fc":"#6366f1";return n.jsxs("div",{style:{minHeight:"100vh",background:f,padding:0},children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"auth-container",style:{maxWidth:400,margin:"4rem auto",padding:32,borderRadius:16,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",background:p,border:`1px solid ${m}`},children:[n.jsx("h2",{style:{textAlign:"center",marginBottom:24,fontWeight:700,color:v},children:c?"Login":"Register"}),n.jsxs("form",{onSubmit:h,children:[!c&&n.jsx("input",{name:"username",placeholder:"Username",value:a.username,onChange:u,required:!0,style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${g}`,fontSize:16,background:y,color:x}}),n.jsx("input",{name:"email",type:"email",placeholder:"Email",value:a.email,onChange:u,required:!0,style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${g}`,fontSize:16,background:y,color:x}}),n.jsx("input",{name:"password",type:"password",placeholder:"Password",value:a.password,onChange:u,required:!0,style:{width:"100%",marginBottom:16,padding:10,borderRadius:8,border:`1px solid ${g}`,fontSize:16,background:y,color:x}}),n.jsx("button",{type:"submit",style:{width:"100%",marginBottom:12,padding:12,borderRadius:8,background:S,color:w,fontWeight:600,fontSize:16,border:"none",boxShadow:"0 2px 8px rgba(99,102,241,0.08)"},children:c?"Login":"Register"})]}),n.jsx("button",{type:"button",onClick:()=>o(c?"/signup":"/login"),style:{width:"100%",padding:10,borderRadius:8,background:E,color:R,fontWeight:600,border:"none",fontSize:15,marginBottom:8},children:c?"Need an account? Register":"Already have an account? Login"}),s&&n.jsx("div",{style:{color:"#ef4444",marginTop:8,textAlign:"center",fontWeight:500},children:s})]})]})}Ct.register(Et,$t,Nt,Pt,It,Lt,Bt,Tt);function wr({user:e,onLogout:t,darkMode:r}){const[o,a]=l.useState([]),[i,s]=l.useState(""),[d,c]=l.useState(""),[u,h]=l.useState(null),[f,p]=l.useState(""),[m,v]=l.useState(!1),[y,g]=l.useState("dashboard"),[x,S]=l.useState(null),[w,E]=l.useState(localStorage.getItem("aiConsent")==="true"),[R,L]=l.useState(!w),T=async()=>{try{const b=await fetch(G.JOURNALS,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),k=await b.json();if(!b.ok)throw new Error(k.message||"Error");a(k),w&&$(k)}catch(b){c(b.message)}},C=b=>{E(b),localStorage.setItem("aiConsent",b.toString()),L(!1),b&&$(o)},$=b=>{if(!w||b.length===0){S({type:"welcome",title:"Welcome to Your Mental Health Journey",content:"Start writing your first journal entry to track your emotional patterns.",exercise:"Try a 5-minute gratitude practice: Write down 3 things you're thankful for today."});return}const z=b.slice(0,5).reduce((K,le)=>(K[le.sentiment]=(K[le.sentiment]||0)+1,K),{}),W=Object.keys(z).reduce((K,le)=>z[K]>z[le]?K:le),Y={positive:{title:"You're on a Positive Streak!",content:"Your recent entries show a positive outlook. Keep up the great work in maintaining this mindset.",exercise:"Practice positive reinforcement: Write down one thing you did well today and celebrate it."},negative:{title:"Supporting You Through Challenges",content:"I notice you've been experiencing some difficult emotions. Remember, it's okay to not be okay.",exercise:"Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8. Repeat 4 times."},mixed:{title:"Navigating Life's Ups and Downs",content:"You're experiencing a mix of emotions, which is completely normal. This shows emotional awareness.",exercise:"Practice emotional labeling: Name 3 emotions you're feeling right now without judgment."},neutral:{title:"Finding Your Balance",content:"You're in a stable emotional state. This is a great foundation for growth and self-reflection.",exercise:"Try mindful observation: Spend 5 minutes noticing your surroundings with all your senses."}};S(Y[W]||Y.neutral)};l.useEffect(()=>{T()},[]);const N=async b=>{b.preventDefault(),c(""),v(!0);try{const k=await fetch(G.JOURNALS,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({content:i,aiAnalysis:w})}),z=await k.json();if(!k.ok)throw new Error(z.message||"Error");a([z,...o]),s(""),w&&$([z,...o])}catch(k){c(k.message)}finally{v(!1)}},O=async b=>{if(window.confirm("Delete this journal entry?")){c("");try{if(!(await fetch(`${G.JOURNALS}/${b}`,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}})).ok)throw new Error("Failed to delete");const z=o.filter(W=>W._id!==b);a(z),w&&$(z)}catch(k){c(k.message)}}},F=(b,k)=>{h(b),p(k)},_=async b=>{c(""),v(!0);try{const k=await fetch(`${G.JOURNALS}/${b}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({content:f,aiAnalysis:w})}),z=await k.json();if(!k.ok)throw new Error(z.message||"Error");const W=o.map(Y=>Y._id===b?z:Y);a(W),h(null),p(""),w&&$(W)}catch(k){c(k.message)}finally{v(!1)}},D=b=>{switch(b){case"positive":return"#10b981";case"negative":return"#ef4444";case"mixed":return"#f59e0b";default:return"#6b7280"}},B=b=>{switch(b){case"positive":return"😊";case"negative":return"😔";case"mixed":return"😐";default:return"😐"}},Z=b=>{switch(b){case"positive":return 3;case"mixed":return 2;case"neutral":return 1;case"negative":return 0;default:return 1}},ne=()=>{const b=o.filter(W=>{const Y=new Date(W.date||W.createdAt),K=new Date;return K.setDate(K.getDate()-7),Y>=K}).sort((W,Y)=>new Date(W.date||W.createdAt)-new Date(Y.date||Y.createdAt)),k=b.map(W=>new Date(W.date||W.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric"})),z=b.map(W=>Z(W.sentiment));return{labels:k,datasets:[{label:"Mood Trend",data:z,borderColor:"#6366f1",backgroundColor:"rgba(99, 102, 241, 0.1)",tension:.4,fill:!0}]}},te={responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:"Your Mood Over the Last 7 Days",color:r?"#f3f4f6":"#222",font:{size:16,weight:"600"}}},scales:{y:{beginAtZero:!0,max:3,ticks:{stepSize:1,callback:function(b){return["Negative","Neutral","Mixed","Positive"][b]||""},color:r?"#a1a1aa":"#6b7280"},grid:{color:r?"#27272a":"#e5e7eb"}},x:{ticks:{color:r?"#a1a1aa":"#6b7280"},grid:{color:r?"#27272a":"#e5e7eb"}}}},Ee=r?"#18181b":"#f8fafc",A=r?"#23232a":"#fff",j=r?"#27272a":"#e0e0e0",I=r?"#f3f4f6":"#222",J=r?"#a1a1aa":"#888",$e=r?"#18181b":"#fff",Ne=r?"#27272a":"#d1d5db",Pe=r?"#f3f4f6":"#222",fe="#6366f1",pe="#fff",se=r?"#23232a":"#f1f5f9",me=r?"#a5b4fc":"#6366f1",Rt="#ef4444";return n.jsxs("div",{style:{minHeight:"100vh",background:Ee,color:I,padding:0,animation:"fadeIn 0.7s"},children:[n.jsx("style",{children:`
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
          background: ${r?"#1f2937":"#f3f4f6"}; 
          border-left: 4px solid #6366f1; 
          padding: 12px; 
          border-radius: 8px; 
          margin-top: 12px; 
        }
        .tab-btn { 
          padding: 12px 24px; 
          border: none; 
          background: transparent; 
          color: ${J}; 
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
          background: ${r?"#1f2937":"#f3f4f6"};
          border-left: 4px solid #6366f1;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .chart-container {
          background: ${A};
          border: 1px solid ${j};
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
          background: ${A};
          border-radius: 12px;
          padding: 24px;
          max-width: 500px;
          margin: 20px;
          border: 1px solid ${j};
        }
        .disclaimer {
          background: ${r?"#1f2937":"#fef3c7"};
          border: 1px solid ${r?"#374151":"#f59e0b"};
          border-radius: 8px;
          padding: 12px;
          margin: 12px 0;
          font-size: 12px;
          color: ${r?"#d1d5db":"#92400e"};
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
      `}),R&&n.jsx("div",{className:"consent-modal",children:n.jsxs("div",{className:"consent-content",children:[n.jsx("h3",{style:{color:I,marginBottom:16,fontSize:18,fontWeight:600},children:"AI Analysis Consent"}),n.jsx("p",{style:{color:I,marginBottom:16,lineHeight:1.6},children:"To provide you with personalized insights and mood tracking, we can analyze your journal entries using AI. This helps us understand your emotional patterns and suggest relevant exercises."}),n.jsxs("div",{className:"disclaimer",children:[n.jsx("strong",{children:"Important:"})," AI-generated suggestions are for general wellness support only and do not constitute medical advice. Always consult with qualified healthcare professionals for medical concerns."]}),n.jsx("p",{style:{color:I,marginBottom:20,lineHeight:1.6},children:"Your privacy is important. AI analysis is optional and you can change this setting anytime."}),n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx("button",{onClick:()=>C(!0),style:{padding:"12px 24px",borderRadius:8,background:fe,color:pe,fontWeight:600,border:"none",fontSize:16,cursor:"pointer"},children:"Enable AI Analysis"}),n.jsx("button",{onClick:()=>C(!1),style:{padding:"12px 24px",borderRadius:8,background:se,color:me,fontWeight:600,border:"none",fontSize:16,cursor:"pointer"},children:"Skip for Now"})]})]})}),n.jsxs("div",{className:"journal-container",style:{maxWidth:1200,margin:"2rem auto",padding:24},children:[n.jsxs("div",{className:"journal-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[n.jsxs("h2",{style:{fontWeight:700,color:I},children:["Welcome, ",e.username,"!"]}),n.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:n.jsx("button",{onClick:()=>L(!0),style:{background:se,color:me,fontWeight:600,border:"none",fontSize:14,padding:"8px 16px",borderRadius:8,cursor:"pointer"},children:w?"AI: Enabled":"AI: Disabled"})})]}),n.jsxs("div",{style:{display:"flex",gap:0,marginBottom:24,borderBottom:`1px solid ${j}`},children:[n.jsx("button",{className:`tab-btn ${y==="dashboard"?"active":""}`,onClick:()=>g("dashboard"),children:"Dashboard"}),n.jsx("button",{className:`tab-btn ${y==="history"?"active":""}`,onClick:()=>g("history"),children:"Journal History"})]}),y==="dashboard"?n.jsxs("div",{children:[x&&n.jsxs("div",{className:"insight-card",children:[n.jsx("h3",{style:{color:"#6366f1",marginBottom:12,fontSize:18,fontWeight:600},children:x.title}),n.jsx("p",{style:{color:I,marginBottom:16,lineHeight:1.6},children:x.content}),n.jsxs("div",{style:{background:A,padding:16,borderRadius:8,border:`1px solid ${j}`},children:[n.jsx("div",{style:{fontSize:14,color:"#6366f1",fontWeight:600,marginBottom:8},children:"Try This Exercise:"}),n.jsx("div",{style:{color:I,lineHeight:1.5},children:x.exercise})]}),w&&n.jsxs("div",{className:"disclaimer",children:[n.jsx("strong",{children:"AI-generated suggestions, not medical advice."})," These insights are based on your journal entries and are meant for general wellness support only."]})]}),o.length>0&&w&&n.jsxs("div",{className:"chart-container",children:[n.jsx(At,{data:ne(),options:te}),n.jsxs("div",{className:"disclaimer",style:{marginTop:16},children:[n.jsx("strong",{children:"AI-generated mood analysis, not medical advice."})," This chart shows emotional patterns based on AI analysis of your journal entries."]})]}),n.jsxs("div",{style:{background:A,border:`1px solid ${j}`,borderRadius:12,padding:20,marginBottom:24},children:[n.jsx("h3",{style:{color:I,marginBottom:16,fontSize:18,fontWeight:600},children:"Quick Journal Entry"}),n.jsxs("form",{onSubmit:N,children:[n.jsx("textarea",{value:i,onChange:b=>s(b.target.value),placeholder:"How are you feeling today? Share your thoughts, emotions, and experiences...",required:!0,className:"journal-textarea",style:{width:"100%",minHeight:80,marginBottom:12,padding:12,borderRadius:8,border:`1px solid ${Ne}`,fontSize:16,resize:"vertical",background:$e,color:Pe}}),n.jsx("button",{type:"submit",className:"journal-btn",disabled:m,style:{padding:12,borderRadius:8,background:m?"#9ca3af":fe,color:pe,fontWeight:600,border:"none",fontSize:16,width:"100%",cursor:m?"not-allowed":"pointer"},children:m?"Analyzing...":"Add Journal Entry"}),w&&n.jsxs("div",{className:"disclaimer",children:[n.jsx("strong",{children:"AI analysis enabled."})," Your entry will be analyzed for sentiment and insights. You can disable this in settings."]})]})]}),o.length>0&&n.jsxs("div",{style:{background:A,border:`1px solid ${j}`,borderRadius:12,padding:20},children:[n.jsx("h3",{style:{color:I,marginBottom:16,fontSize:18,fontWeight:600},children:"Recent Entries"}),n.jsxs("div",{children:[o.slice(0,3).map(b=>n.jsxs("div",{style:{borderBottom:`1px solid ${j}`,padding:"12px 0",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[n.jsx("div",{style:{fontSize:12,color:J},children:new Date(b.date||b.createdAt).toLocaleDateString()}),b.sentiment&&w&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:14},children:B(b.sentiment)}),n.jsx("span",{style:{fontSize:12,color:D(b.sentiment),fontWeight:600,textTransform:"capitalize"},children:b.sentiment})]})]}),n.jsx("div",{style:{color:I,fontSize:14,lineHeight:1.5},children:b.content.length>100?b.content.substring(0,100)+"...":b.content})]},b._id)),o.length>3&&n.jsxs("button",{onClick:()=>g("history"),style:{color:"#6366f1",background:"none",border:"none",fontSize:14,fontWeight:600,cursor:"pointer",padding:0},children:["View all ",o.length," entries →"]})]})]})]}):n.jsxs("div",{children:[n.jsxs("div",{style:{background:A,border:`1px solid ${j}`,borderRadius:12,padding:20,marginBottom:24},children:[n.jsx("h3",{style:{color:I,marginBottom:16,fontSize:18,fontWeight:600},children:"Journal Entry"}),n.jsxs("form",{onSubmit:N,children:[n.jsx("textarea",{value:i,onChange:b=>s(b.target.value),placeholder:"How are you feeling today? Share your thoughts, emotions, and experiences...",required:!0,className:"journal-textarea",style:{width:"100%",minHeight:80,marginBottom:12,padding:12,borderRadius:8,border:`1px solid ${Ne}`,fontSize:16,resize:"vertical",background:$e,color:Pe}}),n.jsx("button",{type:"submit",className:"journal-btn",disabled:m,style:{padding:12,borderRadius:8,background:m?"#9ca3af":fe,color:pe,fontWeight:600,border:"none",fontSize:16,width:"100%",cursor:m?"not-allowed":"pointer"},children:m?"Analyzing...":"Add Journal Entry"}),w&&n.jsxs("div",{className:"disclaimer",children:[n.jsx("strong",{children:"AI analysis enabled."})," Your entry will be analyzed for sentiment and insights. You can disable this in settings."]})]})]}),d&&n.jsx("div",{className:"fade-error",style:{color:"#ef4444",marginBottom:8,textAlign:"center",fontWeight:500},children:d}),n.jsx("div",{children:o.length===0?n.jsx("p",{style:{color:J,textAlign:"center"},children:"No journal entries yet. Start writing to see AI insights!"}):o.map(b=>n.jsxs("div",{className:"journal-card",style:{border:`1px solid ${j}`,borderRadius:12,padding:20,marginBottom:20,background:A,boxShadow:"0 2px 8px rgba(0,0,0,0.03)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsxs("div",{style:{fontSize:12,color:J},children:[new Date(b.date||b.createdAt).toLocaleDateString()," at ",new Date(b.date||b.createdAt).toLocaleTimeString()]}),b.sentiment&&w&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:16},children:B(b.sentiment)}),n.jsx("span",{style:{fontSize:12,color:D(b.sentiment),fontWeight:600,textTransform:"capitalize"},children:b.sentiment})]})]}),u===b._id?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:f,onChange:k=>p(k.target.value),className:"journal-textarea",style:{width:"100%",minHeight:60,marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${Ne}`,fontSize:15,background:$e,color:Pe}}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:()=>_(b._id),disabled:m,className:"journal-btn",style:{padding:8,borderRadius:8,background:m?"#9ca3af":fe,color:pe,fontWeight:600,border:"none",fontSize:15,cursor:m?"not-allowed":"pointer"},children:m?"Saving...":"Save"}),n.jsx("button",{onClick:()=>h(null),className:"journal-btn",style:{padding:8,borderRadius:8,background:se,color:me,fontWeight:600,border:"none",fontSize:15},children:"Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{marginBottom:12,lineHeight:1.6,fontSize:15},children:b.content}),b.keywords&&b.keywords.length>0&&w&&n.jsxs("div",{style:{marginBottom:12},children:[n.jsx("div",{style:{fontSize:12,color:J,marginBottom:4},children:"Key themes:"}),n.jsx("div",{children:b.keywords.map((k,z)=>n.jsx("span",{className:"keyword-tag",children:k},z))})]}),b.aiFeedback&&w&&n.jsxs("div",{className:"ai-feedback",children:[n.jsx("div",{style:{fontSize:12,color:J,marginBottom:4,fontWeight:600},children:"AI Insights:"}),n.jsx("div",{style:{fontSize:14,lineHeight:1.5},children:b.aiFeedback}),n.jsx("div",{className:"disclaimer",style:{marginTop:8},children:n.jsx("strong",{children:"AI-generated suggestions, not medical advice."})})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:16},children:[n.jsx("button",{onClick:()=>F(b._id,b.content),className:"journal-btn",style:{padding:8,borderRadius:8,background:se,color:me,fontWeight:600,border:"none",fontSize:15},children:"Edit"}),n.jsx("button",{onClick:()=>O(b._id),className:"journal-btn",style:{padding:8,borderRadius:8,background:se,color:Rt,fontWeight:600,border:"none",fontSize:15},children:"Delete"})]})]})]},b._id))})]})]})]})}function jr({darkMode:e}){const[t,r]=l.useState([]),[o,a]=l.useState(""),[i,s]=l.useState(!1),[d,c]=l.useState(""),u=Te.useRef(null);Te.useEffect(()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},[t]);const h=async C=>{if(C.preventDefault(),!o.trim())return;c(""),s(!0);const $={role:"user",content:o};r(N=>[...N,$]),a("");try{const N=await fetch(G.CHATBOT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({message:$.content})}),O=await N.json();if(N.status===401){localStorage.removeItem("token"),window.location.href="/login";return}if(!N.ok)throw new Error(O.message||"Error");r(F=>[...F,{role:"assistant",content:O.reply}])}catch(N){c(N.message)}finally{s(!1)}},f=C=>{const $=C.split(`

`);return $.map((N,O)=>{const F=N.split(`
`);return n.jsx("div",{style:{marginBottom:O<$.length-1?16:0},children:F.map((_,D)=>{const B=/^(\d+\.|\*|\-|\•)/.test(_.trim()),Z=/^(Tone Analysis|Area for Growth|Mind Exercise\/Advice):/.test(_.trim());if(B)return n.jsxs("div",{style:{marginLeft:16,marginBottom:4,display:"flex",alignItems:"flex-start"},children:[n.jsx("span",{style:{marginRight:8,color:"#6366f1"},children:"•"}),n.jsx("span",{children:_.replace(/^(\d+\.|\*|\-|\•)\s*/,"")})]},D);if(Z){const[ne,...te]=_.split(":");return n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("strong",{style:{color:"#6366f1"},children:[ne,":"]}),te.length>0&&n.jsxs("span",{children:[" ",te.join(":")]})]},D)}else return n.jsx("div",{style:{marginBottom:D<F.length-1?8:0,lineHeight:1.6},children:_},D)})},O)})},p=e?"#18181b":"#f8fafc",m=e?"#23232a":"#fff",v=e?"#27272a":"#e0e0e0",y="#6366f1",g="#fff",x=e?"#23232a":"#fff",S=e?"#f3f4f6":"#222",w=e?"#373737":"#e0e0e0",E=e?"#18181b":"#fff",R=e?"#27272a":"#d1d5db",L=e?"#f3f4f6":"#222",T=e?"#a1a1aa":"#6b7280";return n.jsxs("div",{style:{minHeight:"100vh",background:p,display:"flex",flexDirection:"column"},children:[n.jsx("style",{children:`
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
          background: ${y}; 
          color: ${g}; 
          border-bottom-right-radius: 4px; 
          margin-left: auto; 
        }
        .chatbot-bubble-bot { 
          background: ${x}; 
          color: ${S}; 
          border-bottom-left-radius: 4px; 
          margin-right: auto; 
          border: 1px solid ${w}; 
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
          background: ${p}; 
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
          background: ${e?"#1f2937":"#f3f4f6"}; 
          border-left: 4px solid #6366f1; 
          padding: 20px; 
          border-radius: 12px; 
          margin: 16px 0; 
          font-size: 14px;
          line-height: 1.6;
        }
        .disclaimer {
          background: ${e?"#1f2937":"#fef3c7"};
          border: 1px solid ${e?"#374151":"#f59e0b"};
          border-radius: 8px;
          padding: 12px;
          margin: 12px 0;
          font-size: 12px;
          color: ${e?"#d1d5db":"#92400e"};
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
      `}),n.jsxs("div",{className:"chatbot-container",style:{maxWidth:900,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",height:"90vh",background:m,borderRadius:16,boxShadow:"0 2px 12px rgba(99,102,241,0.07)",border:`1px solid ${v}`,overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"18px 0 8px 0",textAlign:"center"},children:[n.jsx("div",{style:{fontWeight:700,color:"#6366f1",fontSize:24,letterSpacing:1},children:"Tony"}),n.jsx("div",{style:{fontSize:14,color:T,marginTop:4},children:"Mental Health Assistant"})]}),n.jsx("div",{ref:u,className:"chatbot-scroll",style:{background:"none",padding:"0 24px",flex:1,minHeight:0},children:t.length===0?n.jsxs("div",{className:"welcome-message",children:[n.jsx("div",{style:{fontWeight:600,color:"#6366f1",marginBottom:8},children:"Welcome! I'm Tony, your mental health assistant."}),n.jsxs("div",{style:{color:e?"#d1d5db":"#374151"},children:["I'm here to help you by:",n.jsx("br",{}),"• Analyzing your emotional tone",n.jsx("br",{}),"• Suggesting areas for growth",n.jsx("br",{}),"• Recommending simple mind exercises",n.jsx("br",{}),n.jsx("br",{}),"Share how you're feeling today, and I'll provide compassionate support and practical advice."]}),n.jsxs("div",{className:"disclaimer",children:[n.jsx("strong",{children:"Important:"})," AI-generated suggestions are for general wellness support only and do not constitute medical advice. Always consult with qualified healthcare professionals for medical concerns or if you're experiencing a mental health crisis."]})]}):t.map((C,$)=>n.jsx("div",{style:{display:"flex",flexDirection:C.role==="user"?"row-reverse":"row",alignItems:"flex-end"},children:n.jsx("div",{className:`chatbot-bubble chatbot-bubble-${C.role==="user"?"user":"bot"}`,children:C.role==="user"?C.content:f(C.content)})},$))}),n.jsxs("form",{onSubmit:h,className:"chatbot-input-bar",style:{borderTop:`1px solid ${v}`,margin:0,padding:"16px 24px 8px 24px",background:p},children:[n.jsx("input",{value:o,onChange:C=>a(C.target.value),placeholder:"Share how you're feeling today...",className:"chatbot-input",style:{flex:1,padding:14,borderRadius:10,border:`1px solid ${R}`,fontSize:17,background:E,color:L,transition:"outline 0.2s"}}),n.jsx("button",{type:"submit",disabled:i,className:"chatbot-btn",style:{padding:"0 24px",borderRadius:10,background:i?"#9ca3af":"#6366f1",color:"#fff",fontWeight:600,border:"none",fontSize:17,minWidth:80,transition:"background 0.2s, color 0.2s, transform 0.1s",cursor:i?"not-allowed":"pointer"},children:i?"Thinking...":"Send"})]}),d&&n.jsx("div",{className:"fade-error",style:{color:"#ef4444",marginTop:8,textAlign:"center",fontWeight:500},children:d})]})]})}function Sr({darkMode:e,onLogout:t}){const[r,o]=l.useState(null),[a,i]=l.useState({username:"",email:""}),[s,d]=l.useState({oldPassword:"",newPassword:""}),[c,u]=l.useState(""),[h,f]=l.useState(""),[p,m]=l.useState(""),[v,y]=l.useState(!1),[g,x]=l.useState(""),[S,w]=l.useState(!1);l.useEffect(()=>{fetch(G.PROFILE,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(j=>j.json()).then(j=>{o(j),i({username:j.username,email:j.email})})},[]);const E=j=>i({...a,[j.target.name]:j.target.value}),R=j=>d({...s,[j.target.name]:j.target.value}),L=async j=>{j.preventDefault(),u(""),m("");try{const I=await fetch(G.PROFILE,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(a)}),J=await I.json();if(!I.ok)throw new Error(J.message||"Error");o(J),u("Profile updated!")}catch(I){m(I.message)}},T=async j=>{j.preventDefault(),f(""),m("");try{const I=await fetch(G.PROFILE+"/password",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(s)}),J=await I.json();if(!I.ok)throw new Error(J.message||"Error");f("Password updated!"),d({oldPassword:"",newPassword:""})}catch(I){m(I.message)}},C=async()=>{if(g!=="Delete"){m('Please type "Delete" to confirm account deletion');return}w(!0),m("");try{const j=await fetch(G.PROFILE,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}});if(!j.ok){const I=await j.json();throw new Error(I.message||"Failed to delete account")}localStorage.removeItem("token"),t()}catch(j){m(j.message),w(!1)}},$=e?"#18181b":"#f8fafc",N=e?"#23232a":"#fff",O=e?"#27272a":"#e0e0e0",F=e?"#f3f4f6":"#222",_=e?"#a1a1aa":"#888",D=e?"#18181b":"#fff",B=e?"#27272a":"#d1d5db",Z=e?"#f3f4f6":"#222",ne="#6366f1",te="#fff",Ee="#22c55e",A="#ef4444";return n.jsxs("div",{style:{minHeight:"100vh",background:$,color:F,padding:0,animation:"fadeIn 0.7s"},children:[n.jsx("style",{children:`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .profile-card { transition: box-shadow 0.2s, transform 0.2s; }
        .profile-card:hover { box-shadow: 0 8px 32px rgba(99,102,241,0.13); transform: translateY(-4px) scale(1.02); }
        .profile-btn { transition: background 0.2s, color 0.2s, transform 0.1s; }
        .profile-btn:hover { background: #6366f1; color: #fff; }
        .profile-btn:active { transform: scale(0.97); }
        .profile-input:focus { outline: 2px solid #6366f1; }
        .fade-error { animation: fadeIn 0.5s; }
        .fade-success { animation: fadeIn 0.5s; color: ${Ee}; }
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
      `}),n.jsxs("div",{className:"profile-container",style:{maxWidth:400,margin:"2rem auto",padding:24},children:[n.jsxs("div",{className:"profile-card",style:{padding:32,borderRadius:16,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",background:N,border:`1px solid ${O}`,marginBottom:24},children:[n.jsx("h2",{style:{textAlign:"center",fontWeight:700,color:F,marginBottom:24},children:"Profile"}),n.jsxs("form",{onSubmit:L,style:{marginBottom:24},children:[n.jsx("input",{name:"username",value:a.username,onChange:E,placeholder:"Username",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${B}`,fontSize:16,background:D,color:Z}}),n.jsx("input",{name:"email",value:a.email,onChange:E,placeholder:"Email",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${B}`,fontSize:16,background:D,color:Z}}),n.jsx("button",{type:"submit",className:"profile-btn",style:{width:"100%",padding:12,borderRadius:8,background:ne,color:te,fontWeight:600,fontSize:16,border:"none",boxShadow:"0 2px 8px rgba(99,102,241,0.08)"},children:"Update Profile"}),c&&n.jsx("div",{className:"fade-success",style:{marginTop:8,textAlign:"center",fontWeight:500},children:c})]}),n.jsxs("form",{onSubmit:T,children:[n.jsx("input",{name:"oldPassword",type:"password",value:s.oldPassword,onChange:R,placeholder:"Old Password",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${B}`,fontSize:16,background:D,color:Z}}),n.jsx("input",{name:"newPassword",type:"password",value:s.newPassword,onChange:R,placeholder:"New Password",required:!0,className:"profile-input",style:{width:"100%",marginBottom:12,padding:10,borderRadius:8,border:`1px solid ${B}`,fontSize:16,background:D,color:Z}}),n.jsx("button",{type:"submit",className:"profile-btn",style:{width:"100%",padding:12,borderRadius:8,background:ne,color:te,fontWeight:600,fontSize:16,border:"none",boxShadow:"0 2px 8px rgba(99,102,241,0.08)"},children:"Change Password"}),h&&n.jsx("div",{className:"fade-success",style:{marginTop:8,textAlign:"center",fontWeight:500},children:h})]}),p&&n.jsx("div",{className:"fade-error",style:{color:A,marginTop:8,textAlign:"center",fontWeight:500},children:p})]}),n.jsxs("div",{className:"profile-card",style:{padding:32,borderRadius:16,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",background:N,border:`1px solid ${O}`,borderColor:A},children:[n.jsx("h3",{style:{textAlign:"center",fontWeight:700,color:A,marginBottom:16},children:"Danger Zone"}),n.jsx("p",{style:{textAlign:"center",color:_,marginBottom:20,fontSize:14,lineHeight:1.5},children:"Once you delete your account, there is no going back. Please be certain."}),n.jsx("button",{onClick:()=>y(!0),style:{width:"100%",padding:12,borderRadius:8,background:A,color:"#fff",fontWeight:600,fontSize:16,border:"none",cursor:"pointer",transition:"background 0.2s, transform 0.1s"},onMouseOver:j=>j.target.style.background="#dc2626",onMouseOut:j=>j.target.style.background=A,onMouseDown:j=>j.target.style.transform="scale(0.97)",onMouseUp:j=>j.target.style.transform="scale(1)",children:"Delete Account"})]})]}),v&&n.jsx("div",{className:"modal-overlay",onClick:()=>y(!1),children:n.jsxs("div",{className:"modal-content",onClick:j=>j.stopPropagation(),style:{background:N,padding:32,borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,0.3)",border:`1px solid ${O}`,maxWidth:400,width:"90%"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[n.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"#fef2f2",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",border:`2px solid ${A}`},children:n.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:A,strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})})}),n.jsx("h3",{style:{fontWeight:700,color:F,marginBottom:8},children:"We're sad to see you go"}),n.jsx("p",{style:{color:_,fontSize:14,lineHeight:1.6},children:"This action cannot be undone. This will permanently delete your account and remove all your data from our servers."})]}),n.jsxs("div",{style:{marginBottom:24},children:[n.jsx("label",{style:{display:"block",marginBottom:8,color:F,fontWeight:500},children:'Type "Delete" to confirm:'}),n.jsx("input",{type:"text",value:g,onChange:j=>x(j.target.value),placeholder:"Delete",style:{width:"100%",padding:12,borderRadius:8,border:`1px solid ${B}`,fontSize:16,background:D,color:Z}})]}),n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx("button",{onClick:()=>y(!1),style:{flex:1,padding:12,borderRadius:8,background:"transparent",color:F,fontWeight:600,fontSize:16,border:`1px solid ${O}`,cursor:"pointer",transition:"background 0.2s"},onMouseOver:j=>j.target.style.background=e?"#27272a":"#f1f5f9",onMouseOut:j=>j.target.style.background="transparent",children:"Cancel"}),n.jsx("button",{onClick:C,disabled:S||g!=="Delete",style:{flex:1,padding:12,borderRadius:8,background:g==="Delete"?A:"#6b7280",color:"#fff",fontWeight:600,fontSize:16,border:"none",cursor:g==="Delete"?"pointer":"not-allowed",transition:"background 0.2s"},onMouseOver:j=>{g==="Delete"&&(j.target.style.background="#dc2626")},onMouseOut:j=>{g==="Delete"&&(j.target.style.background=A)},children:S?"Deleting...":"Delete Account"})]})]})})]})}function Rr({onLogout:e,darkMode:t,onToggleDarkMode:r,isAuthenticated:o}){const[a,i]=l.useState(!1),s=M().pathname.slice(1),d=()=>{i(!a)};return n.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderBottom:`1px solid ${t?"#27272a":"#e0e0e0"}`,marginBottom:24,background:t?"linear-gradient(90deg, #23232a 0%, #18181b 100%)":"linear-gradient(90deg, #f8fafc 0%, #e0e7ef 100%)",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.03)",position:"relative"},children:[n.jsx("style",{children:`
        .nav-btn {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 8px;
          background: transparent;
          text-decoration: none;
          transition: background-color 200ms ease, color 200ms ease, transform 100ms ease, border-radius 200ms ease;
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
          text-decoration: none !important;
          background: ${t?"#23232a":"#e0e7ef"};
          color: ${t?"#a5b4fc":"#6366f1"};
          display: inline-block;
        }
        .nav-auth-btn:active {
          background: #6366f1 !important;
          color: #fff !important;
        }
        .nav-auth-btn:hover {
          background: ${t?"#373737":"#c7d2fe"};
          color: #6366f1;
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
        .nav-link {
          text-decoration: none !important;
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
      `}),n.jsxs(H,{to:"/",className:"nav-link",style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",cursor:"pointer",fontSize:"clamp(18px, 4vw, 22px)",fontWeight:700,color:t?"#a5b4fc":"#6366f1",marginRight:"auto",fontFamily:"'Poppins', sans-serif",letterSpacing:"1px",minWidth:0},title:"Go to Home",children:[n.jsxs("svg",{width:"clamp(24px, 5vw, 28px)",height:"clamp(24px, 5vw, 28px)",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:t?"#a5b4fc":"#6366f1",strokeWidth:"2",fill:t?"#23232a":"#fff"}),n.jsx("path",{d:"M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z",stroke:t?"#a5b4fc":"#6366f1",strokeWidth:"1.5",fill:t?"#18181b":"#f1f5f9"})]}),n.jsx("span",{style:{display:window.innerWidth<=480?"none":"inline"},children:"SerenitySpace"})]}),n.jsx("div",{className:"desktop-nav",style:{display:"flex",alignItems:"center",gap:16,marginLeft:"auto"},children:o?n.jsxs(n.Fragment,{children:[n.jsx(H,{to:"/journal",className:"nav-btn nav-link",children:"Journal"}),n.jsx(H,{to:"/chatbot",className:"nav-btn nav-link",children:"Chatbot"}),n.jsx(H,{to:"/profile",className:"nav-btn nav-link",children:"Profile"}),n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[n.jsx("button",{className:"dark-toggle-navbar",onClick:r,children:t?"Light":"Dark"}),n.jsx("button",{className:"nav-logout-btn",onClick:e,style:{background:t?"#23232a":"#f1f5f9",color:"#ef4444",fontWeight:600,border:"none",fontSize:15,padding:8,borderRadius:8,cursor:"pointer"},children:"Logout"})]})]}):n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[n.jsx("button",{className:"dark-toggle-navbar",onClick:r,children:t?"Light":"Dark"}),n.jsx(H,{to:"/login",className:"nav-link nav-auth-btn",children:"Login"}),n.jsx(H,{to:"/signup",className:"nav-link nav-auth-btn",children:"Sign Up"})]})}),n.jsx("button",{className:"mobile-burger",onClick:d,"aria-label":"Open menu",children:n.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a?n.jsx("path",{d:"M18 6L6 18M6 6l12 12"}):n.jsx("path",{d:"M3 12h18M3 6h18M3 18h18"})})}),n.jsx("div",{className:`mobile-dropdown${a?" open":""}`,children:o?n.jsxs(n.Fragment,{children:[n.jsx(H,{to:"/journal",className:`mobile-dropdown-item${s==="journal"?" active":""}`,children:"Journal"}),n.jsx(H,{to:"/chatbot",className:`mobile-dropdown-item${s==="chatbot"?" active":""}`,children:"Chatbot"}),n.jsx(H,{to:"/profile",className:`mobile-dropdown-item${s==="profile"?" active":""}`,children:"Profile"}),n.jsxs("div",{style:{borderTop:`1px solid ${t?"#373737":"#e0e0e0"}`,marginTop:8,paddingTop:8},children:[n.jsx("button",{className:"mobile-dropdown-item",onClick:()=>r(),style:{color:t?"#a5b4fc":"#6366f1"},children:t?"☀️ Light Mode":"🌙 Dark Mode"}),n.jsx("button",{className:"mobile-dropdown-item",onClick:()=>e(),style:{color:"#ef4444"},children:"🚪 Logout"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(H,{to:"/login",className:"mobile-dropdown-item",style:{color:"#6366f1"},children:"🔐 Login"}),n.jsx(H,{to:"/signup",className:"mobile-dropdown-item",style:{color:"#6366f1"},children:"✨ Sign Up"}),n.jsx("div",{style:{borderTop:`1px solid ${t?"#373737":"#e0e0e0"}`,marginTop:8,paddingTop:8},children:n.jsx("button",{className:"mobile-dropdown-item",onClick:()=>r(),style:{color:t?"#a5b4fc":"#6366f1"},children:t?"☀️ Light Mode":"🌙 Dark Mode"})})]})})]})}function kr({darkMode:e,onToggleDarkMode:t}){const r=e?"#18181b":"#f8fafc",o=e?"#23232a":"#fff",a=e?"#f3f4f6":"#222",i=e?"#a1a1aa":"#888",s=[{icon:n.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M12 3C7 3 3 7 3 12c0 2.5 1.5 4.5 3.5 6.5.5.5 1.5.5 2 0 .5-.5.5-1.5 0-2C7.5 15 7 13.5 7 12c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.5 3-1.5 4.5-.5.5-.5 1.5 0 2 .5.5 1.5.5 2 0C19.5 16.5 21 14.5 21 12c0-5-4-9-9-9z",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"})}),title:"Reflect and Grow",desc:"Journaling helps you understand your thoughts and emotions. Start your journey to self-discovery today. Writing regularly can help you process emotions, recognize patterns, and foster personal growth. SerenitySpace makes it easy and private."},{icon:n.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"})}),title:"Find Your Calm",desc:"Our AI chatbot is here to support your mental wellness journey. Find peace of mind, anytime. Whether you need to vent, reflect, or seek advice, Tony is always ready to listen and help you find your calm."},{icon:n.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"4",y:"7",width:"16",height:"13",rx:"2",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"}),n.jsx("path",{d:"M8 7V5a4 4 0 1 1 8 0v2",stroke:"#6366f1",strokeWidth:"1.5"})]}),title:"Private & Secure",desc:"Your thoughts are safe and confidential with us. SerenitySpace values your privacy. All your entries are encrypted and only accessible by you, ensuring a safe space for honest reflection."},{icon:n.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"4",y:"10",width:"16",height:"8",rx:"4",stroke:"#6366f1",strokeWidth:"1.5",fill:"#a5b4fc"}),n.jsx("circle",{cx:"8",cy:"14",r:"1.5",fill:"#6366f1"}),n.jsx("circle",{cx:"16",cy:"14",r:"1.5",fill:"#6366f1"})]}),title:"24/7 Support",desc:"Tony, your AI companion, is always ready to listen and help you reflect. No matter the time of day, you have a supportive presence to talk to and guide you through your thoughts."},{icon:n.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41",stroke:"#6366f1",strokeWidth:"1.5"}),n.jsx("circle",{cx:"12",cy:"12",r:"5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"})]}),title:"Mental Clarity",desc:"Clear your mind and organize your thoughts in a safe, supportive space. SerenitySpace helps you declutter your mind, reduce stress, and focus on what matters most."},{icon:n.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"3",y:"12",width:"3",height:"7",rx:"1.5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"}),n.jsx("rect",{x:"8.5",y:"9",width:"3",height:"10",rx:"1.5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"}),n.jsx("rect",{x:"14",y:"6",width:"3",height:"13",rx:"1.5",fill:"#a5b4fc",stroke:"#6366f1",strokeWidth:"1.5"})]}),title:"Track Your Progress",desc:"Visualize your growth over time. SerenitySpace lets you look back on your journey, see patterns, and celebrate your progress toward better mental wellness."}];return n.jsxs("div",{style:{minHeight:"80vh",background:r,color:a,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:0},children:[n.jsxs("div",{className:"home-hero-row",style:{display:"flex",maxWidth:1100,width:"100%",alignItems:"center",justifyContent:"center",gap:48,padding:"32px 0",position:"relative"},children:[n.jsxs("div",{className:"home-hero-left",style:{flex:1,minWidth:320},children:[n.jsx("div",{style:{fontSize:16,color:e?"#818cf8":"#6366f1",fontWeight:600,marginBottom:12,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) both"},children:"Welcome to"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:18,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.08s both"},children:[n.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:e?"#a5b4fc":"#6366f1",strokeWidth:"2",fill:e?"#23232a":"#fff"}),n.jsx("path",{d:"M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z",stroke:e?"#a5b4fc":"#6366f1",strokeWidth:"1.5",fill:e?"#18181b":"#f1f5f9"})]}),n.jsx("span",{style:{fontWeight:700,color:e?"#a5b4fc":"#6366f1",fontFamily:"'Poppins', sans-serif",fontSize:32,letterSpacing:"1px"},children:"SerenitySpace"})]}),n.jsxs("div",{className:"home-hero-title",style:{fontSize:38,fontWeight:800,marginBottom:18,lineHeight:1.1,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.16s both"},children:["Where your thoughts",n.jsx("br",{}),"find peace."]}),n.jsx("div",{className:"home-hero-desc",style:{fontSize:18,color:i,marginBottom:32,maxWidth:500,animation:"slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.24s both"},children:"Serenity Space is a full-stack mental wellness platform that combines journaling and conversational AI. Built using React, Node.js, MongoDB, and OpenAI’s language model, it offers users a safe space to log their thoughts and engage with a supportive chatbot. Designed with simplicity, privacy, and mental clarity in mind."})]}),n.jsx("div",{className:"home-hero-right",style:{flex:1,minWidth:320,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("div",{style:{width:400,height:400,borderRadius:28,overflow:"hidden",boxShadow:"0 4px 32px rgba(99,102,241,0.13)",maxWidth:"98vw"},children:n.jsx("img",{src:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",alt:"Serenity",style:{width:"100%",height:"100%",objectFit:"cover"}})})})]}),n.jsx("style",{children:`
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
      `}),n.jsx("div",{style:{width:"100%",background:r,padding:"32px 0 48px 0",display:"flex",justifyContent:"center"},children:n.jsx("div",{className:"home-card-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(210px, 1fr))",gridTemplateRows:"repeat(2, 1fr)",gap:"36px 32px",maxWidth:900,width:"100%",overflow:"visible",padding:"0 12px"},children:s.map((d,c)=>n.jsxs("div",{className:"home-card",style:{background:o,borderRadius:16,boxShadow:"0 2px 12px rgba(99,102,241,0.07)",border:`1.5px solid ${e?"#27272a":"#e0e0e0"}`,overflow:"hidden",display:"flex",flexDirection:"column",minHeight:260,alignItems:"center",justifyContent:"flex-start",paddingTop:18,maxWidth:270},children:[d.icon,n.jsxs("div",{style:{padding:"16px 14px 14px 14px",flex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[n.jsx("div",{style:{fontWeight:700,fontSize:17,color:e?"#a5b4fc":"#6366f1",marginBottom:7,textAlign:"center"},children:d.title}),n.jsx("div",{style:{color:i,fontSize:14,flex:1,textAlign:"center",lineHeight:1.5},children:d.desc})]})]},c))})}),n.jsx("div",{style:{width:"100%",background:e?"#1f2937":"#fef3c7",borderTop:`1px solid ${e?"#374151":"#f59e0b"}`,padding:"24px 0"},children:n.jsx("div",{style:{maxWidth:900,margin:"0 auto",padding:"0 24px",textAlign:"center"},children:n.jsxs("div",{style:{color:e?"#d1d5db":"#92400e",fontSize:14,lineHeight:1.6,fontWeight:500},children:[n.jsx("strong",{children:"Important Notice:"})," SerenitySpace provides AI-generated suggestions for general wellness support only. These suggestions do not constitute medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns or if you're experiencing a mental health crisis. If you're in crisis, please contact emergency services or a mental health crisis hotline immediately."]})})})]})}function Cr(){const[e,t]=l.useState(()=>localStorage.getItem("token")?{username:"User"}:null),[r,o]=l.useState(()=>{const v=localStorage.getItem("darkMode");return v?JSON.parse(v):!1}),[a,i]=l.useState("login"),s=v=>t(v),d=()=>{localStorage.removeItem("token"),t(null),i("login")},c=()=>{o(v=>(localStorage.setItem("darkMode",JSON.stringify(!v)),!v))},u=r?"#18181b":"#f8fafc",h=r?"#f3f4f6":"#222",f=r?"#23232a":"#f8fafc",p=r?"#27272a":"#e0e0e0",m=r?"#a5b4fc":"#6366f1";return n.jsx(ur,{children:n.jsxs("div",{style:{minHeight:"100vh",background:u,color:h,transition:"background 0.3s, color 0.3s"},children:[n.jsx("style",{children:`
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
        `}),n.jsx(Rr,{darkMode:r,onToggleDarkMode:c,isAuthenticated:!!e,onLogout:d,authMode:a,onLogin:()=>i("login"),onSignup:()=>i("signup")}),n.jsx("main",{className:"app-main",style:{minHeight:"80vh"},children:n.jsxs(_n,{children:[n.jsx(ee,{path:"/",element:n.jsx(kr,{darkMode:r,onToggleDarkMode:c})}),n.jsx(ee,{path:"/login",element:e?n.jsx(re,{to:"/journal"}):n.jsx(tt,{onAuth:s,mode:"login",darkMode:r})}),n.jsx(ee,{path:"/signup",element:e?n.jsx(re,{to:"/journal"}):n.jsx(tt,{onAuth:s,mode:"signup",darkMode:r})}),n.jsx(ee,{path:"/journal",element:e?n.jsx(wr,{user:e,onLogout:d,darkMode:r}):n.jsx(re,{to:"/login"})}),n.jsx(ee,{path:"/chatbot",element:e?n.jsx(jr,{darkMode:r}):n.jsx(re,{to:"/login"})}),n.jsx(ee,{path:"/profile",element:e?n.jsx(Sr,{darkMode:r,onLogout:d}):n.jsx(re,{to:"/login"})}),n.jsx(ee,{path:"*",element:n.jsx(re,{to:"/"})})]})}),n.jsxs("footer",{className:"app-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",marginTop:"2rem",color:r?"#a1a1aa":"#888",fontSize:"0.9rem",borderTop:`1px solid ${p}`,background:f,flexWrap:"wrap",transition:"background 0.3s, color 0.3s, border-color 0.3s"},children:[n.jsx("style",{children:`
            .footer-social-link {
              display: inline-flex;
              align-items: center;
              color: ${m};
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
              border: 1px solid ${p};
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
          `}),n.jsxs("div",{className:"footer-logo",style:{display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z",stroke:m,strokeWidth:"2",fill:r?"#23232a":"#fff"}),n.jsx("path",{d:"M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z",stroke:m,strokeWidth:"1.5",fill:r?"#18181b":"#f1f5f9"})]}),n.jsx("span",{style:{fontWeight:700,color:m,fontFamily:"'Poppins', sans-serif",fontSize:18,letterSpacing:"1px"},children:"SerenitySpace"})]}),n.jsxs("div",{className:"footer-content",style:{textAlign:"center",flex:1},children:["© ",new Date().getFullYear()," SerenitySpace.Inc. All rights reserved."]}),n.jsxs("div",{className:"footer-social",style:{display:"flex",gap:16,alignItems:"center"},children:[n.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",title:"Instagram",className:"footer-social-link",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),n.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",title:"Twitter",className:"footer-social-link",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 512 512",children:n.jsx("path",{d:"M459.4 151.7c.32 4.54.32 9.1.32 13.66 0 138.72-105.58 298.56-298.56 298.56A296.32 296.32 0 0 1 0 408.09a209.1 209.1 0 0 0 24.42 1.28 209.09 209.09 0 0 0 129.29-44.56 104.52 104.52 0 0 1-97.52-72.54 132.07 132.07 0 0 0 19.8 1.6 110.2 110.2 0 0 0 27.45-3.6A104.48 104.48 0 0 1 21.8 188.1v-1.28a104.68 104.68 0 0 0 47.18 13.1A104.52 104.52 0 0 1 35.7 82.15a297.32 297.32 0 0 0 215.5 109.44 117.6 117.6 0 0 1-2.56-23.87A104.52 104.52 0 0 1 391.86 63.4a204.13 204.13 0 0 0 66.36-25.34 104.88 104.88 0 0 1-45.92 57.6A209.1 209.1 0 0 0 512 97.2a223.34 223.34 0 0 1-52.6 54.5Z"})})}),n.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",title:"Facebook",className:"footer-social-link",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 320 512",children:n.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"})})})]})]})]})})}Ae.createRoot(document.getElementById("root")).render(n.jsx(Te.StrictMode,{children:n.jsx(Cr,{})}));
