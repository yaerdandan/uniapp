<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="title">
			<text>聊天</text>
		</view>
		<view v-show="!isShow" class="notLog">
			<text class="">您还没有登陆~~~</text>
		</view>
		<view v-show="!isGroup">
			<text class="">您还没有群聊哦~~~</text>
		</view>
		<view class="Box" v-show="isShow">
			<view class="chatbox" v-for="(todo,index) in todos" :key="index">
				<view @click="click_1(todos[index]['0'].home_id)">
					<image :src="todos[index]['0'].home_img" class="userChatImg"></image>
					<text class="userChatName">{{todos[index]['0'].home_name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// 	const recorderManager = uni.getRecorderManager();
// 	const innerAudioContext = uni.createInnerAudioContext();
// 
// 	innerAudioContext.autoplay = true;

	import store from '../../../store/index.js';
	export default {
		data() {
			return {
				name: '',
				toname: '',
				to: '',
				voicePath: '',
				src:'/static/headerPhoto.png',
				isShow:false,
				isGroup:false,
				todos:[]
			};
		},
// 		onLoad() {
// 			let self = this;
// 			recorderManager.onStop(function(res) {
// 				console.log('recorder stop' + JSON.stringify(res));
// 				self.voicePath = res.tempFilePath;
// 			});
// 		},
		onReady() {
			this.name = uni.getStorageSync('username');
			
		},
		onShow() {
			var _self = this;
			var username = uni.getStorageSync('username');
			if(!username){
				_self.isShow = false,
				_self.isGroup = false
			}else{
				_self.isShow = true
			}
			var id = uni.getStorageSync('id');
			uni.request({
				url:`${this.url}home/Homechat/all_chat`,
				method:"POST",
				data:{
					user_id:id
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success(res) {
					if(res.data == ''){
						_self.isGroup = false;
					}else{
						_self.todos = res.data;
						_self.isGroup = true;
						console.log(_self.todos)
					}
				}
			})
		},
		methods: {
			cc(){
				uni.showModal({
					title: '提示',
					content: '这是一个模态弹窗',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			click_1(id) {
// 				var username = uni.getStorageSync('username');
// 				if(!username){
// 					uni.showModal({
// 						title: '提示',
// 						content: '您还未登录，点击确认跳转登陆',
// 						success: function (res) {
// 							if (res.confirm) {
// 								uni.navigateTo({
// 									url:'/components/login/log'
// 								})
// 							} else if (res.cancel) {
// 								console.log('用户点击取消');
// 							}
// 						}
// 					});
// 				}
				uni.navigateTo({
					url: "./chatGroup?group="+id+"&username=" + this.name
				})
			},
			click_4() {
				uni.navigateTo({
					url: "./chatGroup?username=" + this.name + "&toname=" +"三字三十三画"
				})
			},
			click_5() {
				uni.navigateTo({
					url: "./chatGroup?group=3&username=" + this.name
				})
			},
			startRecord() {
				console.log('开始录音');

				recorderManager.start();
			},
			endRecord() {
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice() {
				console.log('播放录音');
				console.log(this.voicePath);
				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					innerAudioContext.play();
				}
				recorderManager.onError(function(e) {
					console.log(e.errMsg)
				})
			}
		},
		store
	}
</script>

<style>
	page{
		height: 100%;
		background: rgb(255, 251, 255);
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
	.title{
		width:100%;
		height:60upx;
		margin-top:15upx;
		margin-bottom:15upx;
		text-align:center;
	}
	.Box{
		width:100%;
	}
	.chatbox{
		height:200upx;
		width:100%;
		border-bottom:1px solid lightgray;
		position: relative;
	}
	.userChatImg{
		height:120upx;
		width:120upx;
		position: absolute;
		top:40upx;
		left:30upx;
	}
	.userChatName{
		position: absolute;
		left:180upx;
		top:50upx;
	}
	.lastNews{
		position: absolute;
		top:120upx;
		left:180upx;
		color:gray;
		font-size: 30upx;
	}
	.notLog{
		position: fixed;
		top:140upx;
		left:230upx;
	}
</style>
