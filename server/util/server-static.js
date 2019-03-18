/*
*服务端渲染本地开发文件
*/

const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const MemoryFs = require('memory-fs')
const proxy = require('http-proxy-middleware')
const ReactSSR = require('react-dom/server')

const serverConfig = require('../../build/webpack.conf.server.js')
const getTemplate = () => {

  return new Promise((resolve, reject) => {

    axios.get('http://localhost:8888/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  })
}

const Module = module.constructor
const serverCompiler = webpack(serverConfig)
let mfs = new MemoryFs
serverCompiler.outputFileSystem = mfs

let serverBundle, createStoreMap

serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )

  const bundle = mfs.readFileSync(bundlePath, 'utf-8')
  // 将string文件转化为模块
  const m = new Module()
  m._compile(bundle, 'server-entry.js')
  serverBundle = m.exports.default
  createStoreMap = m.exports.createStoreMap
})


module.exports = function (app) {

  app.use('/public', proxy({//代理静态文件
    target: 'http://localhost:8888'
  }))
  app.get('*', function (req, res) {
    getTemplate().then(template => {
      const routeContext = {}
      const app = serverBundle(createStoreMap(), routeContext, req.url)

      const content = ReactSSR.renderToString(app)

      if (routeContext.url) {
        res.status(302).setHeader('Location', routeContext.url)
        res.end()
        return
      }

      res.send(template.replace('<!--app-->', content))
    })
  })

}