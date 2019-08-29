// common.js

const getViewHeight = function(data) {
	let temp = {}
	const query = uni.createSelectorQuery().in(this);
	query.select(data).boundingClientRect(res => {
			temp = res
		})
		.exec();
	return temp
}


export {
	getViewHeight
}
