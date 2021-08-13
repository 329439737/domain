import axios from 'axios'
import { message } from 'antd'
import { GetSeeion } from './seesion'
import token from './config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
let instance = axios.create({
  // baseURL: host, // 默认基础请求url
  timeout: 60000 // 请求60s超时
})

// http拦截器
instance.interceptors.request.use((config) => {
  NProgress.start()
  // console.log(config)
  config.headers.Authorization = token/// 加头

  return config
}, error => {
  return Promise.reject(error)
})

// response响应器
instance.interceptors.response.use(response => {
  // console.log(response)
  NProgress.done()
  return Promise.resolve(response.data)
}, error => {
  console.log(error.response)
  const { status } = error.response
  switch (status) {
    case 500:
      message.error('服务器内部错误')
      break
    default:
      message.error('服务器错误')
  }
  // return message.error('请求错误')
  return Promise.reject(error.response.status)
})
export default instance
