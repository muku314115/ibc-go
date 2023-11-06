"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/middleware/ics29-fee/overview"},o="Overview",s={unversionedId:"middleware/ics29-fee/overview",id:"version-v4.5.x/middleware/ics29-fee/overview",title:"Overview",description:"Learn about what the Fee Middleware module is, and how to build custom modules that utilize the Fee Middleware functionality",source:"@site/versioned_docs/version-v4.5.x/03-middleware/01-ics29-fee/01-overview.md",sourceDirName:"03-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/overview",permalink:"/v4.5.x/middleware/ics29-fee/overview",draft:!1,tags:[],version:"v4.5.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/middleware/ics29-fee/overview"}},l={},c=[{value:"What is the Fee Middleware module?",id:"what-is-the-fee-middleware-module",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Known Limitations",id:"known-limitations",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Learn about what the Fee Middleware module is, and how to build custom modules that utilize the Fee Middleware functionality")),(0,a.kt)("h2",{id:"what-is-the-fee-middleware-module"},"What is the Fee Middleware module?"),(0,a.kt)("p",null,"IBC does not depend on relayer operators for transaction verification. However, the relayer infrastructure ensures liveness of the Interchain network \u2014 operators listen for packets sent through channels opened between chains, and perform the vital service of ferrying these packets (and proof of the transaction on the sending chain/receipt on the receiving chain) to the clients on each side of the channel."),(0,a.kt)("p",null,"Though relaying is permissionless and completely decentralized and accessible, it does come with operational costs. Running full nodes to query transaction proofs and paying for transaction fees associated with IBC packets are two of the primary cost burdens which have driven the overall discussion on ",(0,a.kt)("strong",{parentName:"p"},"a general, in-protocol incentivization mechanism for relayers"),"."),(0,a.kt)("p",null,"Initially, a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/pull/577/files"},"simple proposal")," was created to incentivize relaying on ICS20 token transfers on the destination chain. However, the proposal was specific to ICS20 token transfers and would have to be reimplemented in this format on every other IBC application module."),(0,a.kt)("p",null,"After much discussion, the proposal was expanded to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-029-fee-payment"},"general incentivisation design")," that can be adopted by any ICS application protocol as ",(0,a.kt)("a",{parentName:"p",href:"/v4.5.x/ibc/middleware/develop"},"middleware"),"."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"ICS29 fee payments in this middleware design are built on the assumption that sender chains are the source of incentives \u2014 the chain on which packets are incentivized is the chain that distributes fees to relayer operators. However, as part of the IBC packet flow, messages have to be submitted on both sender and destination chains. This introduces the requirement of a mapping of relayer operator's addresses on both chains."),(0,a.kt)("p",null,"To achieve the stated requirements, the ",(0,a.kt)("strong",{parentName:"p"},"fee middleware module has two main groups of functionality"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registering of relayer addresses associated with each party involved in relaying the packet on the source chain. This registration process can be automated on start up of relayer infrastructure and happens only once, not every packet flow."),(0,a.kt)("p",{parentName:"li"},"This is described in the ",(0,a.kt)("a",{parentName:"p",href:"/v4.5.x/middleware/ics29-fee/fee-distribution"},"Fee distribution section"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Escrowing fees by any party which will be paid out to each rightful party on completion of the packet lifecycle."),(0,a.kt)("p",{parentName:"li"},"This is described in the ",(0,a.kt)("a",{parentName:"p",href:"/v4.5.x/middleware/ics29-fee/msgs"},"Fee messages section"),"."))),(0,a.kt)("p",null,"We complete the introduction by giving a list of definitions of relevant terminolgy."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Forward relayer"),": The relayer that submits the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRecvPacket")," message for a given packet (on the destination chain)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Reverse relayer"),": The relayer that submits the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAcknowledgement")," message for a given packet (on the source chain)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Timeout relayer"),": The relayer that submits the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeout")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeoutOnClose")," messages for a given packet (on the source chain)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Payee"),": The account address on the source chain to be paid on completion of the packet lifecycle. The packet lifecycle on the source chain completes with the receipt of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeout"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeoutOnClose")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAcknowledgement"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Counterparty payee"),": The account address to be paid on completion of the packet lifecycle on the destination chain. The package lifecycle on the destination chain completes with a successful ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRecvPacket"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Refund address"),": The address of the account paying for the incentivization of packet relaying. The account is refunded timeout fees upon successful acknowledgement. In the event of a packet timeout, both acknowledgement and receive fees are refunded."),(0,a.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,a.kt)("p",null,"The first version of fee payments middleware will only support incentivisation of new channels, however, channel upgradeability will enable incentivisation of all existing channels."))}h.isMDXComponent=!0}}]);