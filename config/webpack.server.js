const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const SRC_DIR = path.resolve(__dirname, '../src')
const DIST_DIR = path.resolve(__dirname, '../dist')
const defaultInclude = [SRC_DIR]

module.exports = {
  devtool: 'sourcemap',
  entry: {
    'server/index': path.join(SRC_DIR, 'server/index.js'),
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  node: {
    console: false,
    global: false,
    process: false,
    __filename: false,
    __dirname: false,
    Buffer: false,
    setImmediate: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: defaultInclude,
        loader: 'babel-loader',
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
}
