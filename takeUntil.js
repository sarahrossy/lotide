const takeUntil = function(array, callback) {
  let result = [];
  for (let entry of array) {
    if (callback(entry)) {
      break;
    } else {
      result.push(entry);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, entry => entry < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* expected output:
[ 1, 2, 5, 7, 2 ]
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

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