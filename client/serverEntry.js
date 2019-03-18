/**
 * 服务端渲染入口文件
 */

import React from 'react'
import { StaticRouter } from 'react-router'
import { Provider, useStaticRendering } from 'mobx-react'

import App from './views/App'
import { createStoreMap } from './store/store'

// 防止mobx服务端渲染的时候不会重复数据变换
useStaticRendering(true)

export default (stores, routeContext, url) => (
  <Provider {...stores} >
    <StaticRouter context={routeContext} location={url} >
      <App />
    </StaticRouter>
  </Provider>
)

export { createStoreMap }