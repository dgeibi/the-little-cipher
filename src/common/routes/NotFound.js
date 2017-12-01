import React from 'react'
import { Route, Redirect } from 'dva/router'

const NotFound = () => <Route render={() => <Redirect to="/" />} />

export default NotFound
