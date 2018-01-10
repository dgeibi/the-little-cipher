const webpack = require('webpack')

module.exports = (opts = {}) => {
  const keys = Object.keys(opts)
  if (keys.length < 1) return null

  const definitions = {}
  keys.forEach(key => {
    const value = JSON.stringify(opts[key])
    definitions[key] = value
  })

  return {
    plugins: [new webpack.DefinePlugin(definitions)],
  }
}
