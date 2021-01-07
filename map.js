/*

Take in: An array to map, A callback function
Return: a new array based on the results of the callback function.

*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      } 
    }
  } else {
    return false;
  }
  return true;
}; 

const assertArraysEquals = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`Assertion Passed: ${a} === ${b}`);
  } else console.log(`Assertion Failed: ${a} !== ${b}`);
};

const results1 = map(words, word => word[0]);
console.log(results1);