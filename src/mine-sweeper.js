const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const results = matrix.map(row => row.map(item => 0))
  //console.log(results)
  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        (j !== 0) && (results[i][j - 1] += 1);
        (j !== 0) && (results[i + 1][j - 1] += 1);
        (i !== 0) && (j !== 0) && (results[i - 1][j - 1] += 1);
        (i !== 0) && (results[i - 1][j] += 1);
        (i !== 0) && (results[i - 1][j + 1] += 1);
        (!!!results[i + 1][j + 1]) && (results[i + 1][j + 1] += 1);
        (!!!results[i][j + 1]) && (results[i][j + 1] += 1);
        (!!!results[i + 1][j]) && (results[i + 1][j] += 1);
      }
    }

  }
    return results

}

module.exports = {
  minesweeper
};
