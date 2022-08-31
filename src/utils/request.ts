import axios from "axios";

// 创建axios实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/',
  timeout: 5000
})

// 请求响应拦截器
request.interceptors.request.use((config) => {
  return config
}, err => Promise.reject(err))

request.interceptors.response.use(response => {
  return response
}, err => Promise.reject(err))


export default request
