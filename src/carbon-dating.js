const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(x) {
  if (!x || typeof(x) !== 'string' || +x == NaN || +x <= 0 || +x > MODERN_ACTIVITY 
  || x < 0 || x > HALF_LIFE_PERIOD || isNaN(+x)) {
    return false
  }
  let answer
  answer = Math.ceil(Math.log(MODERN_ACTIVITY / x) / (0.693 / HALF_LIFE_PERIOD))
  console.log (answer)
  return answer

}

module.exports = {
  dateSample
};
