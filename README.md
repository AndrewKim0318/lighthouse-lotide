# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs and had little assistance from @ScottRoberts0 during refactoring and creating index.js while paired up for pair programming. 

## Usage

**Install it:**

`npm install @kimwj0318/lotide`

**Require it:**

`const _ = require('@kimwj0318/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head : given an array, get the first element within the array
* tail : given an array, return an array without the first element of the original array
* middle : given an array, return the elements in the middle of the array
* assertArraysEqual : given two arrays, evaluate if they are equal or not
* assertEqual : given two inputs, evaluate if they are equal or not
* assertObjectsEqual : given two objects, evaluate if they are equal or not
* countLetters : given a string,create an object with letters as keys which equate to values indicating how many the letter appears in the string
* countOnly : given an array of items and an object referring to what should be counted, count how many times the object element occurs in the array of items
* eqArrays : given two arrays, check if they are equal
* eqObjects : given two objects, check if they are equal
* findKey : given an object and a condition, find the key where the value satisfies the condition
* findKeyByValue : given an object and a value, find the key corresponding to the value
* flatten : given a nested array, remove all nested arrays
* letterPositions : given a string, return an object indicating the index of all the letters in the string
* map : given an array and a condition, modify each element to fulfill the given condition
* takeUntil : given an array and a condition, create a new array with the elements starting from index[0] of the original array until a certain element does not satisfy the condition provided.
* without : given two arrays, modify array 1 to remove all elements that are in both array 1 and array 2