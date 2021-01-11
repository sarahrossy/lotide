const assertEqual = require('./assertEqual')

const tail = function(actual) {
  let copyArr = actual;
  copyArr.shift();
  return copyArr;
};

console.log(tail(["Hello", "Lighthouse", "Labs"]));

module.exports = tail;