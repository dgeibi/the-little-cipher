import React from 'react'
import { Layout } from 'antd'
import { Router, Route, Switch } from 'dva/router'

import Header from './components/Header'
import routes from './routes'

import './router.css'

const { Content, Footer } = Layout

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout styleName="layout">
        <Header history={history} routes={routes} />
        <Content styleName="content">
          <div styleName="content-inner">
            <Switch>
              {Object.values(routes).map(view =>
                <Route path={view.address} key={view.address} exact component={view} />)}
            </Switch>
          </div>
        </Content>
        <Footer styleName="footer">©2017 Created by dgeibi</Footer>
      </Layout>
    </Router>
  )
}

export default RouterConfig
