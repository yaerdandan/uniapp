<template>
	<view class="box">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view :class="{user1:!isLogin}">
			<uni-popup :show="isHidePopup" type="middle" class="Popup" @hidePopup="hidePopup">
				<text class="updateImg" @click="updateImg">更换封面</text>
				<text class="quxiaoClick" @click="quxiaoClick">取消</text>
			</uni-popup>
			<view class="PopupBox"  @click="bgImgClick"></view>
			<view class="bg_img">
				<image :src="b =='' ? userBgImg : b" class="bgSrc" mode="scaleToFill"></image>
			</view>
			<view class="user">
				<view class="userInfo">
					<image :src="a == '' ? src: a" class="userImg" @click="reg" ></image>
					<view class="userNameBox">
						<span class="username">{{username}}</span>
					</view>
					<text class="ID">ID {{userID}}</text>
					<input class="sig" value="这是一个个性签名" />
				</view>
			</view>
		</view>
		<!-- 未登录 -->
		<view :class="{loginText1:isLogin}">
			<view class="bg_img">
				<image :src="src1" class="bgSrc" mode="scaleToFill"></image>
			</view>
			<view class="loginText">
				<image :src="userImg" class="loginTextImg"></image>
				<text @click="loginTextLog">登录/</text>
				<text @click="loginTextReg">注册</text>
			</view>
		</view>
		
		<view class='function'>
				<li @click="Mytiezi">
					<image class="iconImg" src="../../../static/Mytiezi.png"></image>
					<span class="functionText">我的帖子</span>
					<image class="arrows" src="../../../static/MytieziImg.png"></image>
				</li>
				<li @click="Mystar">
					<image class="iconImg" src="../../../static/Peoplestar.png"></image>
					<span class="functionText">我的收藏</span>
					<image class="arrows" src="../../../static/PeoplestarImg.png"></image>
				</li>
				<li @click="Myquestion">
					<image class="iconImg" src="../../../static/question.png"></image>
					<span class="functionText">问题反馈</span>
					<image class="arrows" src="../../../static/questionImg.png"></image>
				</li>
				<li @click="Mysite">
					<image class="iconImg" src="../../../static/set.png"></image>
					<span class="functionText">设置</span>
					<image class="arrows" src="../../../static/setImg.png"></image>
				</li>
		</view>
	</view>
</template>

<script>
	import uniPopup from "../../../components/uni-popup.vue"
	import store from '../../../store/index.js'
	import { mapState,mapMutations } from 'vuex'
	export default {
		data() {
			return {
				src:'',
				src1:'/static/MybgImg.png',
				//用户的背景
				userBgImg:'/static/MybgImg.png',
				//用户的头像
				userImg: '/static/headerPhoto.png',
				userID:'',
				username:'',
				isHidePopup:false,
				isLogin:false
			};
		},
		components:{
			uniPopup,
			
		},
		computed: {
			//修改头像
			a(){
				return store.state.userHeaderPhoto;
			},
			//修改背景
			b(){
				return store.state.userBgImg;
			}
		},
		onShow(){
			var _self = this;
			this.isLogin = store.state.isLogin;
			const username = uni.getStorageSync('username');
			const userID = uni.getStorageSync('id');
			const QQImg = uni.getStorageSync('picture');
			const qq_id = uni.getStorageSync('qq_id');
			//修改背景
			const userBgImg = uni.getStorageSync('userBgImg');
			var ImgBg = userBgImg.replace("\\", "\/");
			//修改手机登录头像
			const userHeaderPhoto = uni.getStorageSync('userHeaderPhoto');
			var headerPhoto = userHeaderPhoto .replace("\\", "\/");
			if(username){
				this.isLogin = true;
				this.username = username;
				this.userID = userID;
				this.src = headerPhoto;
				this.userBgImg = ImgBg;
				console.log('背景图'+_self.userBgImg);
				console.log('头像'+_self.src);
			}
		},
		methods: {
			reg() {
				var _self = this;
				const qq_id = uni.getStorageSync('qq_id');
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success:(res)=>{
						const tempFilePaths = res.tempFilePaths;
						console.log(tempFilePaths);
						// _self.userBgImg = tempFilePaths['0'];
						if(qq_id){
							uni.uploadFile({
								url: `${this.url}home/Update/portrait`,
								filePath: tempFilePaths[0],
								name: 'file',
								formData:{
									qqID:qq_id
								},
								success: function(res) {
									console.log(JSON.stringify(res.data));
									_self.isHidePopup = false;
									var ress = JSON.parse(res.data);
									uni.setStorageSync('userHeaderPhoto',ress.src);
									var userHeaderPhoto = uni.getStorageSync('userHeaderPhoto');
									var userHeaderPhoto = userHeaderPhoto .replace("\\", "\/");
									store.state.userHeaderPhoto = userHeaderPhoto;
									console.log(store.state.userHeaderPhoto);
								},
								fail: function(e) {
									console.log(e.errMsg);
								}
							})
						}else{
							uni.uploadFile({
								url: `${this.url}home/Update/portrait`,
								filePath: tempFilePaths[0],
								name: 'file',
								formData:{
									id:_self.userID
								},
								success: function(res) {
									console.log(JSON.parse(res.data));
									_self.isHidePopup = false;
									var ress = JSON.parse(res.data);
									uni.setStorageSync('userHeaderPhoto',ress.src);
									var userHeaderPhoto = uni.getStorageSync('userHeaderPhoto');
									var userHeaderPhoto = userHeaderPhoto .replace("\\", "\/");
									store.state.userHeaderPhoto = userHeaderPhoto;
									console.log(store.state.userHeaderPhoto);
								},
								fail: function(e) {
									console.log(e.errMsg);
								}
							})
						}
					}
				})
			},
			loginTextLog(){
				uni.navigateTo({
					url:'/components/login/log?id=1'
				})
			},
			loginTextReg(){
				uni.navigateTo({
					url:'/components/register/register'
				})
			},
			//点击背景图片
			bgImgClick(){
				var _self = this;
				_self.isHidePopup=true;
			},
			//点击弹出的卡片的遮罩层
			hidePopup(){
				var _self = this;
				_self.isHidePopup=false;
			},
			updateImg(){
				var _self = this;
				const qq_id = uni.getStorageSync('qq_id');
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success:(res)=>{
						const tempFilePaths = res.tempFilePaths;
						console.log(tempFilePaths);
						// _self.userBgImg = tempFilePaths['0'];
						if(qq_id){
							uni.uploadFile({
								url: `${this.url}home/Update/img_update`,
								filePath: tempFilePaths[0],
								name: 'file',
								formData:{
									qqID:qq_id
								},
								success: function(res) {
									_self.isHidePopup = false;
									var ress = JSON.parse(res.data);
									console.log(JSON.stringify(ress));
									uni.setStorageSync('userBgImg',ress.data['0'].back_img);
									var userBgImg = uni.getStorageSync('userBgImg');
									var ImgBg = userBgImg .replace("\\", "\/");
									store.state.userBgImg = ImgBg;
									console.log(store.state.userBgImg);
								},
								fail: function() {
									console.log('file');
								}
							})
						}else{
							uni.uploadFile({
								url: `${this.url}home/Update/img_update`,
								filePath: tempFilePaths[0],
								name: 'file',
								formData:{
									id:_self.userID
								},
								success: function(res) {
									_self.isHidePopup = false;
									var ress = JSON.parse(res.data);
									console.log(JSON.stringify(ress));
									uni.setStorageSync('userBgImg',ress.data['0'].back_img);
									var userBgImg = uni.getStorageSync('userBgImg');
									var ImgBg = userBgImg .replace("\\", "\/");
									store.state.userBgImg = ImgBg;
									console.log(store.state.userBgImg);
								},
								fail: function() {
									console.log('file');
								}
							})
						}
						
					}
				})
			},
			Mysite(){
				uni.navigateTo({
					url:'setUser'
				})
			},
			quxiaoClick(){
				var _self = this;
				_self.isHidePopup=false;
			},
			Mytiezi(){
				uni.navigateTo({
					url:'Mytopic'
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
	.PopupBox{
		width:500upx;
		height:350upx;
		position: fixed;
		left:300upx;
		z-index:555;
	}
	.bg_img{
		position: fixed;
		width:100%;
		height:500upx;
		filter: blur(1px);
	}
	.bgSrc{
		width:100%;
		height:100%;
		border-radius: 3upx;
	}
	.user{
		position: fixed;
		top:120upx;
		margin:10upx 0 0 20upx;
		width:95%;
		height:340upx;
	}
	.user1{
		display: none;
	}
	.loginText{
		position: fixed;
		top:200upx;
		left:50upx;
		font-size: 50upx;
		color:#0c2647;
	}
	.loginTextImg{
		border:2px solid white;
		width:140upx;
		height:140upx;
		border-radius: 50%;
	}
	.loginText1{
		display: none;
	}
	.updataImg{
		
	}
	/* 用户头像 */
	.userImg{
		position:fixed;
		top:180upx;
		left:60upx;
		width:140upx;
		height:140upx;
		border-radius:50%;
		display: block;
		margin: 0 auto;
		border:3px solid white;
	}
	/* 用户名 */
/* 	.username{
		position:fixed;
		top:320upx;
		left:70upx;
		margin-top:20upx;
		font-weight:400;
		font-size: 35upx;
		color:white;
	} */
	.userNameBox{
		position:fixed;
		top:340upx;
		left:20upx;
		text-align: center;
		width:240upx;
		height:60upx;
		font-size: 35upx;
		color:white;
	}
	.ID{
		position:fixed;
		top:400upx;
		left:50upx;
		width:190upx;
		height:40upx;
		line-height:40upx;
		padding-left:20upx;
		border-radius:50upx;
		background: rgba(0, 0, 0, 0.2);
		font-size:25upx;
		color:white;
	}
	.IDnumber{
		position:fixed;
		top:400upx;
		left:110upx;
		font-size:30upx;
	}
	/* 签名 */
	.sig{
		position:fixed;
		top:440upx;
		left:70upx;
		color:white;
		font-size:30upx;
		font-weight:400;
	}
	.function{
		margin:0 auto;
		width: 100%;
		height:900upx;
		position: fixed;
		top:500upx;
		border-top:14px solid rgb(239,239,247);
	}
	li{
		list-style: none;
		margin:0 auto;
		height:100upx;
		line-height: 90upx;
		font-size: 35upx;
		padding-left:90upx;
		background: #ffffff;
		/* box-shadow: 0 1px 1px 0 rgba(0,0,0,0.24); */
		margin-bottom:5upx;
		border-bottom:2px solid rgb(239,239,247);
	}
	.iconImg{
		width:35upx;
		height:35upx;
		padding-right:20upx;
		padding-top:30upx;
	}
	.functionText{
		position: relative;
		top:-2upx;
		color:rgb(999);
	}
	.arrows{
		width:30upx;
		height:40upx;
		margin-top:30upx;
		position: fixed;
		left:600upx;
	}
	.reg,.login{
		font-size:50upx;
	}
	.updateImg{
		background: white;
		width:420upx;
		height: 60upx;
		border-bottom:1px solid rgb(239,239,247);
		padding-bottom: 20upx;
		margin-bottom: 20upx;
		font-size: 30upx;
	}
	.quxiaoClick{
		background: white;
		width:420upx;
		height: 60upx;
		font-size: 30upx;
	}

</style>
