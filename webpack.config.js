const merge = require('webpack-merge')
const path = require('path')
const css = require('./config/css')
const defineNodeEnv = require('./config/defineNodeEnv')
const base = require('./webpack.config.base')
const { generateScopedName, getLocalIdent } = require('./config/getStyleName')
const rule = require('./config/rule')

const defaultInclude = [path.resolve(__dirname, 'src')]

module.exports = (env = {}) => {
  const isProduction = env.production === true
  const nodeEnv = !isProduction ? 'development' : 'production'
  process.env.NODE_ENV = nodeEnv

  const common = merge([
    base,
    defineNodeEnv(nodeEnv),
    css({
      rule: {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules/antd/')],
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
      options: {
        plugins: [
          [
            'react-css-modules',
            {
              webpackHotModuleReloading: !isProduction,
              generateScopedName,
              filetypes: {
                '.css': {
                  plugins: ['postcss-nesting'],
                },
              },
            },
          ],
        ],
      },
    }),
  ])

  if (isProduction) {
    return merge(common, require('./webpack.config.prod'))
  }
  return merge(common, require('./webpack.config.dev'))
}
