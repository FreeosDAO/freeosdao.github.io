(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"11a0":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[e.stakedInfo?e._e():a("div",{staticClass:"col-xs-10 col-sm-5 q-mb-lg"},[a("q-btn",{attrs:{color:"primary",label:"register"},on:{click:function(t){return e.registerUser()}}}),e._m(0)],1),e.claimInfo&&!e.isMasterSwitchOpen?a("div",[a("b",[e._v("Freeos system is not currently operational. Please check back later.")])]):e._e(),e.claimInfo&&e.isMasterSwitchOpen?a("div",[a("div",{staticClass:"q-ma-md q-mt-lg"},[a("q-btn",{attrs:{disable:e.isDisableClaim,color:e.isDisableClaim?"dark":"primary","no-caps":"",label:"Claim FreeOS"},on:{click:function(){return e.onClaim(e.accountName)}}})],1),e.claimInfo&&e.claimInfo.respIsUserAlreadyClaimed?a("div",{staticClass:"q-ma-md"},[e.nextCalendar?[e._v("\n        Next claim will be available in "+e._s(e.getDateDiff())+" days\n      ")]:[e._v("\n        Airclaim is completed.\n      ")]],2):e._e(),e.claimInfo&&e.isDisplayingStakedMessage()&&e.userStakeRequirement?a("div",{staticClass:"q-mt-lg"},[a("p",[e._v("To be able to claim, you need a total of "),a("b",[e._v("\n        "+e._s(e.userStakeRequirement)+" XPR\n      ")]),e._v(" staked on your account.")]),a("p",[e._v("\n        More Information staking/unstaking you can find "),a("router-link",{staticClass:"text-primary",attrs:{to:{name:"stake"}}},[e._v("here")]),e._v(".\n      ")],1)]):e._e(),e.isDisplayingHoldingRequirement()&&!e.userHasAirKey?a("div",{staticClass:"q-mt-lg q-mb-lg"},[e._v("\n      To be able to Claim, you need a total of "),a("b",[e._v(e._s(e.currentIteration.tokens_required)+" FREEOS")]),e._v(" in your account. "),a("br"),e._v("\n      Please "),a("span",{staticClass:"text-primary",staticStyle:{"text-decoration":"underline",cursor:"pointer"},on:{click:function(t){return e.$router.push("/transfer")}}},[e._v("transfer")]),e._v(" an additional\n      "),a("b",[e._v(e._s(e.currentIteration.tokens_required-parseFloat(e.totalFreeos))+" FREEOS")]),e._v("\n      in order to Claim.\n    ")]):e._e()]):e._e(),a("q-dialog",{model:{value:e.isShowSuccessDialog,callback:function(t){e.isShowSuccessDialog=t},expression:"isShowSuccessDialog"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center q-pb-none"},[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-card-section",[a("div",{staticClass:"text-h4 text-center",staticStyle:{color:"#5a89a3","font-weight":"bolder"}},[e._v("Congratulations!")]),a("div",{staticClass:"text-h6 text-center q-mt-lg q-mb-lg"},[e._v("You earned "),a("b",{staticStyle:{color:"#41aad6"}},[e._v(e._s(e.currentIteration&&e.currentIteration.claim_amount)+" FREEOS")])]),e.nextCalendar?a("div",{staticClass:"text-center"},[e._v("Come back next week to earn "),a("b",[e._v(e._s(e.nextCalendar.claim_amount)+" FREEOS")])]):e._e()])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("small",[e._v("(you are not registered yet)")])])}],n=(a("4fad"),a("ddb0"),a("c973")),r=a.n(n),c=a("ded3"),o=a.n(c),l=a("2f62"),u=a("3f9b"),m={name:"Claim",data(){return{isNotification:!0,isShowSuccessDialog:!1,isDisableClaim:!1}},computed:o()(o()(o()(o()({},Object(l["d"])({accountName:e=>e.account.accountName,currentIteration:e=>e.calendar.currentIteration,nextCalendar:e=>e.calendar.nextCalendar,vestedBalance:e=>e.vest.balance,freeosInAccount:e=>e.account.claimInfo.freeosInAccount,stakedInfo:e=>e.account.claimInfo.stakedInfo,userCount:e=>e.account.claimInfo.statistics.usercount,stakeRequirmentList:e=>e.account.claimInfo.stakeRequirmentList})),Object(l["c"])("account",["claimInfo","userHasAirKey"])),Object(l["c"])("claim",["isClaimed","userAfterBalance","userPreviousBalance"])),{},{isMasterSwitchOpen(){return 1===Number(this.claimInfo.respMasterSwitch.value)},totalFreeos(){const e=Object(u["a"])(this.claimInfo.freeosInAccount)+Object(u["a"])(this.vestedBalance);return e+" FREEOS"},usersCurrentStakeReq(){const e=this.stakeRequirmentList.findIndex((e,t)=>{if(this.userCount<e.threshold)return t});return this.stakeRequirmentList[e-1]},userStakeRequirement(){if(!this.stakedInfo)return"";const e=String.fromCharCode(this.stakedInfo.account_type);if(!e)return"";let t=null;for(const[a,i]of Object.entries(this.usersCurrentStakeReq)){const s=a.split("_");if(s[1]===e){t=i;break}}return t}}),methods:o()(o()(o()({},Object(l["b"])("account",["getAccountInfo","onRegisterUser"])),Object(l["b"])("claim",["actionClaim"])),{},{onClaim(e){var t=this;return r()((function*(){yield t.actionClaim(e),t.getAccountInfo(),t.checkClaimBtnStatus()}))()},registerUser(){var e=this;return r()((function*(){yield e.onRegisterUser(e.accountName),e.getAccountInfo()}))()},getDateDiff(){const e=new Date(this.currentIteration.end_date).getTime(),t=(new Date).getTime();return parseInt((e-t)/864e5)},checkClaimBtnStatus(){this.isMasterSwitchOpen&&0!==this.currentIteration.iteration_number?1===this.currentIteration.iteration_number&&this.isMasterSwitchOpen?this.isDisableClaim=!1:this.hasUserStaked()?!this.userHasAirKey||this.claimInfo.respIsUserAlreadyClaimed?Object(u["a"])(this.totalFreeos)>=this.currentIteration.tokens_required&&!this.claimInfo.respIsUserAlreadyClaimed?this.isDisableClaim=!1:this.isDisableClaim=!0:this.isDisableClaim=!1:this.isDisableClaim=!0:this.isDisableClaim=!0},isDisplayingStakedMessage(){return!!this.isDisableClaim&&(!(0===this.currentIteration.iteration_number||!this.isMasterSwitchOpen||this.hasUserStaked())||void 0)},hasUserStaked(){return!!this.claimInfo.respFreeosRecord&&this.claimInfo.respFreeosRecord.staked_iteration>0},isDisplayingHoldingRequirement(){if(!this.currentIteration)return!1;const e=this.currentIteration.tokens_required;return Object(u["a"])(this.claimInfo.freeosInAccount)<e}}),watch:{isClaimed:{immediate:!0,handler:function(e){var t;e&&(this.userPreviousBalance+(null===(t=this.currentIteration)||void 0===t?void 0:t.claim_amount)===this.userAfterBalance&&(this.isShowSuccessDialog=!0,this.getAccountInfo(this.accountName)))}},claimInfo:{handler(e){this.checkClaimBtnStatus()},immediate:!0,deep:!0}}},d=m,h=a("2877"),f=a("9c40"),b=a("24e8"),_=a("f09f"),p=a("a370"),v=a("2c91"),C=a("7f67"),I=a("eebe"),k=a.n(I),S=Object(h["a"])(d,i,s,!1,null,null,null);t["default"]=S.exports;k()(S,"components",{QBtn:f["a"],QDialog:b["a"],QCard:_["a"],QCardSection:p["a"],QSpace:v["a"]}),k()(S,"directives",{ClosePopup:C["a"]})}}]);