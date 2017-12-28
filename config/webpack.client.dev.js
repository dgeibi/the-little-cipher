const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('../package')
const merge = require('./merge')
const client = require('./webpack.client')

const clientConfig = client()
module.exports = merge(clientConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: Array.isArray(clientConfig.entry.app)
      ? ['webpack-hot-middleware/client?reload=true', ...clientConfig.entry.app]
      : ['webpack-hot-middleware/client?reload=true', clientConfig.entry.app],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.product_name || pkg.name,
      template: 'src/client/index.ejs',
    }),
  ],
})
