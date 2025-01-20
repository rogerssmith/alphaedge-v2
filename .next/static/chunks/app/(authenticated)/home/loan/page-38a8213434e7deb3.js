(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2546],{44651:function(e,t,n){Promise.resolve().then(n.bind(n,14559))},14559:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var l=n(9268),o=n(86006),a=n(3338),r=n(88001),s=n(12801);n(32233);var i=n(22450),c=n(56008),u=n(19799),d=n(81565),m=n(32131),h=e=>{let{mode:t}=(0,i.Z)(),{push:n}=(0,c.useRouter)(),{title:o,amount:a,status:r,category:h,createdAt:x,senderName:f,id:g}=e,v=x&&new Date(x),b=(0,d.Z)(v),{company:p}=(0,m.Z)(),y=null==p?void 0:p.color.primary,w=null==p?void 0:p.color.primaryLight,j=null==p?void 0:p.currency.symbol;return(0,l.jsxs)("div",{onClick:()=>n("/transaction-info/".concat(g)),className:"flex items-center justify-between \n    hover:shadow-lg shadow-md py-4 \n    px-3 rounded-lg cursor-pointer  \n    gap-3 active:scale-95 transition duration-300\n    ".concat(""," \n    ").concat("action-needed"===r&&"animate-bounce"),children:[(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)(s.ZXh,{color:"light"===t?y:w,size:24}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-semibold\n            ".concat("light"===t?"text-gray-500":"text-white"),children:o}),(0,l.jsx)("div",{className:"font-semibold text-sm text-gray-300",children:"".concat(b," . ").concat("money-received"===h?f:"")})]})]}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsxs)("div",{className:"font-bold flex flex-col items-end\n        ".concat("light"===t?"text-slate-700":"text-white"),children:[(0,l.jsxs)("div",{children:[j,(0,u.Z)(+a)]}),(0,l.jsxs)("div",{className:"font-normal italic text-sm \n          ".concat("pending"===r&&"text-[#2196f3]"," \n          ").concat("successful"===r&&"text-[#00c853]"," \n          ").concat("processing"===r&&"text-[#ff9800]"," \n          ").concat("action-needed"===r&&"text-rose-400"," \n          ").concat("rejected"===r&&"text-[#f44336]"),children:["pending"===r&&"Pending...","successful"===r&&"Successful","processing"===r&&"Processing...","action-needed"===r&&"Action Needed","rejected"===r&&"Rejected"]})]}),(0,l.jsx)(s.H_v,{color:"light"===t?y:w,size:24})]})]})},x=n(17915),f=n(79217),g=n(50447),v=n(68919),b=e=>{let{mode:t}=(0,i.Z)(),[n,s]=(0,o.useState)(""),u=(0,c.useRouter)(),{opened:d,onClose:h}=e,[b,p]=(0,o.useState)(!1),{company:y}=(0,m.Z)(),[w,j]=(0,o.useState)(null),[N,C]=(0,o.useState)(null),Z=""===n.trim()||0>=Number(n)||!N||!w,S=async()=>{try{if(Z)throw Error("Make Sure you have filled all the necessary input fields");if(Number(n)<Number(null==y?void 0:y.loan.minimum))throw Error("Minimum amount to Request is $".concat(null==y?void 0:y.loan.minimum));if(Number(n)>Number(null==y?void 0:y.loan.maximum))throw Error("Maximum amount to Request is $".concat(null==y?void 0:y.loan.maximum));p(!0);let{data:e}=await g.Z.post("/api/loan/request",{amount:Number(n),loanDuration:N,loanReason:w});if(e.error)throw Error(e.error);let t=e._id;u.push("/transaction-info/".concat(t))}catch(e){v.Am.error(e.message),console.log(e.message)}finally{p(!1)}};return(0,l.jsx)(x.Z,{title:"Get a loan",opened:d,onClose:h,children:(0,l.jsxs)("div",{className:"h-fit min-h-[450px] flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,l.jsx)(r.Z,{value:n,onChange:e=>{isNaN(Number(e.target.value))||s(e.target.value)},placeholder:"How much do you want?"}),(0,l.jsx)(f.Ph,{disabled:!1,placeholder:"Select one",label:"Reason for getting a loan",value:w,onChange:j,data:[{value:"personal-expenses",label:"Personal Expenses"},{value:"debt-consolidation",label:"Debt Consolidation"},{value:"emergency-situations",label:"Emergency Situations"},{value:"education",label:"Education/Student loan"}],classNames:{input:"border-rose-300 focus:border-rose-500 h-[55px]",label:"".concat("light"==t?"text-slate-700":"text-white"," text-base font-medium")}}),(0,l.jsx)(f.Ph,{disabled:!1,placeholder:"Select one",label:"How long will it take you to pay back",value:N,onChange:C,data:[{value:"one-month",label:"1 Month - 2% Interest"},{value:"two-months",label:"2 Months - 5% Interest"},{value:"three-months",label:"3 Months - 9% Interest"},{value:"six-months",label:"6 Months - 14% Interest"},{value:"one-year",label:"1 Year - 25% Interest"}],classNames:{input:"border-rose-300 focus:border-rose-500 h-[55px]",label:"".concat("light"==t?"text-slate-700":"text-white"," text-base font-medium")}})]}),(0,l.jsx)(a.Z,{loading:b,onClick:S,label:"Request Loan"})]})})},p=n(1033),y=e=>{let{user:t,transactions:n}=e,{mode:d}=(0,i.Z)(),[x,f]=(0,o.useState)(!1),g=(0,c.useRouter)(),[v,y]=(0,o.useState)(""),[w,j]=(0,o.useState)(n),{company:N}=(0,m.Z)(),C=null==N?void 0:N.color.primaryLight,Z=null==N?void 0:N.currency.symbol,S=(0,o.useCallback)(e=>{let t=e.target.value;y(t);let l=n.slice(0),o=l.filter(e=>e.title.toLowerCase().includes(t.toLowerCase())||e.status.toLowerCase().includes(t.toLowerCase()));j(o)},[n]);return(null==N?void 0:N.loan.status)==="off"?(g.back(),(0,l.jsx)("div",{className:"font-bold text-3xl sm:text-4xl flex justify-center w-full\n  ".concat("light"===d?"text-slate-700":"text-white"),children:"Loan Currently Not Available"})):(0,l.jsxs)("div",{className:"flex flex-col w-full gap-6",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 justify-between px-3",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,l.jsx)("div",{className:"text-xs font-medium \n          ".concat("light"===d?"text-slate-700":"text-white"),children:"You Owe"}),(0,l.jsxs)("div",{className:"font-bold text-3xl sm:text-4xl \n          ".concat("light"===d?"text-slate-700":"text-white"),children:[Z,(0,u.Z)(t.loanBalance)]})]}),(0,l.jsx)(a.Z,{onClick:()=>f(!0),label:"Get a Loan"})]}),(0,l.jsx)(r.Z,{value:v,onChange:S,icon:s.U41,placeholder:"Search Transaction"}),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[w.length>0&&w.map(e=>(0,l.jsx)(h,{id:e._id,title:e.title,createdAt:e.createdAt,status:e.status,category:e.category,amount:e.amount,senderName:e.senderName},e._id)),w.length<=0&&(0,l.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[(0,l.jsx)(p.kuQ,{color:C,size:100}),(0,l.jsx)("div",{className:"font-semibold text-lg\n              ".concat("light"===d?"text-slate-700":"text-white"),children:"No Availaible transactions"})]})]}),(0,l.jsx)(b,{opened:x,onClose:()=>f(!1)})]})},w=n(41557),j=n(34751),N=()=>{var e;let{data:t}=(0,j.useSession)(),n=null===(e=null==t?void 0:t.user)||void 0===e?void 0:e.id,[a,r]=(0,o.useState)(),[s,c]=(0,o.useState)(),{company:u}=(0,m.Z)(),{mode:d}=(0,i.Z)(),h=null==u?void 0:u.color.primary,x=null==u?void 0:u.color.primaryLight;if((0,o.useEffect)(()=>{let e=async()=>{try{let{data:e}=await (0,g.Z)("/api/transactions/user/".concat(n)),{data:t}=await (0,g.Z)("/api/users/".concat(n));if(e.error||t.error)throw Error("Something went wrong getting user or transactions");r(t),c(e)}catch(e){v.Am.error(e.message)}};n&&e()},[n]),!a||!s)return(0,l.jsx)("div",{className:"flex w-full justify-center items-center  min-h-[60vh]",children:(0,l.jsx)(w.a,{color:"light"===d?h:x})});let f=s.filter(e=>"loan"===e.category),b=f.slice(0).reverse();return(0,l.jsx)(y,{user:a,transactions:b})}},3338:function(e,t,n){"use strict";var l=n(9268),o=n(41557);n(86006);var a=n(32131);t.Z=e=>{let{label:t,onClick:n,disabled:r,outline:s,small:i,icon:c,loading:u,type:d,primaryColor:m}=e,{company:h}=(0,a.Z)();return null!=m||null==h||h.color.primary,null==h||h.color.primaryVeryLight,(0,l.jsxs)("button",{type:d,style:{backgroundColor:"#9D00FF"},onClick:n,disabled:r||u,className:"relative disabled:opacity-70 disabled:cursor-not-allowed \n      rounded-lg hover:opacity-80 transition \n      w-full disabled:active:scale-[1] active:scale-[.95] \n      flex justify-center items-center gap-2 \n      ".concat(s?"text-slate-700":"text-white"," \n      ").concat(i?"h-[40px]":"h-[55px]"," \n      ").concat(i?"text-sm":" text-base"," \n      ").concat(i?"font-light":"font-semibold"," \n      ").concat(i?"border-[1px]":"border-2"),children:[!u&&t,c&&!u&&(0,l.jsx)(c,{size:24}),u&&(0,l.jsx)(o.a,{size:24,color:s?m:"#ffff"})]})}},88001:function(e,t,n){"use strict";var l=n(9268),o=n(86006),a=n(32131);t.Z=e=>{let{maxLength:t,disabled:n,value:r,onChange:s,secureEntry:i,placeholder:c,icon:u,iconAction:d,id:m}=e,[h,x]=(0,o.useState)(!1),{company:f}=(0,a.Z)();null==f||f.color.primary,null==f||f.color.primaryLight;let g=null==f?void 0:f.color.primaryVeryLight;return(0,l.jsxs)("div",{style:{backgroundColor:"white",borderColor:g},"aria-disabled":!0,className:"flex justify-between w-full \n    items-center px-3 rounded-lg border \n    ".concat(n&&"bg-gray-100 cursor-not-allowed"),children:[(0,l.jsx)("input",{maxLength:t,onFocus:()=>x(!0),onBlur:()=>x(!1),disabled:n,id:m,type:i?"password":"text",placeholder:c,value:r,onChange:s,className:"py-4 outline-none w-full \n        h-full pr-2 bg-inherit \n        text-gray-500 font-semibold \n        disabled:cursor-not-allowed"}),u&&(0,l.jsx)(u,{onClick:d,size:24,className:"cursor-pointer text-gray-600"})]})}},32131:function(e,t,n){"use strict";var l=n(82561);let o=(0,l.Ue)(e=>({company:null,onCompany:t=>e({company:t})}));t.Z=o},22450:function(e,t,n){"use strict";var l=n(82561);let o=()=>{let e=localStorage.getItem("theme-mode");return e&&"light"!==e?"dark":"light"},a=()=>(localStorage.setItem("theme-mode","dark"),{mode:"dark"}),r=()=>(localStorage.setItem("theme-mode","light"),{mode:"light"}),s=(0,l.Ue)(e=>({mode:"light",onDarkMode:()=>e(a),onLightMode:()=>e(r),onInitialMode:()=>e({mode:o()})}));t.Z=s},17915:function(e,t,n){"use strict";var l=n(9268),o=n(40931);n(86006);var a=n(22450);t.Z=e=>{let{opened:t,onClose:n,size:r,title:s,children:i,fullScreen:c}=e,{mode:u}=(0,a.Z)();return(0,l.jsx)(o.u,{fullScreen:c,opened:t,onClose:n,title:s,centered:!0,size:r||"md",classNames:{header:"".concat("light"===u?"bg-white text-slate-700":"bg-[#121212] text-white"),body:"".concat("light"===u?"bg-white":"bg-[#121212]"),content:"".concat("light"===u?"text-slate-700":"text-white"),title:"font-semibold text-lg text-black"},children:i})}},81565:function(e,t){"use strict";t.Z=e=>{let t=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,year:"2-digit"}).format(e);return t}},19799:function(e,t){"use strict";t.Z=e=>e.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})},32233:function(){},56008:function(e,t,n){e.exports=n(8170)},83270:function(e,t,n){"use strict";n.d(t,{w_:function(){return i}});var l=n(86006),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(o),r=function(){return(r=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]]);return n};function i(e){return function(t){return l.createElement(c,r({attr:r({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return l.createElement(t.tag,r({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,o=e.attr,a=e.size,i=e.title,c=s(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),l.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:r(r({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return void 0!==a?l.createElement(a.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[3296,9173,2815,1114,931,4751,3484,9217,5478,9253,2961,1744],function(){return e(e.s=44651)}),_N_E=e.O()}]);