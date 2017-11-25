'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _fs = require('fs');

var _path = require('path');

var _util = require('../util');

var _playfair = require('./playfair');

var _playfair2 = _interopRequireDefault(_playfair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const upload = (0, _multer2.default)({ dest: 'uploads/' });

const app = (0, _express2.default)();
const DEV = process.env.NODE_ENV === 'development';
const STATIC_DIR = '../static';

app.use((0, _compression2.default)());
if (DEV) {
  app.use(require('../webpack/hotMiddleware').default);
} else {
  const render = require('../render').default;
  app.use('/static', _express2.default.static((0, _path.resolve)(__dirname, STATIC_DIR)));
  app.get('*', (req, res, next) => {
    if (req.accepts('html')) {
      const context = {};
      const path = (0, _util.plainPath)(req.url);
      const content = render(path, context);
      if (context.status === 404) {
        res.status(404);
      }
      res.type('html');
      res.send(content);
    } else {
      next();
    }
  });
}

app.post('/playfair', upload.single('plaintext'), (req, res) => {
  if (req.file && (0, _util.isPlainFile)(req.file)) {
    (0, _fs.readFile)(req.file.path, (err, buffer) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.status(200).json((0, _playfair2.default)(req.body.secret, buffer.toString()));
    });
  } else if (req.body.plaintext) {
    res.status(200).json((0, _playfair2.default)(req.body.secret, req.body.plaintext));
  } else {
    res.sendStatus(400);
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Serving on http://localhost:${server.address().port}`);
});
//# sourceMappingURL=index.js.map