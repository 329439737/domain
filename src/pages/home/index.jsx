import React, { Component } from 'react'
import style from './index.module.scss'
import Info from './../../assets//json/homeinfo.json'
import { Card, Icon, Button } from 'antd'

export default class index extends Component {
  state={

  }

  componentDidMount () {

  }

  render () {
    const n = Info.length
    const i = Math.round(Math.random() * (n - 1))
    return (
      <div >
        <Card>
          <Button onClick={() => { this.onbtn() }}>添加</Button>
        <Icon type="smile" theme="twoTone" />
        <span style={{ marginLeft: '10px' }}>{Info[i].text}</span>
        </Card>
       <div className={style.main}></div>
     </div>
    )
  }
}
