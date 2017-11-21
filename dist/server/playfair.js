'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _playfair = require('../cipher/playfair');

exports.default = (secret, plaintext) => {
  const { diff, square } = (0, _playfair.playfair)(secret, plaintext);

  const cipherText = (0, _playfair.cipherString)(diff);
  const plainText = (0, _playfair.originalString)(diff);

  return {
    diff,
    square,
    cipherText,
    plainText
  };
};
//# sourceMappingURL=playfair.js.map