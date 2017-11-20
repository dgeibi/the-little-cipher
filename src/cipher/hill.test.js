import hill, { inverse } from './hill'

const K = [[6, 24, 1], [13, 16, 10], [20, 17, 15]]
const Km = inverse(K)

test('inverse', () => {
  expect(Km).toEqual([[8, 5, 10], [21, 8, 21], [21, 12, 8]])
  expect(inverse([[0, 0], [0, 0]])).toEqual(null)
  expect(inverse([[0, 0, 0], [0, 0, 0], [0, 0, 0]])).toEqual(null)
})

test('works', () => {
  expect(hill(K, 'HELPME')).toBe('TFJSLS')
  expect(hill(K, '')).toBe('')
  expect(hill(K, '123')).toBe('')
  expect(hill(Km, 'TFJSLS')).toBe('HELPME')
})

test('postfix', () => {
  expect(hill(K, 'Goodbye')).toBe('WAWOJVBAK')
  expect(hill(Km, 'WAWOJVBAK')).toBe('GOODBYEXX')
})
