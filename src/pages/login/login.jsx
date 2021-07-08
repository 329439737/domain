import React, { Component } from 'react'
import { Row, Form, Input, Button, Icon } from 'antd'
import PropTypes from 'prop-types'
import style from './login.module.scss'
import { SetSeeion } from './../../assets/unit/seesion.js'
const FormItem = Form.Item
class LoginForm extends Component {
  static propTypes={
    form: PropTypes.object
  }

  btnFinish = (e) => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        SetSeeion('token', values.loginName)
        this.props.history.push({ pathname: '/admin/home' })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={style.main}>
       <section className={style.section}>
         <Row className={style.antd_row}>
           <h3 className={style.title_h3}>域名管理平台V1.0</h3>
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
     </div>
    )
  }
}
const Login = Form.create()(LoginForm)
export default (Login)
