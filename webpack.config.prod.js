const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const pkg = require('./package')

const DIST_DIR = pkg.dist_dir
module.exports = {
  output: {
    publicPath: './',
  },
  plugins: [
    new CleanWebpackPlugin([DIST_DIR]),
    new BabelMinifyWebpackPlugin(
      {
        removeConsole: true,
        removeDebugger: true,
      },
      {
        comments: false,
      }
    ),
  ],
}
