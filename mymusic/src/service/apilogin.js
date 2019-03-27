import api from './api.js'
import config from './config.js'
// console.log('api', api)
// console.log('config', config)
const login = params => api.$get(config.apiList.login, {params: params})
export default{
  login: login
}
