import api from './api.js'
import config from './config.js'
console.log('api', api)
console.log('config', config)
const login = parmas => api.$get(config.apiList.login, {parmas: parmas})
export default{
  login: login
}
