const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return Math.max(...arr.map(item => {

      let i = 1;
      if (Array.isArray(item)) {
        if (!item.length) i++
        else i += this.calculateDepth(item)
      }
      return i

    }));
  }
}

module.exports = {
  DepthCalculator
};
