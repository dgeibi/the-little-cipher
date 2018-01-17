const WPC = require('../helper/WPC')

module.exports = ({ ssr, rule, extractOptions, extract }) => {
  if (!rule || !(rule.use || rule.loader)) {
    throw Error('rule.use || rule.loader required')
  }

  const mRule = Object.assign({}, rule)
  let use
  if (Array.isArray(mRule.use) && rule.use[0]) {
    use = mRule.use.slice()
  } else if (rule.loader || (typeof rule.use === 'string' && rule.use)) {
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

  if (use[0].loader && !/css-loader/.test(use[0].loader)) {
    use.unshift({ loader: 'css-loader' })
  }

  mRule.use = use

  if (ssr === true) {
    mRule.use[0].loader = 'css-loader/locals'
    return WPC.rule(mRule)
  }

  if (extract && extractOptions) {
    const ExtractTextPlugin = require('extract-text-webpack-plugin')
    const extractor = new ExtractTextPlugin(extractOptions)
    mRule.use = extractor.extract(mRule.use)
    return {
      plugins: [extractor],
      module: { rules: [mRule] },
    }
  }

  mRule.use.unshift('style-loader')
  return WPC.rule(mRule)
}
