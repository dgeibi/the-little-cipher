const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const main = {
  devtool: 'sourcemap',
  entry: {
    render: path.resolve(__dirname, '../src/render/index.js'),
  },
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: [/^antd\/lib\/.*style/],
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    __filename: false,
    __dirname: false,
    Buffer: false,
    setImmediate: false,
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
}

module.exports = merge(main, base({ ssr: true }))
