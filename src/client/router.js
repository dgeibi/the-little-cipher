import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { renderRoutes } from 'react-router-config'
import routes from '../common/routes'

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      {renderRoutes(routes, { currentPath: history.location.pathname })}
    </ConnectedRouter>
  )
}

export default RouterConfig
