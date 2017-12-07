import dva from 'dva'
import React from 'react'
import { createMemoryHistory } from 'history'
import { renderRoutes } from 'react-router-config'
import { StaticRouter, routerRedux } from 'dva/router'
import { renderToString } from 'react-dom/server'

import routes, { titleMap } from '../common/routes'

const { LOCATION_CHANGE } = routerRedux

// use webpack's require.context
// see https://webpack.js.org/guides/dependency-management/#context-module-api
const models = importModels(require.context('../common/models/', false, /\.js$/))
function importModels(r) {
  return r.keys().map(key => r(key).default)
}

function render(path, staticContext) {
  const history = createMemoryHistory({
    initialEntries: [path],
  })

  const app = dva({ history })

  // 注册 models
  models.forEach(m => app.model({ ...m }))

  app.router(() =>
    <StaticRouter location={path} context={staticContext}>
      {renderRoutes(routes)}
    </StaticRouter>)

  const App = app.start()

  // 手动添加 state，因为 StaticRouter 不支持
  app._store.dispatch({
    type: LOCATION_CHANGE,
    payload: history.location,
  })

  return renderToString(<App />)
}

export { titleMap, render }
