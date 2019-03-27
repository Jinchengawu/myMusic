import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// home
const home = r => require.ensure(
  [],
  () => r(require('@/view/home/home')),
  'home'
)
// login
const login = r => require.ensure(
  [],
  () => r(require('@/view/login/login')),
  'login'
)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
