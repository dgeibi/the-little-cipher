const merge = require('./helper/merge')

module.exports = merge([require('./webpack.client.prod'), require('./presets/analyzer')])
