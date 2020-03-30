/*
* Created by crish on 2019/8/22
* */

import { appRouter, otherRouter } from '@/router/router';
import Util from '@/libs/util';
import Cookies from 'js-cookie';

const namespace = 'app';
const r = ac => `${namespace}/${ac}`;
export const moduleName = namespace;

// mutations
export const updateMenulist = r('updateMenulist');

const module = function () {
  return {
    state: {
      menuList: [],//菜单数组
      routers: [//配置的路由
        ...appRouter,
        ...otherRouter,
      ]
    },
    mutations: {
      [updateMenulist] (state){
        let accessCode = parseInt(Cookies.get('access'));
        let menuList = [];
        appRouter.forEach(( item,index ) => {
          if (item.access !== undefined) {// 判断该页面是否带有权限
            if (Util.showThisRoute(item.access, accessCode)) { // 登录权限和该页面配置的权限一致
              if (item.children.length === 1) {
                menuList.push(item);
              } else {
                let len = menuList.push(item);
                let childrenArr = [];
                childrenArr = item.children.filter(child => {
                  if (child.access !== undefined) {
                    if (child.access === accessCode) {
                      return child;
                    }
                  } else {
                    return child;
                  }
                });
                menuList[len - 1].children = childrenArr;
              }
            }
          } else {
            if (item.children.length === 1) {
              menuList.push(item);
            } else {
              let len = menuList.push(item);
              let childrenArr = [];
              childrenArr = item.children.filter(child => {
                if (child.access !== undefined) { // 判断子页面是否有权限控制
                  if (Util.showThisRoute(child.access, accessCode)) {
                    return child;
                  }
                } else {
                  return child;
                }
              });
              let handledItem = JSON.parse(JSON.stringify(menuList[len - 1]));
              handledItem.children = childrenArr;
              menuList.splice(len - 1, 1, handledItem);
            }
          }
        });
        state.menuList = menuList;
      },
    },
  };
};
export default module();
