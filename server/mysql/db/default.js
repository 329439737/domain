
const { Sequelize } = require('sequelize')

let sequelize = new Sequelize('games', 'root', '329439737', {
  host: '49.235.77.191',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5, // 连接池中最大连接数量
    min: 0, // 连接池中最小连接数量
    idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
  },
  protocol: true // 开启日志
})

module.exports = {
  sequelize // 将此模块给暴露出去
}
