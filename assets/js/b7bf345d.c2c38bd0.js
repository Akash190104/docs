"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[8989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Settings",c={unversionedId:"extensions/acceptance-criterias/work-hub/settings/index",id:"extensions/acceptance-criterias/work-hub/settings/index",title:"Settings",description:"The work hub contains various user settings for controlling the experience of Acceptance Criterias.",source:"@site/docs/extensions/acceptance-criterias/work-hub/settings/index.md",sourceDirName:"extensions/acceptance-criterias/work-hub/settings",slug:"/extensions/acceptance-criterias/work-hub/settings/",permalink:"/docs/extensions/acceptance-criterias/work-hub/settings/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"acceptanceCriterias",previous:{title:"Work Hub",permalink:"/docs/extensions/acceptance-criterias/work-hub/"},next:{title:"Work Item Control",permalink:"/docs/extensions/acceptance-criterias/work-item-control/"}},s={},l=[{value:"General &gt; Notifications",id:"general--notifications",level:2},{value:"Do not show open work item",id:"do-not-show-open-work-item",level:3},{value:"Do not show undo completed",id:"do-not-show-undo-completed",level:3},{value:"Display &gt; Work Items",id:"display--work-items",level:2},{value:"Show completed Work Items",id:"show-completed-work-items",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"settings"},"Settings"),(0,o.kt)("p",null,"The work hub contains various user settings for controlling the experience of Acceptance Criterias."),(0,o.kt)("h2",{id:"general--notifications"},"General > Notifications"),(0,o.kt)("p",null,"The general group contains various generic settings."),(0,o.kt)("h3",{id:"do-not-show-open-work-item"},"Do not show open work item"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"On"),", hides the warning modal about the view needing to be refreshed after changing acceptance criterias from the Work Item Form."),(0,o.kt)("h3",{id:"do-not-show-undo-completed"},"Do not show undo completed"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"On"),", hides the warning modal about resetting the completion state of a processed acceptance criteria might cause side effects."),(0,o.kt)("h2",{id:"display--work-items"},"Display > Work Items"),(0,o.kt)("h3",{id:"show-completed-work-items"},"Show completed Work Items"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"On")," the view will hide acceptance criterias for work items that are in one of the completion states. These are loaded directly from the process configuration."))}u.isMDXComponent=!0}}]);