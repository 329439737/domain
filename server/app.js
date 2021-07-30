import routes from './router/index'

// import Db from './mysql/db/index'
// import Unit from './mysql/units/index'
// import bodyparser from 'koa-bodyparser'

const Koa = require('Koa')
const app = new Koa()
// Db.Insert()// 测试添加数据
// Unit.testtab() // 测试删除表

// app.use(bodyparser())
app.use(routes.routes(), routes.allowedMethods()) // 路由

app.listen(9000, () => {
  console.log('node服务已经启动, 请访问localhost:9000')
})
