const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍔 Assertion failed: ${actual} !== ${expected}`);
  }
};

// const findKeyByValue = function(object, value) {
//   // loop through object keys
//   for (value of object) {
//     if (object[value]) {
//       return object.key[0]
//     } else return undefined;
//   }
// };

// Object.keys(object)

const findKeyByValue = function(obj, value){
  let keys = Object.keys(obj) 
  for(let key of keys){ //loop through all keys
    if(obj[key] === value){ //if the values match, return the key
      return key
    }
  }
  return //return undefined
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// function findKeyByValue which takes in an object and a value

// scan the object and return the first key which contains the given value.

// If no key with that given value is found, then it should return undefined.