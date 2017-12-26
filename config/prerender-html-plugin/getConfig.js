const merge = require('../merge')
const base = require('../webpack.base')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = ({ src, dist }) =>
  merge(base({ ssr: true }), {
    entry: src,
    target: 'node',
    externals: [nodeExternals()],
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
      path: path.dirname(dist),
      filename: path.basename(dist),
      libraryTarget: 'commonjs2',
    },
  })
