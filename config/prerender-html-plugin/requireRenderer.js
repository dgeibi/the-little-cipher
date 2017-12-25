const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const ssrConfigPromise = require('../webpack.ssr')
const { join } = require('path')
const vm = require('vm')

async function requireRenderer() {
  const fs = new MemoryFS()
  const compiler = webpack(await ssrConfigPromise)
  compiler.outputFileSystem = fs

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err || stats)
        console.log(
          stats.toString({
            chunks: false, // Makes the build much quieter
            colors: true, // Shows colors in the console
          })
        )
        return
      }
      const src = fs.readFileSync(join(__dirname, '../render.js'), 'utf8')
      const vmModule = { exports: {} }
      const script = new vm.Script(require('module').wrap(src))
      script.runInThisContext()(vmModule.exports, require, vmModule)
      console.log('renderer builted')
      resolve(vmModule.exports)
    })
  })
}

module.exports = requireRenderer
