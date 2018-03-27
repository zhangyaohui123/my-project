import axios from 'axios'
// 设置请求的基本路径
axios.defaults.baseURL = 'http://47.96.21.88:8888/api/private/v1/'
// 登录拦截器
// 拦截处理token
// config请求头的配置参数
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('mytoken')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 实现登录功能
export const login = (params) => {
  return axios.post('login', params).then(res => {
    // 返回具体的数据
    return res.data
  })
}
// 测试请求头
export const testData = (params) => {
  return axios.get('users', {params: params}).then(res => {
    // 返回具体的数据，用来传递给下一个then
    return res.data
  })
}
