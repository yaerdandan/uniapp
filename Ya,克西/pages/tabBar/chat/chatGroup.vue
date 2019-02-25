<template>
	<view class="box">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="Top">
			<image :src="fanhuiImg" class="fanhuiImg" @click="fanhuiClick"></image>
			<text class="TitleText">{{groupName}}</text>
			<text class="add" @click="add(group)" v-show="isAdd">添加</text>
			<text class="add1" @click="add1(group)" v-show="!isAdd">取消</text>
		</view>
		<scroll-view scroll-x class="owner" :scroll-with-animation="true">
			<view class="ownerInfo" v-for="(todo,index) in owner" :key="index">
				<image :src="todo.ownerImg" class="ownerImg"></image>
				<text class='ownerText'>{{todo.name}}</text>
			</view>
		</scroll-view>
		<scroll-view scroll-y :class="isHeight == false ? 'height' : 'Height'" :scroll-with-animation="true" :scroll-top="scrollTop">
			<div id="ul">
				<div v-for="(todo,index) in todos" :key="index">
					<div :class="todo.ismine == true ? 'mine' : 'other'">
						<image :src="todo.ismine == true ? todo.src : todo.srcc" class="userImg"></image>
						<div class='Meg'>
							<span class="Message">
								<span v-show="todo.chatImg == '' ? !isShow : isShow">{{todo.content}}</span>
								<img v-show="todo.chatImg != '' ? !isShow : isShow" :src="todo.chatImg" class="chatImg" @click="chatImg(todo.chatImg)" />
							</span>
						</div>
					</div>
				</div>
				<div class='clear'></div>
			</div>
		</scroll-view>
		<view class="content">
			<text class="text">回复:</text>
			<textarea v-model="text" @keyup.enter="onSubmit"></textarea>
			<image :src="photo" class="photo" @click="Photo"></image>
			<button @click="click" id="click">
				<image :src="btnImg" class="btnImg"></image>
			</button>
		</view>
	</view>
</template>

<script>
	var user = {};
	export default {
		data() {
			return {
				//群聊组
				group: '',
				//自己的名字
				username: '',
				//发送给的名字
				toname: '',
				text: '',
				//信息列表
				todos: [],
				scrollTop: '',
				photo: '/static/picture.png',
				btnImg: '/static/btn.png',
				isShow: false,
				isHeight: false,
				owner: [],
				fanhuiImg: '/static/fanhui.png',
				groupName:'',
				isAdd:true
				
			}
		},
		onShow() {
			var _self = this;
			uni.getSystemInfo({
				success: function(res) {
					var width = res.windowWidth;
					var height = res.windowHeight;
					if (width < 400) {
						_self.isHeight = true;
					}
				}
			});
		},
		//url传输的参数
		onLoad(option) {
			this.group = option.group;
			this.username = option.username;
			this.toname = option.toname;
			this.groupName = option.groupName
		},
		onReady() {
			var _self = this;
			var id = uni.getStorageSync('id');
			console.log(id);
			var socketOpen = false;
			uni.request({
				url:`${this.url}home/Homechat/all_select`,
				method:"POST",
				data:{
					home_id:_self.group,
					user_id:id
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success:(res)=>{
					console.log(res);
					if(res.data.con == '1'){
						_self.isAdd = false;
					}
				}
			})
			// 47.100.211.9
			uni.connectSocket({
				url: 'ws://10.2.48.2:8003'
			});

			uni.onSocketOpen(function(res) {
				socketOpen = true;
				console.log('WebSocket连接已打开！');
				user.name = _self.username;
				user.group = _self.group;
				if (_self.group == undefined) {
					user.lineType = 1; //单聊
				} else {
					user.lineType = 0; //群聊
				}
				user.type = "enter";
				user.toname = _self.toname;
				var userHeaderPhoto = uni.getStorageSync('userHeaderPhoto');
				userHeaderPhoto = userHeaderPhoto.replace("\\", "\/");
				user.Img = userHeaderPhoto;
				uni.sendSocketMessage({
					data: JSON.stringify(user)
				});
			});
			uni.onSocketMessage(function(res) {
				var mes = JSON.parse(res.data);

				if (mes['0']) {
					if (mes['0'].groupnumber == _self.group) {
						_self.owner = mes;
					}
				} else {
					showMessage(mes);
				}
			});

			function showMessage(mes) {

				// 如果接受到的消息中群聊的id不是空的，并且这个群聊和当前我所在的群是一致的，那么我们就是在一个群里
				if (mes.groupnumber != undefined && mes.groupnumber == _self.group) {
					if (user.name == mes.name) {
						if (mes.data == undefined) {
							return;
						}
						createDiv(mes, true);
					} else {
						// 是好友发送的消息
						createDiv(mes, false);
					}
				} else {
					// 如果不是群聊的是时候
					if (user.name == mes.name) {
						// 自己发送的消息
						if (mes.data == undefined) {
							return;
						}
						createDiv(mes, true);
					} else {
						// 好有发送的消息，这里的判断是要判断要发送的是人是不是给我的
						if (mes.toname == user.name) {
							createDiv(mes, false);
						}
					}
				}
			}

			function createDiv(msg, ismine) {
				if (ismine == true) {
					_self.todos.push({
						ismine: true,
						content: msg.data,
						src: msg.Img,
						chatImg: msg.chatImg,
						name: msg.name
					})
				} else {
					_self.todos.push({
						ismine: false,
						content: msg.data,
						srcc: msg.Img,
						chatImg: msg.chatImg,
						name: msg.name
					})
				}
			}
		},
		//监听屏幕的高度
		watch: {
			todos() {
				var _self = this;
				this.$nextTick(() => {
					const query = wx.createSelectorQuery()
					query.select('#ul').boundingClientRect()
					query.selectViewport().scrollOffset()
					query.exec(function(res) {
						// 					  res[0].top       // #the-id节点的上边界坐标
						// 					  res[1].scrollTop // 显示区域的竖直滚动位置
						// 					  console.log('打印demo的元素的信息', res);
						// 					  console.log('打印高度', res[0].height);
						_self.scrollTop = res[0].height;
						// console.log(_self.scrollTop);
					})
				});
			},
		},
		methods: {
			click() {
				var _self = this;
				user.type = "message";
				user.data = this.text;
				user.chatImg = '';
				uni.sendSocketMessage({
					data: JSON.stringify(user)
				});
				this.text = '';
			},
			onSubmit() {
				user.type = "message";
				user.data = this.text;
				user.chatImg = '';
				uni.sendSocketMessage({
					data: JSON.stringify(user)
				});
				this.text = '';
			},
			Photo() {
				var _self = this;
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: 'http://47.100.211.9/API/upLoadImg/UpLoadImg.php',
							filePath: tempFilePaths[0],
							name: 'file',
							success: function(res) {
								var data = res.data;
								var chatImg = "http://47.100.211.9/API/upLoadImg/" + res.data;
								user.chatImg = chatImg;
								user.data = '1';
								user.type = "message";
								uni.sendSocketMessage({
									data: JSON.stringify(user)
								});
							},
							fail: function() {
								console.log('fail');
							}
						})
					}
				})
			},
			chatImg(src) {
				uni.previewImage({
					urls: Array(src)
				})
			},
			//返回退出websocket链接
			fanhuiClick() {
				uni.closeSocket({
					url: 'http://10.2.48.2:8003'
				});
				uni.switchTab({
					url: 'chat'
				})
			},
			//添加群聊
			add(data) {
				var _self = this;
				var id = uni.getStorageSync('id');
				uni.showModal({
					title: '提示',
					content: '是否添加到你的聊天页面',
					success:(res)=>{
						if (res.confirm) {
							uni.request({
								url:`${this.url}home/Homechat/add`,
								method:"POST",
								data:{
									home_id:data,
									user_id:id
								},
								header: {
									'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
								},
								success(res) {
									_self.isAdd = false;
								},
								fail:(res)=>{
									console.log(1)
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//取消群聊
			add1(data){
				var _self = this;
				var id = uni.getStorageSync('id');
				uni.showModal({
					title: '提示',
					content: '是否取消关注这个群聊',
					success:(res)=>{
						if (res.confirm) {
							uni.request({
								url:`${this.url}home/Homechat/delete`,
								method:"POST",
								data:{
									home_id:data,
									user_id:id
								},
								header: {
									'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
								},
								success(res) {
									if(res.data.con == '1'){
										_self.isAdd = true;
									};
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},

	}
</script>

<style scoped>
	@import "./chat.css";

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

	.Top {
		width: 100%;
		height: 100upx;
		display: block;
		background: #FFD700;
	}

	.Top image {
		width: 40upx;
		height: 60upx;
		position: fixed;
		top: 80upx;
		left: 40upx;
	}

	.TitleText {
		position: fixed;
		top: 80upx;
		left: 290upx;
	}
	.add {
		width:120upx;
		height:60upx;
		text-align: center;
		border: 1px solid;
		position: fixed;
		top: 80upx;
		left: 600upx;
	}
	.add1{
		width:120upx;
		height:60upx;
		text-align: center;
		border: 1px solid;
		position: fixed;
		top: 80upx;
		left: 600upx;
		color:blue;
	}
	.height {
		height: 965upx;
	}

	.Height {
		height: 1080upx;
	}

	.content {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100upx;
		border-top: 1px solid lightgray;
		background: #FFFFFF;
	}

	.text {
		position: fixed;
		bottom: 30upx;
		left: 30upx;
		font-size: 35upx;
		color: gray;
	}

	textarea {
		display: inline-block;
		border: 1px solid lightgray;
		width: 410upx;
		height: 60upx;
		margin: 18upx 0 0 115upx;
		border-radius: 15upx;
		font-size: 40upx;
	}

	.photo {
		position: fixed;
		bottom: 24upx;
		left: 550upx;
		width: 60upx;
		height: 60upx;
		background: #F5F5F5;
	}

	.btnImg {
		position: fixed;
		bottom: 13upx;
		right: 14upx;
		width: 120upx;
		height: 80upx;
	}

	ul {
		list-style-type: none;
	}

	.box {
		position: fixed;
		width: 100%;
	}
</style>
