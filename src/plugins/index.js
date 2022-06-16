/* eslint-disable no-console */

import installExternalComponents from './install_plugin'
import installFilter from '@/filters'

export default {
  install: (Vue, opts = {}) => {
    installExternalComponents(Vue)
    installFilter(Vue)
  }
}
