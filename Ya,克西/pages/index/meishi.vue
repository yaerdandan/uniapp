<template>
	<view class="yumaoqiu-view">
		<view class="name-view">
			<view>姓名</view>
			<input type="text" placeholder="请输入姓名" value="" />
		</view>
		<view class="school-view">
			<view>学校</view>
			<input type="text" placeholder="请输入学校信息" value="" />
		</view>
		<view class="canyu-view">
			<view>参与形式</view>
			<input type="text" placeholder="请填写个人或小组" value="" />
		</view>
		<view class="duiwu-view">
			<view>队伍/作品名称</view>
			<input type="text" placeholder="请输入参数队伍/作品名称" value="" />
		</view>
		<view class="baoming-btn">报名</view>
		<view style="position:absolute;bottom:30upx;">
			
		
		<view class="bottom-s"></view>
		<view class="xia">
			<view class="qiupai">1)参赛人员须自行携带球拍，举办方提供球</view>
			<view style="margin-left:70upx;">2)比赛分单打和双打，请分配好队员</view>
			<view style="margin-left:70upx;">3)请务必注意安全.</view>
			<view style="margin-left:70upx;">4)预计在2019-01-12举行半决赛，决赛，具体</view>
			<view style="margin-left:70upx;"> 时间视情况而定，请各位参赛选手分配耗时间。</view>
		</view>
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
	page {
		height: 100%;
		background: #FFFBFF;
	}

	.yumaoqiu-view {}

	.name-view,
	.school-view,
	.canyu-view,
	.duiwu-view {
		padding: 50upx;
		display: flex;
		justify-content: space-between;
		border-bottom: solid 3upx #f8f8f8;
		font-size: 35upx;
	}

	.baoming-btn {
		background-color: #11D4FE;
		margin: 0 auto;
		margin-top: 80upx;
		margin-bottom: 80upx;
		font-size: 34upx;
		text-align: center;
		height: 90upx;
		width: 500upx;
		border-radius: 30px;
		line-height: 90upx;
		color: #fff;
	}

	.bottom-s {
		text-align: center;
		background-color: #EFEFF7;
		height: 20upx;
	}
	.xia {
		font-size: 32upx;
		color: #979597;
		padding-bottom:30upx;
		padding-left:30upx;
		
	}

	.qiupai:before {
		content: '规则：';
	}
</style>
