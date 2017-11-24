module.exports = ({
  disable, rule, extractOptions, extract,
}) => {
  if (disable === true) return {}
  if (!rule || !rule.use) {
    throw Error('rule and rule.use required')
  }
  if (extract && extractOptions) {
    const ExtractTextPlugin = require('extract-text-webpack-plugin')
    const extractor = new ExtractTextPlugin(extractOptions)
    const use = extractor.extract(rule.use)
    return {
      plugins: [extractor],
      module: { rules: [Object.assign({}, rule, { use })] },
    }
  }
  const use = ['style-loader', ...rule.use]
  return {
    module: { rules: [Object.assign({}, rule, { use })] },
  }
}
