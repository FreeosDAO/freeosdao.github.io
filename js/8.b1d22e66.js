(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{b6f9:function(e,t,s){"use strict";s("f8a3")},f8a3:function(e,t,s){},ff79:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("CompleteDialog",{ref:"complete"}),s("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[s("form",{staticClass:"panel-wrap",attrs:{novalidate:""}},[s("q-card",{staticClass:"panel q-pa-lg"},[s("div",{staticClass:"text-h4 text-center q-ma-lg"},[e._v("Vote on Locking Threshold")]),s("div",{staticClass:"panel panel-strong q-pa-lg text-center q-mb-lg q-pa-lg"},[s("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[s("strong",[e._v("Current Locking Threshold:")])]),s("h4",{staticClass:"text-h4 q-ma-xs",staticStyle:{"line-height":"1"}},[e._v(e._s(e.targetPrice)+" USD")])]),s("p",{staticClass:"text-subtitle1 q-mb-md",staticStyle:{"line-height":"1.2"}},[s("strong",[e._v("What price should the Locking Threshold be\n            this week?")])]),s("p",{staticClass:"q-mb-lg"},[e._v("\n          Increasing the Locking Threshold may help support the price of "+e._s(e.currencyName)+". However you may end up with\n          more of your "+e._s(e.tokenCurrencyName)+" Locked. For more information "),s("router-link",{attrs:{to:"/info#vested-options"}},[e._v("click\n            here")])],1),e.userHasVoted?s("section",[s("div",{staticClass:"panel panel-info q-pa-lg text-center q-mb-lg q-pa-lg"},[s("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[e._v("You Voted!")]),s("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[e._v("Thanks for Voting this week")])])]):e._e(),e.userHasStaked&&!e.userHasVoted?s("section",[s("div",{staticClass:"q-px-md q-py-sm"},[s("q-slider",{attrs:{min:e.thresholdRangeLower,max:e.thresholdRangeUpper,step:1e-6,"marker-labels":"",label:"","label-always":!!e.lockingThresholdVote,"track-size":"5px","thumb-size":"28px"},model:{value:e.lockingThresholdVote,callback:function(t){e.lockingThresholdVote=t},expression:"lockingThresholdVote"}})],1),s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs",staticStyle:{"align-items":"center"}},[s("div",{staticClass:"col-xs-8 col-sm-7 text-sm"},[e._v("Or manually enter amount:")]),s("div",{staticClass:"col-xs-1"}),s("div",{staticClass:"col-xs-3 col-sm-4"},[s("label",{staticClass:"q-field row no-wrap items-start q-input q-field--outlined q-field--dense q-validation-component",attrs:{"data-v-052b630f":"",for:"f_6eee53df-da8d-4f65-9fad-d55fd4c1e7e7"}},[s("div",{staticClass:"q-field__inner relative-position col self-stretch"},[s("div",{staticClass:"q-field__control relative-position row no-wrap",attrs:{tabindex:"-1"}},[s("div",{staticClass:"q-field__control-container col relative-position row no-wrap q-anchor--skip max-btn-holder"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.lockingThresholdVote,expression:"lockingThresholdVote"}],staticClass:"q-field__native q-placeholder",staticStyle:{"text-align":"center"},attrs:{novalidate:"",tabindex:"0",id:"f_6eee53df-da8d-4f65-9fad-d55fd4c1e7e7",type:"number"},domProps:{value:e.lockingThresholdVote},on:{input:function(t){t.target.composing||(e.lockingThresholdVote=t.target.value)}}})])])])])])]),e.lockingThresholdVoteInvalid&&0!==e.lockingThresholdVote?s("p",{staticClass:"text-center text-negative q-mt-none q-mb-sm"},[e._v("Locking Threashold must be between\n            "+e._s(e.thresholdRangeLower)+" and "+e._s(e.thresholdRangeUpper))]):e._e(),s("div",{staticClass:"row justify-center q-mt-md q-mb-sm q-pb-none",staticStyle:{"align-items":"center"}},[s("q-btn",{attrs:{size:"lg",unelevated:"","no-caps":"",outline:"",disable:!e.userHasStaked||e.userHasVoted||!e.lockingThresholdVote||"Running"!==e.airclaimStatus,color:"primary"},on:{click:function(t){return e.submit()}}},[e._v("\n              Submit Vote")])],1)]):e._e()])],1)])],1)},o=[],i=s("ded3"),l=s.n(i),r=s("2f62"),n=s("37ca"),c={name:"Vote",data(){return{lockingThresholdVote:0,stakeCurrency:"XUSDC",currencyName:"FREEOS",tokenCurrencyName:this.$options.filters.capitalize("POINT"),thresholdRangeLower:parseFloat("0.0167")}},components:{CompleteDialog:n["a"]},computed:l()(l()({},Object(r["c"])("freeos",["airclaimStatus","userHasVoted","lockFactor","userHasStaked","isAuthenticated","accountName","isRegistered","stakeRequirement","isFreeosEnabled","totalFreeos","liquidFreeos","liquidOptions","canClaim","reasonCannotClaim","currentIteration","nextIteration","airkeyBalance","airclaimStatus","currentPrice","targetPrice"])),{},{thresholdRangeUpper(){return this.currentPrice<this.thresholdRangeLower?Math.floor(parseFloat(this.lockFactor)*this.thresholdRangeLower*1e7)/1e7:Math.floor(parseFloat(this.lockFactor)*this.currentPrice*1e7)/1e7},lockingThresholdVoteInvalid(){var e=parseFloat(this.lockingThresholdVote);return"number"!==typeof e||e<this.thresholdRangeLower||e>this.thresholdRangeUpper}}),created:function(){},watch:{lockingThresholdVote(e,t){var s=parseFloat(e);"number"!==typeof s||s<this.thresholdRangeLower||s>this.thresholdRangeUpper?this.lockingThresholdVoteInvalid=!0:this.lockingThresholdVoteInvalid=!1}},methods:l()(l()({},Object(r["b"])("freeos",["vote"])),{},{async submit(){if(this.userHasStaked&&this.lockingThresholdVote){const t=this;var e=await t.vote({user:this.accountName,q3response:this.lockingThresholdVote});e instanceof Error||this.$refs.complete.openDialog({title:"Woohoo",subtitle:"Thanks for Voting!",text:"You Voted:",value:this.lockingThresholdVote,currency:"USD"})}}})},h=c,d=(s("b6f9"),s("2877")),p=s("f09f"),u=s("c1d0"),m=s("8572"),g=s("27f9"),f=s("9c40"),v=s("eebe"),k=s.n(v),b=Object(d["a"])(h,a,o,!1,null,null,null);t["default"]=b.exports;k()(b,"components",{QCard:p["a"],QSlider:u["a"],QField:m["a"],QInput:g["a"],QBtn:f["a"]})}}]);