export const isUpperCase = c => c >= 'A' && c <= 'Z'

export const codeOf = str => String(str).charCodeAt(0)

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export function mod(x, y) {
  if (y === 0) return NaN
  let m = x % y
  if (m < 0) {
    m = Math.abs(y) + m
  }
  return m
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const gcd = (a, b) => (b === 0 ? a : gcd(b, mod(a, b)))

/**
 * @param {number} num
 * @param {number} m
 */
export function modInverse(num, m) {
  if (num === 0 || gcd(num, m) > 1) return NaN
  let i = 1
  while (mod(i * num, m) !== 1) {
    i += 1
  }
  return i
}

export function repeat(time, fn) {
  let cnt = 0
  const rets = []
  while (cnt < time) {
    rets.push(fn())
    cnt += 1
  }
  return rets
}

export function isPlainFile(file) {
  return /text|javascript|html|css|xml|json/.test(file.type || file.mimetype)
}

export function plainPath(str) {
  const ret = str.replace(/\/*$/, '')
  return ret === '' ? '/' : ret
}
