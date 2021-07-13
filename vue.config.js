const webpack = require('webpack')
const path = require('path')
const resolve = (dir, base = __dirname) => path.join(base, dir)
const isProduction = process.env.NODE_ENV === 'production'

const pages = {
  index: {
    entry: 'src/main.js',
    filename: 'index.html',
    template: 'template/index.html',
    title: '知瓜数据'
  }
}
module.exports = {
  productionSourceMap: !isProduction,
  // pages,
  // devServer: {
  //   progress: false
  // },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@app', resolve('src', process.cwd()))
    // .set('axios$', resolve('node_modules/axios/dist/axios.min.js', process.cwd()))
  }
  // pwa: {
  //   iconPaths: {
  //     favicon32: 'favicon.ico',
  //     favicon16: 'favicon.ico',
  //     appleTouchIcon: 'favicon.ico',
  //     maskIcon: 'favicon.ico',
  //     msTileImage: 'favicon.ico'
  //   }
  // }
}