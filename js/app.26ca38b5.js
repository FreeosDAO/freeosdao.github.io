(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={2:0},s={2:0},o=[];function c(e){return i.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"768cff8f",3:"7faa5d9a",4:"98a6222a",5:"074228ad",6:"16317887",7:"8ba42bda",8:"3bb16de1",9:"f4c2f151",10:"5061fcbf",11:"65ed5fe6",12:"bb409978",13:"f4cef055"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={3:1,4:1,5:1,6:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"31d6cfe0",3:"aa1aa0a7",4:"7c518dd9",5:"0cd6a665",6:"93251481",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[e]+".css",s=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([4,0]),n()})({0:function(e,t){},"0047":function(e,t,n){},"0081":function(e,t){},"092f":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("f508"),r=n("2a19");const{JsonRpc:s}=n("0926"),o=new s("https://proton.greymass.com:443",{fetch:fetch});function c(e){return new Promise(((t,n)=>{u(),o.get_table_rows(e).then((e=>{t(l(e))})).catch((e=>{n(d(e))}))}))}let i=0;function u(){0===i&&a["a"].show(),i++}function l(e){return i<=0||(i--,0===i&&a["a"].hide()),e}function d(e){return i=0,a["a"].hide(),(e.message||e.response.data.message)&&r["a"].create({message:e.message||e.response.data.message,color:"negative",timeout:3e3}),e}},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},"12a1":function(e,t,n){"use strict";var a={currentIteration:null,nextIteration:null,user:null,isRegistered:null,statistics:null,unvests:null,canUnvest:null,bcStateRequirements:null,airkeyBalance:null,XPRBalance:null,bcUnstaking:null,vestedOptions:null,freeosBalance:null,bcAirkeyBalance:null,liquidFreeos:null,liquidOptions:null,totalFreeos:null,stakeRequirement:null,userHasStaked:null,userStake:null,userClaimedAlready:null,userMeetsStakeRequirement:null,totalHolding:null,canClaim:null,isFreeosEnabled:null,reasonCannotClaim:null,accountName:null,isAuthenticated:null,allIterations:null,unstakingIteration:null,currencyName:null,stakeCurrency:null,unvestPercentage:null};t["a"]=a},13:function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"isAuthenticated",(function(){return P})),n.d(a,"connecting",(function(){return U})),n.d(a,"claimInfo",(function(){return E}));var r={};n.r(r),n.d(r,"setAccount",(function(){return q})),n.d(r,"setClaimInfo",(function(){return F})),n.d(r,"setClaimAttributeVal",(function(){return x})),n.d(r,"clearAccount",(function(){return B})),n.d(r,"setConnecting",(function(){return V})),n.d(r,"setPath",(function(){return $}));var s={};n.r(s),n.d(s,"userPreviousBalance",(function(){return H})),n.d(s,"userAfterBalance",(function(){return W})),n.d(s,"isClaimed",(function(){return z}));var o={};n.r(o),n.d(o,"setUserPreviousBalance",(function(){return X})),n.d(o,"setUserAfterBalance",(function(){return K})),n.d(o,"setIsClaimed",(function(){return Y}));var c={};n.r(c),n.d(c,"onRegisterUser",(function(){return ae})),n.d(c,"actionStake",(function(){return re}));var i={};n.r(i),n.d(i,"actionUnstake",(function(){return ue}));var u={};n.r(u),n.d(u,"transferTokens",(function(){return he}));var l={};n.r(l),n.d(l,"SET_BALANCE",(function(){return ye})),n.d(l,"SET_UNVEST_HISTORY",(function(){return ve})),n.d(l,"SET_UNVEST_PRECENTAGE",(function(){return we}));var d={};n.r(d),n.d(d,"getVestedRecord",(function(){return Ie})),n.d(d,"getUnVestHistory",(function(){return Ae})),n.d(d,"getUnvestPercentage",(function(){return Re})),n.d(d,"unVest",(function(){return Oe}));var f={};n.r(f),n.d(f,"SET_NEXT_CALENDAR",(function(){return Se})),n.d(f,"SET_CURRENT_CALENDAR",(function(){return _e}));var m={};n.r(m),n.d(m,"getClaimCalendar",(function(){return Pe}));var h={};n.r(h),n.d(h,"setcurrentIteration",(function(){return Fe})),n.d(h,"setnextIteration",(function(){return xe})),n.d(h,"setuser",(function(){return Be})),n.d(h,"setisRegistered",(function(){return Ve})),n.d(h,"setstatistics",(function(){return $e})),n.d(h,"setunvests",(function(){return Me})),n.d(h,"setcanUnvest",(function(){return Le})),n.d(h,"setbcStateRequirements",(function(){return De})),n.d(h,"setXPRBalance",(function(){return He})),n.d(h,"setbcUnstaking",(function(){return We})),n.d(h,"setvestedOptions",(function(){return ze})),n.d(h,"setliquidFreeos",(function(){return Xe})),n.d(h,"setairkeyBalance",(function(){return Ke})),n.d(h,"setliquidOptions",(function(){return Ye})),n.d(h,"setstakeRequirement",(function(){return Ge})),n.d(h,"setuserHasStaked",(function(){return Je})),n.d(h,"setuserClaimedAlready",(function(){return Ze})),n.d(h,"setuserMeetsStakeRequirement",(function(){return Qe})),n.d(h,"settotalFreeos",(function(){return et})),n.d(h,"setcanClaim",(function(){return tt})),n.d(h,"setisFreeosEnabled",(function(){return nt})),n.d(h,"setuserStake",(function(){return at})),n.d(h,"setreasonCannotClaim",(function(){return rt})),n.d(h,"setaccountName",(function(){return st})),n.d(h,"setisAuthenticated",(function(){return ot})),n.d(h,"setallIterations",(function(){return ct})),n.d(h,"setunstakingIteration",(function(){return it})),n.d(h,"setcurrencyName",(function(){return ut})),n.d(h,"setstakeCurrency",(function(){return lt})),n.d(h,"setunvestPercentage",(function(){return dt}));var p={};n.r(p),n.d(p,"monitorBlockChain",(function(){return mt})),n.d(p,"fetch",(function(){return ht})),n.d(p,"transfer",(function(){return pt})),n.d(p,"register",(function(){return gt})),n.d(p,"reregister",(function(){return bt})),n.d(p,"claim",(function(){return yt})),n.d(p,"stake",(function(){return vt})),n.d(p,"unstake",(function(){return wt})),n.d(p,"cancelUnstake",(function(){return kt})),n.d(p,"convertOptions",(function(){return It})),n.d(p,"unvest",(function(){return At}));n("5319"),n("e54f"),n("985d"),n("0047"),n("f33e");var g=n("2b0e"),b=n("1f91"),y=n("42d2"),v=n("b05d"),w=n("2a19");g["a"].use(v["a"],{config:{},lang:b["a"],iconSet:y["a"],plugins:{Notify:w["a"]}});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},I=[],A={name:"App"},R=A,O=n("2877"),C=Object(O["a"])(R,k,I,!1,null,null,null),N=C.exports,T=n("2f62"),S=()=>({accountName:null,connecting:!1,path:"/claim",claimInfo:{liquidInAccount:{balance:""},stakedInfo:null,freeosInAccount:{balance:""},freeosHoldingRequire:{tokens_required:0},respMasterSwitch:"",respFreeosRecord:"",respStakeRequirement:"",respIsUserAlreadyClaimed:"",respAirKey:""}});const P=({accountName:e})=>null!==e,U=({connecting:e})=>e,E=({claimInfo:e})=>e;var j=n("3939");const q=function(e,{accountName:t,walletId:n}){e.accountName||(localStorage.walletId=n,e.accountName=t,e.connecting=!1,this.$router.currentRoute.fullPath!==e.path&&this.$router.push({path:e.path}))},F=function(e,t){e.claimInfo=t},x=function(e,t){const n=t.key,a=t.value;e.claimInfo[n]=a},B=function(e){localStorage.removeItem("walletId"),e.accountName=null,Object(j["a"])(1,"logout successfully")},V=(e,t)=>{e.connecting=t},$=function(e,t){e.path=t};var M=n("5db4"),L={namespaced:!0,state:S,getters:a,mutations:r,actions:M},D=()=>({userPreviousBalance:"",userAfterBalance:"",isClaimed:!1});const H=({userPreviousBalance:e})=>e,W=({userAfterBalance:e})=>e,z=({isClaimed:e})=>e,X=(e,t)=>{e.userPreviousBalance=t},K=(e,t)=>{e.userAfterBalance=t},Y=(e,t)=>{e.isClaimed=t};var G=n("79e9"),J={namespaced:!0,state:D,getters:s,mutations:o,actions:G},Z={},Q=n("d5d0"),ee=n("849e"),te=n("0926"),ne=n("96d7");async function ae({state:e},t){try{const e=[{account:"freeosclaimb",name:"reguser",authorization:[{actor:t,permission:"active"}],data:{user:t}}],n=await ne["a"].sendTransaction(e);return n}catch(n){console.log(n)}}async function re({state:e},t){try{const{amount:e,accountName:n}=t,a=[{account:"eosio.token",name:"transfer",authorization:[{actor:n,permission:"active"}],data:{from:n,to:"freeosclaimb",quantity:e,memo:"freeos stake"}}],r=await ne["a"].sendTransaction(a);return"executed"===r.processed.receipt.status?Object(j["a"])("success",r.processed.action_traces[0].console+"success"):Object(j["a"])("err","The action could not be completed. Please try later"),r}catch(n){n.message.startsWith("Cannot read property 'stake_requirement'")?Object(j["a"])("err","You are not yet registered with freeos"):"UnAuthorized"===n.message?Object(j["a"])("err","Please check that your wallet contains the correct keys for the account you are trying to register"):n.message.startsWith("assertion failure with message: ")?Object(j["a"])("err",n.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===n.message?Object(j["a"])("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):n instanceof te["RpcError"]||n instanceof TypeError?Object(j["a"])("err","Connection error. Please try later"):Object(j["a"])("err","The action could not be completed. Please try later")}}var se={namespaced:!0,state:Z,getters:Q,mutations:ee,actions:c},oe={},ce=n("0081"),ie=n("a82b");async function ue({state:e},t){try{const e=[{account:"freeosclaimb",name:"unstake",authorization:[{actor:t,permission:"active"}],data:{user:t}}],n=await ne["a"].sendTransaction(e);return"executed"===n.processed.receipt.status?Object(j["a"])("success",n.processed.action_traces[0].console):Object(j["a"])("err","The action could not be completed. Please try later"),n}catch(n){"UnAuthorized"===n.message?Object(j["a"])("err","Please check that your wallet contains the correct keys for the account you are trying to register"):n.message.startsWith("assertion failure with message: ")?Object(j["a"])("err",n.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===n.message?Object(j["a"])("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):n instanceof te["RpcError"]||n instanceof TypeError?Object(j["a"])("err","Connection error. Please try later"):Object(j["a"])("err","The action could not be completed. Please try later")}}var le={namespaced:!0,state:oe,getters:ce,mutations:ie,actions:i},de={},fe=n("3777"),me=n("f7c0");async function he({state:e},t){const{fromAccountName:n,toAccountName:a,tokenType:r,sendAmount:s,memo:o}=t,c=[{account:"XPR"===r?"eosio.token":"freeosclaimb",name:"transfer",authorization:[{actor:n,permission:"active"}],data:{from:n,to:a,quantity:`${parseFloat(s).toFixed("4")} ${r}`,memo:o}}];try{const e=await ne["a"].sendTransaction(c);let t=e.processed.action_traces[0].console;return t||(t="Transfer successfully"),w["a"].create({message:t,color:"positive"}),e}catch(i){return i}}var pe={namespaced:!0,state:de,getters:fe,mutations:me,actions:u},ge={balance:0,unVestHistory:null,unVestPercentage:0},be=n("d392");function ye(e,t){_.has(t,"balance")?e.balance=t.balance:e.balance=0}function ve(e,t){0===t.length?e.unVestHistory=null:e.unVestHistory=t}function we(e,t){0===t.length?e.unVestPercentage=0:e.unVestPercentage=t}var ke=n("092f");async function Ie(e,t){const n={code:"freeosclaimb",scope:t,table:"vestaccounts",limit:1},a=await Object(ke["a"])(n);e.commit("SET_BALANCE",a.rows[0])}async function Ae(e,t){const{accountName:n,iterationNumber:a}=t,r=await Object(ke["a"])({json:!0,code:"freeosclaimb",scope:n,table:"unvests",limit:1,lower_bound:a});e.commit("SET_UNVEST_HISTORY",r.rows)}async function Re(e,t){const n=await Object(ke["a"])({json:!0,code:"freeosclaimb",scope:t,table:"counters",limit:1});e.commit("SET_UNVEST_PRECENTAGE",n.rows)}async function Oe(e,t){try{const n=[{account:"freeosclaimb",name:"unvest",authorization:[{actor:t,permission:"active"}],data:{user:t}}],a=await ne["a"].sendTransaction(n);if("executed"===a.processed.receipt.status){const n=a.processed.action_traces[0].console;w["a"].create({message:n,color:"positive"}),e.dispatch("getVestedRecord",t),e.dispatch("getUnVestHistory",t)}else w["a"].create({message:"The action could not be completed. Please try later",color:"negative"})}catch(n){console.log(n)}}var Ce={namespaced:!0,state:ge,getters:be,mutations:l,actions:d},Ne={currentIteration:{end_date:"",iteration_number:null},nextCalendar:""},Te=n("387f");function Se(e,t){e.nextCalender=t}function _e(e,t){e.currentIteration=t}async function Pe(e){const t=await Object(ke["a"])({json:!0,code:"freeoscfgb",scope:"freeoscfgb",table:"iterations",limit:26}),n=Math.floor((new Date).getTime()/1e3);let a={iteration_number:0};t.rows&&t.rows.length&&t.rows.map(((r,s)=>{const o=r.start,c=r.end;n>o&&n<c&&(e.commit("SET_CURRENT_CALENDAR",t.rows[s]),a=t.rows.length===s+1?t.rows[s+1]:null)})),e.commit("SET_NEXT_CALENDAR",a)}var Ue={namespaced:!0,state:Ne,getters:Te,mutations:f,actions:m},Ee=n("12a1"),je=()=>Ee["a"],qe=n("ee95");const Fe=(e,t)=>{e.currentIteration=t},xe=(e,t)=>{e.nextIteration=t},Be=(e,t)=>{e.user=t},Ve=(e,t)=>{e.isRegistered=t},$e=(e,t)=>{e.statistics=t},Me=(e,t)=>{e.unvests=t},Le=(e,t)=>{e.canUnvest=t},De=(e,t)=>{e.bcStateRequirements=t},He=(e,t)=>{e.XPRBalance=t},We=(e,t)=>{e.bcUnstaking=t},ze=(e,t)=>{e.vestedOptions=t},Xe=(e,t)=>{e.liquidFreeos=t},Ke=(e,t)=>{e.airkeyBalance=t},Ye=(e,t)=>{e.liquidOptions=t},Ge=(e,t)=>{e.stakeRequirement=t},Je=(e,t)=>{e.userHasStaked=t},Ze=(e,t)=>{e.userClaimedAlready=t},Qe=(e,t)=>{e.userMeetsStakeRequirement=t},et=(e,t)=>{e.totalFreeos=t},tt=(e,t)=>{e.canClaim=t},nt=(e,t)=>{e.isFreeosEnabled=t},at=(e,t)=>{e.userStake=t},rt=(e,t)=>{e.reasonCannotClaim=t},st=(e,t)=>{e.accountName=t},ot=(e,t)=>{e.isAuthenticated=t},ct=(e,t)=>{e.allIterations=t},it=(e,t)=>{e.unstakingIteration=t},ut=(e,t)=>{e.currencyName=t},lt=(e,t)=>{e.currencyName=t},dt=(e,t)=>{e.unvestPercentage=t};var ft=n("d030");async function mt(e){ft["a"].getInstance().on("change",(t=>{if(t)for(const n in t)t.hasOwnProperty(n)&&e.commit("set"+n,t[n])}))}async function ht(e){var t=await ft["a"].getInstance().singleFetch();return console.log("setisFreeosEnabled",t),t}async function pt({state:e},t){console.log("transfer",t);var n=await ft["a"].getInstance().transfer(t);return console.log("Result of transfer",n),n}async function gt(){var e=await ft["a"].getInstance().register();return e}async function bt(){var e=await ft["a"].getInstance().reregister();return e}async function yt(){var e=await ft["a"].getInstance().claim();return console.log("Result of claim",e),e}async function vt({state:e},t){var n=await ft["a"].getInstance().stake(t);return console.log("Result of stake",n),n}async function wt(){var e=await ft["a"].getInstance().unstake();return console.log("Result of unstake",e),e}async function kt(){var e=await ft["a"].getInstance().cancelUnstake();return console.log("Result of cancelUnstake",e),e}async function It({state:e},t){var n=await ft["a"].getInstance().convertOptions(t);return console.log("Result of convertOptions",n),n}async function At(){var e=await ft["a"].getInstance().unvest();console.log("Result of unvest",e)}var Rt={namespaced:!0,state:je,getters:qe,mutations:h,actions:p};g["a"].use(T["a"]);var Ot=function(){const e=new T["a"].Store({modules:{account:L,claim:J,stake:se,unstake:le,transfer:pe,vest:Ce,calendar:Ue,freeos:Rt},strict:!1});return e},Ct=n("8c4f");n("ddb0");const Nt=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"9097")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"8b24"))}]},{path:"/",meta:{requiresAuth:!0},component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"713b")),children:[{path:"/claim",component:()=>Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,"11a0"))},{path:"/stake",component:()=>Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,"3468"))},{path:"/re-register",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"9a5e"))},{path:"/transfer",component:()=>Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,"46fe"))},{path:"/convert",component:()=>Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"b8c1"))},{path:"/debug",component:()=>n.e(9).then(n.bind(null,"9bd8"))},{path:"/info",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8a05"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"e51e"))}];var Tt=Nt,St=n("0ec9"),_t=n.n(St);g["a"].use(_t.a),g["a"].use(Ct["a"]);var Pt=function({store:e}){const t=new Ct["a"]({scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:{x:0,y:0}},routes:Tt,mode:"history",base:""});return t.beforeEach(((t,n,a)=>{t.matched.some((e=>e.meta.RrequiresAuth))?e.getters["freeos/isAuthenticated"]?a():a({path:`/?returnUrl=${t.path}`}):a()})),t},Ut=async function(){const e="function"===typeof Ot?await Ot({Vue:g["a"]}):Ot,t="function"===typeof Pt?await Pt({Vue:g["a"],store:e}):Pt;e.$router=t;const n={router:t,store:e,render:e=>e(N),el:"#q-app"};return{app:n,store:e,router:t}},Et=n("bc3a"),jt=n.n(Et);const qt=jt.a.create({baseURL:"",headers:{"Content-Type":"application/json","x-api-key":""}});qt.interceptors.response.use((e=>e.data||{}));var Ft=({Vue:e,store:t})=>{e.prototype.$axios=qt,t.$axios=qt},xt=n("0008"),Bt=n("b6e4"),Vt=async({Vue:e,store:t})=>{const n=[Object(Bt["a"])()],a=Object(xt["a"])({appName:"freeos",network:{protocol:"https",blockchain:"eos",host:"proton.greymass.com",port:"443",chainId:"384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0"},walletProviders:n}),r={accessContext:a};e.prototype.$transit=r,t.$transit=r},$t=n("2ef0"),Mt=n.n($t),Lt=({Vue:e})=>{e.prototype.$_=Mt.a};const Dt="";async function Ht(){const{app:e,store:t,router:n}=await Ut();let a=!1;const r=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),o=[Ft,Vt,Lt];for(let i=0;!1===a&&i<o.length;i++)if("function"===typeof o[i])try{await o[i]({app:e,router:n,store:t,Vue:g["a"],ssrContext:null,redirect:r,urlPath:s,publicPath:Dt})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&new g["a"](e)}Ht()},3:function(e,t){},3777:function(e,t){},"387f":function(e,t){},3939:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("2a19");function r(e,t){a["a"].create({color:"success"===e||1===e?"positive":"negative",message:t,position:"top",timeout:"success"===e||1===e?2e3:6e4,actions:[{icon:"close",color:"white"}]})}},4:function(e,t,n){e.exports=n("2f39")},5:function(e,t){},"5db4":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"checkIfLoggedIn",(function(){return o})),n.d(t,"connectWallet",(function(){return c})),n.d(t,"connectScatter",(function(){return i})),n.d(t,"connectProton",(function(){return u})),n.d(t,"logout",(function(){return l})),n.d(t,"getAccountInfo",(function(){return d})),n.d(t,"GetFreeosRecord",(function(){return f})),n.d(t,"getLiquidInAccount",(function(){return m})),n.d(t,"getStakeRequirementInfo",(function(){return h})),n.d(t,"getResAirKey",(function(){return p})),n.d(t,"getUserStakedInfo",(function(){return g})),n.d(t,"getFreeosInfo",(function(){return b})),n.d(t,"getRespMasterSwitch",(function(){return y})),n.d(t,"getClaimDetailInfo",(function(){return v})),n.d(t,"setpath",(function(){return w}));var a=n("3939"),r=n("092f"),s=n("96d7");async function o(e){const{auth:t}=await s["a"].restoreSession();t&&t.actor&&t.permission&&e.commit("setAccount",{accountName:t.actor,walletId:s["a"].link.walletType})}function c(e,t){e.dispatch("connectProton",t)}const i=async function({commit:e},t){e("setConnecting",!0);const n=this.$transit.accessContext.initWallet(this.$transit.accessContext.getWalletProviders().find((e=>e.id===t)));n.subscribe((n=>{let r,s=1;n.connecting?r=`Connecting to ${t}`:n.authenticating?r=`Logging in to ${t}`:n.authenticationError?(r=n.authenticationErrorMessage,s=0):n.connectionError?(r=n.connectionErrorMessage,s=0):n.accountInfo&&(this.$transit.wallet&&this.$transit.wallet.accountInfo||(r="login successfully",e("setAccount",{accountName:n.accountInfo.account_name,walletId:t}))),r&&Object(a["a"])(s,r)})),await n.connect(),await n.login(),this.$transit.wallet=n,this.$transit.eosApi=n.eosApi};async function u(e,t){try{const{auth:t}=await s["a"].login();t&&t.actor&&t.permission&&e.commit("setAccount",{accountName:t.actor,walletId:s["a"].link.walletType})}catch(n){console.error(n)}}const l=async function({commit:e}){await e("clearAccount",null),await s["a"].logout(),console.log("PUSH",this.$router)};function d(e){e.dispatch("GetFreeosRecord"),e.dispatch("getLiquidInAccount"),e.dispatch("getStakeRequirementInfo"),e.dispatch("getResAirKey"),e.dispatch("getUserStakedInfo"),e.dispatch("getFreeosInfo"),e.dispatch("getRespMasterSwitch")}async function f(e){const t=await Object(r["a"])({json:!0,code:"freeosclaimb",scope:e.state.accountName,table:"users"}),n={key:"respFreeosRecord",value:t.rows[0]||null};console.log(n),e.commit("setClaimAttributeVal",n)}async function m(e){const t=await Object(r["a"])({json:!0,code:"eosio.token",scope:e.state.accountName,table:"accounts",limit:-1}),n={key:"liquidInAccount",value:t.rows[0]||null};e.commit("setClaimAttributeVal",n)}async function h(e){const t=await Object(r["a"])({json:!0,code:"freeosclaimb",scope:"freeosclaimb",table:"stakes"}),n={key:"respStakeRequirement",value:t.rows[0]};e.commit("setClaimAttributeVal",n)}async function p(e){const t=await Object(r["a"])({json:!0,code:"freeosclaimb",scope:e.state.accountName,table:"accounts",lower_bound:"AIRKEY",limit:1}),n={key:"respAirKey",value:t.rows[0]};e.commit("setClaimAttributeVal",n)}async function g(e){const t=await Object(r["a"])({json:!0,code:"freeosclaimb",scope:e.state.accountName,table:"users",limit:1}),n={key:"stakedInfo",value:t.rows[0]||null};e.commit("setClaimAttributeVal",n)}async function b(e){const t=await Object(r["a"])({json:!0,code:"freeosclaimb",scope:e.state.accountName,table:"accounts",lower_bound:"FREEOS",limit:1}),n={key:"freeosInAccount",value:t.rows[0]};e.commit("setClaimAttributeVal",n)}async function y(t,n){const a=await Object(r["a"])({json:!0,code:e.env.AIRCLAIM_CONFIGRATION_CONTRACT,scope:e.env.AIRCLAIM_CONFIGRATION_CONTRACT,table:"parameters",lower_bound:"masterswitch",limit:1}),s={key:"respMasterSwitch",value:a.rows[0]};t.commit("setClaimAttributeVal",s)}async function v(e,t){var n;let a=null;t&&(a=await Object(r["a"])({json:!0,code:"freeosclaimb",scope:e.state.accountName,table:"claims",lower_bound:t,limit:1}));const s={key:"respIsUserAlreadyClaimed",value:null===(n=a)||void 0===n?void 0:n.rows[0]};e.commit("setClaimAttributeVal",s)}const w=function({commit:e},t){console.log(this.$route.fullPath),console.log("whatever",t),e("setPath",t)}}.call(this,n("4362"))},6:function(e,t){},7:function(e,t){},"79e9":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"actionClaim",(function(){return o}));var a=n("3939"),r=n("092f"),s=n("96d7");const o=async function({commit:t},n){const o=await Object(r["a"])({json:!0,code:"freeosclaimb",scope:n,table:"accounts",lower_bound:"FREEOS",limit:1}),c=o.rows[0]&&parseFloat(o.rows[0].balance)||0;t("setUserPreviousBalance",c);try{const o=await s["a"].sendTransaction({actions:[{account:"freeosclaimb",name:"claim",authorization:[{actor:e.accountName,permission:"active"}],data:{user:e.accountName}}]},{blocksBehind:3,expireSeconds:30});if("executed"===o.processed.receipt.status){Object(a["a"])("success",o.processed.action_traces[0].console);const e=Object(r["a"])({json:!0,code:"freeosclaimb",scope:n,table:"accounts",lower_bound:"FREEOS",limit:1}),s=e.rows[0]&&parseFloat(e.rows[0].balance)||0;t("setUserAfterBalance",s),t("setIsClaimed",!0)}else Object(a["a"])("err","The action could not be completed. Please try later");return o}catch(i){console.log(i),"UnAuthorized"===i.message?Object(a["a"])("err","Please check that your wallet contains the correct keys for the account you are trying to register"):i.message.startsWith("assertion failure with message: ")?Object(a["a"])("err",i.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===i.message?Object(a["a"])("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):Object(a["a"])("err","The action could not be completed. Please try later")}}}.call(this,n("c8ba"))},8:function(e,t){},"849e":function(e,t){},9:function(e,t){},"96d7":function(e,t,n){"use strict";var a=n("adc8"),r=n.n(a),s=n("ca3a"),o=n("d030");class c{constructor(){r()(this,"connect",(async({restoreSession:e})=>{const{link:t,session:n}=await Object(s["ConnectWallet"])({linkOptions:{chainId:this.chainId,endpoints:this.endpoints,restoreSession:e},transportOptions:{requestAccount:this.requestAccount,backButton:!0},selectorOptions:{appName:this.appName}});this.link=t,this.session=n})),r()(this,"login",(async()=>{try{await this.connect({restoreSession:!1});const{auth:e,accountData:t}=this.session;return{auth:e,accountData:t[0]}}catch(e){return e}})),r()(this,"sendTransaction",(async e=>{try{const t=await this.session.transact({actions:e},{broadcast:!0,blocksBehind:3,expireSeconds:30});return t}catch(t){return t}})),r()(this,"logout",(async()=>{console.log("this.requestAccount",this.requestAccount),this.session&&this.session.auth&&await this.link.removeSession(this.requestAccount,this.session.auth),await o["a"].getInstance().singleFetch()})),r()(this,"restoreSession",(async()=>{try{if(await this.connect({restoreSession:!0}),this.session){const{auth:e,accountData:t}=this.session;return{auth:e,accountData:t[0]}}}catch(e){return e}return{auth:{actor:"",permission:""},accountData:{}}})),this.chainId="384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0",this.endpoints=["https://proton.greymass.com"],this.appName="Freeos",this.session=null,this.link=null}}const i=new c;t["a"]=i},a82b:function(e,t){},d030:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("adc8"),r=n.n(a),s=(n("ddb0"),n("faa1")),o=(n("f508"),n("2a19"),n("96d7"));n("12a1");const{JsonRpc:c}=n("0926"),i=new c("https://proton.greymass.com:443",{fetch:fetch});function u(e){return i.get_table_rows(e)}class l extends s["EventEmitter"]{static getInstance(){var e=l.sInstance;return e||(l.sInstance=e=new l),e}constructor(){super(),this.start()}setWalletUser(e){this.walletUser=e}start(){if(console.log("  var isRunning = false",this.isRunning),!this.isRunning){this.isRunning=!0;var e=()=>{console.log("Fetching data...."),o["a"].restoreSession().then((t=>{console.log("Wallet session restored",t),this.setWalletUser({accountName:t?t.auth.actor:null,walletId:o["a"]&&o["a"].link?o["a"].link.walletType:null}),console.log("NOW WALLET USER IS: ",this.walletUser),this.actionFetch().then((t=>{console.log("changedata",t),this.emit("change",t),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(e,1e4)})).catch((t=>{console.log("Problem fetching data",t),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(e,1e4)}))}))};e()}}stop(){this.isRunning=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)}async register(){return this.sendTransaction("freeosclaimb","reguser")}async reregister(){return this.sendTransaction("freeosclaimb","reverify")}async convertOptions(e){return this.sendTransaction("freeosclaimb","convert",e)}async sendTransaction(e,t,n){var a=this.walletUser?this.walletUser.accountName:null,r={};if(n?r=n:r.user=a,a)try{const n=[{account:e,name:t,authorization:[{actor:a,permission:"active"}],data:r}];console.log("Sending transaction with",n);const s=await o["a"].sendTransaction(n);return setTimeout((()=>{this.fetch()}),"750"),s}catch(s){console.log("Problem sendingTransaction "+t,s)}else console.log("No account.....")}async claim(){return this.sendTransaction("freeosclaimb","claim")}async transfer(e){var t="freeostokenb";return"FOOBAR"===e.token&&(t="xtokens"),delete e.token,this.sendTransaction(t,"transfer",e)}async fetch(){try{this.stop(),this.actionFetch()}finally{this.start()}}async singleFetch(){await o["a"].restoreSession().then((e=>{this.setWalletUser({accountName:e?e.auth.actor:null,walletId:o["a"]&&o["a"].link?o["a"].link.walletType:null}),this.actionFetch().then((e=>{this.emit("change",e)})).catch((e=>{console.log("Problem fetching data",e)}))}))}async unstake(){return this.sendTransaction("freeosclaimb","unstake")}async unvest(){return this.sendTransaction("freeosclaimb","unvest")}async cancelUnstake(){return this.sendTransaction("freeosclaimb","unstakecncl")}async stake(e){var t={};return t.from=this.walletUser?this.walletUser.accountName:null,t.to="freeosclaimb",t.memo="freeos stake",t.quantity=`${parseFloat(e).toFixed("6")} FOOBAR`||!1,this.sendTransaction("xtokens","transfer",t)}async logout(){await this.setWalletUser({}),await this.singleFetch()}async actionFetch(){var e=await this.getRecord("freeoscfgb","parameters",null,{lower_bound:"masterswitch",upper_bound:"masterswitch",limit:1});console.log("masterswitch",e);var t=!(!e||!e.value||"1"!==e.value),n=await this.getRecord("freeoscfgb","iterations");if(n&&!Array.isArray(n)){var a=[];a.push(n),n=a}var r=this.getRecord("freeosclaimb","statistics"),s=this.getRecord("freeosclaimb","unvests"),o=this.getRecord("freeoscfgb","stakereqs"),c=null,i=null,u=null,l=null,d=null,f=null,m=null,h="FOOBAR",p="BETA",g=[n,r,o];this.walletUser&&this.walletUser.accountName&&(s=this.getRecord("freeosclaimb","unvests",this.walletUser.accountName),m=this.getUserRecord("freeosclaimb","users"),c=this.getUserRecordAsNumber("xtokens","accounts",{upper_bound:h,lower_bound:h,limit:1},"balance"),i=this.getRecord("freeosclaimb","unstakereqs","freeosclaimb",{limit:1,upper_bound:this.walletUser.accountName,lower_bound:this.walletUser.accountName}),u=this.getUserRecordAsNumber("freeosclaimb","accounts",{upper_bound:"POINT",lower_bound:"POINT",limit:1},"balance"),l=this.getUserRecordAsNumber("freeosclaimb","vestaccounts",{upper_bound:"POINT",lower_bound:"POINT",limit:1},"balance"),d=this.getUserRecordAsNumber("freeostokenb","accounts",{upper_bound:p,lower_bound:p,limit:1},"balance"),f=this.getUserRecordAsNumber("freeosclaimb","accounts",{lower_bound:"AIRKEY",upper_bound:"AIRKEY",limit:1},"balance"),g=g.concat([s,m,c,i,u,l,d,f]));var b=await Promise.all(g);let[y,v,w,k,I,A,R,O,C,N,T]=b;T||(T=0),O||(O=0),C||(C=0),N||(N=0);var S=R&&R.iteration?R.iteration:0;R=!!R;var _=this.getCurrentAndNextIteration(y),P=null!=_&&_.currentIteration?_.currentIteration.iteration_number:-1;console.log("currentIterationIdx",P),0!==P&&-1!==P||(t=!1);var U=null!=k&&k.iteration_number==P,E=v&&v.unvestpercent>0&&!U,j=v&&v.usercount?v.usercount:0,q=null,F=!1,x=!1,B=!1,V=null!=_&&_.currentIteration?_.currentIteration.tokens_required:9999999,$=!1,M=!1,L=0,D=0,H="";if(I){for(var W=w.length-1;W>=0;--W){var z=w[W];if(j>=z.threshold){q=z["requirement_"+String.fromCharCode(I.account_type)];break}}D=O+C+N,L=parseFloat(I.stake),F=I.staked_iteration>0,x=I.last_issuance==P,$=T>0||D>=V,M=T>0||F,B=P>0&&$&&M&&!x,B||(P<=0?H="<div class='text-h5 text-negative'>Airclaim Not Started</div>":$?x?H='<div class="text-h5 text-primary">You have already claimed</div>':M||(H="<div class='text-h5 text-negative'>You must <router-link to='/stake' class='text-negative'>stake</router-link> to claim!</div>"):H="Opps! In order to Claim you need a minimum "+_.currentIteration.tokens_required+" POINT in your Wallet. Please <a href='/transfer'>transfer</a> an additional "+(_.currentIteration.tokens_required-D)+" "+p+" in order to Claim")}var X={currencyName:p,liquidOptions:O,currentIteration:_&&_.currentIteration?_.currentIteration:null,nextIteration:_.nextIteration,user:I,accountName:this.walletUser.accountName,isAuthenticated:!(!this.walletUser.accountName||""===this.walletUser.accountName),isRegistered:null!==I,statistics:v,unvests:k,unvestPercentage:v&&v.unvestpercent?v.unvestpercent:0,canUnvest:E,bcStateRequirements:w,isFreeosEnabled:t,XPRBalance:A||null,bcUnstaking:R,unstakingIteration:S,vestedOptions:C,liquidFreeos:N,airkeyBalance:T,allIterations:y,stakeRequirement:q,userHasStaked:F,userClaimedAlready:x,userStake:L,userMeetsStakeRequirement:M,totalFreeos:D,canClaim:B,reasonCannotClaim:H};return console.log("output",X),X}async getUserRecordAsNumber(e,t,n,a){var r=await this.getUserRecord(e,t,n);if(r&&r[a]){var s=r[a];return parseFloat(s)}return null}async getUserRecord(e,t,n){return this.getRecord(e,t,this.walletUser.accountName,n)}async getRecord(e,t,n,a){n||(n=e);var r={json:!0,code:e,scope:n,table:t};a&&(r.limit=a.limit,r.upper_bound=a.upper_bound,r.lower_bound=a.lower_bound);const s=await u(r);return s&&s.rows?1===s.rows.length?s.rows[0]:s.rows.length>0?s.rows:null:null}getCurrentAndNextIteration(e){const t=Math.floor(Date.parse((new Date).toISOString())/1e3);var n={iteration_number:0},a=null;return e&&e.length&&e.map(((r,s)=>{const o=Math.floor(Date.parse(r.start+"Z")/1e3),c=Math.floor(Date.parse(r.end+"Z")/1e3);t>o&&t<c&&(a=e[s],n=e.length!==s+1?e[s+1]:null)})),{currentIteration:a,nextIteration:n}}}r()(l,"sInstance",null)},d392:function(e,t){},d5d0:function(e,t){},ee95:function(e,t,n){"use strict";n.r(t),n.d(t,"currentIteration",(function(){return a})),n.d(t,"nextIteration",(function(){return r})),n.d(t,"user",(function(){return s})),n.d(t,"isRegistered",(function(){return o})),n.d(t,"statistics",(function(){return c})),n.d(t,"unvests",(function(){return i})),n.d(t,"canUnvest",(function(){return u})),n.d(t,"bcStateRequirements",(function(){return l})),n.d(t,"XPRBalance",(function(){return d})),n.d(t,"bcUnstaking",(function(){return f})),n.d(t,"vestedOptions",(function(){return m})),n.d(t,"liquidFreeos",(function(){return h})),n.d(t,"airkeyBalance",(function(){return p})),n.d(t,"liquidOptions",(function(){return g})),n.d(t,"stakeRequirement",(function(){return b})),n.d(t,"userHasStaked",(function(){return y})),n.d(t,"userClaimedAlready",(function(){return v})),n.d(t,"userMeetsStakeRequirement",(function(){return w})),n.d(t,"totalFreeos",(function(){return k})),n.d(t,"canClaim",(function(){return I})),n.d(t,"isFreeosEnabled",(function(){return A})),n.d(t,"userStake",(function(){return R})),n.d(t,"reasonCannotClaim",(function(){return O})),n.d(t,"isAuthenticated",(function(){return C})),n.d(t,"accountName",(function(){return N})),n.d(t,"allIterations",(function(){return T})),n.d(t,"unstakingIteration",(function(){return S})),n.d(t,"stakeCurrency",(function(){return _})),n.d(t,"currencyName",(function(){return P})),n.d(t,"unvestPercentage",(function(){return U}));const a=({currentIteration:e})=>e,r=({nextIteration:e})=>e,s=({user:e})=>e,o=({isRegistered:e})=>e,c=({statistics:e})=>e,i=({unvests:e})=>e,u=({canUnvest:e})=>e,l=({bcStateRequirements:e})=>e,d=({XPRBalance:e})=>e,f=({bcUnstaking:e})=>e,m=({vestedOptions:e})=>e,h=({liquidFreeos:e})=>e,p=({airkeyBalance:e})=>e,g=({liquidOptions:e})=>e,b=({stakeRequirement:e})=>e,y=({userHasStaked:e})=>e,v=({userClaimedAlready:e})=>e,w=({userMeetsStakeRequirement:e})=>e,k=({totalFreeos:e})=>e,I=({canClaim:e})=>e,A=({isFreeosEnabled:e})=>e,R=({userStake:e})=>e,O=({reasonCannotClaim:e})=>e,C=({isAuthenticated:e})=>e,N=({accountName:e})=>e,T=({allIterations:e})=>e,S=({unstakingIteration:e})=>e,_=({stakeCurrency:e})=>e,P=({currencyName:e})=>e,U=({unvestPercentage:e})=>e},f33e:function(e,t,n){},f7c0:function(e,t){}});