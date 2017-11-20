import { codeOf, isUpperCase } from '../util'

const offset = codeOf('A')

const caser = str =>
  String(str)
    .split('')
    .map((c) => {
      const C = c.toUpperCase()
      if (!isUpperCase(C)) return c
      const code = (codeOf(C) - offset + 3) % 26 + offset
      return String.fromCharCode(code)
    })
    .join('')

export default caser
