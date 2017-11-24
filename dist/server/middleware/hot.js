'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = require('../../../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const webpackConfig = (0, _webpack4.default)();

const compiler = (0, _webpack2.default)(webpackConfig);

const middlewares = [(0, _webpackDevMiddleware2.default)(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}), (0, _webpackHotMiddleware2.default)(compiler), (req, res, next) => {
  const filename = (0, _path.join)(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
}];

exports.default = middlewares;
//# sourceMappingURL=hot.js.map