const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns true", () => {

    const resultLength = tail(["Hello", "Lighthouse", "Labs"]).length;
    const expectedLength = ["Lighthouse", "Labs"].length

    assert.strictEqual(assertEqual(resultLength, expectedLength)
    );
  });
});
