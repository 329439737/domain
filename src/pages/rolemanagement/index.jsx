import React, { Component } from 'react'
import { Card, Table, message, Col, Row, Divider, Button } from 'antd'
import Api from '../../assets/api/online'
import EditModal from './editModal'
import styles from './index.module.scss'
class index extends Component {
  state={
    datalist: [],
    showModal: false,
    type: '',
    rowdetail: {}

  }

  componentDidMount () {
    this.roleslist()
    this.getinit()
  }

  columns = [
    {
      title: '角色id',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      dataIndex: 'id'
    },

    {
      title: '角色姓名',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      dataIndex: 'roleName'
    },
    {
      title: '角色描述',
      key: 'bindList-3',
      width: 44,
      align: 'center',
      dataIndex: 'roleDesc'
    },
    {
      title: '操作',
      key: 'bindList-4',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
            <div><a onClick={() => this.accountedit(record) }>编辑</a> <Divider type='vertical'></Divider> <a onClick={() => this.rolesdel(record.id)}>删除</a></div>
      )
    }
  ]

  // 获取角色列表
  roleslist = () => {
    Api.roleslist({}).then((res) => {
      const { meta, data } = res
      if (meta.status === 200) {
        this.setState({
          datalist: data || []
        })
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 渲染二级详情
  renderExpandRow = (record) => {
    const rowColumns = [
      {
        title: 'id',
        key: `expandRow-${record.children.id}-0`,
        dataIndex: 'id'
      },
      {
        title: '功能名称',
        key: `expandRow-${record.children.authName}-1`,
        dataIndex: 'authName'
      },
      {
        title: '路由',
        key: `expandRow-${record.children.path}-2`,
        dataIndex: 'path'
      }
    ]

    return (
      <Row style={{ padding: '2px 5px' }}>
        <Table rowKey='id'
          columns={rowColumns}
          dataSource={record.children}
          pagination={false}
          childrenColumnName='ab'
          expandedRowRender={(record) => this.renderExpandRow1(record)}
        />
      </Row>
    )
  }

  // 渲染三级级详情
  renderExpandRow1 = (record) => {
    const rowColumns = [
      {
        title: 'id',
        key: `expandRow-${record.children.id}-0`,
        dataIndex: 'id'
      },
      {
        title: '功能名称',
        key: `expandRow-${record.children.authName}-1`,
        dataIndex: 'authName'
      },
      {
        title: '路由',
        key: `expandRow-${record.children.path}-2`,
        dataIndex: 'path'
      }
    ]

    return (
      <Row style={{ padding: '2px 5px' }}>
        <Table rowKey='id'
          columns={rowColumns}
          dataSource={record.children}
          pagination={false}
          childrenColumnName='abb'

        />
      </Row>
    )
  }

  // 添加确认
  btnonOK=(param) => {
    const { type } = this.state
    if (type === 'add') {
      this.rolesadd(param)
    } else {
      this.rolesedit(param)
    }
  }

  // 添加接口
  rolesadd=(param) => {
    Api.rolesadd(param).then((res) => {
      const { meta } = res
      if (+meta.status === 201) {
        message.success(meta.msg)
        this.roleslist()
        this.onCancel()
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 编辑接口
  rolesedit=(param) => {
    Api.rolesedit(param).then((res) => {
      const { meta } = res
      console.log(res)
      if (+meta.status === 200) {
        message.success(meta.msg)
        this.roleslist()
        this.onCancel()
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 删除角色
  rolesdel=(id) => {
    let param = {
      id: id
    }
    Api.rolesdel(param).then((res) => {
      const { meta } = res
      console.log(res)
      if (+meta.status === 200) {
        message.success(meta.msg)
        this.roleslist()
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 添加角色弹窗
  btnaddsole=() => {
    this.setState({
      showModal: true,
      type: 'add'
    })
  }

    // 编辑
    accountedit=(record) => {
      this.setState({
        showModal: true,
        rowdetail: record
      })
    }

  // 取消弹窗
  onCancel =() => {
    this.setState({
      showModal: false,
      type: '',
      rowdetail: {}
    })
  }

  // 初始化元
  getinit=() => {
    let x; let y
    let lis = document.querySelectorAll('#ullist li')
    let r = 250 /* 圆半径 */
    let gap = 400 / lis.length /* 夹角度数 */
    let radian = Math.PI / -280/* 弧度 */
    for (let i = lis.length - 1; i >= 0; i--) {
    /* 计算x,y */
      x = r + r * (Math.cos(gap * i * radian))/* x= r+rcos0 */
      y = r + r * (Math.sin(gap * i * radian))/* y= r+rsin0 */

      lis[i].style.left = x + 'px'
      lis[i].style.top = y + 'px'
    };
  }

  render () {
    const { datalist = [], showModal = false, type, rowdetail = {} } = this.state

    return (
      <>

{/* <div className={`${styles.diffuse} ${styles.diffuse_on}`} id='a'>
    <ul className={styles.diffuse_list} id='ullist'>
        <li className={styles.diffuse_list_li}>1</li>
        <li className={styles.diffuse_list_li}>2</li>
        <li className={styles.diffuse_list_li}>3</li>
        <li className={styles.diffuse_list_li}>4</li>
        <li className={styles.diffuse_list_li}>5</li>
        <li className={styles.diffuse_list_li}>6</li>
        <li className={styles.diffuse_list_li}>7</li>
        <li className={styles.diffuse_list_li}>8</li>
    </ul>
</div> */}
      <Card>

        <Button style={{ marginBottom: '15px' }} type='primary' onClick={() => { this.btnaddsole() }}>添加角色</Button>

        <Table rowKey='id'
          columns={this.columns}
          dataSource={datalist}
          childrenColumnName='aa'
          pagination={false}
          expandedRowRender={(record) => this.renderExpandRow(record)}
        />
         {
        showModal
          ? <EditModal
          onCancel={() => { this.onCancel() }}
          type={type}
          btnonOK={(param) => { this.btnonOK(param) }}
          rowdetail={rowdetail}
          ></EditModal>
          : null
      }
      </Card>
      </>
    )
  }
}

export default index
