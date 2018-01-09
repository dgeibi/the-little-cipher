const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = options => ({
  plugins: [
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
    ),
  ],
})
