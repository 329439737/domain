import React, { Component } from 'react'
import { Card, Button, Table, Divider, Popconfirm } from 'antd'
import Searchform from './../../components/search-form/index'
import Api from './../../assets/api/index'
import { domainstatus } from './../../assets/unit/munit'
import EditModal from './edit-modal'
import DetailModal from './detail-modal'
import ProgressModal from './progress-modal'

import style from './index.module.scss'

export default class index extends Component {
  state={
    pages: { total: 0, pageNo: 1, pageSize: 20, options: ['10', '20', '50', '100', '200'] },
    editmodal: false,
    edittype: '',
    detailmodal: false,
    progressmodal: false,
    rowrecord: {},
    selectedkeys: [],
    tableData: [
      { name: '大哥哥' },
      { name: '大哥哥1' }
    ],
    searchData: [
      {
        name: 'brandId',
        formType: 'Select',
        itemParams: {
          label: '公司名称'
        },
        cptParams: {
          placeholder: '请选择公司',
          showSearch: true,
          optionFilterProp: 'children'
        },
        options: [],
        optionValue: ['id', 'name']
      }, {
        name: 'domainno',
        formType: 'Input',
        itemParams: {
          label: '域名'
        }
      }, {
        name: 'times',
        formType: 'RangePicker',
        itemParams: {
          label: '备案完成时间'
        }
      }, {
        name: 'cre',
        formType: 'Input',
        itemParams: {
          label: '创建人'
        }
      },
      {
        name: 'times',
        formType: 'RangePicker',
        itemParams: {
          label: '创建时间'
        }
      },
      {
        name: 'dominaId',
        formType: 'Select',
        itemParams: {
          label: '域名状态'
        },
        cptParams: {
          placeholder: '请选择...',
          showSearch: true,
          optionFilterProp: 'children'
        },
        options: [
          ...domainstatus
        ],
        optionValue: ['status', 'name']
      }
    ]
  }

  columns=[
    {
      title: '序号',
      key: 'euorder-0',
      width: 70,
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
      width: 150,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '备案号',
      key: 'euorder-3',
      width: 150,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '备案完成时间',
      width: 150,
      key: 'euorder-4',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '创建人',
      key: 'euorder-5',
      width: 150,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '创建完成时间',
      width: 150,
      key: 'euorder-6',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '购买日期',
      width: 150,
      key: 'euorder-7',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '最后续费时间',
      width: 150,
      key: 'euorder-8',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '域名状态',
      width: 150,
      key: 'euorder-9',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '证书过期时间(天)',
      width: 150,
      key: 'euorder-10',
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '操作',
      width: 450,
      key: 'euorder-11',
      render: (text, record, index) => (
           <div>
             <a onClick={() => { this.detailinfo(record) }}>查看详情</a><Divider type="vertical" />
              <a onClick={() => { this.editdomain(record, 'edit') }}>编辑</a><Divider type="vertical" />
              <Popconfirm
               title='确定要购买域名吗'
                onConfirm={() => { this.resetpasseord(record) }}
                okText='确定'
                cancelText='取消'
               >
                 <a>购买域名</a><Divider type="vertical" />
              </Popconfirm>
              <Popconfirm
               title='确定要部署域名吗'
                onConfirm={() => { this.resetpasseord(record) }}
                okText='确定'
                cancelText='取消'
               >
                 <a>域名部署</a><Divider type="vertical" />
              </Popconfirm>
              <Popconfirm
               title='确定要域名续费吗'
                onConfirm={() => { this.resetpasseord(record) }}
                okText='确定'
                cancelText='取消'
               >
                 <a>域名续费</a><Divider type="vertical" />
              </Popconfirm>
              <Popconfirm
               title='确定要域名续费吗'
                onConfirm={() => { this.resetpasseord(record) }}
                okText='确定'
                cancelText='取消'
               >
                 <a>证书续费</a>
              </Popconfirm>
           </div>

      )
    }
  ]

  componentDidMount () {
    this.getcompanyList()
  }

  // 获取公司名称
  getcompanyList =() => {
    let { searchData } = this.state
    Api.DomainList().then((res) => {
      const { message, status } = res
      let _option = [
        { id: '-1', name: '全部' }
      ]
      if (+status === 0) {
        searchData[0].options = _option.concat(message)
      }
      this.setState({
        searchData
      })
    })
  }

  // 选择复选框
  onSelectChange = (keys) => {
    this.setState({
      selectedkeys: keys
    })
  }

   // 查询
   handleSearch=(serach) => {
     console.log(serach)
   }

// 编辑域名
editdomain=(record, type) => {
  this.setState({
    editmodal: true,
    rowrecord: record,
    edittype: type
  })
}

// 查看进度
 btnprogress=() => {
   this.setState({
     progressmodal: true
   })
 }

// 批量购买域名
btnbugdomain=() => {
  const { selectedkeys } = this.state
  console.log(selectedkeys)
}

// 查看详情
 detailinfo=(record) => {
   this.setState({
     detailmodal: true,
     rowrecord: record
   })
 }

// 取消
onCancel=() => {
  this.setState({
    editmodal: false,
    detailmodal: false,
    progressmodal: false,
    rowrecord: {},
    edittype: ''
  })
}

render () {
  const { searchData, pages, tableData, editmodal, edittype, rowrecord = {}, detailmodal = false, selectedkeys = [], progressmodal } = this.state

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

  const rowSelection = {
    selectedRowKeys: selectedkeys,
    onChange: this.onSelectChange
  }
  return (
      <div>
          <Card>
              <Searchform {...this.props}
              dataSource={searchData}
              handleSubmit={(obj) => this.handleSearch(obj)}
            />
        </Card>

        <div style={{ marginTop: '15px' }}>
          <Card>
            <div className={style.divmain}>

            <div className={`${style.div_left}`}>
              <Button type='primary'>导出</Button>
              <Button type='primary' onClick={() => { this.editdomain('', 'add') }}>域名录入</Button>
              <Popconfirm
               title='确定要批量域名续费吗'
                onConfirm={() => { this.resetpasseord() }}
                okText='确定'
                cancelText='取消'
               >
                 <Button type='primary'>批量域名续费</Button>
              </Popconfirm>

              <Popconfirm
               title='确定要批量购买域名吗'
                onConfirm={() => { this.btnbugdomain() }}
                okText='确定'
                cancelText='取消'
               >
                 <Button type='primary'>批量购买域名</Button>
              </Popconfirm>

              <Button type='primary'onClick={() => { this.btnprogress() }}>任务状态</Button>
            </div>

            <div>
            <Button className={style.divrightbtn}></Button>
            <span>证书过期时间(15预警)</span>
            </div>

            </div>

            <div style={{ marginTop: '15px' }}>
            <Table bordered rowKey={(record, index) => `${record.name}-${index}`}
                rowClassName={(record) => (
                  record.name === '1' ? '' : style.red
                )}
                scroll={{ x: 1500 }}
                pagination={pagination}
                columns={this.columns}
                dataSource={tableData}
                rowSelection={rowSelection}
              />
            </div>

          </Card>
        </div>

        {
           editmodal
             ? <EditModal
             onCancel={() => { this.onCancel() }}
             type={edittype}
             rowrecord={rowrecord}
             ></EditModal>
             : null
        }

        {
          detailmodal
            ? <DetailModal
               onCancel={() => { this.onCancel() }}
            ></DetailModal>
            : null
        }

        {
           progressmodal
             ? <ProgressModal
               onCancel={() => { this.onCancel() }}
             ></ProgressModal>
             : null
        }
      </div>
  )
}
}
