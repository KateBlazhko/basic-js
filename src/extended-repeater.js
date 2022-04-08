const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator = (options.separator === undefined) ? '+' :
                      (typeof(options.separator) === "boolean") ? options.separator = String(options.separator) :
                      (options.separator === null) ? options.separator = String(options.separator) : options.separator

  options.addition = (options.addition === undefined) ? '' :
                      (typeof(options.addition) === "boolean") ? options.addition = String(options.addition) :
                      (options.addition === null) ? options.addition = String(options.addition) : options.addition

  let additionNew = options.addition

  if (options.additionRepeatTimes) {
    for (let index = 2; index <= options.additionRepeatTimes; index++) {
      additionNew += (options.additionSeparator || '|') + options.addition
    }
  }

  str = str + additionNew;

  let strNew = str;
  if (options.repeatTimes) {
    for (let index = 2; index <= options.repeatTimes; index++) {
      strNew += options.separator + str
    }
  }
  return strNew
}

module.exports = {
  repeater
};
//$ npm test --test test/extended-repeater.test
