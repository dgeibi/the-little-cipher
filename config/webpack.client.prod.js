const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const { join } = require('path')

const merge = require('./merge')
const client = require('./webpack.client')
const prerender = require('./prerender-html-plugin')

module.exports = merge(
  client({ production: true }),
  prerender({
    src: join(__dirname, '../src/render/index.js'),
  }),
  {
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
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
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: false,
          ecma: 8,
          output: {
            comments: false,
            beautify: false,
          },
        },
        parallel: true,
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  }
)
