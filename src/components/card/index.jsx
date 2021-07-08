import React, { Component } from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
class index extends Component {
  static prosTypes ={
    title: PropTypes.string
  }

  render () {
    return (
      <Card style={{ marginBottom: '15px' }}>
        <span>标题：</span> <span style={{ color: 'red' }}>{this.props.title}</span>
      </Card>
    )
  }
}

export default index
