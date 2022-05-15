"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[790],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3482:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:2},s="Criteria States",l={unversionedId:"extensions/acceptance-criterias/getting-started/criteria-states",id:"extensions/acceptance-criterias/getting-started/criteria-states",title:"Criteria States",description:"Criterias have two different states. One state that tracks all acceptance criteria created for a work item, and one state that tracks the progress for the individual criteria.",source:"@site/docs/extensions/acceptance-criterias/getting-started/criteria-states.md",sourceDirName:"extensions/acceptance-criterias/getting-started",slug:"/extensions/acceptance-criterias/getting-started/criteria-states",permalink:"/docs/extensions/acceptance-criterias/getting-started/criteria-states",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"acceptanceCriterias",previous:{title:"Criteria Types",permalink:"/docs/extensions/acceptance-criterias/getting-started/criteria-types"},next:{title:"Activating the extension",permalink:"/docs/extensions/acceptance-criterias/configuration/activating"}},p={},d=[{value:"Work item states",id:"work-item-states",level:2},{value:"Single criteria states",id:"single-criteria-states",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"criteria-states"},"Criteria States"),(0,i.kt)("p",null,"Criterias have two different states. One state that tracks all acceptance criteria created for a work item, and one state that tracks the progress for the individual criteria."),(0,i.kt)("h2",{id:"work-item-states"},"Work item states"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"State"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"New"),(0,i.kt)("td",{parentName:"tr",align:null},"When no criterias have been completed or processed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partial"),(0,i.kt)("td",{parentName:"tr",align:null},"When one or more criteria have been completed or processed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Completed"),(0,i.kt)("td",{parentName:"tr",align:null},"When all criterias have been completed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Approved"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rejected"),(0,i.kt)("td",{parentName:"tr",align:null},"When one or more criteria have been rejected")))),(0,i.kt)("h2",{id:"single-criteria-states"},"Single criteria states"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"State"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"New"),(0,i.kt)("td",{parentName:"tr",align:null},"The criteria has not been processed yet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Completed"),(0,i.kt)("td",{parentName:"tr",align:null},"The criteria was completed and no required approver was assigned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Awaiting Approval"),(0,i.kt)("td",{parentName:"tr",align:null},"The criteria was completed and awaiting the assigned approver to approve or reject the criteria")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Approved"),(0,i.kt)("td",{parentName:"tr",align:null},"The assigned approver have approved the critera")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rejected"),(0,i.kt)("td",{parentName:"tr",align:null},"The assigned approver have rejected the critera")))))}m.isMDXComponent=!0}}]);