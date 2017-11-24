const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const path = require('path')
const pkg = require('./package')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const output = path.resolve(__dirname, pkg.dist_dir)

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
  devServer: {
    hot: true,
    contentBase: output,
  },
}
