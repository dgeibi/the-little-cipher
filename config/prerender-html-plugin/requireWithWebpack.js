const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const path = require('path')
const vm = require('vm')
const node = require('../helper/node')
const merge = require('../helper/merge')
const validateBaseConfig = require('./validateBaseConfig')

async function requireWithWebpack({ entry, baseConfig }) {
  const fs = new MemoryFS()
  const dist = path.join(__dirname, 'anything.js')

  validateBaseConfig(baseConfig)

  const webpackConfig = await merge([
    baseConfig,
    node(),
    {
      entry,
      output: {
        path: path.dirname(dist),
        filename: path.basename(dist),
        libraryTarget: 'commonjs2',
      },
    },
  ])

  const compiler = webpack(webpackConfig)
  compiler.outputFileSystem = fs

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err || stats)
        // eslint-disable-next-line
        console.log(
          stats.toString({
            chunks: false,
            colors: true,
          })
        )
        return
      }
      const srcCode = fs.readFileSync(dist, 'utf8')
      const vmModule = { exports: {} }
      const script = new vm.Script(require('module').wrap(srcCode))

      // exports, require, module, __filename, __dirname
      script.runInThisContext()(vmModule.exports, require, vmModule, dist, __dirname)
      resolve(vmModule.exports)
    })
  })
}

module.exports = requireWithWebpack
