import React, { Fragment } from 'react'

function IndexPage() {
  return (
    <Fragment>
      <p>如菜单所示，本应用实现了三种古典密码，其中凯撒密码、Hill密码在浏览器计算， Playfair密码在服务器计算，都支持文本和文件输入。</p>
      <p>
        源码已发布在 <a href="https://github.com/dgeibi/the-little-cipher">GitHub</a>。
      </p>
    </Fragment>
  )
}

IndexPage.title = '首页'
IndexPage.exact = true

export default IndexPage
