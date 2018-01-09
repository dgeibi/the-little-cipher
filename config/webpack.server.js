const webpack = require('webpack')
const merge = require('./helper/merge')
const env = require('./env')

module.exports = merge([
  require('./helper/node')(),
  require('./helper/outputName')(),
  require('./helper/alias')(env.alias),
  require('./helper/babelRule')({
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
