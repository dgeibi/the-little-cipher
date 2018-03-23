const merge = require('./helper/merge')
const env = require('./env')
const SimplePrerender = require('simple-prerender-webpack-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = 'production'

module.exports = merge([
  require('./webpack.client')({ production: true }),
  require('./presets/outputName')({ chunkhash: true }),
  {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
      },
    },
    entry: {
      client: env.client.entry,
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new SimplePrerender({
        entry: './src/ssr/render.js',
        routes: ['/', '/caser/', '/playfair/', '/hill/'],
        config: './config/webpack.prerender.js',
        getHtmlWebpackPluginOpts: ({ bodyContent, helmet }) => ({
          ...env.html,
          bodyContent,
          helmet,
        }),
      }),
    ],
  },
])
