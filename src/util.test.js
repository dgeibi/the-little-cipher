import { mod } from './util'

test('mod', () => {
  expect(mod(0, 1)).toBe(0)
  expect(mod(100, 0)).toBeNaN()
  expect(mod(38, 12)).toBe(2)
  expect(mod(-21, 4)).toBe(3)
  expect(mod(-7, 3)).toBe(2)
})
