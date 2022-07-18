"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=o(n),f=i,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||r;return n?a.createElement(m,p(p({ref:t},c),{},{components:n})):a.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3874:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>o,toc:()=>c,default:()=>s});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),p=["components"],l={id:"pvm_update.CliUpdateOpts",title:"Interface: CliUpdateOpts",sidebar_label:"CliUpdateOpts",custom_edit_url:null},d=void 0,o={unversionedId:"api/interfaces/pvm_update.CliUpdateOpts",id:"api/interfaces/pvm_update.CliUpdateOpts",isDocsHomePage:!1,title:"Interface: CliUpdateOpts",description:"@pvm/update.CliUpdateOpts",source:"@site/docs/api/interfaces/pvm_update.CliUpdateOpts.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pvm_update.CliUpdateOpts",permalink:"/pvm/docs/api/interfaces/pvm_update.CliUpdateOpts",editUrl:null,tags:[],version:"current",frontMatter:{id:"pvm_update.CliUpdateOpts",title:"Interface: CliUpdateOpts",sidebar_label:"CliUpdateOpts",custom_edit_url:null}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"cwd",id:"cwd",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"dryRun",id:"dryrun",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"format",id:"format",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"local",id:"local",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"releaseDataFile",id:"releasedatafile",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"tagOnly",id:"tagonly",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"vcsMode",id:"vcsmode",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],u={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pvm_update"},"@pvm/update"),".CliUpdateOpts"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CliUpdateOpts"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"pvm_update.ReleaseOpts"},(0,r.kt)("inlineCode",{parentName:"a"},"ReleaseOpts"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cwd"},"cwd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"cwd"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-update/types/cli.ts#L3"},"packages/pvm-update/types/cli.ts:3")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dryrun"},"dryRun"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"dryRun"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-update/types/cli.ts#L2"},"packages/pvm-update/types/cli.ts:2")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"format"},"format"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"format"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-update/types/cli.ts#L8"},"packages/pvm-update/types/cli.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"local"},"local"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"local"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-update/types/cli.ts#L4"},"packages/pvm-update/types/cli.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"releasedatafile"},"releaseDataFile"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"releaseDataFile"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-update/types/cli.ts#L6"},"packages/pvm-update/types/cli.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tagonly"},"tagOnly"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"tagOnly"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-update/types/cli.ts#L5"},"packages/pvm-update/types/cli.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"vcsmode"},"vcsMode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"vcsMode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"vcs"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"platform"')),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-update/types/cli.ts#L7"},"packages/pvm-update/types/cli.ts:7")))}s.isMDXComponent=!0}}]);