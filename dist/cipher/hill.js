'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inverse = exports.default = undefined;

var _matrix = require('../matrix');

var _util = require('../util');

/**
 * @typedef {number[][]} Matrix
 * @typedef {number[]} Lat
 */

const M = 3;
const ACode = (0, _util.codeOf)('A');
const XOffset = (0, _util.codeOf)('X') - ACode;

/**
 * @param {number} x
 * @returns {number}
 */
const mod26 = x => (0, _util.mod)(x, 26);

/**
 * @param {Lat} inputs
 * @returns {Matrix}
 */
const getLats = inputs => {
  const lats = [];
  let index;
  for (index = 0; index + M - 1 < inputs.length; index += M) {
    lats.push(inputs.slice(index, index + M));
  }
  if (index < inputs.length) {
    const last = inputs.slice(index);
    let left = M - last.length;
    while (left) {
      left -= 1;
      last.push(XOffset);
    }
    lats.push(last);
  }
  return lats;
};

/**
 * @param {string} x
 * @returns {number}
 */
const char2Offset = x => (0, _util.codeOf)(x) - ACode;

/**
 * @param {number} x
 * @returns {string}
 */
const offset2Char = x => String.fromCharCode(x + ACode);

/**
 * @param {number} x
 * @returns {string}
 */
const num2char = x => offset2Char(mod26(x));

/**
 * @param {Matrix} key
 * @returns {Matrix}
 */
function inverse(key) {
  const detK = (0, _util.mod)((0, _matrix.det)(key), 26);
  const rev = (0, _util.modInverse)(detK, 26);
  if (Number.isNaN(rev)) return null;
  const adj = (0, _matrix.adjugate)(key);
  return (0, _matrix.map)(adj, x => (0, _util.mod)(x * rev, 26));
}

/**
 * @param {Matrix} K
 * @param {string} plaintext
 */
function hill(K, plaintext) {
  const inputs = String(plaintext).toUpperCase().split('').filter(_util.isUpperCase).map(char2Offset);
  const P = (0, _matrix.transpose)(getLats(inputs));
  return P ? (0, _matrix.transpose)((0, _matrix.multiply)(K, P)).map(lat => lat.map(num2char).join('')).join('') : '';
}

hill.inverse = inverse;

exports.default = hill;
exports.inverse = inverse;
//# sourceMappingURL=hill.js.map