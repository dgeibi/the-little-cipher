const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  plugins: [
    new BabelMinifyWebpackPlugin(
      {
        removeConsole: true,
        removeDebugger: true,
      },
      {
        comments: false,
      }
    ),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}
