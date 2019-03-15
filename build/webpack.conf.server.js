const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = webpackMerge(baseConfig, {
  target: 'node',//运行环境
  mode: 'development',
  entry: {
    app: path.join(__dirname, "../client/serverEntry.js")
  },
  output: {
    filename: "server-entry.js",
    libraryTarget: 'commonjs2'//引用规范
  },
})