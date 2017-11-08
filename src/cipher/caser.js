const alre = /[a-zA-Z]/
const offset = 'A'.charCodeAt(0)

const caser = str =>
  String(str)
    .split('')
    .map((c) => {
      if (!alre.test(c)) return c
      const C = c.toUpperCase()
      const code = (C.charCodeAt(0) - offset + 3) % 26 + offset
      return String.fromCharCode(code)
    })
    .join('')

module.exports = caser
