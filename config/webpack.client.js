const merge = require('webpack-merge')

const env = require('./env')

module.exports = webpackEnv =>
  merge([
    require('./webpack.base')(webpackEnv),
    {
      entry: {
        client: env.client.entry,
      },
      output: {
        path: env.client.outputPath,
      },
    },
  ])
