import webpack from 'webpack'
import { join } from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import getWebpackConfig from '../../webpack.config'

const webpackConfig = getWebpackConfig()

const compiler = webpack(webpackConfig)

function historyApiFallback(req, res, next) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    next()
    return
  }
  const filename = join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      next(err)
      return
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
}

const middlewares = [
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }),
  webpackHotMiddleware(compiler),
  historyApiFallback,
]

export default middlewares
