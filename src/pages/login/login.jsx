import React, { Component } from 'react'
import { Row, Form, Input, Button, Icon, message } from 'antd'
import PropTypes from 'prop-types'
import style from './login.module.scss'
import { SetSeeion } from './../../assets/unit/seesion.js'
import Api from './../../assets/api/online'

import Chooise from './../../components/selectwindow/index'/// 选择取消
const FormItem = Form.Item
class LoginForm extends Component {
  static propTypes={
    form: PropTypes.object
  }

  state={
    chooisemodal: false,
    data: []
  }

  btnFinish = (e) => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let param = {
          username: values.loginName,
          password: values.password
        }
        Api.login(param).then(res => {
          const { meta, data } = res
          if (+(meta.status) === 200) {
            message.success(meta.msg)
            this.setState({
              data
            })
            this.onopen()
          } else {
            message.error(meta.msg)
          }
        })
      }
    })
  }

  // 弹窗选择框
onopen=() => {
  this.setState({
    chooisemodal: true
  })
}

// 关闭弹窗
onCancel=() => {
  this.setState({
    chooisemodal: false
  })
}

// 确认
  onOk = (value) => {
    const { data } = this.state
    let newsesion = Object.assign({}, data, { value })
    SetSeeion('token', newsesion)
    this.onCancel()
    this.props.history.push('/admin/home')
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { chooisemodal = false, data = [] } = this.state

    return (
      <div className={style.main}>
       <section className={style.section}>
         <Row className={style.antd_row}>
           <h3 className={style.title_h3}>CRM管理平台V1.0</h3>
          </Row>

          <Row>
            <div className={style.login_form}>
             <Form>
               <FormItem>
                     {
                    getFieldDecorator('loginName', {
                      rules: [
                        { required: true, message: '请输入用户名!' }
                      ]
                    })(
                      <Input placeholder='请输入用户名'
                        style={{ height: '44px' }}
                        prefix={<Icon type='user' style={{ color: 'rgba(0, 0, 0, 0.3)' }} />}
                      />
                    )
                  }
                </FormItem>

                <FormItem>
                  {
                    getFieldDecorator('password', {
                      rules: [
                        { required: true, message: '请输入密码!' }
                      ]
                    })(
                      <Input.Password
                        placeholder='请输入密码'
                        style={{ height: '44px' }}
                        prefix={<Icon type='lock' style={{ color: 'rgba(0, 0, 0, 0.3)' }} />}
                      />
                    )
                  }
                </FormItem>

               <FormItem>
                  <Button type='primary' onClick={(e) => { this.btnFinish(e) }} className={style.btn}>login</Button>
                </FormItem>

              </Form>
            </div>
          </Row>
        </section>

        {
          chooisemodal
            ? <Chooise onOk={(value) => { this.onOk(value) }} onCancel={() => { this.onCancel() }}></Chooise>
            : null
        }
     </div>
    )
  }
}
const Login = Form.create()(LoginForm)
export default (Login)
