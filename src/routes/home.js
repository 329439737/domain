import UserInfo from './../pages/userinfo/index' // 用户信息管理
import Home from './../pages/home/index' // 首页
import Domain from './../pages/domain/index' // 域名信息
import Warning from './../pages/warningbar/index' // 预警栏信息
import Owndomain from './../pages/owndomain/index' // 自由域名管理

import Goods from './../pages/goods/index' // 货物挂办理

import Addowndomain from './../pages/owndomain/addowndomain/index' // 自由域名录入
import Dp from './../pages/daping/index' // 大屏
import Hooks from './../pages/hooks/index' // hooks练习
import HooksDemo2 from './../pages/hooks/demo' // hooks练习
export default [
  {
    path: '/admin/userinfo',
    name: '用户信息',
    component: UserInfo
  },
  {
    path: '/admin/home',
    name: '首页信息',
    component: Home
  },
  {
    path: '/admin/domain',
    name: '域名信息',
    component: Domain
  },
  {
    path: '/admin/warning',
    name: '预警栏',
    component: Warning
  },
  {
    path: '/admin/owndoamin',
    name: '自由域名管理',
    component: Owndomain
  },
  {
    path: '/admin/addowndoamin',
    name: '自由域名录入',
    component: Addowndomain
  },
  {
    path: '/admin/goods',
    name: '获取管理',
    component: Goods
  },
  {
    path: '/admin/dp',
    name: '大屏管理',
    component: Dp
  },
  {
    path: '/admin/hooks',
    name: 'Hooks练习',
    component: Hooks
  },
  {
    path: '/admin/demo2',
    name: 'demo2',
    component: HooksDemo2
  }

]
