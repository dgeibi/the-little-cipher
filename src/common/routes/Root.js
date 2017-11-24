import React from 'react'
import { Layout } from 'antd'
import { renderRoutes } from 'react-router-config'

import Header from '../components/Header'
import { innerRoutes } from '../routes'

import './Root.css'

const { Content, Footer } = Layout

function RouterConfig({ currentPath, route }) {
  return (
    <Layout styleName="layout">
      <Header currentPath={currentPath} routes={innerRoutes} />
      <Content styleName="content">
        <div styleName="content-inner">
          {renderRoutes(route.routes)}
        </div>
      </Content>
      <Footer styleName="footer">©2017 Created by dgeibi</Footer>
    </Layout>
  )
}

export default RouterConfig
