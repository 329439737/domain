import React, { Component } from 'react'
import { List } from 'antd'

import style from './index.module.scss'
export default class index extends Component {
  state={
    faly: false,
    data: [
      { text: '沧海月明珠有泪' },
      { text: '关关雉鸠，在河之洲' },
      { text: '窈窕淑女，君子好逑' },
      { text: '关关雉鸠，在河之洲' },
      { text: '窈窕淑女，君子好逑' },
      { text: '沧海月明珠有泪' },
      { text: '关关雉鸠，在河之洲' },
      { text: '窈窕淑女，君子好逑' },
      { text: '关关雉鸠，在河之洲' },
      { text: '沧海月明珠有泪' },
      { text: '关关雉鸠，在河之洲' },
      { text: '窈窕淑女，君子好逑' },
      { text: '关关雉鸠，在河之洲' },
      { text: '窈窕淑女，君子好逑' },
      { text: '沧海月明珠有泪' },
      { text: '关关雉鸠，在河之洲' },
      { text: '窈窕淑女，君子好逑' },
      { text: '关关雉鸠，在河之洲' },
      { text: '窈窕淑女，君子好逑' },
      { text: '窈窕淑女，君子好逑' },
      { text: '666' },
      { text: '666' },
      { text: '666' },
      { text: '666' },
      { text: '666' }
    ]
  }

  componentDidMount () {
    let element = document.getElementById('demo')
    console.log(element.scrollHeight, element.clientHeight)
    if (element.scrollHeight > element.clientHeight) {
      this.setState({
        faly: true
      })
      console.log(element.scrollHeight, element.clientHeight)
    }
  }

  render () {
    const { data, faly } = this.state
    return (
      <div >
        <div className={style.main}>
             <div className={style.div_1} id='demo'>
               <ul >
                 {
                   data.map((item, i) => (

                     <li className={style.li} id='li' key={i} style={{ float: 'left' }}>{item.text}</li>
                   ))
                 }
               </ul>
             </div>
             <div>
               {
                         faly ? '更多' : null
               }
             </div>
        </div>

      </div>
    )
  }
}
