import { createBrowserHistory, createHashHistory } from 'history'
import dva from 'dva'
import ReactDOM from 'react-dom'
import createLoading from 'dva-loading'
import caser from '../common/models/caser'
import playfair from '../common/models/playfair'
import hill from '../common/models/hill'

import router from './router'
import hot from '../dva-hot'

import './index.css'

const HISTORY_API = window.history && window.history.pushState

const app = dva({
  ...createLoading(),
  history: (HISTORY_API ? createBrowserHistory : createHashHistory)(),
})

const container = '#root'
hot.app(app, container)

app.model(caser)
app.model(playfair)
app.model(hill)
app.router(router)

if (module.hot) {
  app.start(container)
} else {
  ReactDOM.hydrate(app.start()(), document.querySelector(container))
}
