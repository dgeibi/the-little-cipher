import React from 'react'
import { Router } from 'dva/router'
import { renderRoutes } from 'react-router-config'
import routes from '../common/routes'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {renderRoutes(routes, { currentPath: history.location.pathname })}
    </Router>
  )
}

export default RouterConfig
