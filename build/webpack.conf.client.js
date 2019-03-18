const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.conf')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, "../client/app.js")
  },
  output: {
    filename: "[name].[hash].js",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]

})

if (isDev) {
  config.entry = {
    app: [
      "react-hot-loader/patch",
      path.join(__dirname, "../client/app.js")
    ]
  }
  config.devServer = {
    host: "0.0.0.0",
    port: '8888',
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy:{
      '/api':'http://localhost:3000'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}


module.exports = config