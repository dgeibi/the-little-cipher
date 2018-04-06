const path = require('path')
const merge = require('webpack-merge')
const env = require('./env')
const WPC = require('./helper/WPC')
const filter = require('./helper/filter')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (webpackEnv = {}) => {
  const isProduction = webpackEnv.production === true
  const isSSR = webpackEnv.ssr === true
  const mode = isProduction ? 'production' : 'development'
  const CSS_LOADER = isSSR ? 'css-loader/locals' : 'css-loader'
  // eslint-disable-next-line
  const CSS_RES_LOADER = isSSR
    ? null
    : isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

  return merge([
    {
      mode,
      output: {
        publicPath: '/',
      },
    },
    WPC.alias(env.alias),
    require('./presets/define')({
      'process.env.SSR': isSSR,
    }),
    !isSSR &&
      isProduction &&
      WPC.plugin(
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash:8].css',
        })
      ),
    WPC.rule({
      test: /\.css$/,
      include: path.resolve('node_modules/antd/'),
      use: filter([
        CSS_RES_LOADER,
        {
          loader: CSS_LOADER,
          options: {
            minimize: true,
          },
        },
      ]),
    }),
    WPC.rule({
      test: /\.css$/,
      include: env.srcDir,
      use: filter([
        CSS_RES_LOADER,
        {
          loader: CSS_LOADER,
          options: {
            minimize: true,
            importLoaders: 1,
            modules: true,
            getLocalIdent: require('./cssModules/getLocalIdent'),
            sourceMap: !isProduction,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProduction,
          },
        },
      ]),
    }),
    require('./presets/babel')({
      include: env.srcDir,
      options: require('./babel/browsers')(isSSR ? 'ssr' : mode),
    }),
  ])
}
