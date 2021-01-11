const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([2, 4, 9, 8]), [4, 9]); // length-1 is odd
assertArraysEqual(middle([1, 6, 2]), [6]); // length-1 is even
