'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

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
  app.use('/static', _express2.default.static((0, _path.resolve)(__dirname, STATIC_DIR)));
  app.get('*', require('./ssr').default);
}

app.post('/playfair', upload.single('plaintext'), _playfair2.default);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Serving on http://localhost:${server.address().port}`);
});
//# sourceMappingURL=index.js.map