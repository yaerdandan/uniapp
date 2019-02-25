<template>
	<view class="index">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="content">
			<image :src="fhImg" class="fhImg" @click="srcImgTo"></image>
			<text class="regText">设置</text>
		</view>
		<view>
			<image :src="userImg" class="userImg"></image>
		</view>
		<view class="box">
			<text class="zhanghao">当前账号</text>
			<view class="box1">
				<input type="text" value="我是账号" class="nicknName" />
				<text class="nicknNameClick">修改账号</text>
			</view>
			<view class="box2">
				<input type="text" value="18633067829" class="number" />
			</view>
			<view class="box3">
				<text class="pwd">密码管理</text>
				<text class="updatepwd" @click="updatepwd">修改密码</text>
			</view>
		</view>
		<view class="btnbox">
			<button type="warn" class="btn" @click="btn">退出当前账号</button>
		</view>
	</view>
</template>

<script>
	import store from '../../../store/index.js'
	export default {
		data() {
			return {
				fhImg: '/static/fanhui.png',
				userImg:'/static/QQ.png'
			};
		},
		methods:{
			srcImgTo() {
				uni.switchTab({
					url:'personalCenter'
				})
			},
			updatepwd(){
				uni.navigateTo({
					url:'/components/register/forgetPwd'
				})
			},
			btn(){
				uni.clearStorageSync();
				store.state.isLogin=false;
				store.state.userInfo = '';
				uni.switchTab({
					url:'personalCenter'
				})
				store.state.topicList='';
			},
		},
		store
	}
</script>

<style>
	page{
		height: 100%;
		background: rgb(255, 251, 255);
	}
	.index{
		background: rgb(255,251,255);
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
	.srcImg {
		width: 100%;
		height: 400upx;
	}
	.fhImg {
		width: 30upx;
		height: 60upx;
		position: fixed;
		top: 80upx;
		left: 30upx;
	}
	.regText {
		text-align: center;
		display: block;
		margin: 0 auto;
		margin-top: 30upx;
		line-height: 60upx;
	}
	.userImg{
		width:150upx;
		height:150upx;
		border-radius:50%;
		margin:0 auto;
		display: block;
		margin-top:130upx;
		border:5px solid white;
	}
	.box{
		margin:0 auto;
		width:80%;
		height:800upx;
		background: rgb(255,251,255);
	}
	.zhanghao{
		position: fixed;
		top:550upx;
		color:gray;
	}
	.box1{
		width:100%;
		height:2upx;
		position: fixed;
		top:750upx;
		border-bottom:1px solid #EFEFF7;
	}
	.nicknName{
		position: fixed;
		top:670upx;
	}
	.nicknNameClick{
		position: fixed;
		top:670upx;
		left:550upx;
	}
	.box2{
		width:100%;
		height:2upx;
		position: fixed;
		top:860upx;
		border-bottom:1px solid #EFEFF7;
	}
	.number{
		position: fixed;
		top:780upx;
	}
	.box3{
		width:100%;
		height:2upx;
		position: fixed;
		top:970upx;
		border-bottom:1px solid #EFEFF7;
	}
	.pwd{
		position: fixed;
		top:890upx;
	}
	.updatepwd{
		position: fixed;
		top:890upx;
		left:550upx;
		color:rgb(145,145,145);
	}
	.btnbox{
		width:100%;
		height:350upx;
		borer:1px solid;
	}
	.btn{
		position: fixed;
		top:80%;
		left:140upx;
		width:65%;
		border-radius:50upx;
		box-shadow: 0 5px 5px 0 rgba(0,0,0,0.24), 0 10px 30px 0 rgba(0,0,0,0.19);
	}
</style>
