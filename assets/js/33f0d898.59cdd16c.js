"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[5322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},i="EnvTransform",o={unversionedId:"extensions/env-transform/tasks/env-transform",id:"extensions/env-transform/tasks/env-transform",title:"EnvTransform",description:"---",source:"@site/docs/extensions/env-transform/tasks/env-transform.md",sourceDirName:"extensions/env-transform/tasks",slug:"/extensions/env-transform/tasks/env-transform",permalink:"/docs/extensions/env-transform/tasks/env-transform",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"envTransform",previous:{title:"Changelog",permalink:"/docs/extensions/env-transform/changelog"}},p={},s=[{value:"YAML Snippet",id:"yaml-snippet",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2},{value:"Replace - Inline",id:"replace---inline",level:3},{value:"Replace - Input File",id:"replace---input-file",level:3},{value:"Subsititue - Inline",id:"subsititue---inline",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"envtransform"},"EnvTransform"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A task to perform variable replacement for environment files")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"yaml-snippet"},"YAML Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- task: EnvTransform@0\n  inputs:\n    mode: replace #Mode to process variables for\n    inputType: file #Input source for file structure\n    content: #.env file contents. Required when `inputType = inline`\n    inputFile: .env #Input file to perform transformation on.  Required when `inputType = file`\n    outputFile: .env #File to write transformed values to\n    preserveComments: false #Preserve comments when reading and writing files\n\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"mode")," ",(0,a.kt)("br",null),"Mode"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"(Optional)")," Mode to process variables for ",(0,a.kt)("br",null)," Options: ",(0,a.kt)("inlineCode",{parentName:"td"},"replace"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"substitute")," ",(0,a.kt)("br",null)," Default value: ",(0,a.kt)("inlineCode",{parentName:"td"},"replace"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"inputType")," ",(0,a.kt)("br",null),"Input Mode"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"(Required)")," Input source for file structure ",(0,a.kt)("br",null)," Options: ",(0,a.kt)("inlineCode",{parentName:"td"},"file"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inline")," ",(0,a.kt)("br",null)," Default value: ",(0,a.kt)("inlineCode",{parentName:"td"},"file"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"content")," ",(0,a.kt)("br",null),"Content"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"(Optional)")," .env file contents. Required when ",(0,a.kt)("inlineCode",{parentName:"td"},"inputType = inline")," ",(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"inputFile")," ",(0,a.kt)("br",null),"Input File"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"(Optional)")," Input file to perform transformation on. Required when ",(0,a.kt)("inlineCode",{parentName:"td"},"inputType = file")," ",(0,a.kt)("br",null)," Default value: ",(0,a.kt)("inlineCode",{parentName:"td"},".env"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"outputFile")," ",(0,a.kt)("br",null),"Output File"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"(Optional)")," File to write transformed values to ",(0,a.kt)("br",null)," Default value: ",(0,a.kt)("inlineCode",{parentName:"td"},".env"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"preserveComments")," ",(0,a.kt)("br",null),"Preserve Comments"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"(Optional)")," Preserve comments when reading and writing files ",(0,a.kt)("br",null))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"replace---inline"},"Replace - Inline"),(0,a.kt)("p",null,"Given the following pipeline configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"variables:\n  PROJECT_NAME: '$(Build.Repository.Name)'\n  API_URL: 'http://localhost:3000/api'\n  API_KEY: 'key-1234-ddd'\n  ENV: 'prod'\nsteps:\n  - task: EnvTransform@0\n    displayName: 'Replace values from inline content'\n    inputs:\n      inputType: 'inline'\n      content: |\n        ENV=debug\n        PROJECT_NAME=\"Local Name\"\n        #This is a comment\n\n        API_URL = http://localhost:5000/api\n        NO_REPLACE = 'some content'\n        API_KEY=none\n        #COMMENT=1\n      outputFile: '$(Build.ArtifactStagingDirectory)/.env'\n")),(0,a.kt)("p",null,"it will produce the following ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"ENV=prod\nPROJECT_NAME=repo-name\nAPI_URL=http://localhost:3000/api\nNO_REPLACE='some content'\nAPI_KEY=key-1234-ddd\n")),(0,a.kt)("h3",{id:"replace---input-file"},"Replace - Input File"),(0,a.kt)("p",null,"Given the following pipeline configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"variables:\n  PROJECT_NAME: '$(Build.Repository.Name)'\n  API_URL: 'http://localhost:3000/api'\n  API_KEY: 'key-1234-ddd'\n  ENV: 'prod'\nsteps:\n  - task: EnvTransform@0\n    displayName: 'Replace values in files'\n    inputs:\n      inputType: 'file'\n      inputFile: '$(Build.SourcesDirectory)/.env.example'\n      outputFile: '$(Build.ArtifactStagingDirectory)/.env'\n")),(0,a.kt)("p",null,"where, ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," contains the values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"ENV=debug\nPROJECT_NAME=\"Local Name\"\n#This is a comment\n\nAPI_URL = http://localhost:5000/api\nNO_REPLACE = 'some content'\nAPI_KEY=none\n#COMMENT=1\n\n")),(0,a.kt)("p",null,"it will produce the following ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"ENV=prod\nPROJECT_NAME=repo-name\nAPI_URL=http://localhost:3000/api\nNO_REPLACE='some content'\nAPI_KEY=key-1234-ddd\n")),(0,a.kt)("h3",{id:"subsititue---inline"},"Subsititue - Inline"),(0,a.kt)("p",null,"Given the following pipeline configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"variables:\n  API_URL: 'http://localhost:3000/api'\n  API_KEY: 'key-1234-ddd'\n  ENV: 'prod'\nsteps:\n  - task: EnvTransform@0\n    displayName: 'Substitute values from inline content'\n    inputs:\n      inputType: 'inline'\n      mode: 'substitute'\n      content: |\n        ENV=$(ENV)\n        PROJECT_NAME=$(Build.Repository.Name)\n        #This is a comment\n\n        API_URL = http://localhost:5000/api\n        NO_REPLACE = 'some content'\n        API_KEY=$(API_KEY)\n        #COMMENT=1\n      outputFile: '$(Build.ArtifactStagingDirectory)/.env'\n")),(0,a.kt)("p",null,"it will produce the following ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"ENV=prod\nPROJECT_NAME=repo-name\nAPI_URL=http://localhost:5000/api\nNO_REPLACE='some content'\nAPI_KEY=key-1234-ddd\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note, ",(0,a.kt)("inlineCode",{parentName:"em"},"API_URL")," is defined in variables, but values to replace must be explicitly defined in the file itself with ",(0,a.kt)("inlineCode",{parentName:"em"},"$(VARIABLE)"))))}m.isMDXComponent=!0}}]);