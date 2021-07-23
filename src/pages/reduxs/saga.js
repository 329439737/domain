import React, { Component } from 'react'
import Ccard from './../../components/card/context' // '子组件'
import Mycontext from './../../assets/hooks/index' // 公共组件
import { connect } from 'react-redux'
import { Button, Card } from 'antd'

import { increate, increateAsync, fetchuser, fetchuserr } from './../reduxsagas/actions/counter'
class saga extends Component {
  state = {
    titile1: { title: 'redux-saga的初步使用' }
  }

  componentDidMount () {

  }

     // 测试1请求
     fetchuserr = () => {
       this.props.dispatch(fetchuserr())
     }

     render () {
       const { isFetch, error, user } = this.props.users
       console.log(this.props.userta)
       const { titile1 } = this.state
       let data = 'loading...'
       if (isFetch) {
         data = '正在加载中。。。'
       } else if (user) {
         data = user.data.message[0].id
       } else if (error) {
         data = error.message
       }

       return (
      <div>

           <Mycontext.Provider value={titile1}>
              <Ccard></Ccard>
          </Mycontext.Provider>

         {/* 触发dispatch，发送对应的action */}
         <div style={{ marginBottom: 20 }}>
           <Card>

          <p>{this.props.counter}</p>
          <Button type='primary' onClick={() => this.props.increate()}>新增</Button>

          <Button type='primary'onClick={() => this.props.increateAsync()}>异步新增</Button>

          <Button type='primary' onClick={() => this.props.fetchuser()}>axios请求</Button>
          <Button type='primary' onClick={() => this.props.fetchuserr()}>测试请求</Button>
          <h2>{data}</h2>
          </Card>
        </div>

      </div>
       )
     }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter, // state 对应的 key, 在 reducers/index.js 中声明。
    users: state.us,
    userta: state.uss
  }
}

export default connect(mapStateToProps, { increate, increateAsync, fetchuser, fetchuserr })(saga)
