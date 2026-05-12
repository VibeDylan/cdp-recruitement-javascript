const { data } = require('./data');
const { filterData } = require('./src/filter');
const { countData } = require('./src/count');
const { filterAndCount } = require('./src/filterAndCount');

const args = process.argv.slice(2);
const filterArg = args.find(a => a.startsWith('--filter='));
const hasCount = args.includes('--count');

if (filterArg && hasCount) {
  const pattern = filterArg.split('=')[1];
  console.log(JSON.stringify(filterAndCount(data, pattern), null, 2));
} else if (filterArg) {
  const pattern = filterArg.split('=')[1];
  console.log(JSON.stringify(filterData(data, pattern), null, 2));
} else if (hasCount) {
  console.log(JSON.stringify(countData(data), null, 2));
} else {
  console.error('Usage: node app.js --filter=<pattern> | --count | --filter=<pattern> --count');
  process.exit(1);
}
