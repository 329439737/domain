import React, { Component } from 'react'
import { InputNumber } from 'antd'
import styles from './index.module.scss'
import { domainname } from './../../assets/js/ze'

class number extends Component {
  state={
    count: null
  }

  onChange=(value) => {
    console.log(value)
    if (domainname.test(value)) {
      this.setState({
        count: value
      })
    }
    return 1
  }

  // 加
  increase=() => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }

  // 减
  decrease=() => {
    const { count } = this.state
    if (count !== null && count > 0) {
      this.setState({
        count: count - 1
      })
    }
  }

  render () {
    const { count } = this.state
    return (
      <>
            <div className={styles.main}>
             <div className={`${styles.decrease} ${styles.commomt}`} onClick={() => { this.decrease() }}>-</div>
             <div > <InputNumber style={{ height: '40px' }} className={styles.main} onChange={(value) => { this.onChange(value) }} value={count}></InputNumber></div>
             <div className={`${styles.increase} ${styles.commomt}`} onClick={() => { this.increase() }}>+</div>
           </div>
      </>
    )
  }
}

export default number
