<template>
	<view>
		<view class="bg_img">
			<image style="height:630px;width:100%;" :src="img" mode=""></image>
		</view>
		<view>
			<img :src="src" class="user_img" @click="src_img" />
		</view>
		<view class="reg-info">
			<input type="text" placeholder="用户名" v-model="username"/>
			<input type="text" placeholder="手机号" v-model="number"/>
			 <view>
				<radio-group class="radio-group" @change="radioChange">
					<label class="radio" v-for="(item,index) in items" :key="index">
						<radio :value="item.name" :checked="item.checked" />{{item.value}}
					</label>
				</radio-group>
			</view>
			<input type="text" placeholder="验证码" v-model="verify">
			<button id="btn" class="verify" @click="Verify" :disabled="disabled">{{yzm}}</button>
			<view class="btn_login">
				<image style="height:45px;width:60%;margin:0 auto;display: block;" :src="button_img"></image>
				<span class="user_login" @click="user_login">注册</span>
			</view>
		</view>
	</view>
</template>

<script>
	import store from '../../store/index.js';
	import { mapState,mapMutations } from 'vuex';
	export default {
		data() {
			return {
				src: '/static/qq.png',
				img: '/static/bg.png',
				button_img: '/static/button.png',
				yzm:'验证码',
				//用户名
				username:'',
				//手机号
				number:'',
				//输入的验证码
				verify:'',
				//返回的验证码
				code:'',
				disabled:false,
				count:'60',
				items: [
					{
						name:'男',
						value: '男'
					},
					{
						name:'女',
						value: '女',
						checked: 'true'
					}
				]
			}
		},
		methods:{
			//发送验证码
			Verify() {
				var _self = this;
				var number = this.number;
				//验证是否合法的手机号
				if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(number)) {
					alert("手机号码有误，请重填");
					return false;
				}
				if(_self.username=='' || _self.number==''){
					return false;
				}
				var count = 60;
				store.state.time = setInterval(function(){
					if(count == 0){
						count == 60;
						_self.disabled = false;
						_self.yzm = "验证码";
						clearInterval(store.state.time);
					}else{
						_self.disabled = true;
						_self.yzm = "重新发送("+count+")";
						count--;
					}
					// console.log(_self.yzm);
				},1000);
				uni.request({
					url:`${this.url}home/Userlogin/add?iphone=`+number,
					method:"POST",
					data:{
						code:_self.code
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success(res) {
						console.log(res);
					}
				})
			},
			// 上传头像
			src_img() {
				var _self = this;
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePaths = res.tempFilePaths;
						_self.src = tempFilePaths['0'];
						uni.uploadFile({
							url: 'http://47.100.211.9/API/upLoadImg/UpLoadImg.php',
							filePath: tempFilePaths[0],
							name: 'file',
							success: function(res) {
								var data = res.data;
								var userImg  = "http://47.100.211.9/API/upLoadImg/"+res.data;
								uni.setStorageSync('userImg',userImg);
								console.log(res.data);
							},
							fail: function() {
								console.log('fail');
							}
						})
					}
				})
			},
			//用户登录
			user_login() {
				var _self = this;
// 				
// 				if(_self.username==''|| _self.number==''){
// 					alert('1');
// 					return false;
// 				}
// 				if(_self.code != _self.verify){
// 					alert('2');
// 					return false;
// 				}else{
// 					uni.request({
// 						url:'http://10.2.48.63/social/public/home/User',
// 						data:{
// 							number:this.number,
// 							username:this.username
// 						},
// 						success(res) {
// 							console.log(res);
// 							
// 						}
// 					})
// 				}
				uni.setStorageSync('username', _self.username);
				store.state.username = _self.username;
				uni.switchTab({
					url:"../../pages/tabBar/login/login"
				})
			},
			radioChange: function (e) {
				console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
			}
		},
		store
	}
</script>

<style>
	.bg_img {
		justify-content: center;
	}
	.user_img {
		width: 180upx;
		height: 180upx;
		border-radius: 50%;
		background: #8F8F94;
		position: fixed;
		top: 245upx;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}
	.reg-info {
		position: fixed;
		top: 440upx;
		width: 100%;
	}
	
	input {
		border-bottom: 1px solid gray;
		width: 75%;
		margin: 0 auto;
		margin-top: 50upx;
		font-size: 40upx;
	}
	
	.btn_login {
		position: fixed;
		top: 840upx;
		width: 100%;
		margin: 0 auto;
	}
	.user_login {
		border: none;
		color: black;
		font-size: 30upx;
		background-size: cover;
		display: block;
		text-align: center;
		margin-top: -34px;
		font-size: 35upx;
		color: white;
	}
	.verify{
		width:220upx;
		height:80upx;
		line-height: 80upx;
		position:fixed;
		top:660upx;
		left:440upx;
		font-size: 25upx;
		disabled:true
	}
/* 	.disabled{
		disabled:true
	} */
		
</style>
