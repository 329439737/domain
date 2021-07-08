import React, { Component } from 'react'
import { Card, Button, Table, Divider, Popconfirm, message } from 'antd'
import Searchform from './../../components/search-form/index'
import EdituserModal from './edituser-modal'
export default class index extends Component {
  state={
    pages: { total: 0, pageNo: 1, pageSize: 20, options: ['10', '20', '50', '100', '200'] },
    editmodal: false,
    edittype: '',
    rowrecord: {},
    tableData: [
      { name: '大哥哥' }
    ],
    searchData: [
      {
        name: 'merchantName',
        formType: 'Input',
        itemParams: {
          label: '真实姓名'
        },
        cptParams: {
          placeholder: '请输入...',
          autoComplete: 'off'
        }
      }
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
      title: '真实姓名',
      key: 'euorder-1',
      align: 'center',
      width: 150,
      dataIndex: 'name'
    },
    {
      title: '用户名',
      key: 'euorder-2',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '密码',
      key: 'euorder-3',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '创建时间',
      key: 'euorder-4',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '操作',
      key: 'euorder-5',
      render: (text, record, index) => (

           <div>
              <a onClick={() => { this.edituser(record, 'edit') }}>编辑</a>  <Divider type="vertical" />
              <Popconfirm
               title='确定重置密码吗'
                onConfirm={() => { this.resetpasseord(record) }}
                okText='确定'
                cancelText='取消'
               >
                 <a>重置密码</a>
              </Popconfirm>

           </div>

      )
    }
  ]

  // 查询
  handleSearch =(value) => {
    console.log(value)
  }

  // 确认用户编辑
  onOk = () => {
    console.log('ok')
  }

  // 重置密码
  resetpasseord=(record) => {
    message.success('重置成功')
  }

  // 添加用户
  AddUser = (type) => {
    this.setState({
      editmodal: true,
      edittype: type
    })
  }

  // 编辑用户
  edituser =(record, type) => {
    this.setState({
      editmodal: true,
      edittype: type,
      rowrecord: record

    })
  }

  // 关闭添加/编辑用户弹窗
   onCancel = () => {
     this.setState({
       editmodal: false,
       rowrecord: {},
       edittype: ''
     })
   }

   render () {
     const { tableData, pages, searchData, editmodal, edittype, rowrecord = {} } = this.state

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
      <div>
        <Card>
              <Searchform {...this.props}
              dataSource={searchData}
              handleSubmit={(obj) => this.handleSearch(obj)}
            />
        </Card>

        <Card style={{ marginTop: '15px' }}>
          <Button type='primary' style={{ marginBottom: '10px' }} onClick={() => { this.AddUser('add') }}>添加用户</Button>

          <Table bordered rowKey={(record, index) => `${record.name}-index`}
                pagination={pagination}
                columns={this.columns}
                dataSource={tableData}
              />
        </Card>

                 {
                   editmodal
                     ? <EdituserModal
                      onCancel={() => { this.onCancel() }}
                      edittype={edittype}
                      rowrecord={rowrecord}
                      onOk={(param) => { this.onOk(param) }}
                      ></EdituserModal>
                     : null
                 }
      </div>
     )
   }
}
