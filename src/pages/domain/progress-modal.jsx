import React, { Component } from 'react'
import { Modal, Button, Empty } from 'antd'
import PropTypes from 'prop-types'

export default class progressmodal extends Component {
  static propTypes = {
    onCancel: PropTypes.func
  }

  state={
    listinfo: []
  }

  render () {
    const { listinfo } = this.state
    return (
      <div>
      <Modal width={800} bodyStyle={{ padding: '12px', height: '500px', overflowY: 'scroll' }}
        title="任务状态"
        visible
        onCancel={() => this.props.onCancel()}
         footer={[
          <Button key={'a-1'} onClick={ this.props.onCancel}>关闭</Button>,
          <Button key={'a-2'} type='primary' onClick={() => this.props.onCancel()}>刷新</Button>
         ]}
             >
               {
                  listinfo.length > 0
                    ? <div>
                        <div><span>任务号：</span><span>11</span></div>
                        <div><span>任务名称：</span><span>11</span> </div>
                        <div><span>操作域名：</span><span>11</span></div>
                        <div><span>操作人：</span><span>11</span> </div>
                        <div><span>操作时间：</span><span>11</span></div>
                        <div><span>任务结果：</span><span>11</span> </div>
                      </div>
                    : <Empty></Empty>
               }

  </Modal>
</div>
    )
  }
}
