const {
  multiply, transpose, map, fromLat, det, adjugate, inverse, noob,
} = require('./index')

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

test('fromLat', () => {
  expect(fromLat([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]])
})

test('det', () => {
  expect(det([[2, 3], [1, 4]])).toBe(5)
  expect(det([[1, 1, 1], [1, 2, 3], [1, 5, 1]])).toBe(-8)
})

test('adjugate', () => {
  expect(adjugate([[5, 6], [7, 8]])).toEqual([[8, -6], [-7, 5]])
  expect(adjugate([[-3, 2, -5], [-1, 0, -2], [3, -4, 1]])).toEqual([
    [-8, 18, -4],
    [-5, 12, -1],
    [4, -6, 2],
  ])
})

test('inverse', () => {
  expect(inverse([[3, 2, 1], [3, 1, 5], [3, 2, 3]])).toEqual([
    [1.1666666666666667, 0.6666666666666666, -1.5],
    [-1, -1, 2],
    [-0.5, 0, 0.5],
  ])

  expect(inverse([[5, 6], [7, 8]])).toEqual([[-4, 3], [3.5, -2.5]])

  expect(inverse([[0, 0], [0, 0]])).toBe(noob)
})
