import React, { Component } from 'react'
import { Tree } from 'antd'
import PropTypes from 'prop-types'
import { warningList } from './../../assets/unit/munit'

const { TreeNode } = Tree

export default class Treeinfo extends Component {
  static propTypes={
    gettype: PropTypes.func
  }

  state={

  }

  handleSelectTreeNode = (selectedKeys = []) => {
    this.props.gettype(selectedKeys[0])
  };

  render () {
    return (
      <div>
         <Tree onSelect={(selectedKeys) => this.handleSelectTreeNode(selectedKeys)} defaultExpandAll>
           {
             warningList.map((item) => (
               <TreeNode title={item.title} key={item.key}>
                 {
                  item.children.map((itemm) => (
                    <TreeNode title={itemm.title} key={itemm.key} ></TreeNode>
                  ))
                 }
               </TreeNode>
             ))
           }
         </Tree>

      </div>
    )
  }
}
