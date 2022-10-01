"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[8227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Scopes",s={unversionedId:"extensions/work-item-wiki/scopes",id:"extensions/work-item-wiki/scopes",title:"Scopes",description:"This section describes the scopes that are requested by Work Item Wiki, and why they are needed.",source:"@site/docs/extensions/work-item-wiki/scopes.md",sourceDirName:"extensions/work-item-wiki",slug:"/extensions/work-item-wiki/scopes",permalink:"/docs/extensions/work-item-wiki/scopes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"workItemWiki",previous:{title:"Work Item Wiki",permalink:"/docs/extensions/work-item-wiki/"},next:{title:"Supported Markdown Features",permalink:"/docs/extensions/work-item-wiki/supported-features"}},l={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scopes"},"Scopes"),(0,a.kt)("p",null,"This section describes the scopes that are requested by Work Item Wiki, and why they are needed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Scope"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"),(0,a.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vso.code")),(0,a.kt)("td",{parentName:"tr",align:null},"Grants the ability to read source code and metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to search code and get notified about version control events via service hooks."),(0,a.kt)("td",{parentName:"tr",align:null},"Need to read repositories to be able to find the base url for attachments and images")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vso.wiki")),(0,a.kt)("td",{parentName:"tr",align:null},"Grants the ability to read wikis, wiki pages and wiki attachments. Also grants the ability to search wiki pages."),(0,a.kt)("td",{parentName:"tr",align:null},"Need to read Wikis so page content can be extracted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vso.work")),(0,a.kt)("td",{parentName:"tr",align:null},"Grants the ability to read work items, queries, boards, area and iterations paths, and other work item tracking related metadata. Also grants the ability to execute queries, search work items and to receive notifications about work item events via service hooks."),(0,a.kt)("td",{parentName:"tr",align:null},"Need to read work items to be able to create links to work items")))),(0,a.kt)("p",null,"For definitions, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#scopes"},"offical documentation")))}d.isMDXComponent=!0}}]);