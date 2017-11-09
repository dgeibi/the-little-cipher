const { pill, inverse } = require('./hill')

test('works', () => {
  const K = [[6, 24, 1], [13, 16, 10], [20, 17, 15]]
  const Km = inverse(K)
  expect(inverse(K)).toEqual([[8, 5, 10], [21, 8, 21], [21, 12, 8]])
  expect(pill(K, 'HELPME')).toBe('TFJSLS')
  expect(pill(Km, 'TFJSLS')).toBe('HELPME')
})
