function getMatrixElementsSum(matrix) {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        res += matrix[i][j];
      } else if (matrix[i - 1][j] !== 0) {
        res += matrix[i][j];
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;