import 'babel-polyfill'
import { createBrowserHistory } from 'history'
import dva from 'dva'
import ReactDOM from 'react-dom'
import codegen from 'codegen.macro'

import router from './router'

import './index.css'

const app = dva({
  history: createBrowserHistory(),
})

// use codegen to generate `app.model(require('...'))` and hmr code
codegen(`
  const modelPaths = require('../common/models/paths.json').map(x => '../common/models/' + x)
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
