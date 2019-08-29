<template>
	<view class="index">
		<!-- 顶部swiper-tabs -->
		<swiper-tabs class="swiper-tabs" @transIndex="transIndex" :currentIndex="currentIndex" :tabs="tabs"></swiper-tabs>
		<!-- <view class="content"> -->
		<swiper class="swiper" @change="swiper" :current="currentIndex" :style="{ height: swiperHeight + 'px' }">
			<block v-for="temp in tabs" :key="temp.id">
				<swiper-item>
					<scroll-view scroll-y="true">
						<block v-for="(item, index) in articleList" :key="index"><index-item :article="item" class="index-item" /></block>
					</scroll-view>
				</swiper-item>
			</block>
			<!-- <load-more :loadingMore="loadingMore" :status="status">123</load-more> -->
		</swiper>
		<!-- </view> -->
	</view>
</template>

<script>
import loadMore from '../../components/uni-load-more/uni-load-more.vue';
import { getViewHeight } from '../../common/helper.js';
import indexItem from '../../components/index/index-item.vue';
import swiperTabs from '../../components/swiper-tabs/swiper-tabs.vue';
export default {
	components: {
		swiperTabs,
		indexItem,
		loadMore
	},
	data() {
		return {
			tabs: [],
			currentIndex: 0,
			articleList: [], // 文章列表
			swiperHeight: 0, // swiper 高度
			page: 1, //页码
			loadingMore: false, //是否显示加载更多
			status: 'loading-loading'
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
	watch: {
		currentIndex(curVal, oldVal) {
			if (curVal !== oldVal) {
				this.page = 1;
				this.getList();
			}
		}
	},

	onLoad() {
		this.getNav(); // 获取顶部导航
		this.setSwiperHeight(); // 设置swiper高度
	},
	//页面滚动触底
	onReachBottom(e) {
		this.getList();
	},
	methods: {
		getNav() {
			// 获取顶部导航
			this.$http
				.get('postclass')
				.then(res => {
					this.tabs = res.list;
					this.getList(); // 获取文章列表
				})
				.catch(err => {
					console.log(err, 'err');
				});
		},
		getList() {
			// 获取文章列表
			let id = this.currentIndex + 1;
			let page = this.page;
			this.$http
				.get(`postclass/${id}/post/${page}`)
				.then(res => {
					if (res.list.length >= 1) {
						this.articleList = this.articleList.concat(res.list);
						this.page++;
						// 这里添加loading-more
					}
				})
				.catch(err => {
					console.log(err, 'err');
				});
		},

		setSwiperHeight() {
			// let tabsHeight = getViewHeight('.swiper-tabs'); 获取tas高度为48px
			//先从缓存取windowHeight
			let sysinfo = uni.getStorageSync('sysinfo');
			if (sysinfo) {
				return (this.swiperHeight = sysinfo.windowHeight - 48);
			}
			// 没有就获取
			try {
				const sysinfo = uni.getSystemInfoSync();
				this.swiperHeight = sysinfo.windowHeight - 48;
				uni.setStorageSync('sysinfo', sysinfo);
			} catch (e) {
				// error
			}
		},

		// swiper
		swiper(e) {
			this.currentIndex = e.detail.current;
			// this.getList();
		},

		// 监听组件
		transIndex(e) {
			this.currentIndex = e;
			// this.getList();
		}
	}
};
</script>

<style scoped>
.swiper-tabs {
	padding: 20upx 0;
	position: fixed;
	z-index: 99;
	width: 100%;
	background: #ffffff;
}
.swiper {
	/* height: 900upx; */
	padding-top: 98upx;
}

.swiper scroll-view {
	height: 100%;
}
</style>
