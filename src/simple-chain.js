const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  str : '',

  getLength() {
    return this.str.split('~~').length
  },
  addLink(value) {
    if (this.str.length) {
      this.str = this.str + `~~( ${value} )`
      return this
    } else {
      this.str = this.str + `( ${value} )`
      return this
    }
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position <= 0) || position > this.getLength()) {
      this.str = ''
      throw new Error("You can't remove incorrect link!");
    }
    this.str = this.str.split('~~').filter((item, index) => {
      if (index !== (position - 1)) return item
    }).join('~~');
    return this
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
    let finishStr = this.str
    this.str = ''
    return finishStr
  }
};

module.exports = {
  chainMaker
};
