const { codeOf, isUpperCase } = require('../util')

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

module.exports = caser
