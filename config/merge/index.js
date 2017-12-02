const webpackMerge = require('webpack-merge')

async function merge(...args) {
  const configs = []

  async function push(x) {
    if (x && typeof x === 'object') {
      if (x instanceof Promise) {
        const px = await x
        if (px && typeof px === 'object') {
          configs.push(px)
        }
      } else {
        configs.push(x)
      }
    }
  }

  async function pushConfig(x) {
    if (!x) return
    if (typeof x === 'function') {
      await push(x())
    } else {
      await push(x)
    }
  }

  /* eslint-disable no-restricted-syntax, no-await-in-loop */
  for (const x of args) {
    if (Array.isArray(x)) {
      for (const config of x) {
        if (config) await pushConfig(config)
      }
    } else if (x) {
      await pushConfig(x)
    }
  }

  return webpackMerge(configs)
}

module.exports = merge
