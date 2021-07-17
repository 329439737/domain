import axios from 'axios'
import { message } from '_antd@3.26.20@antd'
import { GetSeeion } from './seesion'

let instance = axios.create({
  // baseURL: host, // 默认基础请求url
  timeout: 60000 // 请求60s超时
})

// http拦截器
instance.interceptors.request.use((config) => {
  console.log(config)
  config.headers.Token = GetSeeion('token') || '' // 加头
  return config
}, error => {
  return Promise.reject(error)
})

// response响应器
instance.interceptors.response.use(response => {
  // console.log(response)
  return Promise.resolve(response.data)
}, error => {
  const { status } = error.response
  switch (status) {
    case 400:
      message.error('页面找不到了')
      break
    default:
      message.error('服务器错误')
  }
  return Promise.reject(error.response.status)
})
export default instance
