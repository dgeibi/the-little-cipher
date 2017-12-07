import 'babel-polyfill'
import { createBrowserHistory, createHashHistory } from 'history'
import dva from 'dva'
import ReactDOM from 'react-dom'
import codegen from 'codegen.macro'
import createLoading from 'dva-loading'

import router from './router'

import './index.css'

const HISTORY_API = window.history && window.history.pushState

const app = dva({
  ...createLoading(),
  history: (HISTORY_API ? createBrowserHistory : createHashHistory)(),
})

// use codegen to generate `app.model(require('...'))` and hmr code
codegen(`
  const fs = require('fs')
  const regExp = /.+\\.js$/
  const modelPaths = fs.readdirSync(__dirname + '/../common/models/')
    .filter(x => regExp.test(x))
    .map(x => '../common/models/' + x)
  module.exports = modelPaths.map(m => 'app.model(require("'+m+'").default)').join(';')
  if (process.env.NODE_ENV === 'development') {
    module.exports += require('../webpack/modelHMR')(modelPaths)
  }
`)

app.router(router)

if (module.hot) {
  app.start('#root')
} else {
  ReactDOM.hydrate(app.start()(), document.querySelector('#root'))
}
