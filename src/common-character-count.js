const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let clearS2 = s2;
  let arr1 = Array.from(s1)
    arr1.forEach((item) => {
      clearS2 = clearS2.replace(item, '')
      // return clearS2
    })
  console.log(clearS2)
  console.log(s2.length - clearS2.length)
  return s2.length - clearS2.length;
}


module.exports = {
  getCommonCharacterCount
};
