<template>
	<view>

		<view class="topic">
			<!-- 帖子发送人的信息 -->
			<view class="topicContent" v-for="(todo,index) in topicLists" :key="index">
				<!-- 帖子个人信息 -->
				<view class="topicUser">
					<image :src="todo.user['0']['0'].portrait" class="topicUserImg"></image>
					<text class="topicUsername">{{todo.user['0']['0'].user}}</text>
					<text class="Time">{{todo.add_time}}</text>
					<image :src="topicTimeImg" class="topicTimeImg"></image>
					<!-- <text class="topicTime">{{todo.add_time}}</text> -->
				</view>
				<!-- 帖子内容 -->
				<view class="topicTextbox">
					<text class="topicTitle1">{{todo.title}}</text>
					<text class="topicTextContent">{{todo.content}}</text>
					<view class="topicContentImgBox">
						<view class="topicContentImg" v-for="(todoImg,index1) in todo.src['0']" :key="index1">
							<image :src="todoImg" class="topicContentImg_1" @click="chatImg(todoImg)"></image>
						</view>
					</view>

					<!-- 帖子下面的收藏 顶 踩 功能 -->
					<view class="result">
						<!-- 收藏 -->
						<view class="resultStar">
							<image :src="todo.conll == 1 ? resultStarImg1 : resultStarImg" class="resultStarImg" @click="StarImg(todo.tid)"></image>
							<text class="resultStarText" :class="{resultStarText1:todo.conll == 1 ? true : false}">{{todo.con_count}}</text>
						</view>
						<view class="resultStar">
							<image :src="resultCommentImg" class="resultStarImg"></image>
							<text class="resultStarComment">{{todo.resultStarComment}}</text>
						</view>
						<view class="resultStar_1">
							<image :src="todo.praise_up == 1 ? resultTrampleImg1: resultTrampleImg" class="resultTrampleImg" @click="TrampleImg(todo.tid)"></image>
							<text class="resultTrampText" :class="{resultTrampText1:todo.praise_up == 1 ? true : false}">{{todo.count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				topicLists:[],
				topicImg: '/static/topicImg.png',
				topicTimeImg: '/static/Time.png',
				resultStarImg: '/static/star.png',
				resultStarImg1: '/static/star1.png',
				resultCommentImg: '/static/topicComment.png',
				resultTrampleImg: '/static/topicTop.png',
				resultTrampleImg1: '/static/topicTop1.png',
			};
		},
		onShow(){
			var _self = this;
			var id = uni.getStorageSync('id');
			uni.request({
				url:`${this.url}home/Post/user_post`,
				method:"POST",
				data:{
					id:id
				},
				success(res) {
					_self.topicLists = res.data.data;
					console.log(_self.topicLists)
				}
				
			})
		}
	}
</script>

<style>
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

</style>
