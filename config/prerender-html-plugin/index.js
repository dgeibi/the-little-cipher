const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const requireRenderer = require('./requireRenderer')
const getFilename = require('./getFilename')

async function getHtmlPlugins() {
  const { render, renderPaths } = await requireRenderer()
  const template = join(__dirname, '../../src/client/index.ejs')

  // clean up caches to receive new config
  delete require.cache[require.resolve('babel-plugin-import')]

  const plugins = renderPaths.map(path => {
    const { bodyContent, helmet } = render(path, {})
    const filename = getFilename(path)

    return new HtmlWebpackPlugin({
      template,
      filename,
      bodyContent,
      helmet,
    })
  })
  return { plugins }
}

module.exports = getHtmlPlugins
