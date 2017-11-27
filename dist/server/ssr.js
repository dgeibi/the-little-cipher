'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ssr;

var _util = require('../util');

var _render = require('../render');

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ssr(req, res, next) {
  if (req.accepts('html')) {
    const context = {};
    const path = (0, _util.plainPath)(req.url);
    const content = (0, _render2.default)(path, context);
    if (context.status === 404) {
      res.status(404);
    }
    res.type('html');
    res.send(content);
  } else {
    next();
  }
}
//# sourceMappingURL=ssr.js.map