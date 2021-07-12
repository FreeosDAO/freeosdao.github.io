(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{3468:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("CompleteDialog",{ref:"complete"}),a("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[a("div",{staticClass:"panel-wrap"},[a("q-card",{staticClass:"panel  q-pa-lg"},[a("div",{staticClass:"text-h4 text-center q-ma-lg"},[t._v("Staking Requirement")]),t.bcUnstaking||t.userHasStaked?t._e():a("div",[a("p",{staticClass:"text-center q-mb-xs"},[t._v("With Freeos unverified users will need a minimum amount in their account to Claim. For more info, "),a("router-link",{attrs:{to:"/info#staking"}},[t._v("click here")]),t._v(".")],1),a("p",{staticClass:"text-center q-mb-xs"},[t._v("In order to Claim your weekly OPTIONS, you need to stake ")]),a("h4",{staticClass:"text-center text-h4 q-ma-none q-mb-lg",staticStyle:{"line-height":"1"}},[t._v(t._s(t.stakeRequirement)+" "+t._s(t.stakeCurrency))])]),t.bcUnstaking?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4 text-warning",staticStyle:{"line-height":"1.2"}},[t._v("Warning")]),a("p",{staticClass:"q-mb-xs text-subtitle1",staticStyle:{"line-height":"1.2"}},[a("strong",[t._v("You have unstaked")])]),a("h4",{staticClass:"text-h4 q-mt-none q-mb-sm",staticStyle:{"line-height":"1"}},[t._v(t._s(t.userStake)+" "+t._s(t.stakeCurrency))]),a("p",{staticClass:"q-mb-md text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("Your will NOT be eligible to Claim your weekly OPTIONS in the next iteration. You need a minimum "+t._s(t.stakeRequirement)+" "+t._s(t.stakeCurrency)+" to Claim. This can be rectified by cancelling the process if you wish")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("You are currently unstaking "+t._s(t.userStake)+" "+t._s(t.stakeCurrency)+". The unstaking will complete in "),a("strong",{staticClass:"text-primary"},[t._v(t._s(t.stakeIterationMsg))])]),a("p",{staticClass:"q-mb-md",staticStyle:{"line-height":"1.4"}},[t._v("For more info, "),a("router-link",{attrs:{to:"/info#unstaking"}},[t._v("click here")])],1),t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",color:"primary"},on:{click:function(e){return t.cancelSubmit()}}},[t._v("Cancel Unstaking")]):t._e()],1):t._e(),t.XPRBalance<t.stakeRequirement&&!t.userHasStaked?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4 text-warning",staticStyle:{"line-height":"1.2"}},[t._v("Warning")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[a("strong",[t._v("We see your balance is short on "+t._s(t.stakeCurrency)+" You need to transfer the following to")])]),a("h4",{staticClass:"text-h5 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.stakeRequirement-t.XPRBalance)+" "+t._s(t.stakeCurrency))]),a("q-btn",{staticClass:"q-mt-md",attrs:{unelevated:"","no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.protonSwap()}}},[t._v("Get "+t._s(t.stakeCurrency)+" via ProtonSwap")])],1):t._e(),t.userHasStaked&&!t.bcUnstaking?a("div",{staticClass:"panel panel-info q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[t._v("You're Staked!")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("You've Staked so you can Claim, you've currently staked:")]),a("h4",{staticClass:"text-h4 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.userStake)+" "+t._s(t.stakeCurrency))]),a("p",{staticClass:"q-mt-md q-mb-sm",staticStyle:{"line-height":"1.4"}},[t._v("For more info, "),a("router-link",{attrs:{to:"/info#staking"}},[t._v("click here")])],1)]):t._e(),t.XPRBalance>=t.stakeRequirement&&!t.userHasStaked?a("div",{staticClass:"panel panel-info q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("You currently have more than enough staked in your account to Claim your weekly OPTIONS.")]),a("p",{staticClass:"q-mb-xs"},[a("strong",[t._v("Current balance:")])]),a("h4",{staticClass:"text-h4 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.XPRBalance)+" "+t._s(t.stakeCurrency))])]):t._e(),t.userHasStaked&&!t.bcUnstaking&&t.stakeRequirement>0?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[t._v("Unstake")]),a("p",{staticClass:"text-subtitle1 q-mb-xs",staticStyle:{"line-height":"1.4"}},[a("strong",[t._v("This process will complete at the start of the next Claim")]),t._v(" also if you unstake you will NOT be eligible to Claim your weekly OPTIONS. ")]),a("p",{staticClass:"q-mb-md",staticStyle:{"line-height":"1.4"}},[t._v("For more info, "),a("router-link",{attrs:{to:"/info#unstaking"}},[t._v("click here")])],1),t.userHasStaked?a("div",{staticClass:"row justify-center q-mb-xs q-pb-xs",staticStyle:{"align-items":"center"}},[t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",color:"primary"},on:{click:function(e){return t.unstakeSubmit()}}},[t._v("Unstake")]):t._e()],1):t._e()]):t._e(),t.userHasStaked?t._e():a("div",{staticClass:"row justify-center q-mb-md q-pb-xs",staticStyle:{"align-items":"center"}},[t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",size:"lg",disable:t.XPRBalance<t.stakeRequirement,color:"primary"},on:{click:function(e){return t.stakeSubmit()}}},[t._v("Stake")]):t._e()],1)])],1)])],1)},i=[],n=a("7619"),r=a.n(n),l=a("2f62"),c=a("37ca"),o=(a("2a19"),{name:"Stake",data(){return{countdown:1,stakeCurrency:"XPR",currencyName:"FREEOS"}},components:{CompleteDialog:c["a"]},computed:r()(r()({},Object(l["c"])("freeos",["accountName","bcUnstaking","XPRBalance","liquidFreeos","isAuthenticated","stakeRequirement","userHasStaked","userStake","userMeetsStakeRequirement","currentIteration","unstakingIteration"])),{},{stakeIterationMsg(){if(this.unstakingIteration&&this.currentIteration&&this.unstakingIteration===this.currentIteration.iteration_number){const e=Math.floor(Date.parse(this.currentIteration.end+"Z")/1e3),a=Math.floor(Date.parse((new Date).toISOString())/1e3);var t=this.secondsToDhms(e-a);return t}return"a minute"}}),created(){},methods:r()(r()({},Object(l["b"])("freeos",["fetch","stake","unstake","cancelUnstake"])),{},{protonSwap(){window.open("https://www.protonswap.com/swap","_blank")},async stakeSubmit(){const t=this;var e=await t.stake(t.stakeRequirement);e instanceof Error||this.$refs.complete.openDialog({title:"Great Stake",subtitle:"You staked",value:this.stakeRequirement,currency:"XPR"})},async unstakeSubmit(){var t=await this.unstake();t instanceof Error||this.$refs.complete.openDialog({title:"Unstaked",subtitle:"You've unstaked",value:this.userStake,currency:"XPR"})},async cancelSubmit(){var t=await this.cancelUnstake();t instanceof Error||this.$refs.complete.openDialog({title:"Cancel Unstaking",subtitle:"You've cancelled Unstaking",value:this.userStake,currency:"XPR"})},setCountdown(){const t=this,e=Math.floor(Date.parse(this.currentIteration.end+"Z")/1e3);setInterval((function(){const a=Math.floor(Date.parse((new Date).toISOString())/1e3);t.countdown=t.secondsToDhms(e-a)}),1e3)},secondsToDhms(t){t=Number(t);var e=Math.floor(t/86400),a=Math.floor(t%86400/3600),s=Math.floor(t%3600/60),i=(Math.floor(t%60),e>0?e+(1==e?" day":" days"):""),n=a>0?a+(1==a?" hour":" hours"):"",r=s>0?s+(1==s?" min":" mins"):"";return i&&n?i+", "+n:n?n+", "+r:i||"0 hours "+r}})}),u=o,m=a("2877"),h=a("f09f"),p=a("9c40"),d=a("eebe"),g=a.n(d),k=Object(m["a"])(u,s,i,!1,null,"636f4ee1",null);e["default"]=k.exports;g()(k,"components",{QCard:h["a"],QBtn:p["a"]})},"37ca":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[s("q-card",{staticClass:"q-pa-md",staticStyle:{"max-width":"450px",width:"100%"}},[s("q-card-actions",{staticClass:"q-pa-none",attrs:{align:"right"}},[s("q-icon",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ma-none cursor-pointer",staticStyle:{"font-size":"2rem"},attrs:{name:"close"}})],1),s("q-card-section",{staticClass:"flex justify-center column items-center"},[s("div",{staticClass:"text-h2 text-center"},[t._v(t._s(t.dialogObj.title))]),s("div",{staticClass:"col-6"},[s("span",{staticClass:"text-h6 q-mt-sm"},[t._v(t._s(t.dialogObj.subtitle))])]),s("div",{staticClass:"q-full w-full",staticStyle:{width:"100%"}},[s("q-img",{attrs:{src:a("d737")}})],1),s("div",{staticClass:"text-center q-pb-lg",staticStyle:{"margin-top":"-3rem"}},[s("span",{staticClass:"text-h1"},[t._v(t._s(t.dialogObj.value))]),s("br"),s("span",{staticClass:"text-h4"},[t._v(t._s(t.dialogObj.currency))])])])],1)],1)},i=[],n={props:{},computed:{},data(){return{isOpen:null,dialogObj:{title:"Wahoo!",subtitle:null,value:0,currency:"FREEOS"}}},methods:{openDialog(t){this.dialogObj=Object.assign(this.dialogObj,t),setTimeout((()=>{this.isOpen=!0,setTimeout((()=>{this.isOpen=!1}),5e3)}),1500)}}},r=n,l=a("2877"),c=a("24e8"),o=a("f09f"),u=a("4b7e"),m=a("0016"),h=a("a370"),p=a("068f"),d=a("7f67"),g=a("eebe"),k=a.n(g),b=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=b.exports;k()(b,"components",{QDialog:c["a"],QCard:o["a"],QCardActions:u["a"],QIcon:m["a"],QCardSection:h["a"],QImg:p["a"]}),k()(b,"directives",{ClosePopup:d["a"]})},d737:function(t,e,a){t.exports=a.p+"img/fireworks.5d45b6cd.svg"}}]);