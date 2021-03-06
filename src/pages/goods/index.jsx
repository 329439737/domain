import React, { Component } from 'react'
import Api from './../../assets/api/online'
import { message, Card, Table, Tag } from 'antd'
import moment from 'moment'
import style from './index.module.scss'
export default class index extends Component {
  state={
    datalist: []
  }

  columns = [
    {
      title: '商品ID',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      dataIndex: 'goods_id'
    },

    {
      title: '商品名称',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      dataIndex: 'goods_name'
    },
    {
      title: '商品价格',
      key: 'bindList-3',
      width: 44,
      align: 'center',
      dataIndex: 'goods_price'
    },
    {
      title: '商品数量 ',
      key: 'bindList-4',
      width: 44,
      align: 'center',
      dataIndex: 'goods_number'
    },
    {
      title: '商品重量 ',
      key: 'bindList-5',
      width: 44,
      align: 'center',
      dataIndex: 'goods_weight'
    },
    {
      title: '热销品数量 ',
      key: 'bindList-6',
      width: 44,
      align: 'center',
      dataIndex: 'hot_mumber'
    },
    {
      title: '是否为热销',
      key: 'bindList-7',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
        <Tag color={record.is_promote ? 'magenta' : 'blue'}>
          {record.is_promote ? '是' : '否'}
        </Tag>
      )
    },
    {
      title: '上架时间',
      key: 'bindList-8',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
        <div>
          {moment(record.add_time).format('YYYY-MM-DD hh:mm:ss')}
        </div>
      )
    },
    {
      title: '更新时间',
      key: 'bindList-9',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
        <div>
          {moment(record.upd_time).format('YYYY-MM-DD hh:mm:ss')}
        </div>
      )
    }
  ]

  componentDidMount () {
    this.getgoodslist()
  }

  // 获取商品列表
  getgoodslist =() => {
    let param = {
      query: 1,
      pagenum: '1',
      pagesize: 9
    }

    Api.getgoodslist(param).then((res) => {
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
