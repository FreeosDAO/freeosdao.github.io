(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={1:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{2:"342192c6",3:"b4252648",4:"c02c9d76",5:"23ceb14a",6:"29c586b3",7:"0751787f",8:"2ac304f8",9:"801a5c30"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;a.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"0047":function(e,t,o){},"0081":function(e,t){},1:function(e,t){},2:function(e,t){},"2f39":function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"isAuthenticated",(function(){return I})),o.d(n,"connecting",(function(){return j})),o.d(n,"accountInfo",(function(){return x})),o.d(n,"claimInfo",(function(){return S}));var r={};o.r(r),o.d(r,"setAccount",(function(){return T})),o.d(r,"setClaimInfo",(function(){return R})),o.d(r,"clearAccount",(function(){return O})),o.d(r,"setConnecting",(function(){return B})),o.d(r,"setPath",(function(){return q}));var a={};o.r(a),o.d(a,"connect",(function(){return N})),o.d(a,"logout",(function(){return z})),o.d(a,"getClaimInfo",(function(){return U})),o.d(a,"setpath",(function(){return F}));var s={};o.r(s),o.d(s,"userPreviousBalance",(function(){return J})),o.d(s,"userAfterBalance",(function(){return V})),o.d(s,"isClaimed",(function(){return K}));var c={};o.r(c),o.d(c,"setUserPreviousBalance",(function(){return L})),o.d(c,"setUserAfterBalance",(function(){return H})),o.d(c,"setIsClaimed",(function(){return Y}));var i={};o.r(i),o.d(i,"actionClaim",(function(){return Q}));var l={};o.r(l),o.d(l,"actionReguser",(function(){return te}));var u={};o.r(u),o.d(u,"actionStake",(function(){return se}));var p={};o.r(p),o.d(p,"actionUnstake",(function(){return pe}));var f={};o.r(f),o.d(f,"sendTokens",(function(){return we}));o("e6cf"),o("5319"),o("7d6e"),o("e54f"),o("985d"),o("0047"),o("f33e");var d=o("2b0e"),h=o("1f91"),m=o("42d2"),w=o("b05d"),g=o("2a19");d["a"].use(w["a"],{config:{},lang:h["a"],iconSet:m["a"],plugins:{Notify:g["a"]}});var y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},b=[],v={name:"App"},k=v,P=o("2877"),_=Object(P["a"])(k,y,b,!1,null,null,null),$=_.exports,A=o("2f62"),C=()=>({account:null,connecting:!1,path:"/claim",claimInfo:{eosInAccount:{balance:""},eosStaked:{stake:""},freeosInAccount:{balance:""},claimCalendar:{end_date:""},freeosHoldingRequire:{tokens_required:0},respMasterSwitch:"",respFreeosRecord:"",respStakeRequirement:"",respIsUserAlreadyClaimed:"",nextCalendar:"",respAirKey:""}});const I=({account:e})=>null!==e,j=({connecting:e})=>e,x=({account:e})=>e,S=({claimInfo:e})=>e;function E(e,t){g["a"].create({color:"success"===e||1===e?"positive":"negative",message:t,position:"top",timeout:"success"===e||1===e?2e3:6e4,actions:[{icon:"close",color:"white"}]})}const T=function(e,{account:t,walletId:o}){e.account||(localStorage.walletId=o,e.account=t,e.connecting=!1,this.$router.currentRoute.fullPath!==e.path&&this.$router.push({path:e.path}))},R=function(e,t){e.claimInfo=t},O=function(e){localStorage.removeItem("walletId"),e.account=null,"/"!==this.$router.currentRoute.fullPath&&this.$router.push({path:"/"}),E(1,"logout successfully")},B=(e,t)=>{e.connecting=t},q=function(e,t){e.path=t},N=async function({commit:e},t){e("setConnecting",!0);const o=this.$transit.accessContext.initWallet(this.$transit.accessContext.getWalletProviders().find((e=>e.id===t)));o.subscribe((o=>{let n,r=1;o.connecting?n="Connecting to "+t:o.authenticating?n="Logging in to "+t:o.authenticationError?(n=o.authenticationErrorMessage,r=0):o.connectionError?(n=o.connectionErrorMessage,r=0):o.accountInfo&&(this.$transit.wallet&&this.$transit.wallet.accountInfo||(n="login successfully",e("setAccount",{account:o.accountInfo,walletId:t}))),n&&E(r,n)})),await o.connect(),await o.login(),this.$transit.wallet=o,this.$transit.eosApi=o.eosApi},z=async function({commit:e}){await this.$transit.wallet.terminate(),e("clearAccount",null)},U=async function({commit:e},t){var n,r,a;const{JsonRpc:s}=o("0926"),c=new s("https://api-testnet-proton.eosarabia.net:443",{fetch:fetch}),i=await c.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"users"}),l=await c.get_table_rows({json:!0,code:"freeos333333",scope:"freeos333333",table:"stake"}),u=await c.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"accounts",lower_bound:"AIRKEY",limit:1}),p=await c.get_table_rows({json:!0,code:"eosio.token",scope:t,table:"accounts",limit:-1}),f=await c.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"users",limit:1}),d=await c.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"accounts",lower_bound:"FREEOS",limit:1}),h=await c.get_table_rows({json:!0,code:"freeosconfig",scope:"freeosconfig",table:"weeks",limit:26}),m=await c.get_table_rows({json:!0,code:"freeosconfig",scope:"freeosconfig",table:"parameters",lower_bound:"masterswitch",limit:1}),w=Math.floor((new Date).getTime()/1e3);let g=null,y=null;h.rows&&h.rows.length&&h.rows.map(((e,t)=>{const o=e.start,n=e.end;w>o&&w<n&&(g=e,y=h.rows[t+1])}));let b=null;g&&g.week_number&&(b=await c.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"claims",lower_bound:g.week_number,limit:1}));const v={eosInAccount:p.rows[0],eosStaked:f.rows[0],freeosInAccount:d.rows[0],claimCalendar:null!==(n=g)&&void 0!==n?n:{week_number:0},nextCalendar:y,freeosHoldingRequire:null!==(r=g)&&void 0!==r?r:{week_number:0},respMasterSwitch:m.rows[0],respFreeosRecord:i.rows[0],respStakeRequirement:l.rows[0],respIsUserAlreadyClaimed:null===(a=b)||void 0===a?void 0:a.rows[0],respAirKey:u.rows[0]};console.log(v),e("setClaimInfo",v),console.log(i),console.log(l),console.log(u),console.log(p),console.log(f),console.log(d),console.log(b),console.log(h)},F=function({commit:e},t){console.log(this.$route.fullPath),console.log("whatever",t),e("setPath",t)};var M={namespaced:!0,state:C,getters:n,mutations:r,actions:a},W=()=>({userPreviousBalance:"",userAfterBalance:"",isClaimed:!1});const J=({userPreviousBalance:e})=>e,V=({userAfterBalance:e})=>e,K=({isClaimed:e})=>e,L=(e,t)=>{e.userPreviousBalance=t},H=(e,t)=>{e.userAfterBalance=t},Y=(e,t)=>{e.isClaimed=t};var D=o("0926");const Q=async function({commit:e},t){const{JsonRpc:n}=o("0926"),r=new n("https://api-testnet-proton.eosarabia.net:443",{fetch:fetch}),a=await r.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"accounts",lower_bound:"FREEOS",limit:1}),s=a.rows[0]&&parseFloat(a.rows[0].balance)||0;e("setUserPreviousBalance",s);try{const o=await this.$transit.eosApi.transact({actions:[{account:"freeos333333",name:"claim",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:"active"}],data:{user:this.$transit.wallet.auth.accountName}}]},{blocksBehind:3,expireSeconds:30});if(console.log(o),"executed"===o.processed.receipt.status){E("success",o.processed.action_traces[0].console);const n=await r.get_table_rows({json:!0,code:"freeos333333",scope:t,table:"accounts",lower_bound:"FREEOS",limit:1}),a=n.rows[0]&&parseFloat(n.rows[0].balance)||0;e("setUserAfterBalance",a),e("setIsClaimed",!0)}else E("err","The action could not be completed. Please try later");return o}catch(c){console.log(c),"UnAuthorized"===c.message?E("err","Please check that your wallet contains the correct keys for the account you are trying to register"):c.message.startsWith("assertion failure with message: ")?E("err",c.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===c.message?E("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):c instanceof D["RpcError"]||c instanceof TypeError?E("err","Connection error. Please try later"):E("err","The action could not be completed. Please try later")}};var G={namespaced:!0,state:W,getters:s,mutations:c,actions:i},X={},Z=o("762f"),ee=o("8a8c");const te=async function({state:e}){try{const e=await this.$transit.eosApi.transact({actions:[{account:"freeos333333",name:"reguser",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:"active"}],data:{user:this.$transit.wallet.auth.accountName,account_type:"e"}}]},{blocksBehind:3,expireSeconds:30});return"executed"===e.processed.receipt.status?E("success",e.processed.action_traces[0].console):E("err","The action could not be completed. Please try later"),e}catch(t){"UnAuthorized"===t.message?E("err","Please check that your wallet contains the correct keys for the account you are trying to register"):t.message.startsWith("assertion failure with message: ")?E("err",t.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===t.message?E("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):t instanceof D["RpcError"]||t instanceof TypeError?E("err","Connection error. Please try later"):E("err","The action could not be completed. Please try later")}};var oe={namespaced:!0,state:X,getters:Z,mutations:ee,actions:l},ne={},re=o("d5d0"),ae=o("849e");const se=async function({state:e}){try{const e=new D["JsonRpc"]("https://kylin-dsp-1.liquidapps.io/"),t=await e.get_table_rows({json:!0,code:"freeos333333",scope:this.$transit.wallet.auth.accountName,table:"users",limit:1}),o=await this.$transit.eosApi.transact({actions:[{account:"freeos333333",name:"stake",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:this.$transit.wallet.auth.permission}],data:{from:this.$transit.wallet.auth.accountName,to:"freeos333333",quantity:t.rows[0].stake_requirement,memo:"stake from "+this.$transit.wallet.auth.accountName}}]},{blocksBehind:3,expireSeconds:30});return"executed"===o.processed.receipt.status?E("success",o.processed.action_traces[0].console):E("err","The action could not be completed. Please try later"),o}catch(t){t.message.startsWith("Cannot read property 'stake_requirement'")?E("err","You are not yet registered with freeos"):"UnAuthorized"===t.message?E("err","Please check that your wallet contains the correct keys for the account you are trying to register"):t.message.startsWith("assertion failure with message: ")?E("err",t.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===t.message?E("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):t instanceof D["RpcError"]||t instanceof TypeError?E("err","Connection error. Please try later"):E("err","The action could not be completed. Please try later")}};var ce={namespaced:!0,state:ne,getters:re,mutations:ae,actions:u},ie={},le=o("0081"),ue=o("a82b");const pe=async function({state:e}){try{const e=await this.$transit.eosApi.transact({actions:[{account:"freeos333333",name:"unstake",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:"active"}],data:{user:this.$transit.wallet.auth.accountName}}]},{blocksBehind:3,expireSeconds:30});return"executed"===e.processed.receipt.status?E("success",e.processed.action_traces[0].console):E("err","The action could not be completed. Please try later"),e}catch(t){"UnAuthorized"===t.message?E("err","Please check that your wallet contains the correct keys for the account you are trying to register"):t.message.startsWith("assertion failure with message: ")?E("err",t.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===t.message?E("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):t instanceof D["RpcError"]||t instanceof TypeError?E("err","Connection error. Please try later"):E("err","The action could not be completed. Please try later")}};var fe={namespaced:!0,state:ie,getters:le,mutations:ue,actions:p},de={},he=o("3777"),me=o("f7c0");const we=async function({state:e},{memo:t,quantity:o,to:n}){try{const e=await this.$transit.eosApi.transact({actions:[{account:"EOS",name:"transfer",authorization:[{actor:this.$transit.wallet.auth.accountName,permission:this.$transit.wallet.auth.permission}],data:{from:this.$transit.wallet.auth.accountName,to:n,quantity:parseFloat(o).toFixed("4")+" KIT",memo:t}}]},{blocksBehind:3,expireSeconds:30});return e}catch(r){return r}};var ge={namespaced:!0,state:de,getters:he,mutations:me,actions:f};d["a"].use(A["a"]);var ye=function(){const e=new A["a"].Store({modules:{account:M,claim:G,stake:ce,unstake:fe,reguser:oe,transfer:ge},strict:!1});return e},be=o("8c4f");const ve=[{path:"/",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"8b24"))},{path:"/claim",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"11a0"))},{path:"/stake",component:()=>Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"3468"))},{path:"/transfer",component:()=>Promise.all([o.e(0),o.e(9)]).then(o.bind(null,"46fe"))},{path:"/buy",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"a9f3"))},{path:"/account",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"8c2d"))}]},{path:"*",component:()=>Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"e51e"))}];var ke=ve;d["a"].use(be["a"]);var Pe=function({store:e}){const t=new be["a"]({scrollBehavior:()=>({x:0,y:0}),routes:ke,mode:"history",base:"/"});return t.beforeEach(((t,o,n)=>{t.matched.some((e=>e.meta.auth))?e.getters["account/isAuthenticated"]?n():n({path:"/login?returnUrl="+t.path}):n()})),t},_e=async function(){const e="function"===typeof ye?await ye({Vue:d["a"]}):ye,t="function"===typeof Pe?await Pe({Vue:d["a"],store:e}):Pe;e.$router=t;const o={router:t,store:e,render:e=>e($),el:"#q-app"};return{app:o,store:e,router:t}},$e=o("bc3a"),Ae=o.n($e);const Ce=Ae.a.create({baseURL:"",headers:{"Content-Type":"application/json","x-api-key":""}});Ce.interceptors.response.use((e=>e.data||{}));var Ie=({Vue:e,store:t})=>{e.prototype.$axios=Ce,t.$axios=Ce},je=o("0008"),xe=o("b6e4"),Se=async({Vue:e,store:t})=>{const o=[Object(xe["a"])()],n=Object(je["a"])({appName:"freos333333",network:{protocol:"https",blockchain:"eos",host:"api-testnet-proton.eosarabia.net",port:"443",chainId:"71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd"},walletProviders:o}),r={accessContext:n};e.prototype.$transit=r,t.$transit=r,console.log(r),localStorage.walletId&&t.dispatch("account/connect",localStorage.walletId)};const Ee="/";async function Te(){const{app:e,store:t,router:o}=await _e();let n=!1;const r=e=>{n=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),s=[Ie,Se];for(let i=0;!1===n&&i<s.length;i++)if("function"===typeof s[i])try{await s[i]({app:e,router:o,store:t,Vue:d["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:Ee})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&new d["a"](e)}Te()},3:function(e,t){},3777:function(e,t){},4:function(e,t){},5:function(e,t){},"762f":function(e,t){},"849e":function(e,t){},"8a8c":function(e,t){},a82b:function(e,t){},d5d0:function(e,t){},f33e:function(e,t,o){},f7c0:function(e,t){}});