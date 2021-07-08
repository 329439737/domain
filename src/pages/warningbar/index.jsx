import React, { Component } from 'react'
import { Row, Col, Card, Button, Table } from 'antd'
import TreeList from './tree'
import Domain from './damain'
import Certificate from './certificate'

export default class index extends Component {
  state={
    type: '10'
  }

  // 类型
  gettype=(type) => {
    console.log(type)
    this.setState({
      type: type
    })
  }

  render () {
    const { type } = this.state

    return (
      <div>
        <Row gutter={20} style={{ display: 'flex' }}>
          <Card >
             <Col span={4}>
              <TreeList gettype={(type) => { this.gettype(type) }}></TreeList>
              </Col>
          </Card>

          <Col span={16}>
            <Card >
              <Button type='primary' style={{ marginBottom: '15px' }}>导出</Button>
                    {
                    type === '10' ? <Domain></Domain> : <Certificate></Certificate>
                     }
            </Card>
          </Col>

      </Row>
      </div>
    )
  }
}
