import axios from 'axios'
import { GetSeeion } from './seesion'

let instance = axios.create({
  // baseURL: host, // 默认基础请求url
  timeout: 60000 // 请求60s超时
})

// http拦截器
instance.interceptors.request.use((config) => {
  // config.headers.Token = GetSeeion('token') || ''
  return config
}, error => {
  return Promise.reject(error)
})

// response响应器
instance.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  return Promise.reject(error.response)
})
export default instance
