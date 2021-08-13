import React, { Component } from 'react'
import Api from './../../assets/api/online'
import { message, Card, Table } from 'antd'

// import style from './index.module.scss'
const type = [
  { id: '0', label: '未支付' },
  { id: '1', label: '支付宝' },
  { id: '2', label: '微信' },
  { id: '3', label: '银行卡' }
]
export default class index extends Component {
  state={
    datalist: []
  }

  columns = [
    {
      title: 'ID ',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      dataIndex: 'order_id'
    },

    {
      title: '用户ID',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      dataIndex: 'user_id'
    },
    {
      title: 'order_number',
      key: 'bindList-3',
      width: 44,
      align: 'center',
      dataIndex: 'order_number'
    },
    {
      title: '订单价格',
      key: 'bindList-4',
      width: 44,
      align: 'center',
      dataIndex: 'order_price'
    },
    {
      title: '支付类型',
      key: 'bindList-5',
      width: 44,
      align: 'center',
      render: (test, record, index) => (
        <div>
          {this.typee(record.order_pay)}
        </div>
      )
    },
    {
      title: '是否发货',
      key: 'bindList-6',
      width: 44,
      align: 'center',
      dataIndex: 'is_send'
    },
    {
      title: 'trade_no',
      key: 'bindList-7',
      width: 44,
      align: 'center',
      dataIndex: 'trade_no'
    },
    {
      title: '类型',
      key: 'bindList-8',
      width: 44,
      align: 'center',
      dataIndex: 'order_fapiao_title'
    }, {
      title: '发票内容',
      key: 'bindList-9',
      width: 44,
      align: 'center',
      dataIndex: 'order_fapiao_company'
    }, {
      title: '公司名称',
      key: 'bindList-10',
      width: 44,
      align: 'center',
      dataIndex: 'order_fapiao_company'
    }
  ]

  componentDidMount () {
    this.getorderlist()
  }

  // 获取分类参数列表
  getorderlist =() => {
    let param = {
      pagenum: '1',
      pagesize: 1
    }

    Api.getorderlist(param).then((res) => {
      console.log(res)
      const { meta } = res
      if (meta.status === 200) {
        this.setState({
          datalist: res.data.goods || []
        })
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 支付类型
  typee=(payid) => {
    let str = ''
    let obj = type.find((item) => { return item.id === payid })
    if (obj) {
      str = obj.label
    }
    return str
  }

  render () {
    const { datalist } = this.state
    return (
      <div >
          <Card>

              <Table rowKey={(record, index) => index }
                columns={this.columns}
                dataSource={datalist}
                childrenColumnName='aa'
                pagination={false}

               />
         </Card>
      </div>
    )
  }
}
