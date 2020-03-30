/*
* Created by crish on 2018/3/14
* */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let contexts = require.context('./modules', true); // 实现自动化导入模块(前端自动化)
let modules = {};

contexts.keys().forEach((key) => {
  let name = contexts(key).moduleName; // 把包路径名变成导出名
  let module = contexts(key).default;
  name && (modules[name] = module);
});

const store = new Vuex.Store({
  modules,
});

export default store
