import Router from 'koa-router'
import RouterConfig from '../../src/routers'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import React from 'react'

const routes = new Router()

// routes.get('/', (ctx, next) => {
//   console.log('url', ctx.url)
//   ctx.body = renderToString(
//         <StaticRouter location={ctx.url}>
//             <RouterConfig/>
//         </StaticRouter>
//   )
//   next()
// })

// routes.get('/list', (ctx, next) => {
//   ctx.body = renderToString(
//         <StaticRouter location={ctx.url}>
//             <RouterConfig/>
//         </StaticRouter>
//   )
//   next()
// })

export default routes
