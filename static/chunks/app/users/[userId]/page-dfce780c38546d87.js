(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[256],{8333:function(e,t,s){Promise.resolve().then(s.bind(s,39))},6526:function(e,t,s){"use strict";s.d(t,{G:function(){return r},R:function(){return n}});let n=async()=>{let e=await fetch("https://jsonplaceholder.org/users");if(!(null==e?void 0:e.ok))throw Error("Failed to fetch users");let t=await e.json();return t},r=async e=>fetch("https://jsonplaceholder.org/users/".concat(e)).then(e=>{if(!(null==e?void 0:e.ok))throw Error("Failed to fetch user");return e.json()}).catch(e=>Promise.reject(e))},39:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var n=s(7437),r=s(6526),i=s(6409),a=s(2265);function c(){return(0,n.jsx)("h1",{className:"text-2xl",children:"Loading ..."})}let l=e=>{let{message:t}=e;return(0,n.jsx)("h1",{className:"text-2xl text-red-600",children:t})};function u(e){let{params:{userId:t}}=e,[s,u]=(0,a.useState)(),[o,h]=(0,a.useState)();return((0,a.useEffect)(()=>{(0,r.G)(t).then(e=>u(e)).catch(e=>h(e.message))},[t]),o)?(0,n.jsx)(l,{message:o}):s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["User id: ",t]}),s&&(0,n.jsx)(i.n,{user:s,detailsLink:!1})]}):(0,n.jsx)(c,{})}},6409:function(e,t,s){"use strict";s.d(t,{n:function(){return o}});var n=s(7437),r=s(7903),i=s.n(r),a=s(6926),c=s(7042),l=s(1396),u=s.n(l);function o(e){let{user:t,ageRestriction:s,detailsLink:r=!0}=e,l=new Date().getFullYear(),o=t.birthDate.split("-")[0],h=l-+o,d=s&&h<a.G;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:(0,c.Z)(i().userContainer,d&&i().prohibited),children:[(0,n.jsxs)("span",{className:i().text,children:["Name: ",t.firstname," ",t.lastname,"."]}),(0,n.jsxs)("span",{className:i().text,children:["Birth date: ",t.birthDate]}),(0,n.jsxs)("span",{className:i().text,children:["Age: ",h]}),(0,n.jsxs)("span",{className:i().text,children:["Email: ",t.email]})]}),r&&(0,n.jsx)("div",{className:"mb-3",children:(0,n.jsx)(u(),{className:"underline",href:"/users/".concat(t.id),children:"Details"})})]})}},6926:function(e,t,s){"use strict";s.d(t,{G:function(){return n}});let n=18},7903:function(e){e.exports={searchInput:"styles_searchInput__wfFFi",listTitle:"styles_listTitle__Sb3Vb",userContainer:"styles_userContainer__TFog_",prohibited:"styles_prohibited__Qoo_t",text:"styles_text__uHrV0"}}},function(e){e.O(0,[945,971,596,744],function(){return e(e.s=8333)}),_N_E=e.O()}]);