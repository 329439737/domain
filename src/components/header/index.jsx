import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Dropdown, Menu, Button, Breadcrumb } from 'antd'
import style from './index.module.scss'
import { routerMap } from './../../routes/index.js'
import { GetSeeion, ClearSeeion } from './../../assets/unit/seesion.js'
import PropTypes from 'prop-types'

const { Header } = Layout

export default class index extends Component {
  static proptypes ={
    history: PropTypes.object
  }

  // 渲染用户下拉菜单
  renderDropMenu = () => {
    return (
      <Menu onClick={(item) => this.handleMenuClick(item.key)}>
        <Menu.Item key={1}>
          <Icon type='user' />修改密码
        </Menu.Item>
        <Menu.Item key={2}>
          <Icon type='logout' />退出登录
        </Menu.Item>
      </Menu>
    )
  }

  // 退出
  handleMenuClick = (key) => {
    if (+key === 2) {
      ClearSeeion('token')
      this.props.history.push('/login')
    }
  }

  render () {
    return (
     <Header className={style.mainheader}>

            <Row>

              <Col span={20}>
                <div className={''}>
                   <Breadcrumb style={{ lineHeight: '44px' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                      {
                          routerMap.map((route, i) => {
                            if (route.path && location.pathname.match(route.path)) {
                              return (<Breadcrumb.Item key={i}>{route.name}</Breadcrumb.Item>)
                            }
                            return ''
                          })
                       }
                   </Breadcrumb>
                </div>
              </Col>

              <Col span={4}>
              <div className={`${style.headerdiv_2}`}>
                <Dropdown overlay={this.renderDropMenu()} placement='bottomCenter'>
                  <Button type='link'>
                    <span>{GetSeeion('token').username}</span>
                    <Icon type='caret-down' style={{ color: 'rgba(153, 153, 153, 0.8)' }} />
                   </Button>
                </Dropdown>
              </div>
              </Col>
            </Row>

     </Header>
    )
  }
}
