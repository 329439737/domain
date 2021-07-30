import React, { Component } from 'react'
import { Layout } from 'antd'
import SiderInfo from './../../components/sider/index'
import HeaderInfo from './../../components/header/index'
import ContentInfo from './../../components/content/index'
import PropTypes from 'prop-types'
// import Tabs from './../../components/tabs/tabs'

// const { Footer } = Layout

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
              {/* <Tabs></Tabs> */}

              <ContentInfo></ContentInfo>

              {/* <Footer >

              </Footer> */}

           </Layout>

         </Layout>
      </div>
    )
  }
}
