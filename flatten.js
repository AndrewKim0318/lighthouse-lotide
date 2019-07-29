const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  //input: an array that contain nested array
  // output: an array that removes the nested array

  let outputArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      outputArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        outputArray.push(array[i][j]);
      }
    }
  }

  return outputArray;

};

module.exports = flatten;
