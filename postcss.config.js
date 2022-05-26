let postcssImport = require('postcss-import')
let postcssNested = require('postcss-nested')
const path = require('path')
const resolve = (dir, base = __dirname) => path.join(base, dir)

module.exports = {
  plugins: [
    // autoprefixer: {},
    postcssNested,
    postcssImport({
      resolve: (id) => {
        if (id.indexOf('@app') > -1) {
          return resolve(id.replace('@app', './src'), process.cwd())
        } else if (id.indexOf('@styles') > -1) {
          return resolve(
            id.replace('@styles', './src/theme/styles'),
            process.cwd()
          )
        } else if (id.indexOf('@images') > -1) {
          return resolve(
            id.replace('@images', './src/theme/images'),
            process.cwd()
          )
        }
        return id
      }
    })
  ]
}
