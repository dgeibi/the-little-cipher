'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mod = mod;
exports.modInverse = modInverse;
exports.repeat = repeat;
exports.isPlainFile = isPlainFile;
const isUpperCase = exports.isUpperCase = c => c >= 'A' && c <= 'Z';

const codeOf = exports.codeOf = str => String(str).charCodeAt(0);

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function mod(x, y) {
  if (y === 0) return NaN;
  let m = x % y;
  if (m < 0) {
    m = Math.abs(y) + m;
  }
  return m;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const gcd = exports.gcd = (a, b) => b === 0 ? a : gcd(b, mod(a, b));

/**
 * @param {number} num
 * @param {number} m
 */
function modInverse(num, m) {
  if (num === 0 || gcd(num, m) > 1) return NaN;
  let i = 1;
  while (mod(i * num, m) !== 1) {
    i += 1;
  }
  return i;
}

function repeat(time, fn) {
  let cnt = 0;
  const rets = [];
  while (cnt < time) {
    rets.push(fn());
    cnt += 1;
  }
  return rets;
}

function isPlainFile(file) {
  return (/text|javascript|html|css|xml|json/.test(file.type || file.mimetype)
  );
}
//# sourceMappingURL=util.js.map