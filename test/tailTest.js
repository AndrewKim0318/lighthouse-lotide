const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

//TEST CODE
console.log(assertArraysEqual(tail([5,7]), [7]));
console.log(assertArraysEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]));