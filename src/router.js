import React from 'react'
import { Layout, Menu } from 'antd'
import { Router, Route, Switch, Link } from 'dva/router'
import IndexPage from './routes/IndexPage'
import CaserView from './routes/CaserView'
import PlayfairView from './routes/PlayfairView'
import HillView from './routes/HillView'
import './router.css'

const { Header, Content, Footer } = Layout

const routes = [
  { title: '首页', address: '/', view: IndexPage },
  { title: '凯撒密码', address: '/caser/', view: CaserView },
  { title: 'Playfair密码', address: '/playfair/', view: PlayfairView },
  { title: 'Hill密码', address: '/hill/', view: HillView },
]

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout styleName="layout">
        <Header style={{ marginBottom: '25px' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[history.location.pathname]}
            style={{ lineHeight: '64px' }}
          >
            {routes.map(({ title, address }) =>
              <Menu.Item key={address}>
                <Link to={address}>
                  {title}
                </Link>
              </Menu.Item>)}
          </Menu>
        </Header>
        <Content styleName="content">
          <div styleName="content-inner">
            <Switch>
              {routes.map(({ address, view }) =>
                <Route path={address} key={address} exact component={view} />)}
            </Switch>
          </div>
        </Content>
        <Footer styleName="footer">©2017 Created by dgeibi</Footer>
      </Layout>
    </Router>
  )
}

export default RouterConfig
