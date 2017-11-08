const caser = require('./caser')

test('works', () => {
  expect(caser('abC')).toBe('DEF')
  expect(caser('xyz')).toBe('ABC')
  expect(caser('你真Good')).toBe('你真JRRG')
})
