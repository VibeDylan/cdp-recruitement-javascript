# Javascript Developer Test

## Overview

A Node.js CLI that filters and counts animals from a nested data structure of Countries > People > Animals.

## Installation

```shell
npm install
```

## Usage

### Filter

Filter animals by name pattern. Empty countries and people are removed from the output.

```shell
node app.js --filter=ry
```

```json
[
  {
    "name": "Uzuzozne",
    "people": [
      {
        "name": "Lillie Abbott",
        "animals": [
          {
            "name": "John Dory"
          }
        ]
      }
    ]
  },
  {
    "name": "Satanwi",
    "people": [
      {
        "name": "Anthony Bruno",
        "animals": [
          {
            "name": "Oryx"
          }
        ]
      }
    ]
  }
]
```

### Count

Append the number of children to each country and person name.

```shell
node app.js --count
```

```json
[
  {
    "name": "Dillauti [5]",
    "people": [
      {
        "name": "Winifred Graham [6]",
        "animals": [
          { "name": "Anoa" },
          { "name": "Duck" },
          { "name": "Narwhal" },
          { "name": "Badger" },
          { "name": "Cobra" },
          { "name": "Crow" }
        ]
      }
    ]
  }
]
```

### Filter + Count

Combine both options:

```shell
node app.js --filter=ry --count
```

## Tests

```shell
npm run test
```

### Coverage

```shell
npm run test:coverage
```

## Requirements

- No external libraries except the testing library (Jest)
- Code available in a Git repository

## Project Structure

```
├── app.js                      # CLI entry point
├── data.js                     # Dataset (Countries > People > Animals)
└── src/
    ├── filter.js               # Filter animals by pattern
    ├── filter.test.js
    ├── count.js                # Append children count to names
    ├── count.test.js
    ├── filterAndCount.js       # Combine filter and count
    └── filterAndCount.test.js
```
