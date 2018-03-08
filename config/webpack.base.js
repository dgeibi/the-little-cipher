const path = require('path')
const merge = require('webpack-merge')
const css = require('./presets/css')
const env = require('./env')

module.exports = (webpackEnv = {}) => {
  const isProduction = webpackEnv.production === true
  const isSSR = webpackEnv.ssr === true
  const mode = isProduction ? 'production' : 'development'

  return merge([
    {
      mode,
      output: {
        publicPath: '/',
      },
    },
    require('./helper/WPC').alias(env.alias),
    require('./presets/define')({
      'process.env.SSR': isSSR,
    }),
    isSSR ||
      css({
        rule: {
          test: /\.css$/,
          include: path.resolve('node_modules/antd/'),
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
        extractOptions: 'antd.[contenthash:8].css',
      }),
    css({
      ssr: isSSR,
      rule: {
        test: /\.css$/,
        include: env.srcDir,
        use: [
          {
            loader: 'css-loader',
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
        ],
      },
      extract: isProduction,
      extractOptions: 'main.[contenthash:8].css',
    }),
    require('./presets/babel')({
      include: env.srcDir,
      options: require('./babel/browsers')(isSSR ? 'ssr' : mode),
    }),
  ])
}
