import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col, Button } from 'antd'
import ToolForm from '@/components/tool-form/index'

import styles from '@/components/tool-form/tool.module.scss'

class SearchForm extends Component {
  handleSearch = e => {
    e.preventDefault()
    this.props.handleSubmit(this.props.form.getFieldsValue())
  }

  cleanForm = () => {
    this.props.form.resetFields()
    this.props.handleSubmit({})
  }

  render () {
    const { dataSource = [] } = this.props
    const _offset = (3 - (dataSource.length % 4)) * 6

    return (
      <Form onSubmit={this.handleSearch}>
        <Row gutter={24} className={`${styles.searchRow}`}>
          <ToolForm {...this.props} />

          <Col span={6} offset={_offset} style={{ textAlign: 'right' }}>
            <Button type='primary'
              style={{ marginLeft: '10px' }}
              onClick={(obj) => this.handleSearch(obj)}
            >
              搜索
            </Button>
            <Button style={{ marginLeft: '10px' }}
              onClick={this.cleanForm}
            >重置</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

SearchForm.propTypes = {
  form: PropTypes.object,
  dataSource: PropTypes.array,
  handleSubmit: PropTypes.func
}

export default Form.create()(SearchForm)
