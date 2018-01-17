const webpack = require('webpack')
const WPC = require('../helper/WPC')

module.exports = (opts = {}) => {
  const keys = Object.keys(opts)
  if (keys.length < 1) return null

  const definitions = {}
  keys.forEach(key => {
    const value = JSON.stringify(opts[key])
    definitions[key] = value
  })

  return WPC.plugin(new webpack.DefinePlugin(definitions))
}
