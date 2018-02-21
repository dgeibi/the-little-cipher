const webpack = require('webpack')
const merge = require('./helper/merge')
const env = require('./env')
const Prerender = require('./prerender-html-plugin')

process.env.NODE_ENV = 'production'

module.exports = merge([
  require('./webpack.client')({ production: true }),
  require('./presets/outputName')({ chunkhash: true }),
  require('./presets/uglifyJS')(),
  {
    entry: {
      client: env.client.entry,
    },
    plugins: [
      new Prerender({
        render: './src/ssr/render.js',
        entry: './src/createApp.js',
        renderPaths: ['/', '/caser/', '/playfair/', '/hill/'],
        baseConfig: './config/webpack.prerender.js',
        getExtraOpts: ({ bodyContent, helmet }) => ({ ...env.html, bodyContent, helmet }),
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => module.context && module.context.includes('node_modules'),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'antd',
        minChunks: module =>
          module.context && /node_modules[/\\]antd|rc-/.test(module.context),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity,
      }),
    ],
  },
])
