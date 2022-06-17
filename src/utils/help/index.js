let helpProvider = {}
const request = require.context('./', true, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path).default || request(path)
  Object.assign(helpProvider, module)
})

export default {
  ...helpProvider
}