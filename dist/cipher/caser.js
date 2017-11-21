'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('../util');

const offset = (0, _util.codeOf)('A');

const caser = str => String(str).split('').map(c => {
  const C = c.toUpperCase();
  if (!(0, _util.isUpperCase)(C)) return c;
  const code = ((0, _util.codeOf)(C) - offset + 3) % 26 + offset;
  return String.fromCharCode(code);
}).join('');

exports.default = caser;
//# sourceMappingURL=caser.js.map