const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arr) {
  return arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a + countCats(b)
    } else {
      return (/^\^{2}$/.test(b)) ? a = a + 1 : a
    }
  }, 0)
}

module.exports = {
  countCats
};
