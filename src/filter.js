/**
 * @typedef {{ name: string }} Animal
 * @typedef {{ name: string, animals: Animal[] }} Person
 * @typedef {{ name: string, people: Person[] }} Country
 */

/**
 * Filters countries, people and animals by a pattern on animal names.
 * Countries and people with no remaining animals are removed.
 *
 * @param {Country[]} data
 * @param {string} pattern
 * @returns {Country[]}
 */
function filterData(data, pattern) {
    return data.map(country => ({
        ...country,
        people: country.people.map(person => ({
            ...person,
            animals: person.animals.filter(animal => animal.name.includes(pattern))
        })).filter(person => person.animals.length > 0)
    }))
    .filter(country => country.people.length > 0);
}

module.exports = {
    filterData,
}