(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"9a5e":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[s("div",{staticClass:"panel-wrap"},[s("q-card",{staticClass:"panel  q-pa-lg"},[s("div",{staticClass:"text-h4 text-center q-ma-lg"},[e._v("Registration")]),s("p",{staticClass:"q-mb-md text-center",staticStyle:{"line-height":"1.4"}},[e._v("For more info, "),s("router-link",{attrs:{to:"/info#registration"}},[e._v("click here")])],1),s("q-checkbox",{attrs:{id:"termsCheckbox"},model:{value:e.termsCheckbox,callback:function(t){e.termsCheckbox=t},expression:"termsCheckbox"}}),s("label",{attrs:{for:"termsCheckbox"}},[e._v("I accept Freeos's "),s("a",{staticClass:"cursor-pointer",staticStyle:{"text-decoration":"underline"},on:{click:function(t){e.showTerms=!e.showTerms}}},[e._v("Terms of Service")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showTerms,expression:"showTerms"}],staticClass:"text-left",staticStyle:{width:"100%","max-height":"120px","overflow-y":"auto"},attrs:{class:"text-left"}},[s("p",{staticClass:"text-body1"},[s("strong",[e._v("Freeos Terms of Service")])]),s("p",{staticClass:"text-body2"},[e._v("Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ")]),s("p",{staticClass:"text-body2"},[e._v("Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ")]),s("p",{staticClass:"text-body2"},[e._v("Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ")]),s("p",{staticClass:"text-body2"},[e._v("Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ")])]),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"q-mb-m",attrs:{disabled:!e.termsCheckbox,unelevated:"",size:"lg",outline:"",color:"primary"},on:{click:function(t){return e.submit()}}},[e._v("Register")])],1)],1)],1)])])},a=[],o=s("7619"),i=s.n(o),m=s("2f62"),c={name:"Re-register",data(){return{termsCheckbox:!1,showTerms:!1}},computed:i()({},Object(m["c"])("freeos",["accountName","XPRBalance","liquidFreeos","isAuthenticated"])),methods:i()(i()({},Object(m["b"])("freeos",["reregister"])),{},{async submit(){var e=await this.reregister();console.log("registerResult",e)}})},n=c,l=s("2877"),u=s("f09f"),p=s("8f8e"),d=s("4b7e"),b=s("9c40"),h=s("eebe"),x=s.n(h),v=Object(l["a"])(n,r,a,!1,null,"a368dd80",null);t["default"]=v.exports;x()(v,"components",{QCard:u["a"],QCheckbox:p["a"],QCardActions:d["a"],QBtn:b["a"]})}}]);