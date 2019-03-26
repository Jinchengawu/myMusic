import axios from 'axios'
import baseUrl from './base'
// console.log('baseUrl', baseUrl)
axios.defaults.baseURL = baseUrl.baseUrl
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('发送请求request')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('响应请求response')
  return response
}, function (error) {
  // 对响应错误做点什么
  console.log('响应请求error')
  return Promise.reject(error)
})
function handlerReponse (response) {
  let data = response.data
  data.code = parseInt(data.code)
  if (data.code == 2000 || data.code == 10000 || data.code == '10000') {
    data.code = 10000
    // Vue.prototype.$confim('success',data.msg);
  } else {
    Vue.prototype.$confim('fail', data.msg)
    if (data.code == 10001 && data.data == 'nologin') {
      Vue.prototype.$confim('fail', '登录信息过期，请重新登录')
      router.push({
        name: 'login'
      })
    }
  }
  return Promise.resolve(data)
  // 可以进行错误的处理
}
const api = {
  axios: axios,
  $get: (url, config) => {
    console.log(url, config)
    return axios.get(url, config)
  },
  $post: (url, data, config) => {
    return axios.post(url, config)
  }
}

export default api
