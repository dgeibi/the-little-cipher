module.exports = extra => ({
  module: {
    rules: [
      Object.assign(
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        extra
      ),
    ],
  },
})
