import loading from 'element-ui/lib/loading'
import infiniteScroll from 'element-ui/lib/infinite-scroll'
import installExternalComponents from './install_components'
import $C from '@/consts'
// import mixin from '@/utils/beforeHandle'
// import $api from '@/apiProvider'

export default function installExternalPlugin (Vue) {
  Vue.use(loading)
  Vue.use(infiniteScroll)
  Vue.use(installExternalComponents)
  Vue.prototype.$bus = new Vue()
  Vue.prototype.$C = $C
  // Vue.prototype.$api = $api
  // Vue.mixin(mixin)
}
