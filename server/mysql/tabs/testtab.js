let Sequelize = require('sequelize')

let sequelize = require('../db/default').sequelize

let testtab = sequelize.define('testtab', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  title: Sequelize.STRING(100) // 标题
})

module.exports = testtab
