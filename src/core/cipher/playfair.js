import { isUpperCase } from '../util'

/**
 * @typedef {number} transformType
 */

const types = {
  SAME_ROW: 1,
  SAME_CLO: 2,
  CROSS: 3,
}

/**
 * @param {number} code
 */
function findType(code) {
  switch (code) {
    case types.CROSS:
      return '交叉'
    case types.SAME_CLO:
      return '同列'
    case types.SAME_ROW:
      return '同行'
    default:
      return '未知'
  }
}

const FALLBACK1 = 'K'
const FALLBACK2 = 'Z'
const getFallback = c => (c === FALLBACK1 ? FALLBACK2 : FALLBACK1)

/**
 * 根据密码生成矩阵（数组表示）
 * @param {string} secret
 * @returns {string[]}
 */
const toChars = secret => {
  const schars = secret
    .toUpperCase()
    .split('')
    .filter(isUpperCase)

  // prettier-ignore
  return [...new Set([...schars,
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'K',
    'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z',
  ])]
}

const add1 = a => (a + 1) % 5
const reduce1 = a => (a + 4) % 5
const toIJ = index => [Math.floor(index / 5), index % 5]
const toIndex = (i, j) => i * 5 + j
const mvRight = (i, j) => toIndex(i, add1(j))
const mvLeft = (i, j) => toIndex(i, reduce1(j))
const mvDown = (i, j) => toIndex(add1(i), j)
const mvUp = (i, j) => toIndex(reduce1(i), j)

/**
 * 变换
 * @param {[string, string]} pair
 * @param {string[]} chars
 * @param {boolean} decodeMode
 * @return {[string, string, transformType]}
 */
const transform = (pair, chars, decodeMode = false) => {
  const [a, b] = pair
  const [aI, aJ] = toIJ(chars.indexOf(a))
  const [bI, bJ] = toIJ(chars.indexOf(b))

  // 同行
  if (aI === bI) {
    const mv = decodeMode ? mvLeft : mvRight
    return [chars[mv(aI, aJ)], chars[mv(bI, bJ)], types.SAME_ROW]
  }
  // 同列
  if (aJ === bJ) {
    const mv = decodeMode ? mvUp : mvDown
    return [chars[mv(aI, aJ)], chars[mv(bI, bJ)], types.SAME_CLO]
  }
  // 交叉
  return [chars[toIndex(aI, bJ)], chars[toIndex(bI, aJ)], types.CROSS]
}

/**
 * 根据输入生成字符对
 * @param {string[]} inputs
 * @return {[string, string][]}
 */
const getPairs = inputs => {
  const ret = []
  let index = 0
  while (index < inputs.length) {
    const a = inputs[index]
    let b = inputs[index + 1]
    if (a === b || !b) {
      b = getFallback(a)
      index += 1
    } else {
      index += 2
    }
    ret.push([a, b])
  }
  return ret
}

/**
 * 将数组转为矩阵
 * @param {string[]} chars
 * @return {string[][]}
 */
const toSquare = chars => {
  let count = 0
  const square = []
  while (count < 5) {
    const offset = count * 5
    square.push(chars.slice(offset, offset + 5))
    count += 1
  }
  return square
}

/**
 * @typedef {object} diffItem 变化细节
 * @property {string} origin 输入
 * @property {string} result 输出
 * @property {transformType} type 变化类型
 */

/**
 * @param {string} secret 密码
 * @param {string} input 输入
 * @param {boolean} decodeMode 是否为解密模式
 * @return {{ diff: diffItem[], square: string[][] }}
 */
const playfair = (secret, input, decodeMode = false) => {
  const chars = toChars(secret)
  const square = toSquare(chars)
  const inputs = input
    .toUpperCase()
    .replace(/J/g, 'I')
    .split('')
    .filter(isUpperCase)
  const pairs = getPairs(inputs)
  const diff = pairs.map(pair => {
    const [a, b, type] = transform(pair, chars, decodeMode)
    return {
      origin: pair.join(''),
      result: a + b,
      type,
    }
  })
  return {
    diff,
    square,
  }
}

const cipherString = diff => diff.reduce((str, { result }) => str + result, '')
const originalString = diff => diff.reduce((str, { origin }) => str + origin, '')

export { cipherString, originalString, playfair, types, findType }
