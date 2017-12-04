import { codeOf, isUpperCase } from '../util'

const offset = codeOf('A')

/**
 * 返回处理字符串的函数
 * @param {function} handleChar 处理字符的函数
 */
const map = handleChar => str => String(str).split('').map(handleChar).join('')

/**
 * 凯撒密码加密算法
 */
const caser = map((c) => {
  const C = c.toUpperCase()
  if (!isUpperCase(C)) return c
  const code = (codeOf(C) - offset + 3) % 26 + offset
  return String.fromCharCode(code)
})

/**
 * 凯撒密码解密算法
 */
const decode = map((c) => {
  const C = c.toUpperCase()
  if (!isUpperCase(C)) return c
  const code = (codeOf(C) - offset + 23) % 26 + offset
  return String.fromCharCode(code)
})

export { caser as default, caser as encode, decode }
