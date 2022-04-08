const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {

  return names.map((item, index, array) => {
      let coupleIndex = 0
      let i = 1

      while (coupleIndex !== -1) {
        coupleIndex = array.indexOf(item, index + 1);
        if (coupleIndex !== -1) {
          array[coupleIndex] += `(${i})`
          i++
        }
      }

      return item
    });

 }

module.exports = {
  renameFiles
};
