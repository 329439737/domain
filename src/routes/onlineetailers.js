import roles from './../pages/rolemanagement/index' // 角色管理
import Account from './../pages/account/index' // 账号管理

import Quanxian from './../pages/quanxian/index' // 权限管理

import Eachars from './../pages/eachars/index' // 图表
import GoodsClass from './../pages/goodclass/index' // 商品分类

import Goods from './../pages/goods/index' // 商品列表
import Params from './../pages/paramsclass/index' // 分类参数列表
import Order from './../pages/order/index' // 订单列表
export default [
  {
    path: '/admin/users',
    name: '用户管理',
    component: Account
  },
  {
    path: '/admin/roles',
    name: '角色管理',
    component: roles
  },
  {
    path: '/admin/rights',
    name: '权限管理',
    component: Quanxian
  },
  {
    path: '/admin/reports',
    name: '图表',
    component: Eachars
  },
  {
    path: '/admin/categories',
    name: '商品分类',
    component: GoodsClass
  },
  {
    path: '/admin/goods',
    name: '商品信息',
    component: Goods
  },
  {
    path: '/admin/params',
    name: '分类参数',
    component: Params
  },
  {
    path: '/admin/orders',
    name: '订单列表',
    component: Order
  }

]
