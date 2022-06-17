import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@com/layout'
// let routers = []
// const request = require.context('./', false, /^((?!index).)*\.js$/)

// request.keys().forEach((path) => {
//   const module = request(path).default || request(path)
//   routers.push(module)
// })

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
  routes: [{
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
      // redirect: '/document/menu',
    },
    {
      path: '/document',
      redirect: '/document/menu',
      name: 'document',
      component: Layout,
      children: [{
          path: 'menu',
          name: 'document-menu',
          meta: {
            title: '文档菜单',
            navName: 'document-menu'
          },
          component: () => import('@/views/document/menu')
        },
        {
          path: 'read',
          name: 'document-read',
          meta: {
            title: '文档阅览',
            navName: 'document-read'
          },
          component: () => import('@/views/document/read')
        }
      ]
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: () => import('@/views/sleep')
    },
    {
      path: '/snake',
      name: 'snake',
      component: () => import('@/views/snake'),
    },
    {
      path: '/goddess',
      name: 'goddess',
      component: () => import('@/views/goddess'),
    }
  ]
})

export default router