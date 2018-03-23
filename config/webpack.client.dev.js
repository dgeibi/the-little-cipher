const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('./helper/merge')
const env = require('./env')

module.exports = merge([
  require('./webpack.client'),
  require('./presets/outputName')(),
  {
    output: {
      globalObject: 'this', // https://github.com/webpack/webpack/issues/6642
    },
    devtool: 'cheap-module-source-map',
    entry: {
      client: require('./helper/prependEntry')(
        env.client.entry,
        'webpack-hot-middleware/client?reload=true'
      ),
    },
    plugins: [new HotModuleReplacementPlugin(), new HtmlWebpackPlugin(env.html || {})],
  },
])
