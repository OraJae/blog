const webpack = require('webpack')
const path = require('path')
const resolve = (dir, base = __dirname) => path.join(base, dir)
const isProduction = process.env.NODE_ENV === 'production'

const pages = {
  index: {
    entry: 'src/main.js',
    filename: 'index.html',
    template: 'public/index.html',
    title: 'web实验室'
  }
}

module.exports = {
  productionSourceMap: !isProduction,
  pages,
  outputDir: 'docs',
  devServer: {
    port: 6600
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@app', resolve('src', process.cwd()))
      .set('@com', resolve('src/components', process.cwd()))
      .set('@styles', resolve('src/theme/styles', process.cwd()))
      .set('@images', resolve('src/theme/images', process.cwd()))
    // .set('axios$', resolve('node_modules/axios/dist/axios.min.js', process.cwd()))
  }
}
