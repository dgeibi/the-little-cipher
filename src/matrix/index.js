/**
 * @typedef {number[][]} Matrix
 * @typedef {number[]} Lat
 */

/**
 * @param {Lat} lat
 * @returns {Matrix}
 */
function fromLat(lat) {
  const length = Math.sqrt(lat.length)
  let i = 0
  const matrix = []
  while (i < length) {
    const offset = i * length
    matrix.push(lat.slice(offset, offset + length))
    i += 1
  }
  return matrix
}

/**
 * 求余子矩阵
 * @param {Matrix} matrix
 * @param {number} mi
 * @param {number} mj
 * @returns {Matrix}
 */
function restOf(matrix, mi, mj) {
  const rest = []
  for (let i = 0; i < matrix.length; i += 1) {
    if (mi !== i) {
      const colLength = matrix[i].length
      const row = []
      rest.push(row)
      for (let j = 0; j < colLength; j += 1) {
        if (mj !== j) {
          row.push(matrix[i][j])
        }
      }
    }
  }
  return rest
}

/**
 * 求行列式
 * @param {Matrix} matrix
 */
function det(matrix) {
  if (matrix.length === 1) return matrix[0][0]
  if (matrix.length === 2) {
    const [[a, b], [c, d]] = matrix
    return a * d - b * c
  }
  let sum = 0
  for (let j = 0, sign = 1; j < matrix.length; j += 1, sign *= -1) {
    sum += matrix[0][j] * det(restOf(matrix, 0, j)) * sign
  }
  return sum
}

function adjugate(matrix) {
  const c = new Array(matrix.length)
  for (let i = 0; i < matrix.length; i += 1) {
    c[i] = new Array(matrix.length)
    for (let j = 0; j < matrix.length; j += 1) {
      const sign = (i + j) % 2 === 0 ? 1 : -1
      c[i][j] = det(restOf(matrix, i, j)) * sign
    }
  }
  return transpose(c)
}

/**
 * 求逆矩阵
 * @param {Matrix} matrix
 * @returns {?Matrix}
 */
function inverse(matrix) {
  const de = det(matrix)
  if (Number(de.toFixed(7)) === 0) return null
  const inv = map(adjugate(matrix), x => x / de)
  return inv
}

/**
 * 求转置矩阵
 * @param {Matrix} input
 * @returns {Matrix}
 */
function transpose(input) {
  const cLength = input && input.length
  const rLength = input[0] && input[0].length
  if (rLength > 0) {
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
  return null
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

export { multiply, transpose, map, fromLat, det, adjugate, inverse }
