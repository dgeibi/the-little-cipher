'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('react-dom/server');

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (renderMe, { title } = {}) => `<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <title>${title ? `${title} - ` : ''}${_package2.default.product_name || _package2.default.name}</title>
  <link href="/static/antd.css" rel="stylesheet">
  <link href="/static/main.css" rel="stylesheet">
</head>
<body>
  <div id="root">${(0, _server.renderToString)(renderMe)}</div>
  <script src="/static/app.js"></script>
</body>
</html>`;
//# sourceMappingURL=render.js.map