const webpack = require('webpack')
const merge = require('./helper/merge')
const env = require('./env')

module.exports = merge([
  require('./presets/node')(),
  require('./presets/outputName')(),
  require('./helper/WPC').alias(env.alias),
  require('./presets/babel')({
    include: env.srcDir,
  }),
  {
    entry: {
      index: env.server.entry,
    },
    output: {
      path: env.server.outputPath,
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
  },
])
