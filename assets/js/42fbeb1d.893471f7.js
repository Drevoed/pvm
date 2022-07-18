"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=s(a),f=r,c=k["".concat(d,".").concat(f)]||k[f]||m[f]||i;return a?n.createElement(c,l(l({ref:t},o),{},{components:a})):n.createElement(c,l({ref:t},o))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5057:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>s,toc:()=>o,default:()=>k});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],p={id:"pvm_artifacts.StorageManager",title:"Class: StorageManager",sidebar_label:"StorageManager",custom_edit_url:null},d=void 0,s={unversionedId:"api/classes/pvm_artifacts.StorageManager",id:"api/classes/pvm_artifacts.StorageManager",isDocsHomePage:!1,title:"Class: StorageManager",description:"@pvm/artifacts.StorageManager",source:"@site/docs/api/classes/pvm_artifacts.StorageManager.md",sourceDirName:"api/classes",slug:"/api/classes/pvm_artifacts.StorageManager",permalink:"/pvm/docs/api/classes/pvm_artifacts.StorageManager",editUrl:null,tags:[],version:"current",frontMatter:{id:"pvm_artifacts.StorageManager",title:"Class: StorageManager",sidebar_label:"StorageManager",custom_edit_url:null}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"_storages",id:"_storages",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"initStorageDeps",id:"initstoragedeps",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"ArtifactsStorages",id:"artifactsstorages",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"finish",id:"finish",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"init",id:"init",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"initFor",id:"initfor",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"castStorageType",id:"caststoragetype",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"isEnabledInConf",id:"isenabledinconf",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3}],level:2}],m={toc:o};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/pvm_artifacts"},"@pvm/artifacts"),".StorageManager"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new StorageManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"deps"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deps")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/pvm_artifacts.InitStorageDeps"},(0,i.kt)("inlineCode",{parentName:"a"},"InitStorageDeps")))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L28"},"packages/pvm-artifacts/lib/storage-manager.ts:28")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_storages"},"_","storages"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","storages"),": ",(0,i.kt)("a",{parentName:"p",href:"pvm_artifacts.Storage"},(0,i.kt)("inlineCode",{parentName:"a"},"Storage")),"[] = ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L24"},"packages/pvm-artifacts/lib/storage-manager.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initstoragedeps"},"initStorageDeps"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"initStorageDeps"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/pvm_artifacts.InitStorageDeps"},(0,i.kt)("inlineCode",{parentName:"a"},"InitStorageDeps"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L23"},"packages/pvm-artifacts/lib/storage-manager.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"artifactsstorages"},"ArtifactsStorages"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"ArtifactsStorages"),": typeof ",(0,i.kt)("a",{parentName:"p",href:"../enums/pvm_artifacts.ArtifactsStorages"},(0,i.kt)("inlineCode",{parentName:"a"},"ArtifactsStorages"))," = ",(0,i.kt)("inlineCode",{parentName:"p"},"ArtifactsStorages")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L26"},"packages/pvm-artifacts/lib/storage-manager.ts:26")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"finish"},"finish"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"finish"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L75"},"packages/pvm-artifacts/lib/storage-manager.ts:75")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"StorageKlass"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"storageDef"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"InstanceType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends typeof ",(0,i.kt)("a",{parentName:"td",href:"pvm_artifacts.Storage"},(0,i.kt)("inlineCode",{parentName:"a"},"Storage")))))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"StorageKlass")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"storageDef")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/pvm_core#storagedef"},(0,i.kt)("inlineCode",{parentName:"a"},"StorageDef")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"InstanceType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L49"},"packages/pvm-artifacts/lib/storage-manager.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initfor"},"initFor"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initFor"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"artifactsStorage"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../modules/pvm_artifacts#storageenumtofrontendclass"},(0,i.kt)("inlineCode",{parentName:"a"},"StorageEnumToFrontendClass")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",">"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"../enums/pvm_artifacts.ArtifactsStorages"},(0,i.kt)("inlineCode",{parentName:"a"},"ArtifactsStorages")))))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"artifactsStorage")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../modules/pvm_artifacts#storageenumtofrontendclass"},(0,i.kt)("inlineCode",{parentName:"a"},"StorageEnumToFrontendClass")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L55"},"packages/pvm-artifacts/lib/storage-manager.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"caststoragetype"},"castStorageType"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"castStorageType"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"storageType"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../enums/pvm_artifacts.ArtifactsStorages"},(0,i.kt)("inlineCode",{parentName:"a"},"ArtifactsStorages"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"storageType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../enums/pvm_artifacts.ArtifactsStorages"},(0,i.kt)("inlineCode",{parentName:"a"},"ArtifactsStorages"))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L41"},"packages/pvm-artifacts/lib/storage-manager.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isenabledinconf"},"isEnabledInConf"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"isEnabledInConf"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"storageType"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Config"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"storageType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../enums/pvm_artifacts.ArtifactsStorages"},(0,i.kt)("inlineCode",{parentName:"a"},"ArtifactsStorages")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-artifacts/lib/storage-manager.ts#L32"},"packages/pvm-artifacts/lib/storage-manager.ts:32")))}k.isMDXComponent=!0}}]);