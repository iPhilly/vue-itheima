// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

// 引入第三方包 开始

// mint-ui 和 其css插件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// MUI 的css样式


import Axios from 'axios'
Vue.prototype.$ajax = Axios

// 引入第三方包 结束

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
