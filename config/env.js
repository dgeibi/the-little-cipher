const { join } = require('path')

const resolve = join.bind(null, __dirname, '../')
const srcDir = resolve('src')

const env = {
  srcDir,
  server: {
    entry: './src/server/index.js',
    outputPath: resolve('dist/server'),
  },
  client: {
    entry: './src/client/index.js',
    outputPath: resolve('dist/static'),
  },
  prerender: {
    render: './src/ssr/render.js',
    entry: './src/createApp.js',
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
