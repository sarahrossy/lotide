const eqArrays = require('./eqArrays');

const assertArraysEquals = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else console.log(`❌❌❌ Assertion Failed: ${a} !== ${b}`);
};

module.exports = assertArraysEquals;