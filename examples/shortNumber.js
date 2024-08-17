const { shortNumber } = require('mzrdjs');

const myNumber = 28475;
const myNumber2 = 28000;

const shortNum = shortNumber(myNumber);
const shortNum2 = shortNumber(myNumber2);

console.log(shortNum); // 28.4k
console.log(shortNum2); // 28k