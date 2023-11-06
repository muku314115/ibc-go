"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s="ADR 003: ICS27 Acknowledgement Format",i={unversionedId:"adr-003-ics27-acknowledgement",id:"adr-003-ics27-acknowledgement",title:"ADR 003: ICS27 Acknowledgement Format",description:"Changelog",source:"@site/architecture/adr-003-ics27-acknowledgement.md",sourceDirName:".",slug:"/adr-003-ics27-acknowledgement",permalink:"/architecture/adr-003-ics27-acknowledgement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 002: Go module versioning",permalink:"/architecture/adr-002-go-module-versioning"},next:{title:"ADR 004: Lock fee module upon escrow out of balance",permalink:"/architecture/adr-004-ics29-lock-fee-module"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Successful acknowledgements",id:"successful-acknowledgements",level:3},{value:"v0.45 format",id:"v045-format",level:4},{value:"Next major version format",id:"next-major-version-format",level:4},{value:"Forwards compatible approach",id:"forwards-compatible-approach",level:4},{value:"Decision",id:"decision-1",level:4},{value:"Error acknowledgements",id:"error-acknowledgements",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-003-ics27-acknowledgement-format"},"ADR 003: ICS27 Acknowledgement Format"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"January 28th, 2022: Initial Draft")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Upon receiving an IBC packet, an IBC application can optionally return an acknowledgement.\nThis acknowledgement will be hashed and written into state. Thus any changes to the information included in an acknowledgement are state machine breaking."),(0,o.kt)("p",null,"ICS27 executes transactions on behalf of a controller chain. Information such as the message result or message error may be returned from other SDK modules outside the control of the ICS27 module.\nIt might be very valuable to return message execution information inside the ICS27 acknowledgement so that controller chain interchain account auth modules can act upon this information.\nOnly determinstic information returned from the message execution is allowed to be returned in the packet acknowledgement otherwise the network will halt due to a fork in the expected app hash."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"At the time of this writing, Tendermint includes the following information in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/release/v0.34.13/types/results.go#L47-#L53"},"ABCI.ResponseDeliverTx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// deterministicResponseDeliverTx strips non-deterministic fields from\n// ResponseDeliverTx and returns another ResponseDeliverTx.\nfunc deterministicResponseDeliverTx(response *abci.ResponseDeliverTx) *abci.ResponseDeliverTx {\n  return &abci.ResponseDeliverTx{\n    Code:      response.Code,\n    Data:      response.Data,\n    GasWanted: response.GasWanted,\n    GasUsed:   response.GasUsed,\n  }\n}\n")),(0,o.kt)("h3",{id:"successful-acknowledgements"},"Successful acknowledgements"),(0,o.kt)("p",null,"Successful acknowledgements should return information about the transaction execution.\nGiven the determinstic fields in the ",(0,o.kt)("inlineCode",{parentName:"p"},"abci.ResponseDeliverTx"),", the transaction ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," can be used to indicate information about the transaction execution.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"abci.ResponseDeliverTx.Data")," will be set in the ICS27 packet acknowledgement upon successful transaction execution."),(0,o.kt)("p",null,"The format for the ",(0,o.kt)("inlineCode",{parentName:"p"},"abci.ResponseDeliverTx.Data")," is constructed by the SDK."),(0,o.kt)("p",null,"At the time of this writing, the next major release of the SDK will change the format for constructing the transaction response data."),(0,o.kt)("h4",{id:"v045-format"},"v0.45 format"),(0,o.kt)("p",null,"The current version, v0.45 constructs the transaction response as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"proto.Marshal(&sdk.TxMsgData{\n  Data: []*sdk.MsgData{msgResponses...}, \n}\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"msgResponses")," is a slice of ",(0,o.kt)("inlineCode",{parentName:"p"},"*sdk.MsgData"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgData.MsgType")," contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.MsgTypeURL")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," being executed.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgData.Data")," contains the proto marshaled ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgResponse")," for the associated message executed."),(0,o.kt)("h4",{id:"next-major-version-format"},"Next major version format"),(0,o.kt)("p",null,"The next major version will construct the transaction response as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"proto.Marshal(&sdk.TxMsgData{\n  MsgResponses: []*codectypes.Any{msgResponses...}, \n}\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"msgResponses")," is a slice of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgResponse"),"s packed into ",(0,o.kt)("inlineCode",{parentName:"p"},"Any"),"s."),(0,o.kt)("h4",{id:"forwards-compatible-approach"},"Forwards compatible approach"),(0,o.kt)("p",null,"A forwards compatible approach was deemed infeasible.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"handler")," provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgServiceRouter")," will only include the ",(0,o.kt)("inlineCode",{parentName:"p"},"*sdk.Result")," and an error (if one occurred).\nIn v0.45 of the SDK, the ",(0,o.kt)("inlineCode",{parentName:"p"},"*sdk.Result.Data")," will contain the MsgResponse marshaled data.\nHowever, the MsgResponse is not packed and marshaled as a ",(0,o.kt)("inlineCode",{parentName:"p"},"*codectypes.Any"),", thus making it impossible from a generalized point of view to unmarshal the bytes.\nIf the bytes could be unmarshaled, then they could be packed into an ",(0,o.kt)("inlineCode",{parentName:"p"},"*codectypes.Any")," in anticipation of the upcoming format.  "),(0,o.kt)("p",null,"Intercepting the MsgResponse before it becomes marshaled requires replicating this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/dfd47f5b449f558a855da284a9a7eabbfbad435d/baseapp/msg_service_router.go#L109-#L128"},"code"),".\nIt may not even be possible to replicate the linked code. The method handler would need to be accessed somehow."),(0,o.kt)("p",null,"For these reasons it is deemed infeasible to attempt a fowards compatible approach."),(0,o.kt)("p",null,"ICA auth developers can interpret which format was used when constructing the transaction response by checking if the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.TxMsgData.Data")," field is non-empty.\nIf the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.TxMsgData.Data")," field is not empty then the format for v0.45 was used, otherwise ICA auth developers can assume the transaction response uses the newer format."),(0,o.kt)("h4",{id:"decision-1"},"Decision"),(0,o.kt)("p",null,"Replicate the transaction response format as provided by the current SDK verison.\nWhen the SDK version changes, adjust the transaction response format to use the updated transaction response format.\nInclude the transaction response bytes in the result channel acknowledgement."),(0,o.kt)("p",null,"A test has been ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/ibc_module_test.go#L716-#L774"},"written")," to fail if the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgResponse")," is no longer included in consensus."),(0,o.kt)("h3",{id:"error-acknowledgements"},"Error acknowledgements"),(0,o.kt)("p",null,"As indicated above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"abci.ResponseDeliverTx.Code")," is determinstic.\nUpon transaction execution errors, an error acknowledgement should be returned including the abci code."),(0,o.kt)("p",null,"A test has been ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/types/ack_test.go#L41-#L82"},"written")," to fail if the ABCI code is no longer determinstic."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'This section describes the consequences, after applying the decision. All consequences should be summarized here, not just the "positive" ones.')),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"interchain account auth modules can act upon transaction results without requiring a query module"),(0,o.kt)("li",{parentName:"ul"},"transaction results align with those returned by execution of a normal SDK message.")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the security assumptions of this decision rest on the inclusion of the ABCI error code and the Msg response in the ResponseDeliverTx hash created by Tendermint"),(0,o.kt)("li",{parentName:"ul"},"events are non-determinstic and cannot be included in the packet acknowledgement")),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("p",null,"No neutral consequences."))}u.isMDXComponent=!0}}]);