const { playfair, originalString, cipherString } = require('./playfair')

test('repeat', () => {
  const { diff, square } = playfair('god', 'qq')
  expect(originalString(diff)).toBe('QKQK')
  expect(cipherString(diff)).toBe('VQVQ')
  expect(diff).toEqual([
    { origin: 'QK', result: 'VQ', type: 2 },
    { origin: 'QK', result: 'VQ', type: 2 },
  ])
  expect(square).toEqual([
    ['G', 'O', 'D', 'A', 'B'],
    ['C', 'E', 'F', 'H', 'I'],
    ['K', 'L', 'M', 'N', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
  ])
})

test('cross', () => {
  const { diff } = playfair('god', 'ft')
  expect(diff).toEqual([{ origin: 'FT', result: 'HS', type: 3 }])
})

test('cross', () => {
  const { diff } = playfair('god', 'mp')
  expect(diff).toEqual([{ origin: 'MP', result: 'NK', type: 1 }])
})

test('fallback2', () => {
  const { diff } = playfair('god', 'kkc')
  expect(diff).toEqual([
    { origin: 'KZ', result: 'PV', type: 3 },
    { origin: 'KC', result: 'QK', type: 2 },
  ])
})
