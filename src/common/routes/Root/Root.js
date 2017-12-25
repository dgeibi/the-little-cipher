import React from 'react'
import { Layout, Icon } from 'antd'
import { renderRoutes } from 'react-router-config'

import { connect } from 'dva'
import Header from './Header'
import { innerRoutes } from '..'
import DocumentTitle from '../../components/DocumentTitle'

import './Root.css'

const { Content, Footer } = Layout

function Root({ route, loading, history, location: { pathname } }) {
  return (
    <Layout>
      <DocumentTitle />
      <Header history={history} currentPath={pathname} routes={innerRoutes} />
      <Content styleName="content">
        <div styleName="content-inner">{renderRoutes(route.routes)}</div>
      </Content>
      <Footer styleName="footer">©2017 Created by dgeibi</Footer>
      {loading && <Icon type="loading" styleName="loading" />}
    </Layout>
  )
}

export default connect(state => {
  const loading = state.loading && state.loading.global
  return { loading }
})(Root)
