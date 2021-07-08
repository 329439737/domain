import axios from 'axios'
import pathConfig from '../config/pathConfig'

const { host } = pathConfig
const instance = axios.create({
  baseURL: host, // 默认基础请求url
  timeout: 60000 // 请求60s超时
})

// http request 拦截器
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http response响应器
instance.interceptors.response.use(response => {
  console.log('response===', response)
}, error => {
  return Promise.reject(error)
})

export default instance
