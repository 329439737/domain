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
import {Provider} from 'react-redux'
//import store from './redux/store'

//中间
import {createStore,applyMiddleware} from 'redux'  //中间件
import {composeWithDevTools} from 'redux-devtools-extension' //调试工具
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './pages/reduxsagas/sagas/index'; // 5：自己写的根 rootSaga
const sagaMiddleware = createSagaMiddleware()  //创建中间件
import rootReducer from './pages/reduxsagas/reducers/index'; // reducers
const store = createStore(
  rootReducer,
  composeWithDevTools( // 3：把 sagaMiddleware 当做一个中间件，引用调试工具
    applyMiddleware(sagaMiddleware)
  )
)
// 4：启动 saga
sagaMiddleware.run(rootSaga);
moment.locale('zh-cn')

//ssr测试
//import Router from './routers'

ReactDOM.render(
 <Provider store={store}>
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  </Provider>,


 document.getElementById('root')
)
//serviceWorker.unregister();
