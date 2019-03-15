import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import appStore from './store/appStore'

const root = document.querySelector('#root')
const render = Component => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appStore={appStore} >
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>
    , root)
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const NextApp = require('./views/App.jsx').default
    render(NextApp)
  })
}