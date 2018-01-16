import webpack from 'webpack'
import { join } from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

export default async config => {
  const webpackConfig = await normalizeConfig(config)
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
      res.set('Content-Type', 'text/html')
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

async function normalizeConfig(anyConfig) {
  if (typeof func === 'function') return anyConfig()
  return anyConfig
}
