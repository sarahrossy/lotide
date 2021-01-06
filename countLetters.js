const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍔 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letterCount = {};

//scan through string with for...of loop and add each letter (no spaces) as a key to letterCount{};

  for (letter of string) {
    if (letter !== " ") {
      if (letterCount[letter] === undefined) {
          letterCount[letter] = 0;
        } letterCount[letter] += 1;
      }
  } return letterCount;
};
//initialize each value to 0
//loop through string and count each key
//push results to letterCount {};

console.log(countLetters("This is my string"));

//scan through string and add each letter as a key to letterCount{};
  // you can use for...of loops with strings
//remove spaces
//initialize each value to 0
//loop through string and count each key
//push results to letterCount {};