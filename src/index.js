import 'core-js/es'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.css'

moment.locale('zh-cn')

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,

 document.getElementById('root')
)
