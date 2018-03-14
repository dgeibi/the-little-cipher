import React, { Component } from 'react'
import { Menu, Popover, Icon } from 'antd'
import { Link } from 'dva/router'
import { Media as M } from 'react-fns'
import { getMatchKey } from '..'
import './Header.css'

const Media = M.default || M
const MenuItem = Menu.Item

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

  renderMenu(mode) {
    const { currentPath, routes } = this.props

    return (
      <Menu mode={mode} defaultSelectedKeys={[getMatchKey(currentPath)]} styleName="menu">
        {routes.map(
          ({ component: { title, skipMenu }, path }) =>
            skipMenu ? null : (
              <MenuItem key={path}>
                <Link to={path}>{title}</Link>
              </MenuItem>
            )
        )}
      </Menu>
    )
  }

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.target.click()
    }
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
                  <Icon
                    styleName="nav-icon"
                    type="menu"
                    onClick={this.handleShowMenu}
                    onKeyDown={this.handleKeyDown}
                    tabIndex="0"
                  />
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

/*

*/
