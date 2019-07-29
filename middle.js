const eqArrays = require('./eqArrays');

const middleArray = function(arr1) {
  // input: an array and a boolean
  // output:  an array that include the number(s) in the middle of the input array, should be two numbers if arr1 is even, should be 1 number if arr1 is odd
  // if length of arr1 is less than or equal to 2, the output should be an empty array
  let outputArray = [];
  let middleIndex = 0;

  if (arr1.length <= 2) {
    return outputArray;
  } else {
    // see if the input array is even or odd
    if (arr1.length % 2 === 0) {
      middleIndex = (arr1.length / 2) - 1;
      outputArray.push(arr1[middleIndex]);
      middleIndex = (arr1.length / 2);
      outputArray.push(arr1[middleIndex]);
      return outputArray;
    } else {
      middleIndex = Math.ceil((arr1.length / 2) - 1);
      outputArray.push(arr1[middleIndex]);
      return outputArray;
    }
  }
};

module.exports = middleArray;