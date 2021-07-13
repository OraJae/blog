
const path = require('path')
const resolve = (dir, base = __dirname) => path.join(base, dir)
function postcss () {
  const plugin = {
    plugins: {
      autoprefixer: {},
      'postcss-import': {
        resolve: (id) => {
          if (id.indexOf('@app') > -1) {
            return resolve(id.replace('@app', './src'), process.cwd())
          }
          return id
        }
      },
      'postcss-each-variables': {},
      'postcss-url': {},
      'postcss-each': {},
      'precss': {}
    }
  }
  return plugin
}

module.exports = postcss()
