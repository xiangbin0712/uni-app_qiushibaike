import Vue from 'vue'
import App from './App'

// 全局挂载http
// 全局挂载http
import {
	http
} from '@/utils/luch-request/index.js' // 全局挂载引入，配置相关在该index.js文件里修改



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
