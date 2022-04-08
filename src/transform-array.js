const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arr)
  const control = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const newArr = arr.slice()

  for (let index = 0; index < newArr.length; index++) {
    console.log(newArr)
    if (control.includes(newArr[index])) {
      switch (newArr[index]) {
        case '--discard-prev':
          if (index > 0) {
            newArr.splice(index - 1, 2, '')
          } else {
            newArr.splice(index, 1, '')
          }
          break;

        case '--double-next':
          newArr[index + 1] && newArr.splice(index, 1, newArr[index + 1])
          !newArr[index + 1] && newArr.splice(index, 1, '')
          break;

        case '--double-prev':
          if (index > 0) newArr.splice(index, 1, newArr[index - 1])
          else newArr.splice(index, 1, '')
          break;

        case '--discard-next':
          if (newArr[index + 1]) {
            newArr.splice(index, 2, '')
          } else {
            newArr.splice(index, 1, '')
          }
          break;
      }
    }
  }
  return newArr.filter(item => item !== '')

}

module.exports = {
  transform
};
