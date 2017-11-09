/**
 * @typedef {number[][]} Matrix
 * @typedef {number[]} Lat
 */
const {
  transpose, multiply, map, det, adjugate,
} = require('../matrix')
const { isUpperCase } = require('../util')

const M = 3
const getGroup = (inputs) => {
  const groups = []
  let index
  for (index = 0; index + M - 1 < inputs.length; index += M) {
    groups.push(inputs.slice(index, index + M))
  }
  if (index < inputs.length) {
    const last = inputs.slice(index)
    let left = M - last.length
    const x = 'x'.charCodeAt(0)
    while (left) {
      left -= 1
      last.push(x)
    }
    groups.push(last)
  }
  return groups
}

function mod(x, y) {
  const my = Math.abs(y)
  if (my === 0) return null
  if (x >= 0) return x % y
  const px = -x
  return Math.ceil(px / y) * y + x
}

function modInverse(num, m) {
  let i = 1
  while (mod(i * num, m) !== 1) {
    i += 1
  }
  return i
}

/**
 *
 * @param {Matrix} key
 */
function inverse(key) {
  const detK = mod(det(key), 26)
  const rev = modInverse(detK, 26)
  const adj = adjugate(key)
  return map(adj, x => mod(x * rev, 26))
}

/**
 *
 * @param {Matrix} key
 * @param {Lat} lat
 */
const enc = (key, lat) => {
  const m = transpose([lat])
  const outLat = transpose(multiply(key, m))[0]
  return outLat.map(x => mod(x, 26))
}

const ACode = 'A'.charCodeAt(0)
const getOffset = x => x.charCodeAt(0) - ACode

/**
 * @param {Matrix} key
 * @param {string} str
 */
const pill = (key, str) => {
  const groups = getGroup(String(str).toUpperCase().split('').filter(isUpperCase)
    .map(getOffset))
  return groups.map(g => enc(key, g).map(c => String.fromCharCode(c + ACode)).join('')).join('')
}

module.exports = {
  inverse,
  pill,
}
