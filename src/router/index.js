import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/views/layout'
// import pathMenu from './utils/pathMenu'
import $C from '@/consts'
// import $api from '@/apiProvider'
// import store from '../store'
// import liveReqs from '@quick-ent/utils/interceptors/liveReqs'
// import confirm from '@/utils/confirm'
let routers = []
const request = require.context('./', false, /^((?!index).)*\.js$/)

request.keys().forEach((path) => {
  const module = request(path).default || request(path)
  routers.push(module)
})

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  base: '/',
  // routes: [
  //   {
  //     path: '/',
  //     name: 'layout',
  //     redirect: '/document/menu',
  //     component: Layout,
  //     children: [
  //       ...routers
  //     ]
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
      // redirect: '/document/menu',
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: () => import('@/views/sleep')
    },
    ...routers
  ]
})

export default router
