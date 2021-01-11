const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns [4, 9]", () => {
    assert.deepEqual(middle([2, 4, 9, 8]), [4, 9]);
  });

  it("returns [6]", () => {
    assert.deepEqual(middle([1, 6, 2]), [6]);
  });
});




assertArraysEqual(middle([2, 4, 9, 8]), [4, 9]); // length-1 is odd
assertArraysEqual(middle([1, 6, 2]), [6]); // length-1 is even
