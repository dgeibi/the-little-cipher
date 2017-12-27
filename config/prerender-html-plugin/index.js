const HtmlWebpackPlugin = require('html-webpack-plugin')
const requireWithWebpack = require('./requireWithWebpack')
const getConfig = require('./getConfig')
const getFilename = require('./getFilename')

async function getHtmlPlugins({ entry, template, getExtraOpts, render, renderPaths }) {
  let createApp = await requireWithWebpack({ entry, getConfig })
  createApp = createApp.default || createApp
  const plugins = renderPaths.map(path => {
    const rendered = render(createApp(path))
    const filename = getFilename(path)
    return new HtmlWebpackPlugin({
      template,
      filename,
      ...getExtraOpts(rendered),
    })
  })
  return { plugins }
}

module.exports = getHtmlPlugins
