<template>
	<view class="index">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="content">
			<image :src="fhImg" class="fhImg" @click="srcImgTo"></image>
			<text class="regText">注册</text>
		</view>
		<view class="phone">
			<text class="number">+86</text>
			<input type="text" class="phoneText" placeholder="请输入手机号" v-model="phone">
		</view>
		<view class="phone verify">
			<input type="text" class="phoneVerify" placeholder="请输入验证码" v-model="verify">
			<button class="btn" @click="Verify" :disabled="disabled">{{yzm}}</button>
		</view>
		<view class="password">
			<text class="nicknameText">设置密码</text>
			<input type="text" placeholder="请输入6-20位密码" class="pwd" v-model="pwd" @focus="PwdFocus">
			<input type="text" placeholder="确认密码" class="conPwd" v-model="conPwd" @focus="conPwdFocus">
		</view>
		<view>
			<button class="btnReg" :disabled="isDisabled" :class="{btnReg1:!isDisabled}" @click="btnReg">注册</button>
		</view>
	</view>
</template>

<script>
	import store from '../../store/index.js'
	export default {
		data() {
			return {
				fhImg: '/static/fanhui.png',
				//手机号
				phone: '',
				//密码
				pwd: '',
				//确认密码
				conPwd: '',
				//输入的验证码
				verify: '',
				code: '',
				yzm: '验证码',
				disabled: false,
				isDisabled: true
			};
		},
		methods: {
			srcImgTo() {
				uni.navigateTo({
					url:'/components/login/log'
				})
			},
			Verify() {
				var _self = this;
				var phone = _self.phone;
				//验证是否合法的手机号
				if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)) {
					alert("手机号码有误，请重填");
					return false;
				}
				if (_self.phone == '') {
					return false;
				}
				var count = 60;
				store.state.time = setInterval(function() {
					if (count == 0) {
						count == 60;
						_self.disabled = false;
						_self.yzm = "验证码";
						clearInterval(store.state.time);
					} else {
						_self.disabled = true;
						_self.yzm = "重新发送(" + count + ")";
						count--;
					}
					// console.log(_self.yzm);
				}, 1000);
				uni.request({
					url: "http://47.100.211.9:80/API/duanxin_API/industrySMS.php?iphone=" + phone,
					success(res) {
						_self.code = res.data.note;
						console.log(_self.code);
					}
				})
			},

			btnReg() {
				console.log(1);
				var _self = this;
				if (_self.code != _self.verify) {
					console.log('验证码输入错误');
					return false;
				}
				if (_self.pwd != _self.conPwd) {
					console.log('密码不一致');
					return false;
				}
				uni.request({
					url: 'http://10.2.48.63/social/public/home/Userlogin/add',
					method: "POST",
					data: {
						iphone: _self.phone,
						user: _self.username,
						paw: _self.pwd,
						confirm: _self.conPwd
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success: (res) => {
						if (res.data.con == 0) {
							uni.navigateTo({
								url: '/components/login/log'
							})
						};
					}
				})
			},
			PwdFocus() {
				var _self = this;
				if (_self.iphone == '' || _self.verify == '' || _self.conPwd == '') {
					_self.isDisabled = true;
				} else {
					_self.isDisabled = false;
				}
			},
			conPwdFocus() {
				var _self = this;
				if (_self.iphone == '' || _self.verify == '' || _self.pwd == '') {
					_self.isDisabled = true;
				} else {
					_self.isDisabled = false;
				}
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

	/* 	.index{
		background:rgb(255, 251, 255);
		height:1200upx;
	} */
	.fhImg {
		width: 30upx;
		height: 60upx;
		position: fixed;
		left: 30upx;
	}

	.regText {
		text-align: center;
		display: block;
		margin: 0 auto;
		margin-top: 30upx;
		line-height: 60upx;
	}

	.phone {
		width: 80%;
		height: 80upx;
		margin: 0 auto;
		margin-top: 40upx;
		border-bottom: 2px solid lightgray;
	}

	.phoneText {
		position: fixed;
		left: 180upx;
		top: 190upx;
		width: 400upx;
		display: inline-block;
	}

	.btn {
		width: 220upx;
		height: 80upx;
		line-height: 80upx;
		position: fixed;
		top: 300upx;
		left: 450upx;
		font-size: 25upx;
		disabled: true
	}

	/* 确认密码框 */
	.password {
		width: 80%;
		margin: 0 auto;
		margin-top: 80upx;
		border-bottom: 2px solid lightgray;
	}

	.pwd {
		margin-top: 40upx;
		padding-bottom: 20upx;
	}

	.conPwd {
		position: fixed;
		top: 690upx;
		width: 80%;
		padding-bottom: 20upx;
		border-bottom: 2px solid lightgray;
	}

	.btnReg {
		width: 70%;
		position: fixed;
		top: 850upx;
		left: 120upx;
		border-radius: 30upx;
	}

	.btnReg1 {
		background: #149EFF;
		color: #ffffff;
	}
</style>
