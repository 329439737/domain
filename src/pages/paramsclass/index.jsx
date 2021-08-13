import React, { Component } from 'react'
import Api from './../../assets/api/online'
import { message, Card, Table } from 'antd'

// import style from './index.module.scss'
export default class index extends Component {
  state={
    datalist: []
  }

  columns = [
    {
      title: '分类ID  ',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      dataIndex: 'attr_id'
    },

    {
      title: '分类参数名称',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      dataIndex: 'attr_name'
    },
    {
      title: '分类参数所属分类',
      key: 'bindList-3',
      width: 44,
      align: 'center',
      dataIndex: 'cat_id'
    },
    {
      title: '分类当前层级 ',
      key: 'bindList-4',
      width: 44,
      align: 'center',
      dataIndex: 'cat_level'
    }
  ]

  componentDidMount () {
    this.getparamslist()
  }

  // 获取分类参数列表
  getparamslist =() => {
    let param = {
      id: 1,
      sel: ['many']
    }

    Api.getparamslist(param).then((res) => {
      console.log(res)
      const { meta } = res
      if (meta.status === 200) {
        this.setState({
          datalist: res.data || []
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
