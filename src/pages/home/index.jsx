import React, { Component } from 'react'
import style from './index.module.scss'
import Info from './../../assets/json/homeinfo.json'
import { Card, Icon, Button } from 'antd'
// import ''animate.css
import './../../assets/css/animte.css'
// import { find2 } from './../../mysql/index'
export default class index extends Component {
  state={
    meg: ''
  }

  componentDidMount () {
    this.getinit()
  }

  // getinit
  getinit=() => {
    let n = Info.length
    let i = Math.round(Math.random() * (n - 1))
    let a = Info[i].text
    this.setState({
      meg: a
    })
  }

  render () {
    const { meg = '' } = this.state
    return (
      <>
        <Card>
          <div style={{ display: 'flex' }}>

          <div>
          <Icon type="smile" theme="twoTone" />
          </div>

        <div className="animate__animated animate__test" style={{ marginLeft: '10px' }}>{meg}</div>
        </div>
        </Card>
       <div className={style.main}></div>
     </>
    )
  }
}
