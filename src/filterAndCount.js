const { filterData } = require('./filter');
const { countData } = require('./count');

/**
 * @typedef {{ name: string }} Animal
 * @typedef {{ name: string, animals: Animal[] }} Person
 * @typedef {{ name: string, people: Person[] }} Country
 */

/**
 * Filters by pattern then appends counts to names.
 *
 * @param {Country[]} data
 * @param {string} pattern
 * @returns {Country[]}
 */
function filterAndCount(data, pattern) {
  return countData(filterData(data, pattern));
}

module.exports = { filterAndCount };
