(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8755],{72703:function(e,t,l){Promise.resolve().then(l.bind(l,95540))},95540:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return y}});var a=l(9268),s=l(3338),n=l(88001),r=l(17915),i=l(54571),o=l(50447),c=l(86006),d=l(68919),u=e=>{let{opened:t,onClose:l,getPlans:u}=e,[m,x]=(0,c.useState)(!1),[f,h]=(0,c.useState)({planName:"",duration:"",minAmount:"",maxAmount:"",ROIDaily:"",totalROI:"",referralBonus:"0"}),v=(0,c.useMemo)(()=>(0,i.h)(Number(f.totalROI)/Number(f.duration))?(Number(f.totalROI)/Number(f.duration)).toFixed(1):"",[f.duration,f.totalROI]);(0,c.useEffect)(()=>{h({...f,ROIDaily:v})},[v]);let g=async()=>{try{if(+f.minAmount>+f.maxAmount)throw Error("Minimum Amount cannot be greater than Maximum Amount");x(!0);let e=await o.Z.post("/api/plan",f);if(e.data.error)throw Error(e.data.error);l(),u()}catch(e){d.Am.error(e.message)}finally{x(!1)}};return(0,a.jsx)(r.Z,{size:"lg",title:"New Package",opened:t,onClose:l,children:(0,a.jsxs)("div",{className:"flex flex-col justify-between gap-3",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,a.jsx)("div",{children:"Package Name:"}),(0,a.jsx)(n.Z,{value:f.planName,onChange:e=>h({...f,planName:e.target.value})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full gap-1.5",children:[(0,a.jsx)("div",{children:"Duration (days):"}),(0,a.jsx)(n.Z,{value:f.duration,onChange:e=>{(0,i.h)(+e.target.value)&&h({...f,duration:e.target.value})}})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full gap-1.5",children:[(0,a.jsx)("div",{children:"Referral Bonus (%):"}),(0,a.jsx)(n.Z,{value:f.referralBonus,onChange:e=>{(0,i.h)(+e.target.value)&&h({...f,referralBonus:e.target.value})}})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full gap-1.5",children:[(0,a.jsx)("div",{children:"Total ROI (%):"}),(0,a.jsx)(n.Z,{value:f.totalROI,onChange:e=>{(0,i.h)(+e.target.value)&&h({...f,totalROI:e.target.value})}})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full gap-1.5",children:[(0,a.jsx)("div",{children:"Daily ROI (%):"}),(0,a.jsx)(n.Z,{value:f.ROIDaily,disabled:!0,onChange:()=>{}})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full gap-1.5",children:[(0,a.jsx)("div",{children:"Minimum Deposit ($):"}),(0,a.jsx)(n.Z,{value:f.minAmount,onChange:e=>{(0,i.h)(+e.target.value)&&h({...f,minAmount:e.target.value})}})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full gap-1.5",children:[(0,a.jsx)("div",{children:"Maximum Deposit ($):"}),(0,a.jsx)(n.Z,{value:f.maxAmount,onChange:e=>{(0,i.h)(+e.target.value)&&h({...f,maxAmount:e.target.value})}})]})]}),(0,a.jsx)(s.Z,{loading:m,label:"Add",onClick:g})]})})},m=l(32131),x=l(22450),f=l(81565),h=l(56008),v=l(12801),g=e=>{let{mode:t}=(0,x.Z)(),{planName:l,minAmount:n,maxAmount:r,ROIDaily:i,totalROI:o,duration:c,createdAt:d,referralBonus:u,id:g}=e,j=(0,h.useRouter)(),p=new Date("".concat(d)),{company:y}=(0,m.Z)(),N=null==y?void 0:y.color.primaryLight,b=null==y?void 0:y.currency.symbol;return(0,a.jsxs)("div",{className:"max-w-[250px] w-[90%] min-h-[300px] \n    shadow-md rounded-md p-5 \n    transition-all duration-300 hover:scale-105 \n    hover:shadow-lg flex flex-col items-center \n    gap-4 justify-between\n    ".concat("light"===t?"shadow-[#d9d9d9] hover:shadow-[#c1c1c1]":"shadow-[#5d5d5d] hover:shadow-[#7b7b7b]"),children:[(0,a.jsx)("div",{children:(0,a.jsx)(v.EIQ,{color:N,size:24})}),(0,a.jsxs)("div",{className:"flex flex-col gap-1.5 items-center text-center w-full",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"Name:"}),(0,a.jsx)("div",{className:"font-bold",children:l})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"Mini Deposit:"}),(0,a.jsxs)("div",{className:"font-bold",children:[b,n]})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"Max Deposit:"}),(0,a.jsxs)("div",{className:"font-bold",children:[b,r]})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"Referral Bonus:"}),(0,a.jsx)("div",{className:"font-bold",children:0!==u&&u?"".concat(u,"%"):"No Bonus"})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"Total ROI:"}),(0,a.jsxs)("div",{className:"font-bold",children:[o,"%"]})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"ROI Daily:"}),(0,a.jsxs)("div",{className:"font-bold",children:[i,"%"]})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"Duration (days):"}),(0,a.jsx)("div",{className:"font-bold",children:c})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-1 w-full",children:[(0,a.jsx)("div",{className:"text-sm",children:"Created At:"}),(0,a.jsx)("div",{className:"font-bold",children:(0,f.Z)(p)})]})]}),(0,a.jsx)(s.Z,{onClick:()=>j.push("/admin/settings/plans/".concat(g)),label:"View Details"})]})},j=l(41557),p=l(1033),y=()=>{let[e,t]=(0,c.useState)([]),[l,n]=(0,c.useState)(!1),[r,i]=(0,c.useState)(!1),{company:x}=(0,m.Z)(),f=null==x?void 0:x.color.primary,h=null==x?void 0:x.color.primaryLight,v=(0,c.useCallback)(async()=>{try{n(!0);let{data:e}=await o.Z.get("/api/plan");if(e.error)throw Error(e.error);t(e.reverse())}catch(e){d.Am.error(e.message)}finally{n(!1)}},[]);return(0,c.useEffect)(()=>{v()},[v]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col w-full gap-5",children:[(0,a.jsx)("div",{className:"text-xl sm:text-2xl font-bold \n        flex justify-center",children:"Packages"}),(0,a.jsx)("div",{className:"flex w-full justify-center sm:justify-end",children:(0,a.jsx)("div",{className:"w-full max-w-[150px]",children:(0,a.jsx)(s.Z,{small:!0,onClick:()=>i(!0),label:"Add New"})})}),(0,a.jsxs)("div",{className:"flex gap-3 items-center  flex-wrap justify-center",children:[!l&&e.map(e=>(0,a.jsx)(g,{id:e._id,planName:e.planName,minAmount:e.minAmount,maxAmount:e.maxAmount,ROIDaily:e.ROIDaily,totalROI:e.totalROI,duration:e.duration,createdAt:e.createdAt,referralBonus:e.referralBonus},e._id)),!l&&e.length<=0&&(0,a.jsxs)("div",{className:"flex justify-center flex-col items-center  min-h-[70vh]",children:[(0,a.jsx)(p.kuQ,{color:h,size:100}),(0,a.jsx)("div",{className:"font-semibold text-lg",children:"No Plans Availaible"})]}),l&&(0,a.jsx)(j.a,{color:f})]})]}),(0,a.jsx)(u,{getPlans:v,opened:r,onClose:()=>i(!1)})]})}},3338:function(e,t,l){"use strict";var a=l(9268),s=l(41557);l(86006);var n=l(32131);t.Z=e=>{let{label:t,onClick:l,disabled:r,outline:i,small:o,icon:c,loading:d,type:u,primaryColor:m}=e,{company:x}=(0,n.Z)();return null!=m||null==x||x.color.primary,null==x||x.color.primaryVeryLight,(0,a.jsxs)("button",{type:u,style:{backgroundColor:"#9D00FF"},onClick:l,disabled:r||d,className:"relative disabled:opacity-70 disabled:cursor-not-allowed \n      rounded-lg hover:opacity-80 transition \n      w-full disabled:active:scale-[1] active:scale-[.95] \n      flex justify-center items-center gap-2 \n      ".concat(i?"text-slate-700":"text-white"," \n      ").concat(o?"h-[40px]":"h-[55px]"," \n      ").concat(o?"text-sm":" text-base"," \n      ").concat(o?"font-light":"font-semibold"," \n      ").concat(o?"border-[1px]":"border-2"),children:[!d&&t,c&&!d&&(0,a.jsx)(c,{size:24}),d&&(0,a.jsx)(s.a,{size:24,color:i?m:"#ffff"})]})}},88001:function(e,t,l){"use strict";var a=l(9268),s=l(86006),n=l(32131);t.Z=e=>{let{maxLength:t,disabled:l,value:r,onChange:i,secureEntry:o,placeholder:c,icon:d,iconAction:u,id:m}=e,[x,f]=(0,s.useState)(!1),{company:h}=(0,n.Z)();null==h||h.color.primary,null==h||h.color.primaryLight;let v=null==h?void 0:h.color.primaryVeryLight;return(0,a.jsxs)("div",{style:{backgroundColor:"white",borderColor:v},"aria-disabled":!0,className:"flex justify-between w-full \n    items-center px-3 rounded-lg border \n    ".concat(l&&"bg-gray-100 cursor-not-allowed"),children:[(0,a.jsx)("input",{maxLength:t,onFocus:()=>f(!0),onBlur:()=>f(!1),disabled:l,id:m,type:o?"password":"text",placeholder:c,value:r,onChange:i,className:"py-4 outline-none w-full \n        h-full pr-2 bg-inherit \n        text-gray-500 font-semibold \n        disabled:cursor-not-allowed"}),d&&(0,a.jsx)(d,{onClick:u,size:24,className:"cursor-pointer text-gray-600"})]})}},32131:function(e,t,l){"use strict";var a=l(82561);let s=(0,a.Ue)(e=>({company:null,onCompany:t=>e({company:t})}));t.Z=s},22450:function(e,t,l){"use strict";var a=l(82561);let s=()=>{let e=localStorage.getItem("theme-mode");return e&&"light"!==e?"dark":"light"},n=()=>(localStorage.setItem("theme-mode","dark"),{mode:"dark"}),r=()=>(localStorage.setItem("theme-mode","light"),{mode:"light"}),i=(0,a.Ue)(e=>({mode:"light",onDarkMode:()=>e(n),onLightMode:()=>e(r),onInitialMode:()=>e({mode:s()})}));t.Z=i},17915:function(e,t,l){"use strict";var a=l(9268),s=l(40931);l(86006);var n=l(22450);t.Z=e=>{let{opened:t,onClose:l,size:r,title:i,children:o,fullScreen:c}=e,{mode:d}=(0,n.Z)();return(0,a.jsx)(s.u,{fullScreen:c,opened:t,onClose:l,title:i,centered:!0,size:r||"md",classNames:{header:"".concat("light"===d?"bg-white text-slate-700":"bg-[#121212] text-white"),body:"".concat("light"===d?"bg-white":"bg-[#121212]"),content:"".concat("light"===d?"text-slate-700":"text-white"),title:"font-semibold text-lg text-black"},children:o})}},81565:function(e,t){"use strict";t.Z=e=>{let t=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,year:"2-digit"}).format(e);return t}},54571:function(e,t,l){"use strict";function a(e){return"number"==typeof e&&Number.isFinite(e)}l.d(t,{h:function(){return a}})},56008:function(e,t,l){e.exports=l(8170)},83270:function(e,t,l){"use strict";l.d(t,{w_:function(){return o}});var a=l(86006),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),r=function(){return(r=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var s in t=arguments[l])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},i=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>t.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(l[a[s]]=e[a[s]]);return l};function o(e){return function(t){return a.createElement(c,r({attr:r({},e.attr)},t),function e(t){return t&&t.map(function(t,l){return a.createElement(t.tag,r({key:l},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var l,s=e.attr,n=e.size,o=e.title,c=i(e,["attr","size","title"]),d=n||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),a.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:l,style:r(r({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==n?a.createElement(n.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){e.O(0,[3296,9173,2815,1114,931,9253,2961,1744],function(){return e(e.s=72703)}),_N_E=e.O()}]);