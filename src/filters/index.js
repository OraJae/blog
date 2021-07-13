// import * as $number from '@xgj/utils/src/filters/nums'
// import * as $time from '@xgj/utils/src/filters/time'
// import * as $user from '@xgj/utils/src/filters/user'

let filtersProvider = {}
const request = require.context('./', false, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path).default || request(path)
  Object.keys(module).forEach(key => {
    // if (module[key] && filtersProvider[key]) {
    //   throw new Error(`${key}该过滤器名称已被占用，请更换名称!`)
    // }
    filtersProvider[key] = module[key]
  })
})

export default function (Vue) {
  Object.keys(filtersProvider).forEach(key => {
    Vue.filter(key, filtersProvider[key])
  })
}
