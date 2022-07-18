"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,v=s["".concat(o,".").concat(c)]||s[c]||m[c]||p;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<p;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>u,toc:()=>d,default:()=>s});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),i=["components"],l={id:"pvm_plugin_http_proxy",title:"Module: @pvm/plugin-http-proxy",sidebar_label:"@pvm/plugin-http-proxy",sidebar_position:0,custom_edit_url:null},o="@pvm/plugin-http-proxy",u={unversionedId:"api/modules/pvm_plugin_http_proxy",id:"api/modules/pvm_plugin_http_proxy",isDocsHomePage:!1,title:"Module: @pvm/plugin-http-proxy",description:"Includes the global-agent library which overrides",source:"@site/docs/api/modules/pvm_plugin_http_proxy.md",sourceDirName:"api/modules",slug:"/api/modules/pvm_plugin_http_proxy",permalink:"/pvm/docs/api/modules/pvm_plugin_http_proxy",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"pvm_plugin_http_proxy",title:"Module: @pvm/plugin-http-proxy",sidebar_label:"@pvm/plugin-http-proxy",sidebar_position:0,custom_edit_url:null},sidebar:"API",previous:{title:"@pvm/plugin-conventional-semantic-release",permalink:"/pvm/docs/api/modules/pvm_plugin_conventional_semantic_release"},next:{title:"@pvm/pvm",permalink:"/pvm/docs/api/modules/pvm_pvm"}},d=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"pvmplugin-http-proxy"},"@pvm/plugin-http-proxy"),(0,p.kt)("p",null,"Includes the ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/global-agent"},"global-agent")," library which overrides\nstandard http(s) nodejs clients and adds proxy support to them."),(0,p.kt)("p",null,"Configurable with ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/global-agent#environment-variables"},"environment variables"),".\nNamespace at initialization we specify as empty, so variable names do not contain a prefix\n",(0,p.kt)("inlineCode",{parentName:"p"},"${NAMESPACE}_")," as in the documentation above."),(0,p.kt)("h2",{id:"functions"},"Functions"),(0,p.kt)("h3",{id:"default"},"default"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"default"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"_api"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"_api")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"returns"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"undefined/-/tree/undefined/packages/pvm-plugin-http-proxy/lib/index.ts#L3"},"packages/pvm-plugin-http-proxy/lib/index.ts:3")))}s.isMDXComponent=!0}}]);