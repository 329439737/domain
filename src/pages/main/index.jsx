import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import SiderInfo from './../../components/sider/index'
import HeaderInfo from './../../components/header/index'
import ContentInfo from './../../components/content/index'
import PropTypes from 'prop-types'
const { Footer, Content, Sider, Header } = Layout
const { SubMenu } = Menu
export default class index extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  render () {
    return (
      <div>
         <Layout style={{ minHeight: '100vh' }}>

          <SiderInfo history={this.props.history}></SiderInfo>

           <Layout>

              <HeaderInfo history={this.props.history}></HeaderInfo>

              <ContentInfo></ContentInfo>

              <Footer style={{ textAlign: 'center' }}></Footer>

           </Layout>

         </Layout>
      </div>
    )
  }
}
