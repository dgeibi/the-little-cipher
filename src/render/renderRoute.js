import dva from 'dva'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'dva/router'
import render from './renderTemplate'

import routes, { titleMap } from '../common/routes'

const models = require('../common/models')

const renderRoute = ({
  dvaOpts, routerProps: { location, context }, routeProps, templateOpts,
}) => {
  const app = dva(dvaOpts)
  models.forEach(m =>
    app.model({
      // eslint-disable-next-line
      ...require(`../common/models/${m}`).default,
    }))

  app.router(() =>
    <StaticRouter location={location} context={context}>
      {renderRoutes(routes, routeProps)}
    </StaticRouter>)

  return render(app.start()(), templateOpts)
}

export { titleMap, renderRoute }
