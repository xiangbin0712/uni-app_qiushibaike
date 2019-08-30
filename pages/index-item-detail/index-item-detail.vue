<template>
	<view>
		<view class="detail"><detail-info :article="article"></detail-info></view>
	</view>
</template>

<script>
import detailInfo from '../../components/detail-info/detail-info.vue';
export default {
	components: {
		detailInfo
	},
	data() {
		return {
			article: {}
		};
	},
	onLoad(options) {
		// 接受数据并初始化
		this.init(JSON.parse(options.article));
	},
	methods: {
		init(data) {
			// 动态设置导航栏title
			uni.setNavigationBarTitle({
				title: data.title
			});
			this.article = data;
			this.getComment(data.id);
		},

		getComment(id) {
			// 获取文章详情
			this.$http
				.get(`post/${id}/comment`)
				.then(res => {
					// 重组数据
					let a = this.regroup(res.list);
					console.log(a);
				})
				.catch(err => {
					console.log(err, 'err');
				});
		},
		regroup(arr, id = 0) {
			var temp = [],
				lev = 0;
			var forFn = function(arr, id, lev) {
				for (var i = 0; i < arr.length; i++) {
					var item = arr[i];
					if (item.fid == id) {
						item.lev = lev;
						temp.push({
							id: item.id,
							fid: item.fid,
							userid: item.user.id,
							userpic: item.user.userpic,
							username: item.user.username,
							// time: time.gettime.gettime(item.create_time),
							data: item.data
						});
						forFn(arr, item.id, lev + 1);
					}
				}
			};
			forFn(arr, id, lev);
			return temp;
		}
	}
};
</script>

<style scoped>
.detail {
	margin-left: 30upx;
	margin-right: 30upx;
}
</style>
