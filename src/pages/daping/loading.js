import React, { Component } from 'react'
import { Loading } from '@jiaminghi/data-view-react'
import styles from './loading.module.scss'
export default class loading extends Component {
  render () {
    return (
      <div className={styles.main}>
       <Loading>Loading...</Loading>
      </div>
    )
  }
}
