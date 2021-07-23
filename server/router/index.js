import Router from 'koa-router'
import RouterConfig from '../../src/routers'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

const routes = new Router()

routes.get('/', (ctx, next) => {
  console.log('ctx', ctx)
  ctx.body = '大哥哥'
  next()
})

routes.get('/list', (ctx, next) => {
  console.log('ctx', ctx)
  ctx.body = renderToString(
       <StaticRouter location={ctx.url}>
          <RouterConfig/>
     </StaticRouter>
  )
  next()
})

routes.get('/a', (ctx, next) => {
  ctx.body = '大哥哥'
  next()
})

export default routes
