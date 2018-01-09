const webpack = require('webpack')
const merge = require('./helper/merge')
const env = require('./env')

module.exports = merge([
  require('./webpack.client')({ production: true }),
  require('./prerender-html-plugin')(env.prerender),
  require('./helper/outputName')({ chunkhash: true }),
  require('./helper/uglifyJS')(),
  {
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
