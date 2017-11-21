import { codeOf, isUpperCase } from '../util'

const types = {
  SAME_ROW: 1,
  SAME_CLO: 2,
  CROSS: 3,
}

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
 * @param {string} secret
 */
const toChars = (secret) => {
  const schars = secret.toUpperCase().split('').filter(isUpperCase)

  for (let i = 0, offset = codeOf('A'); i < 26; i += 1) {
    const char = String.fromCharCode(offset + i)
    if (char !== 'J') schars.push(char)
  }
  return [...new Set(schars)]
}

const add1 = a => (a + 1) % 5
const toIJ = index => [Math.floor(index / 5), index % 5]
const toIndex = (i, j) => i * 5 + j
const mvRight = (i, j) => toIndex(i, add1(j))
const mvDown = (i, j) => toIndex(add1(i), j)

/**
 *
 * @param {number} b
 */
const transform = (pair, chars) => {
  const [a, b] = pair
  const [aI, aJ] = toIJ(chars.indexOf(a))
  const [bI, bJ] = toIJ(chars.indexOf(b))

  // 同行
  if (aI === bI) {
    return [chars[mvRight(aI, aJ)], chars[mvRight(bI, bJ)], types.SAME_ROW]
  }
  // 同列
  if (aJ === bJ) {
    return [chars[mvDown(aI, aJ)], chars[mvDown(bI, bJ)], types.SAME_CLO]
  }
  // 交叉
  return [chars[toIndex(aI, bJ)], chars[toIndex(bI, aJ)], types.CROSS]
}

/**
 * @param {string[]} inputs
 * @return {[string, string][]}
 */
const getPairs = (inputs) => {
  if (inputs.length < 1) return []
  if (inputs.length === 1) {
    const c = inputs[0]
    return [[c, getFallback(c)]]
  }
  const a = inputs[0]
  const b = inputs[1]
  if (a === b) {
    const fallback = getFallback(a)
    return [[a, fallback]].concat(getPairs(inputs.slice(1)))
  }
  return [[a, b]].concat(getPairs(inputs.slice(2)))
}

const toSquare = (chars) => {
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
 * @param {string} secret
 * @param {string} input
 */
const playfair = (secret, input) => {
  const chars = toChars(secret)
  const square = toSquare(chars)
  const inputs = input.toUpperCase().replace(/J/g, 'I').split('').filter(isUpperCase)
  const pairs = getPairs(inputs)
  const diff = pairs.map((pair) => {
    const [a, b, type] = transform(pair, chars)
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

const cipherString = results => results.reduce((str, { result }) => str + result, '')
const originalString = results => results.reduce((str, { origin }) => str + origin, '')

export { cipherString, originalString, playfair, types, findType }
