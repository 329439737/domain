import { Component } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import PropTypes from 'prop-types'

class accountModal extends Component {
  static propTypes={
    type: PropTypes.string,
    onCancel: PropTypes.func,
    rowinfo: PropTypes.object,
    useradd: PropTypes.func,
    userupdate: PropTypes.func
  }

  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let param = {}
        if (this.props.type === 'add') {
          param.username = values.username
          param.password = values.password
          param.email = values.email
          param.mobile = values.mobile
        } else {
          param.id = this.props.rowinfo.id
          param.email = values.email
          param.mobile = values.mobile
        }

        if (this.props.type === 'add') { this.props.useradd(param) } else {
          this.props.userupdate(param)
        }
      }
    })
  }

  render () {
    const { rowinfo } = this.props
    const { type } = this.props
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    }
    return (

     <div>
      <Modal
         title={type === 'add' ? '客户添加' : '客户编辑'}
          visible
          onOk={() => { this.handleOk() }}
           onCancel={this.props.onCancel}
        >
          <Form {...formItemLayout}>

           <Form.Item label='用户姓名'>
               {
                  getFieldDecorator('username', {
                    initialValue: rowinfo.username || '',
                    rules: [
                      { required: true, message: '请填写用户姓名' }
                    ]

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='用户密码'>
               {
                  getFieldDecorator('password', {
                    initialValue: rowinfo.password || '666666',
                    rules: [
                      { required: true, message: '请填用户密码' }
                    ]

                  })(
                    <Input.Password autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='邮箱'>
               {
                  getFieldDecorator('email', {
                    initialValue: rowinfo.email || ''
                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='手机号'>
               {
                  getFieldDecorator('mobile', {
                    initialValue: rowinfo.mobile || ''

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

         </Form>
        </Modal>
     </div>
    )
  }
}
const newform = Form.create()(accountModal)
export default newform
