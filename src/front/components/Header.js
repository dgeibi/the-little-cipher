import React, { Component } from 'react'
import { Menu, Popover, Icon } from 'antd'
import { Link } from 'dva/router'
import { Media } from 'react-fns'

import './Header.css'

const TheMenu = ({ mode, history, routes }) =>
  <Menu mode={mode} defaultSelectedKeys={[history.location.pathname]} styleName="menu">
    {Object.values(routes).map(({ title, address }) =>
      <Menu.Item key={address}>
        <Link to={address}>
          {title}
        </Link>
      </Menu.Item>)}
  </Menu>

class Header extends Component {
  state = {
    menuVisible: false,
  }

  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    })
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    })
  }

  render() {
    const { menuVisible } = this.state
    const { history, routes } = this.props

    return (
      <header styleName="header">
        <Media query="(max-width: 599px)">
          {(match) => {
            const menuMode = match ? 'inline' : 'horizontal'
            if (match) {
              return (
                <Popover
                  placement="bottomLeft"
                  content={<TheMenu history={history} mode={menuMode} routes={routes} />}
                  trigger="click"
                  visible={menuVisible}
                  arrowPointAtCenter
                  onVisibleChange={this.onMenuVisibleChange}
                >
                  <Icon styleName="nav-icon" type="menu" onClick={this.handleShowMenu} />
                </Popover>
              )
            }
            return <TheMenu history={history} mode={menuMode} routes={routes} />
          }}
        </Media>
      </header>
    )
  }
}

export default Header
