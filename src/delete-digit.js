const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = ('' + n).split('').map((item, index, array) => {
    let arr = array.slice()
    arr.splice(index, 1)
    return arr.join('')
  })

  return Math.max(...arr)

}

module.exports = {
  deleteDigit
};
