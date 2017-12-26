const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const getConfig = require('./getConfig')
const { join } = require('path')

const vm = require('vm')

async function requireRenderer({ src }) {
  const fs = new MemoryFS()
  const dist = join(__dirname, 'render.js')
  const compiler = webpack(
    await getConfig({
      src,
      dist,
    })
  )
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
      const srcCode = fs.readFileSync(dist, 'utf8')
      const vmModule = { exports: {} }
      const script = new vm.Script(require('module').wrap(srcCode))
      script.runInThisContext()(vmModule.exports, require, vmModule)
      console.log('renderer builted')
      resolve(vmModule.exports)
    })
  })
}

module.exports = requireRenderer
