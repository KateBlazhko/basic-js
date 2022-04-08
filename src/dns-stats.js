const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {}
  let DNS = domains.map(item => '.' + item.split('.').reverse().join('.')).join('\n')

  let str = '^\\.\\w+';
  let regExp = new RegExp(`${str}`, 'gm');

  while (regExp.test(DNS)) {
    DNS.match(regExp).forEach(item => {
      if (result[item]) {
        result[item]++
      } else {
        result[item] = 1;
      }
    });

    str += '\\.\\w+';
    regExp = new RegExp(`${str}`, 'gm');
  }
  return result
}

module.exports = {
  getDNSStats
};
