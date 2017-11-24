const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')

const pkg = require('./package')

const DIST_DIR = path.resolve(__dirname, pkg.dist_dir)

const main = {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
}

module.exports = (env = {}) => {
  const isProduction = env.production === true

  const common = base(env)

  if (isProduction) {
    return merge(main, common, require('./webpack.config.prod'))
  }
  return merge(main, common, require('./webpack.config.dev'))
}
