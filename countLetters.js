const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍔 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letterCount = {};
  for (letter of string) {
    if (letter !== " ") {
      if (letterCount[letter] === undefined) {
          letterCount[letter] = 0;
        } letterCount[letter] += 1;
      }
  } return letterCount;
};


console.log(countLetters("This is my string"));