const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const CipherRegex = /^Cipher/

const main = {
  devtool: 'sourcemap',
  entry: {
    'server/renderRoute': './src/server/renderRoute.js',
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

module.exports = (env = {}) => {
  const isProduction = env.production === true
  const common = base({ ...env, ssr: true })

  if (isProduction) {
    return merge(main, common, require('./webpack.config.prod'))
  }
  return merge(main, common)
}
