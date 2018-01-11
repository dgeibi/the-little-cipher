import React from 'react'
import { routerRedux } from 'dva/router'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'
import hot from '../dva-hot'

const { ConnectedRouter } = routerRedux

function RouterConfig({ history }) {
  return <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
}

export default hot.router(module)(RouterConfig)
