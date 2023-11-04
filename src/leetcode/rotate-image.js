/* eslint-disable no-param-reassign */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const matrixLen = matrix.length
  const matrixLastI = matrixLen - 1
  const maxI = Math.floor(matrixLen / 2)
  for (let i = 0; i < maxI; i += 1) {
    for (let j = i; j < matrixLastI - i; j += 1) {
      const leftTop = matrix[i][j]
      const leftBottom = matrix[matrixLastI - j][i]
      const rightBottom = matrix[matrixLastI - i][matrixLastI - j]
      const rightTop = matrix[j][matrixLastI - i]
      // 0 0 left top <- left bottom
      matrix[i][j] = leftBottom
      // 0 1 left bottom <- right bottom
      matrix[matrixLastI - j][i] = rightBottom
      // right bottom <- right top
      matrix[matrixLastI - i][matrixLastI - j] = rightTop
      // right top <- left top
      matrix[j][matrixLastI - i] = leftTop
    }
  }
}

export default rotate
