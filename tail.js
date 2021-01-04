const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍔 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(actual) {
  actual.shift();
  return actual;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Hi", "Hi");
// assertEqual(6, 7);