"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6126:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"update-hints",title:"Update hints"},s=void 0,p={unversionedId:"how-to/update-hints",id:"how-to/update-hints",isDocsHomePage:!1,title:"Update hints",description:"If you want one or couple of following things to happen",source:"@site/docs/how-to/update-hints.md",sourceDirName:"how-to",slug:"/how-to/update-hints",permalink:"/pvm/docs/how-to/update-hints",tags:[],version:"current",frontMatter:{id:"update-hints",title:"Update hints"},sidebar:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",previous:{title:"\u0420\u0435\u043b\u0438\u0437 \u0441 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b",permalink:"/pvm/docs/how-to/local-releases"}},c=[{value:"<code>update-hints.toml</code> file",id:"update-hintstoml-file",children:[],level:2},{value:"Merge request description update hints",id:"merge-request-description-update-hints",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want one or couple of following things to happen "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Certain packages have concrete update versions"),(0,i.kt)("li",{parentName:"ul"},"Concrete packages have concrete version increment"),(0,i.kt)("li",{parentName:"ul"},"Some packages, despite affected or not, to have new version and treated as affected. ")),(0,i.kt)("p",null,"Then how you can achieve that?"),(0,i.kt)("p",null,"Two solutions available to this problem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First can be applied if ",(0,i.kt)("inlineCode",{parentName:"li"},"@pvm/plugin-conventional-changelog")," used: you can edit commit message or add new to affect\npackages you want to update but it is not acceptable in all cases. For example when you want to republish all packages\nbecause of build process changes and when nothing directly used by packages changed. Next approach is more general and robust."),(0,i.kt)("li",{parentName:"ul"},"Second is to use so-called ",(0,i.kt)("inlineCode",{parentName:"li"},"update-hints")," mechanism.")),(0,i.kt)("p",null,"Hints are applied in ",(0,i.kt)("inlineCode",{parentName:"p"},"pvm update")," command call. If hints were in file than this file will be deleted in following commit.\nBut if ",(0,i.kt)("inlineCode",{parentName:"p"},"release.tag_only")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"versioning.source")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"tag"),", then there will be no commit and hints file will\nleave until one not delete it manually. In this case hints can be placed in merge request description."),(0,i.kt)("h2",{id:"update-hintstoml-file"},(0,i.kt)("inlineCode",{parentName:"h2"},"update-hints.toml")," file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"update-hints.toml")," is a special file that is commited as usual and merged in merge request.\nBelow is full example of hints content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"# Filename is taken from config.update.hints_file.\n# This file will be deleted from repository in a release commit.\n\n# Full example:\n\n# define a release type for all packages\nrelease-type = \"major\"\n\n# release types for specific packages (overrides release type which calculated from commit messages)\n[release-types]\nmajor = [\n  '@pvm/plugin-*',\n  'test-a',\n]\n# release type could be a string also\nminor = 'test-b'\npatch = [ 'foo', 'bar' ]\n\n# choose for which packages we should update dependants\n[[update-dependants-for]]\nmatch = [\n  'boxy-*',\n  'text-a',\n]\n# as-dep means take same release type which has a dependency of package\nrelease-type = 'as-dep'\n\n# you can choose different release types for different packages\n# upper entries have highest priority\n# if there are multiple packages matched for single match with release-type=as-dep, highest release-type will be selected\n[[update-dependants-for]]\nmatch = [ 'boxy-*' ]\nrelease-type = 'as-dep'\n\n[[update-dependants-for]]\nmatch = [ 'test-a' ]\nrelease-type = 'minor'\n\n# also there is short form possible for same entry\n# in this case release type will be taken from config.update.dependants_release_type\nupdate-dependants-for = [\n  'boxy-*',\n  'test-a',\n]\n\n# include additional packages for updating\n[force-release]\npackages = [\n  'pkg-*',\n  '/src/foo/**',\n]\n\nrelease-notes = 'republish due to broken pipeline'\n\n")),(0,i.kt)("h2",{id:"merge-request-description-update-hints"},"Merge request description update hints"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At this moment only gitlab is supported"))),(0,i.kt)("p",null,"Merge request hints content is superset of file version with following additions"),(0,i.kt)("p",null,"Extra field"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"kind = 'pvm-update-hints'\n")),(0,i.kt)("p",null,"and wrap with ",(0,i.kt)("inlineCode",{parentName:"p"},"toml")," code block "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```toml\n```\n")),(0,i.kt)("p",null,"Example of hints for merge request description with theese additions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...[Some description text]\n\n```toml\nkind = 'pvm-update-hints'\n[release-types]\nmajor = '*'\n```\n")))}u.isMDXComponent=!0}}]);