const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const requireRenderer = require('./requireRenderer')
const getFilename = require('./getFilename')

async function getHtmlPlugins() {
  const { render, titleMap } = await requireRenderer()
  const template = join(__dirname, '../../src/client/index.ejs')

  // clean up caches to receive new config
  delete require.cache[require.resolve('babel-plugin-import')]

  const plugins = Object.entries(titleMap).map(([path, title]) =>
    new HtmlWebpackPlugin({
      title: `${title} - The Little Cipher`,
      render,
      renderPath: path,
      template,
      filename: getFilename(path),
    }))
  return { plugins }
}

module.exports = getHtmlPlugins
