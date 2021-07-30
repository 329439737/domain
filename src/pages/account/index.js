import React, { Component } from 'react'
import { Card, Button, Table, Divider, Tag, message } from 'antd'
import Searchform from '../../components/search-form/index'
import Api from '../../assets/api/online'
import moment from 'moment'
import AccoutModal from './account-modal'

export default class index extends Component {
  state={
    pages: { total: 0, pageNo: 1, pageSize: 20, options: ['10', '20', '50', '100', '200'] },
    list: [],
    type: false,
    title: '',
    rowinfo: {},
    searchData: [
      {
        name: 'id',
        formType: 'Input',
        itemParams: {
          label: '用户id'
        }
      }
    ]
  }

  columns = [
    {
      title: '用户id',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      dataIndex: 'id'
    },

    {
      title: '用户姓名',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      dataIndex: 'username'
    },
    {
      title: '手机号',
      key: 'bindList-3',
      width: 44,
      align: 'center',
      dataIndex: 'mobile'
    },
    {
      title: '邮箱',
      key: 'bindList-4',
      width: 44,
      align: 'center',
      dataIndex: 'email'
    },
    {
      title: '权限',
      key: 'bindList-5',
      width: 44,
      align: 'center',
      dataIndex: 'role_name'
    },
    {
      title: '当前用户状态',
      key: 'bindList-6',
      width: 44,
      align: 'center',
      dataIndex: 'mg_state',
      render: (text, record, index) => (
       <div> <Tag color={record.mg_state ? 'magenta' : 'volcano'}>{record.mg_state ? '在线' : '离线'}</Tag></div>
      )
    },
    {
      title: '创建时间',
      key: 'bindList-1',
      width: 44,
      align: 'center',
      render: (text, record, index) => (

        <div>{moment(record.create_time).format('YYYY-MM-DD HH:mm:ss')}</div>
      )
    },
    {
      title: '操作',
      key: 'bindList-7',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
            <div><a onClick={() => this.accountedit('edit', record) }>编辑</a> <Divider type='vertical'></Divider> <a onClick={() => this.userdel(record.id)}>删除</a></div>
      )
    }
  ]

  componentDidMount () {
    this.DataLiat()
  }

    // 数据初始化
    DataLiat = () => {
      const { pages } = this.state
      let param = {
        query: 1,
        pagenum: pages.pageNo,
        pagesize: pages.pageSize
      }
      Api.userlist(param).then((res) => {
        const { meta } = res
        if (+meta.status === 200) {
          this.setState({
            list: res.data.users
          })
        } else {
          message.error(meta.msg)
        }
      })
    }

    // 添加操作
   accountAdd = (add) => {
     this.setState({
       type: true,
       title: add,
       rowinfo: {}
     })
   }

   // 编辑操作
  accountedit = (edit, record) => {
    this.setState({
      type: true,
      title: edit,
      rowinfo: record
    })
  }

  // 客户删除
  userdel = (id) => {
    Api.userdel({ id: id }).then((res) => {
      const { meta } = res
      if (+meta.status === 200) {
        message.success(meta.msg)
        this.DataLiat()
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 取消弹框
  onCancel = () => {
    this.setState({
      type: false,
      title: '',
      rowinfo: {}
    })
  }

  // 用户添加
  useradd = (param) => {
    Api.useradd(param).then((res) => {
      const { meta } = res
      if (+meta.status === 201) {
        message.success(meta.msg)
        this.DataLiat()
        this.onCancel()
      } else {
        message.error(meta.msg)
      }
    })
  }

    // 客户修改
    userupdate = (param) => {
      Api.userupdate(param).then((res) => {
        const { meta } = res
        if (+meta.status === 200) {
          message.success(meta.msg)
          this.DataLiat()
          this.onCancel()
        } else {
          message.error(meta.msg)
        }
      })
    }

    // 翻页
  pageChange = (page, pageSize) => {
    const { pages } = this.state
    this.setState({
      pages: {
        ...pages,
        pageNo: page
      }
    }, () => {
      this.DataLiat()
    })
  }

  // 改变每页条数
  pageSizeChange = (current, size) => {
    const { pages } = this.state

    this.setState({
      pages: {
        ...pages,
        pageNo: 1,
        pageSize: size
      }
    }, () => {
      this.DataLiat()
    })
  }

  // 点击搜索
  handleSearch = (search = {}) => {
    const { pages } = this.state

    this.setState({
      pages: {
        ...pages,
        pageNo: 1,
        pageSize: 20
      },
      query: search || {}
    }, () => this.DataLiat())
  }

  render () {
    const { searchData, list = [], pages, type = false, title, rowinfo } = this.state

    const pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      total: pages.total,
      showTotal: (total) => { return `共 ${total} 条` },
      current: pages.pageNo,
      pageSize: pages.pageSize,
      pageSizeOptions: pages.options,
      onChange: this.pageChange,
      onShowSizeChange: this.pageSizeChange
    }
    return (
      <>
         <Card style={{ marginTop: '30px' }}>
              <Searchform
              dataSource={searchData}
              handleSubmit={(obj) => this.handleSearch(obj)}
            />
         </Card>

         <Card style={{ marginTop: '10px' }}>
           <div style={{ marginBottom: '10PX' }}>
             <Button type='primary' icon="add" style={{ marginRight: '10px' }} onClick={() => { this.accountAdd('add') }}>新增</Button>
             <Button type="primary" icon="download">导出EXCEL</Button>
           </div>

           <div>
           <Table rowKey='id'
                   pagination={pagination}
                  columns={this.columns}
                  dataSource={list}
                  ></Table>
           </div>
         </Card>

         {
           type
             ? <AccoutModal
                type={title}
                rowinfo={rowinfo}
                onCancel={() => { this.onCancel() }}
                useradd={(param) => { this.useradd(param) }}
                userupdate={(param) => { this.userupdate(param) }}
                ></AccoutModal>
             : null
         }
    </>
    )
  }
}
