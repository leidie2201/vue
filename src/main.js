// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'
var $http = Axios.create({
    baseURL: 'http://www.adssap.com:8812',
    timeout: '3000',  //请求超时时间
    // method:"post",
    // responseType: 'json', // 默认的
    // withCredentials: false, // 表示跨域请求时是否需要使用凭证 ,默认的
    // headers: {'X-Custom-Header': 'foobar'}     //header传值，例如：Authorization
})
Vue.prototype.$http = $http

import Qs from 'qs'

// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);
// import Loading from './core/api-server/index'
// Vue.use(Loading);
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
