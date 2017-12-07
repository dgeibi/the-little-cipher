const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const config = require('./webpack.client.prod')
const merge = require('./merge')

module.exports = merge(config, {
  plugins: [new BundleAnalyzerPlugin()],
})
