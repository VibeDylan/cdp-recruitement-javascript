/**
 * @typedef {{ name: string }} Animal
 * @typedef {{ name: string, animals: Animal[] }} Person
 * @typedef {{ name: string, people: Person[] }} Country
 */


/**
 * Appends the children count to each country and person name.
 * e.g. "Dillauti" → "Dillauti [5]", "Alice" → "Alice [3]"
 *
 * @param {Country[]} data
 * @returns {Country[]}
 */
function countData(data) {
  return data.map(country => ({
    ...country,
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map(person => ({
      ...person,
      name: `${person.name} [${person.animals.length}]`,
    })),
  }));
}

module.exports = {
  countData,
}