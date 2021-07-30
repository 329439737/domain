import Router from 'koa-router'
import RouterConfig from '../../src/routers'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import React from 'react'
import console from 'console'
const fs = require('fs.promised')

const routes = new Router()

routes.get('/', (ctx, next) => {
  ctx.body = '1'
})

routes.get('/list', (ctx, next) => {
  ctx.body = renderToString(
        <StaticRouter location={ctx.url}>
            <RouterConfig/>
        </StaticRouter>
  )
  next()
})

export default routes
