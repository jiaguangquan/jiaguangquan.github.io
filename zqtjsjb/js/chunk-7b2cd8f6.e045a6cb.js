(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b2cd8f6"],{"58cc":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"clearfix"},[e("div",{staticClass:"box"},[e("div",{staticClass:"top"},[e("p",{staticClass:"top_title"},[t._v(t._s(t.user.title))]),e("p",{staticClass:"top_state"},[t._v("诉求企业："+t._s(this.companyName))]),e("p",{staticClass:"top_state"},[t._v("联系人："+t._s(this.companyPerson))]),e("p",{staticClass:"top_state"},[t._v("联系电话:"+t._s(this.companyPhone))]),e("p",{staticClass:"top_state"},[t._v("企业地址:"+t._s(this.companyAddress))]),e("p",{staticClass:"top_date"},[t._v("诉求日期："+t._s(this.submitDate))]),e("div",{staticClass:"top_center"},[e("p",{staticClass:"top_state2"},[t._v("是否回复:"+t._s(this.schedule.length>0?"是":"否"))]),e("p",{staticClass:"top_state2"},[t._v("问题描述："+t._s(this.content))]),e("p",{staticClass:"top_state2"},[t._v("\n          办理状态:"),e("span",{class:t.changeStateColor(t.user.statenum)},[t._v("\n            "+t._s(t.user.state)+"\n          ")])]),e("div",{staticClass:"top_schedule"},[e("span",{staticClass:"top_state"},[t._v("处理流程:")]),e("div",{staticClass:"top_schedule_state"},[e("ul",t._l(t.schedule,function(s){return e("li",{key:s.handletime},[e("p",[t._v("处理人："+t._s(s.handleuser))]),e("p",[t._v("答复内容："+t._s(s.handlecontent))]),e("p",[t._v("处理时间："+t._s(s.handletime))]),e("p",{staticClass:"arrow"})])}),0)])]),t.isSchedule?e("div",{staticClass:"top_schedule"},[e("span",{staticClass:"top_state"},[t._v("处理结果:")]),e("div",{staticClass:"top_schedule_state"},[e("ul",[e("li",[e("p",[t._v("处理人："+t._s(this.scheduleResult.handleuser))]),e("p",[t._v("答复内容："+t._s(this.scheduleResult.handlecontent))]),e("p",[t._v("处理时间："+t._s(this.scheduleResult.handletime))]),e("p",{staticClass:"arrow"})])])])]):t._e()])]),e("div",{staticClass:"bottom",class:{none:t.state,none1:!t.isevaluate}},[t._m(0),e("div",{staticClass:"bottom_content"},[e("p",{staticClass:"bottom_content_text"},[t._v("\n          "+t._s(t.evaluateContent)+"\n        ")]),e("div",{staticClass:"bottom_content_show"},[e("div",{staticClass:"star"},[e("van-rate",{attrs:{readonly:"",color:"#feaf30"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),e("div",{staticClass:"bottom_date"},[t._v(t._s(t.evaluateDate))])])])])]),e("div",{staticClass:"whitebg",class:{none:t.state,none1:t.isevaluate}},[e("button",{staticClass:"releaseButton",on:{click:function(s){return t.jump()}}},[t._v("评价")])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom_title"},[e("div",{staticClass:"block"}),e("p",{staticClass:"bottom_title_text"},[t._v("我的评价")])])}],c=(e("7f7f"),e("accb")),i={data:function(){return{isevaluate:0,state:!1,value:5,user:{},content:"",evaluateContent:"",evaluateDate:"",schedule:[],scheduleResult:"",userName:"",userPhone:"",submitDate:"",companyPerson:"",companyPhone:"",companyName:"",companyAddress:"",isSchedule:!1}},created:function(){this.user=JSON.parse(sessionStorage.getItem("userState")),this.getMoreInformation(),this.$toast.loading({message:"加载中...",forbidClick:!0})},mounted:function(){},methods:{changeStateColor:function(t){return"1"==t?"green":"2"==t?"yellow":"3"==t?"blue":"red"},jump:function(){this.$router.push({name:"evaluate"})},getMoreInformation:function(){var t=this,s=this,e=new URLSearchParams;e.append("transactid",this.user.id),e.append("sysid",53),this.$Axios.post(c["b"]+"/jact/interface/transactinfo/getTransactByIdForJson4YST.jsp",e).then(function(e){switch(console.log(e),t.content=e.data.content,t.isevaluate=e.data.issatisfy,t.schedule=e.data.handle,t.scheduleResult=t.schedule.slice(0),t.scheduleResult=t.scheduleResult.pop(),t.userName=e.data.name,t.userPhone=e.data.mphone,t.submitDate=e.data.submitdate,t.companyPerson=e.data.qylxof,t.companyPhone=e.data.qydhku,t.companyName=e.data.qymcuq,t.companyAddress=e.data.qydzyf,s.scheduleDetails(),t.isevaluate&&(t.evaluateContent=e.data.staisfy[0].opinion,t.value=parseInt(e.data.staisfy[0].score),t.evaluateDate=e.data.staisfy[0].satisfytime),e.data.state){case"办理完毕":t.state=!1;break;default:t.state=!0;break}setTimeout(function(){t.$toast.clear()},1e3)}).catch(function(s){console.log(s),setTimeout(function(){t.$toast.clear()},1e3)})},scheduleDetails:function(){0==this.schedule.length?this.isSchedule=!1:"结束"==this.scheduleResult.handlecontent?this.isSchedule=!0:this.isSchedule=!1}}},o=i,l=(e("e845"),e("2877")),u=Object(l["a"])(o,a,n,!1,null,"507dbb15",null);s["default"]=u.exports},"7f7f":function(t,s,e){var a=e("86cc").f,n=Function.prototype,c=/^\s*function ([^ (]*)/,i="name";i in n||e("9e1e")&&a(n,i,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},c695:function(t,s,e){},e845:function(t,s,e){"use strict";var a=e("c695"),n=e.n(a);n.a}}]);