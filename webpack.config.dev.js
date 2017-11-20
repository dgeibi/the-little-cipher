const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const path = require('path')
const pkg = require('./package')

const output = path.resolve(__dirname, pkg.dist_dir)

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },
  plugins: [new NamedModulesPlugin(), new HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    contentBase: output,
  },
}
