module.exports = env => {
  const config = {
    cacheDirectory: true,
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
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

  config.plugins.push([
    'react-css-modules',
    {
      webpackHotModuleReloading: env === 'development',
      generateScopedName: require('../cssModules/generateScopedName'),
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
