const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍔 Assertion failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true
};

const obj1 = { a: "1", b: "2" };
const obj2 = { b: "2", a: "1" };
const obj4 = { c: "1",  d: "2" };
console.log("equal objects round 1" + eqObjects(obj1, obj2)); // => true
console.log("equal objects round 1" + eqObjects(obj1, obj4)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log("equal objects round 2" + eqObjects(obj1, abc)); // => false