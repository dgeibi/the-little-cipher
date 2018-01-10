const merge = require('webpack-merge')

const env = require('./env')

module.exports = webpackEnv =>
  merge([
    require('./webpack.base')(webpackEnv),
    {
      output: {
        path: env.client.outputPath,
      },
    },
  ])
