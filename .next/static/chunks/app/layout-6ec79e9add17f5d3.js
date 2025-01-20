(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{5781:function(e,t,a){Promise.resolve().then(a.bind(a,29185)),Promise.resolve().then(a.bind(a,34410)),Promise.resolve().then(a.bind(a,76540)),Promise.resolve().then(a.t.bind(a,42746,23)),Promise.resolve().then(a.t.bind(a,31859,23))},34410:function(e,t,a){"use strict";a.r(t);var r=a(9268),o=a(34751);a(86006),t.default=e=>{let{children:t}=e;return(0,r.jsx)(o.SessionProvider,{children:t})}},76540:function(e,t,a){"use strict";a.r(t);var r=a(9268),o=a(86006),i=a(22450),s=a(41557),n=a(32131);t.default=e=>{let{children:t,companyData:a}=e,{onInitialMode:l,mode:c}=(0,i.Z)(),{onCompany:d,company:u}=(0,n.Z)(),[p,m]=(0,o.useState)(!1),f=(0,o.useCallback)(async()=>{d(a)},[a,d]),g=(0,o.useCallback)(async()=>{p&&(l(),await f())},[f,p,l]);return((0,o.useEffect)(()=>{g(),m(!0)},[g]),u&&p)?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)("div",{className:"h-[100vh] w-full flex items-center  justify-center bg-black",children:(0,r.jsx)(s.a,{color:"#ffffff"})})}},29185:function(e,t,a){"use strict";a.r(t);var r=a(9268),o=a(68919);a(86006),t.default=()=>(0,r.jsx)(o.x7,{})},32131:function(e,t,a){"use strict";var r=a(82561);let o=(0,r.Ue)(e=>({company:null,onCompany:t=>e({company:t})}));t.Z=o},22450:function(e,t,a){"use strict";var r=a(82561);let o=()=>{let e=localStorage.getItem("theme-mode");return e&&"light"!==e?"dark":"light"},i=()=>(localStorage.setItem("theme-mode","dark"),{mode:"dark"}),s=()=>(localStorage.setItem("theme-mode","light"),{mode:"light"}),n=(0,r.Ue)(e=>({mode:"light",onDarkMode:()=>e(i),onLightMode:()=>e(s),onInitialMode:()=>e({mode:o()})}));t.Z=n},42746:function(){},31859:function(e){e.exports={style:{fontFamily:"'__Nunito_326591', '__Nunito_Fallback_326591'"},className:"__className_326591"}},68919:function(e,t,a){"use strict";let r,o;a.d(t,{x7:function(){return eo},Am:function(){return T}});var i,s=a(86006);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+s+";":r+="f"==i[1]?p(s,i):i+"{"+p(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=p(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(i,s):i+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},g=(e,t,a,r,o)=>{var i;let s=f(e),n=m[s]||(m[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!m[n]){let t=s!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[n]=p(o?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},h=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,v,x,w=y.bind({k:1});function k(e,t){let a=this||{};return function(){let r=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:v&&v()},n),a.o=/ *go\d+/.test(l),n.className=y.apply(a,r)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),x&&c[0]&&x(n),b(c,n)}return t?t(o):o}}var E=e=>"function"==typeof e,N=(e,t)=>E(e)?e(t):e,$=(r=0,()=>(++r).toString()),_=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},j=new Map,C=e=>{if(j.has(e))return;let t=setTimeout(()=>{j.delete(e),A({type:4,toastId:e})},1e3);j.set(e,t)},O=e=>{let t=j.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?C(r):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},I=[],z={toasts:[],pausedAt:void 0},A=e=>{z=P(z,e),I.forEach(e=>{e(z)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=(e={})=>{let[t,a]=(0,s.useState)(z);(0,s.useEffect)(()=>(I.push(a),()=>{let e=I.indexOf(a);e>-1&&I.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},S=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||$()}),F=e=>(t,a)=>{let r=S(t,e,a);return A({type:2,toast:r}),r.id},T=(e,t)=>F("blank")(e,t);T.error=F("error"),T.success=F("success"),T.loading=F("loading"),T.custom=F("custom"),T.dismiss=e=>{A({type:3,toastId:e})},T.remove=e=>A({type:4,toastId:e}),T.promise=(e,t,a)=>{let r=T.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(T.success(N(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{T.error(N(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var H=(e,t)=>{A({type:1,toast:{id:e,height:t}})},L=()=>{A({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:a}=M(e);(0,s.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&T.dismiss(t.id);return}return setTimeout(()=>T.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,s.useCallback)(()=>{a&&A({type:6,time:Date.now()})},[a]),o=(0,s.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:L,endPause:r,calculateOffset:o}}},U=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,B=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=k("div")`
  position: absolute;
`,Y=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(G,null,t):t:"blank"===a?null:s.createElement(Y,null,s.createElement(q,{...r}),"loading"!==a&&s.createElement(R,null,"error"===a?s.createElement(U,{...r}):s.createElement(B,{...r})))},K=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(a),Q(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=s.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(J,{toast:e}),n=s.createElement(W,{...e.ariaProps},N(e.message,e));return s.createElement(V,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):s.createElement(s.Fragment,null,i,n))});i=s.createElement,p.p=void 0,b=i,v=void 0,x=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let i=s.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return s.createElement("div",{ref:i,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=Z(a);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let i=a.position||t,n=ea(i,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return s.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?N(a.message,a):o?o(a):s.createElement(ee,{toast:a,position:i}))}))}}},function(e){e.O(0,[2815,4751,9253,2961,1744],function(){return e(e.s=5781)}),_N_E=e.O()}]);