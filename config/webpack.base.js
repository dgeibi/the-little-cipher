const path = require('path')
const merge = require('webpack-merge')

const css = require('./helper/css')
const defineNodeEnv = require('./helper/defineNodeEnv')
const { getLocalIdent } = require('./helper/getStyleName')
const rule = require('./helper/rule')

const babelConfig = require('./babel/browsers')

const main = {
  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      Cipher: path.resolve(__dirname, '../src/cipher'),
      Util$: path.resolve(__dirname, '../src/util.js'),
    },
  },
}

const ANTD_DIR = path.resolve(__dirname, '../node_modules/antd/')
const SRC_DIR = path.resolve(__dirname, '../src')

module.exports = (env = {}) => {
  const isProduction = env.production === true
  const isSSR = env.ssr === true
  const nodeEnv = !isProduction ? 'development' : 'production'
  const babelEnv = isSSR ? 'ssr' : nodeEnv

  return merge([
    main,
    defineNodeEnv(nodeEnv),
    css({
      ssr: isSSR,
      rule: {
        test: /\.css$/,
        include: ANTD_DIR,
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
        include: SRC_DIR,
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
      include: [SRC_DIR, ANTD_DIR],
      loader: 'babel-loader',
      options: babelConfig(babelEnv),
    }),
  ])
}
