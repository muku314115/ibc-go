"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9326],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),k=r,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||o;return t?a.createElement(u,p(p({ref:n},c),{},{components:t})):a.createElement(u,p({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=k;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},47411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={title:"IBC-Go v4 to v5",sidebar_label:"IBC-Go v4 to v5",sidebar_position:6,slug:"/migrations/v4-to-v5"},p="Migrating from v4 to v5",i={unversionedId:"migrations/v4-to-v5",id:"migrations/v4-to-v5",title:"IBC-Go v4 to v5",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/docs/05-migrations/06-v4-to-v5.md",sourceDirName:"05-migrations",slug:"/migrations/v4-to-v5",permalink:"/main/migrations/v4-to-v5",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"IBC-Go v4 to v5",sidebar_label:"IBC-Go v4 to v5",sidebar_position:6,slug:"/migrations/v4-to-v5"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v3 to v4",permalink:"/main/migrations/v3-to-v4"},next:{title:"IBC-Go v5 to v6",permalink:"/main/migrations/v5-to-v6"}},s={},l=[{value:"Chains",id:"chains",level:2},{value:"Ante decorator",id:"ante-decorator",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"Core",id:"core",level:3},{value:"ICS03 - Connection",id:"ics03---connection",level:3},{value:"ICS04 - Channel",id:"ics04---channel",level:3},{value:"ICS20 - Transfer",id:"ics20---transfer",level:3},{value:"ICS27 - Interchain Accounts",id:"ics27---interchain-accounts",level:3},{value:"Cosmos SDK message handler responses in packet acknowledgement",id:"cosmos-sdk-message-handler-responses-in-packet-acknowledgement",level:4},{value:"ICS29 - Fee Middleware",id:"ics29---fee-middleware",level:3},{value:"IBC testing package",id:"ibc-testing-package",level:3},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2},{value:"ICS02 - Client",id:"ics02---client",level:3}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-v4-to-v5"},"Migrating from v4 to v5"),(0,r.kt)("p",null,"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."),(0,r.kt)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chains"},"Chains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ibc-apps"},"IBC Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#relayers"},"Relayers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ibc-light-clients"},"IBC Light Clients"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"github.com/cosmos/ibc-go/v4 -> github.com/cosmos/ibc-go/v5\n")),(0,r.kt)("h2",{id:"chains"},"Chains"),(0,r.kt)("h3",{id:"ante-decorator"},"Ante decorator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AnteDecorator")," type in ",(0,r.kt)("inlineCode",{parentName:"p"},"core/ante")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"RedundantRelayDecorator")," (and the corresponding constructor function to ",(0,r.kt)("inlineCode",{parentName:"p"},"NewRedundantRelayDecorator"),"). Therefore in the function that creates the instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.AnteHandler")," type (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"NewAnteHandler"),") the change would be like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewAnteHandler(options HandlerOptions) (sdk.AnteHandler, error) {\n  // parameter validation\n\n  anteDecorators := []sdk.AnteDecorator{\n    // other ante decorators\n-   ibcante.NewAnteDecorator(opts.IBCkeeper),\n+   ibcante.NewRedundantRelayDecorator(options.IBCKeeper),\n  }\n\n  return sdk.ChainAnteDecorators(anteDecorators...), nil\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AnteDecorator")," was actually renamed twice, but in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/1820"},"this PR")," you can see the changes made for the final rename."),(0,r.kt)("h2",{id:"ibc-apps"},"IBC Apps"),(0,r.kt)("h3",{id:"core"},"Core"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/core/keeper")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes.StoreKey")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/cosmos-sdk/store/types"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   stakingKeeper clienttypes.StakingKeeper,\n   upgradeKeeper clienttypes.UpgradeKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n) *Keeper\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterRESTRoutes")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/core")," has been removed."),(0,r.kt)("h3",{id:"ics03---connection"},"ICS03 - Connection"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/core/03-connection/keeper")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes.StoreKey")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/cosmos-sdk/store/types"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ck types.ClientKeeper\n) Keeper\n")),(0,r.kt)("h3",{id:"ics04---channel"},"ICS04 - Channel"),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"NewPacketId")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/core/04-channel/types")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"NewPacketID"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"-  func NewPacketId(\n+  func NewPacketID(\n  portID,\n  channelID string,\n  seq uint64\n) PacketId\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/core/04-channel/keeper")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes.StoreKey")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/cosmos-sdk/store/types"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   clientKeeper types.ClientKeeper,\n   connectionKeeper types.ConnectionKeeper,\n   portKeeper types.PortKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n) Keeper\n")),(0,r.kt)("h3",{id:"ics20---transfer"},"ICS20 - Transfer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/apps/transfer/keeper")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes.StoreKey")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/cosmos-sdk/store/types"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ics4Wrapper types.ICS4Wrapper,\n   channelKeeper types.ChannelKeeper,\n   portKeeper types.PortKeeper,\n   authKeeper types.AccountKeeper,\n   bankKeeper types.BankKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n) Keeper\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," parameter of function ",(0,r.kt)("inlineCode",{parentName:"p"},"GetTransferCoin")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/apps/transfer/types")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"math.Int")," (",(0,r.kt)("inlineCode",{parentName:"p"},'"cosmossdk.io/math"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func GetTransferCoin(\n   portID, channelID, baseDenom string,\n-  amount sdk.Int\n+  amount math.Int\n) sdk.Coin\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterRESTRoutes")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/apps/transfer")," has been removed."),(0,r.kt)("h3",{id:"ics27---interchain-accounts"},"ICS27 - Interchain Accounts"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"msgRouter")," parameters of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," functions in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modules/apps/27-interchain-accounts/controller/keeper")),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("inlineCode",{parentName:"li"},"modules/apps/27-interchain-accounts/host/keeper"))),(0,r.kt)("p",null,"have changed type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes.StoreKey")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/cosmos-sdk/store/types"'),"), and the ",(0,r.kt)("inlineCode",{parentName:"p"},"msgRouter")," parameter is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"*icatypes.MessageRouter")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"icatypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/ibc-go/v5/modules/apps/27-interchain-accounts/types"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// NewKeeper creates a new interchain accounts controller Keeper instance\nfunc NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ics4Wrapper icatypes.ICS4Wrapper,\n   channelKeeper icatypes.ChannelKeeper,\n   portKeeper icatypes.PortKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n-  msgRouter *baseapp.MsgServiceRouter,\n+  msgRouter *icatypes.MessageRouter,\n) Keeper\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// NewKeeper creates a new interchain accounts host Keeper instance\nfunc NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   channelKeeper icatypes.ChannelKeeper,\n   portKeeper icatypes.PortKeeper,\n   accountKeeper icatypes.AccountKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n-  msgRouter *baseapp.MsgServiceRouter,\n+  msgRouter *icatypes.MessageRouter,\n) Keeper\n")),(0,r.kt)("p",null,"The new ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageRouter")," interface is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MessageRouter interface {\n  Handler(msg sdk.Msg) baseapp.MsgServiceHandler\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterRESTRoutes")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/apps/27-interchain-accounts")," has been removed."),(0,r.kt)("p",null,"An additional parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"ics4Wrapper")," has been added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," submodule ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/apps/27-interchain-accounts/host/keeper"),".\nThis allows the ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," submodule to correctly unwrap the channel version for channel reopening handshakes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnChanOpenTry")," callback."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewKeeper(\n   cdc codec.BinaryCodec,\n   key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n+  ics4Wrapper icatypes.ICS4Wrapper,\n   channelKeeper icatypes.ChannelKeeper,\n   portKeeper icatypes.PortKeeper,\n   accountKeeper icatypes.AccountKeeper,\n   scopedKeeper icatypes.ScopedKeeper,\n   msgRouter icatypes.MessageRouter,\n) Keeper\n")),(0,r.kt)("h4",{id:"cosmos-sdk-message-handler-responses-in-packet-acknowledgement"},"Cosmos SDK message handler responses in packet acknowledgement"),(0,r.kt)("p",null,"The construction of the transaction response of a message execution on the host chain has changed. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.TxMsgData")," has been deprecated and since Cosmos SDK 0.46 the ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgResponses")," field contains the message handler responses packed into ",(0,r.kt)("inlineCode",{parentName:"p"},"Any"),"s."),(0,r.kt)("p",null,"For chains on Cosmos SDK 0.45 and below, the message response was constructed like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"txMsgData := &sdk.TxMsgData{\n  Data: make([]*sdk.MsgData, len(msgs)),\n}\n\nfor i, msg := range msgs {\n  // message validation\n\n  msgResponse, err := k.executeMsg(cacheCtx, msg)\n  // return if err != nil\n\n  txMsgData.Data[i] = &sdk.MsgData{\n    MsgType: sdk.MsgTypeURL(msg),\n    Data:    msgResponse,\n  }\n}\n\n// emit events\n\ntxResponse, err := proto.Marshal(txMsgData)\n// return if err != nil\n\nreturn txResponse, nil\n")),(0,r.kt)("p",null,"And for chains on Cosmos SDK 0.46 and above, it is now done like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"txMsgData := &sdk.TxMsgData{\n  MsgResponses: make([]*codectypes.Any, len(msgs)),\n}\n\nfor i, msg := range msgs {\n  // message validation\n\n  protoAny, err := k.executeMsg(cacheCtx, msg)\n  // return if err != nil\n\n  txMsgData.MsgResponses[i] = protoAny\n}\n\n// emit events\n\ntxResponse, err := proto.Marshal(txMsgData)\n// return if err != nil\n\nreturn txResponse, nil\n")),(0,r.kt)("p",null,"When handling the acknowledgement in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket")," callback of a custom ICA controller module, then depending on whether ",(0,r.kt)("inlineCode",{parentName:"p"},"txMsgData.Data")," is empty or not, the logic to handle the message handler response will be different. ",(0,r.kt)("strong",{parentName:"p"},"Only controller chains on Cosmos SDK 0.46 or above will be able to write the logic needed to handle the response from a host chain on Cosmos SDK 0.46 or above.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var ack channeltypes.Acknowledgement\nif err := channeltypes.SubModuleCdc.UnmarshalJSON(acknowledgement, &ack); err != nil {\n  return err\n}\n\nvar txMsgData sdk.TxMsgData\nif err := proto.Unmarshal(ack.GetResult(), txMsgData); err != nil {\n  return err\n}\n\nswitch len(txMsgData.Data) {\ncase 0: // for SDK 0.46 and above\n  for _, msgResponse := range txMsgData.MsgResponses {\n    // unmarshall msgResponse and execute logic based on the response\n  }\n  return nil\ndefault: // for SDK 0.45 and below\n  for _, msgData := range txMsgData.Data {\n    // unmarshall msgData and execute logic based on the response\n  }\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/architecture/adr-003-ics27-acknowledgement#next-major-version-format"},"ADR-03")," for more information or the ",(0,r.kt)("a",{parentName:"p",href:"/main/apps/interchain-accounts/auth-modules#onacknowledgementpacket"},"corrresponding documentation about authentication modules"),"."),(0,r.kt)("h3",{id:"ics29---fee-middleware"},"ICS29 - Fee Middleware"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/apps/29-fee")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes.StoreKey")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/cosmos-sdk/store/types"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ics4Wrapper types.ICS4Wrapper,\n   channelKeeper types.ChannelKeeper,\n   portKeeper types.PortKeeper,\n   authKeeper types.AccountKeeper,\n   bankKeeper types.BankKeeper,\n) Keeper\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterRESTRoutes")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/apps/29-fee")," has been removed."),(0,r.kt)("h3",{id:"ibc-testing-package"},"IBC testing package"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MockIBCApp")," type has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCApp")," (and the corresponding constructor function to ",(0,r.kt)("inlineCode",{parentName:"p"},"NewIBCApp"),"). This has resulted therefore in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"IBCApp")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"*IBCModule")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"testing/mock")," to change its type as well to ",(0,r.kt)("inlineCode",{parentName:"li"},"*IBCApp"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"type IBCModule struct {\n   appModule *AppModule\n-  IBCApp    *MockIBCApp // base application of an IBC middleware stack\n+  IBCApp    *IBCApp // base application of an IBC middleware stack\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," parameter to ",(0,r.kt)("inlineCode",{parentName:"li"},"*NewIBCModule")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"testing/mock")," to change its type as well to ",(0,r.kt)("inlineCode",{parentName:"li"},"*IBCApp"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewIBCModule(\n   appModule *AppModule,\n-  app *MockIBCApp\n+  app *IBCApp\n) IBCModule\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MockEmptyAcknowledgement")," type has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"EmptyAcknowledgement")," (and the corresponding constructor function to ",(0,r.kt)("inlineCode",{parentName:"p"},"NewEmptyAcknowledgement"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TestingApp")," interface in ",(0,r.kt)("inlineCode",{parentName:"p"},"testing")," has gone through some modifications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The return type of the function ",(0,r.kt)("inlineCode",{parentName:"li"},"GetStakingKeeper")," is not the concrete type ",(0,r.kt)("inlineCode",{parentName:"li"},"stakingkeeper.Keeper")," anymore (where ",(0,r.kt)("inlineCode",{parentName:"li"},"stakingkeeper")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"li"},'"github.com/cosmos/cosmos-sdk/x/staking/keeper"'),"), but it has been changed to the interface ",(0,r.kt)("inlineCode",{parentName:"li"},"ibctestingtypes.StakingKeeper")," (where ",(0,r.kt)("inlineCode",{parentName:"li"},"ibctestingtypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"li"},'""github.com/cosmos/ibc-go/v5/testing/types"'),"). See this ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/2028"},"PR")," for more details. The ",(0,r.kt)("inlineCode",{parentName:"li"},"StakingKeeper")," interface is defined as:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type StakingKeeper interface {\n  GetHistoricalInfo(ctx sdk.Context, height int64) (stakingtypes.HistoricalInfo, bool)\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The return type of the function ",(0,r.kt)("inlineCode",{parentName:"li"},"LastCommitID")," has changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"storetypes.CommitID")," (where ",(0,r.kt)("inlineCode",{parentName:"li"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"li"},'"github.com/cosmos/cosmos-sdk/store/types"'),").")),(0,r.kt)("p",null,"See the following ",(0,r.kt)("inlineCode",{parentName:"p"},"git diff")," for more details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"type TestingApp interface {\n   abci.Application\n\n   // ibc-go additions\n   GetBaseApp() *baseapp.BaseApp\n-  GetStakingKeeper() stakingkeeper.Keeper\n+  GetStakingKeeper() ibctestingtypes.StakingKeeper\n   GetIBCKeeper() *keeper.Keeper\n   GetScopedIBCKeeper() capabilitykeeper.ScopedKeeper\n   GetTxConfig() client.TxConfig\n\n   // Implemented by SimApp\n   AppCodec() codec.Codec\n\n   // Implemented by BaseApp\n-  LastCommitID() sdk.CommitID\n+  LastCommitID() storetypes.CommitID\n   LastBlockHeight() int64\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"powerReduction")," parameter of the function ",(0,r.kt)("inlineCode",{parentName:"p"},"SetupWithGenesisValSet")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"testing")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"math.Int")," (",(0,r.kt)("inlineCode",{parentName:"p"},'"cosmossdk.io/math"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func SetupWithGenesisValSet(\n   t *testing.T,\n   valSet *tmtypes.ValidatorSet,\n   genAccs []authtypes.GenesisAccount,\n   chainID string,\n-  powerReduction sdk.Int,\n+  powerReduction math.Int,\n   balances ...banktypes.Balance\n) TestingApp\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accAmt")," parameter of the functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddTestAddrsFromPubKeys")," ,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddTestAddrs")),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("inlineCode",{parentName:"li"},"AddTestAddrsIncremental"))),(0,r.kt)("p",null,"in ",(0,r.kt)("inlineCode",{parentName:"p"},"testing/simapp")," are now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"math.Int")," (",(0,r.kt)("inlineCode",{parentName:"p"},'"cosmossdk.io/math"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func AddTestAddrsFromPubKeys(\n   app *SimApp,\n   ctx sdk.Context,\n   pubKeys []cryptotypes.PubKey,\n-  accAmt sdk.Int,\n+  accAmt math.Int\n)\nfunc addTestAddrs(\n   app *SimApp,\n   ctx sdk.Context,\n   accNum int,\n-  accAmt sdk.Int,\n+  accAmt math.Int,\n   strategy GenerateAccountStrategy\n) []sdk.AccAddress\nfunc AddTestAddrsIncremental(\n   app *SimApp,\n   ctx sdk.Context,\n   accNum int,\n-  accAmt sdk.Int,\n+  accAmt math.Int\n) []sdk.AccAddress\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterRESTRoutes")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"testing/mock")," has been removed."),(0,r.kt)("h2",{id:"relayers"},"Relayers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No relevant changes were made in this release.")),(0,r.kt)("h2",{id:"ibc-light-clients"},"IBC Light Clients"),(0,r.kt)("h3",{id:"ics02---client"},"ICS02 - Client"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/core/02-client/keeper")," is now of type ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes.StoreKey")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"storetypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"p"},'"github.com/cosmos/cosmos-sdk/store/types"'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"func NewKeeper(\n  cdc codec.BinaryCodec,\n- key sdk.StoreKey,\n+ key storetypes.StoreKey,\n  paramSpace paramtypes.Subspace,\n  sk types.StakingKeeper,\n  uk types.UpgradeKeeper\n) Keeper\n")))}m.isMDXComponent=!0}}]);