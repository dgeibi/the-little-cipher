const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')
const webpack = require('webpack')

const merge = require('./merge')
const client = require('./webpack.client')
const prerender = require('./prerender-html-plugin')

module.exports = merge(client({ production: true }), prerender, {
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
})
