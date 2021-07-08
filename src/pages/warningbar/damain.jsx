import React, { Component } from 'react'
import { Table } from 'antd'

export default class damain extends Component {
  state={
    pages: { total: 0, pageNo: 1, pageSize: 20, options: ['10', '20', '50', '100', '200'] },
    tableData: [
      { name: '大哥哥' },
      { name: '大哥哥' },
      { name: '大哥哥' }

    ]
  }

  columns=[
    {
      title: '序号',
      key: 'euorder-0',
      width: 80,
      render: (text, record, index) => `${index + 1}`
    },
    {
      title: '公司名称',
      key: 'euorder-1',
      align: 'center',
      width: 150,
      dataIndex: 'name'
    },
    {
      title: '域名',
      key: 'euorder-2',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '购买日期',
      key: 'euorder-3',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '最后续费时间',
      key: 'euorder-4',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '操作',
      key: 'euorder-5',
      render: (text, record, index) => (

           <div>
              <a onClick={() => { this.edituser(record, 'edit') }}>域名续费</a>

           </div>

      )
    }
  ]

  render () {
    const { pages, tableData } = this.state
    const pagination = {
      showSizeChanger: true,
      total: pages.total,
      showTotal: (total) => { return `共 ${total} 条` },
      current: pages.pageNo,
      pageSize: pages.pageSize,
      pageSizeOptions: pages.options,
      onChange: this.pageChange,
      onShowSizeChange: this.pageSizeChange
    }
    return (
      <Table bordered rowKey={(record, index) => `${record.name}-${index}`}
      pagination={pagination}
      columns={this.columns}
      dataSource={tableData}
    />
    )
  }
}
