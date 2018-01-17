module.exports = extra =>
  require('../helper/WPC').rule(
    Object.assign(
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      extra
    )
  )
