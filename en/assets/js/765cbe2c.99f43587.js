"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[557],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(4137)),a=["components"],l={sidebar_position:2},p="App",s={unversionedId:"reference/layers/app",id:"reference/layers/app",isDocsHomePage:!1,title:"App",description:"When it becomes difficult to control and extend the initializing logic of the application (global styles/initialization of external libraries/routing/SSR)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/app.md",sourceDirName:"reference/layers",slug:"/reference/layers/app",permalink:"/en/docs/reference/layers/app",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/app.md",tags:[],version:"current",lastUpdatedAt:1647527299,formattedLastUpdatedAt:"3/17/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"referenceSidebar",previous:{title:"Overview",permalink:"/en/docs/reference/layers/overview"},next:{title:"Processes",permalink:"/en/docs/reference/layers/processes"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Initializing the router",id:"initializing-the-router",children:[],level:3},{value:"Initializing external libraries",id:"initializing-external-libraries",children:[],level:3},{value:"Enabling initialization",id:"enabling-initialization",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app"},"App"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"When to use?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When it becomes difficult to control and extend the initializing logic of the application (global styles/initialization of external libraries/routing/SSR)"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app-themed-bordered",src:n(6290).Z})),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"There are usually placed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"initialization of processes and other background logic"),(0,o.kt)("li",{parentName:"ul"},"initialization of providers, wrappers"),(0,o.kt)("li",{parentName:"ul"},"connecting global application styles")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The methodology does not yet regulate the content of this layer in any way, so it depends on the specific project")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"initializing-the-router"},"Initializing the router"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/withRouter.tsx",title:"app/providers/withRouter.tsx"},"export const withRouter = (component: Component) => () => (\n    <Router>\n        <Suspense fallback={<Spin overlay />}>\n            <QueryParamProvider ReactRouterRoute={Route}>\n                {component()}\n            </QueryParamProvider>\n        </Suspense>\n    </Router>\n);\n")),(0,o.kt)("h3",{id:"initializing-external-libraries"},"Initializing external libraries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/withAntd.tsx",title:"app/providers/withAntd.tsx"},"export const withAntd = (component: Component) => () => (\n    <ConfigProvider getPopupContainer={...}>\n        {component()}\n    </ConfigProvider>\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/withApollo.tsx",title:"app/providers/withApollo.tsx"},"const client = new ApolloClient({ ... });\n\nexport const withApollo = (component: Component) => () => (\n    <ApolloProvider client={client}>\n        {component()}\n    </ApolloProvider>\n);\n")),(0,o.kt)("h3",{id:"enabling-initialization"},"Enabling initialization"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Only one of the methods is shown here, if you use HOC for providers and logic initialization")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/index.ts",title:"app/providers/index.ts"},'import compose from "compose-function";\nimport { withRouter } from "./with-router";\nimport { withAntd } from "./with-antd";\n...\n\n// 1. The compose library is often exported from some dependencies that you already use\n// e.g.: `import { compose } from "redux"`\n// 2. It is worth considering the order of HOCs connection\n// e.g.: withHOC2 cannot be started until there is a wrapper withHOC1, etc.\nexport const withProviders = compose(withRouter, withAntd,...);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/index.tsx",title:"app/index.tsx"},'import { withProviders } from "./providers";\n...\n\nconst App = () => { ... }\n\nexport default withProviders(App);\n')))}d.isMDXComponent=!0},6290:function(e,t,n){t.Z=n.p+"assets/images/app-f2b5dd3e5531b1008447b0487b493c0f.png"}}]);