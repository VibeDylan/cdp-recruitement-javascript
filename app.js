const { data} = require('./data')

const args = process.argv.slice(2)
const filterArg = args.find(a => a.startsWith('--filter='));
const hasCount = args.includes('--count');

if(filterArg && hasCount) {
    // TODO
} else if(filterArg) {
    // TODO
} else if(hasCount) {
    // TODO
} else {
    // TODO
}