import webpack from 'webpack'
import { join } from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

export default async config => {
  const webpackConfig = await normalizeConfig(config)
  webpackConfig.plugins = webpackConfig.plugins || []
  let started = false
  const untilStarted = new Promise(resolve => {
    webpackConfig.plugins.push({
      apply: c => {
        c.hooks.done.tap('firstBuildDone', () => {
          if (started) return
          started = true
          resolve()
        })
      },
    })
  })
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
      res.end(result)
    })
  }
  const middleware = [
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
    webpackHotMiddleware(compiler),
    historyApiFallback,
  ]
  await untilStarted
  return middleware
}

async function normalizeConfig(anyConfig) {
  if (typeof func === 'function') return anyConfig()
  return anyConfig
}
