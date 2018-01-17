const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WPC = require('../helper/WPC')

module.exports = options =>
  WPC.plugin(
    new UglifyJsPlugin(
      Object.assign(
        {
          uglifyOptions: {
            ie8: false,
            ecma: 8,
            output: {
              comments: false,
              beautify: false,
            },
          },
          parallel: true,
        },
        options
      )
    )
  )
