const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')

const isDev = process.env.NODE_ENV === 'development'

const app = express()
app.use(favicon(path.join(__dirname,'../favicon.ico')))


if (!isDev) {
  const serverEntry = require('../dist/server-entry').default

  // 读取HTML文件的内容-采用utf8格式
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

  // 读取静态资源文件-避免返回都为HTML
  app.use('/public', express.static(path.join(__dirname, '../dist')))

  // 所有请求返回HTML文件中嵌套生成的js
  app.get('*', (req, res) => {
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<!--app-->', appString))
  })
}else{
  const devStatic = require('./util/server-static')
  devStatic(app)
}

app.listen(3000, () => {
  console.log('server is listening in 3000')
})