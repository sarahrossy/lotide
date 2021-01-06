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
    console.log("The arrays are equal");
  } else console.log("The arrays are not equal");
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let removeMe; // truthy variable, boolean placeholder 
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeMe = true; // looping through and looking for matches
      } 
    } 
    if (!removeMe) {
      newArray.push(source[i]);
    }  
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));


// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);