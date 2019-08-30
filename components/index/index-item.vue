<template>
	<view class="index-item" @tap="openDetail">
		<!-- header -->
		<view class="header flex-bet">
			<view class="flex-center">
				<image class="avatar" :src="article.user.userpic" mode="aspectFit"></image>
				<text class="nickname ml15">{{ article.user.username }}</text>
			</view>
			<!-- 关注按钮 -->
			<text class="icon care iconfont icon-zengjia font28">关注</text>
		</view>
		<!-- title -->
		<view class="title">{{ article.content }}</view>
		<!-- 图片 -->
		<view class="picture" v-if="type == 1"><image class="thumb" src="/static/demo/datapic/1.jpg" mode="aspectFill" lazy-load></image></view>
		<!-- 视屏 -->
		<view class="video flex-center" v-if="type == 2">
			<image class="thumb" :src="article.titlepic" mode="aspectFill" lazy-load></image>
			<text class="icon iconfont icon-bofang play-icon"></text>
			<text class="play-info font26">20w次播放 2:90</text>
		</view>
		<view class="bottom flex-bet ml20 mr20">
			<view class="left">
				<!-- 赞和踩 -->
				<text class="mr10 icon iconfont icon-icon_xiaolian-mian"><text class="ml10">123</text></text>
				<text class="icon iconfont icon-kulian"><text class="ml10">13</text></text>
			</view>
			<view class="right">
				<text class="mr10 icon iconfont icon-pinglun1"><text class="ml10">123</text></text>
				<text class="icon iconfont icon-zhuanfa"><text class="ml10">13</text></text>
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
			type: 2,
			defaultAvatar: '/static/demo/datapic/1.jpg'
		};
	},
	created() {},
	methods: {
		// 进入详情页面
		openDetail() {
			let article = JSON.stringify(this.article);
			uni.navigateTo({
				url: '../../pages/index-item-detail/index-item-detail?article=' + article
			});
		}
	}
};
</script>

<style scoped>
.index-item {
	padding: 20upx 30upx 30upx;
	border-bottom: 1upx solid #eeeeee;
}
.header .nickname {
	color: #9c9c9c;
}

.header .care {
	background: #f4f4f4;
	border-radius: 4upx;
	padding: 0 10upx;
}
.index-item .title {
	padding: 15upx 0 20upx;
}

.index-item .thumb {
	width: 100%;
	height: 350upx;
	border-radius: 10upx;
}
.index-item .video {
	position: relative;
}

.index-item .video .play-icon {
	font-size: 140upx;
	color: #ffffff;
	position: absolute;
}
.index-item .video .play-info {
	color: #fdfdfc;
	position: absolute;
	bottom: 10upx;
	right: 10upx;
	border-radius: 29upx;
	padding: 4upx 20upx;
	background: rgba(0, 0, 0, 0.6);
}

.index-item .bottom {
	color: #d5d5d5;
	margin-top: 10upx;
}
</style>
