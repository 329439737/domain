let Sequelize = require('sequelize')// 引入sequelize

// 查找类型
let select = {
  type: Sequelize.QueryTypes.SELECT
}

// //添加类型
let insert = {
  type: Sequelize.QueryTypes.INSERT
}

// //删除类型
let deleteinfo = {
  type: Sequelize.QueryTypes.DELETE
}

export default {
  select,
  insert,
  deleteinfo
}
