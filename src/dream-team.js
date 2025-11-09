const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if (!Array.isArray(names)) return false;

  const letters = names
    .filter(name => typeof name === 'string')
    .map(name => name.trim()[0].toUpperCase())
    .sort();

  return letters.length ? letters.join('') : false;
}

module.exports = {
  createDreamTeam
};
