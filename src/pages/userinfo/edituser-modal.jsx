import React, { Component } from 'react'
import { Modal, Form, Input, Icon, Select } from 'antd'
import PropTypes from 'prop-types'
import { repeatname } from './../../assets/unit/munit'
const Option = Select.Option
const Options = [
  { id: 1, name: '市场' },
  { id: 2, name: '运维' }
]

class EdituserModal extends Component {
  static propTypes={
    onCancel: PropTypes.func,
    edittype: PropTypes.string,
    form: PropTypes.object,
    rowrecord: PropTypes.object,
    onOk: PropTypes.func
  }

  // 确认
  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render () {
    const { edittype, rowrecord = {} } = this.props
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    }
    return (

   <div>
      <Modal
          title={edittype === 'add' ? '添加用户' : '编辑用户'} width={500}
          visible
          onOk={() => { this.handleOk() }}
          onCancel={this.props.onCancel}
        >
         <Form {...formItemLayout}>
           <Form.Item label='真实姓名'>
              {
                getFieldDecorator('zname', {
                  initialValue: rowrecord.name || '',
                  rules: [
                    { required: true, message: '请输入真实姓名!' },
                    {
                      validator (rule, value, callback) {
                        if (value && repeatname(value) === 0) {
                        /* eslint-disable */
                        callback('用户名重复')
                        /* eslint-enable */
                        } else {
                          callback()
                        }
                      }
                    }
                  ]
                })(
                  <Input placeholder="请输入..."></Input>
                )
              }
           </Form.Item>

           <Form.Item label='用户名'>
              {
                getFieldDecorator('name', {
                  initialValue: rowrecord.name || '',
                  rules: [
                    { required: true, message: '请输入用户名!' },
                    {
                      validator (rule, value, callback) {
                        if (value && repeatname(value) === 0) {
                        /* eslint-disable */
                        callback('用户名重复')
                        /* eslint-enable */
                        } else {
                          callback()
                        }
                      }
                    }
                  ]
                })(
                  <Input placeholder="请输入..."></Input>
                )
              }
           </Form.Item>

           <Form.Item label='密码'>
              {
                getFieldDecorator('password', {
                  initialValue: rowrecord.name || '',
                  rules: [
                    { required: true, message: '请输入密码!' }
                  ]
                })(
                  <Input.Password placeholder="请输入..." prefix={<Icon type='lock' style={{ color: 'rgba(0, 0, 0, 0.3)' }} />}>
                  </Input.Password>
                )
              }
           </Form.Item>

           <Form.Item label='用户权限'>
              {
                getFieldDecorator('userrights', {
                  initialValue: rowrecord.name || '市场',
                  rules: [
                    { required: true, message: '请选择权限!' }
                  ]
                })(
                  <Select>
                       {
                         Options.map((item, i) => (
                           <Option value={item.id} key={i}>{item.name}</Option>
                         ))
                       }
                  </Select>
                )
              }
           </Form.Item>
         </Form>
        </Modal>
   </div>
    )
  }
}
const UserInfo = Form.create()(EdituserModal)
export default UserInfo
