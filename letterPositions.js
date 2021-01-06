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

const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(true);
  } else console.log(false);
};

const letterPositions = function(sentence) {
  const results = {};

// loop through sentence to find the index of each letter
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (!results[letter]) { // if result does not have letter as a k/v pair, add it as an array
        results[letter] = [];
      }
      results[letter].push(i); //letter has to be initialized as an empty array
    }
  } return results;
};

console.log(letterPositions("helllllloooooo o"));
// assertArraysEqual(letterPositions("hello").e, [1]);
//return all the indices (zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

/* "sentences" =>
results
{s: [0, 8],
e: [1],
etc }

*/