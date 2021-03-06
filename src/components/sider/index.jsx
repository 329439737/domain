import React, { Component } from 'react'
import PropTpes from 'prop-types'

import { Layout, Menu, Icon } from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import choos from './../../assets/json/menu'
import style from './index.module.scss'
import { GetSeeion } from './../../assets/unit/seesion'
const { MenuInfo, ds, menuslist } = choos
const { Sider } = Layout
const { SubMenu } = Menu

class SiderLeft extends Component {
  static propTypes = {
    history: PropTpes.object
  }

  state = {
    selectedKeys: [],
    openKeys: [],
    list: [],
    menustype: 0

  };

  // 获取列表菜单
menulist =() => {
  menuslist.then((res) => {
    if (+res === 1) {
      this.props.history.push('/login')
    }
    this.setState({
      list: res || []
    })
  })
}

componentDidMount () {
  this.menulist()
  let sisson = GetSeeion('token').value
  this.setState({
    menustype: +sisson === 1 ? 1 : 2
  })
}

componentWillUnmount () {
  this.setState = () => false
}

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

 // 跳转路由
 getroute1 = (index) => {
   this.setState({
     selectedKeys: [index.keyc]
   }, this.props.history.push(index.path))
 }

 render () {
   const { selectedKeys, openKeys, list, menustype } = this.state
   return (

      <Sider>
           <div className={style.logo}>
                <div className={style.logoimg}></div>
                <div className={style.logo_title}>CEM管理</div>
           </div>

{
 menustype === 1
   ? <div className={style.menuInfo}>
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
   : <div className={style.menuInfo}>
 <Menu theme="dark" mode="inline"
  selectedKeys={selectedKeys}
  openKeys={openKeys}
  onOpenChange={this.onOpenChange}
>

 {

        list.map((item, index) => (
                      <SubMenu key={item.id}
                      title={<span><span>{item.authName}</span></span>}
                      >

                        {
                            item.children.map((item1, index1) => (

                                        <Menu.Item key={item1.id} onClick={() => { this.getroute1(item1) }}>{item1.authName}</Menu.Item>

                            ))
                           }

                      </SubMenu>
        ))
                          }

</Menu>

</div>
}

      </Sider>
   )
 }
}

export default SiderLeft
