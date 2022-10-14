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
  let str = n.toString()
  let arr = Array.from(str)
  for (let i = 0; i <= arr.length; i++){
    if(arr[i]<arr[i+1]){
      str = str.replace(arr[i], '')
      console.log(+str)
      return +str
    }
  }
  arr.pop()
  let x = arr.join('')
  return +x
  console.log(+x)
  
}

module.exports = {
  deleteDigit
};
