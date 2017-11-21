import express from 'express'

const app = express()
const DEV = process.env.NODE_ENV === 'development'

if (DEV) {
  const webpack = require('webpack')
  const webpackConfig = require('../../webpack.config')()
  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }))

  app.use(require('webpack-hot-middleware')(compiler))
} else {
  app.use(express.static('public'))
}

const server = app.listen(3000, () => console.log(server.address()))
