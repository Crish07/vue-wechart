/*
* Created by crish on 2018/3/2
* */

import Vue from 'vue'
import util from '../libs/util';
import Router from 'vue-router'
import { routers } from './router';

Vue.use(Router);

// 路由配置
const RouterConfig = {
  mode: 'history',
  bace: 'dist',
  routes: routers
};

export const router = new Router(RouterConfig);

/*在跳转之前执行*/
router.beforeEach((to, from, next) => {
  util.toDefaultPage([...routers], to.name, router, next);
});

/*在跳转之后判断*/
router.afterEach((to) => {
  window.scrollTo(0, 0);
});
