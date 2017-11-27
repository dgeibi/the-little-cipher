import dva from 'dva'
import React from 'react'
import { createMemoryHistory } from 'history'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'dva/router'
import { LOCATION_CHANGE } from 'react-router-redux'

import renderTemplate from './renderTemplate'
import routes, { titleMap } from '../common/routes'
import modelPaths from '../common/models/paths.json'

export default function render(path, staticContext) {
  const history = createMemoryHistory({
    initialEntries: [path],
  })

  const app = dva({ history })

  modelPaths.forEach(m =>
    app.model({
      // eslint-disable-next-line
      ...require(`../common/models/${m}`).default,
    }))

  app.router(() =>
    <StaticRouter location={path} context={staticContext}>
      {renderRoutes(routes, { currentPath: path })}
    </StaticRouter>)

  const App = app.start()

  // 手动添加 state，因为 StaticRouter 不支持
  app._store.dispatch({
    type: LOCATION_CHANGE,
    payload: history.location,
  })

  return renderTemplate(<App />, { title: titleMap[path] })
}
