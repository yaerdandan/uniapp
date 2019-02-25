<template>
	<view>
		<view class="img-cont">
			<image style="width:100%;" src="../../static/1.png" mode="widthFix"></image>
		</view>
		<view class="cont-1">
			<image style="width:60upx;" src="../../static/jianzhi1.png" mode="widthFix"></image>
			<text style="margin-left:30upx;">90/天</text>
			<text style="position:absolute;bottom:5upx;right:50upx;font-size:24upx;color:#868586;">浏览量：4396</text>
		</view>
		<view class="cont-2">
			<view style="display: flex;justify-content: space-around;">
				<view style="display: flex;justify-content: space-around;align-items: center;">
					<image style="width:40upx;position:relative;top:5upx;margin-right:15upx;" src="../../static/jianzhi2.png" mode="widthFix"></image>
					<text >校内兼职</text>
				</view>
				<view style="display: flex;justify-content: space-around;align-items: center;">
					<image style="width:40upx;position:relative;top:5upx;left:-45upx;margin-right:0upx;" src="../../static/jianzhi4.png" mode="widthFix"></image>
					<text style="position:relative;left:-30upx;">男女不限</text>
				</view>
			</view>
			<view style="display: flex;justify-content: space-around;margin-top:15upx;">
				<view style="display: flex;justify-content: space-around;align-items: center;">
					<image style="width:40upx;position:relative;top:5upx;left:10upx;margin-right:23upx;" src="../../static/jianzhi3.png" mode="widthFix"></image>
					<text >食堂三楼</text>
				</view>
				<view style="display: flex;justify-content: space-around;align-items: center;">
					<image style="width:40upx;position:relative;top:5upx;margin-right:15upx;" src="../../static/jianzhi5.png" mode="widthFix"></image>
					<text >2019-01-02</text>
				</view>
			</view>
		</view>
		<view class="cont-3">
			<view style="font-size:32upx;color:#6E6D6D;margin-top:10upx;">工作内容：</view>
			<view style="font-size:32upx;color:#6E6D6D;margin-top:10upx;">1. 帮后厨打下手</view>
			<view style="font-size:32upx;color:#6E6D6D;margin-top:10upx;">2. 外卖配送</view>
			<view style="font-size:32upx;color:#6E6D6D;margin-top:10upx;">3. 厨房清洁</view>
		</view>
		<view class="cont-4">
			<text style="color:#2BBAFC;">联系商家：</text><text> 报名之后可联系商家</text>
		</view>
		<view style="margin:0 auto;text-align: center;margin-top:50upx;width:90%;height:80upx;border-radius: 18upx;background-color: #2BBAFC;color:#fff;line-height: 80upx;">
			报名
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
page{
	height:100%;
	width:100%;
}
.img-cont {
	
	text-align: center;
}
.cont-1 {
	position:relative;
	padding:20upx 50upx;
	display: flex;
	align-items: center;
	border-bottom: solid 3upx #F8F8F8;
}
.cont-2 {
	margin-top:50upx;
	padding:10upx 30upx;
	height:100upx;

}
.cont-3 {
	margin-top:50upx;
	border-top:8upx solid #EFEFF7;
	padding:30upx 100upx;
}
.cont-4 {
	padding:20upx 80upx;
	border-top:8upx solid #EFEFF7;
	border-bottom:8upx solid #EFEFF7;
}
</style>
