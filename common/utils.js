// common.js
const getViewHeight = function(data) {
	const query = uni.createSelectorQuery().in(this);
	query.select(data).boundingClientRect(res => {
			// console.log(data.height);
			return res
		})
		.exec();
}
export {
	getViewHeight
}
