require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([2],{37:function(t,e,s){"use strict";var a=o(s(2)),n=o(s(38));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},38:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(40),n=s.n(a),o=s(41);var i=function(t){s(39)},c=s(0)(n.a,o.a,i,"data-v-60b62d24",null);e.default=c.exports},39:function(t,e){},40:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s={};e.default={data:function(){return{group:"",username:"",toname:"",text:"",todos:[],scrollTop:"",photo:"/static/picture.png",btnImg:"/static/btn.png",isShow:!1,isHeight:!1,owner:[]}},onShow:function(){var e=this;t.getSystemInfo({success:function(t){var s=t.windowWidth;t.windowHeight;s<400&&(e.isHeight=!0)}})},onLoad:function(t){this.group=t.group,this.username=t.username,this.toname=t.toname},onReady:function(){var e=this;function a(t,s){1==s?e.todos.push({ismine:!0,content:t.data,src:t.Img,chatImg:t.chatImg,name:t.name}):e.todos.push({ismine:!1,content:t.data,srcc:t.Img,chatImg:t.chatImg,name:t.name})}t.connectSocket({url:"ws://47.100.211.9:8003"}),t.onSocketOpen(function(a){!0,console.log("WebSocket连接已打开！"),s.name=e.username,s.group=e.group,void 0==e.group?s.lineType=1:s.lineType=0,s.type="enter",s.toname=e.toname,s.Img=t.getStorageSync("userImg"),t.sendSocketMessage({data:JSON.stringify(s)})}),t.onSocketMessage(function(t){var n=JSON.parse(t.data);n[0]?(e.owner=n,console.log(e.owner)):function(t){if(void 0!=t.groupnumber&&t.groupnumber==e.group)if(s.name==t.name){if(void 0==t.data)return;a(t,!0)}else a(t,!1);else if(s.name==t.name){if(void 0==t.data)return;a(t,!0)}else t.toname==s.name&&a(t,!1)}(n)})},watch:{todos:function(){var t=this;this.$nextTick(function(){var e=wx.createSelectorQuery();e.select("#ul").boundingClientRect(),e.selectViewport().scrollOffset(),e.exec(function(e){t.scrollTop=e[0].height})})}},methods:{click:function(){s.type="message",s.data=this.text,s.chatImg="",t.sendSocketMessage({data:JSON.stringify(s)}),this.text=""},onSubmit:function(){s.type="message",s.data=this.text,s.chatImg="",t.sendSocketMessage({data:JSON.stringify(s)}),this.text=""},Photo:function(){t.chooseImage({count:1,sourceType:["album","camera"],success:function(e){var a=e.tempFilePaths;t.uploadFile({url:"http://47.100.211.9/API/upLoadImg/UpLoadImg.php",filePath:a[0],name:"file",success:function(e){e.data;var a="http://47.100.211.9/API/upLoadImg/"+e.data;s.chatImg=a,s.data="1",s.type="message",t.sendSocketMessage({data:JSON.stringify(s)})},fail:function(){console.log("fail")}})}})},chatImg:function(t){console.log(t.target.files)}},onBackPress:function(){t.closeSocket({url:"http://47.100.211.9:8003"})}}}).call(e,s(1).default)},41:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"box"},[s("scroll-view",{staticClass:"owner",attrs:{"scroll-x":"","scroll-with-animation":!0}},t._l(t.owner,function(e,a){return s("view",{key:a,staticClass:"ownerInfo"},[s("image",{staticClass:"ownerImg",attrs:{src:e.ownerImg}}),s("text",{staticClass:"ownerText"},[t._v(t._s(e.name))])])})),s("scroll-view",{class:0==t.isHeight?"height":"Height",attrs:{"scroll-y":"","scroll-with-animation":!0,"scroll-top":t.scrollTop}},[s("div",{attrs:{id:"ul"}},[t._l(t.todos,function(e,a){return s("div",{key:a},[s("div",{class:1==e.ismine?"mine":"other"},[s("image",{staticClass:"userImg",attrs:{src:1==e.ismine?e.src:e.srcc}}),s("div",{staticClass:"Meg"},[s("span",{staticClass:"Message"},[s("span",{directives:[{name:"show",rawName:"v-show",value:""==e.chatImg?!t.isShow:t.isShow,expression:"todo.chatImg == '' ? !isShow : isShow"}]},[t._v(t._s(e.content))]),s("img",{directives:[{name:"show",rawName:"v-show",value:""!=e.chatImg?!t.isShow:t.isShow,expression:"todo.chatImg != '' ? !isShow : isShow"}],staticClass:"chatImg",attrs:{src:e.chatImg,eventid:"ypK-0-"+a},on:{click:function(e){t.chatImg(e)}}})])])])])}),s("div",{staticClass:"clear"})],2)]),s("view",{staticClass:"content"},[s("text",{staticClass:"text"},[t._v("回复:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{eventid:"lTq-1"},domProps:{value:t.text},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.onSubmit(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("image",{staticClass:"photo",attrs:{src:t.photo,eventid:"bSE-2"},on:{click:t.Photo}}),s("button",{attrs:{id:"click",eventid:"lo4-3"},on:{click:t.click}},[s("image",{staticClass:"btnImg",attrs:{src:t.btnImg}})])],1)],1)},staticRenderFns:[]};e.a=a}},[37]);