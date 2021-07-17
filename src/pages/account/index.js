import { useState, useEffect } from 'react'
import { Card, Button, Table, Divider, Input, InputNumber } from 'antd'
import Searchform from './../../components/search-form/index'
import Api from './../../assets/api/index'
import moment from 'moment'
import AccoutModal from './account-modal'

const index = () => {
  const [searchData] = useState([
    {
      name: 'domainno',
      formType: 'Input',
      itemParams: {
        label: '代理商名称'
      }
    }
  ])

  const handleSearch = (obj) => {
    console.log(obj)
  }

  const [data, SetInit] = useState({ list: [] })
  const [columns] = useState([
    {
      title: '代理商名称',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '创建时间',
      key: 'bindList-1',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
        <div>{moment(record.ctime).format('YYYY-MM-DD hh:mm:ss')}</div>
      )
    },
    {
      title: '添加人',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '提现银行',
      key: 'bindList-3',
      width: 44,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '提现账号',
      key: 'bindList-4',
      width: 44,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '收款人',
      key: 'bindList-5',
      width: 44,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '备注',
      key: 'bindList-6',
      width: 44,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '操作',
      key: 'bindList-7',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
            <div><a onClick={() => accountedit('edit', record) }>编辑</a> <Divider type='vertical'></Divider> <a onClick={() => zhmassage()}>账号管理</a></div>
      )
    }
  ])

  useEffect(() => {
    DataLiat()
  }, [])

  // 数据初始化
  const DataLiat = () => {
    Api.DomainList({}).then((res) => {
      SetInit({ list: res.message })
    })
  }

  // 客户添加、编辑操作
  const [editType, SetType] = useState({ type: false, title: '', rowinfo: {} }) // 客户编辑,添加类型判断
  // 添加操作
  const accountAdd = (add) => {
    SetType({ type: true, title: add, rowinfo: {} })
  }

  // 编辑操作
  const accountedit = (edit, record) => {
    SetType({ type: true, title: edit, rowinfo: record })
  }
  // 账号管理
  const zhmassage = () => {
    console.log('11')
  }
  // 取消弹框
  const onCancel = () => {
    SetType({ type: false, title: '', rowinfo: {} })
  }

  return (
      <>

        <Card style={{ marginTop: '30px' }}>
              <Searchform
              dataSource={searchData}
              handleSubmit={(obj) => handleSearch(obj)}
            />
         </Card>

         <Card style={{ marginTop: '10px' }}>
           <div style={{ marginBottom: '10PX' }}>
             <Button type='primary' icon="add" style={{ marginRight: '10px' }} onClick={() => { accountAdd('add') }}>新增</Button>
             <Button type="primary" icon="download">导出EXCEL</Button>
           </div>

           <div>
           <Table rowKey='id'
                  columns={columns}
                  dataSource={data.list}
                  ></Table>
           </div>
         </Card>

         {
           editType.type
             ? <AccoutModal
                type={editType.title}
                rowinfo={editType.rowinfo}
                onCancel={() => { onCancel() }}></AccoutModal>

             : null
         }
      </>
  )
}

export default index
