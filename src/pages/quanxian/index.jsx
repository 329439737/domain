import React, { Component } from 'react'
import Api from './../../assets/api/online'
import { Card, Table, message } from 'antd'
class index extends Component {
  state={
    datalist: []
  }

  columns = [
    {
      title: '权限 ID  ',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      dataIndex: 'id'
    },

    {
      title: '权限说明',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      dataIndex: 'authName'
    },
    {
      title: '权限层级',
      key: 'bindList-3',
      width: 44,
      align: 'center',
      dataIndex: 'level'
    },
    {
      title: '对应访问路径 ',
      key: 'bindList-4',
      width: 44,
      align: 'center',
      dataIndex: 'path'
    },
    {
      title: '权限父 ID',
      key: 'bindList-5',
      width: 44,
      align: 'center',
      dataIndex: 'pid'
    }
  ]

  componentDidMount () {
    const { listlist } = this.state
    this.getquxainlist()
  }

  // 获取权限列表
  getquxainlist =() => {
    Api.getquxainlist({ type: 'list' }).then((res) => {
      const { meta } = res
      if (meta.status === 200) {
        this.setState({
          datalist: res.data
        })
      } else {
        message.error(meta.msg)
      }
    })
  }

  render () {
    const { datalist } = this.state
    return (
      <>

    <Card>

         <Table rowKey={(record, index) => index }
          columns={this.columns}
          dataSource={datalist}
          childrenColumnName='aa'
          pagination={false}

        />
         </Card>
      </>
    )
  }
}

export default index
