import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'
import PropTypes from 'prop-types'
class editModal extends Component {
  static propTypes={
    onCancel: PropTypes.func,
    type: PropTypes.string,
    btnonOK: PropTypes.func,
    rowdetail: PropTypes.object
  }

  // 确认添加
  handleOk=() => {
    const { type, rowdetail } = this.props
    this.props.form.validateFields((err, value) => {
      if (!err) {
        let param = {
          roleName: value.roleName,
          roleDesc: value.roleDesc
        }
        if (type !== 'add') {
          param.id = rowdetail.id
        }
        this.props.btnonOK(param)
      }
    })
  }

  SetonKeyUp = e => {
    if (e.keyCode === 13) {
      this.handleOk()
    }
  }

  render () {
    const { type, rowdetail } = this.props
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 }
    }
    return (
      <div>
           <Modal
          title={type === 'add' ? '添加角色' : '编辑角色'}
          visible
           onOk={() => { this.handleOk() }}
          onCancel={this.props.onCancel}
         >
             <Form {...formItemLayout}>

               <Form.Item label='角色名称'>
               {
                  getFieldDecorator('roleName', {
                    initialValue: rowdetail.roleName || '',
                    rules: [
                      { required: true, message: '请填写用户姓名' }
                    ]

                  })(
                    <Input autoComplete='off' onKeyUp={(e) => { this.SetonKeyUp(e) }} />
                  )
                }
               </Form.Item>

               <Form.Item label='角色描述'>
               {
                  getFieldDecorator('roleDesc', {
                    initialValue: rowdetail.roleDesc || ''

                  })(
                    <Input autoComplete='off' onKeyUp={(e) => { this.SetonKeyUp(e) }} />
                  )
                }
               </Form.Item>

             </Form>
        </Modal>
      </div>
    )
  }
}

const newform = Form.create()(editModal)

export default newform
