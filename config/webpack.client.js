const merge = require('./merge')
const base = require('./webpack.base')
const path = require('path')

const main = {
  entry: {
    app: path.resolve(__dirname, '../src/client/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
  },
}

module.exports = async (env = {}) => {
  const isProduction = env.production === true

  if (isProduction) {
    return merge(
      main,
      base(env),
      require('./prerender-html-plugin'),
      require('./webpack.client.prod')
    )
  }
  return merge(main, base(env), require('./webpack.client.dev'))
}
