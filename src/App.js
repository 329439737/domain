import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/login/login' // 登录页面
import { GetSeeion } from './assets/unit/seesion'

import Main from './pages/main/index' // 首页

import Error from './pages/404/404' // 错误页面

export default class App extends Component {
  render () {
    return (
     <Router>
       <Switch>
        <Route
              exact
              path='/'
              render={props => {
                const token = GetSeeion('token')
                return token ? <Redirect to='/admin/home' /> : <Login {...props} />
              }}
            />

         <Route path='/admin'
          render={props => {
            // const token = 1
            const token = GetSeeion('token')
            return token ? <Main {...props}></Main> : <Redirect to='/'></Redirect>
          }}
          >

          </Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/404' component={Error}></Route>

        </Switch>
     </Router>
    )
  }
}
