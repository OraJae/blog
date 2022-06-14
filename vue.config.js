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
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: !isProduction,
  // pages,
  // devServer: {
  //   progress: false
  // },
  devServer: {
    port: 6600
  },
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
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: 'style-loader'
  //         },
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             importLoaders: 1
  //           }
  //         },
  //         {
  //           loader: 'postcss-loader'
  //         }
  //       ]
  //     }
  //   ]
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@app', resolve('src', process.cwd()))
      .set('@styles', resolve('src/theme/styles', process.cwd()))
      .set('@images', resolve('src/theme/images', process.cwd()))
      .set('@assets', resolve('src/assets', process.cwd()))
    // .set('axios$', resolve('node_modules/axios/dist/axios.min.js', process.cwd()))
  }
}
