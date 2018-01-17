const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = () => require('../helper/WPC').plugin(new BundleAnalyzerPlugin())
