import React, { Component } from 'react'
import PropTpes from 'prop-types'
// import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
// import { CSSTransition } from 'react-transition-group'

import { MenuInfo } from './../../assets/json/menu'
import style from './index.module.scss'
const { Sider } = Layout
const { SubMenu } = Menu

class SiderLeft extends Component {
  static propTypes = {
    history: PropTpes.object
  }

  state = {
    selectedKeys: [],
    openKeys: []
  };

  // onOpenChange
 onOpenChange = (keys) => {
   const { openKeys } = this.state
   this.setState({
     openKeys: keys
   })
 }

 // 跳转路由
 getrouter = (index) => {
   this.setState({
     selectedKeys: [index.keyc]
   }, this.props.history.push(index.path))
 }

 render () {
   const { selectedKeys, openKeys } = this.state
   return (

      <Sider>
           <div className={style.logo}>
                <div className={style.logoimg}></div>
                <div className={style.logo_title}>域名管理</div>
           </div>

           <div className={style.menuInfo}>
                   <Menu theme="dark" mode="inline"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onOpenChange={this.onOpenChange}

                    >
                   {
                     MenuInfo.map((item, index) => (
                      <SubMenu key={item.key}
                      title={<span>{item.icon}<span>{item.title}</span></span>}
                      >
                         {
                            item.children.map((item1, index1) => (
                            <Menu.Item key={item1.keyc} onClick={() => { this.getrouter(item1) }}>{item1.titlt}</Menu.Item>
                            ))
                           }
                      </SubMenu>
                     ))
                   }
               </Menu>

           </div>

      </Sider>
   )
 }
}

export default SiderLeft // withRouter(SiderLeft)
