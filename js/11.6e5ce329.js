(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{3468:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[a("div",{staticClass:"panel-wrap"},[a("q-card",{staticClass:"panel  q-pa-lg"},[a("div",{staticClass:"text-h4 text-center q-ma-lg"},[t._v("Staking Requirement")]),t.bcUnstaking?t._e():a("div",[a("p",{staticClass:"text-center"},[t._v("With FREEOS you need a minimum\n                        amount in your account to Claim. For\n                        more info, click here.")]),a("p",{staticClass:"text-center"},[t._v("In order to Claim your weekly FREEOS tokens, you need to stake ")]),a("h4",{staticClass:"text-center text-h5 q-ma-xs q-mb-lg",staticStyle:{"line-height":"1"}},[t._v(t._s(t.stakeRequirement)+" XPR")])]),t.bcUnstaking?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4 text-warning",staticStyle:{"line-height":"1.2"}},[t._v("Warning")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.2"}},[a("strong",[t._v("You have unstaked")])]),a("h4",{staticClass:"text-h5 q-mt-xs q-mb-mb",staticStyle:{"line-height":"1"}},[t._v(t._s(t.stakeRequirement)+" XPR")]),a("p",{staticClass:"q-mb-md text-subtitle1",staticStyle:{"line-height":"1.2"}},[t._v("Your are currently NOT eligiable to Claim your weekly FREEOS. You need a minimum "+t._s(t.stakeRequirement)+" XPR to Claim. This can be rectified by vancelling the process if you wish")]),a("p",{staticClass:"q-mb-lg text-subtitle1",staticStyle:{"line-height":"1.2"}},[t._v("You are currently unstaking "+t._s(t.stakeRequirement)+" XPR. The unstaking will complete "),a("strong",{staticClass:"text-primary"},[t._v(" "+t._s(t.stakeIterationMsg))])]),t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",disable:t.XPRBalance<t.stakeRequirement,color:"primary"},on:{click:function(e){return t.cancelSubmit()}}},[t._v("Cancel Unstaking")]):t._e()],1):t._e(),t.XPRBalance<t.stakeRequirement&&!t.userHasStaked?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4 text-warning",staticStyle:{"line-height":"1.2"}},[t._v("Warning")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.2"}},[a("strong",[t._v("We see your balance is short on XPR You need to transfer the following to")])]),a("h4",{staticClass:"text-h5 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.stakeRequirement-t.XPRBalance)+" XPR")]),a("q-btn",{staticClass:"q-mt-md",attrs:{href:"https://www.protonswap.com/swap",unelevated:"","no-caps":"",outline:"",color:"primary"}},[t._v("Get XPR via ProtonSwap")])],1):t._e(),t.userHasStaked&&!t.bcUnstaking?a("div",{staticClass:"panel panel-info q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[t._v("U've Staked")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.2"}},[t._v("You've Staked so you can Claim, you've currently staked:")]),a("h4",{staticClass:"text-h5 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.userStake)+" XPR")])]):t._e(),t.XPRBalance>=t.stakeRequirement&&!t.userHasStaked?a("div",{staticClass:"panel panel-info q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[t._v("Threshold Filling")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.2"}},[t._v("You currently have more than enough staked in your account to Claim your weekly FREEOS. Current balance:")]),a("h4",{staticClass:"text-h5 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.XPRBalance)+" XPR")])]):t._e(),t.XPRBalance<t.stakeRequirement?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4 text-warning",staticStyle:{"line-height":"1.2"}},[t._v("Warning")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.2"}},[a("strong",[t._v("We see your balance is short on XPR You need to transfer the following to")])]),a("h4",{staticClass:"text-h5 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.stakeRequirement-t.XPRBalance)+" XPR")]),a("q-btn",{staticClass:"q-mt-md",attrs:{href:"https://www.protonswap.com/swap",unelevated:"","no-caps":"",outline:"",color:"primary"}},[t._v("Get XPR via ProtonSwap")])],1):t._e(),t.userHasStaked&&!t.bcUnstaking?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[t._v("Unstake")]),a("p",{staticClass:"q-mb-md text-subtitle1",staticStyle:{"line-height":"1.2"}},[a("strong",[t._v("This process takes "+t._s(t.stakeIterationMsg)+" days")]),t._v(" also if you unstake you will NOT be eligiable to Claim your weekly FREEOS. ")]),t.userHasStaked?a("div",{staticClass:"row justify-center q-mb-sm q-pb-xs",staticStyle:{"align-items":"center"}},[t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",color:"primary"},on:{click:function(e){return t.unstakeSubmit()}}},[t._v("Unstake")]):t._e()],1):t._e()]):t._e(),t.userHasStaked?t._e():a("div",{staticClass:"row justify-center q-mb-md q-pb-xs",staticStyle:{"align-items":"center"}},[t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",size:"lg",disable:t.XPRBalance<t.stakeRequirement,color:"primary"},on:{click:function(e){return t.stakeSubmit()}}},[t._v("Stake")]):t._e()],1)])],1)])])},n=[],i=a("7619"),l=a.n(i),r=a("2f62"),c={name:"Stake",data(){return{countdown:1}},computed:l()(l()({},Object(r["c"])("freeos",["accountName","bcUnstaking","XPRBalance","liquidFreeos","isAuthenticated","stakeRequirement","userHasStaked","userStake","userMeetsStakeRequirement","currentIteration","unstakingIteration"])),{},{stakeIterationMsg(){return this.unstakingIteration&&this.currentIteration&&this.unstakingIteration===this.currentIteration.iteration_number?new Date(this.currentIteration.end).toString().split(new Date(this.currentIteration.end).getFullYear())[0]:"soon"}}),created(){this.setCountdown()},methods:l()(l()({},Object(r["b"])("freeos",["fetch","stake","unstake","cancelUnstake"])),{},{async stakeSubmit(){var t=await this.stake(this.stakeRequirement);console.log("resultR",t)},async unstakeSubmit(){var t=await this.unstake();console.log("resultR",t)},async cancelSubmit(){var t=await this.cancelUnstake();console.log("cancelUnstake",t)},setCountdown(){const t=this,e=Math.floor(Date.parse(this.currentIteration.end+"Z")/1e3);setInterval((function(){const a=Math.floor(Date.parse((new Date).toISOString())/1e3);t.countdown=t.secondsToDhms(e-a)}),1e3)},secondsToDhms(t){t=Number(t);var e=Math.floor(t/86400),a=Math.floor(t%86400/3600),s=Math.floor(t%3600/60),n=Math.floor(t%60),i=e>0?e+(1==e?" day, ":" days, "):"",l=a>0?a+(1==a?" hour, ":" hours, "):"",r=s>0?s+(1==s?" minute, ":" minutes, "):"",c=n>0?n+(1==n?" second":" seconds"):"";return i+l+r+c}})},o=c,u=a("2877"),m=a("f09f"),h=a("9c40"),g=a("eebe"),d=a.n(g),p=Object(u["a"])(o,s,n,!1,null,"744fd7e4",null);e["default"]=p.exports;d()(p,"components",{QCard:m["a"],QBtn:h["a"]})}}]);