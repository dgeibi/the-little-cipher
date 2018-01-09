const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = ({ nodeExternalsOptions, sourcemap } = {}) => {
  const config = {
    node: {
      console: false,
      global: false,
      process: false,
      __filename: false,
      __dirname: false,
      Buffer: false,
      setImmediate: false,
    },
    target: 'node',
    externals: [nodeExternals(nodeExternalsOptions)],
  }
  if (sourcemap) {
    config.devtool = 'sourcemap'
    config.plugins = config.plugins || []
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      })
    )
  }
  return config
}
