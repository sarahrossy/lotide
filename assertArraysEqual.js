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
    console.log(true);
  } else console.log(false);
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 4, 3], [1, 2, 3]));
assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]) // => false