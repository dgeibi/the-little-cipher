require('./register')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const requireWithWebpack = require('./requireWithWebpack')
const getFilename = require('./getFilename')
const rerequire = require('../helper/rerequire')
const interopDefault = require('../helper/interopDefault')

function Prerender(opts) {
  this.opts = opts
}

Prerender.prototype.apply = function apply(compiler) {
  compiler.plugin('run', async (c, callback) => {
    const { baseConfig, entry, getExtraOpts, render, renderPaths } = this.opts
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
    plugins.forEach(p => {
      p.apply(compiler)
    })
    callback()
  })
}

module.exports = Prerender
