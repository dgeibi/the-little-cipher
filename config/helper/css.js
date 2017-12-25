module.exports = ({ ssr, rule, extractOptions, extract }) => {
  if (!rule || !rule.use) {
    throw Error('rule and rule.use required')
  }
  const mRule = Object.assign({}, rule)
  let use
  if (rule.use && rule.use[0]) {
    use = mRule.use.slice()
  } else if (rule.loader) {
    const { loader, options } = rule
    delete mRule.loader
    delete mRule.options
    use = [{ loader, options }]
  } else {
    throw Error('can not find rule use')
  }
  if (ssr === true) {
    if (use[0].loader && !/css-loader/.test(use[0].loader))
      throw Error('You may write wrong!')
    use[0].loader = 'css-loader/locals'
    return {
      module: { rules: [Object.assign(mRule, { use })] },
    }
  }
  if (extract && extractOptions) {
    const ExtractTextPlugin = require('extract-text-webpack-plugin')
    const extractor = new ExtractTextPlugin(extractOptions)
    use = extractor.extract(use)
    return {
      plugins: [extractor],
      module: { rules: [Object.assign(mRule, { use })] },
    }
  }
  use.unshift('style-loader')
  return {
    module: { rules: [Object.assign(mRule, { use })] },
  }
}
