import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $lodash from 'lodash'
import { Form, Col } from 'antd'
import Valids from './../../assets/unit/filter'
import HockFormComponent from './form-component.jsx'

import styles from './tool.module.scss'

class Forms extends Component {
  static defaultProps = {
    horizontal: {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    }
  }

  renderForm = () => {
    // const formItemLayout = {
    //   labelCol: { span: 4 },
    //   wrapperCol: { span: 18 }
    // }
    const { getFieldDecorator, getFieldValue } = this.props.form
    const { dataSource } = this.props

    return dataSource.map((item, i) => {
      let num = 0
      let ruleValid = []
      // 联动关系校验
      if (item.linkageRule) {
        item.linkageRule.forEach(t => {
          if (getFieldValue(t.name) === t.value) {
            num += 1
          }
        })
      }
      // 是否满足所有联动关系校验，满足则显示组件
      if (num === $lodash.get(item, 'linkageRule', []).length) {
        const addValid = Valids[item.validType]
        // 是否存在自定义规则，存在则合并
        if (addValid) {
          ruleValid = [...$lodash.get(item, 'rules.rules', []), addValid]
        } else {
          ruleValid = [...$lodash.get(item, 'rules.rules', [])]
        }
        return (
          <Col span={6} key={`toolcol${i}`} className={`${styles.searchCol}`}>
            <Form.Item style={{ marginBottom: '10px' }}
              {...item.itemParams}
            >
              {getFieldDecorator(item.name, { ...item.rules, rules: ruleValid })(
                this.typeData[item.formType + 'User'](item)
              )}
            </Form.Item>
          </Col>

        )
      }

      return null
    })
  }

  render () {
    return <React.Fragment>{this.renderForm()}</React.Fragment>
  }
}

Forms.propTypes = {
  form: PropTypes.object,
  layout: PropTypes.string,
  dataSource: PropTypes.array
}

export default HockFormComponent(Forms)
