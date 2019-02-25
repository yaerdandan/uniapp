<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="content1">
			<image :src="fhImg" class="fhImg" @click="srcImgTo"></image>
			<text class="regText">帖子详情</text>
		</view>
		<view class="topic">
			<!-- 帖子发送人的信息 -->
			<view class="topicContent" v-for="(todo,index) in lists" :key="index">
				<!-- 帖子个人信息 -->
				<view class="topicUser">
					<image :src='todo.userPhotoImg' class="topicUserImg"></image>
					<text class="topicUsername">{{todo.username}}</text>
					<text class="Time">{{todo.add_time}}</text>
					<image :src="topicTimeImg" class="topicTimeImg"></image>
					<!-- <text class="topicTime">{{todo.add_time}}</text> -->
				</view>
				<!-- 帖子内容 -->
				<view class="topicTextbox">
					<text class="topicTitle1">{{todo.title}}</text>
					<text class="topicTextContent">{{todo.content}}</text>
					<view class="topicContentImgBox">
						<view class="topicContentImg" v-for="(todoImg,index1) in todo.src" :key="index1">
							<image :src="todoImg" class="topicContentImg_1" @click="chatImg(todoImg)"></image>
						</view>
					</view>

					<!-- 帖子下面的收藏 顶 踩 功能 -->
					<view class="result">
						<!-- 收藏 -->
						<view class="resultStar">
							<image :src="todo.data_coll == 1 ? resultStarImg1 : resultStarImg" class="resultStarImg" @click="StarImg(todo.tid)"></image>
							<text class="resultStarText" :class="{resultStarText1:todo.data_coll == 1 ? true : false}">{{todo.date_coll_count}}</text>
						</view>
						<view class="resultStar">
							<image :src="resultCommentImg" class="resultStarImg"></image>
							<text class="resultStarComment">{{todo.resultStarComment}}</text>
						</view>
						<view class="resultStar_1">
							<image :src="todo.date_praise_up == 1 ? resultTrampleImg1: resultTrampleImg" class="resultTrampleImg" @click="TrampleImg(todo.tid)"></image>
							<text class="resultTrampText" :class="{resultTrampText1:todo.top == 1 ? true : false}">{{todo.date_count}}</text>
						</view>
					</view>
				</view>
			</view>
			<view style="margin-bottom:130upx;">
				<view class="comment" v-for="(todo,index) in detailTopicPL" :key="index">
					<image :src="todo.userImg" class="commentImg"></image>
					<text class="commentName">{{todo.username}}</text>
					<text class="commentContent">{{todo.content}}</text>
					<text class="commentTime">{{todo.add_time}}</text>
				</view>
			</view>
			<view class="content">
				<text class="text">回复:</text>
				<textarea v-model="text"></textarea>
				<button @click="click" id="click">
					<image :src="btnImg" class="btnImg"></image>
				</button>
			</view>
		</view>

		<!-- 		<button @click="click1">点击录音</button>
		<button @click="click2">点击录音</button> -->
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
				tid: '',
				voicePath: '',
				text: '',
				topicImg: '/static/topicImg.png',
				topicTimeImg: '/static/Time.png',
				resultStarImg: '/static/star.png',
				resultStarImg1: '/static/star1.png',
				resultCommentImg: '/static/topicComment.png',
				resultTrampleImg: '/static/topicTop.png',
				resultTrampleImg1: '/static/topicTop1.png',
				pushTopic: '/static/pushTopic.png',
				btnImg: '/static/btn.png',
				fhImg: '/static/fanhui.png',
				isShow: false,
				isHeight: false,
				isdisabled: true
			}
		},
		onLoad(option) {
			this.tid = option.tid;
			// 			recorderManager.onStop(function(res){
			// 				 console.log('recorder stop' + JSON.stringify(res));
			// 				 self.voicePath = res.tempFilePath;
			// 			})
		},
		onReady() {
			var _self = this;
			var id = uni.getStorageSync('id');
			console.log(store.state.topicList);

			for (var i = 0; i < store.state.topicList.length; i++) {
				if (store.state.topicList[i].tid == _self.tid) {
					console.log(store.state.topicList[i]);
					store.state.detailTopicList.push({
						tid: store.state.topicList[i].tid,
						add_time: store.state.topicList[i].Time,
						content: store.state.topicList[i].content,
						userPhotoImg: store.state.topicList[i].UserImg,
						title: store.state.topicList[i].title,
						src: store.state.topicList[i].src,
						username:store.state.topicList[i].PostTopicUser,
						data_coll:store.state.topicList[i].conll,
						date_coll_count:store.state.topicList[i].con_count,
						date_count:store.state.topicList[i].count,
						date_praise_step:store.state.topicList[i].praise_step,
						date_praise_up:store.state.topicList[i].praise_up
					})
				}
			}
						uni.request({
							url: `http://10.2.48.63/social/public/home/Menus/index`,
							method: "POST",
							data: {
								tid: _self.tid,
								user_id: id
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
							},
							success(res) {
								console.log(res.data);
								var data = res.data.data['0'];
			// 					store.state.detailTopicList.push({
			// 						tid: data.tid,
			// 						add_time: data.add_time,
			// 						content: data.content,
			// 						userPhotoImg: res.data.list['0'].portrait,
			// 						title: data.title,
			// 						src: res.data.src['0'],
			// 						username: res.data.list['0'].user,
			// 						user_id: data.user_id,
			// 						data_coll: res.data.data_coll,
			// 						date_coll_count: res.data.date_coll_count,
			// 						date_count: res.data.date_count,
			// 						date_praise_step: res.data.date_praise_step,
			// 						date_praise_up: res.data.date_praise_up
			// 					})
								console.log(res.data.pl_list.length);
								for(var i=0;i<res.data.pl_list.length;i++){
									store.state.detailTopicPL.push({
										add_time : res.data.pl_list[i].add_time,
										content: res.data.pl_list[i].title,
										username:res.data.pl_list[i].user['0'].user,
										userImg:res.data.pl_list[i].user['0'].portrait
									})
								}
							}
						})
		},
		computed: {
			lists() {
				return store.state.detailTopicList
			},
			detailTopicPL() {
				return store.state.detailTopicPL
			}
		},
		methods: {
			chatImg(src) {
				uni.previewImage({
					urls: Array(src)
				})
			},
			srcImgTo() {
				store.state.detailTopicList = [];
				store.state.detailTopicPL = [];
				uni.switchTab({
					url: 'topic'
				})

			},
			click() {
				var _self = this;
				var id = uni.getStorageSync('id');
				var data = store.state.detailTopicList['0'];
				console.log(data);
				uni.request({
					url: `${this.url}home/Commentcontroller/add`,
					method: "POST",
					data: {
						title: _self.text,
						user_id: data.tid,
						pl_id: id,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success(res) {
						console.log(res.data);
						if(res.data){
							store.state.detailTopicPL.unshift({
								add_time : res.data.data.add_time,
								content: res.data.data.title,
								username:res.data.user_list['0'].user,
								userImg:res.data.user_list['0'].portrait
							})
							_self.text='';
						}
					}
				})
			},
			//收藏
			StarImg(tid) {
				var _self = this;
				var id = uni.getStorageSync('id');
				var qqID = uni.getStorageSync('qq_id');
				if (qqID) {
					uni.request({
						url: `${this.url}home/Colle/up`,
						method: "POST",
						data: {
							tid: tid,
							user_id: qqID
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							console.log(JSON.stringify(res.data));
							if (res.data.con == '1') {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
										console.log(store.state.topicList[i]);
											store.state.topicList[i].conll = '1';
											store.state.topicList[i].con_count = store.state.topicList[i].con_count + Number(1);
										}
									}
								store.state.detailTopicList['0'].data_coll = '1';
								store.state.detailTopicList['0'].date_coll_count = store.state.detailTopicList['0'].date_coll_count + Number(1);
							} else {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
										if(store.state.topicList[i].conll != '0'){
											store.state.topicList[i].conll = '0';
											store.state.topicList[i].con_count = store.state.topicList[i].con_count - Number(1);
										}
								}
									if(store.state.topicList[i].conll != '0'){
										store.state.detailTopicList['0'].data_coll = '0';
										store.state.detailTopicList['0'].date_coll_count = store.state.detailTopicList['0'].date_coll_count - Number(1);
									}
								}
							}
						}
					})
				} else if(id){
					uni.request({
						url: `${this.url}home/Colle/up`,
						method: "POST",
						data: {
							tid: tid,
							user_id: id
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							console.log(res.data);
							console.log();
							if (res.data.con == '1') {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
									
											store.state.topicList[i].conll = '1';
											store.state.topicList[i].con_count = store.state.topicList[i].con_count + Number(1);
										}
									}
								store.state.detailTopicList['0'].data_coll = '1';
								store.state.detailTopicList['0'].date_coll_count = store.state.detailTopicList['0'].date_coll_count + Number(1);
							} else {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
										if(store.state.topicList[i].conll != '0'){
											store.state.topicList[i].conll = '0';
											store.state.topicList[i].con_count = store.state.topicList[i].con_count - Number(1);
										}
									}
								}
								if(store.state.topicList[i].conll != '0'){
									store.state.detailTopicList['0'].data_coll = '0';
									store.state.detailTopicList['0'].date_coll_count = store.state.detailTopicList['0'].date_coll_count - Number(1);
								}
							}
						}
					})
				}

			},
			//顶
			TrampleImg(tid) {
				var _self = this;
				var id = uni.getStorageSync('id');
				var qqID = uni.getStorageSync('qq_id');
				var username = uni.getStorageSync('username');
				if (qqID) {
					uni.request({
						url: `${this.url}home/Praise/up`,
						method: "POST",
						data: {
							tid: tid,
							user_id: qqID
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							console.log(res.data);
							if (res.data.con == '1') {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
										console.log(store.state.topicList[i]);
											store.state.topicList[i].praise_up = '0';
											store.state.topicList[i].count = store.state.topicList[i].count + Number(1);
										}
									}
								store.state.detailTopicList['0'].date_praise_up = '1';
								store.state.detailTopicList['0'].date_count = store.state.detailTopicList['0'].date_count + Number(1);
							} else {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
											store.state.topicList[i].praise_up = '1';
											store.state.topicList[i].count = store.state.topicList[i].count - Number(1);
										}
								}
								store.state.detailTopicList['0'].date_praise_up = '0';
								store.state.detailTopicList['0'].date_count = store.state.detailTopicList['0'].date_count - Number(1);
							}
						}
					})
				} else {
					uni.request({
						url: `${this.url}home/Praise/up`,
						method: "POST",
						data: {
							tid: tid,
							user_id: id
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							if (res.data.con == '1') {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
										console.log(store.state.topicList[i]);
											store.state.topicList[i].praise_up = '1';
											store.state.topicList[i].count = store.state.topicList[i].count + Number(1);
										}
									}
								store.state.detailTopicList['0'].date_praise_up = '1';
								store.state.detailTopicList['0'].date_count = store.state.detailTopicList['0'].date_count + Number(1);
							} else {
								for (var i = 0; i < store.state.topicList.length; i++) {
									if (store.state.topicList[i].tid == tid) {
											store.state.topicList[i].praise_up = '0';
											store.state.topicList[i].count = store.state.topicList[i].count - Number(1);
										}
								}
								store.state.detailTopicList['0'].date_praise_up = '0';
								store.state.detailTopicList['0'].date_count = store.state.detailTopicList['0'].date_count - Number(1);
							}
						}
					})
				} 
// 
			},

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

	.topic {
		display: block;
		margin: 0 auto;
		margin-top: 20upx;
		width: 95%;
	}

	.topicTitle1 {
		position: absolute;
		top: 160upx;
		width: 300upx;
		height: 60upx;
	}

	.topicContent {
		width: 100%;
		border: 1px solid gray;
		margin-top: 20upx;
		margin-bottom: 20upx;
		position: relative;
	}

	.topicUser {
		margin: 0 auto;
		margin-top: 20upx;
		width: 95%;
		height: 100upx;
		position: relative;
	}

	.topicUserImg {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}

	.topicUsername {
		position: relative;
		top: -30upx;
		left: 20upx;
		font-size: 37upx;
	}

	.topicTimeImg {
		width: 28upx;
		height: 28upx;
		position: absolute;
		top: 45upx;
		left: 470upx;
	}

	.Time {
		position: absolute;
		top: 40upx;
		left: 520upx;
		font-size: 30upx;
	}

	.topicTextbox {
		margin: 0 auto;
		width: 95%;
		margin-top: 80upx;
	}

	.topicTextContent {
		font-size: 30upx;
	}

	.topicContentImgBox {}

	.topicContentImg {
		display: inline-block;
	}

	.topicContentImg_1 {
		margin-top: 20upx;
		width: 200upx;
		height: 300upx;
		margin-left: 20upx;
	}

	.result {
		margin: 0 auto;
		margin-top: 20upx;
		width: 95%;
		height: 80upx;
		display: flex;
		justify-content: space-between;
	}

	.resultStar {
		width: 160upx;
		height: 80upx;
	}

	.resultStar_1 {
		width: 240upx;
		height: 80upx;
		position: relative;
	}

	.resultStarImg {
		margin-top: 10upx;
		width: 60upx;
		height: 60upx;
	}

	.resultStarText,
	.resultStarComment {
		position: relative;
		left: 30upx;
		top: -15upx;
		font-size: 30upx;
		color: gray;
	}

	.resultStarText1 {
		color: rgb(17, 212, 254);
	}

	.resultTrampText {
		text-align: center;
		display: block;
		margin-top: -55upx;
		font-size: 30upx;
		color: gray;
	}

	.resultTrampleImg,
	.resultTopImg {
		width: 60upx;
		height: 60upx;
		margin-top: 10upx;
	}

	.resultTopImg {
		position: absolute;
		top: 0px;
		right: 0;
	}

	.fhImg {
		width: 30upx;
		height: 60upx;
		position: absolute;
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
		height: 70upx;
		margin: 12upx 0 0 115upx;
		border-radius: 15upx;
		font-size: 40upx;
		paddding-left: 20upx;
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

	.comment {
		border: 1px solid;
		height: 180upx;
		border-radius: 20upx;
		position: relative;
		margin-top: 20upx;
	}

	.commentImg {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		position: absolute;
		top: 10upx;
		left: 20upx;
	}

	.commentName {
		position: absolute;
		top: 10upx;
		left: 160upx;
	}

	.commentTime {
		position: absolute;
		top: 10upx;
		left: 460upx;
		font-size: 30upx;
		color: gray
	}

	.commentContent {
		width:500upx;
		position: absolute;
		top: 65upx;
		left: 160upx;
		font-size: 35upx;
		word-break:break-all;
		overflow:auto; 
	}
</style>
