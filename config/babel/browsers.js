module.exports = env => {
  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          modules: false,
          targets:
            env === 'ssr'
              ? {
                  node: 'current',
                }
              : {
                  browsers: 'last 2 versions',
                },
        },
      ],
      '@babel/preset-stage-3',
      '@babel/preset-react',
    ],
    plugins: [
      'transform-decorators-legacy',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      [
        'import',
        env === 'ssr'
          ? {
              libraryName: 'antd',
            }
          : {
              libraryName: 'antd',
              style: 'css',
              libraryDirectory: 'es',
            },
      ],
    ],
  }

  if (env === 'development') {
    config.plugins.push('dva-hmr')
  }

  const { generateScopedName } = require('../helper/getStyleName')
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
