/*
* Created by crish on 2019/8/22
* */

import axios from 'axios';
import { Dialog } from 'vant';
import '@/mockjs/mockTest';//模拟数据

let util = {};
const ajaxUrl = 'http://www.table.com';//请求地址

/*
* 使用自定义配置新建一个 axios 实例
* */
const instance = util.ajax = axios.create({
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  baseURL: ajaxUrl,
  timeout: 100000
});

/*
* axios 添加响应拦截器
*   @params response: 返回值
* */
instance.interceptors.response.use(function (response) {
  let msg;
  if (response) {
    if (response.data) {
      if (!response.data.success) {
        msg = response.data.message;
      }
    } else {
      msg = '系统错误，返回数据为空！';
    }
  } else {
    msg = '系统错误，返回对象为空！';
  }
  if (msg) {
    Dialog.alert({ message: msg });
  }
  return response.data;
}, function (error) {
  Dialog.alert({ message: '系统错误，请联系管理员！'});
  return Promise.reject(error);
});

/*
* 路由跳转
* @params routers: 所有页面
*         name: 即将要进入的路由对象
*         route: 路由配置信息
*         next: 是继续跳转或中断的方法
* */
util.toDefaultPage = function (routers, name, route, next) {
  let len = routers.length;
  let i = 0;
  let notHandle = true;
  while (i < len) {
    if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
      route.replace({
        name: routers[i].children[0].name
      });
      notHandle = false;
      next();
      break;
    }
    i++;
  }
  if (notHandle) {
    next();
  }
};

export default util;
