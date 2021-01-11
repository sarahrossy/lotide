const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([3,5,6,7]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");