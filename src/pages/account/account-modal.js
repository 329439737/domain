import { Component } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import PropTypes from 'prop-types'

class accountModal extends Component {
  static propTypes={
    type: PropTypes.string,
    onCancel: PropTypes.func,
    rowinfo: PropTypes.object
  }

  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
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

           <Form.Item label='代理商'>
               {
                  getFieldDecorator('receiver', {
                    initialValue: rowinfo.name || '',
                    rules: [
                      { required: true, message: '请填写代理商名' }
                    ]

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='登录账号'>
               {
                  getFieldDecorator('loginnum', {
                    rules: [
                      { required: true, message: '请填登录账号' }
                    ]

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='初始密码'>
               {
                  getFieldDecorator('password', {
                    rules: [
                      { required: true, message: '请填初始密码' }
                    ]

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='提现银行(选填)'>
               {
                  getFieldDecorator('password1', {

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='收款账号行(选填)'>
               {
                  getFieldDecorator('password2', {

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='收款人(选填)'>
               {
                  getFieldDecorator('password3', {

                  })(
                    <Input autoComplete='off' />
                  )
                }
           </Form.Item>

           <Form.Item label='备注'>
               {
                  getFieldDecorator('password4', {

                  })(
                    <Input.TextArea autoComplete='off' />
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
