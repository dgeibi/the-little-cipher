/**
 * @typedef {number[][]} Matrix
 */

function det() {}

function inverse() {}

function adjugate() {}

/**
 * 求转置矩阵
 * @param {Matrix} input
 * @returns {Matrix}
 */
function transpose(input) {
  const cLength = input.length
  const rLength = input[0].length
  const output = []
  for (let i = 0; i < rLength; i += 1) {
    const row = []
    output[i] = row
    for (let j = 0; j < cLength; j += 1) {
      row[j] = input[j][i]
    }
  }
  return output
}

/**
 * 矩阵乘法
 * @param {Matrix} a
 * @param {Matrix} b
 * @returns {Matrix}
 */
function multiply(a, b) {
  const rLength = a.length
  const cLength = b[0].length
  const rows = []
  for (let rIndex = 0; rIndex < rLength; rIndex += 1) {
    const row = []
    rows[rIndex] = row
    for (let cIndex = 0; cIndex < cLength; cIndex += 1) {
      row[cIndex] = a[rIndex].reduce((sum, v, i) => v * b[i][cIndex] + sum, 0)
    }
  }
  return rows
}

/**
 * @param {Matrix} matrix
 * @param {function} fn
 */
function map(matrix, fn) {
  return matrix.map(r => r.map(fn))
}

module.exports = {
  multiply,
  transpose,
  map,
}
