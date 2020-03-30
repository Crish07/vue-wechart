/*
* Created by crish on 2019/8/22
* */

import Main from '@/components/Main'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: resolve => { require(['@/components/Login.vue'], resolve); }
};

export const error403 = {
  path: '/403',
  name: 'error-403',
  meta: {
    title: '403-权限不足'
  },
  component: resolve => { require(['@/components/error-page/403.vue'], resolve); }
};

export const error404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/components/error-page/404.vue'], resolve); }
};

export const error500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: resolve => { require(['@/components/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = [
  // {
  //   path: '/',
  //   name: 'otherRouter',
  //   title: '个人中心',
  //   component: Main,
  //   children: [
  //     {
  //       path: '/ownSpace', 
  //       title: '个人中心', 
  //       name: 'ownSpace', 
  //       component: resolve => {
  //         require(['@/components/own-component/personalCenter'], resolve);
  //       }
  //     }
  //   ]
  // },
];

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/',
    redirect: '/login',
    name: 'main',
    icon: 'home',
    title: '首页',
    component: Main,
    children: [
      {
        path: '/index', 
        title: '首页', 
        name: 'home_index', 
        component: resolve => {
          require(['@/components/homepage/Index'], resolve);
        }
      },
    ]
  },
]


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  ...appRouter,
  //...otherRouter,
  error403,
  error500,
  error404,
]
