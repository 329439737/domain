import React, { Component } from 'react'

import { Layout } from 'antd'
import { routerMap } from './../../routes/index.js'
import { Switch, Route } from 'react-router-dom'
const { Footer, Content, Sider, Header } = Layout
export default class index extends Component {
  render () {
    return (
      <Content style={{ margin: '16px 16px' }}>
                 <Switch>
                   {
                    routerMap.map((route, i) => (
                      <Route
                      name={route.name}
                      exact
                      key={i}
                      path={route.path}
                      render={props => (
                        <route.component {...props} />
                      )}
                    />
                    ))
                   }
                 </Switch>
          </Content>
    )
  }
}
