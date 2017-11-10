/**
 * @typedef {number[][]} Matrix
 * @typedef {number[]} Lat
 */
const {
  transpose, multiply, map, det, adjugate, noob,
} = require('../matrix')
const {
  isUpperCase, mod, modInverse, codeOf,
} = require('../util')

const M = 3
const ACode = codeOf('A')
const XOffset = codeOf('X') - ACode

/**
 * @param {number} x
 * @returns {number}
 */
const mod26 = x => mod(x, 26)

/**
 * @param {Lat} inputs
 * @returns {Matrix}
 */
const getLats = (inputs) => {
  const lats = []
  let index
  for (index = 0; index + M - 1 < inputs.length; index += M) {
    lats.push(inputs.slice(index, index + M))
  }
  if (index < inputs.length) {
    const last = inputs.slice(index)
    let left = M - last.length
    while (left) {
      left -= 1
      last.push(XOffset)
    }
    lats.push(last)
  }
  return lats
}

/**
 * @param {string} x
 * @returns {number}
 */
const char2Offset = x => codeOf(x) - ACode

/**
 * @param {number} x
 * @returns {string}
 */
const offset2Char = x => String.fromCharCode(x + ACode)

/**
 * @param {number} x
 * @returns {string}
 */
const num2char = x => offset2Char(mod26(x))

/**
 * @param {Matrix} key
 * @returns {Matrix}
 */
function inverse(key) {
  const detK = mod(det(key), 26)
  const rev = modInverse(detK, 26)
  if (Number.isNaN(rev)) return noob
  const adj = adjugate(key)
  return map(adj, x => mod(x * rev, 26))
}

/**
 * @param {Matrix} K
 * @param {string} str
 */
function hill(K, str) {
  const inputs = String(str).toUpperCase().split('').filter(isUpperCase)
    .map(char2Offset)
  const P = transpose(getLats(inputs))
  return transpose(multiply(K, P)).map(lat => lat.map(num2char).join('')).join('')
}

hill.inverse = inverse

module.exports = hill
