import React, { Component } from 'react'
import Ccard from './../../components/card/context' // '子组件'
import Mycontext from './../../assets/hooks/index' // 公共组件
import { connect } from 'react-redux'
// import PropTpes from 'prop-types'
import { increate, reduce, test } from './../reduxsagas/actions/counter'
import { Button } from 'antd'

class index extends Component {
   state = {
     titile1: { title: 'redux的初步使用' },
     array: []
   }

   componentDidMount () {
     this.aa()
   }

   aa = () => {
     const { array } = this.state
     for (let i = 0; i < 100; i++) {
       array[i] = i + 1
     }
   }

   bb=() => {
     const { array } = this.state
     const newarray = array.reduce((x, y) => x + y)
     console.log(newarray)
   }

   render () {
     const { titile1 } = this.state
     const { counter } = this.props

     return (
      <div>
         <Mycontext.Provider value={titile1}>
              <Ccard></Ccard>
          </Mycontext.Provider>
             <h1> {counter}</h1>
          <Button onClick={() => { this.bb() }}>求和</Button>
          <Button onClick={() => this.props.increate()}>++</Button>
          <Button onClick={() => this.props.reduce()}>--</Button>
          <Button onClick={() => this.props.test({ userinfo: {} })}>点击测试</Button>

      </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
    // userinfo: state.userinfo
  }
}

export default connect(mapStateToProps, { increate, reduce, test })(index)
