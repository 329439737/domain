import React, { Component } from 'react'
import { Form, Modal, Input, Select, Button } from 'antd'
import PropTypes from 'prop-types'
import { admainz } from './../../assets/unit/munit'
const Option = Select.Option
class editmodal extends Component {
  static propTypes ={
    from: PropTypes.object,
    onCancel: PropTypes.func,
    type: PropTypes.string
  }

  // 确认
  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  /// 下拉框选择
  SelonChange=(e) => {
    console.log(e)
  }

  render () {
    const { rowrecord = {}, type = '' } = this.props
    const { getFieldDecorator } = this.props.form

    const selectAfter = (
      <Select style={{ width: 90 }} onChange={(e) => { this.SelonChange(e) }} defaultValue={rowrecord.name || '.com'}>
        {
            admainz.map((item) => (
            <Option key={item.id} value={item.id}>{item.name}</Option>
            ))
             }
      </Select>
    )

    return (
      <div>
           <Modal width={600}
           title={type === 'add' ? '添加域名' : '编辑域名'}
           visible
           onOk={() => { this.handleOk() }}
           onCancel={ this.props.onCancel}
        >
             <Form>
               <Form.Item label='公司名称' style={{ display: 'flex' }}>
              {
                getFieldDecorator('zname', {
                  initialValue: rowrecord.name || '',
                  rules: [
                    { required: true, message: '请输入公司名称!' }

                  ]
                })(
                  <Input placeholder="请输入..." style={{ width: '380px' }}></Input>
                )
              }
                </Form.Item>

                <Form.Item label='域名' style={{ display: 'flex' }}>
              {
                getFieldDecorator('doname', {
                  initialValue: rowrecord.name || '',
                  rules: [
                    { required: true, message: '请输入域名!' }

                  ]
                })(
                  <div style={{ display: 'flex' }}>
                     <Input placeholder="请输入..." style={{ width: '320px' }} addonAfter={selectAfter}></Input>
                     <Button type='primary' style={{ marginLeft: '10px' }}>校验是否存在</Button>
                  </div>

                )
              }
                </Form.Item>
              </Form>
        </Modal>
      </div>
    )
  }
}
const FormInfo = Form.create()(editmodal)
export default FormInfo
