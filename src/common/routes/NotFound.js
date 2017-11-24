import React from 'react'
import { Route } from 'dva/router'

const NotFound = () =>
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        // eslint-disable-next-line no-param-reassign
        staticContext.status = 404
      }
      return (
        <div>
          <h1>404 未找到</h1>
        </div>
      )
    }}
  />

NotFound.title = '404 未找到'
NotFound.skipMenu = true

export default NotFound
