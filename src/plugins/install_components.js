import elTable from 'element-ui/lib/table'
import elButtonGroup from 'element-ui/lib/button-group'
import elTableColumn from 'element-ui/lib/table-column'
import elPagination from 'element-ui/lib/pagination'
import elButton from 'element-ui/lib/button'
import elOption from 'element-ui/lib/option'
import elSelect from 'element-ui/lib/select'
import elTabs from 'element-ui/lib/tabs'
import elTabPane from 'element-ui/lib/tab-pane'
import elInput from 'element-ui/lib/input'
import elPopover from 'element-ui/lib/popover'
import elRow from 'element-ui/lib/row'
import elCard from 'element-ui/lib/card'
import elCol from 'element-ui/lib/col'
import elDialog from 'element-ui/lib/dialog'
import elTooltip from 'element-ui/lib/tooltip'
import elSwitch from 'element-ui/lib/switch'
import elForm from 'element-ui/lib/form'
import elFormItem from 'element-ui/lib/form-item'
import elTimePicker from 'element-ui/lib/time-picker'
import elDatePicker from 'element-ui/lib/date-picker'
import elDivider from 'element-ui/lib/divider'
import elInputNumber from 'element-ui/lib/input-number'
import elTag from 'element-ui/lib/tag'
import elAlert from 'element-ui/lib/alert'
import elProgress from 'element-ui/lib/progress'
import icon from '@/components/icon.vue'
// import list from '@xgj/components/src/list/index.vue'
// import pageList from '@xgj/components/src/list/pageList.vue'
// import xImage from '@xgj/components/src/xImage/index.vue'
// import user from '@xgj/components/src/user/index.vue'
// import userStat from '@xgj/components/src/user/userStat.vue'
// import avatar from '@xgj/components/src/avatar/index.vue'
// import tags from '@xgj/components/src/tags/index.vue'
// import noData from '@/components/project/noData.vue'
// import panelHeader from '@/components/project/panelHeader.vue'
// import rankIndex from '@xgj/components/src/rankIndex/index.vue'
// import permission from '@xgj/components/src/permission/index.vue'

let internalComponents = {
  elTable,
  elTooltip,
  elTableColumn,
  elPagination,
  elButton,
  elButtonGroup,
  elOption,
  elSelect,
  elTabs,
  elTabPane,
  elInput,
  elPopover,
  elRow,
  elCol,
  elCard,
  elDialog,
  elSwitch,
  elForm,
  elFormItem,
  elTimePicker,
  elDatePicker,
  elAlert,
  elTag,
  elDivider,
  elInputNumber,
  elProgress,
  icon
}
// const request = require.context('../components', true, /(.*)\.vue$/)
//
// request.keys().forEach(path => {
//   const module = request(path)
//   path = path.replace(/(\.\/|\.(vue|js))/gi, '').split('/')
//   if (path.length < 2 && path[0]) {
//     throw new Error(`${path[0]} 命名不合法!`)
//   }
//   const fileName = path[path.length - 1]
//   internalComponents[fileName] = module.default || module
// })

export default function installExternalComponents (Vue) {
  Object.keys(internalComponents).forEach((key) => {
    Vue.component(key, internalComponents[key])
  })
}
