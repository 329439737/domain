import { insert, select, deleteinfo } from './unit'
const { sequelize } = require('./default')
let Sequelize = require('sequelize')// 引入sequelize
// 连接数据库
sequelize.authenticate().then(() => {
  console.log('数据库已连接！')
  // insertin()
  // selectHeatData()
}).catch(err => {
  console.log(err)
  console.log('连接失败')
})

// 查找
const Select = function (req, res) {
  return sequelize.query("select * from `heros` where name ='孙悟空'", select).then(data => {
    console.log('******', data)
    res.send(data)
  }).catch(err => {
    console.log('错误', err)
  })
}
// 新增
const Insert = function (name, req, res) {
  return sequelize.query("INSERT into heros(name) VALUE('孙悟空')", insert).then(data => {
    console.log('******', data)
    res.send(data)
  }).catch(err => {
    console.log('错误', err)
  })
}

// 删除
const Delete = function (req, res) {
  return sequelize.query("delete from heros WHERE name = '孙悟空'", deleteinfo).then(data => {
    console.log('******', data)
    res.send(data)
  }).catch(err => {
    console.log('错误', err)
  })
}

export default {
  Select,
  Insert,
  Delete
}
