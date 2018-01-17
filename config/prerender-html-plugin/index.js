require('./register')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const requireWithWebpack = require('./requireWithWebpack')
const getFilename = require('./getFilename')
const rerequire = require('../helper/rerequire')
const interopDefault = require('../helper/interopDefault')

async function getHtmlPlugins({ baseConfig, entry, getExtraOpts, render, renderPaths }) {
  const createApp = interopDefault(
    await requireWithWebpack({ baseConfig: rerequire(baseConfig), entry })
  )

  const renderApp = interopDefault(rerequire(render))
  if (typeof renderApp !== 'function') {
    throw Error('opt render should be function')
  }

  const plugins = renderPaths.map(pathname => {
    const rendered = renderApp(createApp({ pathname }))
    const filename = getFilename(pathname)
    return new HtmlWebpackPlugin({
      filename,
      ...getExtraOpts(rendered),
    })
  })
  return { plugins }
}

module.exports = getHtmlPlugins
