const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  let middleArray = [];

  if ((array.length - 1) % 2 !== 0) {
    lowMidIndex = Math.floor((array.length - 1) / 2);
    middleArray.push(array[lowMidIndex])
    highMidIndex = lowMidIndex + 1;
    middleArray.push(array[highMidIndex]);
    return middleArray;

  } else if ((array.length - 1) % 2 === 0) {
    midIndex = ((array.length - 1) / 2)
    middleArray.push(array[midIndex]);
    return middleArray;
  }
};

module.exports = middle;

console.log(middle([2, 4, 9, 8])); // length-1 is odd
console.log(middle([1, 6, 2])); // length-1 is even
