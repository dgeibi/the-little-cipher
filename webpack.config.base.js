const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('./package')

const DIST_DIR = path.resolve(__dirname, pkg.dist_dir)

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: 'src/index.ejs',
    }),
  ],
}
