const { resolve } = require('path')

const srcDir = resolve('src')

const env = {
  srcDir,
  alias: {
    '@': srcDir,
  },
  server: {
    entry: './src/server/index.js',
    outputPath: resolve('dist/server'),
  },
  client: {
    entry: ['./src/client/polyfill.js', './src/client/index.js'],
    outputPath: resolve('dist/static'),
  },
  prerender: {
    render: './src/render/render.js',
    entry: './src/render/createApp.js',
    renderPaths: ['/', '/caser/', '/playfair/', '/hill/'],
    baseConfig: './config/webpack.prerender.js',
    getExtraOpts: ({ bodyContent, helmet }) => ({ ...env.html, bodyContent, helmet }),
  },
  html: {
    template: './src/client/index.ejs',
    title: 'The Little Cipher',
  },
}

module.exports = env
