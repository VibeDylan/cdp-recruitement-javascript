const { filterData } = require('./filter');

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


describe('filterData', () => {
  test('keeps only animals matching the pattern', () => {
    const result = filterData(mockData, 'ary');
    expect(result[0].people[0].animals).toEqual([{ name: 'Canary' }]);
  });

  test('removes people with no matching animals', () => {
    const result = filterData(mockData, 'ary');
    expect(result[0].people.map(p => p.name)).not.toContain('Bob');
  });

  test('removes countries with no matching people', () => {
    const result = filterData(mockData, 'ary');
    expect(result.map(c => c.name)).not.toContain('CountryB');
  });

  test('preserves the original order of results', () => {
    const result = filterData(mockData, 'r');
    expect(result[0].people[0].animals).toEqual([
      { name: 'Otter' },
      { name: 'Canary' },
      { name: 'Crow' },
    ]);
  });

  test('returns an empty array when no animals match', () => {
    expect(filterData(mockData, 'xyz')).toEqual([]);
  });

  test('is case-sensitive', () => {
    expect(filterData(mockData, 'canary')).toEqual([]);
  });
});