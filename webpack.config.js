const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')

const main = {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
}

module.exports = (env = {}) => {
  const isProduction = env.production === true

  const common = base(env)

  if (isProduction) {
    return merge(main, common, require('./config/webpack.prod'))
  }
  return merge(main, common, require('./config/webpack.dev'))
}
