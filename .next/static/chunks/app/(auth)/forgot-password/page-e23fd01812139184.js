(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9985],{87939:function(e,t,r){Promise.resolve().then(r.bind(r,51406))},3338:function(e,t,r){"use strict";var o=r(9268),n=r(41557);r(86006);var l=r(32131);t.Z=e=>{let{label:t,onClick:r,disabled:s,outline:a,small:i,icon:c,loading:u,type:d,primaryColor:m}=e,{company:f}=(0,l.Z)();return null!=m||null==f||f.color.primary,null==f||f.color.primaryVeryLight,(0,o.jsxs)("button",{type:d,style:{backgroundColor:"#9D00FF"},onClick:r,disabled:s||u,className:"relative disabled:opacity-70 disabled:cursor-not-allowed \n      rounded-lg hover:opacity-80 transition \n      w-full disabled:active:scale-[1] active:scale-[.95] \n      flex justify-center items-center gap-2 \n      ".concat(a?"text-slate-700":"text-white"," \n      ").concat(i?"h-[40px]":"h-[55px]"," \n      ").concat(i?"text-sm":" text-base"," \n      ").concat(i?"font-light":"font-semibold"," \n      ").concat(i?"border-[1px]":"border-2"),children:[!u&&t,c&&!u&&(0,o.jsx)(c,{size:24}),u&&(0,o.jsx)(n.a,{size:24,color:a?m:"#ffff"})]})}},88001:function(e,t,r){"use strict";var o=r(9268),n=r(86006),l=r(32131);t.Z=e=>{let{maxLength:t,disabled:r,value:s,onChange:a,secureEntry:i,placeholder:c,icon:u,iconAction:d,id:m}=e,[f,h]=(0,n.useState)(!1),{company:p}=(0,l.Z)();null==p||p.color.primary,null==p||p.color.primaryLight;let x=null==p?void 0:p.color.primaryVeryLight;return(0,o.jsxs)("div",{style:{backgroundColor:"white",borderColor:x},"aria-disabled":!0,className:"flex justify-between w-full \n    items-center px-3 rounded-lg border \n    ".concat(r&&"bg-gray-100 cursor-not-allowed"),children:[(0,o.jsx)("input",{maxLength:t,onFocus:()=>h(!0),onBlur:()=>h(!1),disabled:r,id:m,type:i?"password":"text",placeholder:c,value:s,onChange:a,className:"py-4 outline-none w-full \n        h-full pr-2 bg-inherit \n        text-gray-500 font-semibold \n        disabled:cursor-not-allowed"}),u&&(0,o.jsx)(u,{onClick:d,size:24,className:"cursor-pointer text-gray-600"})]})}},43744:function(e,t,r){"use strict";var o=r(9268),n=r(86006),l=r(22450),s=r(46338),a=r(32131);t.Z=()=>{let{mode:e,onLightMode:t,onDarkMode:r}=(0,l.Z)(),{company:i}=(0,a.Z)(),c=null==i?void 0:i.color.primary;return(0,n.useEffect)(()=>{"dark"!==e&&r()},[e,r]),(0,o.jsxs)(o.Fragment,{children:["dark"===e&&(0,o.jsx)(s.J8Y,{color:c,onClick:t,className:"cursor-pointer",size:24}),"light"===e&&(0,o.jsx)(s.ELD,{onClick:r,className:"text-gray-500 cursor-pointer",size:24})]})}},61052:function(e,t,r){"use strict";var o=r(9268);r(86006);var n=r(22450);t.Z=e=>{let{children:t}=e,{mode:r}=(0,n.Z)();return(0,o.jsx)("div",{className:"flex items-center \n    justify-center min-h-screen h-full p-5\n    ".concat("light"===r?"bg-white":" bg-[#121212] transition-colors duration-500"),children:(0,o.jsx)("div",{className:"w-[400px] max-w-[90%] flex flex-col items-center gap-10 border-2 p-2 rounded-3xl",children:t})})}},51406:function(e,t,r){"use strict";r.r(t);var o=r(9268),n=r(86006),l=r(61052),s=r(88001),a=r(3338),i=r(56008),c=r(12801),u=r(1033),d=r(22450),m=r(43744),f=r(68919),h=r(50447),p=r(32131);t.default=()=>{let e=(0,i.useRouter)(),{mode:t}=(0,d.Z)(),[r,x]=(0,n.useState)(""),[g,y]=(0,n.useState)(!1),[v,b]=(0,n.useState)(!1),{company:w}=(0,p.Z)(),j=null==w?void 0:w.color.primary;null==w||w.color.primaryLight,null==w||w.color.primaryVeryLight;let N=async()=>{try{y(!0);let{data:t}=await h.Z.post("/api/users/forgot-password",{email:r});if(t.error)throw Error(t.error);e.push("/forgot-password/otp/".concat(r.trim().toLowerCase()))}catch(e){f.Am.error(e.message),y(!1)}};return(0,o.jsxs)(l.Z,{children:[(0,o.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,o.jsx)(m.Z,{}),(0,o.jsx)("div",{className:"font-bold text-2xl md:text-3xl \n        ".concat("light"===t?"text-slate-700":"text-white"),children:"Forgot Password?"}),(0,o.jsx)("div",{className:"font-semibold text-center\n        ".concat("light"===t?"text-gray-500":"text-gray-300"),children:"No worries, we'll send you reset instructions"})]}),(0,o.jsxs)("div",{className:"flex flex-col gap-4 w-full",children:[(0,o.jsx)(s.Z,{id:"email",placeholder:"Enter Your Email",value:r,icon:u.Uh$,onChange:e=>{x(e.target.value)}}),(0,o.jsx)(a.Z,{loading:g,label:"Continue",onClick:N})]}),(0,o.jsxs)("div",{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),onClick:()=>e.push("/login"),style:{color:v?j:"light"===t?"#334155":"#cbd5e1"},className:"sm:cursor-pointer active:scale-[.95] \n        duration-200 select-none text-center \n        flex items-center gap-2 \n        text-sm font-semibold ",children:[(0,o.jsx)(c.x_l,{})," Back to log in"]})]})}},32131:function(e,t,r){"use strict";var o=r(82561);let n=(0,o.Ue)(e=>({company:null,onCompany:t=>e({company:t})}));t.Z=n},22450:function(e,t,r){"use strict";var o=r(82561);let n=()=>{let e=localStorage.getItem("theme-mode");return e&&"light"!==e?"dark":"light"},l=()=>(localStorage.setItem("theme-mode","dark"),{mode:"dark"}),s=()=>(localStorage.setItem("theme-mode","light"),{mode:"light"}),a=(0,o.Ue)(e=>({mode:"light",onDarkMode:()=>e(l),onLightMode:()=>e(s),onInitialMode:()=>e({mode:n()})}));t.Z=a},56008:function(e,t,r){e.exports=r(8170)},83270:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var o=r(86006),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function i(e){return function(t){return o.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,s({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,n=e.attr,l=e.size,i=e.title,c=a(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&o.createElement("title",null,i),e.children)};return void 0!==l?o.createElement(l.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[3296,9173,5852,2815,1114,9253,2961,1744],function(){return e(e.s=87939)}),_N_E=e.O()}]);