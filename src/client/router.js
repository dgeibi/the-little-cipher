import React from 'react'
import { routerRedux } from 'dva/router'
import { renderRoutes } from 'react-router-config'
import routes from '../common/routes'

const { ConnectedRouter } = routerRedux

function RouterConfig({ history }) {
  return <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
}

export default RouterConfig
