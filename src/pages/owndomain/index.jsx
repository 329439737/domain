import React, { Component } from 'react'
import { Card, message, Button, Table, Divider } from 'antd'
import Searchform from './../../components/search-form/index'
import { regin } from './../../assets/unit/munit'
import styles from './index.module.scss'
import PropTypes from 'prop-types'

export default class index extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  state={
    pages: { total: 0, pageNo: 1, pageSize: 20, options: ['10', '20', '50', '100', '200'] },
    selectedkeys: [],
    tableData: [
      { name: '大哥哥' },
      { name: '大哥哥1' }
    ],
    searchData: [
      {
        name: 'merchantName',
        formType: 'Input',
        itemParams: {
          label: '公司名称'
        },
        cptParams: {
          placeholder: '请输入...',
          autoComplete: 'off'
        }
      },
      {
        name: 'DomainName',
        formType: 'Input',
        itemParams: {
          label: '域名'
        },
        cptParams: {
          placeholder: '请输入...',
          autoComplete: 'off'
        }
      },
      {
        name: 'zminaId',
        formType: 'Select',
        itemParams: {
          label: '注册平台'
        },
        cptParams: {
          placeholder: '请选择...',
          showSearch: true,
          optionFilterProp: 'children'
        },
        options: [
          ...regin
        ],
        optionValue: ['status', 'name']
      },
      {
        name: 'dminaId',
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

        ],
        optionValue: ['status', 'name']
      },
      {
        name: 'times',
        formType: 'RangePicker',
        itemParams: {
          label: '创建时间'
        }
      },
      {
        name: 'zminaId',
        formType: 'Select',
        itemParams: {
          label: '创建人'
        },
        cptParams: {
          placeholder: '请选择...',
          showSearch: true,
          optionFilterProp: 'children'
        },
        options: [

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
             <a onClick={() => { this.detailinfo(record) }}>编辑</a><Divider type="vertical" />
              <a onClick={() => { this.editdomain(record, 'edit') }}>续费</a>
           </div>

      )
    }
  ]

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

   // 编辑
   detailinfo = (reocord) => {
     this.props.history.push({ pathname: '/admin/addowndoamin', statee: reocord })
   }

   render () {
     const { searchData, pages, tableData, selectedkeys } = this.state
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
               <div className={styles.divmain}>
                 <div className={styles.div_left}>
                   <Button type='primary'>导出</Button>
                   <Button type='primary'>批量域名续费</Button>
                 </div>
                 <div>
                    <Button className={styles.divrightbtn}></Button>
                    <span>证书过期时间(15预警)</span>
                 </div>
               </div>
               <div style={{ marginTop: '15px' }}>
                  <Table bordered rowKey={(record, index) => `${record.name}-${index}`}
                rowClassName={(record) => (
                  record.name === '1' ? '' : styles.red
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
      </div>
     )
   }
}
