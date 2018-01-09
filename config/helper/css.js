module.exports = ({ ssr, rule, extractOptions, extract }) => {
  if (!rule || !rule.use) {
    throw Error('rule and rule.use required')
  }
  const mRule = Object.assign({}, rule)
  let use
  if (Array.isArray(rule.use) && rule.use[0]) {
    use = mRule.use.slice()
  } else if (rule.loader || rule.use) {
    const { loader, options } = rule
    delete mRule.loader
    delete mRule.use
    delete mRule.options
    if (loader) {
      use = [{ loader, options }]
    } else {
      use = [{ loader: rule.use, options }]
    }
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
