import React, { Component } from 'react'
import { Menu, Popover, Icon } from 'antd'
import { Link } from 'dva/router'
import { Media } from 'react-fns'
import { getMatchKey } from '..'
import './Header.css'

class Header extends Component {
  state = {
    menuVisible: false,
  }

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible,
    })
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    })
  }

  onMenuClick = ({ key, domEvent }) => {
    if (domEvent.target.nodeName === 'LI') {
      const { history } = this.props
      history.push(key)
    }
  }

  renderMenu(mode) {
    const { currentPath, routes } = this.props

    return (
      <Menu
        onClick={this.onMenuClick}
        mode={mode}
        defaultSelectedKeys={[getMatchKey(currentPath)]}
        styleName="menu"
      >
        {routes.map(
          ({ component: { title, skipMenu }, path }) =>
            skipMenu ? null : (
              <Menu.Item key={path}>
                <Link to={path}>{title}</Link>
              </Menu.Item>
            )
        )}
      </Menu>
    )
  }

  render() {
    const { menuVisible } = this.state

    return (
      <header styleName="header">
        <Media query="(max-width: 599px)">
          {match => {
            if (match) {
              return (
                <Popover
                  placement="bottomLeft"
                  content={this.renderMenu('inline')}
                  trigger="click"
                  visible={menuVisible}
                  arrowPointAtCenter
                  onVisibleChange={this.onMenuVisibleChange}
                >
                  <Icon styleName="nav-icon" type="menu" onClick={this.handleShowMenu} />
                </Popover>
              )
            }
            return this.renderMenu('horizontal')
          }}
        </Media>
      </header>
    )
  }
}

export default Header
