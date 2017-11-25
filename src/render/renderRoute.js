import dva from 'dva'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'dva/router'
import render from './renderTemplate'

import playfair from '../common/models/playfair'
import routes, { titleMap } from '../common/routes'

const renderRoute = ({
  dvaOpts, routerProps: { location, context }, routeProps, templateOpts,
}) => {
  const app = dva(dvaOpts)

  app.model({ ...playfair })

  app.router(() =>
    <StaticRouter location={location} context={context}>
      {renderRoutes(routes, routeProps)}
    </StaticRouter>)

  return render(app.start()(), templateOpts)
}

export { titleMap, renderRoute }
