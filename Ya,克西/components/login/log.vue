<template>
	<view class="index">
        <view class="status_bar">
            <view class="top_view"></view>
        </view>
        <view class="content">
				<image :src="srcImg" class="srcImg"></image>
				<image :src="fhImg" class="fhImg" @click="srcImgTo"></image>
			<view>
				<view class="zhanghao">
					<image src="../../static/people.png" class="zhImg"></image>
					<input type="text" class="zhText" placeholder="请输入手机号" v-model="zhText">
				</view>
				<view class="password">
					<image src="../../static/pwd.png" class="zhImg"></image>
					<input type="password" class="zhText" placeholder="请输入密码" v-model="pwd" @focus="pwdfocus" @blur="pwdblur">
				</view>
				<button class="btn" :disabled="isDisabled" :class="{btn1:!isDisabled}" @click="loginBtn">登陆</button>
			</view>
			<view class="reg">
				<text class="forgetPwd" @click="forgetPwd">忘记密码？</text>
				<text class="regText" @click="register">还没有账号？立即注册</text>
				<image :src="jiantou"></image>
			</view>
			<view class="otherReg">
				<text class="otherRegText">其他登陆方式</text>
				<image :src="QQRegImg" class="QQRegImg" @click="QQLogin"></image>
			</view>
		</view>
    </view>
</template>
<script> 
	import store from '../../store/index.js';
	export default {
		data(){
			return {
				srcImg:'/static/regLogin.png',
				fhImg:'/static/fanhui.png',
				jiantou:'/static/xiangyou.png',
				QQRegImg:'/static/QQ.png',
				zhText:"",
				pwd:"",
				isDisabled:true
			}
		},
		methods:{
			srcImgTo(){
				console.log(1);
				uni.switchTab({
					url:'/pages/tabBar/personalCenter/personalCenter'
				})
			},
			//用户QQ登陆
			QQLogin(){
				uni.login({
				  provider: 'qq',
				  success:(loginRes)=>{
					// 获取用户信息
					uni.getUserInfo({
					  provider: 'qq',
					  success:(infoRes)=>{
						var username = infoRes.userInfo.nickName;
						var openId = infoRes.userInfo.openId;
						var avatarUrl = infoRes.userInfo.avatarUrl;
						avatarUrl = avatarUrl.replace("\\", "\/");
						// store.state.username = username;
						uni.setStorageSync('username',username);
						uni.setStorageSync('qq_id',openId);
						uni.setStorageSync('userHeaderPhoto',avatarUrl);
						uni.request({
							url:`${this.url}home/Qqlogin/add`,
							method:"POST",
							data:{
								user :username,
								qq_id:openId,
								picture:avatarUrl
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
							},
							success:(res)=> {
								console.log(JSON.stringify(res.data));
								var ress = res.data.data['0'];
								if(ress.portrait){
									var portrait =  ress.portrait;
									portrait = portrait.replace("\\", "\/");
									uni.setStorageSync('userHeaderPhoto',portrait);
								}
								uni.setStorageSync('id',ress.id);
								uni.setStorageSync('userBgImg',ress.back_img);
								if(res.data.con == 0){
									uni.switchTab({
										url:'/pages/tabBar/personalCenter/personalCenter'
									});
								};
							}
						})

					  }
					});
				  }
				});
			},
			//密码框获取焦点
			pwdfocus(){
				if(this.zhText != ''){
					this.isDisabled = false;
				}
			},
			//密码框失去焦点
			pwdblur(){
				if(this.zhText == ''|| this.pwd == ''){
					this.isDisabled = true;
				}
			},
			//登陆
			loginBtn(){
				var _self = this;
				if(this.pwd == ''){
					return false;
				}
				if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(_self.zhText)) {
					alert("手机号码有误，请重填");
					return false;
				}
				uni.request({
					url:`${this.url}home/Userlogin/index`,
					method:"POST",
					data:{
						iphone:_self.zhText,
						paw:_self.pwd,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success:(res)=> {
						console.log(JSON.stringify(res.data));
						
						var ress = res.data.data['0'];
						uni.setStorageSync('id',ress.id);
						uni.setStorageSync('username',ress.user);
						uni.setStorageSync('title',ress.title);
						uni.setStorageSync('iphone',ress.iphone);
						//背景图片
						var back_img  = ress.back_img.replace("\\", "\/");
						uni.setStorageSync('userBgImg',back_img);
						//手机号登录头像
						var portrait = ress.portrait.replace("\\", "\/");
						uni.setStorageSync('userHeaderPhoto',portrait);
						if(res.data.con == 0){
							uni.switchTab({
								url:'/pages/tabBar/personalCenter/personalCenter'
							});
						};
					}
				})
			},
			forgetPwd() {
				uni.navigateTo({
					url:'../register/forgetPwd'
				})
			},
			register(){
				uni.navigateTo({
					url:"/components/register/register"
				})
			}
		},
		store
	}
</script>

<style>
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
    .top_view{
        height: var(--status-bar-height);
        width: 100%;
        position: fixed;
		top:0;
    }
	.srcImg{
		width:100%;
		height:400upx;
	}
	.fhImg{
		width:30upx;
		height:60upx;
		position: fixed;
		top:80upx;
		left:30upx;
	}
	.zhanghao{
		width:80%;
		height:100upx;
		margin:0 auto;
		margin-top:30upx;
		border-bottom:3px solid lightgray;
	}
	.zhImg{
		width:60upx;
		height:60upx;
		position: relative;
		top:10upx;
		
	}
	.zhText{
		margin-top:10upx;
		 width:80%;
		 height:70upx;
		 line-height: 70upx;
		 float: right;
		 margin-right:30upx;
		 left:100upx;
	}
	.password{
		width:80%;
		height:100upx;
		margin:0 auto;
		margin-top:70upx;
		border-bottom:3px solid lightgray;
	}
	.forgetPwd{
		position: fixed;
		top:780upx;
		left:525upx;
		color:rgb(86,202,251);
		font-size: 35upx;
	}
	.btn{
		margin:0 auto;
		width:70%;
		margin-top:110upx;
		border-radius: 30upx;
	}
	.btn1{
		background: #149EFF;
		color: #ffffff;
	}
	.reg{
		margin:0 auto;
		width:58%;
		margin-top:60upx;
	}
	.regText{
		color:#23BEFA;
		font-size: 40upx;
	}
	.reg image{
		width:30upx;
		height:30upx;
	}
	.otherReg{
		margin-top:100upx;
	}
	.otherRegText{
		text-align: center;
		display: block;
		color:lightgray;
		font-size: 35upx;
		font-weight: 500;
	}
	.QQRegImg{
		width:140upx;
		height:140upx;
		display: block;
		margin: 0 auto;
		margin-top:30upx;
	}
	
</style>