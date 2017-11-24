import 'babel-polyfill'
import { createBrowserHistory } from 'history'
import dva from 'dva'
import ReactDOM from 'react-dom'

import router from './router'
import appModel from '../common/models/app'
import playfair from '../common/models/playfair'
import './index.css'

const app = dva({
  history: createBrowserHistory(),
})

app.model(playfair)

app.model(appModel)

app.router(router)

if (module.hot) {
  app.start('#root')
} else {
  ReactDOM.hydrate(app.start()(), document.querySelector('#root'))
}
