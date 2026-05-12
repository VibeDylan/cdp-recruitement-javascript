const { countData } = require('./count');

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

describe('countData', () => {
    test('appends people count to country names', () => {
        const result = countData(mockData);
        expect(result[0].name).toBe('CountryA [2]');
        expect(result[1].name).toBe('CountryB [1]');
    })

    test('appends animal count to the person names', () => {
        const result = countData(mockData);
        expect(result[0].people[0].name).toBe('Alice [3]');
        expect(result[0].people[1].name).toBe('Bob [2]');
        expect(result[1].people[0].name).toBe('Charlie [1]');
    })

    test('does not mutate the original data', () => {
        countData(mockData);
        expect(mockData[0].name).toBe('CountryA');
        expect(mockData[0].people[0].name).toBe('Alice');
    });

    test('leaves the animals list unchanged', () => {
        const result = countData(mockData);
        expect(result[0].people[0].animals).toEqual([
            { name: 'Otter' },
            { name: 'Canary' },
            { name: 'Crow' },
        ]);
    });
});