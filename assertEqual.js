const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀 Assertion Passed: " + actual + " === " + expected)
  } else {
    console.log("🍔 Assertion failed: " + actual + 
    " !== " + expected);
  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hi", "Hi");
assertEqual(6, 7);