import users from './router/index'

import Api from './mysql/units/index'
const Koa = require('Koa')

const app = new Koa()
// Api.testtab() // 添加数据
app.use(users.routes(), users.allowedMethods())

app.listen(9000, () => {
  console.log('node服务已经启动, 请访问localhost:9000')
})
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})
