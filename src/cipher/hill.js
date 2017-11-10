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

const getLats = (inputs) => {
  const groups = []
  let index
  for (index = 0; index + M - 1 < inputs.length; index += M) {
    groups.push(inputs.slice(index, index + M))
  }
  if (index < inputs.length) {
    const last = inputs.slice(index)
    let left = M - last.length
    while (left) {
      left -= 1
      last.push(XOffset)
    }
    groups.push(last)
  }
  return groups
}

/**
 * @param {Matrix} key
 * @param {Lat} lat
 * @param {Lat}
 */
const encode = (key, lat) => {
  const m = transpose([lat])
  const outLat = transpose(multiply(key, m))[0]
  return outLat.map(x => mod(x, 26))
}

const char2Offset = x => codeOf(x) - ACode
const offset2Char = c => String.fromCharCode(c + ACode)

/**
 * @param {Matrix} key
 */
function inverse(key) {
  const detK = mod(det(key), 26)
  const rev = modInverse(detK, 26)
  if (Number.isNaN(rev)) return noob
  const adj = adjugate(key)
  return map(adj, x => mod(x * rev, 26))
}

/**
 * @param {Matrix} key
 * @param {string} str
 */
function hill(key, str) {
  const inputs = String(str).toUpperCase().split('').filter(isUpperCase)
    .map(char2Offset)
  return getLats(inputs).map(lat => encode(key, lat).map(offset2Char).join('')).join('')
}

hill.inverse = inverse

module.exports = hill
