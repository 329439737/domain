import React, { Component } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'

export default class detailmodal extends Component {
  static propTypes = {
    onCancel: PropTypes.func
  }

  render () {
    return (
      <div>
            <Modal
          title="Basic Modal"
          visible
          onOk={this.handleOk}
          onCancel={this.props.onCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}
