import caser, { decode } from './caser'

test('works', () => {
  expect(caser('abC')).toBe('DEF')
  expect(caser('xyz')).toBe('ABC')
  expect(caser('你真Good')).toBe('你真JRRG')
})

test('decode works', () => {
  expect(decode('abc')).toBe('XYZ')
  expect(decode('def')).toBe('ABC')
  expect(decode('你真JRRG')).toBe('你真GOOD')
})
