import axios from 'axios'
// 设置请求的基本路径
axios.defaults.baseURL = 'http://47.96.21.88:8888/api/private/v1/'

// 实现登录功能
export const login = (params) => {
  return axios.post('login', params).then(res => {
    // 返回具体的数据
    return res.data
  })
}
