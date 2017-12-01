const path = require('path')
const merge = require('webpack-merge')

const css = require('./css')
const defineNodeEnv = require('./defineNodeEnv')
const { getLocalIdent } = require('./getStyleName')
const rule = require('./rule')

const babelConfig = require('./babel/browsers')

const defaultInclude = [path.resolve(__dirname, '../src')]

module.exports = (env = {}) => {
  const isProduction = env.production === true
  const isSSR = env.ssr === true
  const nodeEnv = !isProduction ? 'development' : 'production'
  const babelEnv = isSSR ? 'ssr' : nodeEnv

  return merge([
    {
      output: {
        publicPath: '/',
      },
    },
    defineNodeEnv(nodeEnv),
    css({
      ssr: isSSR,
      rule: {
        test: /\.css$/,
        include: [path.resolve(__dirname, '../node_modules/antd/')],
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      extract: true,
      extractOptions: 'antd.css',
    }),
    css({
      ssr: isSSR,
      rule: {
        test: /\.css$/,
        include: defaultInclude,
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 1,
              modules: true,
              getLocalIdent,
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
      extract: isProduction,
      extractOptions: 'main.css',
    }),
    rule({
      test: /\.js$/,
      include: defaultInclude,
      loader: 'babel-loader',
      options: babelConfig(babelEnv),
    }),
    {
      resolve: {
        alias: {
          Cipher: path.resolve(__dirname, '../src/cipher'),
          Util$: path.resolve(__dirname, '../src/util.js'),
        },
      },
    },
  ])
}
