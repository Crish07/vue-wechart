/*
* Created by crish on 2019/8/22
* */

import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store/index'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false; // 阻止启动生产消息

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted () {
    // 请求路由相关
    this.$store.commit('app/updateMenulist');
  }
});
