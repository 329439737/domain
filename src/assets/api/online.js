import Ajax from './../unit/ajax'

const url = 'https://www.liulongbin.top:8888/api/private/v1/'

export default {
  // 登录
  login (params) {
    return Ajax.post(`${url}login`, params)
  },
  // 用户列表
  userlist (params) {
    return Ajax.get(`${url}users`, { params })
  },
  // 用户添加
  useradd (params) {
    return Ajax.post(`${url}users`, params)
  },
  // 用户修改
  userupdate (params) {
    return Ajax.put(`${url}users/+${params.id}`, params)
  },
  // 用户删除
  userdel (params) {
    return Ajax.delete(`${url}users/+${params.id}`)
  },
  // 用户查询
  usersel (params) {
    return Ajax.get(`${url}users/+${params.id}`)
  },

  //
  // 获取左侧菜单栏
  menuslist (params) {
    return Ajax.get(`${url}menus`, params)
  },

  // 角色列表
  roleslist (params) {
    return Ajax.get(`${url}roles`, params)
  },
  // 添加角色
  rolesadd (params) {
    return Ajax.post(`${url}roles`, params)
  },
  // 编辑角色
  rolesedit (params) {
    return Ajax.put(`${url}roles/+${params.id}`, params)
  },
  // 删除角色
  rolesdel (params) {
    return Ajax.delete(`${url}roles/+${params.id}`)
  },
  // 角色授权
  getrolesq (params) {
    return Ajax.post(`${url}roles/${params.roleId}/rights`, params)
  },

  // 权限管理
  getquxainlist (params) {
    return Ajax.get(`${url}rights/${params.type}`)
  },
  // 删除权限del
  getquxaindel (params) {
    return Ajax.delete(`${url}roles/${params.roleId}/rights/${params.rightId}`)
  },
  // 商品管理

  // 获取商品参数列表
  getgoodclassslist (params) {
    return Ajax.get(`${url}categories`, params)
  },
  // 获取商品列表
  getgoodslist (params) {
    return Ajax.get(`${url}goods`, { params })
  },

  // 数据统计
  geteachars (params) {
    return Ajax.get(`${url}reports/type/1`, params)
  },

  // 分类参数
  getparamslist (params) {
    return Ajax.get(`${url}categories/${params.id}/attributes`, { params })
  },

  // 订单列表
  getorderlist (params) {
    return Ajax.get(`${url}orders`, { params })
  }
}
