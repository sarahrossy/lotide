# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sarahrossy/lotide`

**Require it:**

`const _ = require('@sarahrossy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

### Assert Functions:
* `assertEqual(actual, expected)`: Compares two values (numbers, strings, or Booleans) and asserts a message telling us if they are equal or not.
* `assertArraysEqual(array1, array2)`: Compares two arrays and asserts a message telling us if they are equal or not.
* `assertObjectsEqual(object1, object2)`: Compares two objects and asserts a message telling us if they are equal or not.

### Counting Functions:
* `countLetters(string)`: Counts the letters in a given string.
* `countOnly(allItems, itemsToCount)`: Takes in an array of strings and an object of truthy values denoting the specific subset to count, and returns counts for the subset.

### Equality Functions
* `eqArrays(array1, array2)`: Takes in two arrays, returns true if they are equal and false if they are not.
* `eqObjects(object1, object2)`: Takes in two objects, returns true if they are equal and false if they are not.

### Search Functions
* `findByKeyValue(object, value`: Takes in an object and a value, scans the object and returns the first key which contains the given value.
* `findKey(object, callback)`: Takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value. Returns undefined if no key is found.

### String Function
* `letterPositions(sentence)`: Takes in a string and returns an object of the string's letters and their indexed poitions.

### Array Functions
* `head(array)`: Returns the first element of an array.
* `tail(array)`: Removes the first element from an array and returns the resulting "tail".
* `middle(array)`: Returns the middle element (or middle two elements) of an array.
* `map(array, callback)`: Takes in an array to map and a callback function. Returns a new array based on the resuls of the callback function.
* `takeUntil(array, callback)`: Takes in an array and a callback function and cuts the array when the callback function returns 'false'.
* `without(source, itemsToRemove)`: Takes in an array and an array item(s) to remove. Removes these items from the array.