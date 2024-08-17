// Timestamp (Milliseconds to Seconds)

const { timestamp } = require('mzrdjs');

const myTimes = Date.now();
const toTimestamp = timestamp(myTimes);

console.log(toTimestamp); // 1706218604 (Milliseconds to Seconds)