<template>
	<view class="index">
	    <view class="status_bar">
	        <view class="top_view"></view>
	    </view>
		<view>
			<image :src="topicImg" class="topicImg"></image>
		</view>
		<view class="function">
			<view class="function1">
				<image src="../../../static/campusActivity.png" mode="" class="campusActivity"></image>
				<text>校内活动</text>
			</view>
			<view class="function2">
				<image src="../../../static/AlumniCircle.png" mode="" class="AlumniCircle"></image>
				<text>校友圈</text>
			</view>
		</view>
		<!-- 推荐帖子 -->
		<view class="topic">
			<!-- 热门推荐 -->
			<view class="topicTitle">
				<text class="topicText">·热门推荐·</text>
			</view>
			<!-- 帖子发送人的信息 -->
			<view class="topicContent" v-for="(todo,index) in topicList" :key="index">
				<!-- 帖子个人信息 -->
				<view class="topicUser" @click="topicContent(todo.tid)">
					<image :src='todo.UserImg' class="topicUserImg"></image>
					<text class="topicUsername">{{todo.PostTopicUser}}</text>
					<image :src="topicTimeImg" class="topicTimeImg"></image>
					<text class="topicTime">{{todo.Time}}</text>
				</view>
				<!-- 帖子内容 -->
				<view class="topicTextbox">
					<text>{{todo.title}}</text>
					<text class="topicTextContent">{{todo.content}}</text>
					<view class="topicContentImgBox">
						<view class="topicContentImg" v-for="(todoImg,index1) in todo.src" :key="index1">
							<image :src="todoImg" class="topicContentImg_1"></image>
						</view>
					</view>
					
					<!-- 帖子下面的收藏 顶 踩 功能 -->
					<view class="result">
						<!-- 收藏 -->
						<view class="resultStar">
							<image :src="todo.conll == 1 ? resultStarImg1 : resultStarImg" class="resultStarImg" @click="StarImg(todo.tid)"></image>
							<text class="resultStarText" :class="{resultStarText1:todo.conn == 1 ? true : false}">{{todo.con_count}}</text>
						</view>
						<view class="resultStar">
							<image :src="resultCommentImg" class="resultStarImg"></image>
							<text class="resultStarComment">{{todo.resultStarComment}}</text>
						</view>
						<view class="resultStar_1">
							<image :src="todo.praise_up == 1 ? resultTrampleImg1: resultTrampleImg" class="resultTrampleImg" @click="TrampleImg(todo.tid,index)"></image>
							<text class="resultTrampText" :class="{resultTrampText1:todo.top == 1 ? true : false}">{{todo.count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<image :src="pushTopic" @click="postMessage" class="postMessage" :class="isHeight == false ? 'height' : 'Height'" v-show="isShow">发帖</image>
		</view>
	</view>
</template>

<script>
	import store from '../../../store/index.js'
	export default {
		data() {
			return {
				topicImg:'/static/topicImg.png',
				topicTimeImg:'/static/Time.png',
				resultStarImg:'/static/star.png',
				resultStarImg1:'/static/star1.png',
				resultCommentImg:'/static/topicComment.png',
				resultTrampleImg:'/static/topicTop.png',
				resultTrampleImg1:'/static/topicTop1.png',
				resultTopImg:'/static/topicTrample.png',
				resultTopImg1:'/static/topicTrample1.png',
				pushTopic:'/static/pushTopic.png',
				isShow:false,
				isHeight:false,
				isdisabled:true
			};
		},
		onReady() {
			var id = uni.getStorageSync('id');
			var qqID = uni.getStorageSync('qq_id');
			var _self = this;
			uni.request({
				url:`${this.url}home/Post/index`,
				method:"POST",
				data:{
					id:id
				},
				header:{
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success(res) {
					console.log(res.data);
					var data = res.data.data;
					// console.log(JSON.stringify(data));
					if(store.state.topicList){
						for(var i=0;i<data.length;i++){
							store.state.topicList.push({
								UserImg:data[i].user['0']['0'].portrait,
								PostTopicUser:data[i].user['0']['0'].user,
								Time:data[i].add_time,
								//赞
								Top:data[i].praise,
								//收藏
								collection:data[i].collection,
								src:data[i].src['0'],
								title:data[i].title,
								content:data[i].content,
								tid:data[i].tid,
								praise_up:data[i].praise_up,
								praise_step:data[i].praise_step,
								count:data[i].count,
								con_count:data[i].con_count,
								conll:data[i].conll
							})
						}
					}
					console.log(store.state.topicList);
				}
			})
		},
		onPageScroll(res){
			if(res.scrollTop>200){
				this.isShow = true;
			}else{
				this.isShow = false;
			}
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				var id = uni.getStorageSync('id');
				var qqID = uni.getStorageSync('qq_id');
				var _self = this;
				uni.request({
					url:`http://10.2.48.63/social/public/index.php/home/Post/index`,
					method:"POST",
					data:{
						id:id
					},
					header:{
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success:(res)=>{
						console.log(res.data);
						var data = res.data.data;
						// console.log(JSON.stringify(data));
						if(store.state.topicList){
							for(var i=0;i<data.length;i++){
								store.state.topicList.push({
									UserImg:data[i].user['0']['0'].portrait,
									PostTopicUser:data[i].user['0']['0'].user,
									Time:data[i].add_time,
									//赞
									Top:data[i].praise,
									//收藏
									collection:data[i].collection,
									src:data[i].src['0'],
									title:data[i].title,
									content:data[i].content,
									tid:data[i].tid,
									praise_up:data[i].praise_up,
									praise_step:data[i].praise_step,
									count:data[i].count,
									con_count:data[i].con_count,
									conll:data[i].conll
								})
							}
						this.$store.commit('getList',res.data)
						}
					}
				})
				uni.stopPullDownRefresh();
			}, 1000);
		},
		computed: {
			topicList() {
				return store.state.topicList
			}
		},
		methods:{
			//收藏
			StarImg(tid){
				var _self = this;
				var id = uni.getStorageSync('id');
				var qqID = uni.getStorageSync('qq_id');
				if(qqID){
					uni.request({
						url:`${this.url}home/Colle/up`,
						method:"POST",
						data:{
							tid:tid,
							user_id:qqID
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							if(res.data.con == '1'){
								console.log(res.data);
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										store.state.topicList[i].conll = '1';
										store.state.topicList[i].con_count = store.state.topicList[i].con_count+Number(1);
									}
								}
							}else{
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										if(store.state.topicList[i].conll != '0'){
											store.state.topicList[i].conll = '0';
											store.state.topicList[i].con_count = store.state.topicList[i].con_count-Number(1);
										}
									}
								}
							}
						}
					})
				}else{
					uni.request({
						url:`${this.url}home/Colle/up`,
						method:"POST",
						data:{
							tid:tid,
							user_id:id
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							if(res.data.con == '1'){
								console.log(res.data);
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										store.state.topicList[i].conll = '1';
										store.state.topicList[i].con_count = store.state.topicList[i].con_count+Number(1);
									}
								}
							}else{
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										if(store.state.topicList[i].conll != '0'){
											store.state.topicList[i].conll = '0';
											store.state.topicList[i].con_count = store.state.topicList[i].con_count-Number(1);
										}
									}
								}
							}
							
						}
					})
				}
				
			},
			//顶
			TrampleImg(tid,index){
				var _self = this;
				var id = uni.getStorageSync('id');
				var qqID = uni.getStorageSync('qq_id');
				if(qqID){
					uni.request({
						url:`${this.url}home/Praise/up`,
						method:"POST",
						data:{
							tid:tid,
							user_id:qqID
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							if(res.data.con == '1'){
								console.log(res.data);
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										store.state.topicList[i].praise_up = '1';
										store.state.topicList[i].count = store.state.topicList[i].count+Number(1);
									}
								}
							}else{
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										if(store.state.topicList[i].praise_up != '0'){
											store.state.topicList[i].praise_up = '0';
											store.state.topicList[i].count = store.state.topicList[i].count-Number(1);
										}
									}
								}
							}
						}
					})
				}else{
					uni.request({
						url:`${this.url}home/Praise/up`,
						method:"POST",
						data:{
							tid:tid,
							user_id:id
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success(res) {
							if(res.data.con == '1'){
								console.log(res.data);
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										store.state.topicList[i].praise_up = '1';
										store.state.topicList[i].count = store.state.topicList[i].count+Number(1);
									}
								}
							}else{
								for(var i=0;i<store.state.topicList.length;i++){
									if(store.state.topicList[i].tid == tid){
										if(store.state.topicList[i].praise_up != '0'){
											store.state.topicList[i].praise_up = '0';
											store.state.topicList[i].count = store.state.topicList[i].count-Number(1);
										}
									}
								}
							}
						}
					})
				}
			},
			postMessage(){
				uni.navigateTo({
					url:'postMessage'
				})
			},
			topicContent(tid){
				uni.navigateTo({
					url:'detailTopic?tid='+tid
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
	.topicImg{
		width:100%;
		height:350upx;
	}
	.function{
		display: block;
		margin:0 auto;
		width:60%;
		height:200upx;
		display: flex;
		justify-content:space-between;
	}
	.campusActivity{
		margin-top:20upx;
		width:100upx;
		height:100upx;
		display: block;
	}
	.AlumniCircle{
		margin-top:20upx;
		width:100upx;
		height:100upx;
		display: block;
	}
	.topic{
		display: block;
		margin:0 auto;
		margin-top:20upx;
		width:95%;
	}
	.topicTitle{
		margin:0 auto;
		width:150upx;
		height:50upx;
		border:1px solid #47BBC8;
		border-radius: 30upx;
		padding:5upx;
	}
	.topicText{
		position: relative;
		top:-8upx;
		left:2upx;
		text-align: center;
		background:#47BBC8;
		padding:5upx;
		font-size: 28upx;
		color:white;
		border-radius: 30upx;
	}
	.topicContent{
		width:100%;
		border:1px solid gray;
		margin-top:20upx;
		margin-bottom:20upx;
		position: relative;
	}
	.topicUser{
		margin:0 auto;
		margin-top:20upx;
		width:95%;
		height:100upx;
		position: relative;
	}
	.topicUserImg{
		width:100upx;
		height:100upx;
		border-radius: 50%;
	}
	.topicUsername{
		position: relative;
		top:-30upx;
		left:20upx;
		font-size: 37upx;
	}
	.topicTimeImg{
		width:28upx;
		height:28upx;
		position: absolute;
		top:45upx;
		left:470upx;
	}
	.topicTime{
		position: absolute;
		left:520upx;
		top:40upx;
		font-size: 30upx;
	}

	.topicTextbox{
		margin:0 auto;
		width:95%;
		margin-top:20upx;
	}
	
	.topicTextContent{
		font-size: 30upx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.topicContentImgBox{
		height:300upx;
		overflow: hidden;
	}
	.topicContentImg{
		display: inline-block;
	}
	.topicContentImg_1{
		margin-top:20upx;
		width:200upx;
		height:300upx;
		margin-left:20upx;
	}
	.result{
		margin:0 auto;
		margin-top:20upx;
		width:95%;
		height:80upx;
		display: flex;
		justify-content: space-between;
	}
	.resultStar{
		width:230upx;
		height:80upx;
	}
	.resultStar_1{
		width:230upx;
		height:80upx;
		position: relative;
	}
	.resultStarImg{
		margin-top:10upx;
		width:60upx;
		height:60upx;
	}
	.resultStarText,.resultStarComment{
		position:relative;
		left:50upx;
		top:-15upx;
		font-size: 30upx;
		color:gray;
	}
	.resultStarText1{
		color:rgb(17,212,254);
	}
	.resultTrampText{
		text-align: center;
		display: block;
		position:relative;
		left:20upx;
		margin-top:-55upx;
		font-size: 30upx;
		color:gray;
	}
	.resultTrampleImg,.resultTopImg{
		width:60upx;
		height:60upx;
		margin-top:10upx;
	}
	.resultTopImg{
		position:absolute;
		top:0px;
		right:0;
	}
	.postMessage{
		width:100upx;
		height:100upx;
	}
	.height{
		position:fixed;
		bottom: 120upx;
		right:30upx;
	}
	.Height{
		position:fixed;
		bottom: 120upx;
		right:30upx;
	}
	.function1{
		width:200upx;
		height:100px;
	}
	.function1>image{
		position: relative;
		left:30upx;
	}
	.function1 span{
		
	}
</style>
