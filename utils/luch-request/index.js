import Request from './request'

const test = new Request()

test.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'http://www.aaa.cn'
	config.header = {
		a: 1,
		b: 2
	}
	return config
})

test.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
		a: 1
	}
	/*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
	return config
})

test.interceptor.response((response) => { /* 请求之后拦截器 */
	return response
}, (response) => { // 请求错误做点什么
	return response
})

const http = new Request()

http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'http://api.qb.xiangbin2.top/api/v1/' /* 根域名不同 */
	config.header = {
		'Content-Type': 'application/json;charset=UTF-8',
		'Content-Type': 'application/x-www-form-urlencoded'
	}
	return config
})

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	let token = '';
	try {
		let st = uni.getStorageSync('token');
		if (st) {
			token = st;
		}
	} catch (e) {}
	config.header = {
		...config.header,
		Token: token // 将token 放入header  
	}

	/*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
	return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	if (response.statusCode == 200) {
		return response.data.data

	}
}, (err) => { // 请求错误做点什么
	console.log(err, "err");
	return err
})

export {
	http,
	test
}
