<template>
	<view class="content">
		<!-- 滑动轮播图 -->
		<!-- 后边距next-margin="30upx" 前边距 previous-margin="30upx" -->
		<swiper :indicator-dots="true" :autoplay="true" circular="true" :interval="3000" :duration="2000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/lunbo1.png" class="lunbo" mode="scaleToFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/lunbo2.png" class="lunbo" mode="scaleToFill" @click="imageTo1"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/lunbo3.png" class="lunbo" mode="scaleToFill" @click="imageTo2"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 小功能 -->
		<view class="box">
			<ul>
				<li class='function' v-for="(todo,index) in todo" :key="index">
					<image class="iconImg" :src="todo['0'].home_img" @click="group(todo['0'].home_id,todo['0'].home_name)"></image>
					<span class="text">{{todo['0'].home_name}}</span>
				</li>
			</ul>
		</view>
		<!-- 特别推荐 -->
		<view class="particularlyRecommend">
			<view>
				<div>
					<image :src="recommendSrc" class="recommendSrc"></image>
					<span class='recommendText'>特别推荐</span>
					<span class='recommendEnglish'>Recommend</span>
					<image :src="mote" class="mote"></image>
					<span class="moteText">·mote·</span>
				</div>
			</view>
			<view class='recommendContent'>
				<ul>
					<li v-for="(todo,index) in recommends" :key="index">
						<image :src="todo.recommendBar" class="recommendBar"></image>
						<view class="recBarLeft">
							<image class="recBarLeftImg"></image>
							<span class="recBarLeftShop">{{todo.recBarLeftShop}}</span>
						</view>
						<view class="recBarRight">
							<span class="recBarRightTitle">{{todo.recBarRightTitle}}</span>
							<span class="recBarRightEng">{{todo.recBarRightEng}}</span>
							<span class="recBarRightdsc">{{todo.recBarRightdsc}}</span>
							<image style="width:80upx;height:80upx;position: absolute;left:414upx;top:6upx;" :src="todo.NO1"></image>
						</view>
					</li>
				</ul>
			</view>


		</view>

		<view class="guessLike">
			<view>
				<image :src='guessLikeImg' class="guessLikeImg"></image>
				<span class="guessLikeText">猜你喜欢</span>
				<span class="guessLikeEng">Guess You Like</span>
			</view>
			<swiper style="margin-bottom:20px;margin-top:15upx;height:550upx;" :indicator-dots="true" :interval="3000" :duration="1000"
			 circular="true" next-margin="60px" previous-margin="60px" @change="swiperClick">
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/Bottonlunbo1.png" class="bottomSrc"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/Bottonlunbo2.png" class="bottomSrc"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/Bottonlunbo3.png" class="bottomSrc"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 		<button @click="click">消除</button>
		<button @click="scanCode">扫二维码</button>
		<button @click="site">获取位置</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recommendSrc: '/static/recommend .png',
				mote: '/static/mote.png',
				guessLikeImg: '/static/like.png',
				todo:[],
				recommends: [{
						recommendBar: '/static/Recommended-bar.png',
						recBarLeftShop: '1种商品',
						recBarRightTitle: '樱花蛋糕',
						recBarRightEng: 'Cherry Cake',
						recBarRightdsc: '蛋糕中包含着樱花的味道',
						NO1: '/static/NO1.png',
					},
					{
						recommendBar: '/static/Recommended-bar.png',
						recBarLeftShop: '1种商品',
						recBarRightTitle: '樱花蛋糕',
						recBarRightEng: 'Cherry Cake',
						recBarRightdsc: '蛋糕中包含着樱花的味道',
						NO1: '/static/NO2.png',
					},
					{
						recommendBar: '/static/Recommended-bar.png',
						recBarLeftShop: '1种商品',
						recBarRightTitle: '樱花蛋糕',
						recBarRightEng: 'Cherry Cake',
						recBarRightdsc: '蛋糕中包含着樱花的味道',
						NO1: '/static/NO3.png',
					}
				]
			}
		},
		onReady() {
			var _self = this;
			uni.request({
				url:`${this.url}home/Homechat/index`,
				success(res) {
					if(res.data){
						_self.todo = res.data;
					}
				}
			})
		},
		methods: {
			click() {
				uni.removeStorageSync('openId');
				uni.vibrateLong()({
					success: function() {
						console.log('success');
					}
				});
			},
			scanCode() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			site() {
				// 				uni.getLocation({
				// 					type: 'wgs84',
				// 					success: function (res) {
				// 						console.log('当前位置的经度：' + res.longitude);
				// 						console.log('当前位置的纬度：' + res.latitude);
				// 					}
				// 				});
				uni.chooseLocation({
					success: function(res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});
			},
			swiperClick(e) {
				console.log(e);
			},
			imageTo1(){
				uni.navigateTo({
					url:'meishi'
				})
			},
			imageTo2(){
				uni.navigateTo({
					url:'jianzhi'
				})
			},
			//进入分组
			group(index,groupName){
				var username = uni.getStorageSync('username');
				uni.navigateTo({
					url:'/pages/tabBar/chat/chatGroup?group='+index+"&username="+username+"&groupName="+groupName
				})
			}
		},
	}
</script>

<style>
	.index {
		flex: 1;
		flex-direction: column;
		background: white;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		top: 0;
	}

	.content1 {
		background: lightblue;
		height: 44px;
		justify-content: center;
		align-items: center;
		z-index: 99;
	}

	.search {
		border: 1px solid;
		width: 55%;
		margin: 0 auto;
		position: relative;
		top: 12upx;
		display: block;
		height: 30px;
		line-height: 44px;
		border-radius: 30upx;
	}

	li {
		list-style: none;
		height: 200upx;
	}

	.content {
		background: rgb(255, 251, 255);
	}

	swiper {
		margin: 0 auto;
		width: 96%;
		height: 350upx;
		margin-bottom: 50upx;
	}

	.lunbo {
		width: 100%;
		height: 350upx;
	}
	.bottomSrc{
		width:400upx;
		height:550upx;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	.box{
		
		width: 100%;
		display: block;
		margin: 0 auto;
	}
	.function {
		width: 50%;
		height: 200upx;
		display: inline-block;
		position: relative;
	}

	.iconImg {
		margin: 0 auto;
		display: block;
		width: 350upx;
		height: 200upx;
	}

	.text {
		text-align: center;
		display: block;
		color: #8F8F94;
		font-size: 30upx;
	}

	/* 特别推荐 */
	.particularlyRecommend {
		margin: 0 auto;
		margin-top: 50upx;
		width: 95%;
	}

	.recommendSrc {
		position: relative;
		left: 70upx;
		width: 60%;
		height: 60upx;
	}

	.recommendText {
		position: absolute;
		left: 140upx;
		color: white;
		line-height: 60upx;
		font-size: 32upx;
	}

	.recommendEnglish {
		position: absolute;
		left: 310upx;
		color: white;
		line-height: 60upx;
		font-size: 25upx;
	}

	.mote {
		position: relative;
		left: 170upx;
		width: 90upx;
		height: 40upx;
	}

	.moteText {
		position: absolute;
		left: 618upx;
		color: white;
		line-height: 75upx;
		font-size: 25upx;
	}

	.recommendContent {
		width: 95%;
		margin: 0 auto;
	}

	.recommendBar {
		width: 100%;
		height: 180upx;
	}

	.recBarLeft {
		width: 130upx;
		height: 140upx;
		position: relative;
		top: -150upx;
	}

	.recBarLeftImg {
		width: 70upx;
		height: 70upx;
		display: block;
		margin: 0 auto;
		margin-top: 10upx;
		border-radius: 50%;
		border: 1px solid white;
	}

	.recBarLeftShop {
		margin-top: 20upx;
		display: block;
		text-align: center;
		font-size: 20upx;
		color: white;
	}

	.recBarRight {
		position: relative;
		left: 195upx;
		top: -306upx;
		width: 70%;
	}

	.recBarRightTitle {
		font-size: 25upx;
		display: block;
	}

	.recBarRightEng {
		font-size: 18upx;
		display: block;
	}

	.recBarRightdsc {
		font-size: 23upx;
		display: block;
		color: gray;
	}

	/*猜你喜欢 */
	.guessLike {
		width: 100%;
		margin: 0 auto;
		margin-top: 50upx;
		position: relative;
	}

	.guessLikeImg {
		width: 35%;
		height: 80upx;
		margin: 0 auto;
		display: block;
	}

	.guessLikeText {
		display: block;
		text-align: center;
		margin-top: -75upx;
		color: white;
		font-size: 32upx;
	}

	.guessLikeEng {
		display: block;
		text-align: center;
		color: white;
		margin-top: -5upx;
		font-size: 22upx;
	}
</style>
