import React, { Component } from 'react'
import { Modal, message, Tree } from 'antd'
import PropTypes from 'prop-types'
import Api from '../../assets/api/online'
const { TreeNode } = Tree
class rolessqModal extends Component {
  static propTypes={
    onCancel: PropTypes.func,
    type: PropTypes.string,
    btnonOK: PropTypes.func,
    rowdetail: PropTypes.object,
    btnqx: PropTypes.func
  }

  state={
    treelist: [],
    checkedKeys: []
  }

  componentDidMount () {
    this.getquxainlist()
  }

  // 获取权限列表
  getquxainlist =() => {
    Api.getquxainlist({ type: 'tree' }).then((res) => {
      const { meta } = res
      if (meta.status === 200) {
        this.setState({
          treelist: res.data
        })
      } else {
        message.error(meta.msg)
      }
    })
  }

   onCheck = (checkedKeysValue) => {
     this.setState({
       checkedKeys: checkedKeysValue
     })
   };

   // handleOk
   handleOk = () => {
     const { checkedKeys } = this.state
     const { rowdetail } = this.props
     let rids = checkedKeys.join(',')
     let param = {
       roleId: rowdetail.id,
       rids
     }
     this.props.btnqx(param)
   }

   render () {
     const { treelist, checkedKeys = [] } = this.state
     return (
      <Modal title="角色授权"
      visible
        onOk={() => { this.handleOk() }}
       onCancel={this.props.onCancel}
  >
        <Tree
        checkable
         onCheck={(checkedKeysValue) => { this.onCheck(checkedKeysValue) }}
          checkedKeys={checkedKeys}
          defaultExpandAll>

           {
             treelist.map((item) => (
               <TreeNode title={item.authName} key={item.id}>
                 {
                  item.children.map((itemm) => (
                    <TreeNode title={itemm.authName} key={itemm.id} >
              {
                  itemm.children.map((itemmm) => (
                    <TreeNode title={itemmm.authName} key={itemmm.id} >

                    </TreeNode>
                  ))
                 }

                    </TreeNode>
                  ))
                 }
               </TreeNode>
             ))
           }
         </Tree>
      </Modal>
     )
   }
}

export default rolessqModal
