/**
 * NODE_ENV:环境
 * BASE_URL:接口前缀
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import '@assets/scss/index.scss'


Vue.config.productionTip = false
axios.defaults.baseURL = process.env.BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')