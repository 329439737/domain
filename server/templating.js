import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import RouterConfig from '../src/routers'
import React from 'react'
import path from 'path'

// 匹配模板中的{{}}
function templating (props) {
  const template = fs.readFileSync(path.join(__dirname, '../template/server.html'), 'utf-8')
  return template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()])
}

export default function (ctx, next) {
  try {
    ctx.render = () => {
      const html = renderToString(
                <StaticRouter location={ ctx.url }>
                    <RouterConfig/>
                </StaticRouter>
      )
      const body = templating({
        html
      })
      ctx.body = body
    }
  } catch (err) {
    ctx.body = templating({ html: err.message })
  }
  ctx.type = 'text/html'
  // 这里必须是return next() 不然异步路由是404
  return next()
}
