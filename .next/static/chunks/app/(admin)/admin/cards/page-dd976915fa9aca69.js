(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4970],{81473:function(e,t,l){Promise.resolve().then(l.bind(l,50963))},50963:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return v}});var s=l(9268),r=l(3338),a=l(32131),n=l(22450),c=l(56008),o=l(86006),i=l(17915),d=e=>{let{opened:t,onClose:l,onDelete:a,loading:n}=e;return(0,s.jsx)(i.Z,{title:"Delete Card",opened:t,onClose:l,children:(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsx)("div",{children:"Are you sure you want to delete this card"}),(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsx)(r.Z,{outline:!0,loading:n,label:"Yes",onClick:a}),(0,s.jsx)(r.Z,{label:"No",onClick:l})]})]})})},x=l(68919),m=l(50447),h=e=>{let{mode:t}=(0,n.Z)(),{card:l,getCards:i}=e;(0,c.useRouter)();let[h,f]=(0,o.useState)(!1),[u,v]=(0,o.useState)(!1),{company:j}=(0,a.Z)();null==j||j.color.primaryLight;let p=async()=>{try{v(!0);let{data:e}=await m.Z.delete("/api/admin/cards/".concat(l._id));if(e.error)throw Error(e.error);i(),x.Am.success("Card deleted")}catch(e){x.Am.error(e.message)}finally{v(!1)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"max-w-[250px] w-[90%] min-h-[300px] \n    shadow-md rounded-md p-5 \n    transition-all duration-300 hover:scale-105 \n    hover:shadow-lg flex flex-col items-center \n    gap-4 justify-center\n    ".concat("light"===t?"shadow-[#d9d9d9] hover:shadow-[#c1c1c1]":"shadow-[#5d5d5d] hover:shadow-[#7b7b7b]"),children:[(0,s.jsxs)("div",{className:"flex flex-col gap-3 w-full",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"Name On Card: "}),(0,s.jsx)("div",{className:"text-sm",children:l.cardholderName})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"Card Number: "}),(0,s.jsx)("div",{className:"text-sm",children:l.cardNumber})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"Expire Date: "}),(0,s.jsx)("div",{className:"text-sm",children:l.expireDate})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"CVC: "}),(0,s.jsx)("div",{className:"text-sm",children:l.cvc})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"Country: "}),(0,s.jsx)("div",{className:"text-sm",children:l.country})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"City/State: "}),(0,s.jsx)("div",{className:"text-sm",children:l.city})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"Street Address: "}),(0,s.jsx)("div",{className:"text-sm",children:l.address})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold",children:"Postalcode/Zipcode: "}),(0,s.jsx)("div",{className:"text-sm",children:l.zipCode})]})]}),(0,s.jsx)(r.Z,{onClick:()=>f(!0),label:"Delete"})]}),(0,s.jsx)(d,{opened:h,onClose:()=>f(!1),onDelete:p,loading:u})]})},f=l(41557),u=l(1033),v=()=>{let[e,t]=(0,o.useState)(),{company:l}=(0,a.Z)(),r=null==l?void 0:l.color.primaryLight,n=(0,o.useCallback)(async()=>{try{let{data:e}=await m.Z.get("/api/admin/cards");if(e.error)throw Error(e.error);t(e)}catch(e){x.Am.error(e.message)}},[]);return((0,o.useEffect)(()=>{n()},[n]),e)?(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)("div",{className:"text-xl sm:text-2xl font-bold \n        flex justify-center",children:"Cards"}),(0,s.jsxs)("div",{className:"flex justify-center items-center flex-wrap  gap-4",children:[e.map(e=>(0,s.jsx)(h,{getCards:n,card:e},e._id)),e.length<=0&&(0,s.jsxs)("div",{className:"flex justify-center flex-col items-center  min-h-[80vh]",children:[(0,s.jsx)(u.kuQ,{color:r,size:100}),(0,s.jsx)("div",{className:"font-semibold text-lg",children:"No Cards Availaible"})]})]})]}):(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(f.a,{color:r})})}},3338:function(e,t,l){"use strict";var s=l(9268),r=l(41557);l(86006);var a=l(32131);t.Z=e=>{let{label:t,onClick:l,disabled:n,outline:c,small:o,icon:i,loading:d,type:x,primaryColor:m}=e,{company:h}=(0,a.Z)();return null!=m||null==h||h.color.primary,null==h||h.color.primaryVeryLight,(0,s.jsxs)("button",{type:x,style:{backgroundColor:"#9D00FF"},onClick:l,disabled:n||d,className:"relative disabled:opacity-70 disabled:cursor-not-allowed \n      rounded-lg hover:opacity-80 transition \n      w-full disabled:active:scale-[1] active:scale-[.95] \n      flex justify-center items-center gap-2 \n      ".concat(c?"text-slate-700":"text-white"," \n      ").concat(o?"h-[40px]":"h-[55px]"," \n      ").concat(o?"text-sm":" text-base"," \n      ").concat(o?"font-light":"font-semibold"," \n      ").concat(o?"border-[1px]":"border-2"),children:[!d&&t,i&&!d&&(0,s.jsx)(i,{size:24}),d&&(0,s.jsx)(r.a,{size:24,color:c?m:"#ffff"})]})}},32131:function(e,t,l){"use strict";var s=l(82561);let r=(0,s.Ue)(e=>({company:null,onCompany:t=>e({company:t})}));t.Z=r},22450:function(e,t,l){"use strict";var s=l(82561);let r=()=>{let e=localStorage.getItem("theme-mode");return e&&"light"!==e?"dark":"light"},a=()=>(localStorage.setItem("theme-mode","dark"),{mode:"dark"}),n=()=>(localStorage.setItem("theme-mode","light"),{mode:"light"}),c=(0,s.Ue)(e=>({mode:"light",onDarkMode:()=>e(a),onLightMode:()=>e(n),onInitialMode:()=>e({mode:r()})}));t.Z=c},17915:function(e,t,l){"use strict";var s=l(9268),r=l(40931);l(86006);var a=l(22450);t.Z=e=>{let{opened:t,onClose:l,size:n,title:c,children:o,fullScreen:i}=e,{mode:d}=(0,a.Z)();return(0,s.jsx)(r.u,{fullScreen:i,opened:t,onClose:l,title:c,centered:!0,size:n||"md",classNames:{header:"".concat("light"===d?"bg-white text-slate-700":"bg-[#121212] text-white"),body:"".concat("light"===d?"bg-white":"bg-[#121212]"),content:"".concat("light"===d?"text-slate-700":"text-white"),title:"font-semibold text-lg text-black"},children:o})}},56008:function(e,t,l){e.exports=l(8170)},83270:function(e,t,l){"use strict";l.d(t,{w_:function(){return o}});var s=l(86006),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=s.createContext&&s.createContext(r),n=function(){return(n=Object.assign||function(e){for(var t,l=1,s=arguments.length;l<s;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(l[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>t.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(l[s[r]]=e[s[r]]);return l};function o(e){return function(t){return s.createElement(i,n({attr:n({},e.attr)},t),function e(t){return t&&t.map(function(t,l){return s.createElement(t.tag,n({key:l},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var l,r=e.attr,a=e.size,o=e.title,i=c(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),s.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:l,style:n(n({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&s.createElement("title",null,o),e.children)};return void 0!==a?s.createElement(a.Consumer,null,function(e){return t(e)}):t(r)}}},function(e){e.O(0,[9173,2815,1114,931,9253,2961,1744],function(){return e(e.s=81473)}),_N_E=e.O()}]);