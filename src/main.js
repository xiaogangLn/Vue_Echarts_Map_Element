// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 组件引入
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment' // 时间格式化插件
import 'font-awesome/css/font-awesome.min.css' // 引入字体图标font-awesome
import store from './store/index' // 引入vueX
import '@/assets/css/global.css' // 依赖公用样式文件
import axios from '@/assets/js/reject' // 请求服务
import VueVideoPlayer from 'vue-video-player' // vue视频播放插件
import 'video.js/dist/video-js.css' // vue 播放插件样式文件
import '@/assets/font/iconfont.css' // 自定义图标字体导入
import echarts from 'echarts' // 导入echarts 图形组件

axios.defaults.baseURL = 'http://114.116.125.238:8088/' // 填写请求地址
axios.defaults.timeout = 1000 * 120
// 变更headers
axios.defaults.headers['Content-Type'] = 'application/json'

// 组件初始化
Vue.use(ElementUI)
Vue.use(VueVideoPlayer)
window.moment = moment
window.echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
