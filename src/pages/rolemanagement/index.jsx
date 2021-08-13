import React, { Component } from 'react'
import { Card, Table, message, Col, Row, Divider, Button, Tag } from 'antd'
import Api from '../../assets/api/online'
import EditModal from './editModal'
import RolessqModal from './rolessqModal'
import styles from './index.module.scss'
class index extends Component {
  state={
    datalist: [],
    showModal: false,
    type: '',
    rowdetail: {},
    quxain: false

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
            <div>
              <Button type='primary' size='small' onClick={() => this.accountedit(record) } color="magenta">编辑</Button>
             <Divider type='vertical'></Divider>
              <Button type='danger' size='small' onClick={() => this.rolesdel(record.id)}>删除</Button>
              <Divider type='vertical'></Divider>
              <Button type='dashed' size='small' onClick={() => this.getrolesmodal(record)}>角色授权</Button>
              </div>
      )
    }
  ]

  // 获取角色列表
  roleslist = () => {
    Api.roleslist({}).then((res) => {
      const { meta, data } = res
      if (meta.status === 200) {
        data.map((item) => (
          item.children.map((item1) => (

            item1.children.map((item2) => (
              item2.userid = item.id
            ))
          ))
        ))
        this.setState({
          datalist: data || []
        })
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 渲染二级详情
  renderExpandRow = (recordd) => {
    const rowColumns = [
      {
        title: 'id',
        key: `expandRow-${recordd.children.id}-0`,
        dataIndex: 'id'
      },
      {
        title: '功能名称',
        key: `expandRow-${recordd.children.authName}-1`,
        dataIndex: 'authName'
      },
      {
        title: '路由',
        key: `expandRow-${recordd.children.path}-2`,
        dataIndex: 'path'
      },
      {
        title: '操作',
        key: 'bindList-4',
        width: 44,
        align: 'center',
        render: (text, record, index) => (
           <div>
              <Button type='danger' size='small' onClick={() => this.rolesdelqn(record, recordd.id)}>删除此权限</Button>
            </div>
        )
      }
    ]

    return (
      <Row style={{ padding: '2px 5px' }}>
        <Table rowKey='id'
          columns={rowColumns}
          dataSource={recordd.children}
          pagination={false}
          childrenColumnName='ab'
          expandedRowRender={(record, recordd) => this.renderExpandRow1(record, recordd)}
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
      },
      {
        title: '操作',
        key: 'bindList-4',
        width: 44,
        align: 'center',
        render: (text, record, index) => (
           <div>
              <Button type='danger' size='small' onClick={() => this.rolesdelqn(record, record.userid)}>删除此权限</Button>
            </div>
        )
      }
    ]

    return (
      <Row style={{ padding: '2px 5px' }}>
        <Table rowKey='id'
          columns={rowColumns}
          dataSource={record.children}
          pagination={false}
          childrenColumnName='abb'
          expandedRowRender={(record) => this.renderExpandRow2(record)}

        />
      </Row>
    )
  }

  // 渲染四级级详情
  renderExpandRow2 = (recordd) => {
    const rowColumns = [
      {
        title: 'id',
        key: `expandRow-${recordd.children.id}-0`,
        dataIndex: 'id'
      },
      {
        title: '功能名称',
        key: `expandRow-${recordd.children.authName}-1`,
        dataIndex: 'authName'
      },
      {
        title: '路由',
        key: `expandRow-${recordd.children.path}-2`,
        dataIndex: 'path'
      },
      {
        title: '操作',
        key: 'bindList-4',
        width: 44,
        align: 'center',
        render: (text, record, index) => (
           <div>
              <Button type='danger' size='small' onClick={() => this.rolesdelqn(record, recordd.userid)}>删除此权限</Button>
            </div>
        )
      }
    ]

    return (
      <Row style={{ padding: '2px 5px' }}>
        <Table rowKey='id'
          columns={rowColumns}
          dataSource={recordd.children}
          pagination={false}
          childrenColumnName='abb'

        />
      </Row>
    )
  }

  // 删除角色授权
  rolesdelqn=(record, userid) => {
    let param = {
      roleId: userid,
      rightId: record.id
    }
    Api.getquxaindel(param).then((res) => {
      const { meta } = res
      if (meta.status === 200) {
        message.success(meta.msg)
        this.roleslist()
      } else {
        message.error(meta.msg)
      }
    })
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
      quxain: false,
      type: '',
      rowdetail: {}
    })
  }

  getrolesmodal=(record) => {
    this.setState({
      quxain: true,
      rowdetail: record
    })
  }

  btnqx=(param) => {
    this.getroles1(param)
  }

   // 角色授权
   getroles1=(param) => {
     Api.getrolesq(param).then((res) => {
       const { meta } = res

       if (+meta.status === 200) {
         message.success(meta.msg)
         this.roleslist()
         this.onCancel()
       } else {
         message.error(meta.msg)
       }
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
    const { datalist = [], showModal = false, type, rowdetail = {}, quxain = false } = this.state

    return (
      <>

{/* <div className={`${styles.diffuse} ${styles.diffuse_on}`} id='a'>
    <ul className={styles.diffuse_list} id='ullist'>
        <li className={styles.diffuse_list_li}>11111111111111111111</li>
        <li className={styles.diffuse_list_li}>2222222222222222222</li>
        <li className={styles.diffuse_list_li}>33333333333333333333</li>
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
      {
        quxain
          ? <RolessqModal
          onCancel={() => { this.onCancel() }}
          rowdetail={rowdetail}
          btnqx={(param) => { this.btnqx(param) }}
          ></RolessqModal>
          : null
      }
      </Card>
      </>
    )
  }
}

export default index
