import UserInfo from './../pages/userinfo/index' // 用户信息管理
import Home from './../pages/home/index' // 首页
import Domain from './../pages/domain/index' // 域名信息
import Warning from './../pages/warningbar/index' // 预警栏信息
import Owndomain from './../pages/owndomain/index' // 自由域名管理

import Addowndomain from './../pages/owndomain/addowndomain/index' // 自由域名录入
import Dp from './../pages/daping/index' // 大屏
import Loading from './../pages/daping/loading' // 加载
import Hooks from './../pages/hooks/index' // hooks练习
import HooksDemo2 from './../pages/hooks/demo' // hooks练习
import Jsdemo1 from './../pages/js/demo-1'/// js练习1
import Jsdemo3 from './../pages/hooks/demo3' // HOOks练习三
import Fen from './../pages/js/demo2'// 富文本

import Books from './../pages/books/index' // 书本

import Account from './../pages/account/index' // 账号管理

//
import Tetest from './../pages/ts/demo1'

// redux
import Reduxdome from './../pages/reduxs/index' // redux练习
import Reduxdome2 from './../pages/reduxs/saga' // redux练习
import Canvas from './../pages/canvas/index' // cavas
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
    path: '/admin/dp',
    name: '大屏管理',
    component: Dp
  },
  {
    path: '/admin/loading',
    name: '加载ing',
    component: Loading
  },
  {
    path: '/admin/hooks',
    name: 'Hooks练习',
    component: Hooks
  },
  {
    path: '/admin/Jsdemo1',
    name: 'demo1',
    component: Jsdemo1
  },
  {
    path: '/admin/jsdemo2',
    name: 'jsdemo2',
    component: Fen
  },
  {
    path: '/admin/demo2',
    name: 'demo2',
    component: HooksDemo2
  },
  {
    path: '/admin/jsdemo3',
    name: 'demo3',
    component: Jsdemo3
  },
  {
    path: '/admin/books',
    name: '网卡信息',
    component: Books
  },
  {
    path: '/admin/account',
    name: '用户管理',
    component: Account
  },
  {
    path: '/admin/ts-demo1',
    name: 'tsdemo1',
    component: Tetest
  },

  {
    path: '/admin/redux-demo1',
    name: 'redux-demo1',
    component: Reduxdome
  },
  {
    path: '/admin/saga',
    name: 'saga',
    component: Reduxdome2
  },
  {
    path: '/admin/canvas',
    name: '图形处理',
    component: Canvas
  }

]
