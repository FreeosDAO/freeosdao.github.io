(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{3468:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center q-mx-auto",staticStyle:{"max-width":"1000px"}},[e("div",{staticClass:"row full-width justify-around"},["canStake"===t.stakeStatus?e("div",{staticClass:"col-xs-10 col-sm-5 q-mb-lg"},[e("stake-card")],1):t._e(),"canUnStake"===t.stakeStatus?e("div",{staticClass:"col-xs-10 col-sm-5 q-mb-lg"},[e("unstake-card")],1):t._e()]),"unStaking"===t.stakeStatus?e("unstake-status"):t._e(),e("unstaking-dialog")],1)},s=[],i=e("ded3"),c=e.n(i),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-card",[e("q-card-section",[e("div",{staticClass:"text-h5 q-pa-md q-mx-auto",staticStyle:{width:"70%"}},[t._v("\n        Stake "+t._s(t.claimInfo.liquidInAccount.balance)+"\n      ")]),e("p",[t._v("To be eligible to Claim your weekly FREEOS tokens")]),e("div",{staticClass:"q-ma-md q-mt-lg"},[e("q-btn",{attrs:{color:"primary",disable:!t.isMeetStakeMinRequirment(),"no-caps":"",label:"Stake"},on:{click:function(){return t.onStake()}}})],1)])],1),e("p",{staticClass:"text-center q-mt-md"},[t._v("Current Staking Requirement = "+t._s(t.claimInfo.respStakeRequirement.default_stake))])],1)},o=[],r=e("c973"),u=e.n(r),d=e("2f62"),m={computed:c()({},Object(d["c"])("account",["claimInfo"])),methods:c()(c()(c()({},Object(d["b"])("stake",["actionStake"])),Object(d["b"])("account",["getAccountInfo"])),{},{onStake(){var t=this;return u()((function*(){yield t.actionStake(),t.getAccountInfo()}))()},isMeetStakeMinRequirment(){return this.getAbsoluteAmount(this.claimInfo.liquidInAccount.balance)>=this.getAbsoluteAmount(this.claimInfo.respStakeRequirement.default_stake)},getAbsoluteAmount(t){if(!t)return 0;const a=t.split(" ")[0];return parseFloat(a)}})},k=m,p=e("2877"),v=e("f09f"),q=e("a370"),b=e("9c40"),f=e("eebe"),h=e.n(f),C=Object(p["a"])(k,l,o,!1,null,null,null),S=C.exports;h()(C,"components",{QCard:v["a"],QCardSection:q["a"],QBtn:b["a"]});var g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"text-h5 q-pa-md q-mx-auto"},[t._v("\n      Unstake "+t._s(t.stakedAmount)+"\n    ")]),e("div",{staticClass:"text-h5 text-uppercase text-bold text-red-5"},[t._v("\n      WARNING!\n    ")]),e("p",{staticClass:"text-red-5"},[t._v("You will be unable to Claim further FREEOS tokens"),e("br"),t._v("\n      Unstaking will take 10 days\n    ")]),e("div",{staticClass:"q-ma-md q-mt-lg"},[e("q-btn",{attrs:{color:"primary","no-caps":"",label:"Unstake"},on:{click:function(a){return t.onUnstake()}}})],1)])],1)},_=[],w={computed:c()(c()({},Object(d["c"])("account",["claimInfo"])),{},{stakedAmount(){return this.claimInfo.eosStaked.stake}}),methods:c()(c()(c()({},Object(d["b"])("unstake",["actionUnstake"])),Object(d["b"])("account",["getAccountInfo"])),{},{onUnstake(){var t=this;return u()((function*(){yield t.actionUnstake(),t.getAccountInfo()}))()}})},x=w,A=Object(p["a"])(x,g,_,!1,null,null,null),U=A.exports;h()(A,"components",{QCard:v["a"],QCardSection:q["a"],QBtn:b["a"]});var I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-dialog",{model:{value:t.isShowUnstakeDialog,callback:function(a){t.isShowUnstakeDialog=a},expression:"isShowUnstakeDialog"}},[e("q-card",[e("q-card-section",[e("div",{staticClass:"text-h6 text-center"},[t._v("Please check transaction details below")])]),e("q-separator"),e("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[e("div",{staticClass:"row q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs"},[e("div",{staticClass:"col-6"},[t._v("\n          From:\n        ")]),e("div",{staticClass:"col-6"},[t._v("\n          asdgfhtj37kd\n        ")])]),e("div",{staticClass:"row q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs"},[e("div",{staticClass:"col-6"},[t._v("\n          Unstake:\n        ")]),e("div",{staticClass:"col-6"},[t._v("\n          "+t._s(t.unstakeAmount)+" EOS\n        ")])]),e("div",{staticClass:"row q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs"},[e("div",{staticClass:"col-6"},[t._v("\n          Date/time:\n        ")]),e("div",{staticClass:"col-6"},[t._v("\n          8.11.2020 / 6:16\n        ")])]),e("div",{staticClass:"q-mt-xl"},[t._v("\n        Please note that unstaking operation takes 3 weeks. You can cancel unstaking any time. Your funds will be available on your account 29.11.2020\n      ")])]),e("q-separator"),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"negative"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Confirm",color:"primary"}})],1)],1)],1)},y=[],O={data(){return{isShowUnstakeDialog:!1,unstakeAmount:null}}},j=O,Q=e("24e8"),E=e("eb85"),R=e("4b7e"),D=e("7f67"),F=Object(p["a"])(j,I,y,!1,null,null,null),$=F.exports;h()(F,"components",{QDialog:Q["a"],QCard:v["a"],QCardSection:q["a"],QSeparator:E["a"],QCardActions:R["a"],QBtn:b["a"]}),h()(F,"directives",{ClosePopup:D["a"]});var B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-ma-lg",staticStyle:{width:"90%",margin:"auto"}},[e("p",[t._v("You have 1 unstaking operation in process")]),e("q-card",{staticClass:"q-ma-lg"},[e("q-card-section",[e("div",{staticClass:"full-width q-pl-md q-pr-md",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[e("span",[t._v("Unstake 20 EOS for asdfwerok from 06.09.2020")]),e("q-btn",{attrs:{flat:"",color:"negative","no-caps":"",label:"Cancel"}})],1)])],1)],1)},M=[],N={},Y=Object(p["a"])(N,B,M,!1,null,null,null),P=Y.exports;h()(Y,"components",{QCard:v["a"],QCardSection:q["a"],QBtn:b["a"]});var J={name:"StakeAndUnstake",data(){return{stakedAmount:null,stakeStatus:null}},components:{StakeCard:S,UnstakeCard:U,UnstakeStatus:P,UnstakingDialog:$},computed:c()({},Object(d["c"])("account",["claimInfo"])),watch:{claimInfo:{handler(){this.switchStatus()},deep:!0,immediate:!0}},methods:{switchStatus(){this.claimInfo&&(this.userCanStake()?this.stakeStatus="canStake":this.userCanUnstake()&&(this.stakeStatus="canUnStake"))},userCanStake(){return this.getAbsoluteAmount(this.claimInfo.liquidInAccount.balance)>0},userCanUnstake(){return this.getAbsoluteAmount(this.claimInfo.eosStaked.stake)>0},getAbsoluteAmount(t){if(!t)return 0;const a=t.split(" ")[0];return parseFloat(a)}}},G=J,T=Object(p["a"])(G,n,s,!1,null,null,null);a["default"]=T.exports}}]);