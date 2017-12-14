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
 * 扩展欧几里得算法
 * 参考 https://zh.wikipedia.org/wiki/扩展欧几里得算法
 *
 * 返回 [q, x, y]，q 为 a 和 b 的最大公约数
 *
 * a, b, x, y, q 满足 `a*x + b*y = q`
 * @param {number} a
 * @param {number} b
 * @returns {[number, number, number]}
 */
function gcdEx(a, b) {
  if (b === 0) {
    return [a, 1, 0]
  }
  const [q, x, y] = gcdEx(b, mod(a, b))
  return [q, y, x - Math.floor(a / b) * y]
}

/**
 * 求 a 关于模 n 的逆元
 * @param {number} a
 * @param {number} n
 */
export function modInverse(a, n) {
  // a == 0 无逆元
  if (a === 0) return NaN

  const [q, x] = gcdEx(a, n)

  // a 和 n 不互质 无逆元
  if (q !== 1) return NaN

  return x
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
