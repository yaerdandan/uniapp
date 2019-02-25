require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],[,,,,,,,,,,,,function(t,e,s){"use strict";var i=c(s(2)),a=c(s(13));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(15),a=s.n(i),c=s(16);var r=function(t){s(14)},n=s(0)(a.a,c.a,r,null,null);e.default=n.exports},function(t,e){},function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{recommendSrc:"/static/recommend .png",mote:"/static/mote.png",guessLikeImg:"/static/like.png",todos:[{img:"/static/bicycle.png",text:"跑得快"},{img:"/static/sanitation.png",text:"扫的净"},{img:"/static/washer.png",text:"洗得好"},{img:"/static/bicycle.png",text:"跑得快"},{img:"/static/sanitation.png",text:"扫的净"},{img:"/static/washer.png",text:"洗得好"}],recommends:[{recommendBar:"/static/Recommended-bar.png",recBarLeftShop:"1种商品",recBarRightTitle:"樱花蛋糕",recBarRightEng:"Cherry Cake",recBarRightdsc:"蛋糕中包含着樱花的味道",NO1:"/static/NO1.png"},{recommendBar:"/static/Recommended-bar.png",recBarLeftShop:"1种商品",recBarRightTitle:"樱花蛋糕",recBarRightEng:"Cherry Cake",recBarRightdsc:"蛋糕中包含着樱花的味道",NO1:"/static/NO2.png"},{recommendBar:"/static/Recommended-bar.png",recBarLeftShop:"1种商品",recBarRightTitle:"樱花蛋糕",recBarRightEng:"Cherry Cake",recBarRightdsc:"蛋糕中包含着樱花的味道",NO1:"/static/NO3.png"}]}},methods:{click:function(){t.removeStorageSync("openId"),t.vibrateLong()({success:function(){console.log("success")}})},scanCode:function(){t.scanCode({success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result)}})},site:function(){t.chooseLocation({success:function(t){console.log("位置名称："+t.name),console.log("详细地址："+t.address),console.log("纬度："+t.latitude),console.log("经度："+t.longitude)}})},swiperClick:function(t){console.log(t)}}}}).call(e,s(1).default)},function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,circular:"true",interval:3e3,duration:1e3}},[s("swiper-item",{attrs:{mpcomid:"Zhj-0"}},[s("view",{staticClass:"swiper-item"},[t._v("1")])]),s("swiper-item",{attrs:{mpcomid:"gqo-1"}},[s("view",{staticClass:"swiper-item"},[t._v("2")])]),s("swiper-item",{attrs:{mpcomid:"BFz-2"}},[s("view",{staticClass:"swiper-item"},[t._v("3")])])],1),s("view",{staticClass:"box"},[s("ul",t._l(t.todos,function(e,i){return s("li",{key:i,staticClass:"function"},[s("image",{staticClass:"iconImg",attrs:{src:e.img}}),s("span",{staticClass:"text"},[t._v(t._s(e.text))])])}))],1),s("view",{staticClass:"particularlyRecommend"},[s("view",[s("div",[s("image",{staticClass:"recommendSrc",attrs:{src:t.recommendSrc}}),s("span",{staticClass:"recommendText"},[t._v("特别推荐")]),s("span",{staticClass:"recommendEnglish"},[t._v("Recommend")]),s("image",{staticClass:"mote",attrs:{src:t.mote}}),s("span",{staticClass:"moteText"},[t._v("·mote·")])])]),s("view",{staticClass:"recommendContent"},[s("ul",t._l(t.recommends,function(e,i){return s("li",{key:i},[s("image",{staticClass:"recommendBar",attrs:{src:e.recommendBar}}),s("view",{staticClass:"recBarLeft"},[s("image",{staticClass:"recBarLeftImg"}),s("span",{staticClass:"recBarLeftShop"},[t._v(t._s(e.recBarLeftShop))])]),s("view",{staticClass:"recBarRight"},[s("span",{staticClass:"recBarRightTitle"},[t._v(t._s(e.recBarRightTitle))]),s("span",{staticClass:"recBarRightEng"},[t._v(t._s(e.recBarRightEng))]),s("span",{staticClass:"recBarRightdsc"},[t._v(t._s(e.recBarRightdsc))]),s("image",{staticStyle:{width:"80upx",height:"80upx",position:"absolute",left:"414upx",top:"6upx"},attrs:{src:e.NO1}})])])}))],1)]),s("view",{staticClass:"guessLike"},[s("view",[s("image",{staticClass:"guessLikeImg",attrs:{src:t.guessLikeImg}}),s("span",{staticClass:"guessLikeText"},[t._v("猜你喜欢")]),s("span",{staticClass:"guessLikeEng"},[t._v("Guess You Like")])]),s("swiper",{staticStyle:{"margin-bottom":"0px","margin-top":"15upx"},attrs:{"indicator-dots":!0,interval:3e3,duration:1e3,circular:"true","next-margin":"60px","previous-margin":"60px",eventid:"YlH-0"},on:{change:t.swiperClick}},[s("swiper-item",{attrs:{mpcomid:"xeg-3"}},[s("view",{staticClass:"swiper-item"},[t._v("1")])]),s("swiper-item",{attrs:{mpcomid:"ygx-4"}},[s("view",{staticClass:"swiper-item"},[t._v("2")])]),s("swiper-item",{attrs:{mpcomid:"Ctl-5"}},[s("view",{staticClass:"swiper-item"},[t._v("3")])])],1)],1)],1)},staticRenderFns:[]};e.a=i}],[12]);