import webpack from 'webpack'
import { join } from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import getWebpackConfig from '../../config/webpack.client'

export default async () => {
  const webpackConfig = await getWebpackConfig()

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

  return [
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
    webpackHotMiddleware(compiler),
    historyApiFallback,
  ]
}
