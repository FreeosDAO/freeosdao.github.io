(function(e){function t(t){for(var o,s,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={1:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{2:"e2b9f5a6",3:"d63eab10",4:"3436d323",5:"63f1b94c",6:"a0a98fc8",7:"c4578791"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var u=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"0081":function(e,t){},1:function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"isAuthenticated",(function(){return S})),n.d(o,"connecting",(function(){return j})),n.d(o,"claimInfo",(function(){return N}));var r={};n.r(r),n.d(r,"setAccount",(function(){return x})),n.d(r,"setClaimInfo",(function(){return E})),n.d(r,"setClaimAttributeVal",(function(){return O})),n.d(r,"clearAccount",(function(){return B})),n.d(r,"setConnecting",(function(){return q})),n.d(r,"setPath",(function(){return F}));var a={};n.r(a),n.d(a,"connect",(function(){return M})),n.d(a,"logout",(function(){return z})),n.d(a,"getAccountInfo",(function(){return L})),n.d(a,"GetFreeosRecord",(function(){return W})),n.d(a,"getLiquidInAccount",(function(){return J})),n.d(a,"getStakeRequirementInfo",(function(){return G})),n.d(a,"getResAirKey",(function(){return Y})),n.d(a,"getUserStakedInfo",(function(){return X})),n.d(a,"getFreeosInfo",(function(){return ee})),n.d(a,"getRespMasterSwitch",(function(){return ne})),n.d(a,"getClaimCalendar",(function(){return re})),n.d(a,"getClaimDetailInfo",(function(){return se})),n.d(a,"setpath",(function(){return ie})),n.d(a,"connectProton",(function(){return pe}));var s={};n.r(s),n.d(s,"userPreviousBalance",(function(){return me})),n.d(s,"userAfterBalance",(function(){return ye})),n.d(s,"isClaimed",(function(){return ge}));var c={};n.r(c),n.d(c,"setUserPreviousBalance",(function(){return be})),n.d(c,"setUserAfterBalance",(function(){return we})),n.d(c,"setIsClaimed",(function(){return ve}));var i={};n.r(i),n.d(i,"actionClaim",(function(){return Ce}));var u={};n.r(u),n.d(u,"actionStake",(function(){return $e}));var l={};n.r(l),n.d(l,"actionUnstake",(function(){return xe}));var p={};n.r(p),n.d(p,"sendTokens",(function(){return Fe}));n("5319");var f=n("c973"),d=n.n(f),h=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("f33e"),n("2b0e")),m=n("1f91"),y=n("42d2"),g=n("b05d"),b=n("2a19");h["a"].use(g["a"],{config:{},lang:m["a"],iconSet:y["a"],plugins:{Notify:b["a"]}});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},v=[],k={name:"App"},C=k,A=n("2877"),_=Object(A["a"])(C,w,v,!1,null,null,null),P=_.exports,I=n("2f62"),$=()=>({accountName:null,connecting:!1,path:"/claim",claimInfo:{liquidInAccount:{balance:""},eosStaked:{stake:""},freeosInAccount:{balance:""},claimCalendar:{end_date:""},freeosHoldingRequire:{tokens_required:0},respMasterSwitch:"",respFreeosRecord:"",respStakeRequirement:"",respIsUserAlreadyClaimed:"",nextCalendar:"",respAirKey:""}});const S=({accountName:e})=>null!==e,j=({connecting:e})=>e,N=({claimInfo:e})=>e;function R(e,t){b["a"].create({color:"success"===e||1===e?"positive":"negative",message:t,position:"top",timeout:"success"===e||1===e?2e3:6e4,actions:[{icon:"close",color:"white"}]})}const x=function(e,{accountName:t,walletId:n}){e.accountName||(localStorage.walletId=n,e.accountName=t,e.connecting=!1,this.$router.currentRoute.fullPath!==e.path&&this.$router.push({path:e.path}))},E=function(e,t){e.claimInfo=t},O=function(e,t){const n=t.key,o=t.value;e.claimInfo[n]=o},B=function(e){localStorage.removeItem("walletId"),e.accountName=null,"/"!==this.$router.currentRoute.fullPath&&this.$router.push({path:"/"}),R(1,"logout successfully")},q=(e,t)=>{e.connecting=t},F=function(e,t){e.path=t};n("e6cf");var T=n("ca3a");const{JsonRpc:V}=n("0926"),U=new V("https://api-testnet-proton.eosarabia.net:443",{fetch:fetch}),M=function(){var e=d()((function*({commit:e},t){e("setConnecting",!0);const n=this.$transit.accessContext.initWallet(this.$transit.accessContext.getWalletProviders().find(e=>e.id===t));n.subscribe(n=>{let o,r=1;n.connecting?o="Connecting to "+t:n.authenticating?o="Logging in to "+t:n.authenticationError?(o=n.authenticationErrorMessage,r=0):n.connectionError?(o=n.connectionErrorMessage,r=0):n.accountInfo&&(this.$transit.wallet&&this.$transit.wallet.accountInfo||(o="login successfully",console.log(n.accountInfo,t),e("setAccount",{accountName:n.accountInfo.account_name,walletId:t}))),o&&R(r,o)}),yield n.connect(),yield n.login(),this.$transit.wallet=n,this.$transit.eosApi=n.eosApi}));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=d()((function*({commit:e}){e("clearAccount",null),yield this.$transit.wallet.terminate()}));return function(t){return e.apply(this,arguments)}}();function L(e){e.dispatch("GetFreeosRecord"),e.dispatch("getLiquidInAccount"),e.dispatch("getStakeRequirementInfo"),e.dispatch("getResAirKey"),e.dispatch("getUserStakedInfo"),e.dispatch("getFreeosInfo"),e.dispatch("getRespMasterSwitch"),e.dispatch("getClaimDetailInfo")}function W(e){return K.apply(this,arguments)}function K(){return K=d()((function*(e){const t=yield U.get_table_rows({json:!0,code:"freeos333333",scope:e.state.accountName,table:"users"}),n={key:"respFreeosRecord",value:t.rows[0]};e.commit("setClaimAttributeVal",n)})),K.apply(this,arguments)}function J(e){return D.apply(this,arguments)}function D(){return D=d()((function*(e){const t=yield U.get_table_rows({json:!0,code:"eosio.token",scope:e.state.accountName,table:"accounts",limit:-1}),n={key:"liquidInAccount",value:t.rows[0]};e.commit("setClaimAttributeVal",n)})),D.apply(this,arguments)}function G(e){return H.apply(this,arguments)}function H(){return H=d()((function*(e){const t=yield U.get_table_rows({json:!0,code:"freeos333333",scope:"freeos333333",table:"stake"}),n={key:"respStakeRequirement",value:t.rows[0]};e.commit("setClaimAttributeVal",n)})),H.apply(this,arguments)}function Y(e){return Q.apply(this,arguments)}function Q(){return Q=d()((function*(e){const t=yield U.get_table_rows({json:!0,code:"freeos333333",scope:e.state.accountName,table:"accounts",lower_bound:"AIRKEY",limit:1}),n={key:"respAirKey",value:t.rows[0]};e.commit("setClaimAttributeVal",n)})),Q.apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return Z=d()((function*(e){const t=yield U.get_table_rows({json:!0,code:"freeos333333",scope:e.state.accountName,table:"users",limit:1}),n={key:"eosStaked",value:t.rows[0]};e.commit("setClaimAttributeVal",n)})),Z.apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return te=d()((function*(e){const t=yield U.get_table_rows({json:!0,code:"freeos333333",scope:e.state.accountName,table:"accounts",lower_bound:"FREEOS",limit:1}),n={key:"freeosInAccount",value:t.rows[0]};e.commit("setClaimAttributeVal",n)})),te.apply(this,arguments)}function ne(e,t){return oe.apply(this,arguments)}function oe(){return oe=d()((function*(e,t){const n=yield U.get_table_rows({json:!0,code:"freeosconfig",scope:"freeosconfig",table:"parameters",lower_bound:"masterswitch",limit:1}),o={key:"respMasterSwitch",value:n.rows[0]};e.commit("setClaimAttributeVal",o)})),oe.apply(this,arguments)}function re(e){return ae.apply(this,arguments)}function ae(){return ae=d()((function*(e){const t=yield U.get_table_rows({json:!0,code:"freeosconfig",scope:"freeosconfig",table:"weeks",limit:26}),n=Math.floor((new Date).getTime()/1e3);let o=null,r=null;t.rows&&t.rows.length&&t.rows.map((e,a)=>{const s=e.start,c=e.end;n>s&&n<c&&(o=e,r=t.rows[a+1])});const a={key:"nextCalendar",value:r};return e.commit("setClaimAttributeVal",a),o})),ae.apply(this,arguments)}function se(e){return ce.apply(this,arguments)}function ce(){return ce=d()((function*(e){var t;const n=e.dispatch("getClaimCalendar"),o={key:"claimCalendar",value:null!==n&&void 0!==n?n:{week_number:0}};e.commit("setClaimAttributeVal",o);const r={key:"freeosHoldingRequire",value:null!==n&&void 0!==n?n:{week_number:0}};e.commit("setClaimAttributeVal",r);let a=null;n&&n.week_number&&(a=yield U.get_table_rows({json:!0,code:"freeos333333",scope:e.state.accountName,table:"claims",lower_bound:n.week_number,limit:1}));const s={key:"respIsUserAlreadyClaimed",value:null===(t=a)||void 0===t?void 0:t.rows[0]};e.commit("setClaimAttributeVal",s)})),ce.apply(this,arguments)}const ie=function({commit:e},t){console.log(this.$route.fullPath),console.log("whatever",t),e("setPath",t)},ue=["https://api-testnet-proton.eosarabia.net"],le={appName:"Freeos",appLogo:"",customStyleOptions:{modalBackgroundColor:"#F4F7FA",logoBackgroundColor:"white",isLogoRound:!0,optionBackgroundColor:"white",optionFontColor:"black",primaryFontColor:"black",secondaryFontColor:"#6B727F",linkColor:"#752EEB"}};function pe(e){return fe.apply(this,arguments)}function fe(){return fe=d()((function*(e){const{link:t,session:n}=yield Object(T["ConnectWallet"])({linkOptions:{chainId:"71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd",endpoints:ue},transportOptions:{requestAccount:this.requestAccount,backButton:!0},selectorOptions:{appName:le.appName,appLogo:le.appLogo}});console.log(t,n),e.commit("setAccount",{accountName:n.auth.actor,walletId:t.walletType})})),fe.apply(this,arguments)}var de={namespaced:!0,state:$,getters:o,mutations:r,actions:a},he=()=>({userPreviousBalance:"",userAfterBalance:"",isClaimed:!1});const me=({userPreviousBalance:e})=>e,ye=({userAfterBalance:e})=>e,ge=({isClaimed:e})=>e,be=(e,t)=>{e.userPreviousBalance=t},we=(e,t)=>{e.userAfterBalance=t},ve=(e,t)=>{e.isClaimed=t};var ke=n("0926");const Ce=function(){var e=d()((function*({commit:e},t){const{JsonRpc:o}=n("0926"),r=new o("https://api-testnet-proton.eosarabia.net:443",{fetch:fetch}),a=yield r.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"accounts",lower_bound:"FREEOS",limit:1}),s=a.rows[0]&&parseFloat(a.rows[0].balance)||0;e("setUserPreviousBalance",s);try{const n=yield this.$transit.eosApi.transact({actions:[{account:"freeos333333",name:"claim",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:"active"}],data:{user:this.$transit.wallet.auth.accountName}}]},{blocksBehind:3,expireSeconds:30});if(console.log(n),"executed"===n.processed.receipt.status){R("success",n.processed.action_traces[0].console);const o=yield r.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"accounts",lower_bound:"FREEOS",limit:1}),a=o.rows[0]&&parseFloat(o.rows[0].balance)||0;e("setUserAfterBalance",a),e("setIsClaimed",!0)}else R("err","The action could not be completed. Please try later");return n}catch(c){console.log(c),"UnAuthorized"===c.message?R("err","Please check that your wallet contains the correct keys for the account you are trying to register"):c.message.startsWith("assertion failure with message: ")?R("err",c.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===c.message?R("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):c instanceof ke["RpcError"]||c instanceof TypeError?R("err","Connection error. Please try later"):R("err","The action could not be completed. Please try later")}}));return function(t,n){return e.apply(this,arguments)}}();var Ae={namespaced:!0,state:he,getters:s,mutations:c,actions:i},_e={},Pe=n("d5d0"),Ie=n("849e");const $e=function(){var e=d()((function*({state:e}){try{const e=new ke["JsonRpc"]("https://api-testnet-proton.eosarabia.net:443",{fetch:fetch}),t=yield e.get_table_rows({json:!0,code:"freeos333333",scope:"freeos333333",table:"stake",limit:1}),n=t.rows[0].stake_requirement?t.rows[0].stake_requirement:t.rows[0].default_stake,o=[{account:"eosio.token",name:"transfer",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:this.$transit.wallet.auth.permission}],data:{from:this.$transit.wallet.auth.accountName,to:"freeos333333",quantity:n,memo:"stake from "+this.$transit.wallet.auth.accountName}}];console.log(o);const r=yield this.$transit.eosApi.transact({actions:o},{blocksBehind:3,expireSeconds:30});return console.log(r),"executed"===r.processed.receipt.status?R("success",r.processed.action_traces[0].console+"success"):R("err","The action could not be completed. Please try later"),r}catch(t){t.message.startsWith("Cannot read property 'stake_requirement'")?R("err","You are not yet registered with freeos"):"UnAuthorized"===t.message?R("err","Please check that your wallet contains the correct keys for the account you are trying to register"):t.message.startsWith("assertion failure with message: ")?R("err",t.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===t.message?R("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):t instanceof ke["RpcError"]||t instanceof TypeError?R("err","Connection error. Please try later"):R("err","The action could not be completed. Please try later")}}));return function(t){return e.apply(this,arguments)}}();var Se={namespaced:!0,state:_e,getters:Pe,mutations:Ie,actions:u},je={},Ne=n("0081"),Re=n("a82b");const xe=function(){var e=d()((function*({state:e}){try{const e=yield this.$transit.eosApi.transact({actions:[{account:"freeos333333",name:"unstake",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:this.$transit.wallet.auth.permission}],data:{user:this.$transit.wallet.auth.accountName}}]},{blocksBehind:3,expireSeconds:30});return"executed"===e.processed.receipt.status?R("success",e.processed.action_traces[0].console):R("err","The action could not be completed. Please try later"),e}catch(t){"UnAuthorized"===t.message?R("err","Please check that your wallet contains the correct keys for the account you are trying to register"):t.message.startsWith("assertion failure with message: ")?R("err",t.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===t.message?R("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):t instanceof ke["RpcError"]||t instanceof TypeError?R("err","Connection error. Please try later"):R("err","The action could not be completed. Please try later")}}));return function(t){return e.apply(this,arguments)}}();var Ee={namespaced:!0,state:je,getters:Ne,mutations:Re,actions:l},Oe={},Be=n("3777"),qe=n("f7c0");const Fe=function(){var e=d()((function*({state:e},{memo:t,quantity:n,to:o}){try{const e=yield this.$transit.eosApi.transact({actions:[{account:"EOS",name:"transfer",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:this.$transit.wallet.auth.permission}],data:{from:this.$transit.wallet.auth.accountName,to:o,quantity:parseFloat(n).toFixed("4")+" KIT",memo:t}}]},{blocksBehind:3,expireSeconds:30});return e}catch(r){return r}}));return function(t,n){return e.apply(this,arguments)}}();var Te={namespaced:!0,state:Oe,getters:Be,mutations:qe,actions:p};h["a"].use(I["a"]);var Ve=function(){const e=new I["a"].Store({modules:{account:de,claim:Ae,stake:Se,unstake:Ee,transfer:Te},strict:!1});return e},Ue=n("8c4f");const Me=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))},{path:"/claim",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"11a0"))},{path:"/stake",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"3468"))},{path:"/transfer",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"46fe"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var ze=Me;h["a"].use(Ue["a"]);var Le=function({store:e}){const t=new Ue["a"]({scrollBehavior:()=>({x:0,y:0}),routes:ze,mode:"history",base:"/"});return t.beforeEach((t,n,o)=>{t.matched.some(e=>e.meta.auth)?e.getters["account/isAuthenticated"]?o():o({path:"/login?returnUrl="+t.path}):o()}),t},We=function(){return Ke.apply(this,arguments)};function Ke(){return Ke=d()((function*(){const e="function"===typeof Ve?yield Ve({Vue:h["a"]}):Ve,t="function"===typeof Le?yield Le({Vue:h["a"],store:e}):Le;e.$router=t;const n={router:t,store:e,render:e=>e(P),el:"#q-app"};return{app:n,store:e,router:t}})),Ke.apply(this,arguments)}var Je=n("bc3a"),De=n.n(Je);const Ge=De.a.create({baseURL:"",headers:{"Content-Type":"application/json","x-api-key":""}});Ge.interceptors.response.use(e=>e.data||{});var He=({Vue:e,store:t})=>{e.prototype.$axios=Ge,t.$axios=Ge},Ye=n("0008"),Qe=n("b6e4"),Xe=function(){var e=d()((function*({Vue:e,store:t}){const n=[Object(Qe["a"])()],o=Object(Ye["a"])({appName:"freos333333",network:{protocol:"https",blockchain:"eos",host:"api-testnet-proton.eosarabia.net",port:"443",chainId:"71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd"},walletProviders:n}),r={accessContext:o};e.prototype.$transit=r,t.$transit=r,console.log(r),localStorage.walletId&&t.dispatch("account/connect",localStorage.walletId)}));return function(t){return e.apply(this,arguments)}}();const Ze="/";function et(){return tt.apply(this,arguments)}function tt(){return tt=d()((function*(){const{app:e,store:t,router:n}=yield We();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),s=[He,Xe];for(let i=0;!1===o&&i<s.length;i++)if("function"===typeof s[i])try{yield s[i]({app:e,router:n,store:t,Vue:h["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:Ze})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new h["a"](e)})),tt.apply(this,arguments)}et()},3:function(e,t){},3777:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},"849e":function(e,t){},a82b:function(e,t){},d5d0:function(e,t){},f33e:function(e,t,n){},f7c0:function(e,t){}});