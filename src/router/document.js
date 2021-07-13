// import { routerHoc } from './utils/helpers'
export default {
  path: '/document',
  redirect: '/document/menu',
  name: 'document',
  component: () => import('@/views/document'),
  children: [
    {
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
}
