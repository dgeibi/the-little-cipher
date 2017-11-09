const { multiply, transpose, map } = require('./hillm3')

test('transpose', () => {
  expect(transpose([[1, 2]])).toEqual([[1], [2]])
  expect(transpose([[1, 2], [3, 4]])).toEqual([[1, 3], [2, 4]])
})

test('multiply', () => {
  expect(multiply([[1]], [[2]])).toEqual([[2]])
  expect(multiply([[1, 3], [2, 4]], [[6, 4], [2, 9]])).toEqual([[12, 31], [20, 44]])

  expect(multiply([[1, 3, 3], [2, 4, 9]], [[6, 4], [2, 9], [99, 100]])).toEqual([
    [309, 331],
    [911, 944],
  ])
})

test('map', () => {
  expect(map([[1, 2], [4, 6]], x => x + 1)).toEqual([[2, 3], [5, 7]])
})
