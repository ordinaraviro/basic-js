const { NotImplementedError } = require('../lib');

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

  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.addition) {
    options.addition = ''
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  let additionPart = options.addition
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additionPart = additionPart + options.additionSeparator + options.addition
  }
  let answerPart = str + additionPart
  let answer = answerPart
  for (let i = 1; i < options.repeatTimes; i++) {
    answer = answer + options.separator + answerPart
  }
  return answer
}

module.exports = {
  repeater
};
