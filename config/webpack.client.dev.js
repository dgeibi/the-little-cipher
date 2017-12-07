const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('../package')
const merge = require('./merge')
const client = require('./webpack.client')

module.exports = merge(client(), {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['webpack-hot-middleware/client?reload=true', './src/client/index.js'],
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
