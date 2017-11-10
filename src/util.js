exports.isUpperCase = c => c >= 'A' && c <= 'Z'

exports.codeOf = str => String(str).charCodeAt(0)

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function mod(x, y) {
  if (y === 0) return NaN
  let m = x % y
  if (m < 0) {
    m = Math.abs(y) + m
  }
  return m
}

exports.mod = mod

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const gcd = (a, b) => (b === 0 ? a : gcd(b, mod(a, b)))

exports.gcd = gcd

/**
 * @param {number} num
 * @param {number} m
 */
function modInverse(num, m) {
  if (num === 0 || gcd(num, m) > 1) return NaN
  let i = 1
  while (mod(i * num, m) !== 1) {
    i += 1
  }
  return i
}

exports.modInverse = modInverse
