const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')

const main = {
  entry: {
    app: path.resolve(__dirname, '../src/client/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
}

module.exports = async (env = {}) => {
  const isProduction = env.production === true

  if (isProduction) {
    const htmlPlugins = await require('./prerender-html-plugin')()
    return merge(main, base(env), htmlPlugins, require('./webpack.prod'))
  }
  return merge(main, base(env), require('./webpack.dev'))
}
