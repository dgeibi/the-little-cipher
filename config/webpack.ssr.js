const merge = require('./merge')
const base = require('./webpack.base')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(base({ ssr: true }), {
  entry: {
    render: path.resolve(__dirname, '../src/render/index.js'),
  },
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: [/^antd\/.*\/style/, /^(antd|rc-[^/]+)\/es/],
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
    libraryTarget: 'commonjs2',
  },
})
