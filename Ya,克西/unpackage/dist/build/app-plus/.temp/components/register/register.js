require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{27:function(t,e,s){"use strict";var a=n(s(2)),i=n(s(28));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},28:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(30),i=s.n(a),n=s(31);var o=function(t){s(29)},r=s(0)(i.a,n.a,o,null,null);e.default=r.exports},29:function(t,e){},30:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(4),n=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{srcImg:"/static/regLogin.png",fhImg:"/static/fanhui.png",jiantou:"/static/xiangyou.png",QQRegImg:"/static/QQ.png",zhText:"",pwd:"",isDisabled:!0}},methods:{srcImgTo:function(){console.log(1),t.switchTab({url:"/pages/tabBar/login/login"})},QQLogin:function(){t.login({provider:"qq",success:function(e){console.log(e.authResult),t.getUserInfo({provider:"qq",success:function(e){console.log("用户昵称为："+e.userInfo.nickName),console.log("用户ID为："+e.userInfo.openId),console.log("用户头像为："+e.userInfo.avatarUrl);var s=e.userInfo.nickName,a=e.userInfo.openId,i=e.userInfo.avatarUrl;n.default.state.username=s,t.setStorageSync("username",s),t.setStorageSync("openId",a),t.setStorageSync("userImg",i),t.switchTab({url:"/pages/tabBar/login/login"})}})}})},pwdfocus:function(){""!=this.zhText&&(this.isDisabled=!1)},pwdblur:function(){""!=this.zhText&&""!=this.pwd||(this.isDisabled=!0)},loginBtn:function(){if(""==this.pwd)return!1;console.log(1)},register:function(){t.navigateTo({url:"/components/login/log"})}},store:n.default}}).call(e,s(1).default)},31:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"index"},[t._m(0),s("view",{staticClass:"content"},[s("image",{staticClass:"srcImg",attrs:{src:t.srcImg}}),s("image",{staticClass:"fhImg",attrs:{src:t.fhImg,eventid:"VkR-0"},on:{click:t.srcImgTo}}),s("view",[s("view",{staticClass:"zhanghao"},[s("image",{staticClass:"zhImg",attrs:{src:"../../static/people.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.zhText,expression:"zhText"}],staticClass:"zhText",attrs:{type:"text",placeholder:"请输入手机号",eventid:"Xz2-1"},domProps:{value:t.zhText},on:{input:function(e){e.target.composing||(t.zhText=e.target.value)}}})]),s("view",{staticClass:"password"},[s("image",{staticClass:"zhImg",attrs:{src:"../../static/pwd.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"zhText",attrs:{type:"password",placeholder:"请输入密码",eventid:"ZcT-2"},domProps:{value:t.pwd},on:{focus:t.pwdfocus,blur:t.pwdblur,input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),s("button",{staticClass:"btn",class:{btn1:!t.isDisabled},attrs:{disabled:t.isDisabled,eventid:"m08-3"},on:{click:t.loginBtn}},[t._v("登陆")])],1),s("view",{staticClass:"reg"},[s("text",{staticClass:"regText",attrs:{eventid:"1x3-4"},on:{click:t.register}},[t._v("还没有账号？立即注册")]),s("image",{attrs:{src:t.jiantou}})]),s("view",{staticClass:"otherReg"},[s("text",{staticClass:"otherRegText"},[t._v("其他登陆方式")]),s("image",{staticClass:"QQRegImg",attrs:{src:t.QQRegImg,eventid:"aFV-5"},on:{click:t.QQLogin}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"status_bar"},[e("view",{staticClass:"top_view"})])}]};e.a=a}},[27]);