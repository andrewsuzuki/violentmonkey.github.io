"use strict";(self.webpackChunkviolentmonkey_github_io=self.webpackChunkviolentmonkey_github_io||[]).push([[763],{616:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function l(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{ah:function(){return m}});var o=n(959);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const s=o.createContext({});function m(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):i(i({},t),e)),[t,e])}},2896:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.F},default:function(){return u}});var r=n(616),a=n(959);function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",span:"span",em:"em",ol:"ol",li:"li",code:"code",strong:"strong"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"It is highly recommended to update the translations on ",a.createElement(t.a,{href:"https://www.transifex.com/",target:"_blank",rel:"noopener noreferrer"},"Transifex"),", to utilize the powerful features provided by the platform and for better maintenance."),"\n",a.createElement(t.p,null,"We have automated weekly synchronization from Transifex, so the translations will be updated to the code soon."),"\n",a.createElement(t.h2,{id:"transifex-recommended",style:{position:"relative"}},a.createElement(t.a,{href:"#transifex-recommended","aria-label":"transifex recommended permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Transifex (Recommended)"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://www.transifex.com/violentmonkey/violentmonkey-nex/",target:"_blank",rel:"noopener noreferrer"},"👉🏻 Start translating or fix an existing translation.\n")),"\n",a.createElement(t.h2,{id:"pull-requests",style:{position:"relative"}},a.createElement(t.a,{href:"#pull-requests","aria-label":"pull requests permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Pull Requests"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Please consider using Transifex first.")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Fork Violentmonkey from ",a.createElement(t.a,{href:"https://github.com/violentmonkey/violentmonkey",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Copy ",a.createElement(t.code,null,"src/_locales/en/messages.yml")," into ",a.createElement(t.code,null,"src/_locales/<your_locale>/messages.yml"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Translate messages in the created ",a.createElement(t.code,null,"messages.yml")," or the one you'd like to modify."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Make sure the modified ",a.createElement(t.code,null,"messages.yml")," is valid yaml.")),"\n",a.createElement(t.p,null,"If you are not sure how to do this, please use Transifex instead."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Commit changes and create a pull request."),"\n"),"\n"))}var o=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(7683),i=n(3722),s=n(7850);function m({location:e,data:t,children:n}){const{mdx:r}=t,l=(0,a.useRef)(),{pathname:o}=e,s="/"===o;return a.createElement(i.Z,{location:e,sidebar:r.frontmatter.sidebar},a.createElement("main",{className:"flex-1 has-toc"},!s&&a.createElement("section",{className:"mb-10 pt-1"},a.createElement("h1",null,r.frontmatter.title)),a.createElement("section",{className:"items-start with-toc"},!s&&a.createElement(c.Z,{data:r.tableOfContents,articleRef:l}),a.createElement("article",{className:"flex-1 min-w-0 mr-4",ref:l},n)),a.createElement("section",null,a.createElement("hr"),r.fields.slug.startsWith("posts/")&&a.createElement("div",{className:"mb-6"},a.createElement("em",null,"Published at ",r.frontmatter.date)))))}function u(e){return a.createElement(m,e,a.createElement(o,e))}},2734:function(e,t,n){n.d(t,{Z:function(){return l}});let r=!1;try{const e=Object.defineProperty({},"passive",{get(){r=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(o){}const a=!!r&&{passive:!0};function l(e){return window.addEventListener("scroll",e,a),()=>window.removeEventListener("scroll",e,a)}},7850:function(e,t,n){n.d(t,{F:function(){return o}});var r=n(959),a=n(7133),l=n(2925);function o(){const{site:{siteMetadata:{title:e,subtitle:t}}}=(0,a.useStaticQuery)("3202921338");return r.createElement(r.Fragment,null,r.createElement("title",null,e),r.createElement("meta",{name:"description",content:t}),r.createElement("meta",{name:"google-site-verification",content:"OKMYmcVuMfm9H_UjfNXPzRb2c0QoBtmZ7v1KwHNXnRQ"}),r.createElement("link",{rel:"shortcut icon",type:"image/png",href:l.Z}))}},3722:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7880),a=n(959),l=(n(8610),n(382),n(6677),n(5e3),n(7133));const o=(c=function(e){const{allMdx:{nodes:t}}=(0,l.useStaticQuery)("1116475411"),n=(0,a.useMemo)((()=>(null==e?void 0:e.match)&&(null==t?void 0:t.filter((t=>{var n;return(null===(n=t.frontmatter.sidebar)||void 0===n?void 0:n.match)===e.match})).sort(((e,t)=>e.frontmatter.sidebar.order-t.frontmatter.sidebar.order)))),[e,t]),[r,o]=(0,a.useState)(!1);return{matchedNodes:n,show:r,setShow:o,toggle:()=>{o(!r)}}},i=a.createContext(null),{Provider:function(e){var t=c(e.initialState);return a.createElement(i.Provider,{value:t},e.children)},useContainer:function(){var e=a.useContext(i);if(null===e)throw new Error("Component must be wrapped with <Container.Provider>");return e}});var c,i,s=n(2319),m=(n(4479),n(565),n(2734));function u(){const e=(0,a.useRef)();return(0,a.useEffect)((()=>(0,m.Z)((()=>{const t=document.documentElement,n=(document.body.scrollTop||t.scrollTop)/(t.scrollHeight-t.clientHeight),r=Math.min(1,n);e.current.style.transform=`scaleX(${r})`})))),a.createElement("div",{className:"w-full h-px"},a.createElement("div",{className:"w-full h-full origin-left bg-yellow-500 scale-x-0",ref:e}))}function d(){const[e,t]=(0,a.useState)(null);return e?a.createElement("div",{className:"bg-orange-200 px-4 text-sm flex","data-ga-category":"banner"},a.createElement("div",{className:"flex-1",dangerouslySetInnerHTML:{__html:e}}),a.createElement("div",{onClick:()=>{t(null)},className:"cursor-pointer text-gray-600","data-ga-label":"hide"},"✗")):null}function f(e){const{matchedNodes:t,toggle:n}=o.useContainer(),{data:r}=e,c=r.allMdx.nodes.reduce(((e,t)=>(t.frontmatter.redirect_from.forEach((n=>{e[n]=`/${t.fields.slug}`})),e)),{});return a.createElement("header",{className:"sticky top-0 left-0 right-0 bg-white z-10"},a.createElement("nav",null,a.createElement(l.Link,{to:"/",className:"nav-icon sm:hidden"},a.createElement("svg",{viewBox:"0 0 24 24"},a.createElement("path",{d:"M12 0l-12 12h4v12h5v-8h6v8h5v-12h4z"}))),t&&a.createElement("a",{className:"nav-icon lg:hidden",onClick:e=>{e.stopPropagation(),n()}},a.createElement("svg",{viewBox:"0 0 24 24"},a.createElement("path",{d:"M0 2h24v4h-24zM0 10h24v4h-24zM0 18h24v4h-24z"}))),a.createElement(l.Link,{to:"/",className:"brand hidden sm:block"},"Violentmonkey"),a.createElement("span",{className:"flex-1"}),a.createElement("div",{className:"overflow-auto min-w-0 flex whitespace-no-wrap"},r.site.siteMetadata.menu.map((e=>a.createElement(l.Link,{className:"nav-item",key:e.path,to:c[e.path]||e.path,activeClassName:"active",partiallyActive:!0},e.label))))),a.createElement(u,null))}var p=e=>a.createElement(l.StaticQuery,{query:"1700780748",render:t=>a.createElement(a.Fragment,null,a.createElement(d,null),a.createElement(f,(0,s.Z)({},e,{data:t})))});function h(e){const{data:{site:{siteMetadata:{copyright:t,footer:n}}}}=e;return a.createElement("footer",{className:"flex mt-10 p-6 pb-16 border-t border-gray-400 lg:pb-6"},a.createElement("div",null,"Violentmonkey ",t),n.map((e=>a.createElement(l.Link,{className:"mx-2",key:e.path,to:e.path},e.label))))}var E=e=>a.createElement(l.StaticQuery,{query:"2344890832",render:t=>a.createElement(h,(0,s.Z)({},e,{data:t}))});function v(){const{matchedNodes:e,setShow:t}=o.useContainer();return(0,a.useEffect)((()=>{if(e){const e=()=>{t(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}}),[e,t]),e?a.createElement("aside",{className:"sidebar"},a.createElement("ul",null,e.map(((e,t)=>a.createElement("li",{key:t},a.createElement(l.Link,{to:`/${e.fields.slug}`,activeClassName:"active"},e.frontmatter.title)))))):null}function b(){const[e,t]=(0,a.useState)(!1);return e?a.createElement("div",{className:"fixed bottom-0 right-0 w-full h-full flex flex-col items-end z-10 max-w-[320px] max-h-[450px]"},a.createElement("div",{className:"p-2 cursor-pointer",onClick:()=>t(!1)},a.createElement("svg",{viewBox:"0 0 12 12",className:"w-4 h-4"},a.createElement("path",{d:"M0 1L11 12L12 11L1 0zM11 0L0 11L1 12L12 1z",stroke:"none",fill:"currentColor"}))),a.createElement("iframe",{className:"flex-1 w-full",src:"https://discord.com/widget?id=995346102003965952&theme=dark",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})):a.createElement("a",{className:"fixed bottom-0 right-8 px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white rounded-t-lg uppercase cursor-pointer",onClick:()=>t(!0)},"Open Chat")}const g=["sidebar"];function y(e){const{location:{pathname:t},children:n}=e,{show:r}=o.useContainer();return"/offline-plugin-app-shell-fallback/"===t?null:a.createElement(a.Fragment,null,a.createElement(p,null),a.createElement("div",{className:"relative flex z-0 "+(r?"sidebar-open":"")},a.createElement(v,null),n),a.createElement(E,null),a.createElement(b,null))}var w=e=>{let{sidebar:t}=e,n=(0,r.Z)(e,g);return a.createElement(o.Provider,{initialState:t},a.createElement(y,n))}},7683:function(e,t,n){n.d(t,{Z:function(){return c}});n(565),n(1057);var r=n(959),a=n(7133),l=n(2734);function o({items:e}){return r.createElement("ul",null,e.map(((e,t)=>{const n=e.url.indexOf("#"),l=n<0?"#":e.url.slice(n);return r.createElement("li",{key:t},r.createElement(a.Link,{to:l},e.title),e.items&&r.createElement(o,{items:e.items}))})))}function c(e){const{className:t,data:n,articleRef:a}=e,c=(0,r.useRef)(),i=(0,r.useRef)();return(0,r.useEffect)((()=>{if(!n)return;const e=Array.from(c.current.querySelectorAll("a"));e.forEach((e=>{const t=decodeURIComponent(e.href.split("#")[1]||"");if(e.dataset.id=t,a.current){const n=a.current.querySelector(`#${t}`);n&&(e.textContent=n.textContent.trim())}}));return(0,l.Z)((()=>{if(!a.current||!c.current)return;const{scrollTop:t}=document.body,n=e.map((e=>{const{id:n}=e.dataset,r=a.current.querySelector(`#${n}`);return r&&{id:n,a:e,offset:r.getBoundingClientRect().top-t-70}})).filter(Boolean),{a:r}=n.find(((e,t)=>{const r=n[t+1];return r&&r.offset>0}))||{};i.current&&(i.current.className=""),r&&(r.className="active"),i.current=r}))})),r.createElement("section",{className:`toc ${t||""}`,ref:c},(null==n?void 0:n.items)&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Table of Contents"),r.createElement(o,{items:n.items})))}},2925:function(e,t,n){t.Z=n.p+"static/vm-6437e4e5a400c6eff1c23ead4d549b0a.png"}}]);
//# sourceMappingURL=component---src-templates-post-index-js-content-file-path-content-localization-index-md-430734c217f1c5151033.js.map