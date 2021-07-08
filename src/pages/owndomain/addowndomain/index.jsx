import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Card, Button, Icon, Input, Select, Row } from 'antd'
import styles from './index.module.scss'

class Index extends Component {
  static propTypes = {
    from: PropTypes.object
  }

  btnFinish = (e) => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)

        // this.props.history.push({ pathname: '/admin/owndoamin' })
      }
    })
  }

  // btnback
  btnback = () => {
    this.props.history.push({ pathname: '/admin/owndoamin' })
  }

  render () {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 8 }
    }
    return (

      <div>
        <Card>
          <Button icon="double-left" onClick={() => { this.btnback() }}>返回列表</Button>
        </Card>

        <Card style={{ marginTop: '15px' }}>
          <div className={styles.maindiv}>
            <Form {...formItemLayout}>
            <Form.Item label="公司名称">
                     {
                    getFieldDecorator('completeName', {
                      rules: [
                        { required: true, message: '请输入公司名称!' }
                      ]
                    })(
                      <Input placeholder='请输入...'

                      />
                    )
                  }
                </Form.Item>

                <Form.Item label="域名">
                     {
                    getFieldDecorator('domainName', {
                      rules: [
                        { required: true, message: '请输入域名!' }
                      ]
                    })(
                      <Input placeholder='请输入...'

                      />
                    )
                  }
                </Form.Item>

                <Form.Item label="注册平台">
                     {
                    getFieldDecorator('pt', {
                      rules: [
                        { required: true, message: '请输入域名!' }
                      ]
                    })(
                      <Select placeholder='请选择...' >
                            <Select.Option value={1}>11</Select.Option>
                      </Select>

                    )
                  }
                </Form.Item>

                <Form.Item label="注册平台账号">
                     {
                    getFieldDecorator('ptno', {
                      rules: [
                        { required: true, message: '请输入注册平台账号!' }
                      ]
                    })(
                      <Input placeholder='请输入...'

                      />
                    )
                  }
                </Form.Item>

                <Form.Item label="注册平台密码">
                     {
                    getFieldDecorator('ptpwassword', {
                      rules: [
                        { required: true, message: '请输入注册平台密码!' }
                      ]
                    })(
                      <Input placeholder='请输入...'

                      />
                    )
                  }
                </Form.Item>

                <Form.Item label="证书过期时间(天)">
                     {
                    getFieldDecorator('time', {
                      rules: [
                        { required: true, message: '请输入证书过期时间!' }
                      ]
                    })(
                      <Input placeholder='请输入...'

                      />
                    )
                  }
                </Form.Item>

                <Form.Item label="备案号">
                     {
                    getFieldDecorator('no', {
                      rules: [
                        { required: true, message: '请输入备案号!' }
                      ]
                    })(
                      <Input placeholder='请输入...'

                      />
                    )
                  }
                </Form.Item>

                <Row style={{ marginTop: '20px' }}>
                  <div style={{ width: '800px', float: 'right' }}>
                      <Button>取消</Button>
                      <Button type='primary' style={{ marginLeft: '15px' }} onClick={() => { this.btnFinish() }}>保存</Button>
                  </div>

                </Row>
            </Form>
          </div>
        </Card>
      </div>
    )
  }
}
const FormInfo = Form.create()(Index)
export default FormInfo
