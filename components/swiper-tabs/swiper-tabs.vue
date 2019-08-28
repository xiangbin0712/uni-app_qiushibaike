<template>
	<view class="swiper-tabs">
		<scroll-view scroll-x class="scroll-view ">
			<view
				class="tab tac font32"
				@tap="$emit('transIndex', index)"
				:style="{ width: tabWidth }"
				:class="{ active: index == currentIndex }"
				v-for="(tab, index) in tabs"
				:key="index"
			>
				{{ tab.classname }}
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		tabs: Array,
		currentIndex: {
			type: Number,
			default: 0
		},
		tabWidth: {
			type: String,
			default: '20%'
		}
	}
};
</script>

<style scoped>
.swiper-tabs {
	/* border: 1px solid; */
}
.scroll-view {
	white-space: nowrap;
}

.scroll-view .tab {
	display: inline-block;
	color: #969696;
}

/* 选中的样式 */
.scroll-view .active {
	color: #000000;
	position: relative;
}
.scroll-view .active:after {
	content: '';
	background: #fede33;
	height: 10upx;
	border-radius: 4upx;
	width: 70upx;
	position: absolute;
	bottom: 0upx;
	left: 50%;
	margin-left: -35upx;
}

/* 去除滚动条 */
::-webkit-scrollbar {
	width: 0;
	height: 0;
	background-color: transparent;
}
</style>
