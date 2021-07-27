import routes from './router/index'

import Api from './mysql/units/index'
// const Koa = require('Koa')

// const app = new Koa()
// Api.testtab() // 添加数据
// app.use(routes.routes(), routes.allowedMethods())   //路由
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'html'
}
)

app.listen(9000, () => {
  console.log('node服务已经启动, 请访问localhost:9000')
})
