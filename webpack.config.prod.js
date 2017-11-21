const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  output: {
    publicPath: './',
  },
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
  ],
}
