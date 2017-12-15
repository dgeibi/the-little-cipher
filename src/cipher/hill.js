import { transpose, multiply, map, det, adjugate } from '../matrix'
import { isUpperCase, mod, modInverse, codeOf } from '../util'

const M = 3
const ACode = codeOf('A')
const XOffset = codeOf('X') - ACode

/**
 * @param {number} x
 * @returns {number}
 */
const mod26 = x => mod(x, 26)

/**
 * 将偏移量数组按顺序每3个元素分为1组
 * @typedef {number[]} Lat 长度为 3 的 number 数组
 * @typedef {Lat[]} Lats
 *
 * @param {number[]} offsets 存放字母的偏移量
 * @returns {Lats}
 */
const getLats = (offsets) => {
  const lats = []
  let index
  for (index = 0; index + M - 1 < offsets.length; index += M) {
    lats.push(offsets.slice(index, index + M))
  }

  // 不够 M 个， 需要补 X
  if (index < offsets.length) {
    const last = offsets.slice(index)
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
 * 求矩阵模 26 的逆
 * @typedef {number[][]} Matrix
 * @param {Matrix} key
 * @returns {Matrix}
 */
function inverse(key) {
  const detK = mod(det(key), 26)
  const rev = modInverse(detK, 26)
  if (Number.isNaN(rev)) return null
  const adj = adjugate(key)
  return map(adj, x => mod(x * rev, 26))
}

/**
 * @param {Matrix} K 密钥矩阵
 * @param {string} plaintext 原始字符串
 * @return {string}
 */
function hill(K, plaintext) {
  const offsets = String(plaintext).toUpperCase().split('').filter(isUpperCase)
    .map(char2Offset)
  const P = transpose(getLats(offsets))
  return P ? transpose(multiply(K, P)).map(lat => lat.map(num2char).join('')).join('') : ''
}

hill.inverse = inverse

export { hill as default, inverse }
