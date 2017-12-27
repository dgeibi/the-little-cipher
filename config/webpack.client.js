const merge = require('webpack-merge')
const path = require('path')

const base = require('./webpack.base')

module.exports = env =>
  merge(base(env), {
    entry: {
      app: path.resolve(__dirname, '../src/client/index.js'),
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../dist/static'),
    },
  })
