import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Radio } from 'antd'

export default class index extends Component {
  static propTypes ={
    onOk: PropTypes.func,
    onCancel: PropTypes.func
  }

  state={
    value: 1
  }

  componentDidMount () {
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  };

  // 确认
  onok=() => {
    const { value } = this.state
    this.props.onOk(value)
  }

  render () {
    return (
      <div>
          <Modal
          title="请选择去哪？"
          visible
          onOk={this.onok}
          onCancel={this.props.onCancel}
        >
          <div>
           <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>练习学校</Radio>
            <Radio value={2}>电商后台</Radio>
          </Radio.Group>
          </div>

        </Modal>
      </div>
    )
  }
}
