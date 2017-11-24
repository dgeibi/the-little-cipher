import React, { Component } from 'react'
import { Menu, Popover, Icon } from 'antd'
import { Link } from 'dva/router'
import { Media } from 'react-fns'
import { plainPath } from 'Util'

import './Header.css'

const TheMenu = ({ mode, currentPath, routes }) =>
  <Menu mode={mode} defaultSelectedKeys={[plainPath(currentPath)]} styleName="menu">
    {routes.map(({ component: { title, skipMenu }, path }) =>
        (skipMenu
          ? null
          : <Menu.Item key={path}>
            <Link to={path}>
              {title}
            </Link>
          </Menu.Item>))}
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
    const { currentPath, routes } = this.props

    return (
      <header styleName="header">
        <Media query="(max-width: 599px)">
          {(match) => {
            const menuMode = match ? 'inline' : 'horizontal'
            if (match) {
              return (
                <Popover
                  placement="bottomLeft"
                  content={<TheMenu currentPath={currentPath} mode={menuMode} routes={routes} />}
                  trigger="click"
                  visible={menuVisible}
                  arrowPointAtCenter
                  onVisibleChange={this.onMenuVisibleChange}
                >
                  <Icon styleName="nav-icon" type="menu" onClick={this.handleShowMenu} />
                </Popover>
              )
            }
            return <TheMenu currentPath={currentPath} mode={menuMode} routes={routes} />
          }}
        </Media>
      </header>
    )
  }
}

export default Header
