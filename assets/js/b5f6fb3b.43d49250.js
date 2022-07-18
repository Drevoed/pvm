"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3353],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,s=m["".concat(c,".").concat(f)]||m[f]||d[f]||l;return t?n.createElement(s,o(o({ref:r},u),{},{components:t})):n.createElement(s,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1584:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>m});var n=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={},c="\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 canary \u0440\u0435\u043b\u0438\u0437\u043e\u0432 \u0432 pvm",p={unversionedId:"adr/git-flow-PVM-101",id:"adr/git-flow-PVM-101",isDocsHomePage:!1,title:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 canary \u0440\u0435\u043b\u0438\u0437\u043e\u0432 \u0432 pvm",description:"\u041e\u0431\u0449\u0430\u044f \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0432\u0443\u0447\u0438\u0442 \u0442\u0430\u043a: \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0442\u044c canary \u0440\u0435\u043b\u0438\u0437\u044b \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0441 \u0446\u0435\u043b\u044c\u044e",source:"@site/docs/adr/git-flow-PVM-101.md",sourceDirName:"adr",slug:"/adr/git-flow-PVM-101",permalink:"/pvm/docs/adr/git-flow-PVM-101",tags:[],version:"current",frontMatter:{}},u=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",children:[{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",children:[],level:4},{value:"CLI",id:"cli",children:[],level:4},{value:"\u041f\u043b\u0430\u043d \u0440\u0430\u0431\u043e\u0442",id:"\u043f\u043b\u0430\u043d-\u0440\u0430\u0431\u043e\u0442",children:[],level:3}],level:2},{value:"\u041c\u0438\u043d\u0443\u0441\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"\u043c\u0438\u043d\u0443\u0441\u044b-\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",children:[],level:2}],d={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430-canary-\u0440\u0435\u043b\u0438\u0437\u043e\u0432-\u0432-pvm"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 canary \u0440\u0435\u043b\u0438\u0437\u043e\u0432 \u0432 pvm"),(0,l.kt)("p",null,"\u041e\u0431\u0449\u0430\u044f \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0432\u0443\u0447\u0438\u0442 \u0442\u0430\u043a: \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0442\u044c canary \u0440\u0435\u043b\u0438\u0437\u044b \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0441 \u0446\u0435\u043b\u044c\u044e\n\u043e\u0431\u043a\u0430\u0442\u043a\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0445 \u043d\u0430 \u0430\u043b\u044c\u0444\u0430/\u0431\u0435\u0442\u0430 - \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,l.kt)("h4",{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"),(0,l.kt)("p",null,"\u041d\u0435 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u043c. \u0414\u0435\u043b\u0430\u0435\u043c \u0447\u0435\u0440\u0435\u0437 cli"),(0,l.kt)("h4",{id:"cli"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pvm publish --canary - \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f canary \u0440\u0435\u043b\u0438\u0437\u0430\n")),(0,l.kt)("h3",{id:"\u043f\u043b\u0430\u043d-\u0440\u0430\u0431\u043e\u0442"},"\u041f\u043b\u0430\u043d \u0440\u0430\u0431\u043e\u0442"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u0412 publish \u0434\u043b\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0431\u0435\u0440\u0435\u043c \u0438\u0437\u043c\u0435\u043d\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0440\u0435\u043b\u0438\u0437\u0430 \u043f\u0430\u043a\u0435\u0442\u044b"),(0,l.kt)("li",{parentName:"ol"},"\u0412 Repository \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0440\u0430\u0441\u0447\u0435\u0442 \u0432\u0435\u0440\u0441\u0438\u0438 \u043e\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0440\u0435\u043b\u0438\u0437\u0430, \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u0430 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0439 canary-\u0432\u0435\u0440\u0441\u0438\u0438."),(0,l.kt)("li",{parentName:"ol"},"\u0412 publish \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0443\u0447\u0435\u0442 canary-\u0432\u0435\u0442\u043e\u043a \u0438 \u043f\u0440\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0442\u0435\u0433\u0430 \u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"npm publish")),(0,l.kt)("li",{parentName:"ol"},"\u0412 publish \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0443\u0447\u0435\u0442 canary \u0432 \u043b\u043e\u0433\u0438\u043a\u0443 \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0439 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u0435\u0442\u043a\u0430 \u043f\u0440\u043e\u0434. \u0438\u043b\u0438 \u0432\u0435\u0442\u043a\u0430 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0432\u0435\u0442\u043e\u043a \u0441 \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0435\u0439.\n\u0424\u043e\u0440\u043c\u0430\u0442 \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043d\u043e \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c canary \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u0430 \u043a \u0438\u043c\u0435\u043d\u0438 \u0440\u0435\u043b\u0438\u0437\u0430."),(0,l.kt)("li",{parentName:"ol"},"\u0412 \u0441\u043a\u0440\u0438\u043f\u0442\u0430\u0445 \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0440\u0435\u043b\u0438\u0437\u0430 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0440\u0435\u043b\u0438\u0437\u043e\u0432 \u0435\u0441\u043b\u0438 \u0440\u0435\u043b\u0438\u0437 - canary, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0432 \u0437\u0430\u0431\u043b\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. ")),(0,l.kt)("h2",{id:"\u043c\u0438\u043d\u0443\u0441\u044b-\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"},"\u041c\u0438\u043d\u0443\u0441\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041d\u0430 canary \u0440\u0435\u043b\u0438\u0437\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u043b\u0438\u0437\u043e\u0432 \u0432 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u0438\u0437-\u0437\u0430 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"li"},"pvm update"))))}m.isMDXComponent=!0}}]);