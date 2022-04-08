const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */



class VigenereCipheringMachine {
  constructor(order) {
    if (order === undefined) this.direct = true;
    else this.direct = order
    this.alphabet = this.createTable();
    this.column = this.getColumn()
    this.row = this.alphabet[0]
  }

  createTable() {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const table = []

    for (let i = 0; i < alphabet.length; i++) {
      table.push([])
      for (let j = 0; j < alphabet.length; j++) {
        let offset = alphabet.length - i
        if (alphabet[j + i]) {
          table[i].push(alphabet[j + i])
        } else {

          table[i].push(alphabet[j - offset])
        }
      }
    }
    return table
  }

  getColumn() {
    return this.alphabet.map(item => item[0])
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!');

    key = key.toUpperCase();

    let fullKey = key.padEnd(str.length, key)
    let cryptStr = ''

    let noAlphabet = 0;
    for (let charIndex = 0; charIndex < str.length; charIndex++) {
      if (this.row.indexOf(str[charIndex].toUpperCase()) !== -1) {
        let i = this.row.indexOf(str[charIndex].toUpperCase())
        let j = this.column.indexOf(fullKey[charIndex - noAlphabet])

        cryptStr += this.alphabet[i][j]
      } else {
        cryptStr += str[charIndex]
        noAlphabet++
      }
    }
    if (!this.direct) {
      cryptStr = cryptStr.split('').reverse().join('')
    }
    return cryptStr
  }

  decrypt(cryptStr, key) {
    if (cryptStr === undefined || key === undefined) throw new Error('Incorrect arguments!');

    key = key.toUpperCase();

    let fullKey = key.padEnd(cryptStr.length, key)
    let decryptStr = ''
    let noAlphabet = 0;

    for (let charIndex = 0; charIndex < cryptStr.length; charIndex++) {
      let j = this.column.indexOf(fullKey[charIndex - noAlphabet])
      let i = this.alphabet[j].indexOf(cryptStr[charIndex].toUpperCase())

      if (i !== -1) {
        decryptStr += this.row[i]
      } else {
        decryptStr += cryptStr[charIndex]
        noAlphabet++
      }
    }
    if (!this.direct) {
      decryptStr = decryptStr.split('').reverse().join('')
    }
    return decryptStr
  }
}

module.exports = {
  VigenereCipheringMachine
};
