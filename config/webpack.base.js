const path = require('path')
const merge = require('webpack-merge')
const css = require('./presets/css')
const env = require('./env')

module.exports = (webpackEnv = {}) => {
  const isProduction = webpackEnv.production === true
  const isSSR = webpackEnv.ssr === true
  const nodeEnv = isProduction ? 'production' : 'development'
  const babelEnv = isSSR ? 'ssr' : nodeEnv

  return merge([
    require('./helper/WPC').alias(env.alias),
    require('./presets/define')({
      'process.env.NODE_ENV': nodeEnv,
      'process.env.SSR': isSSR,
    }),
    {
      output: {
        publicPath: '/',
      },
    },
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
      options: require('./babel/browsers')(babelEnv),
    }),
  ])
}
