<template>
	<view class="index">
		<!-- 顶部swiper-tabs -->
		<swiper-tabs @transIndex="transIndex" :currentIndex="currentIndex" :tabs="tabs"></swiper-tabs>
	</view>
</template>

<script>
import swiperTabs from '../../components/swiper-tabs/swiper-tabs.vue';
export default {
	components: {
		swiperTabs
	},
	data() {
		return {
			tabs: [],
			currentIndex: 0
		};
	},
	// 监听原生导航栏button点击
	onNavigationBarButtonTap(e) {
		if (e.index == 1) {
			uni.navigateTo({
				url: '../add-input/add-input'
			});
		}
		if (e.index == 0) {
			uni.showToast({
				title: '点击了签到',
				icon: 'none'
			});
		}
	},
	// 监听原生导航栏input点击
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search'
		});
	},

	onLoad() {
		this.getNav(); // 获取顶部导航
	},
	methods: {
		// 获取顶部导航
		getNav() {
			this.$http
				.get('topicclass')
				.then(res => {
					console.log(res);
					this.tabs = res.list;
				})
				.catch(err => {
					console.log(err, 'err');
				});
		},

		// 监听组件
		transIndex(e) {
			this.currentIndex = e;
		}
	}
};
</script>

<style></style>
