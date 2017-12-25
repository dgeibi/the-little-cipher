import webpack from 'webpack'
import { join } from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import configPromise from '../../config/webpack.client.dev'

export default async () => {
  const webpackConfig = await configPromise
  const compiler = webpack(webpackConfig)

  function historyApiFallback(req, res, next) {
    if (
      req.method !== 'GET' &&
      req.method !== 'HEAD' &&
      req.get('accept').indexOf('html') < 0
    ) {
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

  return [
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
    webpackHotMiddleware(compiler),
    historyApiFallback,
  ]
}
