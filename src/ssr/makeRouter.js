import { renderRoutes } from 'react-router-config'
import React from 'react'
import routes from '../routes'

export default (pathname, staticContext) => {
  const { StaticRouter } = require('dva/router')

  return () => (
    <StaticRouter location={pathname} context={staticContext || {}}>
      {renderRoutes(routes)}
    </StaticRouter>
  )
}
