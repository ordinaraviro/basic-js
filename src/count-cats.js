const { NotImplementedError } = require('../lib');

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
function countCats(x) {
  let flag = 0;
  const counter = a => {
    if (a == '^^') {
      flag++
    }
  };
  for (let i = 0; i < x.length; i++) {
    x[i].forEach(counter)
  }
  console.log (flag)
  return flag
}

module.exports = {
  countCats
};
