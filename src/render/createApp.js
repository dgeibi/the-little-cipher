import dva from 'dva'
import React from 'react'
import { createMemoryHistory } from 'history'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'dva/router'
import routes from '../common/routes'

// use webpack's require.context
// see https://webpack.js.org/guides/dependency-management/#context-module-api
const models = importModels(require.context('../common/models/', false, /\.js$/))
function importModels(r) {
  return r.keys().map(key => r(key).default)
}

function createApp(path, staticContext) {
  const history = createMemoryHistory({
    initialEntries: [path],
  })

  const app = dva({ history })

  // 注册 models
  models.forEach(m => app.model({ ...m }))

  app.router(() => (
    <StaticRouter location={path} context={staticContext || {}}>
      {renderRoutes(routes)}
    </StaticRouter>
  ))

  return app.start()
}

export default createApp
