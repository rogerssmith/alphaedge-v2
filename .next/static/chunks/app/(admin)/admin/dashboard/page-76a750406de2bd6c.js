(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9871],{36708:function(e,t,r){"use strict";r.d(t,{w:function(){return a}});let l={app:100,modal:200,popover:300,overlay:400,max:9999};function a(e){return l[e]}},60072:function(e,t,r){"use strict";r.d(t,{k:function(){return m}});var l=r(59551),a=r(43764),i=Object.defineProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(n)for(var r of n(t))s.call(t,r)&&c(e,r,t[r]);return e};function u(e,t){return t&&Object.keys(t).forEach(r=>{e[r]?e[r]=d(d({},e[r]),t[r]):e[r]=d({},t[r])}),e}function f(e,t,r,l){let a=e=>"function"==typeof e?e(t,r||{},l):e||{};return Array.isArray(e)?e.map(e=>a(e.styles)).reduce((e,t)=>u(e,t),{}):a(e)}function m(e){let t="function"==typeof e?e:()=>e;return function(e,r){let i=(0,a.rZ)(),n=(0,a.O2)(null==r?void 0:r.name),o=(0,a.T1)(),s={variant:null==r?void 0:r.variant,size:null==r?void 0:r.size},{css:c,cx:d}=(0,l.Z)(),m=t(i,e,s),h=f(null==r?void 0:r.styles,i,e,s),p=f(n,i,e,s),x=function({ctx:e,theme:t,params:r,variant:l,size:a}){return e.reduce((e,i)=>(i.variants&&l in i.variants&&u(e,i.variants[l](t,r,{variant:l,size:a})),i.sizes&&a in i.sizes&&u(e,i.sizes[a](t,r,{variant:l,size:a})),e),{})}({ctx:n,theme:i,params:e,variant:null==r?void 0:r.variant,size:null==r?void 0:r.size}),v=Object.fromEntries(Object.keys(m).map(e=>{let t=d({[c(m[e])]:!(null==r?void 0:r.unstyled)},c(x[e]),c(p[e]),c(h[e]));return[e,t]}));return{classes:function({cx:e,classes:t,context:r,classNames:l,name:a,cache:i}){let n=r.reduce((e,t)=>(Object.keys(t.classNames).forEach(r=>{"string"!=typeof e[r]?e[r]=`${t.classNames[r]}`:e[r]=`${e[r]} ${t.classNames[r]}`}),e),{});return Object.keys(t).reduce((r,o)=>(r[o]=e(t[o],n[o],null!=l&&l[o],Array.isArray(a)?a.filter(Boolean).map(e=>`${(null==i?void 0:i.key)||"mantine"}-${e}-${o}`).join(" "):a?`${(null==i?void 0:i.key)||"mantine"}-${a}-${o}`:null),r),{})}({cx:d,classes:v,context:n,classNames:null==r?void 0:r.classNames,name:null==r?void 0:r.name,cache:o}),cx:d,theme:i}}}},53664:function(e,t,r){Promise.resolve().then(r.bind(r,13487))},13487:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eg}});var l=r(9268),a=r(32131),i=r(22450),n=r(56008),o=r(86006),s=e=>{let{mode:t}=(0,i.Z)(),{icon:r,detail:o,title:s}=e;(0,n.useRouter)();let{company:c}=(0,a.Z)(),d=null==c?void 0:c.color.primaryLight;return(0,l.jsxs)("div",{className:"sm:max-w-[200px] w-[90%] h-[200px] \n    shadow-md rounded-md p-5 \n    transition-all duration-300 hover:scale-105 \n    hover:shadow-lg flex flex-col items-center \n    gap-4 justify-center\n    ".concat("light"===t?"shadow-[#d9d9d9] hover:shadow-[#c1c1c1]":"shadow-[#5d5d5d] hover:shadow-[#7b7b7b]"),children:[(0,l.jsx)("div",{children:r&&(0,l.jsx)(r,{size:30,color:d})}),(0,l.jsx)("div",{className:"font-bold w-full text-3xl text-center truncate",children:o}),(0,l.jsx)("div",{className:"font-semibold text-lg text-center",children:s})]})},c=r(29577),d=r(84821),u=e=>{let{mode:t}=(0,i.Z)(),{transactions:r}=e;(0,n.useRouter)();let{company:o}=(0,a.Z)(),s=null==o?void 0:o.color.primaryLight,u=null==o?void 0:o.color.primaryVeryLight,f=null==o?void 0:o.currency.symbol;return(0,l.jsxs)("div",{className:"sm:max-w-[420px] w-[90%] h-[350px] \n    shadow-md rounded-md p-5 \n    transition-all duration-300 hover:scale-105 \n    hover:shadow-lg flex flex-col \n    gap-4\n    ".concat("light"===t?"shadow-[#d9d9d9] hover:shadow-[#c1c1c1]":"shadow-[#5d5d5d] hover:shadow-[#7b7b7b]"),children:[(0,l.jsx)("div",{className:"text-lg font-semibold",children:"Recent Transactions"}),(0,l.jsx)("div",{className:"flex flex-col gap-3 overflow-auto",children:null==r?void 0:r.map(e=>(0,l.jsxs)("div",{style:{borderColor:u},className:"flex justify-between px-1.5 py-2.5  rounded-md border-[.5px] items-center overflow-auto  gap-3 flex-shrink-0",children:[(0,l.jsx)("div",{children:(0,l.jsx)(c.q,{color:"red",alt:"its me",size:"lg",radius:"xl",children:(0,l.jsx)(d.x82,{color:s})})}),(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsx)("div",{className:"text-sm font-semibold whitespace-nowrap",children:e.title})}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex-shrink-0 font-bold text-lg",children:[f,e.amount]}),(0,l.jsx)("div",{className:"text-xs flex-shrink-0",children:e.status})]})]},e._id))})]})},f=r(46338),m=e=>{let{mode:t}=(0,i.Z)(),{users:r}=e;(0,n.useRouter)();let{company:o}=(0,a.Z)(),s=null==o?void 0:o.color.primaryLight,d=null==o?void 0:o.color.primaryVeryLight,u=null==o?void 0:o.currency.symbol;return(0,l.jsxs)("div",{className:"sm:max-w-[420px] w-[90%] h-[350px] \n    shadow-md rounded-md p-5 \n    transition-all duration-300 hover:scale-105 \n    hover:shadow-lg flex flex-col \n    gap-4\n    ".concat("light"===t?"shadow-[#d9d9d9] hover:shadow-[#c1c1c1]":"shadow-[#5d5d5d] hover:shadow-[#7b7b7b]"),children:[(0,l.jsx)("div",{className:"text-lg font-semibold",children:"Recent Users"}),(0,l.jsx)("div",{className:"flex flex-col gap-3 overflow-auto",children:null==r?void 0:r.map(e=>(0,l.jsxs)("div",{style:{borderColor:d},className:"flex justify-between px-1.5  py-2.5 rounded-md border-[.5px] items-center  overflow-auto gap-3 flex-shrink-0",children:[(0,l.jsxs)("div",{children:[e.avatar&&(0,l.jsx)(c.q,{src:e.avatar.url,alt:"its me",size:"lg",radius:"md"}),!e.avatar&&(0,l.jsx)(c.q,{color:"red",alt:"its me",size:"lg",radius:"xl",children:(0,l.jsx)(f.hyG,{color:s})})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"text-sm",children:e.email}),(0,l.jsx)("div",{className:"text-xs",children:e.username})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"text-xs flex-shrink-0 whitespace-nowrap",children:"Account Balance"}),(0,l.jsxs)("div",{className:"text-sm flex-shrink-0",children:[u,e.accountBalance]})]})]},e._id))})]})},h=r(19799),p=r(41557),x=r(43764),v=r(81307),g=r(2349),b=r(2898),y=r(60072),w=Object.defineProperty,j=Object.defineProperties,N=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&$(e,r,t[r]);if(O)for(var r of O(t))S.call(t,r)&&$(e,r,t[r]);return e},E=(e,t)=>j(e,N(t));let P=["light","filled","outline","dot","gradient"],Z={xs:{fontSize:(0,g.h)(9),height:(0,g.h)(16)},sm:{fontSize:(0,g.h)(10),height:(0,g.h)(18)},md:{fontSize:(0,g.h)(11),height:(0,g.h)(20)},lg:{fontSize:(0,g.h)(13),height:(0,g.h)(26)},xl:{fontSize:(0,g.h)(16),height:(0,g.h)(32)}},I={xs:(0,g.h)(4),sm:(0,g.h)(4),md:(0,g.h)(6),lg:(0,g.h)(8),xl:(0,g.h)(10)};var C=(0,y.k)((e,{color:t,radius:r,gradient:l,fullWidth:a},{variant:i,size:n})=>{let{fontSize:o,height:s}=n in Z?Z[n]:Z.md;return{leftSection:{marginRight:`calc(${e.spacing.xs} / 2)`},rightSection:{marginLeft:`calc(${e.spacing.xs} / 2)`},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},root:z(E(z(z({},e.fn.focusStyles()),e.fn.fontStyles()),{fontSize:o,height:s,WebkitTapHighlightColor:"transparent",lineHeight:`calc(${s} - ${(0,g.h)(2)})`,textDecoration:"none",padding:`0 calc(${(0,b.a)({size:n,sizes:e.spacing})} / 1.5)`,boxSizing:"border-box",display:a?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:a?"100%":"auto",textTransform:"uppercase",borderRadius:e.fn.radius(r),fontWeight:700,letterSpacing:(0,g.h)(.25),cursor:"inherit",textOverflow:"ellipsis",overflow:"hidden"}),function({theme:e,variant:t,color:r,size:l,gradient:a}){if(!P.includes(t))return null;if("dot"===t){let t=(0,b.a)({size:l,sizes:I});return{backgroundColor:"transparent",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],border:`${(0,g.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[3]}`,paddingLeft:`calc(${(0,b.a)({size:l,sizes:e.spacing})} / 1.5 - ${t} / 2)`,"&::before":{content:'""',display:"block",width:t,height:t,borderRadius:t,backgroundColor:e.fn.themeColor(r,"dark"===e.colorScheme?4:e.fn.primaryShade("light"),!0),marginRight:t}}}let i=e.fn.variant({color:r,variant:t,gradient:a});return{background:i.background,color:i.color,border:`${(0,g.h)("gradient"===t?0:1)} solid ${i.border}`}}({theme:e,variant:i,color:t,size:n,gradient:l}))}}),R=r(1600),L=Object.defineProperty,_=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&F(e,r,t[r]);if(_)for(var r of _(t))D.call(t,r)&&F(e,r,t[r]);return e},A=(e,t)=>{var r={};for(var l in e)B.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&_)for(var l of _(e))0>t.indexOf(l)&&D.call(e,l)&&(r[l]=e[l]);return r};let W={variant:"light",size:"md",radius:"xl"},q=(0,o.forwardRef)((e,t)=>{let r=(0,x.N4)("Badge",W,e),{className:l,color:a,variant:i,fullWidth:n,children:s,size:c,leftSection:d,rightSection:u,radius:f,gradient:m,classNames:h,styles:p,unstyled:v}=r,g=A(r,["className","color","variant","fullWidth","children","size","leftSection","rightSection","radius","gradient","classNames","styles","unstyled"]),{classes:b,cx:y}=C({fullWidth:n,color:a,radius:f,gradient:m},{classNames:h,styles:p,name:"Badge",unstyled:v,variant:i,size:c});return o.createElement(R.x,T({className:y(b.root,l),ref:t},g),d&&o.createElement("span",{className:b.leftSection},d),o.createElement("span",{className:b.inner},s),u&&o.createElement("span",{className:b.rightSection},u))});q.displayName="@mantine/core/Badge";let U=(0,v.F)(q);var M=r(36708),H=r(72120),V=Object.defineProperty,G=Object.defineProperties,J=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&Y(e,r,t[r]);if(K)for(var r of K(t))X.call(t,r)&&Y(e,r,t[r]);return e},et=(e,t)=>G(e,J(t));let er=e=>(0,H.F4)({from:{boxShadow:`0 0 ${(0,g.h)(.5)} 0 ${e}`,opacity:.6},to:{boxShadow:`0 0 ${(0,g.h)(.5)} ${(0,g.h)(4.4)} ${e}`,opacity:0}});function el(e,t=0){let r={},[l,a]=e.split("-"),i="",n="";return"top"===l&&(r.top=t,n="-50%"),"middle"===l&&(r.top="50%",n="-50%"),"bottom"===l&&(r.bottom=t,n="50%"),"start"===a&&(r.left=t,i="-50%"),"center"===a&&(r.left="50%",i="-50%"),"end"===a&&(r.right=t,i="50%"),r.transform=`translate(${i}, ${n})`,r}var ea=(0,y.k)((e,{radius:t,color:r,position:l,offset:a,inline:i,withBorder:n,withLabel:o,zIndex:s},{size:c})=>{let{background:d}=e.fn.variant({variant:"filled",primaryFallback:!1,color:r||e.primaryColor}),u=(0,g.h)(c);return{root:{position:"relative",display:i?"inline-block":"block"},indicator:et(ee({},el(l,a)),{zIndex:s,position:"absolute",[o?"minWidth":"width"]:u,height:u,display:"flex",justifyContent:"center",alignItems:"center",fontSize:e.fontSizes.xs,paddingLeft:o?`calc(${e.spacing.xs} / 2)`:0,paddingRight:o?`calc(${e.spacing.xs} / 2)`:0,borderRadius:e.fn.radius(t),backgroundColor:e.fn.variant({variant:"filled",primaryFallback:!1,color:r||e.primaryColor}).background,border:n?`${(0,g.h)(2)} solid ${"dark"===e.colorScheme?e.colors.dark[7]:e.white}`:void 0,color:e.white,whiteSpace:"nowrap"}),processing:{animation:`${er(d)} 1000ms linear infinite`},common:et(ee({},el(l,a)),{position:"absolute",[o?"minWidth":"width"]:u,height:u,borderRadius:e.fn.radius(t)})}}),ei=Object.defineProperty,en=Object.getOwnPropertySymbols,eo=Object.prototype.hasOwnProperty,es=Object.prototype.propertyIsEnumerable,ec=(e,t,r)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ed=(e,t)=>{for(var r in t||(t={}))eo.call(t,r)&&ec(e,r,t[r]);if(en)for(var r of en(t))es.call(t,r)&&ec(e,r,t[r]);return e},eu=(e,t)=>{var r={};for(var l in e)eo.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&en)for(var l of en(e))0>t.indexOf(l)&&es.call(e,l)&&(r[l]=e[l]);return r};let ef={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1,size:10,radius:1e3,zIndex:(0,M.w)("app")},em=(0,o.forwardRef)((e,t)=>{let r=(0,x.N4)("Indicator",ef,e),{children:l,position:a,offset:i,size:n,radius:s,inline:c,withBorder:d,className:u,color:f,styles:m,label:h,classNames:p,disabled:v,zIndex:g,unstyled:b,processing:y,variant:w}=r,j=eu(r,["children","position","offset","size","radius","inline","withBorder","className","color","styles","label","classNames","disabled","zIndex","unstyled","processing","variant"]),{classes:N,cx:O}=ea({position:a,offset:i,radius:s,inline:c,color:f,withBorder:d,zIndex:g,withLabel:!!h},{name:"Indicator",classNames:p,styles:m,unstyled:b,variant:w,size:n});return o.createElement(R.x,ed({ref:t,className:O(N.root,u)},j),!v&&o.createElement(o.Fragment,null,o.createElement("div",{className:O(N.indicator,N.common)},h),y&&o.createElement("div",{className:O(N.processing,N.common)})),l)});em.displayName="@mantine/core/Indicator";var eh=r(50447),ep=r(34751),ex=r(68919),ev=r(12801),eg=()=>{var e;let{data:t}=(0,ep.useSession)(),r=null===(e=null==t?void 0:t.user)||void 0===e?void 0:e.id,[n,c]=(0,o.useState)(),[f,x]=(0,o.useState)(),[v,g]=(0,o.useState)(),[b,y]=(0,o.useState)(),{company:w}=(0,a.Z)(),{mode:j}=(0,i.Z)(),N=null==w?void 0:w.color.primaryLight,O=null==w?void 0:w.currency.symbol,k=(0,o.useCallback)(async()=>{try{let{data:e}=await eh.Z.get("/api/admin/users/".concat(r));if(e.error)throw Error(e.error);let{data:t}=await eh.Z.get("/api/admin/transactions/".concat(r));if(t.error)throw Error(t.error);c(e),x(t);let l=e.reverse().slice(0,7),a=t.reverse().slice(0,7);g(l),y(a)}catch(e){ex.Am.error(e.message)}},[r]);if((0,o.useEffect)(()=>{r&&k()},[r,k]),!n||!f||!v||!b)return(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(p.a,{color:N})});let S=n.length,$=f.length,z=n.find(e=>e._id===r),E=f.filter(e=>"deposit"===e.category&&"successful"===e.status),P=E.reduce((e,t)=>e+t.amount,0),Z=f.filter(e=>"transfer"===e.category&&"Withdrawal Request"===e.title&&"successful"===e.status),I=Z.reduce((e,t)=>e+t.amount,0);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,l.jsxs)("div",{className:"h-[50px] rounded-md \n        flex px-5 items-center justify-between z-10\n      ".concat("light"===j?"bg-[#ebebeb]":"bg-[#3e3e3e]"),children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[null==z?void 0:z.fullname," ",(0,l.jsx)(U,{color:"dark",children:(null==z?void 0:z.manager)==="yes"?"Manager":"Admin"})]}),(0,l.jsx)(em,{children:(0,l.jsx)(ev.Z3q,{size:24})})]}),(0,l.jsx)("div",{className:"text-xl sm:text-2xl font-bold \n    flex justify-center",children:"Dashboard"}),(0,l.jsxs)("div",{className:"w-full flex items-center gap-4 justify-center flex-wrap",children:[(0,l.jsx)(s,{title:"Total Users",detail:S,icon:ev.I$}),(0,l.jsx)(s,{title:"Total Deposits",detail:"".concat(O).concat((0,h.Z)(P)),icon:d.t9$}),(0,l.jsx)(s,{title:"Total Withdrawals",detail:"".concat(O).concat((0,h.Z)(I)),icon:d.InZ}),(0,l.jsx)(s,{title:"Number of Transactions",detail:$,icon:d.x82})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center",children:[(0,l.jsx)(m,{users:v}),(0,l.jsx)(u,{transactions:b})]})]})})}},32131:function(e,t,r){"use strict";var l=r(82561);let a=(0,l.Ue)(e=>({company:null,onCompany:t=>e({company:t})}));t.Z=a},22450:function(e,t,r){"use strict";var l=r(82561);let a=()=>{let e=localStorage.getItem("theme-mode");return e&&"light"!==e?"dark":"light"},i=()=>(localStorage.setItem("theme-mode","dark"),{mode:"dark"}),n=()=>(localStorage.setItem("theme-mode","light"),{mode:"light"}),o=(0,l.Ue)(e=>({mode:"light",onDarkMode:()=>e(i),onLightMode:()=>e(n),onInitialMode:()=>e({mode:a()})}));t.Z=o},19799:function(e,t){"use strict";t.Z=e=>e.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})}},function(e){e.O(0,[3296,5852,5625,2815,1114,4751,4941,9253,2961,1744],function(){return e(e.s=53664)}),_N_E=e.O()}]);