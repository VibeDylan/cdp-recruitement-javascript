const { filterAndCount } = require('./filterAndCount');

const mockData = [
  {
    name: 'CountryA',
    people: [
      {
        name: 'Alice',
        animals: [{ name: 'Otter' }, { name: 'Canary' }, { name: 'Crow' }],
      },
      {
        name: 'Bob',
        animals: [{ name: 'Dog' }, { name: 'Cat' }],
      },
    ],
  },
  {
    name: 'CountryB',
    people: [
      {
        name: 'Charlie',
        animals: [{ name: 'Elephant' }],
      },
    ],
  },
];

describe('filterAndCount', () => {
  test('filters animals then appends counts to names', () => {
    const result = filterAndCount(mockData, 'ary');
    expect(result[0].name).toBe('CountryA [1]');
    expect(result[0].people[0].name).toBe('Alice [1]');
    expect(result[0].people[0].animals).toEqual([{ name: 'Canary' }]);
  });

  test('removes people and countries with no matching animals', () => {
    const result = filterAndCount(mockData, 'ary');
    expect(result.map(c => c.name)).not.toContain('CountryB [1]');
    expect(result[0].people.map(p => p.name)).not.toContain('Bob [2]');
  });

  test('returns an empty array when no animals match', () => {
    expect(filterAndCount(mockData, 'xyz')).toEqual([]);
  });

  test('does not mutate the original data', () => {
    filterAndCount(mockData, 'r');
    expect(mockData[0].name).toBe('CountryA');
    expect(mockData[0].people[0].name).toBe('Alice');
  });
});
