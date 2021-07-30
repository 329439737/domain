import roles from './../pages/rolemanagement/index' // 角色管理
import Account from './../pages/account/index' // 账号管理
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
  }
]
