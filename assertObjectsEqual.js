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

const assertObjectsEquals = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
};

const obj1 = { a: "1", b: "2" };
const obj2 = { b: "2", a: "1" };
const obj4 = { b: "1", d: "2"};
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEquals(obj1, obj2); // => true
assertObjectsEquals(obj1, obj4); // => false
assertObjectsEquals(obj1, abc); // => false

