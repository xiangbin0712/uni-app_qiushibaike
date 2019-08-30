<template>
	<view class="detail-info flex">
		<image class="avatar" src="../../static/demo/userpic/1.jpg" mode=""></image>

		<view class="content">
			<view class="header flex-bet">
				<view class="left">
					<text class="nickname">{{ article.user.username }}</text>
					<text :class="[sex == 1 ? 'icon-nan' : 'icon-nv', 'icon', 'sex', 'iconfont']">25</text>
				</view>
				<view class="right">
					<text class="icon care font26 iconfont icon-zengjia">关注</text>
					<text class="delete">X</text>
				</view>
			</view>
			<view class="time font26" v-show="article.create_time">{{ article.create_time }}</view>
			<view class="title">{{ article.content }}</view>
			<!-- 图片 -->
			<view class="picture"><image class="thumb" src="../../static/demo/datapic/11.jpg" mode=""></image></view>
			<view class="bottom flex-bet">
				<view class="site">深证 龙岗</view>
				<!-- action -->
				<view>
					<text class="icon ml20 iconfont icon-zhuanfa"><text class="ml15">10</text></text>
					<text class="icon ml20 iconfont icon-pinglun1"><text class="ml15">10</text></text>
					<text class="icon ml20 iconfont icon-dianzan1"><text class="ml15">10</text></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		article: Object
	},
	data() {
		return {
			sex: 0
		};
	}
};
</script>

<style scoped>
.detail-info {
	/* border: 1upx solid; */
	align-items: flex-start;
}

.content {
	/* border: 1upx solid red; */
	flex: 1;
	margin-left: 20upx;
}

.content .header .nickname {
	color: #a0a0a0;
}

.content .header .sex {
	padding: 4upx 10upx;
	border-radius: 20upx;
	color: #ffffff;
	margin-left: 20upx;
	font-size: 22upx;
}
.content .header .icon-nan {
	background: #44b3ff;
}
.content .header .icon-nv {
	background: #ff7898;
}

.content .header .care {
	background: #f4f4f4;
	padding: 0 10upx;
	display: inline-block;
	border-radius: 10upx;
}

.content .header .delete {
	color: #bbbbbb;
	margin-left: 20upx;
}

.content .title {
	padding: 10upx 0;
}

.content .time,
.content .bottom {
	color: #bbbbbb;
}

.content .thumb {
	width: 100%;
	height: 300upx;
	border-radius: 10upx;
}
.content .bottom {
	padding: 15upx 0 25upx;
}
</style>
