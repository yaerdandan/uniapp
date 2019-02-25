<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="navigation">
			<view class="navigationCancel" @click="navigationCancel">取消</view>
			<text class="navigationTopic">发帖子</text>
			<button class="navigationBtn" @click="push">发表</button>
		</view>
		<view class="invitation">
			<input type="text" placeholder="记得加个标题" class="invitationTitle" v-model="title">
			<textarea value="" placeholder="分享一下你身边的新鲜事吧..." class="invitationContent" v-model='content'/>
		</view>
		<view>
			<view v-for="(todo,index) in todoSrc" :key="index">
				<img :src="todo.src" class="showPicture" @click="showPic(todo.src)" />
			</view>
			<image :src="src" class="chooseImg" @click="choseImg"></image>
		</view>
		<text v-show="isShow">请添加图片</text>
	</view>
</template>

<script>
	import store from '../../../store/index.js'
	export default {
		data() {
			return {
				src:'/static/creame.png',
				todoSrc:[],
				pics:[],
				//标题
				title:'',
				//内容
				content:'',
				Img:[],
				isShow:false
			};
		},
		methods:{
			choseImg(){
				var _self = this;
				var id = uni.getStorageSync('id');
				console.log(_self.title);
				console.log(_self.content);
				uni.chooseImage({
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success:(res)=>{
						// console.log(JSON.stringify(res.tempFilePaths));
						const tempFilePaths = res.tempFilePaths;
						for(var i=0;i<tempFilePaths.length;i++){
							_self.todoSrc.push({
								src:tempFilePaths[i]
							})
						}
					}
				})
			},
			showPic(src){
				 uni.previewImage({
					urls: Array(src)
				});
			},
			navigationCancel(){
				uni.switchTab({
					url:'topic'
				})
			},
			//发表
			push(){
				var _self = this;
				var id = uni.getStorageSync('id');
				var qqID = uni.getStorageSync('qq_id');
				if(_self.todoSrc == ''){
					_self.isShow = true;
				}else{
					_self.isShow = false;
				}
				console.log(qqID);
				if(qqID){
					for(var i=0;i<_self.todoSrc.length;i++){
						console.log(_self.todoSrc[i].src);
						uni.uploadFile({
							url: `${this.url}home/Post/qq_add`,
							filePath: _self.todoSrc[i].src,
							name: 'file',
							formData:{
								qqID:qqID,
								title:_self.title,
								content:_self.content,
							},
							success: function(res) {
								uni.switchTab({
									url:'topic'
								})
							},
							fail: function() {
								console.log('file');
							}
						})
					}
				}else{
					for(var i=0;i<_self.todoSrc.length;i++){
						console.log(_self.todoSrc[i].src);
						uni.uploadFile({
							url: `${this.url}home/Post/add`,
							filePath: _self.todoSrc[i].src,
							name: 'file',
							formData:{
								id:id,
								title:_self.title,
								content:_self.content,
							},
							success: function(res) {
								uni.switchTab({
									url:'topic'
								})
							},
							fail: function() {
								console.log('file');
							}
						})
					}
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
	.navigation{
		width:100%;
		height:80upx;
		margin-top:20upx;
		border-bottom: 1px solid lightgray;
	}
	.navigationCancel{
		position: fixed;
		left:20upx;
		font-size: 37upx;
	}
	.navigationTopic{
		text-align: center;
		display: block;
		margin: 0 auto;
	}
	.navigationBtn{
		position: fixed;
		top:70upx;
		left:620upx;
		font-size:26upx;
		background: #007AFF;
		color:white;
	}
	.invitation{
		width:95%;
		margin:0 auto;
	}
	.invitationTitle{
		height:60upx;
		font-weight:600;
	}
	.invitationContent{
		width:95%;
		margin-top:20upx;
	}
	.chooseImg{
		width:200upx;
		height:200upx;
		position: relative;
		left:20upx;
		top:20upx;
	}
	.showPicture{
		width:200upx;
		height:200upx;
		float: left;
		margin-left:20upx;
		margin-top:20upx;
	}
	.showPicture div{
	}
</style>
