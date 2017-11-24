module.exports = (env) => {
  const config = {
    presets: [
      [
        'babel-preset-env',
        {
          useBuiltIns: true,
          modules: false,
          targets:
            env === 'ssr'
              ? {
                node: 'current',
              }
              : {
                browsers: 'last 2 versions, > 5%',
              },
        },
      ],
      'babel-preset-stage-2',
      'babel-preset-react',
    ],
    plugins: [
      'babel-plugin-transform-decorators-legacy',
      [
        'babel-plugin-transform-class-properties',
        {
          loose: true,
        },
      ],
      [
        'babel-plugin-import',
        {
          libraryName: 'antd',
          style: env !== 'ssr' && 'css',
        },
      ],
    ],
  }

  if (env === 'development') {
    config.plugins.push('babel-plugin-dva-hmr')
  }

  const { generateScopedName } = require('../getStyleName')
  config.plugins.push([
    'react-css-modules',
    {
      webpackHotModuleReloading: env === 'development',
      generateScopedName,
      filetypes: {
        '.css': {
          plugins: ['postcss-nesting'],
        },
      },
      removeImport: env === 'ssr',
    },
  ])
  return config
}
