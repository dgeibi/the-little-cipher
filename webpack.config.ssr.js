const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const CipherRegex = /^Cipher/

const main = {
  devtool: 'sourcemap',
  entry: {
    'render/index': './src/render/index.js',
  },
  target: 'node',
  externals: [
    nodeExternals(),
    (context, request, callback) => {
      if (CipherRegex.test(request)) {
        callback(null, `commonjs ${request.replace(CipherRegex, '../cipher')}`)
        return
      }
      if (request === 'Util') {
        callback(null, 'commonjs ../util')
        return
      }
      callback()
    },
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
}

module.exports = merge(main, base({ ssr: true }))
