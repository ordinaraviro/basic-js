const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(x) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  function UserException(message) {
    this.message = message;
    this.name = "Invalid date!";
 } 
 if (typeof x != 'object') {
  return 'Unable to determine the time of year!'
 }
 const validDate = !isNaN(Date.parse(x))
 if (new Date(x) == 'Invalid Date') {
  throw new UserException("Invalid date!")
}

  if (x.getMonth() === 11 || x.getMonth() === 0 || x.getMonth() === 1) {
    console.log ('1')
  return "winter"
  }
  if (x.getMonth() === 2 || x.getMonth() === 3 || x.getMonth() === 4) {
      console.log ('2')
  return "spring"
  }	
  if (x.getMonth() === 5 || x.getMonth() === 6 || x.getMonth() === 7) {
      console.log ('3')
  return "summer"
  }	
  if (x.getMonth() === 8 || x.getMonth() === 9 || x.getMonth() === 10) {
  console.log ('4')
  return "autumn"
  }

}

module.exports = {
  getSeason
};
