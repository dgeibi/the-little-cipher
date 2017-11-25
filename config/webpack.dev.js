const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const pkg = require('../package')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', './src/client/index.js'],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.product_name || pkg.name,
      template: 'src/client/index.ejs',
    }),
  ],
}
