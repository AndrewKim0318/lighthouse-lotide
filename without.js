const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const included = function(arr1, arr2) {
  // input : two arrays
  // output : an array of booleans indicating if an element in arr1 is included in arr2
  let outputArray = [];

  //For each element in arr1, check to see if they are in arr2
  // If the element in arr1 is in arr2, do not added that element into the output array
  for (let i = 0; i < arr1.length; i++) {
    let includes = false;
    if (arr2.includes(arr1[i])) {
      includes = true;
    }
    outputArray.push(includes);
  }

  return outputArray;
};

const without = function(arr1, arr2) {
  // input :  two arrays
  // output:  an altered array that removes all elements that are in arr2 from arr1

  let includedArray = included(arr1, arr2);
  let outputArray = [];

  for (let i = 0; i < includedArray.length; i++) {
    if (includedArray[i] === false) {
      outputArray.push(arr1[i]);
    }
  }
  
  return outputArray;
};

module.exports = included, without;
// console.log(without([1,2,3,1], [1,2]));
// console.log(without([1,2,3],[1]));

// let words = ["hello", "world", "lighthouse"];
// console.log(without(["hello", "world", "lighthouse"], ["lighthouse", "hello"]));
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);