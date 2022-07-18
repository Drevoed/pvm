"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7520:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>d});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={id:"pvm_cowners.CalcMajorityOpts",title:"Interface: CalcMajorityOpts",sidebar_label:"CalcMajorityOpts",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/pvm_cowners.CalcMajorityOpts",id:"api/interfaces/pvm_cowners.CalcMajorityOpts",isDocsHomePage:!1,title:"Interface: CalcMajorityOpts",description:"@pvm/cowners.CalcMajorityOpts",source:"@site/docs/api/interfaces/pvm_cowners.CalcMajorityOpts.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pvm_cowners.CalcMajorityOpts",permalink:"/pvm/docs/api/interfaces/pvm_cowners.CalcMajorityOpts",editUrl:null,tags:[],version:"current",frontMatter:{id:"pvm_cowners.CalcMajorityOpts",title:"Interface: CalcMajorityOpts",sidebar_label:"CalcMajorityOpts",custom_edit_url:null}},s=[{value:"Properties",id:"properties",children:[{value:"exclude",id:"exclude",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"initial",id:"initial",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pvm_cowners"},"@pvm/cowners"),".CalcMajorityOpts"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"exclude"},"exclude"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"exclude"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"List of reviewers which should be excluded from result"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-cowners/lib/cowners.ts#L122"},"packages/pvm-cowners/lib/cowners.ts:122")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initial"},"initial"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"initial"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"List of initial reviewers"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-cowners/lib/cowners.ts#L120"},"packages/pvm-cowners/lib/cowners.ts:120")))}d.isMDXComponent=!0}}]);