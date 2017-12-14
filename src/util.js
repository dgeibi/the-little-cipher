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
 * 求 num 关于模 m 的逆元
 * @param {number} a
 * @param {number} n
 */
export function modInverse(a, n) {
  // a == 0 或 a 和 n 不互质，无逆元
  if (a === 0 || gcd(a, n) > 1) return NaN

  // 硬算
  let i = 1
  while (mod(i * a, n) !== 1) {
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
