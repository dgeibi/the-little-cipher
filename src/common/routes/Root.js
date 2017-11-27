import React from 'react'
import { Layout, Icon } from 'antd'
import { renderRoutes } from 'react-router-config'

import { connect } from 'dva'
import Header from '../components/Header'
import { innerRoutes } from '../routes'

import './Root.css'

const { Content, Footer } = Layout

function Root({ currentPath, route, loading }) {
  return (
    <Layout styleName="layout">
      <Header currentPath={currentPath} routes={innerRoutes} />
      <Content styleName="content">
        <div styleName="content-inner">
          {renderRoutes(route.routes)}
        </div>
      </Content>
      <Footer styleName="footer">©2017 Created by dgeibi</Footer>
      {loading && <Icon type="loading" styleName="loading" />}
    </Layout>
  )
}

export default connect((state) => {
  const { pathname: currentPath } = state.routing.location
  const loading = state.loading && state.loading.global
  return { loading, currentPath }
})(Root)
