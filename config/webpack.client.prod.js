const webpack = require('webpack')
const merge = require('./helper/merge')
const env = require('./env')

process.env.NODE_ENV = 'production'

module.exports = merge([
  require('./webpack.client')({ production: true }),
  require('./prerender-html-plugin')(env.prerender),
  require('./presets/outputName')({ chunkhash: true }),
  require('./presets/uglifyJS')(),
  {
    entry: {
      client: env.client.entry,
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => module.context && module.context.includes('node_modules'),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'antd',
        chunks: ['vendor'],
        minChunks: module => module.context && /antd|rc-/.test(module.context),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity,
      }),
    ],
  },
])
