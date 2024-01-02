"use strict";(self.webpackChunkviolentmonkey_github_io=self.webpackChunkviolentmonkey_github_io||[]).push([[693],{616:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function l(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{ah:function(){return m}});var o=n(959);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const c=o.createContext({});function m(e){const t=o.useContext(c);return o.useMemo((()=>"function"==typeof e?e(t):s(s({},t),e)),[t,e])}},117:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return u}});var r=n(616),a=n(959);function l(e){const t=Object.assign({h3:"h3",a:"a",span:"span",code:"code",p:"p",ol:"ol",li:"li"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,{id:"why-does-violentmonkey-require-clipboard-permission",style:{position:"relative"}},a.createElement(t.a,{href:"#why-does-violentmonkey-require-clipboard-permission","aria-label":"why does violentmonkey require clipboard permission permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Why does Violentmonkey require ",a.createElement(t.code,null,"clipboard")," permission?"),"\n",a.createElement(t.p,null,"To make ",a.createElement(t.code,null,"GM_setClipboard")," work on different browsers."),"\n",a.createElement(t.p,null,"First of all, the required permission is named ",a.createElement(t.code,null,"clipboardWrite"),", which means it just allows writing to clipboard, but not reading from clipboard."),"\n",a.createElement(t.p,null,"Secondly, there is a function used in userscripts named ",a.createElement(t.code,null,"GM_setClipboard"),". It writes to clipboard, just exactly what ",a.createElement(t.code,null,"clipboardWrite")," allows."),"\n",a.createElement(t.p,null,"On Chrome, the extension can write to clipboard in the background even without ",a.createElement(t.code,null,"clipboardWrite")," permission. But on Firefox, this won't work without the permission. So ",a.createElement(t.code,null,"clipboardWrite")," permission is required to make the extension work on different browsers."),"\n",a.createElement(t.h3,{id:"why-are-third-party-sync-services-used-instead-of-native-ones",style:{position:"relative"}},a.createElement(t.a,{href:"#why-are-third-party-sync-services-used-instead-of-native-ones","aria-label":"why are third party sync services used instead of native ones permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Why are third-party sync services used instead of native ones?"),"\n",a.createElement(t.p,null,"Because ",a.createElement(t.code,null,"browser.storage.sync")," is designed to sync preferences instead of large data, and it cannot sync data between different browsers. In some browsers there is no such API implemented."),"\n",a.createElement(t.p,null,"According to ",a.createElement(t.a,{href:"https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage/sync",target:"_blank",rel:"noopener noreferrer"},"the document"),", ",a.createElement(t.code,null,"browser.storage.sync")," is designed to store preferences and sync them to different instances of the same browser with the same user logged in. And something more, up to 100KB of data can be stored and synced."),"\n",a.createElement(t.p,null,"So the limitations are:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Up to 100KB of data can be stored, even smaller than size of a feature-rich script."),"\n",a.createElement(t.li,null,"Only sync on the same browser, no share between Chrome and Firefox."),"\n"),"\n",a.createElement(t.p,null,"With third-party sync services (Dropbox, Google Drive, etc.):"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"More data can be stored."),"\n",a.createElement(t.li,null,"Scripts can be shared in Chrome, Firefox, Vivaldi, Maxthon, etc. Your scripts are synced to different browsers if only Violentmonkey is installed."),"\n"),"\n",a.createElement(t.h3,{id:"where-are-the-userscripts-stored",style:{position:"relative"}},a.createElement(t.a,{href:"#where-are-the-userscripts-stored","aria-label":"where are the userscripts stored permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Where are the userscripts stored?"),"\n",a.createElement(t.p,null,"They are stored in the ",a.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local",target:"_blank",rel:"noopener noreferrer"},"local storage area")," of the browser extension. The storage may have different implementations in different browsers, so we can't tell exactly where or in what format is the data stored."),"\n",a.createElement(t.p,null,"In other words, you won't be able to find your scripts as normal files in your disk. They may be stored in some database maintained by the browser you use."),"\n",a.createElement(t.h3,{id:"why-is-the-release-minified",style:{position:"relative"}},a.createElement(t.a,{href:"#why-is-the-release-minified","aria-label":"why is the release minified permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Why is the release minified?"),"\n",a.createElement(t.p,null,"The short answer for this question is to make the code clean and efficient."),"\n",a.createElement(t.p,null,"To be clear, our extension is minified but not obfuscated in release. It is a very common workflow to compile and minify code for web apps, and we are using popular tools that are used all over the world. See ",a.createElement(t.a,{href:"/posts/violentmonkey-workflows/"},"this post")," to learn more about the workflows."))}var o=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},i=n(7683),s=n(3722),c=n(7850);function m({location:e,data:t,children:n}){const{mdx:r}=t,l=(0,a.useRef)(),{pathname:o}=e,c="/"===o;return a.createElement(s.Z,{location:e,sidebar:r.frontmatter.sidebar},a.createElement("main",{className:"flex-1 has-toc"},!c&&a.createElement("section",{className:"mb-10 pt-1"},a.createElement("h1",null,r.frontmatter.title)),a.createElement("section",{className:"items-start with-toc"},!c&&a.createElement(i.Z,{data:r.tableOfContents,articleRef:l}),a.createElement("article",{className:"flex-1 min-w-0 mr-4",ref:l},n)),a.createElement("section",null,a.createElement("hr"),r.fields.slug.startsWith("posts/")&&a.createElement("div",{className:"mb-6"},a.createElement("em",null,"Published at ",r.frontmatter.date)))))}function u(e){return a.createElement(m,e,a.createElement(o,e))}},2734:function(e,t,n){n.d(t,{Z:function(){return l}});let r=!1;try{const e=Object.defineProperty({},"passive",{get(){r=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(o){}const a=!!r&&{passive:!0};function l(e){return window.addEventListener("scroll",e,a),()=>window.removeEventListener("scroll",e,a)}},7850:function(e,t,n){n.d(t,{F:function(){return o}});var r=n(959),a=n(7133),l=n(2925);function o(){const{site:{siteMetadata:{title:e,subtitle:t}}}=(0,a.useStaticQuery)("3202921338");return r.createElement(r.Fragment,null,r.createElement("title",null,e),r.createElement("meta",{name:"description",content:t}),r.createElement("meta",{name:"google-site-verification",content:"OKMYmcVuMfm9H_UjfNXPzRb2c0QoBtmZ7v1KwHNXnRQ"}),r.createElement("link",{rel:"shortcut icon",type:"image/png",href:l.Z}))}},3722:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7880),a=n(959),l=(n(8610),n(382),n(6677),n(5e3),n(7133));const o=(i=function(e){const{allMdx:{nodes:t}}=(0,l.useStaticQuery)("1116475411"),n=(0,a.useMemo)((()=>(null==e?void 0:e.match)&&(null==t?void 0:t.filter((t=>{var n;return(null===(n=t.frontmatter.sidebar)||void 0===n?void 0:n.match)===e.match})).sort(((e,t)=>e.frontmatter.sidebar.order-t.frontmatter.sidebar.order)))),[e,t]),[r,o]=(0,a.useState)(!1);return{matchedNodes:n,show:r,setShow:o,toggle:()=>{o(!r)}}},s=a.createContext(null),{Provider:function(e){var t=i(e.initialState);return a.createElement(s.Provider,{value:t},e.children)},useContainer:function(){var e=a.useContext(s);if(null===e)throw new Error("Component must be wrapped with <Container.Provider>");return e}});var i,s,c=n(2319),m=(n(4479),n(565),n(2734));function u(){const e=(0,a.useRef)();return(0,a.useEffect)((()=>(0,m.Z)((()=>{const t=document.documentElement,n=(document.body.scrollTop||t.scrollTop)/(t.scrollHeight-t.clientHeight),r=Math.min(1,n);e.current.style.transform=`scaleX(${r})`})))),a.createElement("div",{className:"w-full h-px"},a.createElement("div",{className:"w-full h-full origin-left bg-yellow-500 scale-x-0",ref:e}))}function d(){const[e,t]=(0,a.useState)(null);return e?a.createElement("div",{className:"bg-orange-200 px-4 text-sm flex","data-ga-category":"banner"},a.createElement("div",{className:"flex-1",dangerouslySetInnerHTML:{__html:e}}),a.createElement("div",{onClick:()=>{t(null)},className:"cursor-pointer text-gray-600","data-ga-label":"hide"},"✗")):null}function h(e){const{matchedNodes:t,toggle:n}=o.useContainer(),{data:r}=e,i=r.allMdx.nodes.reduce(((e,t)=>(t.frontmatter.redirect_from.forEach((n=>{e[n]=`/${t.fields.slug}`})),e)),{});return a.createElement("header",{className:"sticky top-0 left-0 right-0 bg-white z-10"},a.createElement("nav",null,a.createElement(l.Link,{to:"/",className:"nav-icon sm:hidden"},a.createElement("svg",{viewBox:"0 0 24 24"},a.createElement("path",{d:"M12 0l-12 12h4v12h5v-8h6v8h5v-12h4z"}))),t&&a.createElement("a",{className:"nav-icon lg:hidden",onClick:e=>{e.stopPropagation(),n()}},a.createElement("svg",{viewBox:"0 0 24 24"},a.createElement("path",{d:"M0 2h24v4h-24zM0 10h24v4h-24zM0 18h24v4h-24z"}))),a.createElement(l.Link,{to:"/",className:"brand hidden sm:block"},"Violentmonkey"),a.createElement("span",{className:"flex-1"}),a.createElement("div",{className:"overflow-auto min-w-0 flex whitespace-no-wrap"},r.site.siteMetadata.menu.map((e=>a.createElement(l.Link,{className:"nav-item",key:e.path,to:i[e.path]||e.path,activeClassName:"active",partiallyActive:!0},e.label))))),a.createElement(u,null))}var f=e=>a.createElement(l.StaticQuery,{query:"1700780748",render:t=>a.createElement(a.Fragment,null,a.createElement(d,null),a.createElement(h,(0,c.Z)({},e,{data:t})))});function p(e){const{data:{site:{siteMetadata:{copyright:t,footer:n}}}}=e;return a.createElement("footer",{className:"flex mt-10 p-6 pb-16 border-t border-gray-400 lg:pb-6"},a.createElement("div",null,"Violentmonkey ",t),n.map((e=>a.createElement(l.Link,{className:"mx-2",key:e.path,to:e.path},e.label))))}var v=e=>a.createElement(l.StaticQuery,{query:"2344890832",render:t=>a.createElement(p,(0,c.Z)({},e,{data:t}))});function b(){const{matchedNodes:e,setShow:t}=o.useContainer();return(0,a.useEffect)((()=>{if(e){const e=()=>{t(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}}),[e,t]),e?a.createElement("aside",{className:"sidebar"},a.createElement("ul",null,e.map(((e,t)=>a.createElement("li",{key:t},a.createElement(l.Link,{to:`/${e.fields.slug}`,activeClassName:"active"},e.frontmatter.title)))))):null}function E(){const[e,t]=(0,a.useState)(!1);return e?a.createElement("div",{className:"fixed bottom-0 right-0 w-full h-full flex flex-col items-end z-10 max-w-[320px] max-h-[450px]"},a.createElement("div",{className:"p-2 cursor-pointer",onClick:()=>t(!1)},a.createElement("svg",{viewBox:"0 0 12 12",className:"w-4 h-4"},a.createElement("path",{d:"M0 1L11 12L12 11L1 0zM11 0L0 11L1 12L12 1z",stroke:"none",fill:"currentColor"}))),a.createElement("iframe",{className:"flex-1 w-full",src:"https://discord.com/widget?id=995346102003965952&theme=dark",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})):a.createElement("a",{className:"fixed bottom-0 right-8 px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white rounded-t-lg uppercase cursor-pointer",onClick:()=>t(!0)},"Open Chat")}const y=["sidebar"];function w(e){const{location:{pathname:t},children:n}=e,{show:r}=o.useContainer();return"/offline-plugin-app-shell-fallback/"===t?null:a.createElement(a.Fragment,null,a.createElement(f,null),a.createElement("div",{className:"relative flex z-0 "+(r?"sidebar-open":"")},a.createElement(b,null),n),a.createElement(v,null),a.createElement(E,null))}var g=e=>{let{sidebar:t}=e,n=(0,r.Z)(e,y);return a.createElement(o.Provider,{initialState:t},a.createElement(w,n))}},7683:function(e,t,n){n.d(t,{Z:function(){return i}});n(565),n(1057);var r=n(959),a=n(7133),l=n(2734);function o({items:e}){return r.createElement("ul",null,e.map(((e,t)=>{const n=e.url.indexOf("#"),l=n<0?"#":e.url.slice(n);return r.createElement("li",{key:t},r.createElement(a.Link,{to:l},e.title),e.items&&r.createElement(o,{items:e.items}))})))}function i(e){const{className:t,data:n,articleRef:a}=e,i=(0,r.useRef)(),s=(0,r.useRef)();return(0,r.useEffect)((()=>{if(!n)return;const e=Array.from(i.current.querySelectorAll("a"));e.forEach((e=>{const t=decodeURIComponent(e.href.split("#")[1]||"");if(e.dataset.id=t,a.current){const n=a.current.querySelector(`#${t}`);n&&(e.textContent=n.textContent.trim())}}));return(0,l.Z)((()=>{if(!a.current||!i.current)return;const{scrollTop:t}=document.body,n=e.map((e=>{const{id:n}=e.dataset,r=a.current.querySelector(`#${n}`);return r&&{id:n,a:e,offset:r.getBoundingClientRect().top-t-70}})).filter(Boolean),{a:r}=n.find(((e,t)=>{const r=n[t+1];return r&&r.offset>0}))||{};s.current&&(s.current.className=""),r&&(r.className="active"),s.current=r}))})),r.createElement("section",{className:`toc ${t||""}`,ref:i},(null==n?void 0:n.items)&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Table of Contents"),r.createElement(o,{items:n.items})))}},2925:function(e,t,n){t.Z=n.p+"static/vm-6437e4e5a400c6eff1c23ead4d549b0a.png"}}]);
//# sourceMappingURL=component---src-templates-post-index-js-content-file-path-content-faq-index-md-3e073515d5b7aee08895.js.map