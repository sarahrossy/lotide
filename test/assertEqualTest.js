const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hi", "Hi");
assertEqual(6, 7);

const head = require('../head');

assertEqual(head([3,5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const tail = require('../tail');

const resultLength = tail(["Hello", "Lighthouse", "Labs"]).length;
console.log(resultLength);
const expectedLength = ["Lighthouse", "Labs"].length
assertEqual(resultLength, expectedLength);