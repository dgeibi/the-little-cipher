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
 * 求 a 关于模 n 的逆元
 *
 * 基于扩展欧几里得算法 https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
 *
 * @param {number} a
 * @param {number} n
 */
export function modInverse(a, n) {
  // a == 0 无逆元
  if (a === 0) return NaN

  let t = 0
  let newt = 1
  let r = n
  let newr = a

  while (newr !== 0) {
    const quotient = Math.floor(r / newr)
    const oldt = t
    t = newt
    newt = oldt - quotient * t
    const oldr = r
    r = newr
    newr = oldr - quotient * r
  }

  // a 和 n 不互质 无逆元
  if (r !== 1) return NaN
  if (t < 0) {
    t = t + n
  }

  return t
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
