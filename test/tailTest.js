const tail = require('../tail');
const assertEqual = require('../assertEqual');

const resultLength = tail(["Hello", "Lighthouse", "Labs"]).length;
const expectedLength = ["Lighthouse", "Labs"].length
assertEqual(resultLength, expectedLength);